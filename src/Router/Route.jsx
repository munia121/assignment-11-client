import {createBrowserRouter} from "react-router-dom";
import MainLayOut from "../MainLayout/MainLayOut";
import Home from "../Pages/Home/Home";
import AddBook from "../Pages/AddBook/AddBook";
import AllBook from "../Pages/AllBook/AllBook";
import BorrowedBooke from "../Pages/BorrrowedBook/BorrowedBooke";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import CategoryPage from "../Pages/Home/Category/CategoryPage";
import CategoryDetails from "../Pages/Home/Category/CategoryDetails";
import PrivetRoute from "./PrivetRoute";
import UpdatePage from "../Pages/AllBook/UpdatePage";

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
                element:<PrivetRoute><AddBook></AddBook></PrivetRoute>,
                
            },
            {
                path:'/allBooks',
                element:<PrivetRoute><AllBook></AllBook></PrivetRoute>,
                loader: () => fetch('http://localhost:5000/allBooks')
            },
            {
                path:'/borrowedBook',
                element:<PrivetRoute><BorrowedBooke></BorrowedBooke></PrivetRoute>
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
                element:<PrivetRoute><CategoryPage></CategoryPage></PrivetRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/bookCategory/${params.category}`)
            },
            {
                path:'/details/:id',
                element:<CategoryDetails></CategoryDetails>,
                // loader:({param}) => fetch(`http://localhost:5000/bookDetails/${param.id}`)
            },
            {
                path:'/update/:id',
                element:<UpdatePage></UpdatePage>,
                loader:({params}) => fetch(`http://localhost:5000/bookDetails/${params.id}`)
            }
        ]
    },
]);      