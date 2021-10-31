import React, { useEffect, useState } from 'react';
import { GoogleAuthProvider, signOut, onAuthStateChanged, getAuth, signInWithPopup } from "firebase/auth";
import initializeAuthentication from '../Firebase/Firebase.initialize';

initializeAuthentication();

const TravelDataAuth = () => {
    
    const [travelService, setTravelService] = useState([]);
    const [tourguide, setTourGuide] = useState([]);
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);

    // For Travel Data 
    useEffect(() => {
        setLoading(true)
        fetch('https://bloodcurdling-scarecrow-65788.herokuapp.com/travelservices')
            .then(res => res.json())
            .then(data => setTravelService(data))
            .catch(error => {
                console.log(error.message);
            })
        .finally(()=> setLoading(false))
    }, []);

    // For Guides Data 
    useEffect(() => {
        // setLoading(true)
        fetch('https://bloodcurdling-scarecrow-65788.herokuapp.com/guides')
            .then(res => res.json())
            .then(data => setTourGuide(data))
            .catch(error => {
                console.log(error.message);
            })
        .finally(()=>setLoading(false))
    }, []);

    // Firebase Log In System start here 

    const auth = getAuth();

    const provider = new GoogleAuthProvider();

    // Google Sign In Method 
    const handleGoogleSignIn = () => {
       setLoading(true)
       return signInWithPopup(auth, provider)
            .catch(error => {
                setError(error.message)
            })
        .finally(()=>setLoading(false))
    };

    // Sign Out Method 
    const handleSignOut = () => {
        setLoading(true)
        signOut(auth).then(() => {
            
        }).catch(error => {
            console.log(error.message);
        })
        .finally(()=>setLoading(false))

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
        setLoading(false)
        return () => unsubscribed;
    },[])
    

    return {
        travelService,
        tourguide,
        handleGoogleSignIn,
        user,
        error,
        handleSignOut,loading
    }

};

export default TravelDataAuth;