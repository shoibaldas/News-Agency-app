import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [navbar, setNavbar] = useState(false);
    return (
        <nav className="w-full bg-black shadow">
            <div className="justify-between px-1 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                <div>
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">

                        <Link to='/home' className='flex items-center text-none'>
                            <div>
                                <h2 className="btn btn-ghost normal-case text-2xl font-bold ml-6"><span className='bg-green-900 p-2 rounded-md text-indigo-300'>News</span>Agency</h2>
                            </div>
                        </Link>
                        <div className="md:hidden">
                            <div
                                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ?
                                    (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                    )
                                    :
                                    (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                    </svg>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0  ${navbar ? "block" : "hidden"
                            }`}
                    >
                        <ul className="text-md text-white font-semibold items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                            <li className="hover:text-violet-600 hover:underline hover:underline-offset-4 transition duration-700">
                                <Link to='/'>Home</Link>
                            </li>
                            <li className="hover:text-violet-600 hover:underline hover:underline-offset-4 transition duration-700">
                                <Link to='/'>News</Link>
                            </li>
                            <li className="hover:text-violet-600 hover:underline hover:underline-offset-4 transition duration-700">
                                <Link to='/'>About</Link>
                            </li>
                            <li className="hover:text-violet-600 hover:underline hover:underline-offset-4 transition duration-700">
                                <Link to='/'>Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;