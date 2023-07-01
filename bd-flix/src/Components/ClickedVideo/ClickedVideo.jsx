import React, { useContext, useRef, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { BiShareAlt } from 'react-icons/bi';
import { MdPlaylistAdd } from 'react-icons/md';
import { useLocation } from 'react-router-dom'
import { AiFillPlayCircle } from 'react-icons/ai';
import Recommended from '../Recommended/Recommended';
import MoreFromThisCategory from '../MoreFromThisCategory/MoreFromThisCategory';

import { RiThumbUpFill, RiThumbUpLine } from 'react-icons/ri';
import { useEffect } from 'react';
import ClickedVideoReview from './ClickedVideoReview';
import Download from './Download/Download';


import { AuthContext } from '../Context/Authprovider/Authprovider';
import { toast } from 'react-toastify';

import date from 'date-and-time';
import Share from './Share/Share';

const ClickedVideo = () => {

    const { user } = useContext(AuthContext)

    const data = useLoaderData();
    const [recomended, setRecomended] = useState([]);
    const [video, setVideo] = useState(data?.video);

    const [isLiked, setIsLiked] = useState(false);
    const [doFetch, setDoFetch] = useState(false);
    const [newData, setNewData] = useState(data);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        fetch(`https://recomended-movie.onrender.com/recommend/${data.original_title}`)
            .then(res => res.json())
            .then(result => {
                console.log("result", result);
                setRecomended(result)
                setLoading(false)
            })
    }, [])


    const location = useLocation()

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



    // fetch isliked information \/

    useEffect(() => {
        fetch(`https://bd-flix-server-emonkumardas.vercel.app/isLiked/?email=${user?.email}&postId=${data._id}`)
            .then(res => res.json())
            .then(data => {
                if (user?.email === data?.userEmail) {
                    setIsLiked(true)
                }
            })
    }, [user?.email, data._id])



    const showLike = () => {

        fetch(`https://bd-flix-server-emonkumardas.vercel.app/numoflike/?postId=${data._id}`)
            .then(res => res.json())
            .then(data => {
                setNewData(data)
            })
            .catch(er => console.error("notun error", er));

    }

    // Start Like and dislike post---------------------------------------->

    const handleLike = () => {

        const likeInfo = {
            userEmail: user?.email,
            videoId: data._id
        }

        fetch('https://bd-flix-server-emonkumardas.vercel.app/likes', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(likeInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    // setDoFetch(false)
                    setIsLiked(true)
                }
            })
            .catch(er => console.error(er));


        fetch('https://bd-flix-server-emonkumardas.vercel.app/videoLike', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ id: data._id, increase: 1 })
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    setDoFetch(true)
                    showLike()
                    // setIsLiked(true)
                }
            })
            .catch(er => console.error(er));


    }

    const [watchlist, setwatchlists] = useState([])

    useEffect(() => {

        fetch('https://bd-flix-server-emonkumardas.vercel.app/watchlist')
            .then(res => res.json())
            .then(data => {
                setwatchlists(data)
                setDoFetch(false)

            })

    }, [doFetch])




    const [change, setchange] = useState(false)
    // console.log(change)


    // }




    const onWatchlistButtonclick = (event) => {
        event.preventDefault()



        const email = user?.email;
        const name = user?.displayName;
        const MovieID = data?._id;
        const title = data?.title;
        const posterimg = data.poster_path;



        const route = `${location?.pathname}`
        const getuser = (!!watchlist.find(watch => watch?.email))
        const newe = watchlist.map(watch => watch?.email)
        // const a = [...newe]
        // console.log(a)

        // const uniq = [...new Set(a)];
        // console.log(uniq)


        const ifExist = !!watchlist.find(watch => ((watch.MovieID === MovieID) && (watch.email === user.email)));




        if (ifExist) {



            toast("this video is already added!")
        }
        else {
            if (user.uid) {
                const watchlists = {
                    email, name, MovieID, title, route, posterimg, change

                }
                // console.log(watchlists)

                fetch('https://bd-flix-server-emonkumardas.vercel.app/watchlist', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(watchlists)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.acknowledged) {
                            toast.success('successfully added on watchlist')
                            setDoFetch(true)
                        }

                    })
                    .catch(error => {
                        console.error(error)

                    })
            }
            else {
                toast.error('please login')
            }
        }




    }
    //end of watchlist


    //history api fetch








    const history = (event) => {
        event.preventDefault();

        const email = user?.email;
        const name = user?.displayName;
        const MovieID = data?._id;
        const title = data?.title;
        const posterimg = data.poster_path;
        const route = `${location?.pathname}`
        const now = new Date();

        const defaultTime = new Date(date.format(now, 'YYYY/MM/DD HH:mm:ss'))




        // const ifExist = !!historys.find(watch => ((watch.MovieID === MovieID) && (watch.email === user.email)));








        const history = {
            email, name, MovieID, title, route, posterimg, defaultTime

        }


        if (user.uid && user.email) {
            fetch('https://bd-flix-server-emonkumardas.vercel.app/history', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(history)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.acknowledged) {


                    }

                })
                .catch(error => {
                    console.error(error)

                })


        }

        else {
            toast.success('please')
        }


    }






    // handle dislike \/

    const handleDisLike = () => {

        const likeInfo = {
            userEmail: user?.email,
            videoId: data._id
        }

        fetch('https://bd-flix-server-emonkumardas.vercel.app/likes', {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(likeInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    setIsLiked(false)
                }
            })
            .catch(er => console.error(er));


        fetch('https://bd-flix-server-emonkumardas.vercel.app/videoLike', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ id: data._id, increase: -1 })
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    setDoFetch(true)
                    showLike()
                }
            })
            .catch(er => console.error(er));

    }

    const [play, setPlay] = useState(false);
    //End of Like and Dislike-------------------------------------->

    //Download-------------------------------------->

    const videoRef = useRef(null);

    const handleDownload = () => {
        const videoSrc = videoRef.current.src;
        const a = document.createElement("a");
        a.href = videoSrc;
        a.download = data?.video;
        a.click();
    };
    //End of Download-------------------------------------->

    return (
        <>
            <div className='mx-2 md:mx-4 relative top-20' onLoad={history}  >

                <div className=''>
                    <div className='col-span-2'>

                        <div className='relative h-[500px]'>

                            {!play ?
                                <div className='relative border'>
                                    <img className='object-cover w-full h-[500px]' src={data.poster_path} alt='poster'></img>
                                    <div className='absolute lg:inset-0 lg:bg-black lg:opacity-50'></div>
                                </div> :
                                <video ref={videoRef} className='h-full w-full' controls={play} autoPlay src={video}>
                                </video>
                            }
                            <button onClick={() => setPlay(!play)}>{play ? '' :
                                <AiFillPlayCircle className='text-4xl md:text-6xl text-green-700 absolute top-2/4 left-2/4'></AiFillPlayCircle>}</button>

                        </div>
                        <div className=''>

                            <div className='my-5 lg:flex justify-between'>

                                <p className='text-2xl font-bold mt-2'>{data.title ? data.title : data.original_title}</p>
                                <div className='flex justify-center items-center gap-16 font-bold'>
                                    <div className='flex justify-center items-center gap-10'>

    

                                        {
                                            isLiked ?
                                                <div className='flex flex-col justify-center items-center mt-2'>
                                                    <button onClick={handleDisLike} className='' > <RiThumbUpFill className='text-xl text-green-500 -mb-1'></RiThumbUpFill> </button>
                                                    <p className='text-[13px]'>{newData.likeCount} Like</p>
                                                </div>
                                                :
                                                <div className='flex flex-col justify-center items-center mt-2'>
                                                    <button onClick={handleLike} className='' > <RiThumbUpLine className='text-xl  -mb-1'></RiThumbUpLine> </button>
                                                    <p className='text-[13px]'>{newData.likeCount} Like</p>
                                                </div>
                                        }



                                        <div className=''>
                                            <MdPlaylistAdd onClick={onWatchlistButtonclick} className='text-xl mx-auto'></MdPlaylistAdd>
                                            <p className='text-xs -mt-1'>WatchList</p>
                                        </div>
                                        <div>
                                            <label htmlFor="my-modal-3" ><BiShareAlt className='text-xl mx-auto'></BiShareAlt>
                                                <p className='text-xs'>Share</p></label>
                                            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
                                            <div className="modal">
                                                <div className="modal-box bg-slate-800 relative flex justify-center">
                                                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                                                    <Share data={data}></Share>
                                                </div>
                                            </div>
                                        </div>
                                        <Download data={data}>
                                        </Download>
                                    </div>
                                </div>
                            </div>


                            <div className='bg-[#0c0620] my-5 p-5 rounded'>
                                <p className='font-bold'>{data.release_date} </p>
                                <p className='text-xl my-2 font-bold'>Description</p>
                                <p className='text-md'>{data.overview}</p>
                            </div>
                            <div>
                                <ClickedVideoReview data={data} />
                            </div>
                        </div>



                    </div>
                    {/* Recomendation------------------------------------------------------------------------ */}
                    <div className=''>
                        <p className='text-md font-bold mb-3'>Recommended</p>
                        <div className='mx-auto'>
                            <div className="grid lg:grid-cols-7 grid-cols-2 gap-3">
                                {
                                    loading ? "Loading..." : recomended?.slice(0, 6).map(movies =>
                                        <Recommended

                                            movies={movies}></Recommended>
                                    )
                                }
                            </div>
                        </div>
                    </div>

                    {/* Recomendation------------------------------------------------------------------------ */}
                </div>
                <div className='my-5 mb-20' style={{ clear: "both" }} >
                    <p className='text-md font-bold mb-3'>More from this category</p>
                    <div className='mx-auto'>
                        <div className="grid lg:grid-cols-7 md:grid-cols-4 grid-cols-2 gap-5">
                            {
                                PopularMovies?.map(movies =>
                                    <MoreFromThisCategory
                                
                                     movies={movies}></MoreFromThisCategory>
                                )}
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default ClickedVideo;