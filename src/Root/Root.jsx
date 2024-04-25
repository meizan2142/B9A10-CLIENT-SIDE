import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
const Root = () => {
    return (
        <div>
            <div className="lg:w-[1192px] lg:mx-auto">
                <Navbar></Navbar>
                <Outlet></Outlet>
            </div>
            <div className="bg-[#e6e3e2]">
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Root;