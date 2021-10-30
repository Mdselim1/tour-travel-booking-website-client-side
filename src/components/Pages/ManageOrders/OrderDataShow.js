import axios from 'axios';
import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './OrderDataShow.css';


const OrderDataShow = (props) => {

    const service = props?.data;
    const setorder = props.setorder;
    const order = props.order;
    
    const handleDeleteUser = id => {
        const deleteSure = window.confirm('Are your Sure You Want To Delete');
        if (deleteSure) {
            axios.delete(`http://localhost:8000/order/${id}`)
            .then(result => {
                if (result.data.deletedCount > 0) {
                    alert('Deleted Order Successfully');
                    const remainservice = order.filter(user => user._id !== id);
                    setorder(remainservice);
                }
            });
        }
    };

    return (
        <Col lg={4} sm={12}>
            <div className="manage-order mb-4 p-3">
                <img className="img-fluid rounded-3 mb-3" src={service.service?.img} alt="" />
                <p>Email/Phone: {service?.email}</p>
                <p>Journey Date : {service?.journeydate}</p>
                <p>Return Date : {service?.returndate}</p>
                <p>Paseengers : {service?.people}</p>
                <div>
                    <button onClick={()=>handleDeleteUser(service._id)} className="simi-btn me-3">Delete</button>
                    <Link to={`/order/update/${service._id}`}>
                    <button className="simi-btn">Update</button>
                   </Link>
                </div>
            </div> 
        </Col>
    );
};

export default OrderDataShow;