import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'
const Filter = ({ Filters, filterVal, setShow, show, buttonvalue }) => {
    const navigate = useNavigate()

    const [categories, setCategories] = useState([]);

    useEffect(() => {

        // fetch('https://bd-flix-server-emonkumardas.vercel.app/category')

        fetch('https://bd-flix-server-emonkumardas.vercel.app/category')

            .then(res => res.json())
            .then(data => {
                console.log(data);
                setCategories(data)



            })

    }, [])





    console.log(filterVal, Filters)



    return (
        <>
            <form onSubmit={Filters}>
                <div className='my-6 flex flex-wrap justify-center gap-5'>

                    {/* --------------------------- */}

                    {/* --------------------------- */}

                    {/* --------------------------- */}
                    <div className="form-control">
                        <div className="input-group">
                            <select name='cat' className="select select-bordered bg-white text-black">
                                <option disabled selected>Pick category</option>

                                {
                                    categories?.map(cate => <option name='option'>{cate.categoryName}</option>)
                                }

                            </select>
                        </div>
                    </div>



                    {/* --------------------------- */}
                    <button className='bg-green-700 px-10 py-3 text-white rounded-sm font-semibold font-serif' onClick={() => setShow(!show)}>Submit</button>
                </div>
            </form>
        </>
    );
};

export default Filter;