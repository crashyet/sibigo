import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import VocabularyCard from '@/components/ui/VocabularyCard'
import LessonPopup from '@/components/ui/LessonPopup'
import maskotHead from '@/assets/logo.png'

const ConversationDetailView = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedLetter, setSelectedLetter] = useState(null)

  // Dummy vocabulary data to simulate the word list
  const dummyWords = [
    { title: 'Asing', image: null },
    { title: 'Asli', image: null },
    { title: 'Aspal', image: null },
    { title: 'Astaga', image: null },
    { title: 'Asuh', image: null },
    { title: 'Atap', image: null },
  ]

  const totalPages = 14

  return (
    <section className='bg-white min-h-screen relative font-pjs flex flex-col'>
      {/* Decorative gradient for bottom */}
      <div className="absolute bottom-0 w-full h-[30%] bg-linear-to-b from-transparent to-[#C5C7FF]/40 pointer-events-none z-0"></div>

      {/* Header Area */}
      <div className="flex items-center justify-between px-6 md:px-16 pt-10 pb-6 relative z-10">
        <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-[#2D2D2D] font-bold text-lg cursor-pointer hover:text-[#3338A0] transition-colors">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
          Kembali
        </button>
        
        <div className="absolute left-1/2 -translate-x-1/2">
          <img src={maskotHead} alt="Maskot" className='w-12 h-12 object-contain' />
        </div>

        <div className="text-[#3338A0] font-bold text-lg hidden md:block">
          {id?.toUpperCase()} / Percakapan Harian
        </div>
      </div>

      {/* Main Content */}
      <div className='flex-1 flex flex-col items-center pt-8 px-6 md:px-16 z-10 w-full max-w-6xl mx-auto pb-10'>
        {/* Mobile Title View */}
        <div className="w-full flex justify-end mb-6 md:hidden">
           <div className="text-[#3338A0] font-bold text-base">
            {id?.toUpperCase()} / Percakapan Harian
          </div>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-x-10 md:gap-y-10 w-full mb-16'>
          {dummyWords.map((item, idx) => (
            <VocabularyCard 
              key={idx} 
              title={item.title} 
              image={item.image} 
              onClick={() => setSelectedLetter(item)}
            />
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center gap-3 text-gray-500 font-medium text-lg mt-auto pb-4">
          <button 
            className="w-10 h-10 flex items-center justify-center hover:text-[#3338A0] transition-colors disabled:opacity-50"
            onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
            disabled={currentPage === 1}
          >
            &lt;
          </button>
          
          <button className={`w-10 h-10 flex items-center justify-center rounded-lg transition-colors ${currentPage === 1 ? 'bg-[#C2915A] text-white shadow-md' : 'hover:bg-gray-100 text-[#8C94A3]'}`} onClick={() => setCurrentPage(1)}>1</button>
          <button className={`w-10 h-10 flex items-center justify-center rounded-lg transition-colors ${currentPage === 2 ? 'bg-[#C2915A] text-white shadow-md' : 'hover:bg-gray-100 text-[#8C94A3]'}`} onClick={() => setCurrentPage(2)}>2</button>
          <button className={`w-10 h-10 flex items-center justify-center rounded-lg transition-colors ${currentPage === 3 ? 'bg-[#C2915A] text-white shadow-md' : 'hover:bg-gray-100 text-[#8C94A3]'}`} onClick={() => setCurrentPage(3)}>3</button>
          <button className={`w-10 h-10 flex items-center justify-center rounded-lg transition-colors ${currentPage === 4 ? 'bg-[#C2915A] text-white shadow-md' : 'hover:bg-gray-100 text-[#8C94A3]'}`} onClick={() => setCurrentPage(4)}>4</button>
          <button className={`w-10 h-10 flex items-center justify-center rounded-lg transition-colors ${currentPage === 5 ? 'bg-[#C2915A] text-white shadow-md' : 'hover:bg-gray-100 text-[#8C94A3]'}`} onClick={() => setCurrentPage(5)}>5</button>
          
          <span className="px-2 text-[#8C94A3]">...</span>
          
          <button className={`w-10 h-10 flex items-center justify-center rounded-lg transition-colors ${currentPage === totalPages ? 'bg-[#C2915A] text-white shadow-md' : 'hover:bg-gray-100 text-[#8C94A3]'}`} onClick={() => setCurrentPage(totalPages)}>{totalPages}</button>
          
          <button 
            className="w-10 h-10 flex items-center justify-center hover:text-[#3338A0] transition-colors disabled:opacity-50"
            onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
          >
            &gt;
          </button>
        </div>

        <LessonPopup 
          isOpen={selectedLetter !== null} 
          onClose={() => setSelectedLetter(null)} 
          data={selectedLetter}
          videoOnly={true}
          titlePrefix="Kata :"
        />
      </div>
    </section>
  )
}

export default ConversationDetailView