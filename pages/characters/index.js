import Link from "next/link";
import CharactersList from "../../components/common/custom/CharactersList";
import { withPageAuthRequired } from '@auth0/nextjs-auth0';

const CharactersPage = ({data}) => {
    console.log("***********CharactersPage ==> data ==> ", data );
    const { results } = data;
    const nextPageQueryStr = data.next.split("/")[data.next.split("/").length-1]; // ?page=2
    console.log("*********nextPageQueryStr ==> ", nextPageQueryStr);
    return (
        <div>
            <CharactersList characters={results}/>

            <div className="flex items-center justify-center">
                <Link href={`/characters${nextPageQueryStr}`}>
                    Load more
                </Link>
            </div>
        </div>
    )
}

export default CharactersPage;
export const getServerSideProps = withPageAuthRequired({
    async getServerSideProps(ctx) {
        console.log("*************ctx.query ===> ", ctx.query)
        const baseUrl = process.env.NEXT_PUBLIC_STAR_WARS_API_BASE_URL;
        const fetchUrl = !ctx.query.page ? `${baseUrl}/people`: `${baseUrl}/people?page=${ctx.query.page}`
        const res = await fetch(`${fetchUrl}`);
        const data = await res.json();

        return {
            props: {
                data
            }
        }
    }
});

