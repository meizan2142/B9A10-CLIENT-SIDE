const AllTouristSpot = () => {
    return (
        <div className="text-center lg:mt-10">
            <details className="dropdown">
                <summary className="m-1 btn">Sort</summary>
                <ul className="p-2 shadow menu dropdown-content z-10 bg-base-100 rounded-box w-52">
                    <li><a>Average Cost</a></li>
                    <li><a>Item 2</a></li>
                </ul>
            </details>
            <p>All Tourist Spot</p>
        </div>
    );
};

export default AllTouristSpot;