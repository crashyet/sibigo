import React, { useState, useEffect, useRef, useMemo } from 'react'

const MatchingGame = ({ question, onAnswerChange }) => {
  const [connections, setConnections] = useState([])
  const [selectedLeft, setSelectedLeft] = useState(null)
  const [selectedRight, setSelectedRight] = useState(null)
  const [lines, setLines] = useState([])

  const containerRef = useRef(null)
  const leftRefs = useRef({})
  const rightRefs = useRef({})

  const leftItems = useMemo(() => question.pairs.map(p => ({ id: p.id, image: p.image })), [question])
  const rightItems = useMemo(() => 
    question.pairs.map(p => ({ id: p.id, label: p.label })).sort(() => Math.random() - 0.5)
  , [question])

  const updateLines = () => {
    if (!containerRef.current) return

    const containerRect = containerRef.current.getBoundingClientRect()
    const newLines = connections.map(conn => {
      const leftEl = leftRefs.current[conn.leftId]
      const rightEl = rightRefs.current[conn.rightId]

      if (leftEl && rightEl) {
        const leftRect = leftEl.getBoundingClientRect()
        const rightRect = rightEl.getBoundingClientRect()

        return {
          id: `${conn.leftId}-${conn.rightId}`,
          x1: leftRect.left - containerRect.left + leftRect.width / 2,
          y1: leftRect.top - containerRect.top + leftRect.height / 2,
          x2: rightRect.left - containerRect.left + rightRect.width / 2,
          y2: rightRect.top - containerRect.top + rightRect.height / 2,
        }
      }
      return null
    }).filter(Boolean)

    setLines(newLines)
  }

  // Update lines on window resize or when connections change
  useEffect(() => {
    updateLines()
    window.addEventListener('resize', updateLines)
    return () => window.removeEventListener('resize', updateLines)
  }, [connections])

  useEffect(() => {
    // Check if answers are correct and complete
    if (connections.length === question.pairs.length) {
      const isCorrect = connections.every(conn => conn.leftId === conn.rightId)
      onAnswerChange?.(isCorrect)
    } else {
      onAnswerChange?.(false)
    }
  }, [connections, question.pairs])

  const handleLeftClick = (id) => {
    // If it's already connected, remove the connection
    if (connections.some(c => c.leftId === id)) {
      setConnections(prev => prev.filter(c => c.leftId !== id))
      return
    }

    if (selectedRight) {
      setConnections(prev => [...prev, { leftId: id, rightId: selectedRight }])
      setSelectedLeft(null)
      setSelectedRight(null)
    } else {
      setSelectedLeft(selectedLeft === id ? null : id)
    }
  }

  const handleRightClick = (id) => {
    // If it's already connected, remove the connection
    if (connections.some(c => c.rightId === id)) {
      setConnections(prev => prev.filter(c => c.rightId !== id))
      return
    }

    if (selectedLeft) {
      setConnections(prev => [...prev, { leftId: selectedLeft, rightId: id }])
      setSelectedLeft(null)
      setSelectedRight(null)
    } else {
      setSelectedRight(selectedRight === id ? null : id)
    }
  }

  return (
    <div className="relative w-full flex justify-center gap-24 md:gap-56 items-center min-h-[500px]" ref={containerRef}>
      
      {/* SVG Canvas for Lines */}
      <svg className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        {lines.map(line => (
          <line 
            key={line.id} 
            x1={line.x1} 
            y1={line.y1} 
            x2={line.x2} 
            y2={line.y2} 
            stroke="#45D0FF" 
            strokeWidth="6" 
            strokeLinecap="round" 
            style={{ filter: 'drop-shadow(0px 0px 8px rgba(69,208,255,0.8))' }} 
          />
        ))}

        {/* Draw a line that follows the cursor if something is selected - optional, skipped for simplicity */}
      </svg>

      {/* Left Column (Images) */}
      <div className="flex flex-col gap-10 z-10">
        {leftItems.map((item, idx) => {
          const isConnected = connections.some(c => c.leftId === item.id)
          const isSelected = selectedLeft === item.id

          return (
            <div 
              key={`left-${item.id}`} 
              className={`relative w-[120px] h-[120px] md:w-[140px] md:h-[140px] rounded-xl border-2 border-dashed bg-white/10 flex items-center justify-center cursor-pointer transition-all ${isSelected ? 'border-[#45D0FF] shadow-[0_0_15px_rgba(69,208,255,0.5)] scale-105' : 'border-white/40 hover:scale-105 hover:bg-white/20'}`}
              onClick={() => handleLeftClick(item.id)}
            >
              {item.image && <img src={item.image} alt="Sign" className="h-[80%] object-contain" />}
              
              {/* Right connector dot */}
              <div 
                ref={el => leftRefs.current[item.id] = el}
                className={`absolute top-1/2 -translate-y-1/2 -right-8 md:-right-10 w-[18px] h-[18px] rounded-full border-2 border-white transition-colors ${isConnected || isSelected ? 'bg-[#45D0FF] border-[#45D0FF] shadow-[0_0_10px_rgba(69,208,255,1)]' : 'bg-transparent shadow-[0_0_10px_rgba(255,255,255,0.3)]'}`} 
              />
            </div>
          )
        })}
      </div>

      {/* Right Column (Numbers/Labels) */}
      <div className="flex flex-col gap-10 z-10">
        {rightItems.map((item, idx) => {
          const isConnected = connections.some(c => c.rightId === item.id)
          const isSelected = selectedRight === item.id

          return (
            <div 
              key={`right-${item.id}`} 
              className={`relative w-[120px] h-[120px] md:w-[140px] md:h-[140px] rounded-xl border-2 border-dashed bg-white/10 flex items-center justify-center cursor-pointer transition-all ${isSelected ? 'border-[#45D0FF] shadow-[0_0_15px_rgba(69,208,255,0.5)] scale-105' : 'border-white/40 hover:scale-105 hover:bg-white/20'}`}
              onClick={() => handleRightClick(item.id)}
            >
              <span 
                className="text-[64px] md:text-[80px] font-extrabold text-[#45D0FF] tracking-tighter" 
                style={{ WebkitTextStroke: '2px #1E237E' }}
              >
                {item.label}
              </span>

              {/* Left connector dot */}
              <div 
                ref={el => rightRefs.current[item.id] = el}
                className={`absolute top-1/2 -translate-y-1/2 -left-8 md:-left-10 w-[18px] h-[18px] rounded-full border-2 border-white transition-colors ${isConnected || isSelected ? 'bg-[#45D0FF] border-[#45D0FF] shadow-[0_0_10px_rgba(69,208,255,1)]' : 'bg-transparent shadow-[0_0_10px_rgba(255,255,255,0.3)]'}`} 
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default MatchingGame
