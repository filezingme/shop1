import React from 'react'
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import parser from 'html-react-parser';

function CustomersTalk({customersTalkList, handleClose, isShow}) {

    return (customersTalkList && (
        <Modal
            size="lg"
            show={isShow}
            onHide={() => handleClose(false)}
            aria-labelledby="example-modal-sizes-title-lg"
            scrollable={true}
        >
            <Modal.Header closeButton>
                <Modal.Title id="example-modal-sizes-title-lg">
                    Khách hàng đã mua
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>                
                {customersTalkList.map((item, index) => (
                    <div key={index} className="card mb-3">
                        <div className="row no-gutters">
                            <div className="col-md-4 col-xs-6">
                                <div data-content="3 ảnh" className="customer-photo">
                                    <img src={process.env.PUBLIC_URL + `/assets/images/customers/thumbnail/${item.images[0]}`} title={item.title} alt={item.title} />
                                </div>
                            </div>
                            <div className="col-md-8 col-xs-6">
                                <div className="card-body">
                                    <h2 className="card-title customer-title">{item.title}</h2>
                                    <div className='customer-content'>
                                        {parser(item.content)}
                                    </div>
                                    <p className="card-text customer-author">
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