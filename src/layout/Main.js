import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../pages/shared/Header/Header';
import LeftSideNav from '../pages/shared/LeftSideNavBar/LeftSideNav';
import RightSideNav from '../pages/shared/RightSideNavBar/RightSideNav';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <div className='md:grid md:grid-cols-3 md:h-scree'>
                <div> <LeftSideNav></LeftSideNav> </div>
                <div className=''><Outlet></Outlet></div>
                <div> <RightSideNav></RightSideNav> </div>
            </div>
        </div>
    );
};

export default Main;