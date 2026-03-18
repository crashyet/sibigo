import React from 'react'

const variantStyles = {
  right:
    'bg-linear-to-r',
  left:
    'bg-linear-to-l',
}

const HeaderLine = ({ title, variant1, variant2 }) => {
  return (
    <div className='flex items-center gap-6 mb-8 w-full max-w-4xl'>
      <div className={`flex-1 h-[7px] from-white to-[#3338A0] rounded-full ${variantStyles[variant1]}`}></div>
      <div className={`bg-[#3338A0] text-white font-bold px-8 py-1.5 rounded-full text-lg tracking-widest shadow-lg ${title === 'Game' ? 'bg-[#FCC61D]' : ''}`}>
        {title}
      </div>
      <div className={`flex-1 h-[7px] from-white to-[#3338A0] rounded-full ${variantStyles[variant2]}`}></div>
    </div>
  )
}

export default HeaderLine