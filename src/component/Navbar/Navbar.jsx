import React from 'react';
import { LuShoppingCart } from "react-icons/lu";

const Navbar = ({info}) => {
    return (
        <div className='border-b border-b-gray-300 lg:sticky top-0 z-50 bg-white'>
            <div className='max-w-[90%] space-y-4 lg:space-y-0 lg:max-w-[80%] mx-auto flex flex-col lg:flex-row justify-between items-center py-4'>
                <h2 className='text-3xl font-bold bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent'>DigiTools</h2>
                <ul className='flex items-center flex-wrap justify-center gap-5 lg:gap-8 font-semibold'>
                    <li>Products</li>
                    <li>Features</li>
                    <li>Pricing</li>
                    <li>Testimonials</li>
                    <li>FAQ</li>
                </ul>
                <div className='flex items-center gap-4'>
                    <h2 className='text-xl relative'><LuShoppingCart />
                        {
                            info.length > 0 && <span className='absolute -top-3 -right-3 bg-red-500 text-xs rounded-full py-0.5 px-2 text-white font-semibold'>{info.length}</span>
                        }
                    </h2>
                    <h2 className='font-semibold'>Login</h2>
                    <button className='btn bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full'>Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;