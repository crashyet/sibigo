import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import alphabetIcon from '@/assets/book/lks.png'
import HeaderLine from '@/components/ui/HeaderLine'
import SignCard from '@/components/ui/SignCard'
import LessonPopup from '@/components/ui/LessonPopup'
import { numberData } from '@/data/book'

const NumberView = () => {
  // const { id } = useParams()
  const navigate = useNavigate()
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedLetter, setSelectedLetter] = useState(null)
  const filteredNumberData = numberData.filter(item => item.id <= 10)

  return (
    <div className="-ml-40 relative h-screen overflow-y-auto pb-20 custom-scrollbar">
      {/* Decorative background blobs */}
      <div className="absolute -top-10 right-0">
        <svg width="318" height="283" viewBox="0 0 318 283" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path opacity="0.2" d="M527 12C527 161.669 409.027 283 263.5 283C117.973 283 0 161.669 0 12C0 -137.669 117.973 -259 263.5 -259C409.027 -259 527 -137.669 527 12ZM48.5969 12C48.5969 134.066 144.812 233.02 263.5 233.02C382.188 233.02 478.403 134.066 478.403 12C478.403 -110.066 382.188 -209.02 263.5 -209.02C144.812 -209.02 48.5969 -110.066 48.5969 12Z" fill="#FCC61D"/>
        </svg>
      </div>
      <div className="absolute -bottom-20 right-0">
        <svg width="758" height="563" viewBox="0 0 758 563" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path opacity="0.2" d="M861.537 24.3275C861.537 24.3275 641.519 76.3115 560.74 181.355C463.807 307.404 592.671 449.827 509.373 585.274C458.445 668.084 423.199 730.862 329.735 757.613C192.171 796.986 35.2457 587.159 4.58498 588.715" stroke="#3338A0" stroke-width="50"/>
        </svg>
      </div>

      <div className="flex flex-col items-center pt-18">
        {/* LKS Header Badge */}
        <HeaderLine title='LKS' variant1='right' variant2='left' />

        <h2 className="text-4xl font-bold text-[#2D2D2D] mb-2 tracking-tight">Materi</h2>
        <p className="text-gray-500 text-lg mb-24 text-center">
          Pelajari huruf SIBI dari tingkat dasar hingga mahir.
        </p>

        {/* Section Title with Icon */}
        <div className="w-full max-w-5xl flex items-center gap-5 mb-10 px-4">
          <div className="w-20 h-20 rounded-2xl overflow-hidden shadow-md shrink-0">
            <img src={alphabetIcon} alt="Huruf Alfabet" className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col">
            <h3 className="text-3xl font-bold text-[#2D2D2D]">Angka dan Bilangan</h3>
            <span className="text-gray-500 font-medium text-lg">10 pelajaran</span>
          </div>
        </div>

        {/* Lesson Cards */}
        <div className="relative z-10 w-full max-w-5xl px-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-6 gap-y-8">
            {filteredNumberData.map((item, idx) => (
              <SignCard key={idx} title={item.title} icon={item.image} onClick={() => setSelectedLetter(item)} />
            ))}
          </div>
          
          <div className="w-full flex justify-end mt-6">
            <button onClick={() => navigate('/lesson/number/detail')} className="text-xl font-bold text-[#3338A0] cursor-pointer">Lihat Lainnya {'>'}</button>
          </div>
        </div>


        <LessonPopup 
          isOpen={selectedLetter !== null} 
          onClose={() => setSelectedLetter(null)} 
          data={selectedLetter}
          videoOnly={true}
          titlePrefix="Angka dan Bilangan :"
        />
      </div>
    </div>
  )
}

export default NumberView
