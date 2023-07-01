import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const MovieUpdate = ({ singleMovie }) => {
  const [loading, setLoading] = useState(false);
  const { state } = useLocation();
  const updateData = state.singleMovie
  const [newCategories, setNewCategories] = useState([])
  useEffect(() => {
    fetch('https://bd-flix-server-emonkumardas.vercel.app/category')
      .then(res => res.json())
      .then(data => {
        setNewCategories(data)
      })
  }, [])

  const navigate = useNavigate();
  const handleSubmit = event => {
    event.preventDefault()
    const poster_path = event.target.poster_path.files[0]
    const catagories = event.target.productCatagories.value
    const overview = event.target.overview.value
    const vote_average = ""
    const video = event.target.video.files[0]
    const original_title = event.target.original_title.value
    let catagoriesWithOutSpace = catagories
    let movieWithoutSpaces = catagoriesWithOutSpace.replace(/ /g, "");
    const formData = new FormData()
    formData.append('imageFile', poster_path)
  
  
    const formvideo = new FormData();
    formvideo.append('filename', video);

  console.log(formvideo);
    setLoading(true)
    const url = "https://bd-flix-server-emonkumardas.vercel.app/uploadPhoto"
    fetch('https://bd-flix-server-emonkumardas.vercel.app/uploadVideo', {
      method: 'POST',
      body:formvideo,
    })
    .then(res => {
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      return res.text();
    })
    .then(videoData => {
      if (videoData === 'No file uploaded.') {
        throw new Error('No video uploaded.');
      }
      return JSON.parse(videoData);
    })
    .then(result => {
      fetch(url, {
        method: 'POST',
        body: formData
      })
      .then(res => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.text();
      })
      .then(ImageData => {
        if (ImageData === 'No file uploaded.') {
          throw new Error('No image uploaded.');
        }
        const poster_path = JSON.parse(ImageData).url
        const updateMovie = {
          category: movieWithoutSpaces,
          original_title,
          overview,
          poster_path,
          vote_average,
          video: result.url
        }
  
        fetch(`https://bd-flix-server-emonkumardas.vercel.app/updateMovie/${updateData._id}`, {
          method: "PUT",
          headers: {
            "content-type": "application/json"
          },
          body: JSON.stringify(updateMovie)
        })
        .then(res => {
          if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
          }
          return res.json();
        })
        .then(data => {
          toast(data)
          if (data.success) {
            toast.success(data.message);
          } else {
            toast(data.error);
          }
          navigate('/admin/allmovies')
        })
        .catch(err => toast(err.message))
      })
      .catch(err => toast(err.message))
    })
    .catch(err => toast(err.message))
  }
  
  



  return (

    <div className='bg-slate-900 w-full  rounded-lg text-center'>
      <div className="hero my-4 ">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Update Your Movie</h1>

          </div>
          <form onSubmit={handleSubmit}>
            <div className="card mt-4 w-full">
              <div className="card-body grid lg:grid-cols-2 grid-cols-1">

                <div className="form-control">
                  {/* <label className="label">
                    <span className="label-text font-bold text-xl">Title: {updateData.original_title}</span>
                  </label> */}
                  <input type="text" required name='original_title' defaultValue={updateData.original_title} className="input bg-transparent rounded-md input-bordered" />
                </div>


                <div className="form-control">
                  {/* <label className="label">
                    <span className="label-text font-bold text-xl">Overview: {updateData.overview.slice(0, 30) + "..."}</span>
                  </label> */}
                  <input type="text" name='overview' defaultValue={updateData.overview.slice(0, 30) + "..."} className="input bg-transparent rounded-md input-bordered" />
                </div>


                <div className="form-control">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-xl font-bold">Banner</span>
                    </label>
                    <img className='w-[200px] h-[200px]' src={updateData.poster_path} alt=" Banner" />

                    {/* <input type="file" name='video' required placeholder="Image Upload" className="input input-bordered" /> */}
                  </div>
                  <label className="label">
                    <span className="label-text">Image Upload</span>
                  </label>
                  <div className="flex">
                    <input type="file" name="poster_path" accept='image/*' id="files" className="px-8 py-12 border-2 border-dashed rounded-md dark:border-gray-700 dark:text-gray-400 dark:bg-gray-800" />
                  </div>
                  {/* <input type="file" required name='poster_path' accept='image/*' placeholder="Image Upload" className="input input-bordered" /> */}
                </div>
                {/* this is video upload  */}

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Video Upload</span>
                  </label>

                  <div className="flex">
                    <input type="file" name="video" id="files" className="px-8 py-12 border-2 border-dashed rounded-md dark:border-gray-700 dark:text-gray-400 dark:bg-gray-800" />
                  </div>

                  {/* <input type="file" name='video' required placeholder="Image Upload" className="input input-bordered" /> */}
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Catagories: {updateData.category} </span>
                  </label>
                  <select name='productCatagories' className="input rounded-md bg-transparent input-bordered" >


                    {
                      newCategories.map(category =>
                        <option className='bg-slate-900'>{category.categoryName}</option>
                      )
                    }

                    {
                      newCategories.map(category =>
                        <option className='bg-slate-900'>{category.categoryName}</option>
                      )
                    }

                  </select>
                </div>
              </div>
              <div className="form-control mt-6">
                <button className=" font-bold p-3 rounded-lg bg-green-700">{loading ? "Loading..." : "Update"}</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>

  );
};

export default MovieUpdate;