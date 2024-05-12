import { useLoaderData } from "react-router-dom";
import BookCard from "./BookCard";
import { useState } from "react";

const AllBook = () => {

    const Books = useLoaderData()
    // console.log(Books)

    const [bookItem, setBookItem] = useState({Books})
    console.log('gdfhfkj',bookItem.quantity)

   const handleShow = (quantity) =>{
    if(quantity > 0){
        let shorting = bookItem.filter(book => book.quantity > 0);
        console.log(shorting)
        setBookItem(shorting)
    }
    console.log(quantity)
   }


    return (
        <div className="mt-20">
            <div>
                <button onClick={()=>handleShow(bookItem.category)} className="btn"> Available books</button>
            </div>
            <div className="grid mt-20 grid-cols-1 gap-10 lg:grid-cols-4 md:grid-cols-2">
                {
                    Books.map(book => <BookCard key={book._id} book={book}></BookCard>)
                }
            </div>
            <div>

            </div>
        </div>
    );
};

export default AllBook;