import React, { useEffect } from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/Authprovider/Authprovider';

const Watchtable = ({ singleMovie }) => {
    // const { user } = useContext(AuthContext)

    // const [colour, setcolour] = useState(false)
    // const [fetch, doFetch] = useState(false)
    // useEffect(
    //     () => {
    //         fetch(`https://bd-flix-server-emonkumardas.vercel.app/watchlists/?email=${user.email}&&movieid=${singleMovie.MovieID}`)
    //             .then(res => res.json())
    //             .then(data => {



    //                 setcolour(data)
    //                 console.log(colour)

    //                 if (user.email === singleMovie.MovieID) {
    //                     setcolour(true)

    //                 }
    //                 doFetch(false)

    //             }, [doFetch, user.email, singleMovie.MovieID])




    //     }

    // )






    return (
        <div>
            <button className='bg-emerald-600 mb-6 text-center hover:bg-teal-500 px-5 py-2 rounded-full font-bold'>Delete</button>

        </div>
    );
};

export default Watchtable;