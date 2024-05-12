import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const BorrowedBooke = () => {

    const { user } = useContext(AuthContext)

    const [borrowBook, setBorrowBook] = useState([])

    console.log(borrowBook)
    useEffect(() =>{
        fetch(`http://localhost:5000/BorrowBook/${user.email}`)
        .then(res => res.json())
        .then(data => {
            setBorrowBook(data)
        })
    },[])


    return (
        <div>
            Borrowed books
        </div>
    );
};

export default BorrowedBooke;