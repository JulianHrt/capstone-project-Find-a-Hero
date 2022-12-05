import GlobalStyles from "../components/GlobalStyles";
import Layout from "../components/Layout";
import { useLocalStorage } from "../helpers/hooks";
import { CloudinaryContext } from "cloudinary-react";

function MyApp({ Component, pageProps }) {
  const [isUser, setUser] = useLocalStorage("user", {
    id: 0,
    isLoggedIn: false,
  });
  const [lastSearched, setLastSearched] = useLocalStorage(
    "lastsearched",
    "all"
  );
  const [adIsPaid, setadIsPaid] = useLocalStorage("AdisPaid", {
    id: null,
    paid: false,
  });

  return (
    <>
      <CloudinaryContext cloudName="dhi2fh33d">
        <Layout lastSearched={lastSearched} setUser={setUser} isUser={isUser}>
          <GlobalStyles />
          <Component
            {...pageProps}
            setLastSearched={setLastSearched}
            isUser={isUser}
            adIsPaid={adIsPaid}
            setadIsPaid={setadIsPaid}
          />
        </Layout>
      </CloudinaryContext>
    </>
  );
}

export default MyApp;
