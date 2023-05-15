import '../styles/globals.css'
import { SessionProvider } from "next-auth/react";
import { Toaster } from 'react-hot-toast';
import {AppProps} from 'next/app'


function MyApp({ Component, pageProps: { session, ...pageProps } }:AppProps) {
  return (
    <SessionProvider session={session}>
        <Component {...pageProps} />
        <Toaster />
    </SessionProvider>
  );
}

export default MyApp
