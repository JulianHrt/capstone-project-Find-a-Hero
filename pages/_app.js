import GlobalStyles from "../components/GlobalStyles";
import Layout from "../components/Layout";
import { useState } from "react";

function MyApp({ Component, pageProps }) {
  const [isFilterByCategory, setFilterByCategory] = useState("");
  return (
    <>
      <Layout>
        <GlobalStyles />
        <Component
          {...pageProps}
          isFilterByCategory={isFilterByCategory}
          setFilterByCategory={setFilterByCategory}
        />
      </Layout>
    </>
  );
}

export default MyApp;
