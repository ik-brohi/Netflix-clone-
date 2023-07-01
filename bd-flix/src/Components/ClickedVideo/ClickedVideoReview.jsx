import React, { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../Context/Authprovider/Authprovider';

const ClickedVideoReview = ({ data }) => {
    const [loading, setLoading] = useState(false)



    const { user } = useContext(AuthContext)

    const handleReview = event => {
        event.preventDefault();
        const form = event.target;
        const email = user.email;
        const name = user.displayName;
        const image = user.photoURL;
        const comments = form.comments.value;
        const rating = form.rating.value;
        const postId = data._id;

        const likes = []

        const posterimg = data.poster_path



        const review = {
            email,
            name,
            image,
            comments,
            rating,
            postId,

            likes

        }

        fetch('https://bd-flix-server-emonkumardas.vercel.app/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledge) {
                    form.reset();
                }
            })
            .catch(error => console.log(error))
    }
    return (
        <div>
            {/* <form onSubmit={handleReview} className="card-body">
                <textarea name="comments" id="" cols="3" rows="5" placeholder="Share Review about the Movie"></textarea>
                <div className='flex justify-between'>
                    <input name="rating" className='w-24 h-12' type="text" placeholder="Rating" />
                    <input type="submit" className="btn btn-primary text-green-700 hover:text-green-400 w-24 lg:text-2xl  focus:outline-none " value={loading ? "loading..." : 'Review'} />
                </div>
            </form> */}


            <input type="checkbox" id="reviewButton" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <form onSubmit={handleReview} className="modal-box">
                    <label htmlFor="reviewButton" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

                    <h3 className="font-bold text-lg">{data.original_title}</h3>

                    <textarea name="comments" id="" cols="60" rows="3" placeholder="Share Review about the Movie"></textarea>

                    {/* <div className="rating rating-lg rating-half">
                        <input type="radio" name="rating" className="rating-hidden" />
                        <input type="radio" name="rating" className="bg-green-500 mask mask-star-2 mask-half-1" />
                        <input type="radio" name="rating" className="bg-green-500 mask mask-star-2 mask-half-2" />
                        <input type="radio" name="rating" className="bg-green-500 mask mask-star-2 mask-half-1" checked />
                        <input type="radio" name="rating" className="bg-green-500 mask mask-star-2 mask-half-2" />
                        <input type="radio" name="rating" className="bg-green-500 mask mask-star-2 mask-half-1" />
                        <input type="radio" name="rating" className="bg-green-500 mask mask-star-2 mask-half-2" />
                        <input type="radio" name="rating" className="bg-green-500 mask mask-star-2 mask-half-1" />
                        <input type="radio" name="rating" className="bg-green-500 mask mask-star-2 mask-half-2" />
                        <input type="radio" name="rating" className="bg-green-500 mask mask-star-2 mask-half-1" />
                        <input type="radio" name="rating" className="bg-green-500 mask mask-star-2 mask-half-2" />
                    </div> */}
                    <input type='text' name='rating'></input>
                    <div className="modal-action">
                        <label htmlFor="reviewButton" className="btn bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Review</label>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ClickedVideoReview;