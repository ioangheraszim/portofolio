import "./App.scss";
import HeroSection from "./components/HeroSection/HeroSection";
import Navbar from "./components/Navbar/Navbar";
import Skills from "./components/Skills/Skills";
function App() {
  return (
   <main className="bubbles">
    <Navbar/>
    <HeroSection/>
    <Skills/>
   </main>
  )
}

export default App
