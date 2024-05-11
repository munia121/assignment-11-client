import { useLoaderData } from "react-router-dom";
import SingleCategoryCard from "./SingleCategoryCard";

const CategoryPage = () => {
    const loadedBook = useLoaderData()
    console.log(loadedBook)
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6 mt-20">
            {
                loadedBook.map(book => <SingleCategoryCard key={book._id} book={book}></SingleCategoryCard>)
            }
        </div>
    );
};

export default CategoryPage;