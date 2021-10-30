import React from 'react';
import { Container } from 'react-bootstrap';
import './Contact.css';
const Contact = () => {
    return (
        <div>
            <h1 className="text-center py-5">Get in touch</h1>
            <div className="form-sub">
                <input type="email" placeholder="Enter your email" />
                <input type="text" placeholder="Enter your name" />
                <textarea cols="15" rows="5" placeholder="Write your messege"></textarea>
                <input type="submit" value="Send" />
            </div>
            <div className="google-map">
                <Container>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.5404846203946!2d90.41495281536243!3d23.72809829554385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b9e8574b132b%3A0xa4d6b450b4c66926!2sBiman%20Bhaban!5e0!3m2!1sen!2sbd!4v1635529120532!5m2!1sen!2sbd" title="google-map" className="w-100" height="450px"></iframe>
                </Container>
                
            </div>
        </div>
    );
};

export default Contact;