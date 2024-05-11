import { useEffect, useState } from "react";
import Rating from "react-rating";
import { Link, useParams } from "react-router-dom";

const CategoryDetails = () => {
    const { id } = useParams()
    console.log(id)

    // const data = useLoaderData()
    // console.log(data)


    const [book, setBook] = useState({})
    // console.log(book)
    const { _id, photo, description, name, author, category, ratings } = book;


    useEffect(() => {

        fetch(`http://localhost:5000/bookDetails/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setBook(data)
            })
    }, [id]);


    return (
        <div className="hero mt-20 lg:p-20 rounded-lg bg-gradient-to-r from-[#f5d3d0] to-[#f29c94]">
            <div className="hero-content flex-col lg:flex-row">
                <img src={photo} className="lg:w-[600px] lg:h-[500px] rounded-lg shadow-2xl" />
                <div>
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
                    <Link to={'/'}><button className="btn mt-4 bg-gradient-to-r from-[#f5d3d0] to-[#f29c94]">Go to Home</button></Link>
                </div>
            </div>
        </div>
    );
};

export default CategoryDetails;