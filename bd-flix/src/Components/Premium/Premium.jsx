import React from 'react';

const Premium = () => {

    const PopularMovies = [

        {
            "name": "Bandhobi",
            "PhotoUrl": "https://i.ibb.co/7rjktyD/bandhobi2.png"
        },
        {
            "name": "Ekti Sobuj Bag",
            "PhotoUrl": "https://i.ibb.co/8mr5s3D/akti3.png"
        },
        {
            "name": "Shadi main...",
            "PhotoUrl": "https://i.ibb.co/gvYsqG1/shadhi4.png"
        },
        {
            "name": "Shukrana",
            "PhotoUrl": "https://i.ibb.co/D8zQLf9/shukra5.png"
        },
        {
            "name": "Ant Man",
            "PhotoUrl": "https://i.ibb.co/G0Z59XG/ant6.png"
        },
        {
            "name": "Bizli",
            "PhotoUrl": "https://i.ibb.co/Ph52WTw/bizli7.png"
        },
        {
            "name": "Movie Name",
            "PhotoUrl": "https://i.ibb.co/7rjktyD/bandhobi2.png"
        }
    ]



    return (
        <div>
            <div className='mx-auto my-5 mt-5'>
                <p className='text-2xl text-center font-bold mb-3'>Enjoy our premium contents</p>
                <div className='carousel carousel-center mx-auto'>
                    <div className="carousel-item grid grid-cols-3 mx-auto ">
                        {
                            PopularMovies?.map(movies => <div className=" mx-auto carousel-item w-24 md:w-60 lg:w-96 m-1 md:m-2 image-full cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-110 ">
                                <div className='relative mx-auto'>
                                    <figure className='poster-img'>
                                        <img className='' src={movies.PhotoUrl} alt="Shoes" />
                                    </figure>
                                    <h2 className=" absolute bottom-2 text-center md:text-xl  font-bold text-white  mx-2 ">{movies.name}</h2>
                                </div>
                            </div>)
                        }
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Premium;