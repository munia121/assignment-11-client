/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const CategoryBookCard = ({ book }) => {
    const { image, category } = book;
    return (
        <Link className="transition-transform lg:hover:scale-125" to={`/category/${category}`}>
            <div className="mt-28 lg:w-[400px]  shadow-2xl">
                <img className="lg:w-[400px] mx-auto   h-[200px] rounded-t-lg" src={image} alt="" />
                <div className="bg-gradient-to-r from-[#d4e09b] to-[#c4f1be] rounded-b-lg ">
                    <p className="font-bold bg-gradient-to-r from-[#d4e09b] to-[#c4f1be] text-2xl rounded-b-lg py-3 text-center">{category}</p>
                    <p className="text-center p-2 font-bold">Click Me</p>
                </div>
            </div>
        </Link>
    );
};

export default CategoryBookCard;