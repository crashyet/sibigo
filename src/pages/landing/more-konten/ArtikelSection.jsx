import React from 'react'
import { Link } from 'react-router-dom'
import articlesData from '@/data/articlesData'

const ArtikelSection = () => {
  return (
    <section id='artikel' className="w-full max-w-[1280px] mx-auto py-16 md:py-24 font-pjs">
      {/* Section Header */}
      <div className="flex items-center justify-end mb-12 md:mb-16 w-full">
        {/* Fading Line */}
        <div className="h-1 flex-1 max-w-[150px] md:max-w-[250px] mr-4 md:mr-6 bg-linear-to-l from-[#4E54C8] to-transparent rounded-l-full"></div>
        {/* Title Badge */}
        <div className="bg-[#4E54C8] text-white font-bold text-xl md:text-2xl py-2 md:py-3 px-6 md:px-10 rounded-xl shadow-md tracking-wider">
          Cerita & Inspirasi
        </div>
      </div>

      <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold text-[#1E2B63] mb-8 md:mb-12 font-pjs">
        Terbaru
      </h2>

      {/* Featured Article Card */}
      {articlesData.length > 0 && (() => {
        const featured = articlesData[0]
        return (
          <div className="flex flex-col lg:flex-row bg-white border border-gray-200 rounded-2xl md:rounded-3xl overflow-hidden mb-6 md:mb-8 shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)] transition-shadow">
            {/* Left Image */}
            <div className="w-full lg:w-[45%] h-[250px] md:h-[350px] lg:h-auto">
              <img src={featured.image} alt={featured.title} className="w-full h-full object-cover" />
            </div>
            {/* Right Content */}
            <div className="w-full lg:w-[55%] p-6 md:p-10 lg:p-12 flex flex-col justify-center bg-white">
              <div className="mb-4 lg:mb-6">
                <span className="inline-block bg-[#FCC61D] text-white font-bold text-sm md:text-base py-1 px-5 md:py-1.5 md:px-6 rounded-full drop-shadow-md tracking-wide">
                  {featured.category}
                </span>
              </div>
              <h3 className="text-2xl md:text-3xl lg:text-[32px] font-bold text-[#1e2023] mb-4 md:mb-5 font-pjs leading-snug">
                {featured.title}
              </h3>
              <p className="text-[#5f6368] text-sm md:text-base lg:text-[17px] mb-6 md:mb-8 font-pjs leading-relaxed lg:leading-[1.7] line-clamp-3">
                {featured.description}
              </p>
              <div className="flex flex-col gap-1 mt-auto">
                <Link to={`/artikel/${featured.id}`} className="font-pjs text-[#4E54C8] hover:text-[#3338A0] font-medium text-sm md:text-[15px] transition-colors w-fit">
                  Lihat Selengkapnya
                </Link>
                <span className="text-[#5f6368] text-xs md:text-[14px] font-pjs mt-3 md:mt-4">{featured.date}</span>
              </div>
            </div>
          </div>
        )
      })()}

      {/* Grid of Recent Articles */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7 lg:gap-8">
        {articlesData.slice(1).map(article => (
          <div key={article.id} className="bg-white border border-gray-200 rounded-2xl md:rounded-3xl overflow-hidden flex flex-col shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all">
            <div className="relative h-[200px] md:h-[220px] w-full">
              <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
              <div className="absolute top-4 right-4">
                <span className="inline-block bg-[#FCC61D] text-white font-bold text-[11px] md:text-xs py-1 px-4 md:px-5 rounded-full shadow-md tracking-wide">
                  {article.category}
                </span>
              </div>
            </div>
            <div className="p-6 lg:p-7 flex flex-col flex-1 bg-white">
              <h4 className="text-lg md:text-xl font-bold text-[#1e2023] mb-3 font-pjs leading-snug line-clamp-2">
                {article.title}
              </h4>
              <p className="text-[#5f6368] text-xs md:text-[13px] lg:text-sm mb-5 flex-1 font-pjs leading-relaxed line-clamp-3">
                {article.description}
              </p>
              <div className="flex flex-col gap-1 mt-auto pt-2">
                <Link to={`/artikel/${article.id}`} className="text-[#4E54C8] hover:text-[#3338A0] font-medium font-pjs text-[13px] md:text-[14px] transition-colors w-fit">
                  Lihat Selengkapnya
                </Link>
                <span className="text-[#5f6368] font-pjs text-[11px] md:text-xs mt-3 md:mt-4">
                  {article.date}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ArtikelSection
