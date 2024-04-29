import ExtraSectionOne from "../Components/ExtraSectionOne";
import ExtraSectionTwo from "../Components/ExtraSectionTwo";
import Hero from "../Components/Hero";
import TouristSpotSection from "../Components/TouristSpotSection";
// import TouristSpotSection from "../Components/TouristSpotSection";

const Home = () => {
    return (
        <div>
            <div>
                <Hero></Hero>
            </div>
            <div className="lg:mt-24 mt-10">
                <TouristSpotSection></TouristSpotSection>
            </div>
            <div className="lg:mt-24 mt-10"><ExtraSectionOne></ExtraSectionOne></div>
            <div className="lg:mt-24 mt-10"><ExtraSectionTwo></ExtraSectionTwo></div>
        </div>
    );
};

export default Home;