import CharactersList from "../../components/common/CharactersList";
import { withPageAuthRequired } from '@auth0/nextjs-auth0';

const CharactersPage = (props) => {
    // console.log("***********CharactersPage ==> props ==> ", props );
    return (
        <div>
            <h1>All Characters Page</h1>
            <CharactersList />
        </div>
    )
}

export default CharactersPage;
export const getServerSideProps = withPageAuthRequired({
    async getServerSideProps(ctx) {
        console.log("*********getServerSideProps in Protected page ran");
        const baseUrl = process.env.NEXT_PUBLIC_STAR_WARS_API_BASE_URL;
        const res = await fetch(`${baseUrl}/people`);
        const data = await res.json();

        return {
            props: {
                data
            }
        }
    }
});
