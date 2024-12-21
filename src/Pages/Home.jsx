import { useLoaderData } from "react-router-dom";
import ExtraSectionOne from "../Components/ExtraSectionOne";
import ExtraSectionTwo from "../Components/ExtraSectionTwo";
import Hero from "../Components/Hero";
import TouristSpotSection from "../Components/TouristSpotSection";

const Home = () => {
    const allTouristSpots = useLoaderData()
    return (
        <div>
            <div>
                <Hero></Hero>
            </div>
            <div className="lg:mt-24 mt-10 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6">
                {
                    allTouristSpots.map(spot => <TouristSpotSection key={spot._id} spot={spot}></TouristSpotSection>)
                }
            </div>
            <div className="lg:mt-24 mt-10"><ExtraSectionOne></ExtraSectionOne></div>
            <div className="lg:mt-24 mt-10"><ExtraSectionTwo></ExtraSectionTwo></div>
        </div>
    );
};

export default Home;