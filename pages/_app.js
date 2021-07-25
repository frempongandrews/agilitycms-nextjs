import { UserProvider } from '@auth0/nextjs-auth0';
import '../styles/globals.css'
import { SmoothScroll } from "../components/common/custom/SmoothScroll";

function MyApp({ Component, pageProps }) {
  return (
      <SmoothScroll>
        <UserProvider>
              <Component {...pageProps} />
        </UserProvider>
      </SmoothScroll>
  )
}

export default MyApp
