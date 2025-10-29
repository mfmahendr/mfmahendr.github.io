import Header from "./components/layouts/Header";
import Navigation from "./components/layouts/Navigation";
import Footer from "./components/layouts/Footer";
import About from "./components/sections/About/About";
import Availability from "./components/sections/About/Availability";
import Interests from "./components/sections/Interests/Interests";
import Skills from "./components/sections/Skills/SkillsAndTechnology";
import Projects from "./components/sections/Projects/Projects";
import Contact from "./components/sections/Contact/Contact";
import { useRef } from "react";

function App() {
  const heroRef = useRef(null);

  return (
    <div className="font-serif aged">
      <Header heroRef={heroRef} />
      <Navigation heroRef={heroRef} />

      <main className="container mx-auto px-4 max-w-6xl relative">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6 border-black">
          <div className="md:col-span-4">
            <About />
          </div>
          <div className="md:col-span-2">
            <Availability />
          </div>
        </div>

        <div className="grid md:grid-cols-12 gap-3">
          <Interests />
          <Skills />
        </div>

        <Projects />
        <Contact />
      </main>

      <Footer />

      <svg width="0" height="0">
        <filter id="ink-bleed-filter">
          <feTurbulence
            type="turbulence"
            baseFrequency="0.05"
            numOctaves="3"
            result="turb"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="turb"
            scale="5"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </svg>
    </div>
  );
}

export default App;
