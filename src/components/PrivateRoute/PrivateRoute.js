import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../../context/useAuth';

const PrivateRoute = ({children , ...rest}) => {

    const { user, loading } = useAuth();
    console.log(loading);
    if (loading) {
        return <Spinner animation="border" variant="danger" />
    }

    return (
        <Route
            {...rest}
            render={({ location }) => 
                user.email ? (children)
                    : (<Redirect
                            to={{
                                pathname: "/login",
                                state:{from:location}
                            }}
                        >
                        </Redirect>)
            }
        >

        </Route>
    );
};

export default PrivateRoute;