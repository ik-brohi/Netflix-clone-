import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from '../Authprovider';

import { toast } from 'react-toastify';
import useTitle from '../../../../Hooks/UseTitle/UseTitle';
import { setAuthToken } from '../../../../Token/AuthToken';
import { success } from 'daisyui/src/colors';


const Signup = () => {

    const [loading, setloading] = useState(false)

    useTitle('Signup')
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const [error, setError] = useState('')




    const { createUser, updateUserProfile } = useContext(AuthContext)
    const handlesignup = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const name = form.name.value;
        const password = form.password.value;


        //for image upload
        const image = event.target.image.files[0];
        const formData = new FormData()
        formData.append('imageFile', image)
        setloading(true)

        const url = "https://bd-flix-server-emonkumardas.vercel.app/uploadPhoto"

        fetch(url, {
            method: 'POST',
            body: formData,
        })
            .then(res => res.json())
            .then(imageData => {
                
                createUser(email, password)




                    .then(result => {

                        setAuthToken(result.user)


                        toast.success('User Created Successfully')
                        setloading(false)


                        navigate('/')



                        updateUserProfile(name, imageData.data.display_url)

                            .then(() => {
                                navigate(from, { replace: true })
                            }).catch(error => console.log(error))

                    }).catch(error => console.log(error))

            }).catch(error => console.log(error))

        // const saveUser = (name, email) => {
        //     const user = { name, email };
        //     fetch('https://bd-flix-server-emonkumardas.vercel.app/allUsers', {
        //         method: "POST",
        //         headers: {
        //             'content-type': 'application/json',

        //         },
        //         body: JSON.stringify(user)
        //     })
        //         .then(res => res.json())
        //         .then(data => {
        //             console.log(data)
        //         })
        // }

        createUser(email, password).then(result => {
            const user = result.user;

            navigate('/')
            setError('')
            form.reset()
            // handleupdateprofile(name)
        })
            .catch(err => {
                console.error(err)
                setError(err.message)

                if (error === 'Firebase: Error (auth/email-already-in-use).') {
                    toast.error('Already have an account')
                    setloading(false)

                }
            })



    }


    // const handleupdateprofile = (name, photoURL) => {
    //     const profile = {
    //         displayName: name,
    //         photoURL: photoURL
    //     }
    //     updateUserProfile(profile).then(() => { }).catch(error => console.error(error))
    // }




    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content md:grid-cols-2 flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Sign Up now!</h1>
                    <p className="py-6">I know all about this. For years I have been continuously improving, accumulating knowledge and experience.</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handlesignup} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input name="name" type="text" placeholder="name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Image</span>
                            </label>
                            <input name="image" type="file" id="image" accept="image/*" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name="email" type="text" placeholder="email" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name="password" type="password" placeholder="password" className="input input-bordered" required />

                        </div>
                        <div className="form-control mt-6">
                            {/* text-green-700 hover:text-green-400 lg:text-3xl focus:outline-none  */}
                            <input type="submit" className="btn btn-primary text-green-700 hover:text-green-400 lg:text-2xl  focus:outline-none " value={loading ? "loading..." : 'Signup'} />

                        </div>

                    </form>
                    <p className='text-center my-5'>Already have BDFLIX account?
                        <Link className="label-text-alt link link-hover text-green-700 font-bold py-10 " to='/login'>Login</Link></p>
                </div>
            </div >
        </div >
    );
};

export default Signup;