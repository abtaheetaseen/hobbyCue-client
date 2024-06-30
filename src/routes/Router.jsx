import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import AddMyListings from "../pages/AddMyListings";

export const Router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/addMyListings",
                element: <AddMyListings />,
            },
        ]
    }
])