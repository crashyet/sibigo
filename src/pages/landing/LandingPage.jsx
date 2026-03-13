import React, { useEffect } from 'react'

import Navbar from '../components/Navbar'
import Home from '../components/Home'
import About from '../components/About'
import Konten from '../components/Konten'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const LandingPage = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const animationType = entry.target.dataset.animation || 'animate-fade-up'
            entry.target.classList.add(animationType)
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    )

    const elements = document.querySelectorAll('.animate-on-scroll')
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

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