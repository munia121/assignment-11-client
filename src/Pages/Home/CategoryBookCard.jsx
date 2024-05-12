/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const CategoryBookCard = ({book}) => {
    const {image, category} = book;
    return (
        <Link className="transition-transform lg:hover:scale-125" to={`/category/${category}`}>
            <div className="mt-28 lg:w-[400px]  shadow-2xl">
               <img className="lg:w-[400px] mx-auto   h-[200px] rounded-t-lg" src={image} alt="" />
               <p  className="font-bold bg-gradient-to-r from-[#d4e09b] to-[#c4f1be] text-2xl rounded-b-lg py-3 text-center">{category}</p>
            </div>
        </Link>
    );
};

export default CategoryBookCard;