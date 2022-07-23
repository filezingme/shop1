import React, {useState, useEffect} from 'react'
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Accordion from 'react-bootstrap/Accordion';
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

function PagesTab({ handleClose, isShowPagesTab }) {

  useEffect(() => {

    //

  }, [isShowPagesTab])

  return (<>
      <Modal
        size="lg"
        show={isShowPagesTab}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        className="pagesTab"
      >
        <Modal.Header closeButton>
          <Modal.Title>THÔNG TIN</Modal.Title>
          
        </Modal.Header>
        <Modal.Body>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Về chúng tôi</Accordion.Header>
              <Accordion.Body>
                <p>Chúng tôi có xưởng trực tiếp sản xuất các sản phẩm đồ da cá sấu/da bò cao cấp.</p>
                <ul>
                  <li>Chúng tôi sản xuất nhiều loại sản phẩm về da.</li>
                  <li>Chúng tôi nhận gia công cho khách hàng có nhu cầu đặt hàng theo thương hiệu riêng, sản xuất mẫu mã theo yêu cầu.</li>
                  <li>Chúng tôi có đội ngũ công nhân tay nghề cao có nhiều năm kinh nghiệm.</li>
                </ul>
                <p>Hãy liên hệ với chúng tôi để được phục vụ!</p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Dịch vụ & Cam kết chất lượng</Accordion.Header>
              <Accordion.Body>
                <ul>
                  <li>Sản phẩm da cá sấu/da bò cao cấp thật 100%.</li>
                  <li>Cam kết đền gấp 10 lần giá trị đơn hàng nếu phát hiện sản phẩm không phải da thật</li>
                  <li>Bảo hành 2 năm cho tất cả các sản phẩm da</li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>Liên hệ</Accordion.Header>
              <Accordion.Body>
                <p><strong>Điện thoại</strong>: 0979116118</p>
                <p><strong>Email</strong>: xtcbanhang@gmail.com</p>
                <p><strong>Địa chỉ</strong>: CT1 Company - Showroom 7, Rice City Linh Đàm, Hoàng Liệt, Hoàng Mai, TP.Hà Nội.</p>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>Đóng</Button>
        </Modal.Footer>
      </Modal>
    </>)
}

export default PagesTab;
