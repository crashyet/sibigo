import React from 'react'
import { Outlet } from 'react-router-dom'

import SidebarBook from '../../components/layout/SidebarBook'

const BookPage = () => {
  return (
    <div className="flex min-h-screen">
      <SidebarBook />
      <main className="w-screen h-screen font-pjs">
        <Outlet />
      </main>
    </div>
  )
}

export default BookPage
