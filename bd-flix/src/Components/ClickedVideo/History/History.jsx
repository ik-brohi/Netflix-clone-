import React, { useContext, useEffect, useState } from 'react';
import { MdDelete } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../Context/Authprovider/Authprovider';
import Historys from './Historys';


const History = () => {
    const { user } = useContext(AuthContext)

    const [doFetch, setDoFetch] = useState(false);

    const [historys, sethistory] = useState([])

    useEffect(() => {

        fetch('https://bd-flix-server-emonkumardas.vercel.app/history')
            .then(res => res.json())
            .then(data => {
                sethistory(data)
                setDoFetch(false)


            })

    }, [doFetch])

    const key = 'MovieID';

    const arrayUniqueByKey = [...new Map(historys.map(item =>
        [item[key], item])).values()];

    const userhistory = (arrayUniqueByKey.filter(watch => (watch.email === user.email)));









    const DeleteHis = (id) => {


        fetch(`https://bd-flix-server-emonkumardas.vercel.app/history/${id}`, {
            method: 'DELETE',
            authorization: `bearer ${localStorage.getItem('accessToken')}`

        })
            .then(
                res => res.json()
            )
            .then(data => {
                console.log(data)

                if (data.acknowledged) {
                    // console.log(data)
                    toast.success(' successfully deleted')
                    setDoFetch(true)

                }

            })

    }
    return (
        <div className=''>


            <div className='bg-[#3a3b3c] w-full rounded-lg '>



                <div>
                    <div className="overflow-x-auto">

                        <table className="table w-full mt-20">


                            <thead>



                                <tr>

                                    <th>Serial</th>
                                    <th>Poster</th>
                                    <th>Movie title</th>
                                    <th>Viewing time</th>

                                    <th onClick={() => DeleteHis(user.email)}>
                                        delete all

                                    </th>

                                </tr>
                            </thead>

                            <tbody>

                                {

                                    userhistory.map((userhis, i) =>
                                        <tr key={userhis?._id}>
                                            <th>{i + 1}</th>

                                            <td><div className="w-12">
                                                <img className='rounded-full' src={userhis.posterimg} />
                                            </div></td>


                                            <td><Link to={userhis.route}>{userhis?.title} {console.log(userhis.email)}</Link></td>
                                            <td>{userhis?.defaultTime}</td>
                                            <td></td>


                                            {/* <td>

                                                <div className="dropdown dropdown-hover">
                                                    <label tabIndex={0}><MdDelete className='text-white font-bold hover:text-green-400 focus:outline-none focus:shadow-outline' onClick={() => DeleteHis(userhis.email)}></MdDelete>
                                                    </label>
                                                    <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                                                        <li className='font-mono ...'>Delete History</li>

                                                    </ul>
                                                </div>

                                            </td> */}



                                        </tr>)








                                }

                            </tbody>
                        </table>
                    </div>
                </div>




            </div>


        </div>
    );
};

export default History;