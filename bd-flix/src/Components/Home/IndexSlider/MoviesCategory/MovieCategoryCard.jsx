import React, { useState } from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import './CategoryStyle.css';

const MovieCategoryCard = () => {
    const [arrowButtonVisibility, setArrowButtonVisibility] = useState(false);
    const categoryImages = [
        {
            image: "https://img.freepik.com/premium-psd/comedy-weekend-flyer_25996-78.jpg?w=740",
            text: "Action"
        },
        {
            image: "https://img.freepik.com/premium-psd/action-3d-text-effect_222802-108.jpg?w=740",
            text: "Action"
        },
        {
            image: "https://img.freepik.com/free-psd/2x1-scary-movie-promotion-3d-illustration_1419-2559.jpg?w=740&t=st=1673466732~exp=1673467332~hmac=41612e0b22928e449b89041bdd82a7a1e0ba804ca31dafe160fd907585387193",
            text: "Action"
        },
        {
            image: "https://img.freepik.com/free-psd/romantic-girl-looking-away-poster_23-2148367137.jpg?w=740&t=st=1673466884~exp=1673467484~hmac=e5bd1d7dfa27687b96bef3a0d099c60529d8d6cc18ea0733de447021a88a1e3c",
            text: "Action"
        },
        {
            image: "https://img.freepik.com/free-psd/investigation-flyer-template-theme_23-2148628043.jpg?w=740&t=st=1673467216~exp=1673467816~hmac=2c5a7567c2fa0646d113a7140597dfa8f8715a13d6d6223bc57b1887a8b89c6a",
            text: "Action"
        },
        {
            image: "https://img.freepik.com/premium-psd/gravity-universe-cinematic-title-text-effect_350817-875.jpg?w=826",
        },

    ]

    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrevSlide = () => {
        setCurrentIndex(currentIndex - 1);
    };

    const handleNextSlide = () => {
        setCurrentIndex(currentIndex + 1);
    };


    return (
        <>

            <div className="carousel carousel-center p-4 space-x-4 rounded-box"
                onMouseEnter={() => setArrowButtonVisibility(true)}
                onMouseLeave={() => setArrowButtonVisibility(false)}
            >
                <div className="carousel-item">
                    {
                        categoryImages.map((images, index) => (
                            <div
                                key={index}
                                className={`carousel-item m-2 cursor-pointer ${index === currentIndex ? 'active' : ''}`}
                                style={{
                                    transform: `translateX(${-100 * currentIndex}%)`,
                                    transition: 'transform 0.3s ease-in-out',
                                }}>
                                <div className="carousel-item m-2 relative">
                                    <img
                                        className='rounded-md lg:w-60 lg:h-60 w-40 h-40 transition-transform duration-300 ease-in-out transform hover-zoom'
                                        src={images.image} alt='' />
                                </div>
                            </div>
                        ))
                    }

                    <button
                        className={`lg:block hidden absolute top-44 bg-white text-red-700 rounded-full left-0 p-4 ${arrowButtonVisibility ? '' : 'hidden'}`}
                        onClick={handlePrevSlide}
                    >
                        <FaAngleLeft />
                    </button>

                    <button
                        className={`lg:block hidden absolute top-44 bg-white rounded-full right-0 text-red-700 p-4 ${arrowButtonVisibility ? '' : 'hidden'}`}
                        onClick={handleNextSlide}
                    >
                        <FaAngleRight />
                    </button>
                </div>
            </div>

        </>
    );
};

export default MovieCategoryCard;