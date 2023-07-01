import React from 'react';
import { Link } from 'react-router-dom';

const Recommended = ({ movies }) => {


    return (
        <>
            <Link to={`/allmovie/${movies.id}`}>
                <div style={{ clear: "both" }} className="w-full cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-110">
                    <div className=''>
                        <figure>
                            <img className='h-60 w-full object-cover rounded-md'
                                src={movies.poster_path} alt="Shoes" />
                        </figure>
                    </div>
                </div>
            </Link>

        </>
    );
};

export default Recommended;