import GlobalStyles from "../components/GlobalStyles";
import Layout from "../components/Layout";
import { useLocalStorage } from "../helpers/hooks";

function MyApp({ Component, pageProps }) {
  const [isUser, setUser] = useLocalStorage("user", {
    id: "",
    isLoggedIn: false,
  });
  const [lastSearched, setLastSearched] = useLocalStorage(
    "lastsearched",
    "all"
  );

  return (
    <>
      <Layout lastSearched={lastSearched} setUser={setUser} isUser={isUser}>
        <GlobalStyles />
        <Component
          {...pageProps}
          setLastSearched={setLastSearched}
          isUser={isUser}
        />
      </Layout>
    </>
  );
}

export default MyApp;
