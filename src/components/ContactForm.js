import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css'

function ContactForm({ siteInfo, handleClose, isShow }) {

    return (
        <>
        <Modal size="lg" show={isShow} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>LIÊN HỆ</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Row>
                        <Col xs={6} md={6}>
                            <Form.Control type="email" placeholder="Tên" autoFocus />
                        </Col>
                        <Col xs={6} md={6}>
                            <Form.Control type="email" placeholder="Email" />
                        </Col>
                    </Row>                    
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Control as="textarea" rows={6} placeholder="Thông tin liên hệ" />
                </Form.Group>
            </Form>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            <Button variant="primary" onClick={handleClose} >
                Save Changes
            </Button>
            </Modal.Footer>
        </Modal>
        </>
    );
}

export default ContactForm