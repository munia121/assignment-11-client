import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { Tooltip } from "react-tooltip";

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext)
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light')


    const handleSignOut = () => {
        logOut()
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                // toast.success('User Log out')
                console.log(error)
            })
    }


    useEffect(() => {
        localStorage.setItem('theme', theme)
        const loacalTheme = localStorage.getItem('theme')
        document.querySelector('html').setAttribute('data-theme', loacalTheme)
    }, [theme])

    const handleToggle = (e) => {
        if (e.target.checked) {
            setTheme('synthwave')
        }
        else {
            setTheme('light')
        }

    }


    const navLinks = <>
        <li><NavLink className={({ isActive }) => isActive ? 'text-pink-700  border  border-pink-700 font-bold  rounded-md ' : 'font-bold text-black '} to={'/'}>Home</NavLink></li>

        <li><NavLink className={({ isActive }) => isActive ? 'text-pink-700 border border-pink-700 font-bold  rounded-md ' : 'font-bold text-black'} to={'/addBook'}>Add Book</NavLink></li>

        <li><NavLink className={({ isActive }) => isActive ? 'text-pink-700 border border-pink-700 font-bold  rounded-md ' : 'font-bold text-black'} to={'/allBooks'}>All Books</NavLink></li>

        <li><NavLink className={({ isActive }) => isActive ? 'text-pink-700 border border-pink-700 font-bold  rounded-md ' : 'font-bold text-black'} to={'/borrowedBook'}>Borrowed Books</NavLink></li>

        {/* <li><NavLink className={({ isActive }) => isActive ? 'text-[#23BE0A] border border-[#23BE0A] font-bold  rounded-md ' : 'font-bold text-black'} to={'/register'}>Register</NavLink></li> */}

    </>
    return (
        
        <div className="navbar rounded-lg lg:mt-6 bg-opacity-50 bg-gradient-to-r from-[#d4e09b] to-[#c4f1be]">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3  p-2 shadow bg-base-100 rounded-box w-52 z-10">
                        {navLinks}
                    </ul>
                </div>
                <div className="flex items-center">
                    <img className="w-20 hidden lg:block" src='' alt="" />
                    <a className="btn btn-ghost gap-0 text-3xl">WebsiteName</a>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 z-10">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end flex gap-4">
                {/* <Link to={'/login'}> <button className="btn">Login</button> </Link>
           <Link to={'/register'}> <button className="btn">Register</button> </Link> */}

                {
                    user ?
                        <>
                            <div >
                                <a data-tooltip-id="my-tooltip" data-tooltip-content={user.displayName}>
                                    <img className={`rounded-full h-10 w-10  `} src={user?.photoURL || 'https://ibb.co/WxjPyWc'} alt="" />
                                </a>
                                <Tooltip place="bottom" type='error' id="my-tooltip" style={{ backgroundColor: "rgb(242, 156, 148)", color: "#222" }} ></Tooltip>

                            </div>
                            <button className="btn ml-6 bg-[#f29c94] " onClick={handleSignOut}>Log out</button>
                        </>
                        :
                        <>
                            <Link to={'/login'} className="btn bg-gradient-to-r from-[#f5d3d0] to-[#f29c94] ">Login</Link>

                            <Link to={'/register'} className="btn hidden lg:block  bg-gradient-to-r from-[#f5d3d0] to-[#f29c94]">
                                <p className="py-4">Register</p>
                            </Link>
                        </>
                }
            </div>
            <label className="cursor-pointer grid place-items-center ml-4">
                <input type="checkbox" onChange={handleToggle} checked={theme == 'synthwave'} className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2" />
                <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
                <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
            </label>
        </div>
    );
};

export default NavBar;