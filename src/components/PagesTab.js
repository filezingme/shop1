import React, {useEffect} from 'react'
import Modal from "react-bootstrap/Modal";
import Accordion from 'react-bootstrap/Accordion';
import "bootstrap/dist/css/bootstrap.min.css";
import parser from 'react-html-parser';

function PagesTab({ handleClose, isShowPagesTab, pagesTab }) {

  useEffect(() => {

    //

  }, [isShowPagesTab])

  return (pagesTab && (
      <Modal
        size="lg"
        show={isShowPagesTab}
        onHide={handleClose}
        // backdrop="static"
        keyboard={false}
        className="pagesTab"
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
                </Accordion.Body>
              </Accordion.Item>
            )}
          </Accordion>
        </Modal.Body>
      </Modal>
    ))
}

export default PagesTab;
