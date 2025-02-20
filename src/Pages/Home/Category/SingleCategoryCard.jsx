/* eslint-disable react/prop-types */

// import { FaRegStar } from "react-icons/fa";
import Rating from "react-rating";
import { Link } from "react-router-dom";

const SingleCategoryCard = ({ book }) => {

    // eslint-disable-next-line no-unused-vars
    const { _id, photo, quantity, name, author, category, ratings } = book;


    return (
        <div>
            <div>
                <div className=" p-6 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-900">
                    <img src={photo} alt="" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
                    <div className="mt-6 mb-2">
                        <span className="block text-xs font-medium text-green-600 tracking-widest uppercase dark:text-violet-600">{author}</span>
                        <h2 className="text-xl font-semibold mt-2 tracking-wide">Book Name: {name}</h2>
                    </div>
                    {/* <p className="dark:text-gray-800">{description.slice(0,100)}</p> */}
                    <div className="font-bold">
                        <p>Category:  {category}</p>
                        <p>Quantity: {quantity}</p>
                        <div className="flex  items-center">
                            <p>Ratings: {ratings} </p>
                            <Rating

                                initialRating={ratings}
                                readonly
                            />
                        </div>
                    </div>
                    <Link to={`/details/${_id}`}>
                        <button className="btn w-full mt-3 bg-gradient-to-r from-[#f5d3d0] to-[#f29c94]">View Details</button>

                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SingleCategoryCard;