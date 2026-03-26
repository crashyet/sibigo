import React from 'react'
import text from '@/assets/sibigo-white.png'

const FOOTER_LINKS = {
  perusahaan: [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { label: 'Konten', href: '#konten' },
    { label: 'Contact Us', href: '#contact' },
  ],
  contact: [
    { label: 'Beranda', href: '#' },
    { label: '+62 812 3456 7890', href: '#' },
    { label: 'sibigo@gmail.com', href: '#' },
  ],
  fitur: [
    { label: 'Ai Pintar', href: '/chat' },
    { label: 'LKS SIBI', href: '/lesson' },
    { label: 'Game Edukasi', href: '/play' },
  ],
}

const SOCIAL_LINKS = [
  { icon: 'facebook', path: 'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z' },
  { icon: 'linkedin', path: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z M2 9h4v12H2z M4 2a2 2 0 110 4 2 2 0 010-4z' },
  { icon: 'youtube', path: 'M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 00-1.94 2C1 8.14 1 12 1 12s0 3.86.46 5.58a2.78 2.78 0 001.94 2c1.72.42 8.6.42 8.6.42s6.88 0 8.6-.42a2.78 2.78 0 001.94-2C23 15.86 23 12 23 12s0-3.86-.46-5.58z M9.75 15.02V8.98L15.5 12l-5.75 3.02z' },
  { icon: 'instagram', path: 'M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z M21.23 6.29a2.38 2.38 0 11-4.76 0 2.38 2.38 0 014.76 0z M12 21.35c-5.17 0-9.35-4.18-9.35-9.35S6.83 2.65 12 2.65s9.35 4.18 9.35 9.35-4.18 9.35-9.35 9.35z' },
  { icon: 'tiktok', path: 'M12.525.02c1.31 0 2.57.51 3.51 1.44.3.3.56.63.78.98.81-.03 1.63-.03 2.44 0v3.42c-.81 0-1.61-.02-2.42-.05 0 2.11-.04 4.22-.05 6.33 0 3.31-2.69 6-6 6-3.31 0-6-2.69-6-6 0-3.31 2.69-6 6-6 .31 0 .61.02.91.07V9.75c-.3-.04-.6-.06-.91-.06-1.38 0-2.5 1.12-2.5 2.5 0 1.38 1.12 2.5 2.5 2.5 1.38 0 2.5-1.12 2.5-2.5 0-2.4-.04-4.8-.05-7.2 1.37.16 2.73 1.15 3.32 2.44V.02h-3.41z' },
]

const FooterLinkSection = ({ title, links }) => (
  <div className="space-y-4">
    <h3 className="text-xl font-bold mb-6">{title}</h3>
    <ul className="space-y-4 text-gray-200">
      {links.map((link) => (
        <li key={link.label}>
          <a href={link.href} className="hover:text-white transition-colors">
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  </div>
)

const Footer = () => {
  return (
    <footer className="bg-[#3338A0] text-white pt-12 md:pt-16 pb-8 md:pb-10 px-6 md:px-20 font-pjs lg:px-32 animate-on-scroll" data-animation="animate-fade-up">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-18">
          {/* Logo and Tagline */}
          <div className="lg:col-span-1">
            <img src={text} alt="" className='mb-8' />
            <p className="text-gray-200 text-base leading-relaxed max-w-xs">
              Belajar kapan pun & di mana pun - interaktif, inklusif, dan penuh semangat.
            </p>
          </div>

          <FooterLinkSection title="Perusahaan" links={FOOTER_LINKS.perusahaan} />
          <FooterLinkSection title="Contact" links={FOOTER_LINKS.contact} />
          <FooterLinkSection title="Fitur" links={FOOTER_LINKS.fitur} />

          {/* Newsletter */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold mb-6">Dapatkan Update</h3>
            <p className="text-gray-200 text-sm mb-6">
              Daftar email untuk tips belajar & fitur baru
            </p>
            <div className="flex items-center w-full max-w-sm">
              <div className="relative flex-1">
                <input
                  type="email"
                  placeholder="Masukkan Email Anda"
                  className="w-full bg-white/20 border-none rounded-l-lg py-3 px-4 text-white placeholder-gray-300 focus:ring-2 focus:ring-yellow-400 outline-none transition-all"
                />
              </div>
              <button className="bg-[#FFD500] hover:bg-[#FFC400] text-blue-900 rounded-r-lg p-3 transition-colors h-[48px] px-5 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
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
