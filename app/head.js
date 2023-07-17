import Head from "next/head";

import "../styles/globals.css";
import { useState } from "react";
import LocaleContext from "../utils/localeContext";

export function Language() {
  const [locale, setLanguage] = useState(
    localStorage.getItem("locale") || "en"
  );

  const changeLocale = (newLocale) => {
    localStorage.setItem("locale", newLocale);
    setLanguage(newLocale);
  };

  const localeContextValue = React.useMemo(
    () => ({ locale, changeLocale }),
    [locale]
  );
  return (
    <LocaleContext.Provider value={localeContextValue}>
      <MyApp />
    </LocaleContext.Provider>
  );
}

const MyApp = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>Mendelof</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="preconnect" href="https://stijndv.com" />
      <link
        rel="stylesheet"
        href="https://stijndv.com/fonts/Eudoxus-Sans.css"
      />
    </Head>
    <Component {...pageProps} />
  </>
);

export default MyApp;
