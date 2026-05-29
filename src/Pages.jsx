import { useState } from 'react'
import { Navbar } from './Components/navbar'
import { Hero } from './Components/hero'
import Statistics from './Components/statistics'
import { About } from './Components/about'
import  Branches  from './Components/branches'
import  SocialMedia  from './Components/social-media'
import { Footer } from './Components/footer'
import Contact from './Components/contact'

function Pages() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar/>
      <Hero/>
      <Statistics/>
      <About/>
      <Branches/>
      <SocialMedia/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Pages
