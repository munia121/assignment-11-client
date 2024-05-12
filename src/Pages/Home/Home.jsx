import { useEffect, useState } from "react";
import ExtraSection1 from "./ExtraSection1";
import ExtraSection2 from "./ExtraSection2";
import ExtraSection3 from "./ExtraSection3";
import Slider from "./Slider";
import CategoryBookCard from "./CategoryBookCard";


const Home = () => {
    const [books, setBooks] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/bookCategory`)
            .then(res => res.json())
            .then(data => {
                setBooks(data)
            })
    }, [])

    console.log(books)

    return (
        <div>
            <Slider></Slider>
            <ExtraSection1></ExtraSection1>
            <div className="">
                <h1 className="text-4xl text-center mt-20">There are some Book Collection</h1>
                <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2">
                    {
                        books.map(book => <CategoryBookCard key={book._id} book={book}></CategoryBookCard>)
                    }
                </div>
                <div className="mt-10"><hr /></div>
            </div>
            <ExtraSection3></ExtraSection3>
            <ExtraSection2></ExtraSection2>
        </div>
    );
};

export default Home;