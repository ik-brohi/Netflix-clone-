import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../Context/Authprovider/Authprovider';
import jugle from '../../images/jugle.jpg';

const Subscribe = () => {
    const { userInfo } = useContext(AuthContext)
    const handleSubscribe = () => {
        fetch(`https://bd-flix-server-emonkumardas.vercel.app/subscribe/${userInfo?.email}`, {
            method: "POST",
        })
            .then(res => res.json())
            .then(data => {
                window.location.replace(data.url);
            });
    }

    return (

        <div>
            <section className="py-20 text-gray-100">
                <div className=''>
                    <div className="hero min-h-screen bg-cover bg-center " style={{ backgroundImage: `url(${jugle})` }}>
                        <section className="hero-content md:grid-cols-2 flex-col lg:flex-row-reverse  bg-opacity-10 sticky top-0 z-10 shadow  backdrop-filter backdrop-blur-sm ">
                            <div className="container px-4 mx-auto">
                                <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }} className="max-w-2xl mx-auto mb-5 text-center  rounded-md">
                                    <h2 className="mb-10 text-4xl font-bold lg:text-5xl drop-shadow-2xl shadow-black p-3 rounded-md"> Buy a subscription pack and enjoy BDFLIX</h2>
                                    <span className="font-bold text-xl tracking-wider uppercase text-white-400 mt-5">Pricing</span>
                                </div>
                                <div className="flex flex-wrap items-stretch  mx-20">
                                    <div className="flex w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0">
                                        <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }} className="flex flex-col p-6 space-y-6 rounded shadow sm:p-8 border">
                                            <div className="space-y-2">
                                                <h4 className="text-2xl font-bold">Entry</h4>
                                                <span className="text-6xl font-bold">Free</span>
                                            </div>
                                            <p className="mt-3 leading-relaxed text-gray-400">Etiam ac convallis enim, eget euismod dolor.</p>
                                            <ul className="flex-1 mb-6 text-gray-400">
                                                <li className="flex mb-2 space-x-2">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 text-green-500">
                                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                                    </svg>
                                                    <span>Aenean quis</span>
                                                </li>
                                                <li className="flex mb-2 space-x-2">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 text-green-500">
                                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                                    </svg>
                                                    <span>Morbi semper</span>
                                                </li>
                                                <li className="flex mb-2 space-x-2">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 text-green-500">
                                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                                    </svg>
                                                    <span>Tristique enim nec</span>
                                                </li>
                                            </ul>
                                            <button onClick={handleSubscribe} type="button" className="inline-block px-5 py-3 font-semibold tracking-wider text-center rounded bg-green-500 text-gray-900">Get Started</button>
                                        </div>
                                    </div>
                                    <div className="w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0">
                                        <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }} className="flex flex-col p-6 space-y-6 rounded shadow sm:p-8 border">
                                            <div className="space-y-2">
                                                <h4 className="text-2xl font-bold">Stander</h4>
                                                <span className="text-6xl font-bold">$9
                                                    <span className="text-sm tracking-wide">/month</span>
                                                </span>
                                            </div>
                                            <p className="leading-relaxed text-gray-400">Phasellus ultrices bibendum nibh in vehicula.</p>
                                            <ul className="space-y-2 text-gray-400">
                                                <li className="flex items-start space-x-2">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 text-green-500">
                                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                                    </svg>
                                                    <span>Everything in Pro</span>
                                                </li>
                                                <li className="flex items-start space-x-2">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 text-green-500">
                                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                                    </svg>
                                                    <span>Fusce sem ligula</span>
                                                </li>
                                                <li className="flex items-start space-x-2">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 text-green-500">
                                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                                    </svg>
                                                    <span>Curabitur dictum</span>
                                                </li>
                                                <li className="flex items-start space-x-2">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 text-green-500">
                                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                                    </svg>
                                                    <span>Duis odio eros</span>
                                                </li>
                                                <li className="flex items-start space-x-2">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 text-green-500">
                                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                                    </svg>
                                                    <span>Vivamus ut lectus ex</span>
                                                </li>
                                            </ul>
                                            <button onClick={handleSubscribe} type="button" className="inline-block px-5 py-3 font-semibold tracking-wider text-center rounded bg-green-500 text-gray-900">Get Started</button>
                                        </div>
                                    </div>
                                    <div className="w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0">
                                        <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }} className="flex flex-col p-6 space-y-6 rounded shadow sm:p-8 border">
                                            <div className="space-y-2">
                                                <h4 className="text-2xl font-bold">Premium</h4>
                                                <span className="text-6xl font-bold">$19
                                                    <span className="text-sm tracking-wide">/month</span>
                                                </span>
                                            </div>
                                            <p className="leading-relaxed text-gray-400">Phasellus ultrices bibendum nibh in vehicula.</p>
                                            <ul className="space-y-2 text-gray-400">
                                                <li className="flex items-start space-x-2">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 text-green-500">
                                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                                    </svg>
                                                    <span>Everything in Pro</span>
                                                </li>
                                                <li className="flex items-start space-x-2">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 text-green-500">
                                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                                    </svg>
                                                    <span>Fusce sem ligula</span>
                                                </li>
                                                <li className="flex items-start space-x-2">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 text-green-500">
                                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                                    </svg>
                                                    <span>Curabitur dictum</span>
                                                </li>
                                                <li className="flex items-start space-x-2">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 text-green-500">
                                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                                    </svg>
                                                    <span>Duis odio eros</span>
                                                </li>
                                                <li className="flex items-start space-x-2">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 text-green-500">
                                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                                    </svg>
                                                    <span>Vivamus ut lectus ex</span>
                                                </li>
                                            </ul>
                                            <button onClick={handleSubscribe} type="button" className="inline-block px-5 py-3 font-semibold tracking-wider text-center rounded bg-green-500 text-gray-900">Get Started</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Subscribe;