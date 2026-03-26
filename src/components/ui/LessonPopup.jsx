import React, { useState } from 'react'
import maskotBook from '@/assets/maskot/maskotBook.png'

const LessonPopup = ({ isOpen, onClose, data, videoOnly = false, titlePrefix = "Huruf Dasar :" }) => {
  const [activeTab, setActiveTab] = useState(videoOnly ? 'video' : 'image') // 'image' or 'video'

  if (!isOpen || !data) return null;

  return (
    <div className="fixed inset-0 z-150 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
          // Reset tab to image when closing (or video if videoOnly)
          setTimeout(() => setActiveTab(videoOnly ? 'video' : 'image'), 300);
        }
      }}
    >
      <div className="bg-[#FCFBFA] rounded-[32px] w-full max-w-2xl shadow-2xl relative p-6 md:p-8 md:px-12 animate-in fade-in zoom-in duration-300 min-h-[500px] flex flex-col justify-between">

        {/* Close Button overlapping top-right */}
        <button
          onClick={() => {
            onClose();
            setTimeout(() => setActiveTab(videoOnly ? 'video' : 'image'), 300);
          }}
          className="absolute -top-4 -right-4 md:-top-5 md:-right-5 bg-[#E2E4E9] hover:bg-[#D1D5DB] rounded-full shadow-lg transition-colors z-110 flex items-center justify-center w-12 h-12 md:w-[50px] md:h-[50px] cursor-pointer border-4 border-[#FCFBFA]"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3338A0" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        <div className="flex flex-col relative z-20 items-center flex-1 w-full justify-between">
          <div className="w-full h-10"></div> {/* Top Spacer */}
          {/* Main Visual Area */}
          <div className="flex items-center justify-center relative mb-12 w-full">
            <div className="bg-white rounded-[24px] p-2 shadow-[0_4px_20px_rgba(0,0,0,0.1)] border border-[#E5E7EB] w-[220px] h-[220px] md:w-[340px] md:h-[340px] flex items-center justify-center overflow-hidden relative z-20">
              {activeTab === 'image' ? (
                <img src={data.image} alt={data.title} className="w-full h-full object-contain rounded-[20px]" />
              ) : (
                <video 
                  autoPlay 
                  loop 
                  muted 
                  playsInline 
                  width="100%"
                  className="w-full h-full object-cover rounded-[20px]"
                >
                  <source src={data.video} type="video/webm" />
                </video>
              )}
            </div>

            {/* Side Buttons (Image / Video) */}
            {!videoOnly && (
              <div className="absolute -right-3 md:right-4 lg:right-8 flex flex-col gap-4 z-10">
                <button
                  onClick={() => setActiveTab('image')}
                  className={`w-12 h-12 md:w-[60px] md:h-[60px] rounded-full flex flex-col items-center justify-center shadow-md transition-all cursor-pointer ${activeTab === 'image' ? 'bg-[#3338A0] text-white' : 'bg-white text-[#3338A0] border-2 border-[#E5E7EB] hover:border-[#3338A0]'}`}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                    <circle cx="8.5" cy="8.5" r="1.5" />
                    <polyline points="21 15 16 10 5 21" />
                  </svg>
                </button>
                <button
                  onClick={() => setActiveTab('video')}
                  className={`w-12 h-12 md:w-[60px] md:h-[60px] rounded-full flex items-center justify-center shadow-md transition-all cursor-pointer ${activeTab === 'video' ? 'bg-[#3338A0] text-white' : 'bg-white text-[#3338A0] border-2 border-[#E5E7EB] hover:border-[#3338A0]'}`}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="23 7 16 12 23 17 23 7" />
                    <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
                  </svg>
                </button>
              </div>
            )}
          </div>

          <div className="relative w-full mt-auto pt-8">
            {/* Info Card */}
            <div className="w-full bg-linear-to-b from-37% from-[#C59560] to-[#664622] rounded-[24px] p-5 text-white shadow-md relative z-20 text-center px-6 md:px-16 md:py-12">
              {/* Mascot - Positioned directly above the Info Card */}
              <img src={maskotBook} alt="Maskot" className="w-[100px] md:w-[140px] absolute left-0 bottom-full z-30 drop-shadow-md translate-y-3 md:translate-y-4" />

              <h3 className="text-lg md:text-xl font-bold mb-2">{titlePrefix} {data.title}</h3>
              <p className="text-sm md:text-base text-white/90 leading-relaxed font-medium">
                {data.description}
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default LessonPopup
