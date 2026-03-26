import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

import logo from '@/assets/logo.png'
import sibigoText from '@/assets/sibigo-brown.png'
import huruf from '@/assets/huruf.png'
import isyarat from '@/assets/isyarat.png'
import percakapan from '@/assets/percakapan.png'
import angka from '@/assets/angka.png'
import Button from '@/components/ui/Button'

const MENU_ITEMS = [
  { id: 'alphabet', label: 'Huruf Alfabet', icon: huruf, path: '/lesson/alphabet' },
  { id: 'conversation', label: 'Percakapan Harian', icon: percakapan, path: '/lesson/conversation' },
  { id: 'words', label: 'Imbuhan', icon: isyarat, path: '/lesson/words' },
  { id: 'numbers', label: 'Angka & Bilangan', icon: angka, path: '/lesson/numbers' },
]

const SidebarBook = ({ isOpen, onClose }) => {
  const navigate = useNavigate()
  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      <aside className={`
        fixed lg:relative z-50 lg:z-10
        w-72 lg:w-80 h-screen bg-white border-r border-[#D1D1D1]
        flex shrink-0 flex-col py-8 lg:py-12 px-6 lg:px-8 font-pjs
        transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        {/* Close button - mobile only */}
        <button
          onClick={onClose}
          className="lg:hidden absolute top-4 right-4 p-2 rounded-lg hover:bg-gray-100"
          aria-label="Close menu"
        >
          <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Logo Section */}
        <div onClick={() => navigate('/')} className="flex items-center gap-3 mb-10 lg:mb-14 px-2 lg:px-4 cursor-pointer">
          <img src={logo} alt="Sibigo" className="w-12 lg:w-16" />
          <img src={sibigoText} alt="SIBIGO" className="h-5 lg:h-7" />
        </div>

        {/* Navigation List */}
        <nav className="flex flex-col gap-3 lg:gap-4 overflow-y-auto custom-scrollbar pr-1">
          {MENU_ITEMS.map((item) => (
            <NavLink
              key={item.id}
              to={item.path}
              onClick={onClose}
              className={({ isActive }) =>
                `w-full flex items-center gap-3 lg:gap-4 py-3 lg:py-4 px-4 lg:px-6 rounded-2xl transition-all duration-300 text-left cursor-pointer ${isActive
                  ? 'border-2 border-[#3338A0] text-[#3338A0]'
                  : 'text-[#2D2D2D] hover:bg-gray-50 border-2 border-transparent'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <img src={item.icon} className={`shrink-0 w-8 lg:w-auto ${isActive ? '' : 'opacity-80'}`} />
                  <span className="text-base lg:text-lg font-bold tracking-tight">{item.label}</span>
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Back Button Section */}
        <div className="mt-auto pt-6 border-t border-gray-100">
          <Button
            onClick={() => navigate('/')}
            variant="primary"
            className="w-full py-3 text-xl"
          >Kembali</Button>
        </div>
      </aside>
    </>
  )
}

export default SidebarBook
