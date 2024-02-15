import AboutUs from "../../components/aboutUs/AboutUs"
import Footer from "../../components/footer/Footer"
import Header from "../../components/header/Header"
import Highlights from "../../components/highlights/Highlights"
import Review from "../../components/review/Review"
import Skills from "../../components/skills/Skills"
import StartQuote from "../../components/startQuote/StartQuote"

const Home = () => {
  return (
    <div style={{backgroundColor: 'aliceblue'}}>
      <Header/>
      <AboutUs/>
      <Skills/>
      <Highlights/>
      <StartQuote/>
      <Review />
      <Footer/>
    </div>
  )
}

export default Home