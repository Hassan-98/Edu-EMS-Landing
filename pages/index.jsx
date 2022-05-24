import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { About, Features, Gallery, Plans, FAQ, Contact } from "../components/Main";
import cls from "./home.module.scss";

const Home = () => {
  return (
    <>
      <div className={cls.header__divider}></div>
      <main>
        <About />
        <Features />
        <Gallery />
        <Plans />
        <FAQ />
        <Contact />
      </main>
    </>
  )
}

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"]))
    }
  };
}

export default Home;
