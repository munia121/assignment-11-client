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
            <h1 className="text-6xl text-center mt-10">Category Part</h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2">
                {
                    books.map(book => <CategoryBookCard key={book._id} book={book}></CategoryBookCard>)
                }
            </div>
            <ExtraSection3></ExtraSection3>
            <ExtraSection2></ExtraSection2>
        </div>
    );
};

export default Home;