import React from 'react'
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import parser from 'html-react-parser';
import {
  LightgalleryProvider,
  LightgalleryItem
} from "react-lightgallery";


function CustomersTalk({customersTalkList, handleClose, isShow, handleShowLightGalleryAboveModal, showLightGalleryAboveModal}) {

    return (customersTalkList && (
        <Modal
            size="lg"
            show={isShow}
            onHide={() => handleClose(false)}
            aria-labelledby="example-modal-sizes-title-lg"
            scrollable={true}
            className={showLightGalleryAboveModal ? 'customers_talk_modal' : ''}
        >
            <Modal.Header closeButton>
                <Modal.Title id="example-modal-sizes-title-lg">
                    Khách hàng đã mua
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>                
                {customersTalkList.map((item, index) => (
                    <div key={index} className="card mb-4">
                        <div className="row no-gutters">
                            <div className="col-lg-5 col-md-5 col-xs-6">
                                <div className="customer_photos">

                                    <LightgalleryProvider 
                                        onCloseAfter = {(e) => handleShowLightGalleryAboveModal(false)}
                                        // onBeforeOpen={() => console.info("onBeforeOpen")}
                                        // onAfterOpen={() => console.info("onAfterOpen")}
                                        // onSlideItemLoad={() => console.info("onSlideItemLoad")}
                                        // onBeforeSlide={() => console.info("onBeforeSlide")}
                                        // onAfterSlide={() => console.info("onAfterSlide")}
                                        // onBeforePrevSlide={() => console.info("onBeforePrevSlide")}
                                        // onBeforeNextSlide={() => console.info("onBeforeNextSlide")}
                                        // onDragstart={() => console.info("onDragstart")}
                                        // onDragmove={() => console.info("onDragmove")}
                                        // onDragend={() => console.info("onDragend")}
                                        // onSlideClick={() => console.info("onSlideClick")}
                                        // onBeforeClose={() => console.info("onBeforeClose")}
                                        // onCloseAfter={() => console.info("onCloseAfter")}
                                    >
                                        {item.images.map((image, idx) => {

                                            const thumbPath = process.env.PUBLIC_URL + `/assets/images/customers/thumbnail/${image}`
                                            const imagePath = process.env.PUBLIC_URL + `/assets/images/customers/${image}`
                                            
                                            return (<div key={idx} className={`item item${item.images.length}`}>
                                                    <LightgalleryItem group={index.toString()} src={imagePath} thumb={thumbPath} >
                                                        <img src={thumbPath} loading="lazy" alt={item.title} title={item.title} onClick={(e) => handleShowLightGalleryAboveModal(true)} />
                                                    </LightgalleryItem>
                                                </div>
                                            )
                                        })}
                                    </LightgalleryProvider>
                                </div>
                            </div>
                            <div className="col-lg-7 col-md-7 col-xs-6">
                                <div className="customer_body">
                                    <h2 className="card-title customer_title">{item.title}</h2>
                                    <div className='customer_content'>
                                        {parser(item.content)}
                                    </div>
                                    <p className="card-text customer_author">
                                        <small className="text-muted">{item.author}</small>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}                
            </Modal.Body>
        </Modal>
    ))
}

export default CustomersTalk