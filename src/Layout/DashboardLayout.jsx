import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar/Sidebar';

const DashboardLayout = () => {
    return (
        <div className='flex'>
            <div className=''>
            <Sidebar />
            </div>
            <div className='bg-blue-50 w-full'>
                <Outlet />
            </div>
        </div>
    );
};

export default DashboardLayout;