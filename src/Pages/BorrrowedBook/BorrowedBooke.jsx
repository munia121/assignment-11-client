import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import BorrowCard from "./BorrowCard";

const BorrowedBooke = () => {

    const { user } = useContext(AuthContext)

    const [borrowBook, setBorrowBook] = useState([])

    console.log(borrowBook)
    useEffect(() =>{
        fetch(`https://assignment-11-server-eight-tau.vercel.app/BorrowBook/${user.email}`)
        .then(res => res.json())
        .then(data => {
            setBorrowBook(data)
        })
    },[])


    return (
        <div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-20 md:grid-cols-2">
                {
                    borrowBook.map(book => <BorrowCard key={book._id} book={book} borrowBook={borrowBook} setBorrowBook={setBorrowBook}></BorrowCard>)
                }
            </div>
        </div>
    );
};

export default BorrowedBooke;