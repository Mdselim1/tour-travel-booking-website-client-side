import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router';
import './Purchase.css';


const Purchase = () => {

    const { id } = useParams();
    const { register, handleSubmit,reset } = useForm();
    const [service, setService] = useState({});
    const history = useHistory();
    

    // Get data from server 
    useEffect(() => {
        axios.get(`https://bloodcurdling-scarecrow-65788.herokuapp.com/travelservices/${id}`)
            .then(result => {
                setService(result);
            })
    }, []);

    const redirectToManageOrders = () => {
        history.push('/manageorder')
    };
    
    const onSubmit = data => {
        data.service = service.data;
        axios.post('https://bloodcurdling-scarecrow-65788.herokuapp.com/order', data)
            .then(result => {
                if (result.data.insertedId) {
                    alert('You Booking Successfully . Thanks for join with us');
                    reset();
                    redirectToManageOrders();
                }
            });
    };

    return (
        <div className="py-5">
            <Container>
            <h1 className="main-title text-center pb-5 pt-3">Purchase Now</h1>
                <Row>
                <Col lg={6}>
                        <div className="border border-primary border-2 rounded-3 p-2">
                        <Row className="align-items-center">
                            <Col sm={6}>
                            <img className="img-fluid border border-dark p-1" src={service?.data?.img} alt="" />
                            </Col>
                            <Col sm={6}>
                            <h1>{service?.data?.name}</h1>
                            <h3>{service?.data?.pricing} $</h3>
                            </Col>
                </Row>
                </div>
                </Col>
                <Col lg={6}>
                <form className="booking-form" onSubmit={handleSubmit(onSubmit)}>
      <input placeholder="Enter your email" {...register("email")} required />
      <input placeholder="Enter your journey date" {...register("journeydate")} required />
      <input placeholder="Enter your return date" {...register("returndate")} required />
      <input placeholder="Number of people go" type="number" {...register("people")} required />
     <input type="submit" value="Booking"/>
    
    </form>
                </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Purchase;