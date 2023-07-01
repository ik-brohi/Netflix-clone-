import React, { useContext, useState } from 'react';
import date from 'date-and-time';
import { Form, Link } from 'react-router-dom';
import { AuthContext } from '../Authprovider';
import { toast } from 'react-toastify';


const EditProfile = () => {
    const { user } = useContext(AuthContext)
    const now = new Date();
    const [name, setName] = useState(user.displayName);

    const handleNameChange = event => {
        setName(event.target.value)
    }




    const handleEditProfile = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const address = form.address.value;
        const gender = form.gender.value;
        const genre = form.genre.value;


        const editProfile = {
            name: name,
            email: email,
            address: address,
            gender: gender,
            genre: genre
        }


        fetch('https://bd-flix-server-emonkumardas.vercel.app/userProfile', {


            // console.log(editProfile)

            // fetch('https://bd-flix-server-emonkumardas.vercel.app/userProfile', {

                // fetch('https://bd-flix-server-emonkumardas.vercel.app/userProfile', {


                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(editProfile)
                })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {

                    toast.success('Confirmed');

                }
                else {
                    toast.error(data.message);
                }

            })


    }






    return (

        <div className=' lg:mx-96'>
            <form onSubmit={handleEditProfile}>
                <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900">
                    <div className="space-y-2 col-span-full lg:col-span-1">
                        <p className="font-medium text-white font-bold hover:text-green-400 focus:outline-none focus:shadow-outline">Edit profile</p>

                    </div>
                    <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                        <div className="col-span-full sm:col-span-3">
                            <label for="firstname" className="text-sm text-cyan-50">Name</label>
                            <input id="firstname" type="text" placeholder="Name" name="name" onChange={handleNameChange} className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
                        </div>

                        <div className="col-span-full sm:col-span-3">
                            <label for="email" className="text-sm text-cyan-50">Email</label>
                            <input id="email" type="email" placeholder="Email" name="email" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" value={user.email} />
                        </div>
                        <div className="col-span-full">
                            <label for="address" className="text-sm text-cyan-50">Address</label>
                            <input id="address" type="text" placeholder="Address" name="address" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
                        </div>

                        <div className="col-span-full sm:col-span-3">
                            <label for="state" className="text-sm text-cyan-50">Gender</label>
                            <select name="gender" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-ring-violet-400 dark:text-gray-900">
                                <option disabled selected className='text-cyan-50'>Pick your gender</option>
                                <option className='text-cyan-50'>Male</option>
                                <option className='text-cyan-50'>Female</option>
                                <option className='text-cyan-50'>Others</option>

                            </select>
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label for="zip" className="text-sm text-cyan-50">Prefrable Genre</label>
                            <select name="genre" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-ring-violet-700 dark:text-gray-900">
                                <option disabled className='text-cyan-50' selected>Pick your Fav. Genre</option>
                                <option className='text-cyan-50'>Tragedy</option>
                                <option className='text-cyan-50'>Comedy</option>
                                <option className='text-cyan-50'>Thriller</option>

                            </select>
                        </div>
                        <div className='ml-24'>
                            <Link to='/profile'><input className='px-4 py-2 border rounded-md dark:border-gray-100 text-cyan-50' type="submit" value="Submit" /></Link>
                        </div>

                    </div>
                </fieldset>
            </form>
        </div>
    );
};

export default EditProfile;