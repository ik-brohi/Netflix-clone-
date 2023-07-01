import { useEffect } from 'react';
import { useState } from 'react';

const Allmovies = () => {
    
    const [allMovies, setallMovies] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch('https://bd-flix-server-i4wbktqxf-mohammad0076.vercel.app/movies')
            .then(res => res.json())
            .then(res => {
                setallMovies(res)
                setLoading(false)
            });
    }, [])

    return [allMovies, loading];
};

export default Allmovies;