import React from 'react';

const Card = ({dt}) => {
    return (
        <div className='bg-white w-[256px] h-[126px] font-serif border border-gray-200 rounded flex gap-4 align-middle items-center'>
            <p className='text-3xl text-gray-500 ml-10 p-3 rounded-full  bg-blue-100 '>{dt.icon}</p>
            <div>
                <p className='text-gray-400 text-md '>{dt.title}</p>
                <p>{dt.price}</p>
            </div>
            
        </div>
    );
};

export default Card;