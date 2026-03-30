import React from 'react';
import MidLastCarts from './MidLastCarts';

const Midlast = () => {
    return (
        <div className='py-20 max-w-[80%] mx-auto'>
             <div className='text-center space-y-3 mb-10'>
                <h2 className='text-3xl lg:text-4xl font-bold'>Simple, Transparent Pricing</h2>
                <p className='text-gray-400 font-semibold'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
            </div>

            <MidLastCarts></MidLastCarts>

        </div>
    );
};

export default Midlast;