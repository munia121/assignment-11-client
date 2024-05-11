import { useContext, useEffect, useState } from "react";
import Rating from "react-rating";
import { Link, useParams } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from "../../../Provider/AuthProvider";

const CategoryDetails = () => {
    const [startDate, setStartDate] = useState(new Date());
    const { id } = useParams()
    // console.log(id)
    const { user } = useContext(AuthContext)



    const [book, setBook] = useState({})
    // eslint-disable-next-line no-unused-vars
    const { _id, photo, description, name, author, category, ratings, quantity } = book;


    useEffect(() => {

        fetch(`http://localhost:5000/bookDetails/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setBook(data)
            })
    }, [id]);


    return (
        <div className="hero mt-20 lg:p-20 rounded-lg ">
            <div className="hero-content flex-col lg:flex-row">
                <img src={photo} className="lg:w-[600px] lg:h-[500px] rounded-lg shadow-2xl" />
                <div>
                    <h2 className="font-bold text-xl">quantity : {quantity}</h2>
                    <h1 className="text-3xl font-bold">{name}</h1>
                    <p className="font-bold">Author: {author}</p>
                    <p className="font-bold">Category: {category}</p>
                    <p className="py-6">{description}</p>
                    <div className="flex items-center gap-4">
                        <p><span className="font-bold">Ratings: </span>{ratings}</p>
                        <Rating

                            initialRating={ratings}
                            readonly
                        />
                    </div>
                    <hr />
                    <div className="flex items-center justify-between">
                        <Link to={'/'}><button className="btn mt-4 bg-gradient-to-r from-[#f5d3d0] to-[#f29c94]">Go to Home</button></Link>

                        {/* You can open the modal using document.getElementById('ID').showModal() method */}

                        {/* ************************************************************* */}
                        <button className="btn bg-gradient-to-r from-[#f5d3d0] to-[#f29c94]" onClick={() => document.getElementById('my_modal_3').showModal()}>Borrow</button>
                        <dialog id="my_modal_3" className="modal ">
                            <div className="modal-box">
                                <form method="dialog">
                                    {/* if there is a button in form, it will close the modal */}
                                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                </form>
                                <form>
                                    <div className="flex gap-4">
                                        <label className=" form-control ">
                                            <div className="label">
                                                <span className="label-text">Email</span>
                                            </div>
                                            <input type="text" name="email" defaultValue={user.email} placeholder="item name" className="input border-[#f29c94] input-bordered w-full " />
                                        </label>
                                        <label className=" form-control ">
                                            <div className="label">
                                                <span className="label-text">Name</span>
                                            </div>
                                            <input type="text" name="name" defaultValue={user.displayName} placeholder="item name" className="input border-[#f29c94] input-bordered w-full " />
                                        </label>
                                    </div>
                                    <div className="">
                                        <div className="flex flex-col mt-10">
                                            <label className='text-gray-700'>Return Date</label>

                                            {/* Date Picker Input Field */}
                                            <DatePicker className="border rounded-md p-2" selected={startDate} onChange={(date) => setStartDate(date)} />
                                        </div>
                                    </div>
                                    <div className="mt-5">
                                        <input className="btn" type="submit" value="Submit" />
                                    </div>
                                </form>
                            </div>
                        </dialog>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryDetails;