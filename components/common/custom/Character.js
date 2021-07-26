import PropTypes from "prop-types";
import CustomLayout from "./CustomLayout";
import CharacterPage from "../../../pages/characters/[slug]";

const Character = ({character, films}) => {

    const renderCharacterDetails = () => {
        return (
            <div className="max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
                <img className="object-cover object-center w-full h-56"
                     src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                     alt="avatar" />

                <div className="flex items-center px-6 py-3 bg-gray-900">
                    <svg className="w-6 h-6 text-white fill-current" viewBox="0 0 24 24" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M17 21C15.8954 21 15 20.1046 15 19V15C15 13.8954 15.8954 13 17 13H19V12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12V13H7C8.10457 13 9 13.8954 9 15V19C9 20.1046 8.10457 21 7 21H3V12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12V21H17ZM19 15H17V19H19V15ZM7 15H5V19H7V15Z"/>
                    </svg>

                    <h1 className="mx-3 text-lg font-semibold text-white">{character.name}</h1>
                </div>

                <div className="px-6 py-4">

                    <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
                        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd"
                                  d="M16.2721 10.2721C16.2721 12.4813 14.4813 14.2721 12.2721 14.2721C10.063 14.2721 8.27214 12.4813 8.27214 10.2721C8.27214 8.063 10.063 6.27214 12.2721 6.27214C14.4813 6.27214 16.2721 8.063 16.2721 10.2721ZM14.2721 10.2721C14.2721 11.3767 13.3767 12.2721 12.2721 12.2721C11.1676 12.2721 10.2721 11.3767 10.2721 10.2721C10.2721 9.16757 11.1676 8.27214 12.2721 8.27214C13.3767 8.27214 14.2721 9.16757 14.2721 10.2721Z"/>
                            <path fillRule="evenodd" clipRule="evenodd"
                                  d="M5.79417 16.5183C2.19424 13.0909 2.05438 7.3941 5.48178 3.79418C8.90918 0.194258 14.6059 0.0543983 18.2059 3.48179C21.8058 6.90919 21.9457 12.606 18.5183 16.2059L12.3124 22.7241L5.79417 16.5183ZM17.0698 14.8268L12.243 19.8965L7.17324 15.0698C4.3733 12.404 4.26452 7.9732 6.93028 5.17326C9.59603 2.37332 14.0268 2.26454 16.8268 4.93029C19.6267 7.59604 19.7355 12.0269 17.0698 14.8268Z"/>
                        </svg>

                        <h1 className="px-2 text-sm">Origin: California</h1>
                    </div>

                    <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
                        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd"
                                  d="M3.00977 5.83789C3.00977 5.28561 3.45748 4.83789 4.00977 4.83789H20C20.5523 4.83789 21 5.28561 21 5.83789V17.1621C21 18.2667 20.1046 19.1621 19 19.1621H5C3.89543 19.1621 3 18.2667 3 17.1621V6.16211C3 6.11449 3.00333 6.06765 3.00977 6.0218V5.83789ZM5 8.06165V17.1621H19V8.06199L14.1215 12.9405C12.9499 14.1121 11.0504 14.1121 9.87885 12.9405L5 8.06165ZM6.57232 6.80554H17.428L12.7073 11.5263C12.3168 11.9168 11.6836 11.9168 11.2931 11.5263L6.57232 6.80554Z"/>
                        </svg>

                        <h1 className="px-2 text-sm">Appearances: {films.length} movies</h1>
                    </div>
                </div>
            </div>
        )
    }

    const renderCharacterFilms = async () => {
        return films.map((film) => {
            // return (
            //
            // )
        })
    }

    return (
        <CustomLayout>
            {renderCharacterDetails()}

            <section className="container p-6 mx-auto bg-white dark:bg-gray-800">
                <h2 className="text-xl font-medium text-gray-800 capitalize dark:text-white md:text-2xl">Appeared in </h2>

                <div className="flex items-center justify-center">
                    <div className="grid gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">


                        <div className="w-full max-w-xs text-center">
                            <img className="object-cover object-center w-full h-48 mx-auto rounded-lg"
                                 src="https://images.unsplash.com/photo-1493863641943-9b68992a8d07?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=739&q=80"
                                 alt="avatar"/>

                            <div className="mt-2">
                                <h3 className="text-lg font-medium text-gray-700 dark:text-gray-200">Ahmed Omer</h3>
                                <span className="mt-1 font-medium text-gray-600 dark:text-gray-300">CEO</span>
                            </div>
                        </div>

                        <div className="w-full max-w-xs text-center">
                            <img className="object-cover object-center w-full h-48 mx-auto rounded-lg"
                                 src="https://images.unsplash.com/photo-1516756587022-7891ad56a8cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                                 alt="avatar"/>

                            <div className="mt-2">
                                <h3 className="text-lg font-medium text-gray-700 dark:text-gray-200">Jane Doe</h3>
                                <span className="mt-1 font-medium text-gray-600 dark:text-gray-300">Co-founder</span>
                            </div>
                        </div>

                        <div className="w-full max-w-xs text-center">
                            <img className="object-cover object-center w-full h-48 mx-auto rounded-lg"
                                 src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=731&q=80"
                                 alt="avatar"/>

                            <div className="mt-2">
                                <h3 className="text-lg font-medium text-gray-700 dark:text-gray-200">Steve Ben</h3>
                                <span className="mt-1 font-medium text-gray-600 dark:text-gray-300">UI/UX</span>
                            </div>
                        </div>

                        <div className="w-full max-w-xs text-center">
                            <img className="object-cover object-center w-full h-48 mx-auto rounded-lg"
                                 src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                                 alt="avatar"/>

                            <div className="mt-2">
                                <h3 className="text-lg font-medium text-gray-700 dark:text-gray-200">Patterson
                                    Johnson</h3>
                                <span
                                    className="mt-1 font-medium text-gray-600 dark:text-gray-300">Software Engineer</span>
                            </div>
                        </div>
                    </div>
                </div>


            </section>


        </CustomLayout>
    )
};

Character.propTypes = {
    character: PropTypes.object.isRequired,
    films: PropTypes.array.isRequired
}

export default Character;