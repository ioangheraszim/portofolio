import "./App.scss";
import HeroSection from "./components/HeroSection/HeroSection";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects"
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact"
function App() {
  return (
   <main>
    <Navbar/>
    <HeroSection/>
    <Skills/>
    <Projects/>
    <Contact />
   </main>
  )
}

export default App