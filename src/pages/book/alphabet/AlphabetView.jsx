import React from 'react'
import alphabetIcon from '../../../assets/konten1.png' // Using this as placeholder for the alphabet blocks icon

const AlphabetView = () => {
  const lessons = [
    {
      range: 'Alfabet A-I',
      description: 'Pelajari 9 huruf pertama alfabet SIBI',
      count: '9 isyarat',
      bgColor: 'bg-[#3338A0]',
      shadowColor: 'shadow-[0_10px_20px_rgba(51,56,160,0.3)]',
    },
    {
      range: 'Alfabet J-R',
      description: 'Pelajari 9 huruf pertama alfabet SIBI',
      count: '9 isyarat',
      bgColor: 'bg-[#C2915A]',
      shadowColor: 'shadow-[0_10px_20px_rgba(194,145,90,0.3)]',
    },
    {
      range: 'Alfabet S-Z',
      description: 'Pelajari 9 huruf pertama alfabet SIBI',
      count: '8 isyarat',
      bgColor: 'bg-[#FBC02D]',
      shadowColor: 'shadow-[0_10px_20px_rgba(251,192,45,0.3)]',
    },
  ]

  return (
    <div className="relative overflow-hidden min-h-full">
      {/* Decorative background blobs */}
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#FFF9C4] rounded-full opacity-50 blur-3xl -z-10"></div>
      <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-[#E8EAF6] rounded-full opacity-60 blur-3xl -z-10"></div>

      <div className="flex flex-col items-center">
        {/* LKS Header Badge */}
        <div className="flex items-center gap-6 mb-8 w-full max-w-lg">
          <div className="flex-1 h-[2px] bg-linear-to-r from-transparent to-[#3338A0] opacity-30"></div>
          <div className="bg-[#3338A0] text-white font-bold px-6 py-1.5 rounded-full text-sm tracking-widest shadow-lg">
            LKS
          </div>
          <div className="flex-1 h-[2px] bg-linear-to-l from-transparent to-[#3338A0] opacity-30"></div>
        </div>

        <h2 className="text-4xl font-extrabold text-[#2D2D2D] mb-2 tracking-tight">Materi</h2>
        <p className="text-gray-500 text-lg mb-14 text-center">
          Pelajari huruf SIBI dari tingkat dasar hingga mahir.
        </p>

        {/* Section Title with Icon */}
        <div className="w-full max-w-2xl flex items-center gap-5 mb-10 px-4">
          <div className="w-16 h-16 rounded-2xl overflow-hidden shadow-md shrink-0">
            <img src={alphabetIcon} alt="Huruf Alfabet" className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col">
            <h3 className="text-2xl font-bold text-[#2D2D2D]">Huruf Alfabet</h3>
            <span className="text-gray-500 font-medium">3 pelajaran</span>
          </div>
        </div>

        {/* Lesson Cards */}
        <div className="w-full max-w-2xl flex flex-col gap-6 px-4 pb-12">
          {lessons.map((lesson, index) => (
            <button
              key={index}
              className={`${lesson.bgColor} ${lesson.shadowColor} w-full rounded-[28px] p-6 flex items-center justify-between text-white hover:scale-[1.02] transition-all duration-300 cursor-pointer group text-left`}
            >
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center p-3">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 3H8C9.06087 3 10.0783 3.42143 10.8284 4.17157C11.5786 4.92172 12 5.93913 12 7V21C12 20.2044 11.6839 19.4413 11.1213 18.8787C10.5587 18.3161 9.79565 18 9 18H2V3Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M22 3H16C14.9391 3 13.9217 3.42143 13.1716 4.17157C12.4214 4.92172 12 5.93913 12 7V21C12 20.2044 12.3161 19.4413 12.8787 18.8787C13.4413 18.3161 14.2044 18 15 18H22V3Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <h4 className="text-xl font-bold">{lesson.range}</h4>
                  <p className="text-white/80 text-sm font-medium">{lesson.description}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 font-bold text-white/90">
                <span>{lesson.count}</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AlphabetView
