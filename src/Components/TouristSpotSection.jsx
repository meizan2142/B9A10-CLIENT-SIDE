const TouristSpotSection = () => {
    return (
        <div className="card max-w-80 bg-base-100 shadow-xl lg:mx-0 mx-1">
            <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
            <div className="card-body space-y-3">
                <h2 className="card-title">Country Name</h2>
                <div className="flex justify-between gap-1">
                <p>Tourist Spot name</p>
                <p>Location</p>
                </div>
                <div className="flex justify-between gap-1">
                <p>Seasonality</p>
                <p>Travel Time</p>
                </div>
                <div className="flex justify-between gap-1">
                <p>Average Cost:</p>
                <p>Visitor:</p>
                </div>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default TouristSpotSection;