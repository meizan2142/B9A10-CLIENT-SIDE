
import { Link, useLoaderData } from "react-router-dom";

const TouristSpotDetails = () => {
    const touristInfo = useLoaderData()
    // console.log(touristInfo);
    const { country, photo, location, seasonality } = touristInfo;
    return (
        <div className="mx-auto my-5 max-w-[350px] space-y-6 rounded-xl bg-white px-4 pb-8 pt-4 font-sans shadow-lg">
            <div className="relative flex h-48 w-full justify-center lg:h-[280px]">
                <div className="absolute left-4 right-4 top-4 flex items-center justify-between">
                </div>
                <img width={300} height={300} className="h-full w-full rounded-lg bg-black/40" src={photo} alt="card navigate ui" />
            </div>
            <div className="mx-auto w-[85%] space-y-2 text-center font-semibold">
                <h6 className="text-sm md:text-base lg:text-lg">{country}</h6>
                <p className="text-xs font-semibold text-gray-400 md:text-sm">{location}</p>
                <p className="text-xs font-semibold text-gray-400 md:text-sm pb-4">{seasonality}</p>
                <Link to='/'><button className="rounded-lg bg-[#49B2FF] px-4 py-2 font-sans font-semibold text-white duration-300 hover:scale-105 hover:bg-sky-600">Back To Home</button></Link>
            </div>
        </div>
    );
};

export default TouristSpotDetails;