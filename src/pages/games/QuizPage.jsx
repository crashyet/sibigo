import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import quizData from './data/quizData'
import maskot9 from '../../assets/maskot/maskot9.png'
import maskot10 from '../../assets/maskot/maskot10.png'
import maskotBook from '../../assets/maskot/maskotBook.png'
import BackButton from '../../components/ui/BackButton'
import BackAlert from '../../components/ui/BackAlert'

const QuizPage = () => {
  const navigate = useNavigate()
  const [started, setStarted] = useState(false)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [answered, setAnswered] = useState(false)
  const [finished, setFinished] = useState(false)
  const [animating, setAnimating] = useState(false)
  const [userAnswers, setUserAnswers] = useState([])
  const [showReviewModal, setShowReviewModal] = useState(false)
  const [reviewQuestionIndex, setReviewQuestionIndex] = useState(null)
  const [showBackAlert, setShowBackAlert] = useState(false)

  const totalQuestions = quizData.length

  const handleAnswer = (option) => {
    if (answered) return
    setSelectedAnswer(option)
    setAnswered(true)
    
    setUserAnswers(prev => {
      const newAnswers = [...prev]
      newAnswers[currentQuestion] = option
      return newAnswers
    })

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
    setUserAnswers([])
    setShowReviewModal(false)
    setReviewQuestionIndex(null)
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

  // --- RESULTS SCREEN ---
  if (finished) {
    const getMessage = () => {
      if (score === totalQuestions) return 'Sempurna! Kamu menguasai bahasa isyarat!'
      if (score >= 6) return 'Bagus sekali! Kemampuan bahasa isyaratmu makin berkembang!'
      if (score >= 4) return 'Lumayan! Terus berlatih ya! Tetap Semangat!'
      return 'Ayo belajar lagi dan coba lagi! Tetap Semangat!'
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
        <div className="flex flex-col items-center -mb-20 relative gap-4 z-10">
          <h1 className="text-4xl font-bold text-[#F7F7F7]">Kuis Selesai</h1>
          <p className="text-[#F7F7F7] text-lg">Kuis sudah selesai! Mari lihat skor yang anda dapatkan</p>
        </div>

        {/* Result Card with Mascot */}
        <div className="flex-1 flex items-center justify-center px-4 md:px-6 relative z-10 w-full mb-16 mt-8">
          <div className="quiz-fade-in relative max-w-[1100px] w-full flex justify-end">
            
            {/* Mascot Side (Absolute positioning to overlap card) */}
            <div className="absolute w-[600px] left-[-100px] -bottom-2 z-20 hidden md:flex items-center md:-ml-8 lg:-ml-14 pb-2">
              {/* Speech Bubble */}
              <div className="absolute bg-[#C59560] text-white text-lg font-medium rounded-2xl px-6 py-4 -top-10 text-center shadow-lg md:ml-56">
                <span className="text-yellow-300 mr-1">⭐</span> {getMessage()}
                {/* Bubble tail (pointing down-left) */}
                <div className="absolute -bottom-3 left-20 w-0 h-0 border-l-[10px] border-r-[10px] border-t-[14px] border-l-transparent border-r-transparent border-t-[#C59560] -skew-x-12"></div>
              </div>
              {/* Mascot Image */}
              <img src={score >= 5 ? maskot9 : maskot10} alt="Maskot" className={`w-[500px] h-auto object-contain ${score <= 5 ? 'ml-16' : ''}`}  />
            </div>

            {/* Score Card */}
            <div className="bg-white rounded-[24px] p-8 md:py-18 md:pr-12 md:pl-[500px] w-full flex flex-col items-start shadow-2xl relative z-10">
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
                  onClick={() => navigate('/play')}
                  className="bg-[#FCC61D] text-white font-bold px-12 py-3 rounded-2xl shadow-[0_5px_0_#D49D42] active:translate-y-1 active:shadow-none transition-all cursor-pointer text-xl min-w-[160px] md:flex-none border border-[#FCC61D]"
                >
                  Kembali
                </button>
                <button
                  onClick={() => setShowReviewModal(true)}
                  className="bg-[#F8F9FA] text-[#FCC61D] border border-[#E5E7EB] font-bold px-12 py-3 rounded-2xl shadow-[0_5px_0_#D49D42] active:translate-y-1 active:shadow-none transition-all cursor-pointer text-xl min-w-[160px] md:flex-none"
                >
                  Ulas Pembelajaran
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* REVIEW MODAL */}
        {showReviewModal && (
          <div className="fixed inset-0 z-100 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
               onClick={(e) => {
                 if(e.target === e.currentTarget) {
                   setShowReviewModal(false);
                   setTimeout(() => setReviewQuestionIndex(null), 300);
                 }
               }}
          >
            <div className="bg-[#FCFBFA] rounded-[32px] w-full max-w-3xl shadow-2xl relative p-8 md:p-12 flex flex-col items-center animate-in fade-in zoom-in duration-300">
              <img src={maskotBook} alt="Maskot" className="w-[120px] md:w-[200px] mb-4 absolute -bottom-16 -left-16" />
              
              {/* Close Button overlapping top-right */}
              <button 
                onClick={() => {
                  if (reviewQuestionIndex !== null) {
                    setReviewQuestionIndex(null);
                  } else {
                    setShowReviewModal(false);
                  }
                }}
                className="absolute -top-4 -right-4 md:-top-5 md:-right-5 bg-[#E2E4E9] hover:bg-[#D1D5DB] rounded-full shadow-lg transition-colors z-110 flex items-center justify-center w-12 h-12 md:w-[50px] md:h-[50px] cursor-pointer"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3338A0" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>

              {/* Header text */}
              <h2 className="text-2xl md:text-3xl font-bold text-[#252525] mb-2 text-center">Review Ulang Quizmu</h2>
              <p className="text-[#252525] text-base md:text-lg text-center mb-8 font-medium">Klik Kotak kotak dibawah ini untuk membuka solusinya</p>

              {reviewQuestionIndex === null ? (
                /* Grid View */
                <div className="grid grid-cols-4 gap-4 md:gap-6 w-auto mb-4 relative z-10">
                  {quizData.map((data, index) => {
                    const isCorrect = userAnswers[index] === data.answer;
                    return (
                      <button
                        key={index}
                        onClick={() => setReviewQuestionIndex(index)}
                        className={`w-[70px] h-[70px] md:w-[95px] md:h-[95px] rounded-2xl flex items-center justify-center text-4xl font-extrabold text-white shadow-sm border-b-[6px] transition-transform hover:scale-105 active:scale-95 active:border-b-0 active:translate-y-[6px] ${
                          isCorrect ? 'bg-[#52C566] border-[#3E9F4F]' : 'bg-[#EF6D6D] border-[#CD5353]'
                        }`}
                      >
                        {index + 1}
                      </button>
                    );
                  })}
                </div>
              ) : (
                /* Detail View */
                <div className="w-full flex flex-col space-y-4 md:space-y-6 animate-in slide-in-from-bottom-5 fade-in duration-300 relative max-w-[650px] mx-auto z-10 md:px-[60px]">
                  
                  {/* Question blue card */}
                  <div className="bg-[#3338A0] rounded-[24px] p-6 md:p-8 flex flex-col items-center justify-center w-full min-h-[160px] shadow-sm">
                    <img src={quizData[reviewQuestionIndex].image} alt="Soal" className="h-[100px] md:h-[130px] object-contain mb-5 drop-shadow-md" />
                    <p className="text-white text-center font-medium md:text-lg">{quizData[reviewQuestionIndex].question}</p>
                  </div>
                  
                  <div className="flex flex-col gap-4">
                    {/* Your Answer */}
                    <div className="w-full text-left">
                      <p className="text-[#252525] text-sm md:text-base font-semibold mb-2">Jawaban kamu :</p>
                      {userAnswers[reviewQuestionIndex] === quizData[reviewQuestionIndex].answer ? (
                        <div className="bg-[#DFFEEA] w-full rounded-full flex items-center shadow-md overflow-hidden relative cursor-default">
                          <div className="w-8 h-full absolute left-0 top-0 bg-[#22C35D]"></div>
                          <div className="flex-1 flex items-center justify-between py-3 md:py-4 pl-14 pr-6">
                            <span className="font-bold text-base md:text-lg text-[#000000]">{userAnswers[reviewQuestionIndex]}</span>
                            <div className="w-7 h-7 rounded-full border-3 border-[#22C35D] flex items-center justify-center relative">
                              <div className="w-4 h-4 rounded-full bg-[#22C35D]"></div>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="bg-[#FEEBEB] w-full rounded-full flex items-center shadow-md overflow-hidden relative cursor-default">
                          <div className="w-8 h-full absolute left-0 top-0 bg-[#EB3939]"></div>
                          <div className="flex-1 flex items-center justify-between py-3 md:py-4 pl-14 pr-6">
                            <span className="font-bold text-base md:text-lg text-[#000000]">{userAnswers[reviewQuestionIndex] || 'Tidak menjawab'}</span>
                            <div className="w-7 h-7 rounded-full border-3 border-[#EB3939] flex items-center justify-center relative">
                              <div className="w-4 h-4 rounded-full bg-[#EB3939]"></div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Correct Answer */}
                    <div className="w-full text-left">
                      <p className="text-[#252525] text-sm md:text-base font-semibold mb-2">Jawaban benar:</p>
                      <div className="bg-[#DFFEEA] w-full rounded-full flex items-center shadow-md overflow-hidden relative cursor-default">
                        <div className="w-8 h-full absolute left-0 top-0 bg-[#22C35D]"></div>
                        <div className="flex-1 flex items-center justify-between py-3 md:py-4 pl-14 pr-6">
                          <span className="font-bold text-base md:text-lg text-[#000000]">{quizData[reviewQuestionIndex].answer}</span>
                          <div className="w-7 h-7 rounded-full border-3 border-[#22C35D] flex items-center justify-center relative">
                            <div className="w-4 h-4 rounded-full bg-[#22C35D]"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              )}
            </div>
          </div>
        )}
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
      <div className="px-30 pt-10 pb-4 flex items-center relative z-20">
        <BackButton onClick={() => setShowBackAlert(true)} variant="white" />
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

export default QuizPage