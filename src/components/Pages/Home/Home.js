import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Home.css';
import aboutus from '../../img/about-us.jpg';
import HomeService from './HomeService/HomeService';
import { Link } from 'react-router-dom';
import TourGuide from './TourGuide/TourGuide';
import useAuth from '../../../context/useAuth';


const Home = () => {


    const {travelService,tourguide } = useAuth();

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
            <h1 className="main-title text-center pb-5">Our Services</h1>
                <Container>

                    <Row>
                        {
                            travelService.slice(0,6).map(serv=><HomeService key={serv._id} data={serv}></HomeService>)
                        }
                    </Row>
                    <div className="text-center">
                        <Link className="cmn-btn" to="/services">See More Service <i className="fas fa-arrow-right"></i></Link>
                        </div>
                </Container>

            </div>


            {/* Vacations Services Section End Here  */}

            {/* Tour Guiders Section Starts Here  */}

            <div className="featured-services pb-5">
            <h1 className="main-title text-center pb-5">Our Tour Guide</h1>
                <Container>

                    <Row>
                        {
                            tourguide.map(serv=><TourGuide key={serv._id} data={serv}></TourGuide>)
                        }
                    </Row>
                   
                </Container>

            </div>

            {/* Tour Guiders Section Ends Here  */}

            <div className="mb-5">
                <Container>
                    <div className="contact-home p-5">
                    <Row className="align-items-center">
                        <Col lg={6} sm={12}>
                                <div className="cont-text">
                                <h1>Go a happy Journey With Us</h1>
                            <p>Please Contact Us</p>
                            </div>
                        </Col>
                        <Col lg={6} sm={12}>
                            <div className="text-center">
                            <Link className="cont-btn" to="/contact">Contact Us <i className="fas fa-arrow-right ms-3"></i></Link>
                            </div>
                        </Col>
                    </Row>
                    </div>
                </Container>
            </div>

        </div>
    );
};

export default Home;