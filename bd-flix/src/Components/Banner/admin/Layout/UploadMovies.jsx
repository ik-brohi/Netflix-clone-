import React, { useEffect } from 'react';
import { useState } from 'react';
import { toast } from 'react-toastify';

const UploadMovies = () => {



  
  const [categories, setCategories] = useState([])

  useEffect(() => {

    // fetch('https://bd-flix-server-emonkumardas.vercel.app/category')

    fetch('https://bd-flix-server-emonkumardas.vercel.app/category')

        .then(res => res.json())
        .then(data => {
          console.log(data);
            setCategories(data)
           
        })

}, [] )



  const [loading, setLoading] = useState(false);
  function getRandomInt() {
    let min = Math.ceil(1);
    let max = Math.floor(30000);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    const catagories = event.target.productCatagories.value;
    const overview = event.target.overview.value;
    const poster_path = event.target.poster_path.files[0];
    const video = event.target.video.files[0];
    const vote_average = "";
    const likeCount = 0
    // const video = event.target.video.value
    const original_title = event.target.original_title.value
    let catagoriesWithOutSpace = catagories
    let movieWithoutSpaces = catagoriesWithOutSpace.replace(/ /g, "");






    const formData = new FormData()
    formData.append('imageFile', poster_path)

    const formvideo = new FormData();
    formvideo.append('filename', video);
    setLoading(true)

    const url = "https://bd-flix-server-emonkumardas.vercel.app/uploadPhoto"

    // video upload firebase-------------------------
    fetch('https://bd-flix-server-emonkumardas.vercel.app/uploadVideo', {

      method: 'POST',
      body: formvideo,

    })
      .then(res => res.json())
      .then(result => {

        fetch(url, {
          method: 'POST',
          body: formData
        }).then(res => res.json())
          .then(ImageData => {

            const addMovie = {
              id: getRandomInt(),
              poster_path: ImageData.url,
              category: movieWithoutSpaces,
              video: result.url,
              original_title,
              overview,
              vote_average,
              likeCount,
              // video
            }
            fetch('https://bd-flix-server-i4wbktqxf-mohammad0076.vercel.app/addMovie', {
              method: 'POST',
              headers: { 'content-type': 'application/json', },
              body: JSON.stringify(addMovie)
            })
              .then(res => res.json())
              .then(data => {
                // addMovie.reload()
                setLoading(false)
                toast.success('Your Product is added successfully');
              })

          }

          )
      }

      )

    // video upload firebase-------------------------




  }

  return (
    <div className='bg-slate-900 w-full  rounded-lg text-center'>
      <div className="hero my-4 ">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Uploaded Your Movie</h1>

          </div>
          <form onSubmit={handleSubmit}>
            <div className="card mt-4 w-full">
              <div className="card-body grid lg:grid-cols-2 grid-cols-1">

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Movie Title</span>
                  </label>
                  <input type="text" required name='original_title' placeholder="Movie Title" className="input bg-transparent rounded-md input-bordered" />
                </div>


                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Overview</span>
                  </label>
                  <input type="text" required name='overview' placeholder="Overview" className="input bg-transparent rounded-md input-bordered" />
                </div>


                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Image Upload</span>
                  </label>
                  <div className="flex">
                    <input type="file" required name="poster_path" accept='image/*' id="files" className="px-8 py-12 border-2 border-dashed rounded-md dark:border-gray-700 dark:text-gray-400 dark:bg-gray-800" />
                  </div>
                  {/* <input type="file" required name='poster_path' accept='image/*' placeholder="Image Upload" className="input input-bordered" /> */}
                </div>
                {/* this is video upload  */}

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Video Upload</span>
                  </label>
                  <div className="flex">
                    <input type="file" required name="video" id="files" className="px-8 py-12 border-2 border-dashed rounded-md dark:border-gray-700 dark:text-gray-400 dark:bg-gray-800" />
                  </div>
                  {/* <input type="file" name='video' required placeholder="Image Upload" className="input input-bordered" /> */}
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Catagories </span>
                  </label>
                  <select name='productCatagories' className="input rounded-md bg-transparent input-bordered" >
                    {
                      categories?.map(cate=><option className='bg-slate-900'>{cate.categoryName}</option>)
                    }
                  
                  </select>
                </div>
              </div>
              <div className="form-control mt-6">
                <button className=" font-bold p-3 rounded-lg bg-green-700">{loading ? "Loading..." : "Upload"}</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UploadMovies;