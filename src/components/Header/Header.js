import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import MyLogo from './../MyLogo/MyLogo';
import NavMenu from './../NavMenu/NavMenu';


const Header = () => {
    return (
        <Container fluid className="bg-light pt-2 pb-2 mb-5 sticky-top"> 
            <Container>
                <Row  className="align-items-center ">
                    <Col md={2}>
                        <MyLogo></MyLogo>
                    </Col>
                    <Col md={10}>
                        <NavMenu></NavMenu>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
};

export default Header;