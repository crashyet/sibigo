import React, { useState, useEffect, useMemo, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import BackButton from '@/components/ui/BackButton'
import BackAlert from '@/components/ui/BackAlert'
import HeaderLine from '@/components/ui/HeaderLine'
import Button from '@/components/ui/Button'
import MatchingGame from '@/components/games/MatchingGame'
import SpellingGame from '@/components/games/SpellingGame'
import ArrangeWordsGame from '@/components/games/ArrangeWordsGame'
import GameFeedback from '@/components/games/GameFeedback'
import GameResult from '@/components/games/GameResult'
import gamesData from '@/data/games/gamesData'
import LoadingScreen from '@/components/ui/LoadingScreen'

/**
 * GamesPage - Halaman utama untuk semua game dan aktivitas interaktif.
 */
const GamesPage = () => {
  const navigate = useNavigate()
  const [showBackAlert, setShowBackAlert] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [loadingMessage, setLoadingMessage] = useState('Memuat...')

  const handleGameSelect = () => {
    setLoadingMessage(`Mempersiapkan Permainan...`)
    setIsLoading(true)

    // Jeda 3 detik untuk menampilkan efek loading
    setTimeout(() => {
      setGameResultsArr([]);
      setCurrentQuestionIndex(0);
      setIsFinished(false);
      setIsLoading(false);
    }, 3000)
  }

  // Flatten the questions from all games into a single array
  const allQuestions = useMemo(() => {
    return gamesData.flatMap(game => 
      game.questions.map(q => ({
        ...q,
        gameType: game.type,
        gameId: game.id,
        gameTitle: game.title,
        gameDescription: game.description
      }))
    )
  }, [])

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [answerStatus, setAnswerStatus] = useState('idle') // 'idle', 'correct', 'wrong'
  const [isCurrentAnswerCorrect, setIsCurrentAnswerCorrect] = useState(false)
  const [gameResultsArr, setGameResultsArr] = useState([])
  const [isFinished, setIsFinished] = useState(false)
  
  // State to force re-mount components when question changes if needed
  const [gameKey, setGameKey] = useState(0)

  const currentQuestion = allQuestions[currentQuestionIndex]
  const totalQuestions = allQuestions.length

  // Automatically reset status when moving to a new question
  useEffect(() => {
    setAnswerStatus('idle')
    setIsCurrentAnswerCorrect(false)
    setGameKey(prev => prev + 1)
  }, [currentQuestionIndex, isFinished])

  let buttonTitle = "Periksa"
  let buttonVariant = "secondary"

  if (answerStatus === 'correct') {
    buttonTitle = "Lanjutkan"
    buttonVariant = "green"
  } else if (answerStatus === 'wrong') {
    buttonTitle = "Lanjutkan"
    buttonVariant = "redbg"
  }

  const handleCheck = () => {
    if (answerStatus === 'correct' || answerStatus === 'wrong') {
      // Record Result
      setGameResultsArr(prev => [...prev, { gameType: currentQuestion.gameType, isCorrect: isCurrentAnswerCorrect }])

      // Move to next question or Finish
      if (currentQuestionIndex < totalQuestions - 1) {
        setCurrentQuestionIndex(prev => prev + 1)
      } else {
        setIsFinished(true)
      }
    } else {
      // check the answer reported by the child component
      if (isCurrentAnswerCorrect) {
        setAnswerStatus('correct')
      } else {
        setAnswerStatus('wrong')
      }
    }
  }

  // Calculate Scores
  const totalCorrect = gameResultsArr.filter(r => r.isCorrect).length;
  const totalScore = gameResultsArr.reduce((acc, curr) => {
    if (curr.isCorrect) {
      if (curr.gameType === 'matching') return acc + 10;
      if (curr.gameType === 'reorder_with_hint') return acc + 15;
      if (curr.gameType === 'reorder_pure') return acc + 25;
    }
    return acc;
  }, 0);

  const getCorrectAnswerFormat = () => {
    if (currentQuestion.gameType === 'reorder_with_hint' || currentQuestion.gameType === 'reorder_pure') {
      return currentQuestion.correct_word.split('').map((char) => {
        // Find the hand image from scrambled_hands
        const hand = currentQuestion.scrambled_hands.find(h => h.label === char);
        return { image: hand ? hand.image : '', label: char };
      });
    } else if (currentQuestion.gameType === 'matching') {
      return currentQuestion.pairs.map((pair) => ({
        image: pair.image,
        label: pair.label
      }));
    }
    return [];
  };

  const handleAnswerChange = useCallback((isCorrect) => {
    setIsCurrentAnswerCorrect(isCorrect)
    setAnswerStatus(prev => {
      if (prev === 'wrong') return 'idle';
      return prev;
    });
  }, [])

  if (!currentQuestion) return null;

  return (
    <section className="min-h-screen bg-[#3338A0] font-pjs flex flex-col">
      <div className="absolute flex justify-between w-full bottom-0 overflow-hidden pointer-events-none">
        <div className="bottom-0">
          <svg width="554" height="572" viewBox="0 0 554 755" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.2" d="M-148.324 3.24683C-148.324 3.24683 -119.034 227.417 -22.7705 318.481C92.7434 427.756 247.558 314.078 373.81 410.747C450.998 469.849 509.857 511.31 526.944 607.014C552.092 747.875 327.364 882.597 325.787 913.257" stroke="#676BB4" strokeWidth="50" />
          </svg>
        </div>
        <div className="bottom-20">
          <svg width="758" height="572" viewBox="0 0 758 572" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.2" d="M861.535 24.3274C861.535 24.3274 641.517 76.3114 560.738 181.355C463.805 307.404 592.669 449.827 509.371 585.274C458.444 668.084 423.197 730.862 329.733 757.613C192.169 796.986 35.2437 587.159 4.58302 588.715" stroke="#676BB4" strokeWidth="50" />
          </svg>
        </div>
      </div>
      
      {/* Header */}
      <div className="px-5 md:px-30 pt-10 pb-4 flex items-center relative z-20">
        <BackButton onClick={() => setShowBackAlert(true)} variant="white" />
      </div>

      <div className="w-full flex flex-col items-center px-4 md:px-6 relative z-20">
        {!isFinished && (
          <>
            <HeaderLine title='Game' variant1='left' variant2='right' />
            <h1 className="text-2xl md:text-3xl font-extrabold text-white mb-1 text-center">{currentQuestion.gameTitle}</h1>
            <p className="text-white/80 text-sm md:text-lg mb-8 text-center max-w-2xl">
              {currentQuestion.gameDescription}
            </p>
          </>
        )}

        {/* Back Alert Modal */}
        {showBackAlert && (
          <BackAlert
            onCancel={() => setShowBackAlert(false)}
            onConfirm={() => navigate('/play')}
          />
        )}
      </div>

      {isFinished ? (
        <main className='relative z-10 px-4 md:px-6 flex-1 flex w-full max-w-[1400px] mx-auto items-start justify-center pt-8'>
          <GameResult totalScore={totalScore} totalCorrect={totalCorrect} />
        </main>
      ) : (
        <main className='relative z-10 px-4 md:px-6 pb-24 md:pb-32 -mt-2 flex-1 flex w-full max-w-[1400px] mx-auto items-center justify-center'>
          {/* Game Container (Perfect Center) */}
          <div className="w-full flex justify-center items-center min-h-[300px]">
          {currentQuestion.gameType === 'matching' && (
            <MatchingGame key={`matching-${gameKey}`} question={currentQuestion} onAnswerChange={handleAnswerChange} />
          )}
          {currentQuestion.gameType === 'reorder_with_hint' && (
            <SpellingGame key={`spelling-${gameKey}`} question={currentQuestion} onAnswerChange={handleAnswerChange} />
          )}
          {currentQuestion.gameType === 'reorder_pure' && (
            <ArrangeWordsGame key={`arrange-${gameKey}`} question={currentQuestion} onAnswerChange={handleAnswerChange} />
          )}
        </div>

        {/* Aside / Status Panel (Absolute Right) */}
        {(!isFinished) && (
          <aside className='absolute right-2 md:right-8 lg:right-12 flex flex-col items-center justify-center gap-5 w-full max-w-[180px] md:max-w-[224px] pointer-events-auto z-50'>
            <h2 className="text-white font-bold text-2xl md:text-3xl whitespace-nowrap drop-shadow-md">
              {currentQuestionIndex + 1} dari {totalQuestions} Game
            </h2>
            <div className="w-full">
              <Button
                variant={buttonVariant}
                onClick={handleCheck}
                className="w-full py-4 text-xl font-bold transition-colors"
              >
                {buttonTitle}
              </Button>
            </div>
          </aside>
        )}
      </main>
      )}

      {/* Finished Game Footer */}
      {isFinished && (
        <div className="fixed bottom-0 left-0 w-full z-50 animate-slide-up">
          <div className="w-full bg-[#1C2053] pb-10 pt-8 px-6 md:px-12 xl:px-40 rounded-t-3xl shadow-[0_-15px_40px_rgba(0,0,0,0.5)] border-t-[3px] border-white/10 flex justify-between gap-6">
            <Button 
              onClick={() => {
                handleGameSelect();
              }} 
              variant="white" 
              className="w-full md:w-[220px] py-4 text-xl font-bold shadow-lg text-[#FACC15]"
            >
              Main Lagi
            </Button>
            <Button 
              onClick={() => navigate('/play')} 
              variant="primary" 
              className="w-full md:w-[220px] py-4 text-xl font-bold shadow-lg"
            >
              Kembali
            </Button>
          </div>
        </div>
      )}
      {isLoading && <LoadingScreen message={loadingMessage} />}
      {/* Game Feedback Overlay */}
      {(!isFinished && answerStatus !== 'idle') && (
        <div className="fixed bottom-0 left-0 w-full z-40 animate-slide-up pointer-events-none">
          <div className="w-full bg-[#1C2053] pb-8 pt-6 px-4 md:px-10 rounded-t-3xl shadow-[0_-15px_40px_rgba(0,0,0,0.5)] border-t-[3px] border-white/10 pointer-events-auto flex justify-start pl-8 pr-12 xl:px-40">
            <GameFeedback status={answerStatus} correctAnswer={getCorrectAnswerFormat()} />
          </div>
        </div>
      )}
    </section>
  )
}

export default GamesPage
