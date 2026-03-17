import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

import useScrolled from '../../hooks/useScrolled'
import Button from '../ui/Button'

import logo from '../../assets/logo.png'
import text from '../../assets/sibigo-brown.png'

const NAV_LINKS = [
  { href: '/#home', label: 'Home' },
  { href: '/#about', label: 'About' },
  { href: '/#konten', label: 'Konten' },
  { href: '/#contact', label: 'Contact' },
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const scrolled = useScrolled(20)

  return (
    <nav className={`fixed top-0 z-50 w-full navbar-glass ${scrolled ? 'scrolled' : ''} transition-all duration-300`}>
      <div className="flex justify-between items-center py-3 px-6 md:px-16 lg:px-32">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src={logo} className="h-10 md:h-12 lg:h-[64px]" alt="SIBIGO Logo" />
          <img src={text} className="h-5 md:h-6 lg:h-[30px]" alt="SIBIGO" />
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex gap-10 xl:gap-14 items-center">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-black font-pjs font-semibold text-base xl:text-lg hover:text-[#FCC61D] transition-all duration-300 cursor-pointer"
            >
              {link.label}
            </a>
          ))}
          <Button className="text-base xl:text-lg px-8 xl:px-12 py-2.5">
            Mulai
          </Button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className="lg:hidden flex flex-col justify-center items-center gap-1.5 w-10 h-10 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-black rounded-full transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-black rounded-full transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-black rounded-full transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden mobile-menu ${isOpen ? 'open' : ''}`}>
        <div className="flex flex-col items-center gap-4 py-6 px-6 bg-white/95 border-t border-gray-100">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-black font-pjs font-semibold text-lg hover:text-[#FCC61D] transition-all duration-300 cursor-pointer"
            >
              {link.label}
            </a>
          ))}
          <Button className="text-lg px-12 py-2.5 mt-2">
            Mulai
          </Button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
