import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Home.css';
import aboutus from '../../img/about-us.jpg';


const Home = () => {
    return (
        <div>
            
            {/* Banner Section Start Here  */}
            
            <div className="banner-section">
                <Container>
                    <div className="banner-content">
                    <h1 className="banner-title">Explore The World ! Life is short and the world is Wide</h1>
                    <p className="banner-des">Book with us and book it out of here. Go a Safe Journey on With Us.</p>
                    </div>
                </Container>
            </div>

            {/* Banner Section End Here  */}

            {/* About Section Start Here  */}

            <div className="about-section py-5">
            <h1 className="main-title text-center">About Us</h1>
                <Container>
                    <div className="about-main py-5">
                        <Row className="align-items-center">
                            <Col md={6} sm={12}>
                                <p className="about-des">The smell of pine drifts through your open window, a kaleidoscope of colorful leaves greets you around every turn, and the sweet taste of apple lingers as you make your way to your next destination. It must be fall in New Hampshire. From leaf-peeping to wine tasting, day trips to weekend adventures, explore everything the Granite State has to offer on a road trip this fall. Discover Your New.</p>
                                <ul className="list-unstyled">
                                    <li className="about-des mb-2">Save Journey With Comfortabel</li>
                                    <li className="about-des mb-2">Save Your Time</li>
                                    <li className="about-des mb-2">7 Days Refund Policy</li>
                                </ul>
                            </Col>
                            <Col md={6} sm={12}>
                                <img className="img-fluid rounded-2" src={aboutus} alt="" />
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>

            {/* About Section End Here  */}

            {/* Vacations Services Section Start Here  */}

            <div className="featured-services pb-5">
            <h1 className="main-title text-center">Our Services Plan</h1>
                <Container>

                    <Row>

                        <Col lg={4} sm={12}>

                        </Col>
                        <Col lg={4} sm={12}>

                        </Col>
                        <Col lg={4} sm={12}>

                        </Col>

                    </Row>

                </Container>

            </div>


            {/* Vacations Services Section End Here  */}


        </div>
    );
};

export default Home;