import React, { useEffect, useState } from 'react';
import img1 from '../../../SlideImages/img2.png';

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slider = [
        { sliderImage: img1, moviesName: "panthar", publishedDate: "", },
        { sliderImage: 'https://cdn.bioscopelive.com/upload/slide/topBannerDesktop/9vz5k067H1o.jpg', moviesName: "panthar", publishedDate: "", },
        { sliderImage: 'https://cdn.bioscopelive.com/upload/slide/topBannerDesktop/3kMUBFGj6xZ.jpg', moviesName: "panthar", publishedDate: "", },
        { sliderImage: 'https://cdn.bioscopelive.com/upload/slide/topBannerDesktop/j0UCJSQdxgu.jpg', moviesName: "panthar", publishedDate: "", },
    ]

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((currentSlide + 1) % slider.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [currentSlide]);

    return (
  
        
        < >
        <div className='' style={{}}>
    
            <div className='relative'>
                <div className=' inset-0'>
                    <div className='border-b-4 border-indigo-500'>
                        <img
                            className='lg:h-[550px] w-full object-cover transition transform duration-300 ease-in'
                            src={slider[currentSlide].sliderImage} alt="" />
                        <div className='lg:inset-0 lg:bg-black lg:opacity-50'></div>
                    </div>
                </div>

                <div className='absolute bottom-0 left-0 right-0 flex justify-center'>
                    {slider.map((_, index) => (
                        <div
                            key={index}
                            className={`w-14 h-[3px] rounded-md m-2 ${currentSlide === index ? 'bg-green-700' : 'bg-gray-300'}`}
    
                        />
                    ))}
                </div>
            </div>
  
        </div>
   
        </>
    
    );
};

export default Slider;
