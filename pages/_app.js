import GlobalStyles from "../components/GlobalStyles";
import Layout from "../components/Layout";
import { useLocalStorage } from "../helpers/hooks";

function MyApp({ Component, pageProps }) {
  const [lastSearched, setLastSearched] = useLocalStorage(
    "lastsearched",
    "all"
  );
  return (
    <>
      <Layout lastSearched={lastSearched}>
        <GlobalStyles />
        <Component {...pageProps} setLastSearched={setLastSearched} />
      </Layout>
    </>
  );
}

export default MyApp;
