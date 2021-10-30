import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = (props) => {

    const {_id, name, pricing, description, img } = props.data;

    return (
        <Col lg={4} sm={12}>
            <div className="mb-5 single-service">
                <img className="img-fluid rounded-2" src={img} alt="" />
                <h3>{name}</h3>
                <h4>{pricing} $</h4>
                <p>{description}</p>
                <Link className="cmn-btn" to={`/purchase/${_id}`}>Purchase Now <i className="fas fa-cart-plus"></i></Link>
            </div>
        </Col>
    );
};

export default Service;