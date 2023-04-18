import Menu from "../components/menu"
import Header from "../layout/header"
import Footer from "../layout/footer"
import Principal from "../layout/principal"
import About from "../layout/about"
import Hero from "../components/hero"
const Home = () => {
  return (<>
    <Header/>
    <Menu/>
    <Hero/>
    <Principal/>
    <About/>
    <Footer/>
    </>
  )
}

export default Home