import React from 'react'

const PlayButton = () => {
  return (
    <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 p-6 bg-[#3338A0]/40 rounded-full w-fit mx-auto flex items-center justify-center">
      <svg width="36" height="36" viewBox="0 0 36 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M33 15.3999C36.3333 17.3244 36.3333 22.1356 33 24.0601L7.5 38.7825C4.16666 40.707 0 38.3014 0 34.4524V5.00754C0 1.15854 4.16667 -1.24708 7.5 0.677421L33 15.3999Z" fill="#D9D9D9"/>
      </svg>
    </div>
  )
}

export default PlayButton