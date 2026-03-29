import React from 'react';
import { FaRegCircleDot } from "react-icons/fa6";
import { FaPlay } from "react-icons/fa";
import img from "../../assets/banner.png"

const Banner = () => {
    return (
        <div className='max-w-[70%] mx-auto grid grid-cols-1 lg:grid-cols-2 items-center py-15 gap-10 lg:gap-0'>
            <div className='space-y-6 order-2 lg:order-1'>
                <div className='flex items-center gap-2 bg-violet-200 w-fit text-xs px-3 py-2 rounded-3xl'>
                    <span className='text-violet-600'><FaRegCircleDot /></span>
                    <h2 className='bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent font-semibold'> New: AI-Powered Tools Available</h2>
                </div>
                <div className='space-y-3'>
                    <h2 className='text-4xl font-bold'>Supercharge YourDigital Workflow</h2>
                    <p className='font-semibold text-gray-400'>Access premium AI tools, design assets, templates, and productivitysoftware—all in one place. Start creating faster today. <br /> Explore Products</p>
                </div>
                <div className='flex gap-3'>
                    <button className='btn bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full'>Explore Products</button>
                    <button className='btn btn-outline btn-primary rounded-full'><FaPlay className='font-bold'/> Watch Demo</button>
                </div>
            </div>
            <div className='flex justify-center lg:justify-end items-center order-1 lg:order-2'>
                <img className='h-70 lg:h-100 object-cover shadow-xl hover:scale-110 transition duration-500' src={img} alt="" />
            </div>
        </div>
    );
};

export default Banner;