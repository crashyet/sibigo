import React from 'react'

import logo from '../../assets/logo.png'
import text from '../../assets/text.png'

const Navbar = () => {
  return (
    <div className="absolute fixed top-0 z-100 w-full flex justify-between items-center bg-white text-black py-3 px-32 shadow-xl">
        <div className="flex w-full h-full items-center gap-4">
          <img src={logo} className="h-[64px]" />
          <img src={text} className="h-[30px]" />
        </div>
        <div className="flex gap-14 items-center">
          <a href="#home" className="text-black font-pjs font-semibold text-2xl hover:text-[#FCC61D] transition-all duration-300 cursor-pointer">Home</a>
          <a href="#about" className="text-black font-pjs font-semibold text-2xl hover:text-[#FCC61D] transition-all duration-300 cursor-pointer">About</a>
          <a href="#konten" className="text-black font-pjs font-semibold text-2xl hover:text-[#FCC61D] transition-all duration-300 cursor-pointer">Konten</a>
          <a href="#contact" className="text-black font-pjs font-semibold text-2xl hover:text-[#FCC61D] transition-all duration-300 cursor-pointer">Contact</a>
          <button className="bg-[#FCC61D] text-[#f7f7f7] rounded-3xl font-pjs font-bold text-xl px-15 py-2.5 shadow-[0_5px_0_#C59560] hover:bg-[#C59560] hover:shadow-none hover:translate-y-1 transition-all duration-300 cursor-pointer">Mulai</button>
        </div>
    </div>
  )
}

export default Navbar
