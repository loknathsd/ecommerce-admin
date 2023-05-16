import React from 'react';
import { Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            <h1 className='text-center text-red-500'>Welcome to Dashboard</h1>
            <Outlet />
        </div>
    );
};

export default Dashboard;