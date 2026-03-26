import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import VocabularyCard from '@/components/ui/VocabularyCard'
import LessonPopup from '@/components/ui/LessonPopup'
import maskotHead from '@/assets/logo.png'
import { conversationData } from '@/data/book/'
import NotFound from '@/pages/not-found/NotFound'

const ConversationDetailView = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [selectedLetter, setSelectedLetter] = useState(null)

  let displayData = []
    if (id === 'a') displayData = conversationData.slice(0, 6)
    else if (id === 'b') displayData = conversationData.slice(6, 9)

  const isNotFound = (id !== 'a' && id !== 'b');

  if (isNotFound) {
    return <NotFound /> 
  }

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
          {displayData.map((item, idx) => (
            <VocabularyCard 
              key={idx} 
              title={item.title} 
              image={item.image} 
              onClick={() => setSelectedLetter(item)}
            />
          ))}
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