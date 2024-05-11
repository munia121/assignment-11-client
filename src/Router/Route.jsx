import {createBrowserRouter} from "react-router-dom";
import MainLayOut from "../MainLayout/MainLayOut";
import Home from "../Pages/Home/Home";
import AddBook from "../Pages/AddBook/AddBook";
import AllBook from "../Pages/AllBook/AllBook";
import BorrowedBooke from "../Pages/BorrrowedBook/BorrowedBooke";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import CategoryPage from "../Pages/Home/Category/CategoryPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayOut></MainLayOut>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/addBook',
                element:<AddBook></AddBook>
            },
            {
                path:'/allBooks',
                element:<AllBook></AllBook>
            },
            {
                path:'/borrowedBook',
                element:<BorrowedBooke></BorrowedBooke>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/category/:category',
                element:<CategoryPage></CategoryPage>,
                loader: ({params}) => fetch(`http://localhost:5000/bookCategory/${params.category}`)
            }
        ]
    },
]);      