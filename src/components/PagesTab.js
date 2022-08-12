import React, {useState, useEffect, useRef} from 'react'
import Modal from "react-bootstrap/Modal";
import Accordion from 'react-bootstrap/Accordion';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import parser from 'html-react-parser';
import axios from "axios";
import GoogleRecaptcha from './GoogleRecaptcha';

function PagesTab({ handleClose, isShow, pagesTab, mailConfig }) {
  const [validated, setValidated] = useState(false);
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [content, setContent] = useState('')
  const [loading, setLoading] = useState(false)
  const [showSentMsg, setShowSentMsg] = useState(false)
  const [showErrorMsg, setShowErrorMsg] = useState(false)
  const [isVerifiedRecaptcha, setIsVerifiedRecaptcha] = useState(null)

  const captchaRef = useRef(null)

  
  const handleSubmit = (event) => {

    const form = event.currentTarget;

    setShowSentMsg(false)

    if (form.checkValidity() === false || !isVerifiedRecaptcha) {
        event.preventDefault();
        event.stopPropagation();        
        
        if (!isVerifiedRecaptcha)
          setIsVerifiedRecaptcha(false)
    }
    else
    {
        event.preventDefault();

        const postData = {
            mailType: 'Contact',
            name: name,
            email: email,
            content: content,
            mailConfig: {
                toEmailAddress: mailConfig.toEmailAddress,
                cc: mailConfig.cc,
                bcc: mailConfig.bcc
            }
        };

        setLoading(true)

        //Send mail
        axios({
            url: mailConfig.mailServiceUrl,
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
            
              //show sent msg
              setShowSentMsg(true)
                 
              //reset form
              resetForm()   
            }

            setValidated(false)
        })
        .catch(function(error) {
            console.log(error);
        });
    }

    setValidated(true);
    
  };


  const resetForm = () => {   
    setName('')
    setEmail('')
    setContent('')
    
    if(captchaRef.current)
    {
      captchaRef.current.reset()
      setIsVerifiedRecaptcha(null)
    }
  }
  
  
  function handleVerifyRecaptchaCallback(e) {

    // const token = captchaRef.current.getValue();
    // console.log('token:',token)

    setIsVerifiedRecaptcha(true)
  }


  useEffect(() => {

    setShowSentMsg(false)
    setValidated(false)  

    //reset form
    if(!isShow) {
      resetForm()
    }

  }, [isShow])


  return (pagesTab && (
      <Modal
        size="lg"
        show={isShow}
        onHide={handleClose}
        backdrop="static" //static='không đóng modal khi click ra ngoài, chỉ đóng modal khi click nút close'
        keyboard={false}
        className="pagesTab"
        scrollable={true}
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

                      <Form.Group
                        className="mt-3" controlId="GoogleRecaptcha">
                        <Row>
                          <Col xs={12} sm={12}>
                            <div className={(isVerifiedRecaptcha !== null && !isVerifiedRecaptcha) ? 'google-recaptcha' : ''}>
                              <GoogleRecaptcha handleVerifyRecaptchaCallback={handleVerifyRecaptchaCallback} forwardedCaptchaRef={captchaRef} />
                            </div>
                          </Col>
                        </Row>
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
