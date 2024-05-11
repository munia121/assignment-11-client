import { useLoaderData } from "react-router-dom";
import SingleCategoryCard from "./SingleCategoryCard";

const CategoryPage = () => {
    const loadedBook = useLoaderData()
    console.log(loadedBook)
    return (
        <div>
            {
                loadedBook.map(book => <SingleCategoryCard key={book._id} book={book}></SingleCategoryCard>)
            }
        </div>
    );
};

export default CategoryPage;