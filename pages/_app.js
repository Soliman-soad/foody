import Head from "next/head";
import "../styles/globals.css";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Foody</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
