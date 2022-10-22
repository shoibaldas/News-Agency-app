import React from 'react';
import { FaShareAlt, FaBookmark, FaStar, FaEye } from "react-icons/fa";

const NewsPad = ({ news }) => {
    return (
        <div className="p-4 md:p-0 md:min-h-screen flex justify-center items-center">
            <div className="max-w-md bg-gray-100 rounded-xl shadow-lg transform transition duration-500 scale-105 hover:shadow-2xl">
                <div className='flex items-center justify-between px-2 border-b'>
                    <div className='flex items-center'>
                        <div>
                            <img className='h-12 -w-12 rounded-full' src={news.author.img} alt="" />
                        </div>
                        <div className='mx-2'>
                            <h5 className="text-md mt-2 font-semibold text-gray-800 cursor-pointer transition duration-100">{news.author.name}</h5>
                            <p className="mb-2 text-sm text-gray-700">{news.author.published_date}</p>
                        </div>
                    </div>
                    <div className='flex gap-x-2'>
                        <FaBookmark className='text-lime-700'></FaBookmark>
                        <FaShareAlt className='text-sky-900'></FaShareAlt>
                    </div>
                </div>
                <p className='text-xl font-semibold p-2'>{news.title}</p>
                <img className="w-full cursor-pointer" src={news.image_url} alt="" />
                <p className='text-justify p-4'>
                    {news.details.length > 90 ?
                        <p> {news.details.slice(0, 250) + '....'}</p>
                        : <p>{news.details}</p>
                    }
                </p>
                <div className="flex p-4 justify-between">
                    <div className="flex items-center space-x-2">
                        <FaEye className='text-fuchsia-700'></FaEye>
                        <span>{news.total_view}</span>
                    </div>
                    <div className="flex space-x-2">
                        <div className="flex space-x-1 items-center">
                            <FaStar className='text-amber-500'></FaStar>
                            <span>{news.rating.number}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsPad;
