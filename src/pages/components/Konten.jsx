import React from 'react'
import { useNavigate } from 'react-router-dom'

import maskot5 from '../../assets/maskot/maskot5.png'
import maskot6 from '../../assets/maskot/maskot6.png'
import maskot7 from '../../assets/maskot/maskot7.png'
import maskot8 from '../../assets/maskot/maskot8.png'

const Konten = () => {
  const navigate = useNavigate()
  return (
    <section id='konten' className=''>
      <div className="relative px-6 md:px-20 lg:px-40 mt-20 md:mt-30 lg:mt-40">
        <div className="flex items-center justify-center border-2 border-[#3338A0] rounded-full py-3 md:py-4 animate-on-scroll" data-animation="animate-fade-up">
          <h2 className="font-pjs font-bold text-3xl md:text-4xl lg:text-5xl">Konten</h2>
        </div>

        <div className="flex flex-col items-center justify-center mt-12 md:mt-18 lg:mt-24 animate-on-scroll" data-animation="animate-fade-up">
          <h2 className='font-pjs font-bold text-black text-2xl md:text-4xl lg:text-5xl text-center'>Belajar SIBI Jadi Lebih Seru</h2>
          <p className='font-pjs text-base md:text-xl lg:text-2xl mt-6 md:mt-10 lg:mt-18 text-center px-0 md:px-12 lg:px-24 leading-relaxed'>Platform belajar Sistem Isyarat Bahasa Indonesia dengan sistem level, kuis interaktif, dan materi bertahap yang dirancang untuk pemula hingga mahir.</p>
        </div>

        {/* Tags */}
        <div className="flex flex-col md:flex-row items-center justify-between mt-8 md:mt-12 px-0 md:px-10 gap-4 md:gap-0 animate-on-scroll" data-animation="animate-fade-up">
          <div className="hidden md:block h-2 rounded-full w-40 lg:w-[314px] bg-linear-to-r from-[#ffffff] to-[#3338A0]"></div>
          <div className="flex flex-wrap justify-center items-center gap-3 md:gap-5">
            <div className="py-2 md:py-2.5 px-6 md:px-12 border-1 border-black rounded-full font-pjs font-bold text-base md:text-xl lg:text-2xl hover:bg-[#3338A0] hover:text-white hover:border-[#3338A0] transition-all duration-300 cursor-pointer">Ai Pintar</div>
            <div className="py-2 md:py-2.5 px-6 md:px-12 border-1 border-black rounded-full font-pjs font-bold text-base md:text-xl lg:text-2xl hover:bg-[#3338A0] hover:text-white hover:border-[#3338A0] transition-all duration-300 cursor-pointer">LKS Sibi</div>
            <div className="py-2 md:py-2.5 px-6 md:px-12 border-1 border-black rounded-full font-pjs font-bold text-base md:text-xl lg:text-2xl hover:bg-[#3338A0] hover:text-white hover:border-[#3338A0] transition-all duration-300 cursor-pointer">Game Edukatif</div>
          </div>
          <div className="hidden md:block h-2 rounded-full w-40 lg:w-[314px] bg-linear-to-r from-[#3338A0] to-[#ffffff]"></div>
        </div>

        {/* Cards Grid */}
        <div className="relative mt-16 md:mt-24 lg:mt-30 flex flex-col lg:flex-row justify-between gap-6 lg:gap-4">
          {/* Card 1 - LKS Sibi */}
          <div className="relative flex flex-col justify-center w-full lg:w-fit h-fit pt-5 pb-10 md:pb-14 px-6 md:px-9 mt-0 lg:mt-18 border-1 border-[#3338A0] rounded-3xl shadow-[0_0_10px_0px] shadow-[#3338A0]/50 animate-on-scroll" data-animation="animate-scale-in">
            <img src={maskot5} alt="" className='absolute top-0 left-0 w-16 md:w-auto' />
            <h2 className='font-pjs font-semibold text-sm md:text-base text-end mr-4 md:mr-6 mb-2.5'>@ LKS Sibi</h2>
            <div className="bg-[#d9d9d9] h-48 md:h-[300px] lg:h-[386px] w-full lg:w-[381px] rounded-3xl"></div>
            <div className="mb-6 md:mb-10 mt-4 md:mt-5">
              <div className="flex flex-wrap items-center gap-2">
                <h2 className='font-pjs font-bold text-lg md:text-xl'>SIBIGO</h2>
                <p className='font-pjs font-medium text-sm md:text-base'>Latihan interaktif untuk menguji</p>
              </div>
              <p className='font-pjs font-medium text-sm md:text-base'>pemahaman SIBI secara bertahap dan terstruktur.</p>
            </div>
            <button className="bg-[#FCC61D] text-[#f7f7f7] rounded-3xl font-pjs font-bold text-lg md:text-xl py-2.5 shadow-[0_5px_0_#C59560] hover:bg-[#C59560] hover:shadow-none hover:translate-y-1 transition-all duration-300 cursor-pointer">Coba</button>
          </div>

          {/* Card 2 - Ai Pintar */}
          <div className="animate-on-scroll" data-animation="animate-scale-in">
            <div className="relative flex flex-col justify-center w-full lg:w-fit pt-5 pb-5 px-6 md:px-9 border-1 border-[#3338A0] rounded-3xl shadow-[0_0_10px_0px] shadow-[#3338A0]/50">
              <img src={maskot6} alt="" className='absolute top-3 right-6 md:right-10 w-14 md:w-auto' />
              <h2 className='font-pjs font-semibold text-sm md:text-base mr-4 md:mr-6 mb-2.5'>Pendamping belajar yang  menjawab pertanyaan seputar SIBI.</h2>
              <div className="bg-[#d9d9d9] h-32 md:h-[189px] w-full lg:w-[550px] rounded-t-3xl"></div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mt-4 gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 md:w-[75px] md:h-[75px] rounded-full bg-[#d9d9d9]"></div>
                  <div className="font-pjs">
                    <h3 className='font-bold text-lg md:text-xl'>SIBIGO</h3>
                    <p className='font-medium text-xs md:text-sm'>Ai Pintar</p>
                  </div>
                </div>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 md:w-7 md:h-7" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14.2656 0L17.6333 10.3647H28.5315L19.7147 16.7705L23.0824 27.1353L14.2656 20.7295L5.44885 27.1353L8.81656 16.7705L-0.00022316 10.3647H10.8979L14.2656 0Z" fill="#FCC61D" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>

            {/* Small Cards Grid */}
            <div className="mt-6 md:mt-12">
              <div className="grid grid-cols-2 gap-4 md:gap-6">
                <div className="relative flex flex-col justify-center py-4 md:py-6 px-4 md:px-7 border-1 border-[#3338A0] rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="bg-[#d9d9d9] h-32 md:h-[245px] w-full rounded-2xl"></div>
                </div>
                <div className="relative flex flex-col justify-center py-4 md:py-6 px-4 md:px-7 border-1 border-[#3338A0] rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="bg-[#d9d9d9] h-32 md:h-[245px] w-full rounded-2xl"></div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 md:gap-6 mt-4 md:mt-9">
                <div className="relative flex flex-col justify-center py-4 md:py-6 px-4 md:px-7 border-1 border-[#3338A0] rounded-3xl hover:shadow-lg transition-shadow duration-300">
                  <div className="bg-[#d9d9d9] h-32 md:h-[245px] w-full rounded-2xl"></div>
                </div>
                <div className="relative flex flex-col justify-center py-4 md:py-6 px-4 md:px-7 border-1 border-[#3338A0] rounded-3xl hover:shadow-lg transition-shadow duration-300">
                  <div className="bg-[#d9d9d9] h-32 md:h-[245px] w-full rounded-2xl"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3 - Game Edukatif */}
          <div className="relative flex flex-col justify-center w-full lg:w-fit h-fit pt-5 pb-10 md:pb-14 px-6 md:px-9 mt-0 lg:mt-18 border-1 border-[#3338A0] rounded-3xl shadow-[0_0_10px_0px] shadow-[#3338A0]/50 animate-on-scroll" data-animation="animate-scale-in">
            <img src={maskot7} alt="" className='absolute top-0 right-0 w-16 md:w-auto' />
            <h2 className='font-pjs font-semibold text-sm md:text-base mr-4 md:mr-6 mb-2.5'>@ Game Edukatif</h2>
            <div className="bg-[#d9d9d9] h-48 md:h-[300px] lg:h-[386px] w-full lg:w-[381px] rounded-3xl"></div>
            <div className="mb-6 md:mb-10 mt-4 md:mt-5">
              <div className="flex flex-wrap items-center gap-2">
                <h2 className='font-pjs font-bold text-lg md:text-xl'>SIBIGO</h2>
                <p className='font-pjs font-medium text-sm md:text-base'>Game dan tantangan seru untuk belajar</p>
              </div>
              <p className='font-pjs font-medium text-sm md:text-base'>SIBI dengan cara yang menyenangkan.</p>
            </div>
            <button className="bg-[#FCC61D] text-[#f7f7f7] rounded-3xl font-pjs font-bold text-lg md:text-xl py-2.5 shadow-[0_5px_0_#C59560] hover:bg-[#C59560] hover:shadow-none hover:translate-y-1 transition-all duration-300 cursor-pointer">Coba</button>
          </div>

          {/* Gradient Putih di Bawah (Hanya untuk Kartu) */}
          <div className="absolute bottom-0 left-0 w-full h-40 md:h-60 lg:h-100 bg-linear-to-t from-white to-transparent pointer-events-none z-10"></div>
        </div>
      </div>

      {/* Banner Biru di Bawah */}
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 lg:gap-50 px-6 md:px-20 lg:px-38 pt-5 pb-12 md:pb-20 mt-12 md:mt-20 overflow-hidden relative animate-on-scroll" data-animation="animate-fade-up"
        style={{ background: `linear-gradient(to bottom, #3338A0 79%, #23266D 89%, #12143A 100%)` }}
      >
        <div className="md:ml-10 lg:ml-20">
          <img src={maskot8} alt="" className="w-40 md:w-56 lg:w-auto" />
        </div>
        <div className="text-white font-pjs text-center md:text-left">
          <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl leading-tight mb-4 md:mb-6">Ayo!! Belajar bareng <br className="hidden md:block" />dengan Sibigo</h2>
          <p className="text-base md:text-xl lg:text-2xl mb-8 md:mb-12 lg:mb-16 opacity-90 leading-relaxed tracking-wider">Masuk ke dunia pembelajaran interaktif dengan <br className="hidden md:block" />latihan dan tantangan seru.</p>
          <button onClick={() => navigate('/konten')} className="bg-white text-[#3338A0] rounded-3xl font-pjs font-bold text-lg md:text-2xl lg:text-3xl px-10 md:px-16 lg:px-20 py-3 md:py-4 lg:py-5 shadow-[0_5px_0_#D0D0D0] hover:bg-[#D0D0D0] hover:shadow-none hover:translate-y-1 transition-all duration-300 cursor-pointer">Liat Semua Konten</button>
        </div>
      </div>
    </section>
  )
}

export default Konten