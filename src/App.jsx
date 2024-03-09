import "./App.scss";
import HeroSection from "./components/HeroSection/HeroSection";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects"
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact"
import Footer from "./components/Footer/Footer";
function App() {
  return (
   <main>
    <Navbar/>
    <HeroSection/>
    <Skills title="Skills"/>
    <Projects title="Projects"/>
    <Contact />
    <Footer/>
   </main>
  )
}

export default App