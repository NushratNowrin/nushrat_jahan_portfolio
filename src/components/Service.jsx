import React from 'react';
import { BiCodeBlock } from 'react-icons/bi';

const Service = (service) => {
    const { category, description} = service;
    return (
        <div className='rounded-lg  border-2 border-primary p-6 h-72 serviceBox bg-secondary  mx-auto'>
            <div className='flex justify-center items-center m-2 '><BiCodeBlock className='text-primary text-5xl p-2 rounded-full border-2 border-primary service-icon'/></div>
            <h1 className=' mb-2 font-semibold'>{category}</h1>
            <p className='text-neutral text-[13px]'>{description}</p>
        </div>
    );
};

export default Service;