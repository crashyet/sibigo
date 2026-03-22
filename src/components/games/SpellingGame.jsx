import React, { useState, useEffect } from 'react'

const SpellingGame = ({ question, onAnswerChange }) => {
  const { correct_word, hint_image, scrambled_hands } = question
  
  // filledSlots will hold the IDs of the hands that have been placed in the slots
  const [filledSlots, setFilledSlots] = useState(Array(correct_word.length).fill(null))

  // availableHands are hands that are NOT in filledSlots
  const availableHands = scrambled_hands.filter(hand => !filledSlots.includes(hand.id))

  // Initialize randomly shuffled hands initially
  const [shuffledOptions, setShuffledOptions] = useState([])

  useEffect(() => {
    // Shuffle only once on mount or when question changes
    const shuffled = [...scrambled_hands].sort(() => Math.random() - 0.5)
    setShuffledOptions(shuffled)
    setFilledSlots(Array(correct_word.length).fill(null))
  }, [question])

  // Check correctness whenever filledSlots changes
  useEffect(() => {
    // Only check if all slots are filled
    if (!filledSlots.includes(null)) {
      // Reconstruct the user's word
      const userWord = filledSlots.map(id => {
        const hand = scrambled_hands.find(h => h.id === id)
        return hand ? hand.label : ''
      }).join('')

      const isCorrect = userWord === correct_word
      onAnswerChange?.(isCorrect)
    } else {
      onAnswerChange?.(false)
    }
  }, [filledSlots, correct_word, scrambled_hands])

  const handleAvailableClick = (hand) => {
    // Find first empty slot
    const emptyIndex = filledSlots.indexOf(null)
    if (emptyIndex !== -1) {
      const newSlots = [...filledSlots]
      newSlots[emptyIndex] = hand.id
      setFilledSlots(newSlots)
    }
  }

  const handleSlotClick = (index) => {
    if (filledSlots[index] !== null) {
      const newSlots = [...filledSlots]
      newSlots[index] = null
      setFilledSlots(newSlots)
    }
  }

  return (
    <div className="w-full flex flex-col items-center gap-10 md:gap-16">
      {/* Top Section: Main Image & Options Grid */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 md:gap-16 w-full max-w-4xl">
        
        {/* Main Target Image */}
        <div className="w-[200px] h-[200px] md:w-[280px] md:h-[280px] bg-white rounded-3xl overflow-hidden shrink-0 shadow-xl border-4 border-white/10 flex items-center justify-center p-4">
          <img 
            src={hint_image} 
            alt="Hint" 
            className="w-full h-full object-contain" 
          />
        </div>

        {/* Options Grid */}
        <div className="grid grid-cols-3 gap-4 md:gap-6 min-h-[200px] w-full lg:w-auto px-4">
          {shuffledOptions.map((item, idx) => {
            const isUsed = filledSlots.includes(item.id)
            return (
              <div 
                key={`opt-${idx}`} 
                onClick={() => !isUsed && handleAvailableClick(item)}
                className={`relative w-[85px] h-[85px] md:w-[130px] md:h-[130px] rounded-2xl border-[2.5px] border-dashed flex flex-col items-center justify-center p-2 md:p-4 transition-all shadow-md overflow-hidden ${
                  isUsed 
                    ? 'border-white/20 bg-white/5 opacity-30 cursor-default shadow-none pointer-events-none' 
                    : 'border-white/50 bg-[#656DC4]/80 cursor-pointer hover:bg-[#747CE0] hover:scale-105'
                }`}
              >
                {!isUsed && item.image && (
                  <img src={item.image} alt="hand sign" className="w-full h-full object-contain drop-shadow-md" />
                )}
              </div>
            )
          })}
        </div>
      </div>

      {/* Bottom Section: Answer Slots */}
      <div className="flex flex-col gap-3 w-full max-w-3xl items-center pt-4">
        <span className="text-white/90 font-medium text-lg md:text-xl md:self-start ml-2 lg:ml-8">Jawaban:</span>
        <div className="flex flex-nowrap justify-center md:justify-start gap-4 md:gap-8 w-full px-4 lg:px-8 overflow-x-auto pb-4 scrollbar-hide">
          {filledSlots.map((handId, idx) => {
            const hand = handId ? scrambled_hands.find(h => h.id === handId) : null
            
            return (
              <div 
                key={`slot-${idx}`} 
                onClick={() => handleSlotClick(idx)}
                className={`relative w-[85px] h-[85px] md:w-[120px] md:h-[120px] rounded-2xl border-[2.5px] shadow-inner shrink-0 flex flex-col items-center justify-center p-2 md:p-4 transition-all overflow-hidden ${
                  hand 
                    ? 'bg-[#656DC4] border-white cursor-pointer hover:bg-red-500/80 hover:scale-105' 
                    : 'bg-[#656DC4]/40 border-dashed border-white/50'
                }`}
              >
                {hand && hand.image && (
                  <img src={hand.image} alt="hand sign" className="w-full h-full object-contain drop-shadow-md" />
                )}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default SpellingGame
