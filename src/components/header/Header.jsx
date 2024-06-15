import React, { useState } from 'react';
import { Link } from "react-router-dom";

const Header = () => {

    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };


    return (
        <div>
            <nav className=" shadow-lg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <p className="flex-shrink-0 font-bold text-lg">
                                Portfolio 🧑‍🎓
                            </p>
                        </div>
                        <div className="hidden md:flex">
                            <div className="hidden md:block">
                                <div className="ml-10 flex items-baseline space-x-4">
                                    <Link to="/">
                                        <div className="text-gray-900 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium hover:underline">Home</div>
                                    </Link>
                                    <Link to="/projects">
                                        <div className="text-gray-900 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium hover:underline">Projects</div>
                                    </Link>
                                    <Link to="/resume">
                                        <div className="text-gray-900 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium hover:underline">Resume</div>
                                    </Link>
                                    <Link to="/blog">
                                        <div className="text-gray-900 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium hover:underline">Blog</div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="-mr-2 flex md:hidden">
                            <button onClick={handleNav} className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white" aria-expanded="false">
                                <span className="sr-only">Open main menu</span>
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                                </svg>
                                <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <ul
                    className={
                        nav
                            ? 'fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-white ease-in-out duration-500'
                            : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
                    }
                >
                    <div className='p-2 mt-2 flex flex-col'>
                        <Link to="/" className='p-3 border-b text-sm rounded-xl hover:bg-blue-700 hover:text-white duration-300 cursor-pointer border-gray-400'> Home </Link>
                        <Link to="/projects" className='p-3 border-b text-sm rounded-xl hover:bg-blue-700 hover:text-white duration-300 cursor-pointer border-gray-400'> Projects </Link>
                        <Link to="/blog" className='p-3 border-b text-sm rounded-xl hover:bg-blue-700 hover:text-white duration-300 cursor-pointer border-gray-400'> Blog </Link>
                        <Link to="/resume" className='p-3 border-b text-sm rounded-xl hover:bg-blue-700 hover:text-white duration-300 cursor-pointer border-gray-400'> Resume </Link>
                    </div>
                </ul>
            </nav>
        </div>
    )
}

export default Header