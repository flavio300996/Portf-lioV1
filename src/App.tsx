import NavBar from "./components/NavBar"
import AboutSection from "./pages/Home/sections/About"
import HeroSection from "./pages/Home/sections/Hero"
import ProjectsSection from "./pages/Home/sections/Projects"
import Footer from "./components/Footer/Footer"

const App = () => {


  return (
    <>
      <NavBar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      { <Footer /> }
    </>
  )
}

export default App
