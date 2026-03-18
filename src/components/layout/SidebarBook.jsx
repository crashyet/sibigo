import React from 'react'
import { NavLink } from 'react-router-dom'

import logo from '../../assets/logo.png'
import sibigoText from '../../assets/sibigo-brown.png'
import huruf from '../../assets/huruf.png'
import isyarat from '../../assets/isyarat.png'
import percakapan from '../../assets/percakapan.png'
import angka from '../../assets/angka.png'

const MENU_ITEMS = [
  { id: 'alphabet', label: 'Huruf Alfabet', icon: huruf, path: '/lesson/alphabet' },
  { id: 'conversation', label: 'Percakapan Harian', icon: percakapan, path: '/lesson/conversation' },
  { id: 'words', label: 'Imbuhan', icon: isyarat, path: '/lesson/words' },
  { id: 'numbers', label: 'Angka & Bilangan', icon: angka, path: '/lesson/numbers' },
]

const SidebarBook = () => {
  return (
    <aside className="w-88 min-h-screen bg-white border-r border-[#D1D1D1] flex shrink-0 flex-col py-12 px-8 font-pjs">
      {/* Logo Section */}
      <div className="flex items-center gap-3 mb-16 px-4">
        <img src={logo} alt="Sibigo" className="w-16" />
        <img src={sibigoText} alt="SIBIGO" className="h-7" />
      </div>

      {/* Navigation List */}
      <nav className="flex flex-col gap-4">
        {MENU_ITEMS.map((item) => (
          <NavLink
            key={item.id}
            to={item.path}
            className={({ isActive }) =>
              `w-full flex items-center gap-4 py-4 px-6 rounded-2xl transition-all duration-300 text-left cursor-pointer ${isActive
                ? 'border-2 border-[#3338A0] text-[#3338A0]'
                : 'text-[#2D2D2D] hover:bg-gray-50 border-2 border-transparent'
              }`
            }
          >
            {({ isActive }) => (
              <>
                <img src={item.icon} className={`shrink-0 ${isActive ? '' : 'opacity-80'}`} />
                <span className="text-xl font-bold tracking-tight">{item.label}</span>
              </>
            )}
          </NavLink>
        ))}
      </nav>
    </aside>
  )
}

export default SidebarBook
