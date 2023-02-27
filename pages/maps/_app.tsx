import Head from "next/head";
import Script from "next/script";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>Next Naver maps</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default App;
