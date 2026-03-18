import React from 'react'

const SignCard = ({title, icon, onClick}) => {
  return (
    <div 
      onClick={onClick} 
      className="w-full bg-[#3338A0] rounded-[24px] border border-[#E5E7EB] overflow-hidden flex flex-col hover:scale-[1.02] hover:shadow-lg transition-transform duration-300 cursor-pointer group shadow-sm"
    >
      <div className="flex-1 flex justify-center items-center p-4 min-h-[160px]">
        {icon && <img src={icon} alt={title} className="h-32 object-contain" />}
      </div>
      <div className="bg-white py-3 flex items-center justify-center gap-2">
        <div className="w-6 h-6 rounded-full bg-[#E2E4E9] flex items-center justify-center text-[#8C94A3]">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="ml-0.5">
            <path d="M5 3l14 9-14 9V3z" />
          </svg>
        </div>
        <h4 className="text-[#2D2D2D] font-bold text-lg">{title}</h4>
      </div>
    </div>
  )
}

export default SignCard