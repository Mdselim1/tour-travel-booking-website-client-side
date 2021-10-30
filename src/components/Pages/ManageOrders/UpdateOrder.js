import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const UpdateOrder = () => {

    const { id } = useParams();
    const [service, setService] = useState({});
    
    useEffect(() => {
        
        axios.get(`http://localhost:8000/order/${id}`)
            .then(result => {
            setService(result.data);
        })

    },[])

    return (
        <div>
            <h1>Update order : {service.email}</h1>
        </div>
    );
};

export default UpdateOrder;