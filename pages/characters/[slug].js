import PropTypes from "prop-types";
import Character from "../../components/common/custom/Character";

const CharacterPage = ({character, films}) => {
    console.log("**************character - CharacterPage - ==> ", character);
    console.log("**************films - CharacterPage - ==> ", films);
    return (
        <div>
            <Character character={character} films={films}/>
        </div>
    )
}

export async function getServerSideProps({query}) {
    console.log("***********Query getServerSideProps CharacterPage ==> ", query);

    const baseUrl = process.env.NEXT_PUBLIC_STAR_WARS_API_BASE_URL;
    const slug = query.slug;
    const slugArr = slug.split("-");
    const characterId = slugArr[slugArr.length - 1];
    const res = await fetch(`${baseUrl}/people/${characterId}`)
    const character = await res.json();

    const films = [];

    for (const filmUrl of character.films) {
        const filmRes = await fetch(filmUrl);
        const filmData = await filmRes.json();
        films.push(filmData);
    }

    return {
        props: {
            character,
            films
        }
    }
}

CharacterPage.propTypes = {
    character: PropTypes.object.isRequired,
    films: PropTypes.array.isRequired
}

export default CharacterPage;