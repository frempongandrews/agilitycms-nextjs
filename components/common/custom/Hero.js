import Link from "next/link";
import { useUser } from '@auth0/nextjs-auth0';
import {useState} from "react";

const Hero = () => {
    const [isMenuOpened, setIsMenuOpened] = useState(false);
    const { user } = useUser();
    return (
        <div>
            <header>
                <nav className="bg-white shadow">
                    <div className="container px-6 py-4 mx-auto">
                        <div className="lg:flex lg:items-center lg:justify-between">
                            <div className="flex items-center justify-between">
                                <div className="text-xl font-semibold text-gray-700">
                                    <Link href={`/`}>
                                        <a className="text-2xl font-bold text-gray-800 lg:text-3xl hover:text-gray-700">Home</a>
                                    </Link>
                                </div>

                                {/*<!-- Mobile menu button -->*/}
                                <div className="flex lg:hidden">
                                    <button type="button" className="text-gray-500  hover:text-gray-600  focus:outline-none focus:text-gray-600" aria-label="toggle menu">
                                        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                                            <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            {/*<!-- Mobile Menu open: "block", Menu closed: "hidden" -->*/}
                            <div className="hidden -mx-4 lg:flex lg:items-center">
                                <Link href={`/blog`}>
                                    <a className="block mx-4 mt-2 text-sm text-gray-700 capitalize lg:mt-0 hover:text-blue-600">Blog</a>
                                </Link>

                                {
                                    !user &&
                                    <Link href={`/api/auth/login`}>
                                        <a className="block mx-4 mt-2 text-sm text-gray-700 capitalize lg:mt-0 hover:text-blue-600">Login</a>
                                    </Link>
                                }

                                {
                                    user &&
                                    <div className="drop">
                                        {/*<span className="user-profile-image" />*/}
                                        <button className="relative z-10 block p-2 bg-white rounded-md focus:outline-none rounded-full h-6 w-6 flex items-center justify-center" onClick={() => setIsMenuOpened(!isMenuOpened)} style={styles.profileBackgroundImage}/>
                                        <div className="relative">
                                            {/*<!-- Dropdown menu -->*/}
                                            {
                                              isMenuOpened &&
                                              <div className="absolute right-0 z-20 w-48 py-2 mt-2 bg-white rounded-md shadow-xl">
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
                                        </div>
                                    </div>
                                }

                            </div>
                        </div>
                    </div>
                </nav>

                <div className="w-full bg-center bg-cover h-128" style={styles.bgImage}>
                    <div className="flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50">
                        <div className="text-center">
                            <h1 className="text-2xl font-semibold text-white uppercase lg:text-3xl">Love star wars? We too! </h1>
                            <Link href={`/characters`}>
                                <a>
                                    <button className="w-full px-4 py-2 mt-4 text-sm font-medium text-white uppercase transition-colors duration-200 transform bg-blue-600 rounded-md lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">Explore Characters</button>
                                </a>
                            </Link>

                        </div>
                    </div>
                </div>
            </header>
        </div>

    )
}

const styles = {
    bgImage: {
        backgroundImage: "url(" + "https://i.redd.it/d8ql17e0m7g51.jpg" + ")",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'

    },
    profileBackgroundImage: {
        backgroundImage: "url(" + "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" + ")",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    }
}

export default Hero;