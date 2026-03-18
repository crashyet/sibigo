import React from 'react'

const VocabularyCard = ({title, image, onClick}) => {
  return (
    <div 
      onClick={onClick} 
      className="w-full bg-[#F8F9FA] rounded-[20px] border border-[#3338A0] overflow-hidden flex flex-col hover:scale-[1.02] hover:shadow-lg transition-transform duration-300 cursor-pointer group"
    >
      <div className="flex-1 flex justify-center items-center p-4 min-h-[220px]">
        {image ? (
          <img src={image} alt={title} className="h-40 object-contain" />
        ) : (
          <div className="w-full h-full" />
        )}
      </div>
      <div className="bg-[#3338A0] py-4 flex items-center justify-center">
        <h4 className="text-white font-bold text-xl">{title}</h4>
      </div>
    </div>
  )
}

export default VocabularyCard
