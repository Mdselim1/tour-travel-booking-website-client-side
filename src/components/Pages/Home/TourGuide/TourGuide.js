import React from 'react';
import { Col } from 'react-bootstrap';
import './TourGuide.css';

const TourGuide = (props) => {
    const { img ,name,job} = props.data;
    return (
        <Col lg={3} sm={12}>
            <div className="mb-5 single-service single-guide text-center">
                <img className="img-fluid rounded-circle p-1" src={img} alt="" />
                <h3>{name}</h3>
                <p>{job}</p>
            </div>
        </Col>
    );
};

export default TourGuide;