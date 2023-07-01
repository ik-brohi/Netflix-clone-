import React, { useEffect, useState } from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

const SeriesCard = () => {

    const [Serial, setSerial] = useState([]);
    useEffect(() => {
        fetch('https://api.themoviedb.org/3/discover/movie?with_genres=18&sort_by=vote_average.desc&vote_count.gte=10&api_key=eee5a0807cf7657a9864307cf8ff4c84')
            .then(res => res.json())
            .then(result => setSerial(result.results))
    }, [])
    let image = 'https://image.tmdb.org/t/p/w500/';
    
    // const PopularMovies = [

    //     {
    //         "name": "Bandhobi",
    //         "PhotoUrl": "https://cdn.bioscopelive.com/upload/content/tivoPortrait/hd/SMuzMY44K2S.jpg"
    //     },
    //     {
    //         "name": "Ekti Sobuj Bag",
    //         "PhotoUrl": "https://cdn.bioscopelive.com/upload/content/tivoPortrait/hd/9LmwlPa4D4r.jpg"
    //     },
    //     {
    //         "name": "Shadi main...",
    //         "PhotoUrl": "https://cdn.bioscopelive.com/upload/content/tivoPortrait/hd/c23AE9SXUy7.jpg"
    //     },
    //     {
    //         "name": "Shukrana",
    //         "PhotoUrl": "https://cdn.bioscopelive.com/upload/content/tivoPortrait/hd/v8e1BJ8lm4t.jpg"
    //     },
    //     {
    //         "name": "Ant Man",
    //         "PhotoUrl": "https://cdn.bioscopelive.com/upload/content/tivoPortrait/hd/EfqP3Sq3Ej0.jpg"
    //     },
    //     {
    //         "name": "Bizli",
    //         "PhotoUrl": "https://cdn.bioscopelive.com/upload/content/tivoPortrait/hd/c23AE9SXUy7.jpg"
    //     },
    // ]

    const [arrowButtonVisibility, setArrowButtonVisibility] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrevSlide = () => {
        setCurrentIndex(currentIndex - 1);
    };

    const handleNextSlide = () => {
        setCurrentIndex(currentIndex + 1);
    };


    return (
        <div className='ml-8 my-12'>
            <div className='mb-3'>
                <h1 className='text-md   font-bold text-white'>Recent Episode</h1>
            </div>
            <>
                <div className="carousel carousel-center lg:h-[20vw]"
                    onMouseEnter={() => setArrowButtonVisibility(true)}
                    onMouseLeave={() => setArrowButtonVisibility(false)}
                >
                    <div className="carousel-item">
                        {
                            Serial.map((images, index) => (
                                <div
                                    key={index}
                                    className={`carousel-item cursor-pointer ${index === currentIndex ? 'active' : ''}`}
                                    style={{
                                        transform: `translateX(${-100 * currentIndex}%)`,
                                        transition: 'transform 0.3s ease-in-out',
                                    }}>

                                    <div className="rounded-md carousel-item h-[200px] relative">
                                        <img
                                            className='object-cover rounded-md w-[150px] h-[190px] lg:h-60 lg:w-full transition-transform duration-300 ease-in-out transform hover-zoom'
                                            src={image+images.poster_path} alt=''
                                        ></img>
                                        <h2 className=" absolute lg:bottom-3 text-center md:text-md text-md font-semibold text-white mx-2 ">{images.name}</h2>
                                    </div>
                                </div>
                            ))
                        }

                        <button
                            className={`lg:block hidden absolute bottom-56 text-2xl text-white rounded-full left-0 p-4 ${arrowButtonVisibility ? '' : 'hidden'}`}
                            onClick={handlePrevSlide}
                        >
                            <FaAngleLeft />
                        </button>

                        <button
                            className={`lg:block hidden absolute bottom-56 text-2xl rounded-full right-0 text-white p-4 ${arrowButtonVisibility ? '' : 'hidden'}`}
                            onClick={handleNextSlide}
                        >
                            <FaAngleRight />
                        </button>
                    </div>
                </div>

            </>
        </div>
    );
};

export default SeriesCard;