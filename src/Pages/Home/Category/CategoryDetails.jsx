import { useContext, useEffect, useState } from "react";
import Rating from "react-rating";
import { Link, useParams } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from "../../../Provider/AuthProvider";
import { toast } from "react-toastify";

const CategoryDetails = () => {
    const [startDate, setStartDate] = useState(new Date());
    const { id } = useParams()
    const { user } = useContext(AuthContext)
    // console.log(user.displayName)
    const [book, setBook] = useState({})
    // eslint-disable-next-line no-unused-vars
    const { _id, photo, description, name, author, category, ratings, quantity } = book;
    const [reload, setReload] = useState(true)


    const handleSubmit = (e) => {
        e.preventDefault()
        // eslint-disable-next-line no-unused-vars
        const form = e.target
        const email = user?.email
        // const displayName = user?.displayName
        const returnDate = new Date(startDate).toLocaleDateString()
        const borrowDate = new Date().toLocaleDateString()

        const books = {borrowedBookId: _id , email, name, photo, returnDate, borrowDate, category }
        console.log(books)

        fetch(`https://assignment-11-server-eight-tau.vercel.app/reduceQuantity/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(books)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    form.reset()
                    toast.success('Update success')
                }
                setReload(!reload)
            })

        fetch('https://assignment-11-server-eight-tau.vercel.app/borrowBook', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(books)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })

    }





    useEffect(() => {

        fetch(`https://assignment-11-server-eight-tau.vercel.app/bookDetails/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setBook(data)
            })
    }, [id, reload]);


    return (
        <div className="hero mt-20 lg:p-20 rounded-lg ">
            <div className="hero-content flex-col md:flex-row lg:flex-row">
                <img src={photo} className="lg:w-[600px] md:w-[400px] lg:h-[500px] rounded-lg shadow-2xl" />
                <div>
                    <h2 className="font-bold text-xl">quantity : {quantity} Books</h2>
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

                        <button className="btn bg-gradient-to-r from-[#f5d3d0] to-[#f29c94]"
                            disabled={quantity === 0}
                            onClick={() => document.getElementById('my_modal_3').showModal()}>Borrow</button>
                        <dialog id="my_modal_3" className="modal ">
                            <div className="modal-box">
                                <form method="dialog">
                                    {/* if there is a button in form, it will close the modal */}
                                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                </form>
                                <form onSubmit={handleSubmit}>
                                    <div className="flex gap-4">
                                        <label className=" form-control ">
                                            <div className="label">
                                                <span className="label-text">Email</span>
                                            </div>
                                            <input readOnly type="email" name="email" defaultValue={user?.email} className="input border-[#f29c94] input-bordered w-full " />
                                        </label>
                                        <label className=" form-control ">
                                            <div className="label">
                                                <span className="label-text">Name</span>
                                            </div>
                                            <input readOnly type="text" name="name" defaultValue={user?.displayName} placeholder="item name" className="input border-[#f29c94] input-bordered w-full " />
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