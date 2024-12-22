import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
const TouristSpotSection = ({ spot }) => {
    const { country, tourist, location, seasonality, cost, _id} = spot
    return (
        <div className="w-full max-w-md space-y-4 rounded-lg bg-white p-5 shadow-lg dark:bg-[#18181B]">
            <div className="flex flex-col space-y-1.5">
                <h3 className="text-2xl font-semibold ">{tourist}</h3>
                <p className="text-sm text-gray-500 dark:text-white/60">{location}</p>
                <p className="text-sm text-gray-500 dark:text-white/60">{country}</p>
            </div>
            <div className="flex items-end justify-between">
                <h2 className="text-center text-xl font-medium">{cost} TK</h2>
                <p className="rounded-lg bg-gray-700 p-2 text-center text-sm text-white">Season: {seasonality}</p>
            </div>
            <img width={400} height={300} className="h-[300px] w-full rounded-lg bg-gray-600 object-cover" src={spot.photo} alt="card navigate ui" />
            <button className="w-full rounded-lg bg-slate-800 px-6 py-2 text-[12px] font-semibold text-white hover:bg-slate-900 sm:text-sm md:text-base">
                <NavLink to={`/touristSpotDetails/${_id}`}>View Details</NavLink>
            </button>
        </div>
    );
};

TouristSpotSection.propTypes = {
    spot: PropTypes.object
}

export default TouristSpotSection;