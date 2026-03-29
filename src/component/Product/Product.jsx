import React from 'react';
import img from "../../assets/products/writing_2327400 1.png"

const Product = () => {
    return (
        <div className='max-w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            <div className='border border-gray-300 p-4 rounded-2xl'>
                <div className='text-right'>
                    <span className="badge badge-xs badge-warning">Most Popular</span>
                </div>
                <img className='p-2 border border-gray-300 rounded-full mb-2' src={img} alt="" />
                <h2 className='text-2xl font-semibold mb-2'>AI Writing Pro</h2>
                <p className='text-gray-400 font-semibold mb-2'>Generate high-quality content, blogs, and marketing copy in seconds with advanced AI.</p>
                <p className='text-gray-500 font-semibold mb-2'><span className='text-2xl text-black font-semibold'>$<span>29</span></span>/mo</p>

                <ul className="flex flex-col gap-1 text-sm font-semibold text-gray-500 mb-4">
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                        <span>High-resolution image generation</span>
                    </li>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                        <span>Customizable style templates</span>
                    </li>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                        <span>Batch processing capabilities</span>
                    </li>
                </ul>
                <button className='btn bg-gradient-to-r from-[#4F39F6] py-6 to-[#9514FA] text-white rounded-full w-full'>Buy Now</button>
            </div>
        </div>
    );
};

export default Product;