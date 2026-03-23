import React from 'react'

import useScrollReveal from '@/hooks/useScrollReveal'

import Navbar from '@/components/layout/Navbar'
import Home from './sections/Home'
import About from './sections/About'
import Konten from './sections/Konten'
import Contact from './sections/Contact'
import Footer from '@/components/layout/Footer'

const LandingPage = () => {
  useScrollReveal()

  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Konten />
      <Contact />
      <Footer />
    </>
  )
}

export default LandingPage