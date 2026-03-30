import React from 'react';
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const FooterLast = () => {
    return (
        <div className='bg-[#101727]'>
            <div className='max-w-[80%] mx-auto text-white'>
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 py-15 text-center lg:text-left'>
                    <div className='space-y-3 col-span-2'>
                        <h2 className='text-3xl font-bold'>DigiTools</h2>
                        <p className='font-semibold text-gray-400'>Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.</p>
                    </div>
                    <div className='text-gray-400 space-y-2'>
                        <h2 className='text-lg font-semibold text-white'>Product</h2>
                        <h2>Features</h2>
                        <h2>Pricing</h2>
                        <h2>Templates</h2>
                        <h2>Integrations</h2>
                    </div>
                    <div className='text-gray-400 space-y-2'>
                        <h2 className='text-lg font-semibold text-white'>Company</h2>
                        <h2>About</h2>
                        <h2>Blog</h2>
                        <h2>Careers</h2>
                        <h2>Press</h2>
                    </div>
                    <div className='text-gray-400 space-y-2'>
                        <h2 className='text-lg font-semibold text-white'>Resources</h2>
                        <h2>Documentation</h2>
                        <h2>Help Center</h2>
                        <h2>Community</h2>
                        <h2>Contact</h2>
                    </div>
                    <div className='text-gray-400 space-y-2'>
                        <h2 className='text-lg font-semibold text-white'>Social Links</h2>
                        <div className='flex items-center justify-center lg:justify-start gap-2'>
                            <h2 className='bg-white text-black text-lg p-1 rounded-full'><RiInstagramFill /></h2>
                            <h2 className='bg-white text-black text-lg p-1 rounded-full'><FaFacebook /></h2>
                            <h2 className='bg-white text-black text-lg p-1 rounded-full'><FaTwitter /></h2>
                        </div>
                    </div>
                </div>

                <hr className='text-gray-600'/>
                
                <div className='flex flex-col lg:flex-row gap-4 lg:gap-0 items-center justify-between text-gray-400 py-6 text-sm'>
                    <p>© 2026 Digitools. All rights reserved.</p>
                    <div className='flex items-center gap-6'>
                        <p>Privacy Policy</p>
                        <p>Terms of Service</p>
                        <p>Cookies</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FooterLast;