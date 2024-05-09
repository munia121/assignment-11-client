import {createBrowserRouter} from "react-router-dom";
import MainLayOut from "../MainLayout/MainLayOut";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayOut></MainLayOut>,
        children:[

        ]
    },
]);      