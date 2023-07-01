import { GoogleAuthProvider, confirmPasswordReset } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { AuthContext } from '../Authprovider';

import { toast } from 'react-toastify';


const Reset = () => {
    const [error, setError] = useState('')





    const { signIn } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation();
    const form = location?.state?.from?.pathname || '/';

    const handlelogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const string = "";


        confirmPasswordReset(password, string)

    }
    const { Resetpass } = useContext(AuthContext)



    const reset = () => {
        Resetpass()
    }






    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content md:grid-cols-2 flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Reset Your Password</h1>
                    <p className="py-6">I know all about this. For years I have been continuously improving, accumulating knowledge and experience.</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handlelogin} className="card-body">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" name="password" placeholder="password" className="input input-bordered" />

                        </div>

                        <div>
                            {/* <h1 className='text-red-400 font-bold'>{error}</h1> */}
                            {/* Firebase: Error (auth/email-already-in-use) */}
                        </div>
                        <div className="form-control mt-6">
                            <input type="submit" className="btn btn-primary text-green-700 hover:text-green-400 lg:text-2xl  focus:outline-none " value="Reset" />

                        </div>


                    </form>
                    <p className='text-center my-5'>Have another account? <Link className="label-text-alt link link-hover text-green-600 font-bold py-10 " to='/Login'>Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Reset;