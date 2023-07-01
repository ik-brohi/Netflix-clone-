import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Admin from "../../Components/Banner/admin/Admin";
import AllCategories from "../../Components/Banner/admin/Layout/AllCategories";
import AllMovies from "../../Components/Banner/admin/Layout/AllMovies";
import AllUsers from "../../Components/Banner/admin/Layout/AllUsers";
import MovieUpdate from "../../Components/Banner/admin/Layout/MovieUpdate";
import UploadMovies from "../../Components/Banner/admin/Layout/UploadMovies";
import ClickedVideo from "../../Components/ClickedVideo/ClickedVideo";
import History from "../../Components/ClickedVideo/History/History";
import Watchlist from "../../Components/ClickedVideo/Watchlist/Watchlist";
import EditProfile from "../../Components/Context/Authprovider/Authintication/EditProfile";
import Forget from "../../Components/Context/Authprovider/Authintication/Forget";
import Login from "../../Components/Context/Authprovider/Authintication/Login";
import Profile from "../../Components/Context/Authprovider/Authintication/Profile";
import Reg from "../../Components/Context/Authprovider/Authintication/Reg";
import Reset from "../../Components/Context/Authprovider/Authintication/Reset";
import Error from "../../Components/Error/Error";
import HomePage from "../../Components/Home/IndexPage/HomePage";
import LogInScreen from "../../Components/LogInScreen/LogInScreen";
import Movies from "../../Components/Movies/Movies";
import Premium from "../../Components/Premium/Premium";
import Subscribe from "../../Components/Subscribe/Subscribe";
import TvShows from "../../Components/Tvshows/Tvshows";
import Main from "../../Main/Main";
import Private from "../Private";
import PrivateAdmin from "../PrivateAdmin";
import OnlyForSubscriber from "../OnlyForSubscriber";
import PaymentSuccess from "../../Components/PaymentInfo/PaymentSuccess";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Private><HomePage></HomePage></Private>
            },
            {
                path: '/payment/success',
                element: <Private><PaymentSuccess></PaymentSuccess></Private>
            },
            
            {
                path: '/clickedvideo/:id',
                loader: ({ params }) => fetch(`https://bd-flix-server-i4wbktqxf-mohammad0076.vercel.app/movie/${params.id}`),
                element: <Private><OnlyForSubscriber><ClickedVideo></ClickedVideo></OnlyForSubscriber></Private>
            },
            {
                path: '/moviesforyou/:id',
                loader: ({ params }) => fetch(`https://bd-flix-server-i4wbktqxf-mohammad0076.vercel.app/movie/${params.id}`),
                element: <Private><OnlyForSubscriber><ClickedVideo></ClickedVideo></OnlyForSubscriber></Private>
            },
            {
                path: '/allmovie/:id',
                loader: ({ params }) => fetch(`https://bd-flix-server-i4wbktqxf-mohammad0076.vercel.app/movie/${params.id}`),
                element: <Private><OnlyForSubscriber><ClickedVideo></ClickedVideo></OnlyForSubscriber></Private>
            },
            {
                path: '/subscribe',
                element: <Private><Subscribe></Subscribe></Private>
            },
           
            {
                path: '/forget',
                element: <Forget></Forget>
            },
            {
                path: '/resetform',
                element: <Reset></Reset>

            },


            {
                path: '/movies',
                element: <Private><Movies></Movies></Private>

            }, {
                path: '/profile',
                element: <Private><Profile></Profile></Private>

            }, {
                path: '/history',
                element: <Private><History></History></Private>

            },
            {
                path: '/editprofile',
                element: <Private><EditProfile></EditProfile></Private>

            },
            {
                path: '/watchlist',
                element: <Private><Watchlist></Watchlist></Private>

            },
            {
                path: '/tvshows',
                element: <TvShows></TvShows>

            },
            {
                path: '/premium',
                element: <Private><Premium></Premium></Private>

            }, {
                path: '*',
                element: <Error></Error>
            },

        ]
    },
    {
        path: '/admin',
        element: <Admin />,
        children: [

            {
                path: '/admin',
                element: <PrivateAdmin><AllMovies /></PrivateAdmin>

            },
            {
                path: '/admin/allmovies',
                element: <PrivateAdmin><AllMovies /></PrivateAdmin>

            },
            {
                path: '/admin/allmovies',
                element: <PrivateAdmin><AllMovies /></PrivateAdmin>

            },
            {
                path: '/admin/allusers',
                element: <PrivateAdmin><AllUsers /></PrivateAdmin>

            },
            {
                path: '/admin/uploadmovies',
                element: <PrivateAdmin><UploadMovies /></PrivateAdmin>

            },
            {
                path: '/admin/updatemovie',
                element: <PrivateAdmin><MovieUpdate /></PrivateAdmin>

            },
            {
                path: '/admin/allCategories',
                element: <PrivateAdmin><AllCategories></AllCategories>
                </PrivateAdmin>
            },
        ]
    },
    {
        path: '/Welcome',
        element: <LogInScreen />
    },
    {
        path: '/login',
        element: <Login></Login>
    },
    {
        path: '/signup',
        element: <Reg></Reg>
    }
]);
export default router;