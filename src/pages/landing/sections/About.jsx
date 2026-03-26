import React from 'react'

import aboutImg from '@/assets/about.png'
import gif1 from '@/assets/gif/gif_interaktif.gif'
import gif2 from '@/assets/gif/gif_belajar.gif'
import gif3 from '@/assets/gif/gif_isyarat.gif'
import gif4 from '@/assets/gif/gif_idea.gif'

const FEATURES = [
  {
    title: 'Gratis. Seru. Interaktif. Inklusif.',
    text: 'SIBIGO menghadirkan cara belajar Sistem Isyarat Bahasa Indonesia yang lebih mudah dan menyenangkan bagi semua.',
    gif: gif1,
    animation: 'animate-fade-left',
    reverse: false,
  },
  {
    title: 'Isyarat Mudah Untuk Semua',
    text: 'SIBIGO dirancang untuk pemula yang ingin mengenal bahasa isyarat dengan cara yang sederhana, jelas, dan tidak membingungkan.',
    gif: gif2,
    animation: 'animate-fade-right',
    reverse: true,
  },
  {
    title: 'Pembelajaran Interaktif',
    text: 'SIBIGO menghadirkan pembelajaran melalui game, LKS, dan kuis, serta didukung AI untuk menjawab pertanyaanmu.',
    gif: gif3,
    animation: 'animate-fade-left',
    reverse: false,
  },
  {
    title: 'Go Learn. Go SIBIGO.',
    text: 'Belajar sedikit demi sedikit dan bangun kemampuan komunikasi yang lebih inklusif dengan pengalaman yang lebih menyenangkan.',
    gif: gif4,
    animation: 'animate-fade-right',
    reverse: true,
  },
]

const About = () => {
  return (
    <section id='about' className='relative px-6 md:px-20 lg:px-40 mt-20 md:mt-32 lg:mt-44'>
      <div className="flex items-center justify-center border-2 border-[#3338A0] rounded-full py-3 md:py-4 animate-on-scroll" data-animation="animate-fade-up">
        <h2 className="font-pjs font-bold text-3xl md:text-4xl lg:text-5xl">About Us</h2>
      </div>
      <div className="flex flex-col lg:flex-row w-full mt-16 md:mt-24 lg:mt-36 gap-10 lg:gap-16">
        <div className="flex-1 animate-on-scroll" data-animation="animate-fade-left">
          <h2 className="font-pjs font-bold text-3xl md:text-4xl lg:text-5xl">Apa Itu Sibigo?</h2>
          <p className="font-pjs text-base md:text-xl lg:text-xl xl:text-2xl mt-6 md:mt-10 lg:mt-14 leading-relaxed">SIBIGO hadir untuk memperkenalkan SIBI (Sistem Isyarat Bahasa Indonesia) ke masyarakat luas. Kami ingin mempermudah komunikasi antara masyarakat dan komunitas Tuli secara inklusif.</p>
          <p className="font-pjs text-base md:text-xl lg:text-xl xl:text-2xl mt-4 md:mt-6 lg:mt-10 leading-relaxed">Selain itu, SIBIGO mendukung edukasi dan pengembangan teknologi untuk mempermudah pembelajaran bahasa isyarat. Dengan ini, kami berharap bisa memperkuat inklusivitas di Indonesia dan mendorong terciptanya masyarakat yang lebih terbuka, ramah, dan saling memahami</p>
        </div>
        {/* Illustration — replaced SVGs with about.png */}
        <div className="flex flex-1 justify-center animate-on-scroll" data-animation="animate-fade-right">
          <img 
            src={aboutImg} 
            alt="Fitur SIBIGO" 
            className="w-full max-w-[300px] md:max-w-[450px] lg:max-w-[550px] xl:max-w-[666px] h-auto object-contain" 
          />
        </div>
      </div>

      <div className="border-2 md:border-3 border-[#d9d9d9] left-0 mt-10 md:mt-16 lg:mt-20 w-full"></div>

      {/* Feature Items */}
      <div className="relative flex flex-col gap-12 md:gap-16 lg:gap-24 mt-12 md:mt-20 lg:mt-30">
        {FEATURES.map((feature, index) => (
          <div
            key={index}
            className={`relative flex flex-col ${feature.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-6 md:gap-10 lg:gap-16 w-full ${index < FEATURES.length - 1 ? 'mb-0 lg:mb-8' : ''} animate-on-scroll`}
            data-animation={feature.animation}
          >
            {/* Text Content */}
            <div className="flex-1 w-full">
              <h2 className='text-[#3338A0] font-pjs font-bold text-2xl md:text-4xl lg:text-5xl'>{feature.title}</h2>
              <p className='text-black font-pjs text-base md:text-xl lg:text-2xl mt-4 md:mt-6 leading-relaxed'>{feature.text}</p>
            </div>
            {/* Gif — hidden on small mobile, shown on sm+ */}
            <div className="hidden sm:flex shrink-0 justify-center w-full sm:w-auto">
              <img src={feature.gif} alt="" className="w-40 md:w-52 lg:w-64 xl:w-72 h-auto object-contain" />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default About
