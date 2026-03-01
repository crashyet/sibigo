import React from 'react'
import pf1 from '../assets/profile/pf1.png'
import pf2 from '../assets/profile/pf2.png'
import pf3 from '../assets/profile/pf3.png'
import pf4 from '../assets/profile/pf4.png'
import pf5 from '../assets/profile/pf5.png'
import maskot1 from '../assets/maskot/maskot1.png'
import maskot2 from '../assets/maskot/maskot2.png'
import maskot3 from '../assets/maskot/maskot3.png'
import maskot4 from '../assets/maskot/maskot4.png'

const Home = () => {
  return (
    <section id="home" className="relative px-40 min-h-screen">
      <div className="relative flex h-screen items-center mt-20">
        <div className="flex flex-col flex-1 gap-16 -mt-48">
          <h2 className="font-pjs font-bold text-6xl text-black leading-tight">Cara Seru dan Efektif<br />Belajar Bahasa<br />Isyarat</h2>
          <div className="flex gap-20">
            <button className="bg-[#FCC61D] text-[#f7f7f7] w-88 rounded-3xl font-pjs font-bold text-xl py-2.5 shadow-[0_5px_0_#C59560] hover:bg-[#C59560] hover:shadow-none hover:translate-y-1 transition-all duration-300 cursor-pointer">Mulai</button>
            <div className="flex">
              <img src={pf1} className="h-20 border-5 border-white rounded-full" />
              <img src={pf2} className="h-20 -ml-10 border-5 border-white rounded-full" />
              <img src={pf3} className="h-20 -ml-10 border-5 border-white rounded-full" />
              <img src={pf4} className="h-20 -ml-10 border-5 border-white rounded-full" />
              <img src={pf5} className="h-20 -ml-10 border-5 border-white rounded-full" />
              <div className="flex items-center justify-center text-white w-20 h-20 rounded-full bg-gradient-to-b from-[#DFBA45] to-[#FCC61D] -ml-10 border-5 border-white">
                <h3 className="font-pjs font-bold text-2xl text-white">90+</h3>
              </div>
            </div>
          </div>
        </div>

        <div className="relative flex-1">
          <div className="relative">
            <div className="absolute w-fit h-fit rounded-full bg-[#C59560]/28 -mt-25 ml-40">
              <img src={maskot1} alt="" />
            </div>
            <div className="absolute w-fit h-fit rounded-full bg-[#C59560]/28 ml-150">
              <img src={maskot2} alt="" />
            </div>
          </div>
          <div className="">
            <svg width="800" height="600" viewBox="0 0 897 659" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="276.899" y="69.9903" width="451" height="68.9301" rx="20" transform="rotate(13.1226 276.899 69.9903)" fill="#3338A0" />
              <rect x="205.899" y="408.784" width="115.896" height="40.3028" rx="20" transform="rotate(13.1226 205.899 408.784)" fill="#C59560" />
              <rect x="562.899" y="438.784" width="115.896" height="33.9246" rx="16.9623" transform="rotate(13.1226 562.899 438.784)" fill="#C59560" />
              <path d="M88.1968 142.664C106.488 87.6062 181.228 79.9723 210.272 130.195C219.843 146.746 236.005 158.443 254.718 162.361L770.152 270.298C829.886 282.807 865.451 344.5 846.343 402.461L822.934 473.467C801.671 537.962 711.969 542.003 684.995 479.68C675.415 457.548 655.634 441.485 632.006 436.653L140.039 336.045C82.2153 324.22 47.7103 264.534 66.3177 208.523L88.1968 142.664Z" fill="#FCC61D" />
            </svg>

          </div>
          <div className="absolute z-10 w-fit h-fit -mt-150 ml-40">
            <img src={maskot3} alt="" />
          </div>
        </div>
      </div>

      <div className="mt-14">
        <div className="absolute -mt-36 ml-10 z-10">
          <img src={maskot4} alt="" className='' />
          <div className="absolute -mt-32 ml-16 -z-1">
            <svg width="263" height="50" viewBox="0 0 263 50" fill="none" xmlns="http://www.w3.org/2000/svg">
              <ellipse cx="131.5" cy="25" rx="131.5" ry="25" fill="#F7F7F7" fill-opacity="0.62" />
            </svg>
          </div>
        </div>

        <div className="flex justify-end -mt-50 text-white bg-gradient-to-r from-[#3338A0] to-[#4A50CE] w-full gap-10 py-16 pr-24 rounded-[50px]">
          <div className="px-9 py-14 bg-[#777BDB] max-w-[324px] rounded-3xl">
            <h3 className="font-pjs font-bold text-4xl text-center mb-4">2,5 JT+</h3>
            <p className="font-pjs font-medium text-xl text-center">Tuli & Gangguan Pendengaran di Indonesia</p>
          </div>
          <div className="px-9 py-14 bg-[#777BDB] max-w-[324px] rounded-3xl">
            <h3 className="font-pjs font-bold text-4xl text-center mb-4">80%</h3>
            <p className="font-pjs font-medium text-xl text-center">Tidak mendapat pendidikan bahasa isyarat formal</p>
          </div>
          <div className="px-9 py-14 bg-[#777BDB] max-w-[324px] rounded-3xl">
            <h3 className="font-pjs font-bold text-4xl text-center mb-4">&lt; 5%</h3>
            <p className="font-pjs font-medium text-xl text-center">Masyarakat umum yang memahami SIBI</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home