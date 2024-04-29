import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import ErrorPage from "../Pages/ErrorPage";  
import Home from "../Pages/Home";
import AllTouristSpot from "../Pages/AllTouristSpot";
import AddTouristSpot from "../Pages/AddTouristSpot";
import MyList from "../Pages/MyList";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import UpdatePage from "../Pages/UpdatePage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/allTouristSpot',
                element: <AllTouristSpot></AllTouristSpot>
            },
            {
                path: '/addTouristSpot',
                element: <AddTouristSpot></AddTouristSpot>
            },
            {
                path: '/myList',
                element: <MyList></MyList>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/update',
                element: <UpdatePage></UpdatePage>
            },
        ]
    },
]);

export default router;