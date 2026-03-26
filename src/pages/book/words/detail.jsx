import React, { useState } from 'react'
import { useParams, Navigate } from 'react-router-dom'
import BackButton from '@/components/ui/BackButton'
import icon from '@/assets/logo.png'
import ButtonLesson from '@/components/ui/ButtonLesson'
import LessonPopup from '@/components/ui/LessonPopup'
import { wordsData } from '@/data/book'

const WordsDetailView = () => {
  const { id } = useParams()
  const [selectedLetter, setSelectedLetter] = useState(null)

  let displayData = []
  if (id === 'awalan') displayData = wordsData.slice(0, 7)
  else if (id === 'akhiran') displayData = wordsData.slice(7, 15)
  else if (id === 'partikel') displayData = wordsData.slice(15, 18)
  else return <Navigate to="/lesson/words" replace />

  return (
    <section className='bg-white min-h-screen w-full relative font-pjs flex flex-col overflow-hidden'>
      {/* Linear Bottom */}
      <div className="absolute bottom-0 w-full h-1/4 bg-linear-to-b from-[#D9D9D9]/0 to-[#C5C7FF] pointer-events-none"></div>

      {/* Header Area */}
      <div className="relative z-20 w-full">
        <div className="px-4 md:px-10 lg:px-20 pt-10">
          <BackButton variant='gray' to="/lesson/words" />
        </div>
        <div className="flex justify-center -mt-8">
          <img src={icon} alt="" className='w-14 md:w-18' />
        </div>
      </div>

      {/* Main Content */}
      <div className='flex-1 flex items-center justify-center z-10 py-12 md:py-0'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 lg:gap-12 w-full max-w-7xl px-4 md:px-12 lg:px-24 mx-auto'>
          {displayData.map((item) => (
            <ButtonLesson 
              key={item.id} 
              title={item.title} 
              icon={item.icon} 
              onClick={() => setSelectedLetter(item)}
            />
          ))}
        </div>
      </div>

      <LessonPopup 
        isOpen={selectedLetter !== null} 
        onClose={() => setSelectedLetter(null)} 
        data={selectedLetter}
        videoOnly={true}
        titlePrefix="Imbuhan :"
      />
    </section>
  )
}

export default WordsDetailView