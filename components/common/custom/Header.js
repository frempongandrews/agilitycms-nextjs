import { useState } from "react";
import Link from "next/link";
import { useUser } from '@auth0/nextjs-auth0';


const Header = () => {
    const [isMenuOpened, setIsMenuOpened] = useState(false);
    const { user } = useUser();

    return (
        <nav className="bg-white shadow dark:bg-gray-800 mb-8">
            <div className="container px-6 py-4 mx-auto">
                <div className="md:flex md:items-center md:justify-between">
                    <div className="flex items-center justify-between">
                        <div className="text-xl font-semibold text-gray-700">
                            <Link href={`/`}>
                                <a className="text-2xl font-bold text-gray-800 dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300">
                                    Home
                                </a>
                            </Link>

                        </div>

                        {/*<!-- Mobile menu button -->*/}
                        <div className="flex md:hidden">
                            <button type="button"
                                    className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                                    aria-label="toggle menu">
                                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                                    <path fillRule="evenodd"
                                          d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/*<!-- Mobile Menu open: "block", Menu closed: "hidden" -->*/}
                    <div className="flex-1 md:flex md:items-center md:justify-between">
                        <div className="flex flex-col -mx-4 md:flex-row md:items-center md:mx-8">
                            <Link href={`/characters`}>
                                <a className="px-2 py-1 mx-2 mt-2 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded-md md:mt-0 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700">Characters</a>
                            </Link>

                        </div>

                        <div className="flex items-center mt-4 md:mt-0">

                            <button type="button" className="flex items-center focus:outline-none"
                                    aria-label="toggle profile dropdown">
                                <div className="w-8 h-8 overflow-hidden border-2 border-gray-400 rounded-full" onClick={() => setIsMenuOpened(!isMenuOpened)}>
                                    <img
                                        src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                                        className="object-cover w-full h-full" alt="avatar" />
                                </div>

                                <h3 className="relative mx-2 text-sm font-medium text-gray-700 dark:text-gray-200">
                                    {
                                        isMenuOpened &&
                                        <div className="absolute right-0 z-20 w-48 py-2 mt-6 bg-white rounded-md shadow-xl">
                                            <Link href={`/profile`}>
                                                <a className="block px-4 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 transform hover:bg-blue-500 hover:text-white">
                                                    your profile
                                                </a>
                                            </Link>

                                            <Link href={`/api/auth/logout`}>
                                                <a className="block px-4 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-blue-500 hover:text-white">
                                                    Logout
                                                </a>
                                            </Link>

                                        </div>
                                    }
                                </h3>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header;