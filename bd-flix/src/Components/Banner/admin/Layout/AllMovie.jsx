import React from 'react';

const AllMovie = () => {
    return (
        <div className="overflow-x-auto w-full">
            <table className="table w-full">
                {/* <!-- head --> */}
                <thead>
                    <tr>
                        <th>Poster</th>
                        <th>Name</th>
                        <th>Job</th>
                        <th>Favorite Color</th>
                    </tr>
                </thead>
                <tbody>
                    {/* <!-- row 1 --> */}
                    <tr>
                        <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                            </div>
                        </div>
                        <td>Cy Ganderton</td>
                        <td>Quality Control Specialist</td>
                        <td>Blue</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default AllMovie;