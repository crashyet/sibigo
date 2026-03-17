import React from 'react'

import Button from '../../../components/ui/Button'
import StatCard from '../../../components/ui/StatCard'

import pf1 from '../../../assets/profile/pf1.png'
import pf2 from '../../../assets/profile/pf2.png'
import pf3 from '../../../assets/profile/pf3.png'
import pf4 from '../../../assets/profile/pf4.png'
import pf5 from '../../../assets/profile/pf5.png'
import maskot1 from '../../../assets/maskot/maskot1.png'
import maskot2 from '../../../assets/maskot/maskot2.png'
import maskot3 from '../../../assets/maskot/maskot3.png'
import maskot4 from '../../../assets/maskot/maskot4.png'

const PROFILE_IMAGES = [pf1, pf2, pf3, pf4, pf5]

const STATS = [
  { value: '2,5 JT+', label: 'Tuli & Gangguan Pendengaran di Indonesia' },
  { value: '80%', label: 'Tidak mendapat pendidikan bahasa isyarat formal' },
  { value: '< 5%', label: 'Masyarakat umum yang memahami SIBI' },
]

const Home = () => {
  return (
    <section id='home' className="relative px-6 md:px-20 lg:px-40 min-h-screen overflow-hidden">
      {/* Hero Area */}
      <div className="relative flex flex-col lg:flex-row lg:h-screen items-center pt-24 md:pt-28 lg:pt-0 lg:mt-20">
        {/* Left: Text & CTA */}
        <div className="flex flex-col flex-1 gap-8 md:gap-12 lg:gap-16 lg:-mt-48 z-10 animate-on-scroll" data-animation="animate-fade-left">
          <h2 className="font-pjs font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-black leading-tight">
            Cara Seru dan Efektif<br />Belajar Bahasa<br />Isyarat
          </h2>
          <div className="flex flex-col sm:flex-row gap-6 md:gap-10 lg:gap-20 items-start sm:items-center">
            <Button className="w-full sm:w-56 md:w-72 lg:w-88 text-lg md:text-xl py-2.5">
              Mulai
            </Button>
            <div className="flex">
              {PROFILE_IMAGES.map((pf, i) => (
                <img
                  key={i}
                  src={pf}
                  className={`h-10 sm:h-12 md:h-16 lg:h-20 border-3 md:border-4 lg:border-5 border-white rounded-full ${i > 0 ? '-ml-4 sm:-ml-6 md:-ml-8 lg:-ml-10' : ''}`}
                  alt=""
                />
              ))}
              <div className="flex items-center justify-center text-white w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full bg-linear-to-b from-[#DFBA45] to-[#FCC61D] -ml-4 sm:-ml-6 md:-ml-8 lg:-ml-10 border-3 md:border-4 lg:border-5 border-white">
                <h3 className="font-pjs font-bold text-sm sm:text-base md:text-xl lg:text-2xl text-white">90+</h3>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Mascot & SVG — Desktop only */}
        <div className="relative flex-1 hidden lg:block animate-on-scroll" data-animation="animate-fade-right">
          <div className="relative">
            <div className="absolute w-fit h-fit rounded-full bg-[#C59560]/28 -mt-25 ml-40 animate-float">
              <img src={maskot1} alt="" />
            </div>
            <div className="absolute w-fit h-fit rounded-full bg-[#C59560]/28 ml-150 animate-float" style={{ animationDelay: '1s' }}>
              <img src={maskot2} alt="" />
            </div>
          </div>
          <div>
            <svg className="w-full max-w-[800px] h-auto" viewBox="0 0 897 659" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="276.899" y="69.9903" width="451" height="68.9301" rx="20" transform="rotate(13.1226 276.899 69.9903)" fill="#3338A0" />
              <rect x="205.899" y="408.784" width="115.896" height="40.3028" rx="20" transform="rotate(13.1226 205.899 408.784)" fill="#C59560" />
              <rect x="562.899" y="438.784" width="115.896" height="33.9246" rx="16.9623" transform="rotate(13.1226 562.899 438.784)" fill="#C59560" />
              <path d="M88.1968 142.664C106.488 87.6062 181.228 79.9723 210.272 130.195C219.843 146.746 236.005 158.443 254.718 162.361L770.152 270.298C829.886 282.807 865.451 344.5 846.343 402.461L822.934 473.467C801.671 537.962 711.969 542.003 684.995 479.68C675.415 457.548 655.634 441.485 632.006 436.653L140.039 336.045C82.2153 324.22 47.7103 264.534 66.3177 208.523L88.1968 142.664Z" fill="#FCC61D" />
            </svg>
          </div>
          <div className="absolute z-10 w-fit h-fit -mt-150 ml-40">
            <img src={maskot3} alt="" className="animate-float" style={{ animationDelay: '0.5s' }} />
          </div>
        </div>

        {/* Mobile Mascot — simplified, centered */}
        <div className="lg:hidden flex justify-center mt-8 mb-4 animate-on-scroll" data-animation="animate-fade-up">
          <div className="relative">
            <div className="absolute inset-0 flex justify-center items-center">
              <div className="w-56 sm:w-72 h-44 sm:h-56 rounded-[40px] bg-[#FCC61D] -mt-4"></div>
            </div>
            <img src={maskot3} alt="" className="relative z-10 w-52 sm:w-64 mx-auto" />
          </div>
        </div>
      </div>

      {/* Stats Banner */}
      <div className="relative mt-6 md:mt-14">
        {/* Mascot4 — hidden on mobile */}
        <div className="hidden md:block absolute -mt-36 -ml-8 lg:ml-0 z-20">
          <img src={maskot4} alt="" className='w-48 lg:w-auto' />
          <div className="absolute -mt-32 ml-16 -z-1">
            <svg className="w-[263px]" viewBox="0 0 263 50" fill="none" xmlns="http://www.w3.org/2000/svg">
              <ellipse cx="131.5" cy="25" rx="131.5" ry="25" fill="#F7F7F7" fillOpacity="0.62" />
            </svg>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-center md:justify-end md:-mt-50 text-white bg-linear-to-r from-[#3338A0] to-[#4A50CE] w-full gap-4 md:gap-6 lg:gap-10 py-8 md:py-12 lg:py-16 px-6 md:pl-52 lg:pl-64 md:pr-12 lg:pr-24 rounded-[30px] md:rounded-[50px] animate-on-scroll" data-animation="animate-fade-up">
          {STATS.map((stat, index) => (
            <StatCard key={index} value={stat.value} label={stat.label} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Home
