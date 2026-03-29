import React from 'react';
import img from "../../assets/products/writing_2327400 1.png"

const CartSection = ({p,g}) => {

    const a = () => {
        g(p)
    }

    return (
        <div className='flex justify-between items-center p-4 bg-gray-100 rounded-2xl border border-gray-300 hover:border-red-500'>
            <div className='flex items-center gap-3'>
                <img className='p-2 border border-gray-300 bg-white rounded-full' src={img} alt="logo" />
                <div className=''>
                    <h2 className='text-xl font-bold'>{p.plan_name}</h2>
                    <p className='font-semibold text-lg'>$<span>{p.price}</span></p>
                </div>
            </div>
            <button onClick={a} className='text-red-500 btn'>Remove</button>
        </div>
    );
};

export default CartSection;