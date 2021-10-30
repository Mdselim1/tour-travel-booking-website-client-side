import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import payment from '../img/payment.png';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer-main-box">
            <Container>
                <div className="footer-main">
                <Row>
                    <Col lg={4} sm={12}>
                        <h2>Address</h2>
                        <p>bonani , Dhaka - 1100</p>
                        <h2>Email</h2>
                            <p>info@tourandtravel.com</p>
                        <h2>Phone</h2>
                            <p>+8801556554744</p>
                            
                    </Col>
                    <Col lg={4} sm={12}>
                        <h2>Our Term & Condition</h2>
                        <p>Your Tour 7 days before you can cancel your travel And find refund policy. We can't give any othe facilities from our plicies.</p>
                    </Col>
                    <Col lg={4} sm={12}>
                        <h2>Payments With</h2>
                        <img className='img-fluid' src={payment} alt="" />
                    </Col>
                </Row>
                </div>
                <div className="copyright text-center pt-4">
                    <p>&copy; All right regerved by 2021 || Tour and Travel</p>
                </div>
            </Container>
        </div>
    );
};

export default Footer;