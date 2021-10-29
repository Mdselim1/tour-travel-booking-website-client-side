import React from 'react';
import './LogIn.css';

const LogIn = () => {
    return (
        <div className="google-main-box">
            <h1 className="pb-5">Log In here</h1>
            <div className="google-btn">
                <i class="fab fa-google"></i>
                <input type="button" value="Google Log In" />
            </div>
        </div>
    );
};

export default LogIn;