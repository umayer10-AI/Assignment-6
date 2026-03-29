import React from 'react';
import img from "../../assets/products/writing_2327400 1.png"

const ProductCart = ({p,h}) => {

    const a = () => {
        h(p)
    }

    return (
        <div>
            <div className='border border-gray-300 p-4 rounded-2xl h-full shadow-xl'>
                <div className='text-right'>
                    <span className="badge badge-sm badge-warning font-semibold">{p.badge}</span>
                </div>
                <img className='p-2 border border-gray-300 rounded-full mb-3' src={img} alt="logo" />
                <h2 className='text-2xl font-bold mb-2'>{p.plan_name}</h2>
                <p className='text-gray-400 font-semibold mb-2'>{p.description}</p>
                <p className='text-gray-500 font-semibold mb-3'><span className='text-2xl text-black font-bold'>$<span>{p.price}</span></span>{p.duration}</p>

                <ul className="flex flex-col gap-2 text-sm font-semibold text-gray-500 mb-4">
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                        <span>{p.feature_1}</span>
                    </li>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                        <span>{p.feature_2}</span>
                    </li>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                        <span>{p.feature_3}</span>
                    </li>
                </ul>
                <button onClick={a} className='btn bg-gradient-to-r from-[#4F39F6] py-6 to-[#9514FA] text-white rounded-full w-full'>Buy Now</button>
            </div>
        </div>
    );
};

export default ProductCart;