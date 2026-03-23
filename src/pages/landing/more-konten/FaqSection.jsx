import React, { useState } from 'react'

const FAQ_DATA = [
  {
    question: 'Apakah SIBIGO bisa digunakan oleh pemula?',
    answer: 'Ya. SIBIGO dirancang agar mudah digunakan oleh siapa saja, termasuk pemula yang belum pernah mempelajari bahasa isyarat sebelumnya.'
  },
  {
    question: 'Apa tujuan dibuatnya SIBIGO?',
    answer: 'SIBIGO dibuat untuk membantu masyarakat mengenal dan mempelajari SIBI dengan cara yang lebih mudah, interaktif, dan menyenangkan, sehingga dapat meningkatkan kesadaran serta komunikasi yang lebih inklusif.'
  },
  {
    question: 'Apa saja yang dapat dipelajari di SIBIGO?',
    answer: 'Di SIBIGO, pengguna dapat mempelajari berbagai materi dasar seperti alfabet, angka, serta kosakata dan isyarat yang sering digunakan dalam komunikasi sehari-hari.'
  },
  {
    question: 'Apakah belajar bahasa isyarat penting bagi masyarakat umum?',
    answer: 'Penting karena dengan mempelajari bahasa isyarat, masyarakat dapat lebih memahami dan berkomunikasi dengan komunitas Tuli, sehingga membantu menciptakan lingkungan yang lebih inklusif dan saling menghargai.'
  }
]

const FaqSection = () => {
  const [openFaq, setOpenFaq] = useState(null)

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  return (
    <section id='faq' className="w-full max-w-[1024px] mx-auto py-16 md:py-24 font-pjs">
      <div className="flex items-center mb-8 md:mb-12">
        {/* FAQ Header Badge */}
        <div className="bg-[#4E54C8] text-white font-bold text-xl md:text-2xl py-2 md:py-3 px-8 md:px-12 rounded-xl shadow-md z-10 tracking-widest">
          FAQ
        </div>
        {/* Fading Line */}
        <div className="h-1 flex-1 max-w-[150px] md:max-w-[250px] ml-4 md:ml-6 bg-linear-to-r from-[#4E54C8] to-transparent rounded-r-full"></div>
      </div>
      
      <div className="flex flex-col gap-4 lg:gap-5">
        {FAQ_DATA.map((item, index) => {
          const isOpen = openFaq === index
          return (
            <div 
              key={index} 
              className="bg-[#F1F3F8] rounded-xl overflow-hidden transition-all duration-300"
            >
              <button 
                onClick={() => toggleFaq(index)}
                className="w-full flex items-center justify-between p-5 md:p-6 lg:p-7 text-left cursor-pointer hover:bg-[#EAEFF6] transition-colors focus:outline-none"
              >
                <span className="font-bold text-[#1E2B63] text-sm md:text-base lg:text-lg pr-4 lg:pr-8 tracking-wide">
                  {item.question}
                </span>
                <div className="shrink-0 text-[#1E2B63]">
                  {isOpen ? (
                    <svg className="w-6 h-6 lg:w-7 lg:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="10" strokeWidth="2"></circle>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 14l-4-4-4 4"></path>
                    </svg>
                  ) : (
                    <svg className="w-6 h-6 lg:w-7 lg:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="10" strokeWidth="2"></circle>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10l4 4 4-4"></path>
                    </svg>
                  )}
                </div>
              </button>
              
              <div 
                className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100 pb-5 md:pb-6 lg:pb-7' : 'max-h-0 opacity-0'}`}
              >
                <div className="px-5 md:px-6 lg:px-7 text-xs md:text-sm lg:text-base text-[#1E2B63]/90 leading-relaxed font-medium">
                  {item.answer}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default FaqSection
