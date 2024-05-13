/* eslint-disable react/prop-types */

// import { toast } from "react-toastify";
import Swal from "sweetalert2";

const BorrowCard = ({ book, borrowBook, setBorrowBook }) => {
    const {_id, photo, name, category, borrowDate, returnDate,borrowedBookId } = book;
    console.log(borrowBook)

    const handleDelete = (id) => {  
        console.log(id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://assignment-11-server-eight-tau.vercel.app/borrowed/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });

                            const remaining = borrowBook.filter(book => book._id !== id);
                            setBorrowBook(remaining)
                        }
                    })

                console.log('delete confirm')
            }


            fetch(`https://assignment-11-server-eight-tau.vercel.app/increaseQuantity/${borrowedBookId}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(book)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                
            })
            
        });
    }
    

    return (
        <div>
            <div className=" rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
                <img src={photo} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                <div className="flex flex-col justify-between p-6 space-y-8">
                    <div className="space-y-2">
                        <h2 className="text-2xl font-semibold tracking-wide">Name: {name}</h2>
                        <p className="dark:text-gray-800 font-bold text-green-500">Category: {category}</p>
                    </div>
                    <div className="space-y-2 font-bold">
                        <p >Borrow Date: <span className="text-green-600">{borrowDate}</span></p>
                        <p >Return Date: <span className="text-green-600">{returnDate}</span></p>
                    </div>
                    <button 
                    onClick={() => handleDelete(_id)}
                     className="px-5 py-2.5 relative rounded group  text-white font-medium inline-block">
                        <span className="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-r from-[#d4e09b] to-[#c4f1be]"></span>
                        <span className="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50  from-[#d4e09b] to-[#c4f1be]"></span>
                        <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl  filter group-active:opacity-0 group-hover:blur-sm bg-gradient-to-r from-[#d4e09b] to-[#c4f1be]"></span>
                        <span className="absolute inset-0 w-full h-full transition duration-200 ease-out rounded  bg-gradient-to-r from-[#d4e09b] to-[#c4f1be]"></span>
                        <span className="relative">Return</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BorrowCard;