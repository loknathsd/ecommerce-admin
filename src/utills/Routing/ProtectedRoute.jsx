import React from 'react';
import { Navigate, Outlet,useLocation } from 'react-router-dom';
import useAuth from '../../context/useAuth';

const ProtectedRoute = () => {
    const {user} = useAuth();
    const location = useLocation()
    return (
            user ? <Outlet/> :  <Navigate to='/login' state={{from:location}} replace/>
    );
};

export default ProtectedRoute;