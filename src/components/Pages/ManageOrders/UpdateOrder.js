import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';

const UpdateOrder = () => {

    const { id } = useParams();
    const [service, setService] = useState({});
    const location = useHistory();

    // get data from database with spacified id 
    useEffect(() => {
        axios.get(`https://bloodcurdling-scarecrow-65788.herokuapp.com/order/${id}`)
            .then(result => {
                setService(result.data);
            });
    }, []);

    // Email value set in setService 
    const handleEmail = e => {
        const emailvalue = e.target.value;
        const setServ = { ...service };
        setServ.email = emailvalue;
        setService(setServ);
    };

    // Journey date value set in setService 
    const handleJourney = e => {
        const journeyvalue = e.target.value;
        const setJer = { ...service };
        setJer.journeydate = journeyvalue;
        setService(setJer);
       
    };

    // Return date value set in setService 
    const handleReturn = e => {
        const returnvalue = e.target.value;
        const setRet = { ...service };
        setRet.returndate = returnvalue;
        setService(setRet);  
    };

    // People value set in setService 
    const handlePeople = e => {
        const peoplevalue = e.target.value;
        const setPeop = { ...service };
        setPeop.people = peoplevalue;
        setService(setPeop);  
    };

    //Update form submit function run here 
    const handleUpdateValue = e => {
        e.preventDefault();
        const wantupdate = window.confirm('Update Your Data Surely');
        if (wantupdate) {
            axios.put(`https://bloodcurdling-scarecrow-65788.herokuapp.com/order/${id}`, service)
                .then(result => {
                    if (result.data.modifiedCount > 0) {
                        alert('Data Updated Successfully');
                        goToManageOrders();
                    }
                })
        }
    };

    //Redirect After Route Go To Manage Orders
    const goToManageOrders = () => {
        location.push('/manageorder');
    };

    return (
        <div className="py-5">
          <h1 className="main-title text-center pb-5">Update Your Data</h1>
            <form className="form-sub" onSubmit={handleUpdateValue}>
                <input onChange={handleEmail} value={service.email || ''} />
                <input onChange={handleJourney} value={service.journeydate || ''} />
                <input onChange={handleReturn} value={service.returndate || ''} />
                <input onChange={handlePeople} value={service.people || ''} />
                <input type="submit" value="Update" />
            </form>
        </div>
    );
};

export default UpdateOrder;