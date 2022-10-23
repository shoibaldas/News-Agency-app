import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsPad from '../shared/NewsPad/NewsPad';

const Category = () => {
    const categorynews = useLoaderData();
    return (
        <div>
            {
                categorynews.map(news => <NewsPad
                    key={news._id}
                    news={news}>

                </NewsPad>)
            }
        </div>
    );
};

export default Category;