import React from 'react';
import SeriesCard from '../SeriesCard/SeriesCard';

const SeriesIndex = () => {
    return (
        <div className='relative'>
            <div className='relative lg:h-[700px]'>
                <img className='lg:w-[100vw] lg:h-[50vw] h-[80vh] object-cover' src="https://cdn.bioscopelive.com/upload/contentselector/background/lzJK57yLs8k.jpg" alt="" />
                <div className='absolute top-0 py-10 px-6'>
                    <p className='font-bold text-2xl'>Ke?</p>
                    <p className='lg:w-[20vw] text-slate-400'>Drama,Mystery <br></br>
                        The mysterious murder of a popular director makes the police doubt his close friend but it could also be someone else.</p>
                    <button class="btn bg-green-800 my-3 px-10 font-bold text-xl rounded hover:bg-green-500">See All</button>
                </div>
            </div>
            {/* end of background */}

            <div className='absolute lg:top-64 top-60 bottom-0'>
                <SeriesCard></SeriesCard>
            </div>

        </div>
    );
};

export default SeriesIndex;