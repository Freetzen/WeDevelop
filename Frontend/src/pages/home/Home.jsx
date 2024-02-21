import { useEffect, useState } from "react";
import AboutUs from "../../components/aboutUs/AboutUs";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Highlights from "../../components/highlights/Highlights";
import Review from "../../components/review/Review";
import Skills from "../../components/skills/Skills";
import StartQuote from "../../components/startQuote/StartQuote";
import SpinnerConLogo from '../../components/spinners/spinnerConLogo/SpinnerConLogo';

const Home = () => {

  return (
    <>
      
        <>
          <Header />
          <AboutUs />
          <Skills />
          <Highlights />
          <StartQuote />
          <Review />
          <Footer />
        </>
      
    </>
  );
};

export default Home;
