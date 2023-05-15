import '../styles/globals.css'
import { SessionProvider } from "next-auth/react";
import { Toaster } from 'react-hot-toast';


function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
        <Component {...pageProps} />
        <Toaster />
    </SessionProvider>
  );
}

export default MyApp
