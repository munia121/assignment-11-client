import { useLoaderData } from "react-router-dom";
import BookCard from "./BookCard";

const AllBook = () => {

    const Books = useLoaderData()
    console.log(Books)

    return (
        <div className="mt-20">
            <div>

            </div>
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-4 md:grid-cols-2">
                {
                    Books.map(book => <BookCard key={book._id} book={book}></BookCard>)
                }
            </div>
        </div>
    );
};

export default AllBook;