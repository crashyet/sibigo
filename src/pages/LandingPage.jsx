import React from 'react'

import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Konten from './components/Konten'
import Contact from './components/Contact'

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Konten />
      <Contact />
    </>
  )
}

export default LandingPage