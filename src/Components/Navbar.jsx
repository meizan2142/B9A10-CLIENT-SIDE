// import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
    // const [theme, setTheme] = useState('light')
    // useEffect(() => {
    //     localStorage.setItem('theme', theme)
    //     const localTheme = localStorage.getItem('theme')
    //     document.querySelector('html').setAttribute('data-theme', localTheme)
    // }, [theme])
    // const handleToggle = (e) => {
    //     if (e.target.checked) {
    //         setTheme('dark')
    //     } else {
    //         setTheme('light')
    //     }
    // }
    // console.log(theme);
    const navLinks = <>
        <li><NavLink className='mr-4' to='/'>Home</NavLink></li>
        <li><NavLink className='mr-4' to='/allTouristSpot'>AllTouristSpot</NavLink></li>
        <li><NavLink className='mr-4' to='/addTouristSpot'>AddTouristSpot</NavLink></li>
        <li><NavLink className='mr-4' to='/myList'>MyList</NavLink></li>
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-10 gap-2 p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <NavLink to='/' className="btn btn-ghost text-xl font-bold lg:text-3xl">TourTracker</NavLink>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end gap-2">
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img alt="Tailwind CSS Navbar component" src="https://i.ibb.co/FmVcWnf/saif-photo-jpg.jpg" />
                        </div>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-10  p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
                <NavLink to='/login' className="btn">LogIn</NavLink>
                {/* <label className="cursor-pointer place-items-center hidden lg:inline-flex">
                    <input onChange={handleToggle} type="checkbox" className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2" />
                </label> */}
            </div>
        </div>
    );
};

export default Navbar;


