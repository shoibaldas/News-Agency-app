import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaShareAlt, FaBookmark } from "react-icons/fa";

const News = () => {
    const news = useLoaderData();
    const { image_url, details, title, author } = news;

    return (
        <div className="mt-6 bg-white rounded-md mb-4">
            <div className="max-w-ws overflow-hidden shadow-lg">
                <img className="w-full rouded-t" src={image_url} alt="Mountain" />
                <div className='flex items-center p-2'>
                    <div>
                        <img className='h-12 -w-12 rounded-full' src={author?.img} alt="" />
                    </div>
                    <div className='mx-2'>
                        <h5 className="text-md mt-2 font-semibold text-gray-800 cursor-pointer transition duration-100">{author?.name}</h5>
                        <p className="mb-2 text-sm text-gray-700">{author?.published_date}</p>
                    </div>
                    <div className='flex gap-x-2 mx-4'>
                        <FaBookmark className='text-lime-700'></FaBookmark>
                        <FaShareAlt className='text-sky-900'></FaShareAlt>
                    </div>
                </div>
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2 text-gray-700">{title}</div>
                    <p className="text-gray-700 text-base text-justify">
                        {details}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default News;