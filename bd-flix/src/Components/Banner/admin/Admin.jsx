import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../Footer/Footer';
import Navbar from '../../Navbar/Navbar';
import Daiyer from './Layout/Daiyer';

const Admin = () => {
    return (
       
            <div className='lg:flex md:flex md:m-20'>
                <Daiyer />
                <Outlet />
            </div>
        
    );
};

export default Admin;