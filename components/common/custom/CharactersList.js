import PropTypes from "prop-types";
import slugify from "slugify";
import Link from "next/link";
import CustomLayout from "./CustomLayout";

const images = {
    "luke-skywalker": "https://res.cloudinary.com/frempong/image/upload/v1627051434/star-wars/Luke-skywalker.jpg",
    "c-3po": "https://res.cloudinary.com/frempong/image/upload/v1627052016/star-wars/latest.jpg"
}

const CharactersList = ({characters}) => {

    const renderCharacters = () => {
        return characters.map((character) => {
            const slug = slugify(character.name, {
                lower: true,
                strict: false
            });
            return (
                <Link href={`/characters/${slug}`} key={slug}>
                    <a>
                        <div className="w-full max-w-xs text-center">
                            <img className="object-cover object-center w-full h-48 mx-auto rounded-lg"
                                 src={images[slug] || images["luke-skywalker"]}
                                 alt={slug}/>

                            <div className="mt-2">
                                <h3 className="text-lg font-medium text-gray-700 dark:text-gray-200">{character.name}</h3>
                                <span className="mt-1 font-medium text-gray-600 dark:text-gray-300">CEO</span>
                            </div>
                        </div>

                    </a>
                </Link>
            )
        })
    }

    return (
        <CustomLayout title={`characters`}>
            <section className="container p-6 mx-auto bg-white dark:bg-gray-800 mb-20">
                <h2 className="text-xl font-medium text-gray-800 capitalize dark:text-white md:text-2xl">Characters</h2>
                <div className="flex items-center justify-center">
                    <div className="grid gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

                        {renderCharacters()}

                        {/*<Link href={`/characters/1`}>*/}
                        {/*    <a>*/}
                        {/*        <div className="w-full max-w-xs text-center">*/}
                        {/*            <img className="object-cover object-center w-full h-48 mx-auto rounded-lg"*/}
                        {/*                 src="https://images.unsplash.com/photo-1493863641943-9b68992a8d07?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=739&q=80"*/}
                        {/*                 alt="avatar"/>*/}

                        {/*            <div className="mt-2">*/}
                        {/*                <h3 className="text-lg font-medium text-gray-700 dark:text-gray-200">Ahmed Omer</h3>*/}
                        {/*                <span className="mt-1 font-medium text-gray-600 dark:text-gray-300">CEO</span>*/}
                        {/*            </div>*/}
                        {/*        </div>*/}

                        {/*    </a>*/}
                        {/*</Link>*/}

                        {/*<div className="w-full max-w-xs text-center">*/}
                        {/*    <img className="object-cover object-center w-full h-48 mx-auto rounded-lg"*/}
                        {/*         src="https://images.unsplash.com/photo-1516756587022-7891ad56a8cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"*/}
                        {/*         alt="avatar"/>*/}

                        {/*    <div className="mt-2">*/}
                        {/*        <h3 className="text-lg font-medium text-gray-700 dark:text-gray-200">Jane Doe</h3>*/}
                        {/*        <span className="mt-1 font-medium text-gray-600 dark:text-gray-300">Co-founder</span>*/}
                        {/*    </div>*/}
                        {/*</div>*/}

                        {/*<div className="w-full max-w-xs text-center">*/}
                        {/*    <img className="object-cover object-center w-full h-48 mx-auto rounded-lg"*/}
                        {/*         src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=731&q=80"*/}
                        {/*         alt="avatar"/>*/}

                        {/*    <div className="mt-2">*/}
                        {/*        <h3 className="text-lg font-medium text-gray-700 dark:text-gray-200">Steve Ben</h3>*/}
                        {/*        <span className="mt-1 font-medium text-gray-600 dark:text-gray-300">UI/UX</span>*/}
                        {/*    </div>*/}
                        {/*</div>*/}

                        {/*<div className="w-full max-w-xs text-center">*/}
                        {/*    <img className="object-cover object-center w-full h-48 mx-auto rounded-lg"*/}
                        {/*         src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"*/}
                        {/*         alt="avatar"/>*/}

                        {/*    <div className="mt-2">*/}
                        {/*        <h3 className="text-lg font-medium text-gray-700 dark:text-gray-200">Patterson*/}
                        {/*            Johnson</h3>*/}
                        {/*        <span*/}
                        {/*            className="mt-1 font-medium text-gray-600 dark:text-gray-300">Software Engineer</span>*/}
                        {/*    </div>*/}
                        {/*</div>*/}


                        {/*<div className="w-full max-w-xs text-center">*/}
                        {/*    <img className="object-cover object-center w-full h-48 mx-auto rounded-lg"*/}
                        {/*         src="https://images.unsplash.com/photo-1493863641943-9b68992a8d07?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=739&q=80"*/}
                        {/*         alt="avatar"/>*/}

                        {/*    <div className="mt-2">*/}
                        {/*        <h3 className="text-lg font-medium text-gray-700 dark:text-gray-200">Ahmed Omer</h3>*/}
                        {/*        <span className="mt-1 font-medium text-gray-600 dark:text-gray-300">CEO</span>*/}
                        {/*    </div>*/}
                        {/*</div>*/}

                        {/*<div className="w-full max-w-xs text-center">*/}
                        {/*    <img className="object-cover object-center w-full h-48 mx-auto rounded-lg"*/}
                        {/*         src="https://images.unsplash.com/photo-1516756587022-7891ad56a8cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"*/}
                        {/*         alt="avatar"/>*/}

                        {/*    <div className="mt-2">*/}
                        {/*        <h3 className="text-lg font-medium text-gray-700 dark:text-gray-200">Jane Doe</h3>*/}
                        {/*        <span className="mt-1 font-medium text-gray-600 dark:text-gray-300">Co-founder</span>*/}
                        {/*    </div>*/}
                        {/*</div>*/}

                        {/*<div className="w-full max-w-xs text-center">*/}
                        {/*    <img className="object-cover object-center w-full h-48 mx-auto rounded-lg"*/}
                        {/*         src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=731&q=80"*/}
                        {/*         alt="avatar"/>*/}

                        {/*    <div className="mt-2">*/}
                        {/*        <h3 className="text-lg font-medium text-gray-700 dark:text-gray-200">Steve Ben</h3>*/}
                        {/*        <span className="mt-1 font-medium text-gray-600 dark:text-gray-300">UI/UX</span>*/}
                        {/*    </div>*/}
                        {/*</div>*/}

                        {/*<div className="w-full max-w-xs text-center">*/}
                        {/*    <img className="object-cover object-center w-full h-48 mx-auto rounded-lg"*/}
                        {/*         src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"*/}
                        {/*         alt="avatar"/>*/}

                        {/*    <div className="mt-2">*/}
                        {/*        <h3 className="text-lg font-medium text-gray-700 dark:text-gray-200">Patterson*/}
                        {/*            Johnson</h3>*/}
                        {/*        <span*/}
                        {/*            className="mt-1 font-medium text-gray-600 dark:text-gray-300">Software Engineer</span>*/}
                        {/*    </div>*/}
                        {/*</div>*/}

                    </div>
                </div>
            </section>
        </CustomLayout>
    )
}

CharactersList.propTypes = {
    characters: PropTypes.array.isRequired
}

export default CharactersList;

