import React from 'react'

const ButtonLesson = ({ title, icon, onClick }) => {
  return (
    <div 
      className='w-full bg-linear-to-b from-37% from-[#3338A0] to-[#12143A] rounded-2xl border border-[#3338A0] shadow-[0_10px_20px_rgba(51,56,160,0.3)] py-4 px-6 md:py-6 md:px-8 lg:py-9 lg:px-12 flex items-center justify-center gap-2 md:gap-4 cursor-pointer hover:scale-[1.02] active:scale-95 transition-transform'
      onClick={onClick}
    >
      <img src={icon} alt="" className="w-8 md:w-10 lg:w-auto" />
      <h2 className='text-white font-bold text-lg md:text-xl lg:text-2xl'>{title}</h2>
    </div>
  )
}

export default ButtonLesson