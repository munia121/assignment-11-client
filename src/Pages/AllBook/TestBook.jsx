import { useEffect, useState } from "react";
import TableView from "./TableView";
import BookCard from "./BookCard";
// import { useLoaderData } from "react-router-dom";

const TestBook = () => {


    // const book = useLoaderData()

    const [book, setBook] = useState([])
    useEffect(() => {
        fetch('https://assignment-11-server-eight-tau.vercel.app/allBooks', { credentials: 'include' })
            .then(res => res.json())
            .then(data => setBook(data))
    }, [])


    const [view, setView] = useState('table'); // Initial view state is 'table'

    // const toggleView = () => {
    //     setView(prevView => prevView === 'table' ? 'card' : 'table'); // Toggle between 'table' and 'card'
    // };
    const handleChange = (e) => {
        setView(e.target.value)
    }

    const handleFilterCard = () =>{
        const filtered = book.filter(b => b.quantity > 0 )
        setBook(filtered)
    }

    return (
        <div className="">
            <div className="relative">
                {/* <div className="flex justify-end absolute">
                    <button onClick={toggleView} className="border p-3 font-bold bg-gradient-to-r from-[#d4e09b] to-[#c4f1be] flex lg:ml-[1350px] lg:mt-14">Toggle View</button>
                </div> */}

                <div className=" lg:pt-[50px] lg:ml-5">
                    <button className="border p-3 font-bold bg-gradient-to-r from-[#d4e09b] to-[#c4f1be]" 
                    onClick={handleFilterCard}>Show available books</button>
                </div>

                <div className="flex justify-end absolute">
                    <select className="lg:ml-[1350px] lg:mt-14 border p-3 font-bold bg-gradient-to-r from-[#d4e09b] to-[#c4f1be]" value={view} onChange={handleChange}>
                        <option value="table">Table View</option>
                        <option value="card">Card View</option>
                    </select>
                </div>


                {view === 'table' ? (
                    <TableView book={book} />
                ) : (
                    <div className="">
                        <h2 className="lg:text-3xl text-xl text-center font-bold mt-10">Our All Books</h2>
                        <div className="grid mt-20 grid-cols-1 gap-10 lg:grid-cols-4 md:grid-cols-2">
                            {
                                book.map(book => <BookCard key={book._id} book={book}></BookCard>)
                            }
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default TestBook;