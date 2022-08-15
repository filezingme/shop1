import React from 'react'
import Offcanvas from 'react-bootstrap/Offcanvas';
import Nav from 'react-bootstrap/Nav';

function CategoryMenu({categoryList, onClose, isShow, activedItem, onConvertToUrlFriendly}) {

    return (categoryList && (
        <Offcanvas show={isShow} onHide={onClose}>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>NHÓM SẢN PHẨM</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Nav className="flex-column">
                    {categoryList.map((category, index) => (
                        <React.Fragment key={index}>
                            <Nav.Link 
                                href={process.env.PUBLIC_URL + `/${onConvertToUrlFriendly(category.name)}/1/`} 
                                className={onConvertToUrlFriendly(activedItem) === onConvertToUrlFriendly(category.name) ? "actived" : ""} 
                            >
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