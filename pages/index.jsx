import cls from "./home.module.scss"
import { About, Features, Gallery, Plans, FAQ, Contact } from "../components/Main"

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

export default Home;
