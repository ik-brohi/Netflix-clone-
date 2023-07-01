import React, { useEffect } from 'react';
import { useState } from 'react';
import { toast } from 'react-toastify';

const AllCategories = () => {


    const [categories, setCategories] = useState([])
    const [doFetch, setDoFetch] = useState(false);


    useEffect(() => {

        fetch('https://bd-flix-server-emonkumardas.vercel.app/category')
            .then(res => res.json())
            .then(data => {
                setCategories(data)
                setDoFetch(false)
            })

    }, [doFetch])



    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const catName = form.catInput.value.toLowerCase();

        const ifExist = !!categories.find(cat => cat.categoryName === catName);

        if (ifExist) {
            toast(" this category is already exist !")
        }
        else {
            const newCategory = {
                'categoryName': catName
            }


            // fetch('https://bd-flix-server-emonkumardas.vercel.app/category', {



                // fetch('https://bd-flix-server-emonkumardas.vercel.app/category', {


                    fetch('https://bd-flix-server-emonkumardas.vercel.app/category', {


                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(newCategory)
                    })
                .then(res => res.json())
                .then(data => {
                    if (data.acknowledged) {
                        toast("Add success")
                        form.reset();
                        setDoFetch(true)
                    }
                })
                .catch(er => console.error(er));

        }




    }


    return (
        <div className='lg:grid grid-cols-2'>
            <div className='m-10'>
                <p className='text-2xl font-bold'>All Categories</p>
                {
                    categories?.map((cat, idx) =>
                        <div className='text-green-500 mx-10 my-5'>{(idx + 1) + ". " + cat.categoryName}</div>
                    )
                }
            </div>
            <div className='m-10'>
                <p className='mb-5'>Add Categories</p>
                <form onSubmit={handleSubmit} >
                    <input className='mb-5 h-10 border' name='catInput' type="text"></input><br></br>
                    <button className='btn bg-green-500' type="submit">Add</button>
                </form>
            </div>
        </div>
    );
};

export default AllCategories;