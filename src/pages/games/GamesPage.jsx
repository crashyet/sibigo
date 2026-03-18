import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import BackButton from '../../components/ui/BackButton'
import BackAlert from '../../components/ui/BackAlert'
import HeaderLine from '../../components/ui/HeaderLine'

/**
 * GamesPage - Halaman utama untuk semua game dan aktivitas interaktif.
 * Berisi navigasi ke Quiz, dan game lainnya yang akan datang.
 */
const GamesPage = () => {
  const navigate = useNavigate()
  const [showBackAlert, setShowBackAlert] = useState(false)

  return (
    <section className="min-h-screen bg-[#3338A0] font-pjs flex flex-col">
      <div className="absolute flex justify-between w-full bottom-0 overflow-hidden">
        <div className="bottom-0">
          <svg width="554" height="572" viewBox="0 0 554 755" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.2" d="M-148.324 3.24683C-148.324 3.24683 -119.034 227.417 -22.7705 318.481C92.7434 427.756 247.558 314.078 373.81 410.747C450.998 469.849 509.857 511.31 526.944 607.014C552.092 747.875 327.364 882.597 325.787 913.257" stroke="#676BB4" stroke-width="50" />
          </svg>
        </div>
        <div className="bottom-20">
          <svg width="758" height="572" viewBox="0 0 758 572" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.2" d="M861.535 24.3274C861.535 24.3274 641.517 76.3114 560.738 181.355C463.805 307.404 592.669 449.827 509.371 585.274C458.444 668.084 423.197 730.862 329.733 757.613C192.169 796.986 35.2437 587.159 4.58302 588.715" stroke="#676BB4" stroke-width="50" />
          </svg>
        </div>
      </div>
      {/* Header */}
      <div className="px-30 pt-10 pb-4 flex items-center relative z-20">
        <BackButton onClick={() => setShowBackAlert(true)} variant="white" />
      </div>

      <div className="flex-1 flex flex-col items-center px-4 md:px-6 pb-12">
        {/* Badge */}
        <HeaderLine title='Game' variant1='left' variant2='right'/>

        {/* Title */}
        <h1 className="text-2xl md:text-3xl font-extrabold text-white mb-1 text-center">Ayo Bermain!</h1>
        <p className="text-white/60 text-sm md:text-base mb-8 text-center">
          Uji kemampuanmu dan susun nama gambar berikut dengan benar!
        </p>
        
        {/* Back Alert Modal */}
        {showBackAlert && (
          <BackAlert 
            onCancel={() => setShowBackAlert(false)} 
            onConfirm={() => navigate('/play')}
          />
        )}
      </div>
    </section>
  )
}

export default GamesPage
