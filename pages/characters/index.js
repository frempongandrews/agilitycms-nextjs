import Link from "next/link";
import CharactersList from "../../components/common/custom/CharactersList";
import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import Pagination from "../../components/common/custom/Pagination";

const CharactersPage = ({data, currentPage}) => {
    console.log("***********CharactersPage ==> data ==> ", data );
    const { results } = data;
    const totalCharactersCount = data.count;
    const resultsPerPage = results.length;
    return (
        <div>
            <CharactersList characters={results}/>
            <Pagination resultsPerPage={resultsPerPage} totalCharactersCount={totalCharactersCount} currentPage={currentPage}/>
        </div>
    )
}

export default CharactersPage;
export const getServerSideProps = withPageAuthRequired({
    async getServerSideProps(ctx) {
        console.log("*************ctx.query ===> ", ctx.query)
        const baseUrl = process.env.NEXT_PUBLIC_STAR_WARS_API_BASE_URL;
        const fetchUrl = !ctx.query.page ? `${baseUrl}/people`: `${baseUrl}/people?page=${Number(ctx.query.page) || 1}`
        console.log("**************fetchUrl ===> ", fetchUrl);
        const res = await fetch(`${fetchUrl}`);
        const data = await res.json();
        const currentPage = Number(ctx.query.page) || 1;
        return {
            props: {
                data,
                currentPage
            }
        }
    }
});

