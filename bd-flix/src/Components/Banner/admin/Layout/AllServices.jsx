import React from 'react';
import { Outlet } from 'react-router-dom';
import AllMovies from './AllMovies';
import AllUsers from './AllUsers';
import Daiyer from './Daiyer';
import UploadMovies from './UploadMovies';

const AllServices = () => {
    return (
        <div>
          <Daiyer/>
       
          <Outlet/>
      
          
        </div>
    );
};

export default AllServices;