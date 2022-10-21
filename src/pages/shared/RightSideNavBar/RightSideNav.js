import React from 'react';
import { FaGoogle, FaGithub, FaFacebookSquare, FaYoutube, FaTwitterSquare, FaWhatsappSquare, FaDiscord, FaBuffer, FaLockOpen } from "react-icons/fa";
import Carousel from '../BrandCarousel/Carousel';
const RightSideNav = () => {
    return (
        <div className='text-black mt-4'>
            <div className='text-center'>
                <button className="btn border-solid border-sky-500 btn-wide hover:bg-indigo-100 text-sky-600 mb-2"><FaGoogle></FaGoogle><span className='normal-case mx-2'> Login in with Google</span></button>
                <button className="btn border-solid border-gray-900 btn-wide hover:bg-indigo-100 text-black"><FaGithub></FaGithub><span className='normal-case mx-2'> Login in with Github</span></button>
            </div>
            <div className='mt-6'>
                <h5 className='mx-16 mb-2 text-md font-semibold'>Find us on</h5>
                <div className="flex justify-center">
                    <ul className="bg-white w-72 text-gray-900">
                        <li className="flex items-center px-6 py-1 mb-2 border border-gray-200 w-full"><FaFacebookSquare></FaFacebookSquare> Facebook</li>
                        <li className="flex items-center px-6 py-1 mb-2 border border-gray-200 w-full"><FaYoutube></FaYoutube> Youtube</li>
                        <li className="flex items-center px-6 py-1 mb-2 border border-gray-200 w-full"><FaTwitterSquare></FaTwitterSquare> Twitter</li>
                        <li className="flex items-center px-6 py-1 mb-2 border border-gray-200 w-full"><FaWhatsappSquare></FaWhatsappSquare> Whatsapp</li>
                        <li className="flex items-center px-6 py-1 mb-2 border border-gray-200 w-full"><FaDiscord></FaDiscord> Discord</li>
                        <li className="flex items-center px-6 py-1 mb-2 border border-gray-200 w-full"><FaBuffer></FaBuffer> Privacy & Policy</li>
                        <li className="flex items-center px-6 py-1 mb-2 border border-gray-200 w-full "><FaLockOpen></FaLockOpen> Terms & Conditions</li>
                    </ul>
                </div>
            </div>
            <div className='mt-6'>
                <Carousel></Carousel>
            </div>
        </div>
    );
};

export default RightSideNav;