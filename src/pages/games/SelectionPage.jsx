import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import PlayButton from '@/components/ui/PlayButton'
import HeaderLine from '@/components/ui/HeaderLine'
import BackButton from '@/components/ui/BackButton'
import LoadingScreen from '@/components/ui/LoadingScreen'

import quiz from '@/assets/quiz.png'
import games from '@/assets/games.png'

/**
 * SelectionPage - Halaman pemilihan kategori game / kuis.
 * Pengguna bisa memilih tipe game sebelum bermain.
 */
const SelectionPage = () => {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)
  const [loadingMessage, setLoadingMessage] = useState('Memuat...')

  const handleGameSelect = (path, title) => {
    // Generate pesan yang sesuai dari judul menu opsinya
    const targetTitle = title.toLowerCase().includes('menguji') ? 'Kuis' : 'Permainan'
    setLoadingMessage(`Mempersiapkan ${targetTitle}...`)
    setIsLoading(true)

    // Jeda 3 detik untuk menampilkan efek loading
    setTimeout(() => {
      navigate(path)
    }, 3000)
  }

  const categories = [
    {
      image: quiz,
      title: 'Siap menguji kemampuanmu?',
      description: 'Jawab setiap pertanyaan dan pilih jawaban yang benar!',
      path: '/play/quiz',
    },
    {
      image: games,
      title: 'Ayo bermain!',
      description: 'Belajar bahasa isyarat sambil bermain dengan cara yang seru!',
      path: '/play/games',
    }
  ]

  return (
    <>
      {isLoading && <LoadingScreen message={loadingMessage} />}
      <section className='bg-white min-h-screen relative font-pjs overflow-hidden'>
        {/* Linear Bottom */}
      <div className="absolute bottom-0 w-full h-1/4 bg-linear-to-b from-[#D9D9D9]/0 to-[#C5C7FF]"></div>

      {/* Background Decorative SVGs */}
      <div className="absolute top-0 right-0">
        <svg className="w-48 md:w-64 lg:w-[318px]" height="283" viewBox="0 0 318 283" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path opacity="0.2" d="M527 12C527 161.669 409.027 283 263.5 283C117.973 283 0 161.669 0 12C0 -137.669 117.973 -259 263.5 -259C409.027 -259 527 -137.669 527 12ZM48.5969 12C48.5969 134.066 144.812 233.02 263.5 233.02C382.188 233.02 478.403 134.066 478.403 12C478.403 -110.066 382.188 -209.02 263.5 -209.02C144.812 -209.02 48.5969 -110.066 48.5969 12Z" fill="#3338A0" />
        </svg>
      </div>
      <div className="absolute bottom-0 left-0">
        <svg className="w-40 md:w-52 lg:w-[263px]" height="405" viewBox="0 0 263 405" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path opacity="0.2" d="M263 271C263 420.669 145.027 542 -0.5 542C-146.027 542 -264 420.669 -264 271C-264 121.331 -146.027 0 -0.5 0C145.027 0 263 121.331 263 271ZM-215.403 271C-215.403 393.066 -119.188 492.02 -0.5 492.02C118.188 492.02 214.403 393.066 214.403 271C214.403 148.934 118.188 49.9801 -0.5 49.9801C-119.188 49.9801 -215.403 148.934 -215.403 271Z" fill="#C59560" />
        </svg>
      </div>

      {/* Back Button */}
      <div className="pt-10 px-6 md:px-12 lg:px-36">
      <BackButton to="/konten" variant="gray" />
      </div>

      <main className='relative flex flex-col items-center max-w-4xl mx-auto z-20 px-4 md:px-6 mt-4 md:mt-6'>
        {/* Header */}
        <HeaderLine title="Permainan" variant1="right" variant2="left" />

        {/* Title */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-2 tracking-tight text-center">Pilih Jenis Permainan</h2>
        <p className="text-[#2E2E2E] text-sm md:text-lg mb-6 md:mb-8 text-center px-4">
          Uji pengetahuanmu dengan Kuis atau belajar sambil bermain di Game.
        </p>

        <div className="flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-10 w-full pb-8">
          {categories.map((category, index) => (
            <div 
              key={index} 
              onClick={() => handleGameSelect(category.path, category.title)} 
              className="flex-1 border-2 border-[#3338A0] bg-white rounded-3xl px-5 md:px-7 pt-6 md:pt-8 pb-8 md:pb-14 cursor-pointer hover:shadow-xl hover:-translate-y-1 transition-all"
            >
              <div className="relative mb-4">
                <img src={category.image} alt={category.title} className='w-full h-[200px] sm:h-[280px] md:h-[350px] lg:h-[400px] rounded-xl object-cover' />
                <PlayButton />
              </div>
              <div className="">
                <h3 className='font-semibold text-lg md:text-xl text-black'>{category.title}</h3>
                <p className='font-normal text-black text-base md:text-xl'>{category.description}</p>
              </div>
            </div>
          ))}
        </div>
      </main>      
    </section>
    </>
  )
}

export default SelectionPage
