import React, {useState, useEffect} from 'react'
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

function ContactForm({ siteInfo, handleClose, isShow, product, contactFormConfig }) {
  const [validated, setValidated] = useState(false);
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [content, setContent] = useState('')
  const [loading, setLoading] = useState(false)
  const [showSentMsg, setShowSentMsg] = useState(false)
  const [showErrorMsg, setShowErrorMsg] = useState(false)

  
  const handleSubmit = (event) => {

    const form = event.currentTarget;

    if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
    }
    else
    {
        event.preventDefault();

        const postData = {
            title: `[xtcbanhang.com] - Liên hệ mua "${product.title} (${product.id})"`,
            name: name,
            email: email,
            content: content,
            contactFormConfig: {
                receiverEmail: contactFormConfig.receiverEmail,
                receiverName: contactFormConfig.receiverName,
                cc: contactFormConfig.cc,
                bcc: contactFormConfig.bcc
            }
        };

        setLoading(true)

        //Send mail
        axios({
            url: "https://script.google.com/macros/s/AKfycbws3IRyhVC5QjuWWkDYzN4zy3-K3U4udXB3rvckZwJb8ZomgXMtJJD_plSUYqVdZZx8tw/exec",
            method: 'post',
            headers: {
                'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
            },
            data: postData
        })
        .then(function (response) {
          setLoading(false)
          
          //if error
          if (response.data.result && response.data.result === 'error'){
            setShowErrorMsg(true)
          }
          else {         
            setShowSentMsg(true)
               
            //reset form
            setName('')
            setEmail('')
            setContent('')
          }

          setValidated(false)
        })
        .catch(function(error) {
            console.log(error);
        });
    }

    setValidated(true);
    
  };


  useEffect(() => {

    setShowSentMsg(false)
    setValidated(false)

  }, [isShow])

  return (siteInfo && product && contactFormConfig && (
    <>
      <Modal
        size="lg"
        show={isShow}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Form noValidate validated={validated} onSubmit={handleSubmit.bind(this)}>
          <Modal.Header closeButton>
            <Modal.Title>Liên hệ mua "{product.title} ({product.id})"</Modal.Title>

            {loading && (<img id="imgloading" src={process.env.PUBLIC_URL + `/assets/images/loading.gif`} title="loading" alt="loading" />)}
            {showSentMsg && ( <p id="ploading"><span role="img" aria-label="success">&#10004;</span> Đã gửi.</p>)}
            {showErrorMsg && ( <p id="ploading-error"><span role="img" aria-label="error">&#10060;</span> Lỗi.</p>)}
           
          </Modal.Header>
          <Modal.Body>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Row>
                <Col xs={6} md={6}>
                  <Form.Control type="text" placeholder="Tên" required value={name} onChange={(e) => setName(e.target.value)} />
                </Col>

                <Col xs={6} md={6}>
                  <Form.Control type="email" placeholder="Email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                </Col>
              </Row>
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1">
              <Form.Control
                as="textarea"
                rows={6}
                placeholder="Thông tin liên hệ"
                required
                value={content} 
                onChange={(e) => setContent(e.target.value)}
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>Đóng</Button>
            <Button variant="primary" type="submit">Gửi</Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>)
  );
}

export default ContactForm;
