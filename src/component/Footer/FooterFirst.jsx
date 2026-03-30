import React from 'react';

const FooterFirst = () => {
    return (
        <div className='bg-gradient-to-r from-[#4F39F6] to-[#9514FA]'>
            <div className='max-w-[90%] mx-auto text-center text-white space-y-4 py-12'>
                <h2 className='text-3xl font-bold'>Ready to Transform Your Workflow?</h2>
                <p>Join thousands of professionals who are already using Digitools to work smarter.<br></br> Start your free trial today.</p>
                <div className='flex justify-center gap-3'>
                    <div className='bg-white w-fit rounded-full overflow-hidden'>
                        <button className='btn bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent'>Explore Products</button>
                    </div>
                    <div>
                        <button className='btn bg-transparent rounded-full text-white'>View Pricing</button>
                    </div>
                </div>
                <p>14-day free trial • No credit card required • Cancel anytime</p>
            </div>
        </div>
    );
};

export default FooterFirst;