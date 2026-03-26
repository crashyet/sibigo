import React from 'react'
import { useNavigate } from 'react-router-dom'

import Button from '@/components/ui/Button'
import maskot from '@/assets/maskot/maskotNotFound.png'

const NotFound = () => {
  const navigate = useNavigate()

  return (
    <section className='bg-white min-h-screen relative font-pjs overflow-hidden flex flex-col items-center justify-center px-6 py024'>
      {/* Linear Bottom */}
      <div className="absolute bottom-0 w-full h-1/4 bg-linear-to-b from-[#D9D9D9]/0 to-[#C5C7FF]"></div>

      {/* Background Decorative SVGs */}
      <div className="absolute top-0 right-0">
        <svg className="w-40 md:w-64 lg:w-[318px]" height="283" viewBox="0 0 318 283" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path opacity="0.2" d="M527 12C527 161.669 409.027 283 263.5 283C117.973 283 0 161.669 0 12C0 -137.669 117.973 -259 263.5 -259C409.027 -259 527 -137.669 527 12ZM48.5969 12C48.5969 134.066 144.812 233.02 263.5 233.02C382.188 233.02 478.403 134.066 478.403 12C478.403 -110.066 382.188 -209.02 263.5 -209.02C144.812 -209.02 48.5969 -110.066 48.5969 12Z" fill="#3338A0" />
        </svg>
      </div>
      <div className="absolute bottom-0 left-0">
        <svg className="w-40 md:w-52 lg:w-[263px]" height="405" viewBox="0 0 263 405" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path opacity="0.2" d="M263 271C263 420.669 145.027 542 -0.5 542C-146.027 542 -264 420.669 -264 271C-264 121.331 -146.027 0 -0.5 0C145.027 0 263 121.331 263 271ZM-215.403 271C-215.403 393.066 -119.188 492.02 -0.5 492.02C118.188 492.02 214.403 393.066 214.403 271C214.403 148.934 118.188 49.9801 -0.5 49.9801C-119.188 49.9801 -215.403 148.934 -215.403 271Z" fill="#C59560" />
        </svg>
      </div>

      {/* Maskot */}
      <div className="flex justify-center w-full relative z-10 -mt-10 lg:-mt-16 xl:-mt-20">
        <img src={maskot} alt="" className="w-56 sm:w-64 md:w-72 lg:w-[300px] 2xl:w-[380px] max-w-md h-auto" />
      </div>

      {/* Header - ERROR text */}
      <div className="relative z-10 -mt-6 md:-mt-10 lg:-mt-14 xl:-mt-18">
        <h1 className='text-[#F7F7F7] text-4xl sm:text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl font-extrabold text-stroke-yellow text-center'>ERROR 404</h1>
      </div>

      {/* Text */}
      <div className="flex flex-col items-center justify-center gap-1 mt-4 md:mt-6 mb-8 md:mb-10 relative z-10">
        <h1 className='text-black text-lg md:text-xl lg:text-2xl font-semibold text-center'>404 — Halamannya Nyasar!</h1>
        <p className='text-black text-sm md:text-lg lg:text-xl text-center px-4'>Sepertinya halaman yang kamu cari lagi jalan-jalan. <br className="hidden md:block" />Yuk balik ke beranda dulu!</p>
      </div>

      {/* Button */}
      <div className="relative z-20">
        <Button
          onClick={() => navigate('/')}
          className="px-8 md:px-12 py-3 rounded-2xl text-lg md:text-xl min-w-[160px] md:flex-none border border-[#FCC61D] text-white shadow-[0_5px_0_#D49D42] active:translate-y-1 active:shadow-none"
        >
          Kembali ke Beranda
        </Button>
      </div>
    </section>
  )
}

export default NotFound
