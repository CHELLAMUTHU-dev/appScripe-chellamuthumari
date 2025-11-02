import Head from "next/head";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Discover Our Products | MettaMuse</title>
        <meta
          name="description"
          content="Explore our curated collection of products, filter by category, and find personalized recommendations tailored for you."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        <link rel="canonical" href="https://www.mettamuse.com/products" />

        <meta property="og:title" content="Discover Our Products | MettaMuse" />
        <meta
          property="og:description"
          content="Shop curated products and discover personalized recommendations at MettaMuse."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.mettamuse.com/products" />
      </Head>

      <Component {...pageProps} />
    </>
  );
}
