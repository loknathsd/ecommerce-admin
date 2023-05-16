import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from '../../pages/Dashboard';
import Login from '../../pages/Login';

const Routing = () => {
    return (
        <Routes>
            <Route path='/login' element={<Login/> } />
            <Route path='/register' element={<Login/> } />
            <Route path='/' element={<Dashboard/>}>

            </Route>
            
        </Routes>
    );
};

export default Routing;