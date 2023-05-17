import React from 'react';
import {GiExpense} from 'react-icons/gi'
import {CgLoadbarSound} from 'react-icons/cg'
import {RxDashboard} from 'react-icons/rx'
import {ImUsers} from 'react-icons/im'
import Card from '../components/Card/Card';
import TotalSpent from '../components/TotalSpent/TotalSpent';


const data = [
    {
        title: 'All Spending',
        icon: <GiExpense />,
        price: "$574"
    },
    {
        title: 'Earnings',
        icon: <CgLoadbarSound />,
        price:'$521'
    },
    {
        title: 'Weekly Revenue',
        icon: <RxDashboard />,
        price: "$854"
    },
    {
        title: 'Customers',
        icon: <ImUsers />,
        price: '39354'
    },

]

const Dashboard = () => {
    return (
        <div className=''>
            <div className='flex justify-center gap-5 mt-10'>
                {data.map(dt => <Card dt={dt} />)}
            </div>
            <div>
                <TotalSpent />
            </div>
        </div>
    );
};

export default Dashboard;