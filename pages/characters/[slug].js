import PropTypes from "prop-types";
import Character from "../../components/common/custom/Character";
import slugify from "slugify";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";

const CharacterPage = ({character, films}) => {
    return (
        <div>
            <Character character={character} films={films}/>
        </div>
    )
}

CharacterPage.propTypes = {
    character: PropTypes.object.isRequired,
    films: PropTypes.array.isRequired
}

export const getServerSideProps = withPageAuthRequired({
    async getServerSideProps({query}) {

        const baseUrl = process.env.NEXT_PUBLIC_STAR_WARS_API_BASE_URL;
        const slug = query.slug;
        const slugArr = slug.split("-");
        const characterId = slugArr[slugArr.length - 1];
        const characterNameSlugArr = slugArr.slice(0, [slugArr.length - 1]);
        const characterNameSlug = characterNameSlugArr.join("-");
        const res = await fetch(`${baseUrl}/people/${characterId}`)
        const character = await res.json();

        const characterOriginRes = await fetch(character.homeworld);
        const characterOriginData = await characterOriginRes.json();

        const films = [];

        for (const filmUrl of character.films) {
            const filmRes = await fetch(filmUrl);
            const filmData = await filmRes.json();
            const filmTitleSlug = slugify(filmData.title, {
                lower: true,
                strict: false
            })
            films.push({
                ...filmData,
                slug: filmTitleSlug
            });
        }

        return {
            props: {
                character: {
                    ...character,
                    slug: characterNameSlug,
                    origin: characterOriginData
                },
                films
            }
        }
    }
})

export default CharacterPage;