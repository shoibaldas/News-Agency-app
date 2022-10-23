import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import { FaUserAlt, FaLock } from "react-icons/fa";

const Header = () => {
    const [navbar, setNavbar] = useState(false);
    const { user, logOut } = useContext(AuthContext);

    const handleLogout = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

    return (
        <nav className="w-full bg-black">
            <div className="lg:max-w-7xl md:flex items-center">
                <div className="flex justify-between items-center py-4">
                    <div>
                        <Link to='/' className="btn btn-ghost normal-case text-2xl font-bold md:ml-16"><span className='bg-green-900 p-2 rounded-md text-indigo-300'>News</span>Agency</Link>
                    </div>
                    <div className="md:hidden">
                        <div
                            className="text-gray-200 rounded-md "
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
                <div>
                    <div
                        className={`flex-1 pb-3 mt-8 md:block md:pb-0 md:mt-0  ${navbar ? "block" : "hidden"
                            }`}
                    >
                        <ul className="text-md text-center text-white font-semibold items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
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
                            <li className='flex items-center justify-center'>
                                <Link to={'/'}>{user && user.uid ?
                                    <span>{user?.displayName}</span> :
                                    <>
                                        <Link to={'/login'}>Login</Link>
                                        <Link to={'/register'} className='mx-4'>Register</Link>
                                    </>}</Link>
                                <Link className='flex items-center'>

                                    {user?.photoURL ?
                                        <>
                                            <img className='h-12 -w12 rounded-full mx-4' src={user?.photoURL} alt='' />
                                            <FaLock onClick={handleLogout} className='text-red-600'></FaLock>
                                        </>
                                        :
                                        <FaUserAlt></FaUserAlt>}</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;
