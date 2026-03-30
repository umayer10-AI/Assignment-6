import React from 'react';

const MidLastCarts = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            <div className='bg-base-200 border border-gray-300 p-5 rounded-2xl space-y-4 shadow-xl transition-all duration-500 hover:-translate-y-4'>
                <div>
                    <h2 className='text-2xl font-semibold mb-2'>Starter</h2>
                    <p className='font-semibold text-gray-400'>Perfect for getting started</p>
                </div>
                <h2 className='text-3xl font-bold'>$0<span className='text-base font-semibold text-gray-400'>/Month</span></h2>
                <ul className="flex flex-col gap-1 text-sm font-semibold text-gray-400 mb-4">
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                        <span>Access to 10 free tools</span>
                    </li>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                        <span>Basic templates</span>
                    </li>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                        <span>Community support</span>
                    </li>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                        <span>1 project per month</span>
                    </li>
                </ul>
                <button className='btn bg-gradient-to-r from-[#4F39F6] py-6 mt-12 to-[#9514FA] text-white rounded-full w-full font-semibold text-base'>Get Started Free</button>
            </div>
            <div className='bg-base-200 border  bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white p-5 rounded-2xl space-y-4 shadow-xl transition-all duration-500 hover:-translate-y-4'>
                <div>
                    <h2 className='text-2xl font-semibold mb-2'>Starter</h2>
                    <p>Perfect for getting started</p>
                </div>
                <h2 className='text-3xl font-bold'>$0<span className='text-base font-normal'>/Month</span></h2>
                <ul className="flex flex-col gap-1 text-sm font-semibold mb-4">
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                        <span>Access to all premium tools</span>
                    </li>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                        <span>Unlimited templates</span>
                    </li>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                        <span>Priority support</span>
                    </li>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                        <span>Unlimited projects</span>
                    </li>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                        <span>Cloud sync</span>
                    </li>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                        <span>Advanced analytics</span>
                    </li>
                </ul>
                <div className='bg-white overflow-hidden rounded-full'>
                    <button className='btn bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent rounded-full w-full font-bold text-base py-6'>Get Started Free</button>
                </div>
            </div>
            <div className='bg-base-200 border border-gray-300 p-5 rounded-2xl space-y-4 shadow-xl transition-all duration-500 hover:-translate-y-4'>
                <div>
                    <h2 className='text-2xl font-semibold mb-2'>Enterprise</h2>
                    <p className='font-semibold text-gray-400'>For teams and businesses</p>
                </div>
                <h2 className='text-3xl font-bold'>$99<span className='text-base font-semibold text-gray-400'>/Month</span></h2>
                <ul className="flex flex-col gap-1 text-sm font-semibold text-gray-400 mb-4">
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                        <span>Everything in Pro</span>
                    </li>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                        <span>Team collaboration</span>
                    </li>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                        <span>Custom integrations</span>
                    </li>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                        <span>Dedicated support</span>
                    </li>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                        <span>SLA guarantee</span>
                    </li>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                        <span>Custom branding</span>
                    </li>
                </ul>
                <button className='btn bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full w-full font-semibold text-base py-6'>Get Started Free</button>
            </div>
        </div>
    );
};

export default MidLastCarts;