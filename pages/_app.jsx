import { useEffect, useState } from 'react';
import Head from "next/head"
import { appWithTranslation } from "next-i18next";
import Header from "../components/header/header"
import Footer from "../components/footer/footer"
import ThemeProvider from '../theme/theme';
import "../styles/globals.scss" 
import "../public/css/uicons-regular-rounded.css" 
import "../public/css/all.min.css" 

const App = ({ Component, pageProps }) => {
  const [locale] = useState(pageProps?._nextI18Next?.initialLocale || 'en');

  useEffect(() => {
    if(locale === 'ar') {
      document.querySelector(":root").style.setProperty('--font', 'BalooBhaijaan2');
    } else {
      document.querySelector(":root").style.setProperty('--font', 'SpaceGrotesk');
    }
  }, [locale, pageProps]);

  return (
    <>
      <Head>
        <title>Edu. E.M.S System</title>
        <link rel="icon" href="/imgs/logoColored.png" />
        <meta name="description" content="Edu. E.M.S System - Landing Page" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider locale={locale}>
        <div id={locale}>
          <Header />
            <Component {...pageProps} />
          <Footer />
        </div>
      </ThemeProvider>
    </>
  )
}

export default appWithTranslation(App)
