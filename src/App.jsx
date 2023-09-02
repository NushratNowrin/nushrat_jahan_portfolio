import { About, Contact, Experience, Feedbacks, Hero, Navbar, StarsCanvas, Tech, Works, } from "./components"
import Footer from "./components/Footer"
import Projects from "./components/Projects"
import Services from "./components/Services"
import Skills from "./components/Skills"
import ThreeD from "./components/ThreeD"

function App() {
  return (
    <div>
      <div className="relative z-0 bg-secondary">
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center bg-fixed">
              <Navbar/>
              <Hero/>
          </div>
          <About/>
          <Services />
          <Skills /> 
          <Projects/>
          <ThreeD />
          {/* <Tech/>
          <Works/>
          <Feedbacks/> */}
          <div className="relative z-0">
              {/* <Contact/>
              <StarsCanvas/> */}
          </div>
          <Footer />
      </div>
    </div>
  )
}

export default App
