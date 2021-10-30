import React, { createContext } from 'react';
import TravelDataAuth from '../components/TravelDataAuth/TravelDataAuth';


export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    
    const allContext = TravelDataAuth();

    return (
        <AuthContext.Provider value={allContext}>
            
        {children}
            
       </AuthContext.Provider>
    );
};

export default AuthProvider;