import React from 'react';
import HeaderLine from '@/components/ui/HeaderLine';
import mascotImg from '@/assets/maskot/maskotPencil.png';
import maskot1 from '@/assets/maskot/maskot1.png'
import maskot2 from '@/assets/maskot/maskot2.png'

const GameResult = ({ totalCorrect, totalScore }) => {
  let message = "Bagus"
  if (totalScore === 100) message = "Luar Biasa";
  else if (totalScore < 50) message = "Semangat!";

  return (
    <div className="w-full flex items-center flex-col min-h-[400px] z-20 relative">
      {/* Header */}
      <HeaderLine title='Game' variant1='left' variant2='right' />

      {/* Mascot */}
      <div className="relative">
        <div className="mb-4 w-[200px] h-[200px] md:w-[250px] md:h-[250px] relative drop-shadow-xl animate-bounce-slow">
          <img src={mascotImg} alt="Mascot" className="w-full h-full object-contain" />
        </div>

        <div className="absolute w-fit h-fit rounded-full bg-[#C59560]/28 top-4 left-8 animate-float">
          <img src={maskot1} alt="" className='w-20' />
        </div>
        <div className="absolute w-fit h-fit rounded-full bg-[#C59560]/28 -right-10 bottom-20 animate-float" style={{ animationDelay: '1s' }}>
          <img src={maskot2} alt="" className='w-20' />
        </div>
      </div>

      <h2 className="text-[#FACC15] font-extrabold text-2xl md:text-3xl mb-8 drop-shadow-md">Skor yang Anda Dapat</h2>

      <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10 pb-32">
        
        {/* Card 1: Total Benar */}
        <div className="bg-[#FACC15] rounded-[32px] p-2 md:p-3 w-[240px] md:w-[280px] flex flex-col items-center shadow-lg transform hover:scale-105 transition-transform duration-300">
          <span className="text-[#1E237E] font-bold text-xl md:text-2xl mt-3 mb-2">Total Benar</span>
          <div className="bg-[#2D3380] rounded-[24px] w-full py-5 flex items-center justify-center gap-3 shadow-inner">
            <svg className="w-8 h-8 text-[#FACC15]" fill="currentColor" viewBox="0 0 20 20">
              <path d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" />
            </svg>
            <span className="text-[#FACC15] font-extrabold text-4xl">{totalCorrect}</span>
          </div>
        </div>

        {/* Card 2: Skor */}
        <div className="bg-white rounded-[32px] p-2 md:p-3 w-[240px] md:w-[280px] flex flex-col items-center shadow-lg transform hover:scale-105 transition-transform duration-300">
          <span className="text-[#1E237E] font-bold text-xl md:text-2xl mt-3 mb-2">{message}</span>
          <div className="bg-[#2D3380] rounded-[24px] w-full py-5 flex items-center justify-center gap-3 shadow-inner">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
              <circle cx="12" cy="12" r="10"></circle>
              <circle cx="12" cy="12" r="6"></circle>
              <circle cx="12" cy="12" r="2"></circle>
            </svg>
            <span className="text-white font-extrabold text-4xl">{totalScore}</span>
          </div>
        </div>

      </div>
    </div>
  )
}

export default GameResult;
