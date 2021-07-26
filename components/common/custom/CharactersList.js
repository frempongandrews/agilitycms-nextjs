import PropTypes from "prop-types";
import Image from "next/image";
import slugify from "slugify";
import Link from "next/link";
import CustomLayout from "./CustomLayout";
import characterImages from "../../../helpers/characterImages";

const CharactersList = ({characters}) => {

    const renderCharacters = () => {
        return characters.map((character) => {
            const slug = slugify(character.name, {
                lower: true,
                strict: false
            });

            const characterUrl = character.url;
            const characterUrlArr = characterUrl.split("/");
            const characterId = characterUrlArr[characterUrlArr.length - 2]

            return (
                <Link href={`/characters/${slug}-${characterId}`} key={slug}>
                    <a>
                        <div className="w-full max-w-xs text-center">
                            <Image className="object-cover object-center w-full h-48 mx-auto rounded-lg"
                                 src={characterImages[slug] || characterImages["no-image"]}
                                 alt={slug} width={300} height={220}/>

                            <div className="mt-2">
                                <h3 className="text-lg font-medium text-gray-700">{character.name}</h3>
                            </div>
                        </div>

                    </a>
                </Link>
            )
        })
    }

    return (
        <CustomLayout title={`characters`}>
            <section className="container p-6 mx-auto bg-white mb-20">
                <h2 className="text-xl font-medium text-gray-800 capitalize md:text-2xl">Characters</h2>
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

