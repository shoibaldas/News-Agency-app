import React from 'react';
import { FaShareAlt, FaBookmark, FaStar, FaEye } from "react-icons/fa";
import { Link } from 'react-router-dom';

const NewsPad = ({ news }) => {
    const { _id, title, image_url, details, total_view, rating, author } = news;

    return (
        <div className="p-4 md:p-0 md:min-h-screen flex justify-center items-center">
            <div className="max-w-md md:mb-0 mb-4 bg-white rounded-xl shadow-lg transform transition duration-500 scale-105 hover:shadow-2xl">
                <div className='flex items-center justify-between px-2 border-b'>
                    <div className='flex items-center p-2'>
                        <div>
                            <img className='h-12 -w-12 rounded-full' src={author?.img} alt="" />
                        </div>
                        <div className='mx-2'>
                            <h5 className="text-md mt-2 font-semibold text-gray-800 cursor-pointer transition duration-100">{author?.name}</h5>
                            <p className="mb-2 text-sm text-gray-700">{author?.published_date}</p>
                        </div>
                    </div>
                    <div className='flex gap-x-2'>
                        <FaBookmark className='text-lime-700'></FaBookmark>
                        <FaShareAlt className='text-sky-900'></FaShareAlt>
                    </div>
                </div>
                <p className='text-xl font-semibold p-2 text-gray-700'>{title}</p>
                <img className="w-full cursor-pointer" src={image_url} alt="" />
                <div className='text-justify p-4 text-gray-700'>
                    {details.length > 90 ?
                        <p> {details.slice(0, 250) + '....'} <Link to={`/news/${_id}`} className='text-sky-600 text-sm font-semibold'>Read more</Link> </p>
                        : <p>{details}</p>
                    }
                </div>
                <div className="flex p-4 justify-between border-t-2">
                    <div className="flex items-center space-x-2">
                        <FaEye className='text-fuchsia-700'></FaEye>
                        <span className='text-gray-700'>{total_view}</span>
                    </div>
                    <div className="flex space-x-2">
                        <div className="flex space-x-1 items-center">
                            <FaStar className='text-amber-500'></FaStar>
                            <span className='text-gray-700'>{rating?.number}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsPad;
