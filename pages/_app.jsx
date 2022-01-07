import Head from "next/head"
import Header from "../components/header/header"
import Footer from "../components/footer/footer"
import ThemeProvider from '../theme/theme';
import "../styles/globals.scss" 
import "../public/css/uicons-regular-rounded.css" 
import "../public/css/all.min.css" 

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Edu. E.M.S System</title>
        <link rel="icon" href="/imgs/logoColored.png" />
        <meta name="description" content="Edu. E.M.S System - Landing Page" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider>
        <Header />
          <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </>
  )
}

export default App
