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
    const percentage = Math.round((score / totalQuestions) * 100)
    const getMessage = () => {
      if (percentage === 100) return { emoji: '🏆', text: 'Sempurna! Kamu menguasai bahasa isyarat!', color: 'text-[#FBC02D]' }
      if (percentage >= 75) return { emoji: '🎉', text: 'Hebat! Kamu sudah sangat baik!', color: 'text-[#4CAF50]' }
      if (percentage >= 50) return { emoji: '💪', text: 'Lumayan! Terus berlatih ya!', color: 'text-[#FF9800]' }
      return { emoji: '📚', text: 'Ayo belajar lagi dan coba lagi!', color: 'text-[#F44336]' }
    }
    const result = getMessage()

    return (
      <section className="min-h-screen bg-[#3338A0] font-pjs flex flex-col">
        <div className="px-6 pt-6 pb-4 flex items-center">
          <button
            onClick={() => { setStarted(false); handleRestart() }}
            className="flex items-center gap-2 text-white font-semibold hover:opacity-80 transition cursor-pointer"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
            Kembali
          </button>
        </div>

        <div className="flex-1 flex flex-col items-center justify-center px-6 pb-16">
          <div className="quiz-fade-in bg-white/10 backdrop-blur-md border border-white/20 rounded-[32px] p-8 md:p-12 max-w-lg w-full text-center">
            <div className="text-7xl mb-4">{result.emoji}</div>
            <h2 className={`text-3xl font-extrabold mb-2 ${result.color}`}>{result.text}</h2>
            <p className="text-white/70 text-lg mb-8">
              Skor kamu: <strong className="text-white text-2xl">{score}/{totalQuestions}</strong>
            </p>

            {/* Score ring */}
            <div className="relative w-36 h-36 mx-auto mb-8">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
                <circle cx="60" cy="60" r="50" stroke="rgba(255,255,255,0.15)" strokeWidth="10" fill="none" />
                <circle
                  cx="60" cy="60" r="50"
                  stroke={percentage >= 75 ? '#4CAF50' : percentage >= 50 ? '#FF9800' : '#F44336'}
                  strokeWidth="10"
                  fill="none"
                  strokeLinecap="round"
                  strokeDasharray={`${percentage * 3.14} 314`}
                  className="transition-all duration-1000 ease-out"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-3xl font-extrabold text-white">{percentage}%</span>
              </div>
            </div>

            <div className="flex gap-4 justify-center flex-wrap">
              <button
                onClick={handleRestart}
                className="bg-[#FBC02D] hover:bg-[#F9A825] text-[#2D2D2D] font-bold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer"
              >
                Coba Lagi
              </button>
              <button
                onClick={() => { setStarted(false); handleRestart() }}
                className="bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-3 rounded-full border border-white/30 transition-all duration-300 cursor-pointer"
              >
                Kembali
              </button>
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
        <div className="w-full max-w-3xl mb-6">
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
        <div className={`w-full max-w-3xl bg-[#F7F7F7] backdrop-blur-md border border-white/20 rounded-[28px] p-6 md:p-8 transition-all duration-300 ${animating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
          {/* Sign Image */}
          <div className="flex justify-center">
            <span className="mb-6">
              <img src={current.image} alt="" className='h-24 md:h-32'/>
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