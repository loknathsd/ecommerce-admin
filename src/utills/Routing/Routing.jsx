import React from 'react';
import { Route, Routes,Navigate } from 'react-router-dom';
import DashboardLayout from '../../Layout/DashboardLayout';
import Dashboard from '../../pages/Dashboard';
import Login from '../../pages/Login';

const Routing = () => {
    return (
        <Routes>
            <Route path='/login' element={<Login/> } />
            <Route path='/register' element={<Login/> } />
            <Route path='/' element={<DashboardLayout />}>
                <Route path="/" element={<Navigate replace to="dashboard" ></Navigate>} />
                <Route path='dashboard' element={<Dashboard/>}/>

            </Route>
            
        </Routes>
    );
};

export default Routing;