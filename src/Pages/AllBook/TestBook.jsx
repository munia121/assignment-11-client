import { useState } from "react";
import TableView from "./TableView";
import BookCard from "./BookCard";
import { useLoaderData } from "react-router-dom";

const TestBook = () => {


    const book = useLoaderData()
    const [view, setView] = useState('table'); // Initial view state is 'table'

    const toggleView = () => {
        setView(prevView => prevView === 'table' ? 'card' : 'table'); // Toggle between 'table' and 'card'
    };

    return (
        <div>
            <div>
                <button onClick={toggleView} className="btn">Toggle View</button>
                {view === 'table' ? (
                    // <TableView data={book} />

                    <div className="grid mt-20 grid-cols-1 gap-10 lg:grid-cols-4 md:grid-cols-2">
                        {
                            book.map(book => <BookCard key={book._id} book={book}></BookCard>)
                        }
                    </div>

                ) : (
                    <TableView book={book} />
                    
                )}
            </div>
        </div>
    );
};

export default TestBook;