import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import DashboardLayout from '../../Layout/DashboardLayout';
import AddCustomer from '../../pages/AddCustomer';
import AddProduct from '../../pages/AddProduct';
import Customers from '../../pages/Customers';
import Dashboard from '../../pages/Dashboard';
import Login from '../../pages/Login';
import OrdersList from '../../pages/OrdersList';
import Products from '../../pages/Products';
import Register from '../../pages/Register';
import ProtectedRoute from './ProtectedRoute';

const Routing = () => {
    return (
        <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route element={<ProtectedRoute />}>
                <Route path='/' element={<DashboardLayout />}>
                    <Route path="/" element={<Navigate replace to="dashboard" ></Navigate>} />
                    <Route path='dashboard' element={<Dashboard />} />
                    <Route path='products' element={<Products />} />
                    <Route path='add-product' element={<AddProduct />} />
                    <Route path='customers' element={<Customers />} />
                    <Route path='add-customer' element={<AddCustomer />} />
                    <Route path='orders' element={<OrdersList />} />
                </Route>
            </Route>

        </Routes>
    );
};

export default Routing;