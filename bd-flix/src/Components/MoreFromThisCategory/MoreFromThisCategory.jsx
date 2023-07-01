import React from 'react';

const MoreFromThisCategory = ({movies}) => {
    return (
        <div className="w-full cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-110 ">
            <div className=''>
                <figure className=''>
                    <img className='w-full ' src={movies.PhotoUrl} alt="Shoes" />
                </figure>
                {/* <h2 className=" absolute bottom-2 text-center md:text-xl  font-bold text-white mx-2">{movies.name}</h2> */}
            </div>
        </div>
    );
};

export default MoreFromThisCategory;