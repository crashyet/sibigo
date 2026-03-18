import React from 'react'

const ButtonLesson = ({ title, icon, onClick }) => {
  return (
    <div 
      className='w-full bg-linear-to-b from-37% from-[#3338A0] to-[#12143A] rounded-2xl border border-[#3338A0] shadow-[0_10px_20px_rgba(51,56,160,0.3)] py-9 px-12 flex items-center justify-center gap-4 cursor-pointer hover:scale-[1.02] active:scale-95 transition-transform'
      onClick={onClick}
    >
      <img src={icon} alt="" />
      <h2 className='text-white font-bold text-2xl'>{title}</h2>
    </div>
  )
}

export default ButtonLesson