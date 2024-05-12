/* eslint-disable react/prop-types */
import Rating from "react-rating";
import { Link } from "react-router-dom";

const BookCard = ({ book }) => {

    // eslint-disable-next-line no-unused-vars
    const { _id, photo, description, name, author, category, ratings, quantity } = book;

    return (
        <div>
            <div>
                <div>
                    <div className=" p-6 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-900">
                        <img src={photo} alt="" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
                        <div className="mt-6 mb-2">
                            <span className="block text-xs font-medium text-green-600 tracking-widest uppercase dark:text-violet-600">{author}</span>
                            <h2 className="text-xl font-semibold mt-2 tracking-wide"> {name}</h2>
                        </div>
                        {/* <p className="dark:text-gray-800">{description.slice(0,100)}</p> */}
                        <div>
                            <p>Category:  {category}</p>
                            <div className="flex  items-center">
                                <p>Ratings: {ratings} </p>
                                <Rating

                                    initialRating={ratings}
                                    readonly
                                />
                            </div>
                            <p className="font-bold">Quantity: {quantity}</p>
                        </div>
                        <Link to={`/update/${_id}`}>
                            <button className="btn font-bold w-full mt-3 bg-gradient-to-r from-[#d4e09b] to-[#c4f1be]">Update</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookCard;