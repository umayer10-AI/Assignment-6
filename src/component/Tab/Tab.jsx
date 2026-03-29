import React from 'react';
import Product from '../Product/Product';

const Tab = () => {
    return (
        <div>
            <div className='flex justify-center mb-10'>
                <div className='flex gap-2'>
                    <button className='btn bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full'>Products</button>
                    <button className='btn btn-outline btn-primary rounded-full'>Cart(<span>0</span>)</button>
                </div>
            </div>

            <Product></Product>

        </div>
    );
};

export default Tab;