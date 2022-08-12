import React, {useState, useEffect, useRef} from 'react'
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import Loading from './Loading';
import Alert from 'react-bootstrap/Alert';
import parser from 'html-react-parser';
import GoogleRecaptcha from './GoogleRecaptcha';


function OrderForm({ originalData, handleClose, isShow, product, handleCurrencyFormat, isVerified }) {
  const [validated, setValidated] = useState(false);
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [content, setContent] = useState('')
  const [promoCode, setPromoCode] = useState('')  
  const [promoObject, setPromoObject] = useState(null)
  const [isVerifiedRecaptcha, setIsVerifiedRecaptcha] = useState(null)
  const [loading, setLoading] = useState(false)
  const [showSentMsg, setShowSentMsg] = useState(false)
  const [showErrorMsg, setShowErrorMsg] = useState(false)
  const [validPromoCode, setValidPromoCode] = useState(false)

  //orderId = current Timestamp, convert timestamp to date time: https://timestamp.online/
  const [orderId, setOrderId] = useState(() => { 
    return Date.now()
  })

  const captchaRef = useRef(null)

  
  const handleSubmitForm = (event) => {

    const form = event.currentTarget;

    if (form.checkValidity() === false || !isVerifiedRecaptcha) {
        event.preventDefault();
        event.stopPropagation();
        
        setIsVerifiedRecaptcha(false)
    }
    else
    {
        event.preventDefault();

        const postData = {
            mailType: 'Order',
            productTitle: product.title,
            productId: product.id,
            priceToUser: product.priceToUser, //this field created new at Product.js component
            priceAfterDiscount: product.priceAfterDiscount,
            promoObject: promoObject,
            name: name,
            email: email,
            content: content,
            orderId: orderId,
            productFirstThumbnailUrl: product.productFirstThumbnailUrl,
            mailConfig: {
                toEmailAddress: originalData.mailConfig.toEmailAddress,
                cc: originalData.mailConfig.cc,
                bcc: originalData.mailConfig.bcc
            }
        };

        setLoading(true)

        //Send mail
        axios({
            url: originalData.mailConfig.mailServiceUrl,
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
            console.log(response);
            setShowErrorMsg(true)
          }
          else {//success
            
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
    setPromoCode('')
    setPromoObject(null)
            
    //reset orderId to new value
    setOrderId(Date.now())   
    
    if(captchaRef.current)
    {
      captchaRef.current.reset()
      setIsVerifiedRecaptcha(null)
    }
  }


    //verify promoCode
  const verifyPromoCode = (promoCode) => {      
    
    let iPromoCode = parseInt(promoCode)

    if (iPromoCode.toString() === promoCode) {
      if (promoCode && !isNaN(iPromoCode) && originalData.promoInfoConfig) {
          const promoCodeFound = originalData.promoInfoConfig.filter(item => item.referCode === iPromoCode)[0]

          if (promoCodeFound){
            setValidPromoCode(true)    

            product.priceAfterDiscount = product.priceToUser - (promoCodeFound.percentDiscountForBuyer/100) * product.priceToUser

            setPromoObject(promoCodeFound)
          }
          else {
            setValidPromoCode(false)
          }
      }
    }
    else {
      setValidPromoCode(false)
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


  return (originalData.siteInfo && product && originalData.mailConfig && (
    <>
      <Modal
        size="lg"
        show={isShow}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        className="OrderForm"
      >
        <Form noValidate validated={validated} onSubmit={handleSubmitForm.bind(this)}>
          <Modal.Header closeButton>
            <Modal.Title>Đặt mua "{product.title} ({product.id})"</Modal.Title>

            {loading && <Loading />}
            {showSentMsg && ( <p id="ploading"><span role="img" aria-label="success">&#10004;</span> Đã gửi.</p>)}
            {showErrorMsg && ( <p id="ploading-error"><span role="img" aria-label="error">&#10060;</span> Lỗi.</p>)}
           
          </Modal.Header>
          <Modal.Body>

            <Form.Group className="mb-3" controlId="ControlInput1">
              <Row>
                <Col xs={6} md={6}>
                  <Form.Control 
                    type="text" 
                    placeholder="Họ tên" 
                    required value={name} 
                    onChange={(e) => setName(e.target.value)} 
                  />
                </Col>

                <Col xs={6} md={6}>
                  <Form.Control type="email" placeholder="Email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                </Col>
              </Row>
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="ControlTextarea1">
              <Form.Control
                as="textarea"
                rows={6}
                placeholder="Thông tin liên hệ"
                required
                value={content} 
                onChange={(e) => setContent(e.target.value)}
              />              
              <Form.Control type='hidden' value={orderId} />
            </Form.Group>

            <Form.Group controlId="ControlInput2">
              <Row>
                <Col xs={12} sm={12}>
                  <Form.Control type="text" className='prevent-validation' placeholder="Nhập mã khuyến mại (nếu có)" value={promoCode} 
                    onChange={(e) => {
                      setPromoCode(e.target.value)
                      verifyPromoCode(e.target.value)
                    }} />

                    {promoObject !== 'null' && promoObject !== 'undefined' && promoCode.length > 0 && (
                      <Form.Text className="text-muted">
                        <Alert variant={validPromoCode ? 'success' : 'warning'} className='mt-1 mb-0'>
                          {validPromoCode ? (
                              parser(`Giá đã áp dụng khuyến mại là <span>${handleCurrencyFormat(product.priceAfterDiscount)}</span> (giảm ${promoObject.percentDiscountForBuyer}% trên giá gốc ${handleCurrencyFormat(product.priceToUser)})`)
                          ) : (
                              parser(`Mã khuyến mại không tồn tại`)
                          )}
                        </Alert>
                      </Form.Text>
                    )}
                </Col>
              </Row>
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
            <Button variant="secondary" onClick={handleClose}>Đóng</Button>
            <Button variant="primary" type="submit">Gửi</Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>)
  );
}

export default OrderForm;
