import React, { useContext, useState } from 'react';
import { useEffect } from 'react';
import { Link, Navigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../Authprovider';
import Reset from './Reset';

const Forget = () => {
    const [error, setError] = useState('')
    const [isReset, setIsReset] = useState(false);
    const [code, setCode] = useState('')
    const location = useLocation('')
    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        if (searchParams.has('reset')) {
            isReset(true)


        }
    }, [location.search]);
    const notify = () => {


        toast.success(' Cheack your email', {

        });
    }

    if (error === 'Firebase: Error (auth/user-not-found).') {
        toast.error('WRONG EMAIL')
    }

    if (error === ' auth/user-not-found') {
        toast.error('USER NOT FOUND')
    }


    const { Resetpass } = useContext(AuthContext)
    const resetpassword = (event) => {
        event.preventDefault();


        const email = event.target.email.value;


        Resetpass(email).then(() => {

            notify()




        })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setError(errorMessage)
                setCode(errorCode)


                // ..
            })
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content md:grid-cols-2 flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">RESET PASSWORD!</h1>
                        <p className="py-6">I know all about this. For years I have been continuously improving, accumulating knowledge and experience.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body" onSubmit={resetpassword}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Enter Your Email</span>
                                </label>
                                <input type="text" name="email" placeholder="enter email " className="input input-bordered" />
                            </div>
                            {
                                isReset ? <Reset></Reset> : null
                            }

                            <div className="form-control mt-6">

                                {/* text-green-700 hover:text-green-400 lg:text-3xl focus:outline-none  */}
                                <input type="submit" className="btn btn-primary text-green-700 hover:text-green-400 lg:text-2xl  focus:outline-none " value="Submit" />

                            </div>

                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Forget;