import { useLoaderData } from "react-router-dom";
import AllTouristCard from "../Components/AllTouristCard";

const AllTouristSpot = () => {
    const allTouristSpot = useLoaderData()
    return (
        <div className="text-center lg:mt-10">
            <details className="dropdown">
                <summary className="m-1 btn btn-error">Sort</summary>
                <ul className="p-2 shadow menu dropdown-content z-10 bg-base-100 rounded-box w-52">
                    <li><a className="font-bold">Price: Low to High</a></li>
                    <li><a className="font-bold">Price: High to Low</a></li>
                </ul>
            </details>
            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2">
                {
                    allTouristSpot.map(spot => <AllTouristCard key={spot._id} spot={spot}></AllTouristCard>)
                }
            </div>
        </div>
    );
};

export default AllTouristSpot;