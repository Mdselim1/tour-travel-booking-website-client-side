import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useAuth from '../../../context/useAuth';
import Service from './Service/Service';

const Services = () => {

    const { travelService } = useAuth();

    return (
        <div>
            <h1 className="main-title text-center py-5">Our Services Plan</h1>
                <Container>

                    <Row>
                        {           travelService.map(serv=><Service key={serv._id} data={serv}></Service>)
                        }
                    </Row>
                </Container>
        </div>
    );
};

export default Services;