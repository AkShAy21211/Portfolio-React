import React from "react";
import Intro from "../Sections/Intro";
import About from "../Sections/About";
import Skills from "../Sections/Skills";
import Portfolio from "../Sections/Portfolio";
import Experience from "../Sections/Experience";
import Contact from "../Sections/Contact";
import Thanks from "../Sections/Thanks";
function Home() {
  return (
   <>
    <Intro/>
    <About/>
    <Skills/>
    <Portfolio/>
    <Experience/>
    <Contact/>
    <Thanks/>
   </>
  );
}

export default Home;
