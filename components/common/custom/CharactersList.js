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

