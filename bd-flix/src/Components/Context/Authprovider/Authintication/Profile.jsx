import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Authprovider';
import { useQuery } from '@tanstack/react-query';



import date from 'date-and-time';
const Profile = () => {
    const { user } = useContext(AuthContext)
    const { data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('https://bd-flix-server-emonkumardas.vercel.app/userProfile');
            const data = await res.json();
            return data;
        }
    });



    const now = new Date();
    return (
        <div className='flex justify-center relative top-20'>
        
            <aside className="w-full p-6 sm:w-60 dark:bg-gray-900 dark:text-gray-100">
                <nav className="space-y-8 text-sm">
                    <div className="space-y-2">
                        <h2 className="text-sm font-semibold tracking-widest uppercase dark:text-gray-400">USER ACCOUNT</h2>

                    </div>


                    <div className="space-y-2">

                        <div className="flex flex-col space-y-6">
                            <Link to='/' rel="noopener noreferrer" >HomePage</Link>
                            <Link to='/profile' rel="noopener noreferrer" >Profile</Link>
                            <Link to='/watchlist' rel="noopener noreferrer" >My Watchlist</Link>
                            <Link to='/History' rel="noopener noreferrer" >History</Link>
                        </div>
                    </div>

                </nav>
            </aside>

            <div className="flex flex-col justify-center max-w-xs p-6 shadow-md  sm:px-12 dark:bg-gray-900 dark:text-gray-100">
                <img src={user.photoURL} alt="" className="w-20 h-20 mx-auto rounded-full dark:bg-gray-500 aspect-square" />
                <div className="space-y-4 text-center divide-y divide-gray-700">
                    <div className="my-2 space-y-2"  >
                        <h2 className="text-xl font-semibold sm:text-lg">{user.displayName}</h2>
                        <span className="flex items-center space-x-1">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" aria-label="Email address" className="w-4 h-4">
                                <path fill="currentColor" d="M274.6,25.623a32.006,32.006,0,0,0-37.2,0L16,183.766V496H496V183.766ZM464,402.693,339.97,322.96,464,226.492ZM256,51.662,454.429,193.4,311.434,304.615,256,268.979l-55.434,35.636L57.571,193.4ZM48,226.492,172.03,322.96,48,402.693ZM464,464H48V440.735L256,307.021,464,440.735Z"></path>
                            </svg>
                            <span className="dark:text-gray-400">{user.email}</span>
                        </span>


                    </div>
                    <div className="flex justify-center pt-2 space-x-4 align-center">

                        <Link to='/editprofile'><button type="button" className="px-4 py-2 border rounded-md dark:border-gray-100">Edit Profile</button></Link>
                    </div>
                </div>
            </div>

        </div >
    );
};

export default Profile;