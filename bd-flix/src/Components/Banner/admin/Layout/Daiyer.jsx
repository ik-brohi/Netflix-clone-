import React from "react";
import { Link } from "react-router-dom";

const Daiyer = () => {
  return (
    <div>
        <div>

          <ul className="bg-slate-900 md:mr-24 rounded-lg md:h-screen lg:h-screen border-rounded-10 sm:w-48  p-4 w-80  text-base-content">

            <div className="avatar">
                
              <div className="w-12 rounded-full">
                <img src="https://placeimg.com/192/192/people" />
              </div>             
            </div>
            <li className="bg-green-600 mb-6 text-center hover:bg-teal-500 p-2 mt-5 rounded-md font-bold">
              <Link to="/">Back Home</Link>
            </li>
            <li className="bg-green-600 mb-6 text-center hover:bg-teal-500 p-2 mt-5 rounded-md font-bold">
              <Link to="/admin/uploadmovies">Upload Movies</Link>
            </li>
            <li  className="bg-green-600 mb-6 text-center hover:bg-teal-500 p-2 rounded-md font-bold">
              <Link to="/admin/allmovies">All Movies</Link>
            </li>
            <li  className="bg-green-600 mb-6 text-center hover:bg-teal-500 p-2 rounded-md font-bold">
              <Link to="/admin/allusers">All Users</Link>
            </li>
            <li  className="bg-green-600  text-center hover:bg-teal-500 p-2 rounded-md font-bold">
              <Link to="/admin/allCategories">All Categories</Link>
            </li>
          </ul>
        </div>
      </div>

  );
};

export default Daiyer;
