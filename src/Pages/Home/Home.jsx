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
            <div className="mx-auto">
                <ExtraSection1></ExtraSection1>
            </div>

            <div className="">
                <div className="lg:mt-[300px]">
                    <h1 className="text-4xl text-center mt-20">There are some Book Collection</h1>
                    <p className="text-center w-[980px] mx-auto">Welcome to our carefully curated collection of literary treasures, where each book is a gateway to another world, another time, another perspective. Our collection spans genres and epochs, offering something for every reader, whether you seek to be transported to distant galaxies, immersed in historical dramas, or inspired by the wisdom of the ages.</p>
                </div>
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