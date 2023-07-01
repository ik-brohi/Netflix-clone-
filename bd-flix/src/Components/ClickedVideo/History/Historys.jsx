import React, { useState } from 'react';
import { toast } from 'react-toastify';

const Historys = ({ userhis }) => {


    const [doFetch, setDoFetch] = useState(false);
    const DeleteHis = (id) => {


        fetch(`https://bd-flix-server-emonkumardas.vercel.app/history/${id}`, {
            method: 'DELETE',
            authorization: `bearer ${localStorage.getItem('accessToken')}`

        })
            .then(
                res => res.json()
            )
            .then(data => {


                if (data.acknowledged) {

                    toast.success(' successfully deleted')
                    setDoFetch(true)

                }

            })

    }
    return (
        <div>


            <div className="dropdown dropdown-hover">
                <label tabIndex={0} onClick={() => DeleteHis(userhis.email)}>Delete ALL
                </label>
                <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                    <li className='font-mono ...'>Delete History</li>

                </ul>
            </div>

        </div >

    );
};

export default Historys;