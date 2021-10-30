import React from 'react';
import useAuth from '../../context/useAuth';
import './LogIn.css';

const LogIn = () => {
    const { user, handleGoogleSignIn } = useAuth();
    console.log(user);
    return (
        <div className="google-box">
            <div className="google-main-box">
            <h1 className="pb-5">Log In here</h1>
            <div onClick={handleGoogleSignIn} className="google-btn">
                <i className="fab fa-google"></i>
                <input type="button" value="Google Log In" />
            </div>
        </div>
        </div>
    );
};

export default LogIn;