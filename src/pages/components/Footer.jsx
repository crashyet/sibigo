import React from 'react'
import text from '../../assets/sibigo-white.png'

const Footer = () => {
  return (
    <footer className="bg-[#3338A0] text-white pt-12 md:pt-20 pb-8 md:pb-10 px-6 md:px-20 font-pjs lg:px-32 animate-on-scroll" data-animation="animate-fade-up">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-18">
          {/* Logo and Tagline */}
          <div className="lg:col-span-1">
            <img src={text} alt="" className='mb-8' />
            <p className="text-gray-200 text-base leading-relaxed max-w-xs">
              Belajar kapan pun & di mana pun - interaktif, inklusif, dan penuh semangat.
            </p>
          </div>

          {/* Perusahaan */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-6">Perusahaan</h3>
            <ul className="space-y-4 text-gray-200">
              <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Konten</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-6">Contact</h3>
            <ul className="space-y-4 text-gray-200">
              <li><a href="#" className="hover:text-white transition-colors">Beranda</a></li>
              <li><a href="#" className="hover:text-white transition-colors">+62 856 9555 4326</a></li>
              <li><a href="#" className="hover:text-white transition-colors">sibigo@gmail.com</a></li>
            </ul>
          </div>

          {/* Fitur */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-6">Fitur</h3>
            <ul className="space-y-4 text-gray-200">
              <li><a href="#" className="hover:text-white transition-colors">Ai Pintar</a></li>
              <li><a href="#" className="hover:text-white transition-colors">LKS SIBI</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Game Edukasi</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold mb-6">Dapatkan Update</h3>
            <p className="text-gray-200 text-sm mb-6">
              Daftar email untuk tips belajar & fitur baru
            </p>
            <div className="relative flex items-center">
              <input
                type="email"
                placeholder="Masukkan Email Anda"
                className="w-full bg-white/20 border-none rounded-lg py-3 px-4 pr-12 text-white placeholder-gray-300 focus:ring-2 focus:ring-yellow-400 outline-none transition-all"
              />
              <button className="absolute right-0 bg-[#FFD500] hover:bg-[#FFC400] text-blue-900 rounded-r-lg p-3 transition-colors h-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-20 pt-8 border-t border-gray-400/30">
          <p className="text-gray-200 text-sm">
            ©2026 SIBIGO. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer