import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'

import SidebarBook from '@/components/layout/SidebarBook'

const BookPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="flex h-screen overflow-hidden relative">
      <SidebarBook isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <main className="flex-1 h-full overflow-auto font-pjs">
        {/* Mobile menu toggle */}
        <button
          onClick={() => setSidebarOpen(true)}
          className="lg:hidden fixed top-4 left-4 z-40 bg-white border border-gray-200 rounded-xl p-2.5 shadow-md"
          aria-label="Open menu"
        >
          <svg className="w-6 h-6 text-[#3338A0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <Outlet />
      </main>
    </div>
  )
}

export default BookPage
