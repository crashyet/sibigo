import React from 'react'
import { useNavigate, Link } from 'react-router-dom'
import PlayButton from '../../components/ui/PlayButton'
import HeaderLine from '../../components/ui/HeaderLine'
import BackButton from '../../components/ui/BackButton'

/**
 * SelectionPage - Halaman pemilihan kategori game / kuis.
 * Pengguna bisa memilih tipe game sebelum bermain.
 */
const SelectionPage = () => {
  const navigate = useNavigate()

  const categories = [
    {
      image: '',
      title: 'Siap menguji kemampuanmu?',
      description: 'Jawab setiap pertanyaan dan pilih jawaban yang benar!',
      path: '/play/quiz',
    },
    {
      image: '',
      title: 'Ayo bermain!',
      description: 'Belajar bahasa isyarat sambil bermain dengan cara yang seru!',
      path: '/play/games',
    }
  ]

  return (
    <section className='bg-white h-screen relative font-pjs'>
      {/* Linear Bottom */}
      <div className="absolute bottom-0 w-full h-1/4 bg-linear-to-b from-[#D9D9D9]/0 to-[#C5C7FF]"></div>

      {/* Background Decorative SVGs */}
      <div className="absolute top-0 right-0">
        <svg width="318" height="283" viewBox="0 0 318 283" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path opacity="0.2" d="M527 12C527 161.669 409.027 283 263.5 283C117.973 283 0 161.669 0 12C0 -137.669 117.973 -259 263.5 -259C409.027 -259 527 -137.669 527 12ZM48.5969 12C48.5969 134.066 144.812 233.02 263.5 233.02C382.188 233.02 478.403 134.066 478.403 12C478.403 -110.066 382.188 -209.02 263.5 -209.02C144.812 -209.02 48.5969 -110.066 48.5969 12Z" fill="#3338A0" />
        </svg>
      </div>
      <div className="absolute bottom-0 left-0">
        <svg width="263" height="405" viewBox="0 0 263 405" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path opacity="0.2" d="M263 271C263 420.669 145.027 542 -0.5 542C-146.027 542 -264 420.669 -264 271C-264 121.331 -146.027 0 -0.5 0C145.027 0 263 121.331 263 271ZM-215.403 271C-215.403 393.066 -119.188 492.02 -0.5 492.02C118.188 492.02 214.403 393.066 214.403 271C214.403 148.934 118.188 49.9801 -0.5 49.9801C-119.188 49.9801 -215.403 148.934 -215.403 271Z" fill="#C59560" />
        </svg>
      </div>

      {/* Back Button */}
      <div className="pt-10 px-36">
      <BackButton to="/konten" variant="gray" />
      </div>

      <main className='absolute left-0 right-0 flex flex-col items-center max-w-4xl mx-auto z-20'>
        {/* Header */}
        <HeaderLine title="Permainan" variant1="right" variant2="left" />

        {/* Title */}
        <h2 className="text-4xl font-bold text-black mb-2 tracking-tight">Pilih Jenis Permainan</h2>
        <p className="text-[#2E2E2E] text-lg mb-8 text-center">
          Uji pengetahuanmu dengan Kuis atau belajar sambil bermain di Game.
        </p>

        {/* Categories */}
        <div className="flex flex-col lg:flex-row gap-10">
          {categories.map((categories, index) => (
            <div key={index} onClick={() => navigate(categories.path)} className="flex-1 border-2 border-[#3338A0] bg-white rounded-3xl px-7 pt-8 pb-14">
              <div className="relative mb-4">
                <img src={categories.image} alt={categories.title} className='w-full h-[400px] rounded-xl object-cover' />
                <PlayButton />
              </div>
              <div className="">
                <h3 className='font-semibold text-xl text-black'>{categories.title}</h3>
                <p className='font-normal text-black text-xl'>{categories.description}</p>
              </div>
            </div>
          ))}
        </div>
      </main>      
    </section>
  )
}

export default SelectionPage
