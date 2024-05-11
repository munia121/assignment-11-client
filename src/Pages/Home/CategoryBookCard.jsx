/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const CategoryBookCard = ({book}) => {
    const {image, category} = book;
    return (
        <Link to={`/category/${category}`}>
            <div className="mt-20">
               <img className="w-[400px] mx-auto h-[200px] rounded-lg" src={image} alt="" />
               <p  className="font-bold text-2xl text-center">{category}</p>
            </div>
        </Link>
    );
};

export default CategoryBookCard;