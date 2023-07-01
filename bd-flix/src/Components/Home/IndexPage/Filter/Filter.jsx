import React from 'react';

const Filter = () => {
    return (
        <>
            <form>
                <div className='my-6 flex flex-wrap justify-center gap-5'>
                    <div className="form-control">
                        <div className="input-group">
                            <select className="select select-bordered bg-white text-black">
                                <option disabled selected>Pick category</option>
                                <option>T-shirts</option>
                                <option>Mugs</option>
                            </select>
                        </div>
                    </div>
                    {/* --------------------------- */}
                     <div className="form-control">
                        <div className="input-group">
                            <select className="select select-bordered bg-white text-black">
                                <option disabled selected>Pick category</option>
                                <option>T-shirts</option>
                                <option>Mugs</option>
                            </select>
                        </div>
                    </div>
                    {/* --------------------------- */}
                     <div className="form-control">
                        <div className="input-group">
                            <select className="select select-bordered bg-white text-black">
                                <option disabled selected>Pick category</option>
                                <option>T-shirts</option>
                                <option>Mugs</option>
                            </select>
                        </div>
                    </div>
                    {/* --------------------------- */}
                     <div className="form-control">
                        <div className="input-group">
                            <select className="select select-bordered bg-white text-black">
                                <option disabled selected>Pick category</option>
                                <option>T-shirts</option>
                                <option>Mugs</option>
                            </select>
                        </div>
                    </div>
                    {/* --------------------------- */}
                    <button className='bg-green-700 px-10 py-3 text-white rounded-sm font-semibold font-serif'>Submit</button>
                </div>
            </form>
        </>
    );
};

export default Filter;