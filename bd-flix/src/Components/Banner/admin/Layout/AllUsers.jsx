import React from 'react';

import { FaPlusCircle, FaMinusCircle } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import { useQuery } from '@tanstack/react-query';
import { toast } from 'react-toastify';
const AllUsers = () => {

  // const [users, setAllUsers] = useState([])
  // useEffect(() => {
  //   fetch('https://bd-flix-server-emonkumardas.vercel.app/allUsers')
  //     .then(res => res.json())
  //     .then(data => {
  //       console.log(data)
  //       setAllUsers(data)

  //     })
  // }, [])



  const { data: user = [], refetch } = useQuery({
    queryKey: ['user'],
    queryFn: async () => {
      const res = await fetch('https://bd-flix-server-emonkumardas.vercel.app/allusers/');
      const data = await res.json();
      return data;
    }
  });


  const MakeAdmin = id => {
    fetch(`https://bd-flix-server-emonkumardas.vercel.app/allUsers/admin/${id}`, {
      method: 'PUT',
      headers: {
        authorization: `bearer ${localStorage.getItem('accessToken')}`
      }
    })
      .then(
        res => res.json()
      )
      .then(data => {
        if (data.modifiedCount > 0) {
          toast.success('Make admin successful')
          refetch();
        }
      })
  }






  const MakeMember = id => {
    fetch(`https://bd-flix-server-emonkumardas.vercel.app/allUsers/deleteAdmin/${id}`, {
      method: 'PUT',
      headers: {
        authorization: `bearer ${localStorage.getItem('accessToken')}`
      }
    })
      .then(
        res => res.json()
      )
      .then(data => {
        if (data.modifiedCount > 0) {
          toast.success('Make user successful')
          refetch();
        }
      })
  }

  const Deleteuser = id => {
    fetch(`https://bd-flix-server-emonkumardas.vercel.app/allUsers/${id}`, {
      method: 'DELETE',
      authorization: `bearer ${localStorage.getItem('accessToken')}`

    })
      .then(
        res => res.json()
      )
      .then(data => {






        if (data.deletedCount > 0) {
          toast.success(' successfully deleted')
          refetch();

        }

      })
  }


  return (
    <div className='bg-[#3a3b3c] w-full rounded-lg'>



      <div>
        <div className="overflow-x-auto">
          <table className="table w-full">

            <thead>
              <tr>
                <th>Serial</th>
                <th>Image</th>
                <th>Email</th>
                <th>Admin</th>
                <th>Delete Admin</th>
              </tr>
            </thead>
            <tbody>

              {
                user.map((user, i) =>

                  <tr key={user?._id}>
                    <th>{i + 1}</th>

                    <td><div className="w-12">
                      <img className='rounded-full' src="https://placeimg.com/192/192/people" />
                    </div></td>

                    <td>{user?.email}</td>
                    <td >
                      <div className="dropdown dropdown-hover">
                        <label tabIndex={0}>{user?.role !== 'admin' ? <FaPlusCircle className='text-white font-bold hover:text-green-400 focus:outline-none focus:shadow-outline' onClick={() => MakeAdmin(user._id)}></FaPlusCircle> : <FaMinusCircle onClick={() => MakeMember(user._id)} className='text-white font-bold hover:text-green-400 focus:outline-none focus:shadow-outline'></FaMinusCircle>}</label>
                        <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                          {user?.role !== 'admin' ?
                            <li className='font-mono ...'>Make Admin</li>
                            :
                            <li className='font-mono ...'>Make User</li>
                          }

                        </ul>
                      </div></td>




                    <td>

                      <div className="dropdown dropdown-hover">
                        <label tabIndex={0}><MdDelete className='text-white font-bold hover:text-green-400 focus:outline-none focus:shadow-outline' onClick={() => Deleteuser(user._id)}></MdDelete>
                        </label>
                        <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                          <li className='font-mono ...'>Delete User</li>

                        </ul>
                      </div>

                    </td>


                  </tr>

                )
              }

            </tbody>
          </table>
        </div>
      </div>




    </div>
  );
};

export default AllUsers;