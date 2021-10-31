import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../context/useAuth';
import './LogIn.css';

const LogIn = () => {
    const { handleGoogleSignIn } = useAuth();
  
    const history = useHistory();
    const location = useLocation();
    const redirect_uri = location?.state?.from || '/';

    const GoogleSignIn = () => {
        handleGoogleSignIn()
        .then(result => {
            
            history.push(redirect_uri);
        })
    }


    return (
        <div className="google-box">
            <div className="google-main-box">
            <h1 className="pb-5">Log In here</h1>
            <div onClick={GoogleSignIn} className="google-btn">
                <i className="fab fa-google"></i>
                <input type="button" value="Google Log In" />
            </div>
        </div>
        </div>
    );
};

export default LogIn;