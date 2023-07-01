import React from 'react';
import Allmovies from '../../Hooks/Allmovies/Allmovies';
import SplashScreen from '../../SplashScreen/SplashScreen';
import AllmoviesCard from './AllmoviesCard';

const Movies = () => {
    const [allMovies, loading] = Allmovies();
    return (
        <div className='relative top-16' style={{clear:"both"}}>
            <h2 className='p-3 font-semibold text-white'> All Movies </h2>

            {
                loading ? <><SplashScreen></SplashScreen></> :
                    <div className='grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2'>
                        <>
                            {
                                allMovies.map(data => <AllmoviesCard loading={loading} allMovies={data}></AllmoviesCard>)

                            }

                        </>
                    </div>
            }


        </div>
    );
};

export default Movies;