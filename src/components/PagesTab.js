import React, {useState, useEffect} from 'react'
import Modal from "react-bootstrap/Modal";
import Accordion from 'react-bootstrap/Accordion';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import parser from 'react-html-parser';
import axios from "axios";

function PagesTab({ handleClose, isShowPagesTab, pagesTab, contactFormConfig }) {
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
            title: 'Contact from [xtcbanhang.com]',
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

        console.log('postData:',postData)

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

  }, [isShowPagesTab])

  return (pagesTab && (
      <Modal
        size="lg"
        show={isShowPagesTab}
        onHide={handleClose}
        // backdrop="static"
        keyboard={false}
        className="pagesTab"
        // scrollable={true}
      >
        <Modal.Header closeButton>
          <Modal.Title>Thông tin</Modal.Title>          
        </Modal.Header>
        <Modal.Body>
          {/* <Accordion defaultActiveKey={['0']} alwaysOpen> */}
          <Accordion alwaysOpen>
            {pagesTab.aboutUs && (
              <Accordion.Item eventKey="0">
                <Accordion.Header>{pagesTab.aboutUs.title}</Accordion.Header>
                <Accordion.Body>
                  {parser(pagesTab.aboutUs.content)}
                </Accordion.Body>
              </Accordion.Item>
            )}
            {pagesTab.servicesAndOthers && (
              <Accordion.Item eventKey="1">
                <Accordion.Header>{pagesTab.servicesAndOthers.title}</Accordion.Header>
                <Accordion.Body>
                  {parser(pagesTab.servicesAndOthers.content)}
                </Accordion.Body>
              </Accordion.Item>
            )}            
            {pagesTab.contact && (
              <Accordion.Item eventKey="2">
                <Accordion.Header>{pagesTab.contact.title}</Accordion.Header>
                <Accordion.Body>
                  {parser(pagesTab.contact.content)}

                  <Form noValidate validated={validated} onSubmit={handleSubmit.bind(this)} style={{marginBottom:"0px"}}>
                    <Modal.Header>
                      <Modal.Title>Gửi liên hệ</Modal.Title>

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
                      <Button variant="primary" type="submit">Gửi</Button>
                    </Modal.Footer>
                  </Form>
                </Accordion.Body>
              </Accordion.Item>
            )}
          </Accordion>
        </Modal.Body>
      </Modal>
    ))
}

export default PagesTab;
