import Head from "next/head";
import Header from "./Header";

const CustomLayout = ({children, title="Star Wars App"}) => {
    return (
        <div>
            <Header />
            <Head>
                <title>{title}</title>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            {children}
        </div>
    )
}

export default CustomLayout;