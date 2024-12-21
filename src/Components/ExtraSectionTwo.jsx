import { NavLink } from "react-router-dom";

const ExtraSectionTwo = () => {
    return (
        <div className="hero" style={{ backgroundImage: 'url(https://i.ibb.co/sRwkTJj/257c6d2dd.jpg)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md space-y-10">
                    <h1 className="mb-5 text-sm font-bold">HOLIDAY PACKAGE OFFER</h1>
                    <h1 className="text-3xl lg:text-5xl font-bold">HOLIDAY SPECIAL 25% OFF !</h1>
                    <p className="mb-5 font-bold">Sign up now to recieve hot special offers and information about the best tour packages, updates and discounts !!</p>
                    <label className="input input-bordered flex items-center gap-2">
                        <input type="text" className="grow" placeholder="Your Email Address" />
                        <NavLink to='/register' className="badge badge-info lg:p-4 font-bold text-white">SignUp</NavLink>
                    </label>
                    <p className="font-bold">Explore the world for less with our exclusive discount offers on flights, hotels, and packages!</p>
                </div>
            </div>
        </div>
    );
};

export default ExtraSectionTwo;