import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Context/Authprovider/Authprovider';

const History = () => {
    const { user } = useContext(AuthContext)

    const [doFetch, setDoFetch] = useState(false);

    const [historys, sethistory] = useState([])

    useEffect(() => {

        fetch('https://bd-flix-server-emonkumardas.vercel.app/history')
            .then(res => res.json())
            .then(data => {
                sethistory(data)


            })

    }, [doFetch])

    const key = 'MovieID';

    const arrayUniqueByKey = [...new Map(historys.map(item =>
        [item[key], item])).values()];


    return (
        <div>
            <h1>HISTORY</h1>


        </div>
    );
};

export default History;