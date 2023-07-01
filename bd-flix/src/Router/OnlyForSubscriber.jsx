import React, { useContext } from 'react';
import { AuthContext } from '../Components/Context/Authprovider/Authprovider';
import { Navigate, useLocation } from 'react-router-dom'


const OnlyForSubscriber = ({children}) => {
    const location = useLocation()
    const { user, userInfo, loading } = useContext(AuthContext);

    if (loading) {
        return <button type="button" class="" disabled>
            <svg class="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">

            </svg>
            Processing...
        </button>
    }
    

    if (!userInfo?.isSubscribe) {
        return <Navigate to="/subscribe" state={{ from: location }} replace></Navigate>
    }

    return children;

    
};

export default OnlyForSubscriber;