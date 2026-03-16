import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import soal1 from '../../assets/quiz/soal1.png'
import soal2 from '../../assets/quiz/soal2.png'
import soal3 from '../../assets/quiz/soal3.png'
import soal4 from '../../assets/quiz/soal4.png'
import soal5 from '../../assets/quiz/soal5.png'
import soal6 from '../../assets/quiz/soal6.png'
import soal7 from '../../assets/quiz/soal7.png'
import soal8 from '../../assets/quiz/soal8.png'
import maskot9 from '../../assets/maskot/maskot9.png'
import maskot10 from '../../assets/maskot/maskot10.png'

const quizData = [
  {
    image: soal1,
    question: 'Huruf apakah yang ditunjukkan pada gambar di atas?',
    options: ['U', 'K', 'V'],
    answer: 'K',
  },
  {
    image: soal2,
    question: 'Huruf apakah yang ditunjukkan pada gambar di atas?',
    options: ['Y', 'B', 'N'],
    answer: 'N',
  },
  {
    image: soal3,
    question: 'Kata apakah yang ditunjukkan pada gambar di atas?',
    options: ['AKU', 'DIA', 'ITU'],
    answer: 'AKU',
  },
  {
    image: soal4,
    question: 'Kata apakah yang ditunjukkan pada gambar di atas?',
    options: ['ZIKIR', 'ZAKAT', 'ZAMAN'],
    answer: 'ZAKAT',
  },
  {
    image: soal5,
    question: 'Kata apakah yang ditunjukkan pada gambar di atas?',
    options: ['HALO', 'BOLA', 'KILO'],
    answer: 'HALO',
  },
  {
    image: soal6,
    question: 'Huruf apakah yang ditunjukkan pada gambar di atas?',
    options: ['U', 'Y', 'F'],
    answer: 'F',
  },
  {
    image: soal7,
    question: 'Angka berapakah yang ditunjukkan pada gambar di atas?',
    options: ['7', '8', '3'],
    answer: '7',
  },
  {
    image: soal8,
    question: 'Angka berapakah yang ditunjukkan pada gambar di atas?',
    options: ['38', '83', '96'],
    answer: '83',
  },
]

const QuizPage = () => {
  const navigate = useNavigate()
  const [started, setStarted] = useState(false)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [answered, setAnswered] = useState(false)
  const [finished, setFinished] = useState(false)
  const [animating, setAnimating] = useState(false)

  const totalQuestions = quizData.length

  const handleAnswer = (option) => {
    if (answered) return
    setSelectedAnswer(option)
    setAnswered(true)

    if (option === quizData[currentQuestion].answer) {
      setScore((prev) => prev + 1)
    }

    setTimeout(() => {
      if (currentQuestion < totalQuestions - 1) {
        setAnimating(true)
        setTimeout(() => {
          setCurrentQuestion((prev) => prev + 1)
          setSelectedAnswer(null)
          setAnswered(false)
          setAnimating(false)
        }, 300)
      } else {
        setFinished(true)
      }
    }, 1200)
  }

  const handleRestart = () => {
    setCurrentQuestion(0)
    setScore(0)
    setSelectedAnswer(null)
    setAnswered(false)
    setFinished(false)
    setAnimating(false)
  }

  const getOptionStyle = (option) => {
    if (!answered) {
      return {
        bg: 'bg-white',
        accentBar: 'bg-[#C59560]',
        radio: 'border-[#C59560]',
        radioInner: '',
        text: 'text-[#2D2D2D]',
      }
    }

    const isCorrect = option === quizData[currentQuestion].answer
    const isSelected = option === selectedAnswer

    if (isSelected && isCorrect) {
      return {
        bg: 'bg-[#DFFEEA]',
        accentBar: 'bg-[#22C35D]',
        radio: 'border-[#22C35D]',
        radioInner: 'bg-[#22C35D]',
        text: 'text-[#000000]',
      }
    }
    if (isSelected && !isCorrect) {
      return {
        bg: 'bg-[#FEEBEB]',
        accentBar: 'bg-[#EB3939]',
        radio: 'border-[#EB3939]',
        radioInner: 'bg-[#EB3939]',
        text: 'text-[#000000]',
      }
    }

    return {
      bg: 'bg-white',
      accentBar: 'bg-[#C59560]',
      radio: 'border-[#C59560]',
      radioInner: '',
      text: 'text-[#000000]',
    }
  }

  // --- INTRO / START SCREEN ---
  if (!started) {
    return (
      <section className="min-h-screen bg-[#3338A0] font-pjs flex flex-col">
        {/* Header */}
        <div className="px-6 pt-6 pb-4 flex items-center">
          <button
            onClick={() => navigate('/book')}
            className="flex items-center gap-2 text-white font-semibold hover:opacity-80 transition cursor-pointer"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
            Kembali
          </button>
        </div>

        <div className="flex-1 flex flex-col items-center justify-center px-6 pb-16">
          {/* Badge */}
          <div className="flex items-center gap-4 mb-6">
            <div className="flex-1 h-[2px] w-24 bg-linear-to-r from-transparent to-[#FBC02D] opacity-60"></div>
            <div className="bg-[#FBC02D] text-[#2D2D2D] font-bold px-6 py-2 rounded-full text-sm shadow-lg flex items-center gap-2">
              <span>📋</span> Kuis Bahasa Isyarat
            </div>
            <div className="flex-1 h-[2px] w-24 bg-linear-to-l from-transparent to-[#FBC02D] opacity-60"></div>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-3 text-center">Tebak Isyarat SIBI</h1>
          <p className="text-white/70 text-lg mb-12 text-center max-w-md">
            Lihat gerakan isyarat, lalu tebak kata yang benar!
          </p>

          {/* Quiz Card */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-[32px] p-8 md:p-10 max-w-md w-full text-center">
            <div className="text-6xl mb-6">🧠</div>
            <h2 className="text-2xl font-bold text-white mb-2">Siap Mengerjakan Kuis?</h2>
            <p className="text-white/60 mb-2">Terdapat <strong className="text-[#FBC02D]">8 pertanyaan</strong> tentang huruf isyarat SIBI.</p>
            <p className="text-white/60 mb-8">Jawab dengan benar untuk mendapatkan skor tertinggi!</p>

            <button
              onClick={() => setStarted(true)}
              className="bg-[#FBC02D] hover:bg-[#F9A825] text-[#2D2D2D] font-bold text-lg px-10 py-3.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              Mulai Kuis
            </button>
          </div>
        </div>
      </section>
    )
  }

  // --- RESULTS SCREEN ---
  if (finished) {
    const getMessage = () => {
      if (score === totalQuestions) return 'Sempurna! Kamu menguasai bahasa isyarat!'
      if (score >= 6) return 'Bagus sekali! Kemampuan bahasa isyaratmu makin berkembang!'
      if (score >= 4) return 'Lumayan! Terus berlatih ya!'
      return 'Ayo belajar lagi dan coba lagi!'
    }

    // Generate stars: filled for correct, empty for wrong
    const renderStars = () => {
      return Array.from({ length: totalQuestions }, (_, i) => (
        <svg key={i} width="28" height="28" viewBox="0 0 24 24" fill={i < score ? '#FCC61D' : 'none'} stroke="#FCC61D" strokeWidth="2" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))
    }

    return (
      <section className="min-h-screen bg-[#3338A0] font-pjs flex flex-col relative overflow-hidden">
        {/* Background decorative SVGs */}
        <div className="absolute flex justify-between w-full bottom-0 overflow-hidden pointer-events-none">
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

        {/* Badge */}
        <div className="flex flex-col items-center pt-20 px-4 md:px-6 mb-6 relative z-10">
          <div className="flex items-center gap-4 mb-5">
            <div className="flex-1 h-[5px] w-16 md:w-24 lg:w-50 bg-linear-to-r from-transparent to-white rounded-full"></div>
            <div className="bg-[#FCC61D] text-white font-bold px-5 py-1.5 rounded-full text-base shadow-lg flex items-center gap-2">
              <span>
                <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21.8536 25.711H5.14142V8.99887C5.14142 8.29182 4.56292 7.71332 3.85586 7.71332C3.14881 7.71332 2.57031 8.29182 2.57031 8.99887V25.711C2.57031 27.1252 3.72731 28.2822 5.14142 28.2822H21.8536C22.5606 28.2822 23.1391 27.7037 23.1391 26.9966C23.1391 26.2895 22.5606 25.711 21.8536 25.711Z" fill="#F7F7F7" />
                  <path d="M25.7126 2.57111H10.2859C8.87184 2.57111 7.71484 3.7281 7.71484 5.14221V20.5688C7.71484 21.9829 8.87184 23.1399 10.2859 23.1399H25.7126C27.1267 23.1399 28.2837 21.9829 28.2837 20.5688V5.14221C28.2837 3.7281 27.1267 2.57111 25.7126 2.57111ZM18.0121 19.2833C17.2536 19.2833 16.6623 18.6791 16.6623 17.9335C16.6623 17.175 17.2665 16.5965 18.0121 16.5965C18.7706 16.5965 19.3491 17.175 19.3491 17.9335C19.3362 18.6791 18.7706 19.2833 18.0121 19.2833ZM21.226 11.3514C20.4161 12.547 19.6448 12.9069 19.2205 13.6783C19.1177 13.8583 19.0534 14.0125 19.0148 14.3082C18.9506 14.8096 18.552 15.1824 18.0507 15.1824H18.0121C17.4465 15.1824 16.9965 14.6939 17.048 14.1282C17.0865 13.7683 17.1637 13.3955 17.3693 13.0484C17.8964 12.1099 18.8863 11.5571 19.4648 10.7344C20.0819 9.86019 19.7348 8.24039 17.9993 8.24039C17.2151 8.24039 16.7009 8.65177 16.3795 9.14028C16.1352 9.51309 15.6467 9.64164 15.2353 9.46167C14.6954 9.23027 14.464 8.56178 14.7982 8.08612C15.4539 7.13482 16.5466 6.42776 17.9864 6.42776C19.5676 6.42776 20.6604 7.14767 21.2131 8.04756C21.6888 8.83175 21.9588 10.2716 21.226 11.3514Z" fill="#F7F7F7" />
                </svg>
              </span> Kuis Bahasa Isyarat
            </div>
            <div className="flex-1 h-[5px] w-16 md:w-24 lg:w-50 bg-linear-to-l from-transparent to-white rounded-full"></div>
          </div>
        </div>

        {/* Title */}
        <div className="flex flex-col items-center -mb-10 relative gap-4 z-10">
          <h1 className="text-4xl font-bold text-[#F7F7F7]">Kuis Selesai</h1>
          <p className="text-[#F7F7F7] text-lg">Kuis sudah selesai! Mari lihat skor yang anda dapatkan</p>
        </div>

        {/* Result Card with Mascot */}
        <div className="flex-1 flex items-center justify-center px-4 md:px-6 relative z-10 w-full mb-16 mt-8">
          <div className="quiz-fade-in relative max-w-[1000px] w-full flex justify-end">
            
            {/* Mascot Side (Absolute positioning to overlap card) */}
            <div className="absolute w-[500px] left-[-80px] -bottom-2 z-20 hidden md:flex items-center md:-ml-8 lg:-ml-14 pb-2">
              {/* Speech Bubble */}
              <div className="absolute bg-[#C59560] text-white text-lg font-medium rounded-2xl px-6 py-4 -top-12 text-center shadow-lg md:ml-56">
                <span className="text-yellow-300 mr-1">⭐</span> {getMessage()}
                {/* Bubble tail (pointing down-left) */}
                <div className="absolute -bottom-3 left-20 w-0 h-0 border-l-[10px] border-r-[10px] border-t-[14px] border-l-transparent border-r-transparent border-t-[#C59560] -skew-x-12"></div>
              </div>
              {/* Mascot Image */}
              <img src={score >= 5 ? maskot9 : maskot10} alt="Maskot" className="w-[460px] h-auto object-contain" />
            </div>

            {/* Score Card */}
            <div className="bg-white rounded-[24px] p-8 md:py-14 md:pr-12 md:pl-[400px] w-full flex flex-col items-start shadow-2xl relative z-10">
              <h2 className="text-3xl font-semibold text-[#252525] mb-3">Anda Berhasil Menjawab</h2>

              {/* Stars + Score */}
              <div className="flex items-center flex-wrap gap-4 mb-3">
                <div className="flex gap-[2px]">
                  {Array.from({ length: totalQuestions }, (_, i) => (
                    <svg key={i} width="50" height="50" viewBox="0 0 24 24" fill={i < score ? '#FCC61D' : '#D1D5DB'} stroke="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <span className="text-[#252525]/70 font-bold text-3xl">{score}/{totalQuestions}</span>
              </div>

              <p className="text-[#252525] font-semibold text-xl mb-14">Pertanyaan dengan benar</p>

              {/* Buttons with bottom shadow */}
              <div className="flex gap-4 flex-wrap w-full md:w-auto">
                <button
                  onClick={handleRestart}
                  className="bg-[#FCC61D] text-white font-bold px-12 py-3 rounded-2xl shadow-[0_5px_0_#D49D42] active:translate-y-1 active:shadow-none transition-all cursor-pointer text-xl min-w-[160px] md:flex-none border border-[#FCC61D]"
                >
                  Main Lagi
                </button>
                <button
                  onClick={() => { setStarted(false); handleRestart() }}
                  className="bg-[#F8F9FA] text-[#FCC61D] border border-[#E5E7EB] font-bold px-12 py-3 rounded-2xl shadow-[0_5px_0_#D49D42] active:translate-y-1 active:shadow-none transition-all cursor-pointer text-xl min-w-[160px] md:flex-none"
                >
                  Kembali
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  // --- QUIZ GAMEPLAY ---
  const current = quizData[currentQuestion]
  const progressPercent = ((currentQuestion + 1) / totalQuestions) * 100

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
      <div className="px-30 pt-10 pb-4 flex items-center">
        <button
          onClick={() => { setStarted(false); handleRestart() }}
          className="flex items-center gap-2 text-white font-bold hover:opacity-80 transition cursor-pointer"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6" />
          </svg>
          Kembali
        </button>
      </div>

      <div className="flex-1 flex flex-col items-center px-4 md:px-6 pb-12">
        {/* Badge */}
        <div className="flex items-center gap-4 mb-5">
          <div className="flex-1 h-[4px] w-16 md:w-24 lg:w-40 bg-linear-to-r from-transparent to-white rounded-full"></div>
          <div className="bg-[#FCC61D] text-white font-bold px-5 py-1.5 rounded-full text-base shadow-lg flex items-center gap-2">
            <span>
              <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.8536 25.711H5.14142V8.99887C5.14142 8.29182 4.56292 7.71332 3.85586 7.71332C3.14881 7.71332 2.57031 8.29182 2.57031 8.99887V25.711C2.57031 27.1252 3.72731 28.2822 5.14142 28.2822H21.8536C22.5606 28.2822 23.1391 27.7037 23.1391 26.9966C23.1391 26.2895 22.5606 25.711 21.8536 25.711Z" fill="#F7F7F7" />
                <path d="M25.7126 2.57111H10.2859C8.87184 2.57111 7.71484 3.7281 7.71484 5.14221V20.5688C7.71484 21.9829 8.87184 23.1399 10.2859 23.1399H25.7126C27.1267 23.1399 28.2837 21.9829 28.2837 20.5688V5.14221C28.2837 3.7281 27.1267 2.57111 25.7126 2.57111ZM18.0121 19.2833C17.2536 19.2833 16.6623 18.6791 16.6623 17.9335C16.6623 17.175 17.2665 16.5965 18.0121 16.5965C18.7706 16.5965 19.3491 17.175 19.3491 17.9335C19.3362 18.6791 18.7706 19.2833 18.0121 19.2833ZM21.226 11.3514C20.4161 12.547 19.6448 12.9069 19.2205 13.6783C19.1177 13.8583 19.0534 14.0125 19.0148 14.3082C18.9506 14.8096 18.552 15.1824 18.0507 15.1824H18.0121C17.4465 15.1824 16.9965 14.6939 17.048 14.1282C17.0865 13.7683 17.1637 13.3955 17.3693 13.0484C17.8964 12.1099 18.8863 11.5571 19.4648 10.7344C20.0819 9.86019 19.7348 8.24039 17.9993 8.24039C17.2151 8.24039 16.7009 8.65177 16.3795 9.14028C16.1352 9.51309 15.6467 9.64164 15.2353 9.46167C14.6954 9.23027 14.464 8.56178 14.7982 8.08612C15.4539 7.13482 16.5466 6.42776 17.9864 6.42776C19.5676 6.42776 20.6604 7.14767 21.2131 8.04756C21.6888 8.83175 21.9588 10.2716 21.226 11.3514Z" fill="#F7F7F7" />
              </svg>
            </span> Kuis Bahasa Isyarat
          </div>
          <div className="flex-1 h-[4px] w-16 md:w-24 lg:w-40 bg-linear-to-l from-transparent to-white rounded-full"></div>
        </div>

        {/* Title */}
        <h1 className="text-2xl md:text-3xl font-extrabold text-white mb-1 text-center">Tebak Isyarat SIBI</h1>
        <p className="text-white/60 text-sm md:text-base mb-8 text-center">
          Lihat gerakan isyarat, lalu tebak kata yang benar!
        </p>

        {/* Progress Section */}
        <div className="w-full max-w-4xl mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-white/80 font-medium text-sm">Pertanyaan {currentQuestion + 1}/{totalQuestions}</span>
            <span className="text-white/80 font-medium text-sm">Skor: {score}</span>
          </div>
          <div className="w-full h-5 bg-[#E5E7EB] rounded-full overflow-hidden">
            <div
              className="h-full bg-[#C59560] rounded-full transition-all duration-500 ease-out quiz-progress-bar"
              style={{ width: `${progressPercent}%` }}
            ></div>
          </div>
        </div>

        {/* Question Card */}
        <div className={`w-full max-w-4xl bg-[#F7F7F7] backdrop-blur-md border border-white/20 rounded-[28px] p-6 md:p-8 transition-all duration-300 ${animating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
          {/* Sign Image */}
          <div className="flex justify-center">
            <span className="mb-6">
              <img src={current.image} alt="" className='h-24 md:h-32' />
            </span>
          </div>

          {/* Question Text */}
          <p className="text-black text-center font-medium text-base md:text-lg mb-6">{current.question}</p>

          {/* Answer Options */}
          <div className="flex flex-col gap-4">
            {current.options.map((option, index) => {
              const style = getOptionStyle(option)
              return (
                <button
                  key={index}
                  onClick={() => handleAnswer(option)}
                  disabled={answered}
                  className={`${style.bg} w-full rounded-full flex items-center shadow-lg transition-all duration-300 hover:scale-[1.01] overflow-hidden relative ${!answered ? 'cursor-pointer hover:shadow-xl' : 'cursor-default'} ${answered ? 'quiz-option-answered' : ''}`}
                >
                  {/* Left Accent Bar */}
                  <div className={`w-8 h-full absolute left-0 top-0 ${style.accentBar} transition-colors duration-300`}></div>

                  {/* Content (Padded to avoid bar) */}
                  <div className="flex-1 flex items-center justify-between py-4.5 pl-14 pr-6">
                    {/* Option Text */}
                    <span className={`font-bold text-lg ${style.text}`}>{option}</span>

                    {/* Radio Circle */}
                    <div className={`w-7 h-7 rounded-full border-3 ${style.radio} flex items-center justify-center transition-colors duration-300`}>
                      {style.radioInner && (
                        <div className={`w-4 h-4 rounded-full ${style.radioInner} transition-transform duration-300 scale-in`}></div>
                      )}
                    </div>
                  </div>
                </button>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default QuizPage