import React from 'react'
import Offcanvas from 'react-bootstrap/Offcanvas';
import Nav from 'react-bootstrap/Nav';

function CategoryMenu({categoryList, handleClose, isShow}) {

    return (categoryList && (
        <Offcanvas show={isShow} onHide={handleClose}>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>NHÓM SẢN PHẨM</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Nav className="flex-column">
                    {categoryList.map((category, index) => (
                        <React.Fragment key={index}>
                            <Nav.Link href={process.env.PUBLIC_URL + `/category/${category.name.toLowerCase()}`}>
                                <i className='fas fa-angle-right'></i> {category.name} ({category.count})
                            </Nav.Link>
                        </React.Fragment>
                    ))}
                </Nav>
            </Offcanvas.Body>
        </Offcanvas>
    ))
}

export default CategoryMenu