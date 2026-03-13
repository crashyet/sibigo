import React from 'react'
import { Outlet } from 'react-router-dom'
import SidebarBook from '../components/SidebarBook'

const BookPage = () => {
  return (
    <div className="flex min-h-screen">
      <SidebarBook />
      <main className="flex-1 p-10 font-pjs">
        {/* <h1 className="text-4xl font-bold text-[#2D2D2D] mb-8">Pilih Materi Belajar</h1> */}

        <div className="bg-white rounded-[30px] pt-12">
          <Outlet />
        </div>
      </main>
    </div>
  )
}

export default BookPage
