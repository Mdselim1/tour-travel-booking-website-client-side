import React, { useEffect, useState } from 'react';
import { GoogleAuthProvider, signOut, onAuthStateChanged, getAuth, signInWithPopup } from "firebase/auth";
import initializeAuthentication from '../Firebase/Firebase.initialize';

initializeAuthentication();

const TravelDataAuth = () => {
    
    const [travelService, setTravelService] = useState([]);
    const [tourguide, setTourGuide] = useState([]);
    const [user, setUser] = useState({});
    const [error, setError] = useState('');

    // For Travel Data 
    useEffect(() => {
        fetch('http://localhost:8000/travelservices')
            .then(res => res.json())
            .then(data => setTravelService(data))
            .catch(error => {
                console.log(error.messege);
            })
    }, []);

    // For Guides Data 
    useEffect(() => {
        fetch('http://localhost:8000/guides')
            .then(res => res.json())
            .then(data => setTourGuide(data))
            .catch(error => {
                console.log(error.message);
            })
    }, []);

    // Firebase Log In System start here 

    const auth = getAuth();

    const provider = new GoogleAuthProvider();

    // Google Sign In Method 
    const handleGoogleSignIn = () => {
       
        signInWithPopup(auth, provider)
            .then(result => {
                setUser(result.user);
            }).catch(error => {
                setError(error.message)
            })
    };

    // Sign Out Method 
    const handleSignOut = () => {
        
        signOut(auth).then(() => {
            
        }).catch(error => {
            console.log(error.message);
        })

    }

// On AuthState Change here 
    useEffect(() => {
       const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({})
            }
       })
        return () => unsubscribed;
    },[])
    

    return {
        travelService,
        tourguide,
        handleGoogleSignIn,
        user,
        error,
        handleSignOut
    }

};

export default TravelDataAuth;