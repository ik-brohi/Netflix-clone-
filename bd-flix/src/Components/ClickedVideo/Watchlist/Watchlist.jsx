import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../Context/Authprovider/Authprovider';
import Watchtable from './Watchtable';

const Watchlist = () => {

    const [watchlist, setwatchlists] = useState([])
    const [doFetch, setDoFetch] = useState(false);


    const { user } = useContext(AuthContext)


    useEffect(() => {

        fetch('https://bd-flix-server-emonkumardas.vercel.app/watchlist')
            .then(res => res.json())
            .then(data => {

                // const ifExist = !!watchlist.map(watch => ((watch.email === user.email)));


                setwatchlists(data.filter(watch => (watch.email === user.email)))
                setDoFetch(false)










            })

    }, [user.eamil, doFetch])










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
    //                 SetdoFetch(false)

    //             }, [doFetch, user.email, singleMovie.MovieID])




    //     }

    // )

    const DeleteWatchlist = id => {
        fetch(`https://bd-flix-server-emonkumardas.vercel.app/watchlist/${id}`, {
            method: 'DELETE',
            authorization: `bearer ${localStorage.getItem('accessToken')}`

        })
            .then(
                res => res.json()
            )
            .then(data => {
                // console.log(data)

                if (data.deletedCount > 0) {
                    toast.success(' successfully deleted')
                    setDoFetch(true)

                }

            })
    }










    return (


        <div className="overflow-x-auto w-full">



            <table className="table w-full mt-32 ">






                <thead>
                    <h2 className='pl-4 font-semibold text-white '> My Watchlists </h2>
                    <tr>
                        <th>NO.</th>
                        <th>Poster</th>
                        <th>Name</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>

                <tbody>

                    {
                        watchlist.map((singleMovie, i = 1) =>
                            <tr>
                                <td>{i + 1}</td>
                                <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                        <img src={singleMovie.posterimg} alt="" />
                                    </div>
                                </div>


                                <td>{singleMovie.title}</td>
                                <td> <button className='bg-emerald-600 mb-6 text-center hover:bg-teal-500 px-5 py-2 rounded-full font-bold' onClick={() => DeleteWatchlist(singleMovie._id)}>Delete</button></td>
                                <Link to={`${singleMovie.route} `}><td><button className='bg-emerald-600 mb-6 text-center hover:bg-teal-500 px-5 py-2 rounded-full font-bold'>Watch </button></td></Link>

                            </tr>

                        )
                    }
                </tbody>
            </table>
        </div>


    );
};

export default Watchlist;