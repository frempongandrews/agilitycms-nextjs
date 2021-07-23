import Link from "next/link";
const Pagination = ({totalCharactersCount, resultsPerPage, currentPage}) => {
    const numberOfPages = Math.floor(totalCharactersCount/resultsPerPage);
    const renderPagination = () => {
        return [...Array(numberOfPages).keys()].map((e, i) => {
            return (
                <Link href={`/characters?page=${e+1}`}>
                    <a className={`flex items-center px-4 py-2 mx-1 transition-colors duration-200 transform ${currentPage !== e + 1 && "bg-white text-gray-700"} rounded-md dark:bg-gray-800 dark:text-gray-200 hover:bg-indigo-600 ${currentPage === e + 1 && "bg-indigo-600 text-white"} dark:hover:bg-indigo-500 hover:text-white dark:hover:text-gray-200`} key={e}>
                        {e + 1}
                    </a>
                </Link>

            )
        })
    }

    console.log(totalCharactersCount/resultsPerPage);
    return (

        <div className="flex items-center justify-center">
            <Link href={`?page=${currentPage - 1}`}>
                <a className={`flex items-center px-4 py-2 mx-1 bg-white rounded-md ${currentPage > 1 && "hover:bg-indigo-600 hover:text-white text-gray-700"} ${currentPage === 1 && "pointer-events-none text-gray-500"} dark:bg-gray-800 dark:text-gray-600`}>
                    previous
                </a>
            </Link>


            {renderPagination()}

            <Link href={`/characters?page=${currentPage - 1}`}>
                <a className={`flex items-center ${numberOfPages === currentPage && "cursor-not-allowed text-gray-500 pointer-events-none text-gray-500"} px-4 py-2 mx-1 text-gray-700 transition-colors duration-200 transform bg-white rounded-md dark:bg-gray-800 dark:text-gray-200 ${numberOfPages !== currentPage && "hover:bg-indigo-600 hover:text-white"}  dark:hover:bg-indigo-500 dark:hover:text-gray-200`}>
                    Next
                </a>
            </Link>

        </div>
    )
}

export default Pagination;