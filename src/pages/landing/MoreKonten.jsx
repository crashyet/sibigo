import React from 'react'
import useScrollReveal from '@/hooks/useScrollReveal'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

import HeroSection from './more-konten/HeroSection'
import FaktaSection from './more-konten/FaktaSection'
import FaqSection from './more-konten/FaqSection'
import ArtikelSection from './more-konten/ArtikelSection'

const MoreKonten = () => {
  useScrollReveal()

  return (
    <>
      <Navbar />
      <div className="px-4 md:px-10 lg:px-28" id='content'>
        <HeroSection />
        <FaktaSection />
        <FaqSection />
        <ArtikelSection />
      </div>
      <Footer />
    </>
  )
}

export default MoreKonten