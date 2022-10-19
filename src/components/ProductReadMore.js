import React, {useEffect} from 'react'
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import parser from 'html-react-parser';
import {CURRENT_PAGE_URL} from '../constants/localStorageConstant'

function ProductReadMore({ onClose, isShow, product, onConvertToUrlFriendly, onCurrencyFormat, onShowOrderForm }) {

  const navigate = useNavigate();

  useEffect(() => {

    //console.log(2,params, window.location)

  }, [isShow])

  return (product && product.priceToUser && (
    <Modal
      size="lg"
      show={isShow}
      onHide={() => onClose(false)}
      aria-labelledby="example-modal-sizes-title-lg"
      className='productReadMore'
      scrollable={true}

      onExit = { function(){ 
        //get current page url from localStorage under key 'CURRENT_PAGE_URL'        
        let currentPageUrl = localStorage.getItem(CURRENT_PAGE_URL)
        navigate(currentPageUrl)
      }}
      // onExiting  = { function(){ console.log( "onExiting " ) }}
      // onExited   = { function(){ console.log( "onExited  " ) }}
      // onEnter    = { function(){ console.log( "onEnter   " ) }}
      // onEntering = { function(){ console.log( "onEntering" ) }}
      // onEntered  = { function(){ console.log( "onEntered " ) }}
    >
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-lg">
          {product.title} ({product.id})
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>

        <h2>Giá: <span className="price">{onCurrencyFormat(product.priceToUser)}</span></h2>
        <h3>
            <i>Mã: <strong>{product.id}</strong></i><br/>
            {product.category && (<>
              <i>Nhóm: <a href={process.env.PUBLIC_URL + `/${onConvertToUrlFriendly(product.category)}/1/`}>{product.category}</a></i><br/><br/>
            </>)}            
        </h3>

        <h2 className='h2buy'><a href="/#" className="buy" onClick={(e) => onShowOrderForm(e, product)}>Đặt mua</a></h2>

        { product.DescByOtherPriceInPercentage ? (
            <div className='product-read-more-desc'>{parser(product.DescByOtherPriceInPercentage)}</div>
          ) 
          : product.description && (
            <div className='product-read-more-desc'>{parser(product.description)}</div>
          )
        }

        <p className='galleryTitle'><strong>Ảnh sản phẩm</strong></p>

        {product.images && (
          product.images.map((image, index) => (							
              <img key={index} src={process.env.PUBLIC_URL + `/assets/images/product/${image}`} style={{ width: "100%" }} loading="lazy" alt={product.title} title={product.title} />
          ))
        )}
      </Modal.Body>
    </Modal>
  ))
}

export default ProductReadMore;
