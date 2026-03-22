import React from 'react';

const GameFeedback = ({ status, correctAnswer }) => {
  const isCorrect = status === 'correct';

  return (
    <div className={`w-full max-w-4xl mx-auto rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 shadow-xl ${isCorrect ? 'bg-[#1C2053]' : 'bg-[#1C2053] justify-between'}`}>
      
      {/* Left Section: Icon and Text */}
      <div className="flex items-center gap-6">
        
        {/* Icon Circle */}
        <div className="w-16 h-16 md:w-20 md:h-20 bg-[#F8FAF9] rounded-full flex items-center justify-center shrink-0 shadow-inner">
          {isCorrect ? (
            <svg className="w-8 h-8 md:w-10 md:h-10 text-[#22c55e]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={5} d="M5 13l4 4L19 7" />
            </svg>
          ) : (
            <svg className="w-8 h-8 md:w-10 md:h-10 text-[#ef4444]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          )}
        </div>

        {/* Text Area */}
        <div className="flex flex-col">
          <h3 className={`text-xl md:text-[28px] font-bold tracking-wide ${isCorrect ? 'text-[#22c55e]' : 'text-[#ef4444]'}`}>
            {isCorrect ? 'Jawaban Anda Benar' : 'Jawaban Anda Salah'}
          </h3>
          <p className={`text-sm md:text-base mt-1 ${isCorrect ? 'text-[#22c55e]/90' : 'text-[#ef4444]/90'}`}>
            {isCorrect ? 'Lanjutkan ke soal berikutnya' : 'Ayo lebih teliti lagi'}
          </p>
        </div>
      </div>

      {/* Right Section: Pembenaran (Only for incorrect) */}
      {!isCorrect && correctAnswer && correctAnswer.length > 0 && (
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 shrink-0 mt-4 md:mt-0">
          <span className="text-white/90 text-sm md:text-base font-medium">Pembenaran :</span>
          
          <div className="flex items-center gap-2">
            {correctAnswer.map((item, idx) => (
              <div key={idx} className="relative w-[46px] h-[58px] md:w-[56px] md:h-[70px] bg-white rounded-lg overflow-hidden shadow-md border-[1.5px] border-white flex flex-col justify-start">
                
                {/* Image Area */}
                <div className="w-full h-full bg-white flex items-center justify-center p-1 pb-4">
                  <img src={item.image} alt={item.label} className="w-full h-full object-contain" />
                </div>
                
                {/* Letter Strip */}
                <div className="absolute bottom-0 left-0 w-full h-[18px] md:h-[22px] bg-[#FACC15] flex items-center justify-center">
                  <span className="text-[#1C2053] text-[11px] md:text-xs font-bold leading-none">{item.label}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      )}

    </div>
  );
};

export default GameFeedback;
