import { useEffect, useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import SectionWrapper from "./Components/SectionWrapper/SectionWrapper";
import Home from "./sections/Home";
import About from "./sections/About";
import Skills from "./sections/Skills"
import Projects from "./sections/Projects"
import Contact from "./sections/Contact"

function App() {
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowNav(window.scrollY > window.innerHeight * 0.6);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {showNav && <Navbar />}

      <SectionWrapper id="home">
        <Home />
      </SectionWrapper>

      <SectionWrapper id="about">
        <About />
      </SectionWrapper>

      <SectionWrapper id="skill">
        <Skills />
      </SectionWrapper>

      <SectionWrapper id="projects">
        <Projects />
      </SectionWrapper>

       <SectionWrapper id="contact">
        <Contact />
      </SectionWrapper>

    </>
  );
}

export default App;
