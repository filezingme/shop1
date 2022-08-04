import React, {useEffect} from 'react'
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import parser from 'html-react-parser';

function ProductReadMore({ handleClose, isShow, product, handleConvertToUrlFriendly }) {

console.log(product.category)

  useEffect(() => {

    //

  }, [isShow])

  return (product && product.category && (
    <Modal
      size="lg"
      show={isShow}
      onHide={() => handleClose(false)}
      aria-labelledby="example-modal-sizes-title-lg"
      className='productReadMore'
      scrollable={true}
    >
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-lg">
          Mô tả "{product.title} ({product.id})"
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>

        <h2>Giá: <span className="price">{product.priceToUser}</span></h2>
        <h3>
            <i>Mã: <strong>{product.id}</strong></i><br/>
            {product.category && (<>
              <i>Nhóm: <a href={process.env.PUBLIC_URL + `/${handleConvertToUrlFriendly(product.category)}/1/`}>{product.category}</a></i><br/><br/>
            </>)}            
        </h3>

        { product.DescByOtherPriceInPercentage ? (
            <div className='product-read-more-desc'>{parser(product.DescByOtherPriceInPercentage)}</div>
          ) 
          : product.description && (
            <div className='product-read-more-desc'>{parser(product.description)}</div>
          )
        }

        <p className='galleryTitle'><strong>Hình ảnh sản phẩm</strong></p>

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
