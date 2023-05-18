import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { customersGrid,customersData } from '../data/data';




const Customers = () => {
    const [customers, setCustomers] = useState([]);
    console.log(customers, 'customers')

    useEffect(() => {
        fetch('https://dummyjson.com/users?limit=30')
            .then(res => res.json())
            .then(data => setCustomers(data.users))
    }, [])

    return (
        <div >
            <h1 className='text-4xl font-serif mt-10 ml-10 mb-6 text-gray-600'>Customers List</h1>
            <div className='w-[95%] mx-auto bg-white rounded h-[100vh] p-10'>
                <DataGrid
                    rows={customersData}
                    columns={customersGrid}
                    initialState={{
                        pagination: {
                            paginationModel: {
                                pageSize: 10,
                            },
                        },
                    }}
                    pageSizeOptions={[10]}
                    checkboxSelection
                    disableRowSelectionOnClick
                />
            </div>
        </div>
    );
};

export default Customers;