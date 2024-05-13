import {createBrowserRouter} from "react-router-dom";
import MainLayOut from "../MainLayout/MainLayOut";
import Home from "../Pages/Home/Home";
import AddBook from "../Pages/AddBook/AddBook";
// import AllBook from "../Pages/AllBook/AllBook";
import BorrowedBooke from "../Pages/BorrrowedBook/BorrowedBooke";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import CategoryPage from "../Pages/Home/Category/CategoryPage";
import CategoryDetails from "../Pages/Home/Category/CategoryDetails";
import PrivetRoute from "./PrivetRoute";
import UpdatePage from "../Pages/AllBook/UpdatePage";
import ErrorPage from "../Pages/ErrorPage";
import TestBook from "../Pages/AllBook/TestBook";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayOut></MainLayOut>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/addBook',
                element:<PrivetRoute><AddBook></AddBook></PrivetRoute>,
                
            },
            // {
            //     path:'/allBooks',
            //     element:<PrivetRoute><AllBook></AllBook></PrivetRoute>,
            //     loader: () => fetch('https://assignment-11-server-eight-tau.vercel.app/allBooks', {credentials:'include'})
            // },
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
                loader: ({params}) => fetch(`https://assignment-11-server-eight-tau.vercel.app/bookCategory/${params.category}`)
            },
            {
                path:'/details/:id',
                element:<CategoryDetails></CategoryDetails>,
                // loader:({param}) => fetch(`https://assignment-11-server-eight-tau.vercel.app/bookDetails/${param.id}`)
            },
            {
                path:'/update/:id',
                element:<UpdatePage></UpdatePage>,
                loader:({params}) => fetch(`https://assignment-11-server-eight-tau.vercel.app/bookDetails/${params.id}`)
            },
            {
                path:'/testBook',
                element:<PrivetRoute><TestBook></TestBook></PrivetRoute>,
                // loader: () => fetch('https://assignment-11-server-eight-tau.vercel.app/allBooks', {credentials:'include'})
            },
        ]
    },
]);      