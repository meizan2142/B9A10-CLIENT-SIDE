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
import TouristSpotDetails from "../Pages/TouristSpotDetails";
import AllTouristSpotDetails from "../Pages/AllTouristSpotDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://b9-a10-server-ja1ulfiso-saif-sultan-meizans-projects.vercel.app/touristspotinfo')
            },
            {
                path: '/allTouristSpot',
                element: <AllTouristSpot></AllTouristSpot>,
                loader: () => fetch('https://b9-a10-server-ja1ulfiso-saif-sultan-meizans-projects.vercel.app/touristspotinfo')
            },
            {
                path: '/addTouristSpot',
                element: <AddTouristSpot></AddTouristSpot>
            },
            {
                path: '/myList',
                element: <MyList></MyList>,
                loader: () => fetch('https://b9-a10-server-ja1ulfiso-saif-sultan-meizans-projects.vercel.app/touristspotinfo')
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
            {
                path: '/touristSpotDetails/:id',
                element: <TouristSpotDetails></TouristSpotDetails>,
                loader: ({params}) => fetch(`https://b9-a10-server-ja1ulfiso-saif-sultan-meizans-projects.vercel.app/touristspotinfo/${params.id}`)
            },
            {
                path: '/allTouristSpotDetails/:id',
                element: <AllTouristSpotDetails></AllTouristSpotDetails>,
                loader: ({params}) => fetch(`https://b9-a10-server-ja1ulfiso-saif-sultan-meizans-projects.vercel.app/touristspotinfo/${params.id}`)
            },
        ]
    },
]);

export default router;