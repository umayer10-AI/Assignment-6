import React from 'react';

const RatingBanner = () => {
    return (
        <div className='bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white mb-20'>
            <div className='grid grid-cols-3 text-center gap-3 lg:gap-0 max-w-[80%] lg:max-w-[60%] mx-auto py-10'>
                <div className='border-r'>
                    <h2 className='text-2xl lg:text-4xl font-bold'>50K+</h2>
                    <p className='font-semibold text-gray-300'>Active Users</p>
                </div>
                <div>
                    <h2 className='text-2xl lg:text-4xl font-bold'>200+</h2>
                    <p className='font-semibold text-gray-300'>Premium Tools</p>
                </div>
                <div className='border-l'>
                    <h2 className='text-2xl lg:text-4xl font-bold'>4.9</h2>
                    <p className='font-semibold text-gray-300'>Rating</p>
                </div>
            </div>
        </div>
    );
};

export default RatingBanner;