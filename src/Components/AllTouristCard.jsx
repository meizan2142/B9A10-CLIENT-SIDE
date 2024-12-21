import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
const AllTouristCard = ({ spot }) => {
    const { photo, country, tourist, location, seasonality, visitor, time, cost, description, _id } = spot
    return (
        <div className="mx-auto my-5 max-w-[350px] space-y-6 rounded-xl bg-white px-4 pb-8 pt-4 font-sans shadow-lg">
            <div className="relative flex h-48 w-full justify-center lg:h-[280px]">
                <div className="absolute left-4 right-4 top-4 flex items-center justify-between">
                </div>
                <img width={300} height={300} className="h-full w-full rounded-lg bg-black/40" src={photo} alt="card navigate ui" />
            </div>
            <div className="mx-auto w-[85%] space-y-2 text-center font-semibold">
                <h6 className="text-sm md:text-base lg:text-lg">Country: {country}</h6>
                <p>Place Name: {tourist}</p>
                <p className="text-xs font-semibold text-gray-400 md:text-sm">Location: {location}</p>
                <p>{description}</p>
                <p>Seasonality: {seasonality}</p>
                <p>Time: {time} Days</p>
                <p>Visitor Per Year: {visitor}</p>
                <p>Average Cost: {cost}</p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm md:text-base">
                <NavLink to={`/allTouristSpotDetails/${_id}`} className="rounded-lg bg-[#49B2FF] px-4 py-2 font-sans font-semibold text-white duration-300 hover:scale-105 hover:bg-sky-600">View Details</NavLink>
            </div>
            
        </div>
    );
};

AllTouristCard.propTypes = {
    spot: PropTypes.object
}

export default AllTouristCard;