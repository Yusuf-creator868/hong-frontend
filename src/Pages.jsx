import { Navbar } from './Components/navbar'
import { Hero } from './Components/hero'
import Statistics from './Components/statistics'
import { About } from './Components/about'
import Languages from './Components/languages'
import LearningFormats from './Components/learning-formats'
import Branches from './Components/branches'
import SocialMedia from './Components/social-media'
import Contact from './Components/contact'
import { Footer } from './Components/footer'

function Pages() {
  return (
    <div className="overflow-hidden bg-white">
      <Navbar />
      <main>
        <Hero />
        <Statistics />
        <About />
        <Languages />
        <LearningFormats />
        <Branches />
        <SocialMedia />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default Pages
