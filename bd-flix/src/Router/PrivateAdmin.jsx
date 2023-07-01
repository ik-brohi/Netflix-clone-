import React from 'react';
import { useContext } from 'react';

import { Navigate, useLocation } from 'react-router-dom'
import { AuthContext } from '../Components/Context/Authprovider/Authprovider';
import useAdmin from '../Hooks/Admin/useAdmin';

const PrivateAdmin = ({ children }) => {
    const location = useLocation()
    const { user, loading } = useContext(AuthContext);
    const [isAdmin, isAdminLoading] = useAdmin(user?.email);
    console.log(user?.email, isAdmin, 'from private route')

    if (loading || isAdminLoading) {
        return <button type="button" class="" disabled>
            <svg class="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">

            </svg>
            Processing...
        </button>
    }
    if (user && isAdmin) {
        return children;
    }


    return <Navigate to="/" state={{ from: location }} replace></Navigate>

};

export default PrivateAdmin;