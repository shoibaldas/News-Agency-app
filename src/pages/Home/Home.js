import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsPad from '../shared/NewsPad/NewsPad';


const Home = () => {
    const allNews = useLoaderData();
    return (
        <div className='bg-white text-black'>
            {
                allNews.map(news => <NewsPad
                    key={news._id}
                    news={news}>

                </NewsPad>)
            }
        </div>
    );
};

export default Home;