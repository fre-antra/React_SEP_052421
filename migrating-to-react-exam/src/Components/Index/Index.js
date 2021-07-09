import React, {useEffect} from "react";
import Navigation from "./Navigation/Navigation";
import Main from "./Main/Main";
import About from "./About/About";
import Summary from "./Summary/Summary";
import Projects from "./Projects/Projects";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";

const Index = () => {

  return (
      <>
        <Navigation/>
        <Main/>
        <About/>
        <Summary/>
        <Projects/>
        <Contact/>
        <Footer/>
      </>
  )
}

export default Index;