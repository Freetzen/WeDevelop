import AboutUs from "../../components/aboutUs/AboutUs"
import Feedback from "../../components/feedback/Feedback"
import Footer from "../../components/footer/Footer"
import Header from "../../components/header/Header"
import Highlights from "../../components/highlights/Highlights"
import Skills from "../../components/skills/Skills"
import StartQuote from "../../components/startQuote/StartQuote"

const Home = () => {
  return (
    <div>
      <Header/>
      <AboutUs/>
      <Skills/>
      <Highlights/>
      <StartQuote/>
      <Feedback/>
      <Footer/>
    </div>
  )
}

export default Home