import React from 'react'
import logo from '@/assets/logo.png'
import maskot1 from '@/assets/maskot/maskot1.png'
import maskot2 from '@/assets/maskot/maskot2.png'
import maskot5 from '@/assets/maskot/maskot5.png'

const LoadingScreen = ({ message = "Memuat..." }) => {
  // Mascots loop: N distinct mascots + the first one duplicated at the end to make it seamless
  const mascots = [logo, maskot1, maskot2, maskot5, logo];

  return (
    <div className="fixed inset-0 z-999 bg-black/40 backdrop-blur-sm flex flex-col items-center justify-center font-pjs transition-all duration-300">
      
      {/* White Pop-up Box */}
      <div className="bg-white rounded-[40px] shadow-2xl p-10 flex flex-col items-center justify-center relative min-w-[320px] max-w-sm m-6 animate-in zoom-in-95 duration-500 origin-center">
        
        {/* Animated Loading Graphic */}
        <div className="relative w-[180px] h-[180px] flex flex-col items-center justify-end mb-4 mx-auto">
          {/* The Hole (Light gray ellipse) */}
          <div className="absolute bottom-[20px] w-[120px] min-w-[120px] h-[36px] bg-[#e5e7eb] rounded-[100%] shadow-inner z-0 border-b-4 border-b-gray-300"></div>
          
          {/* The image container (clips the bottom half so it looks like it's inside the hole) */}
          {/* The hole is bottom-[20px], height 36px, so its center is 18px above the bottom-20. */}
          {/* We place bottom-[38px] to sit exactly flush with the center of the hole. */}
          <div className="absolute bottom-[38px] w-32 h-32 overflow-hidden z-10">
            {/* Pop-up vertical animation wrapper */}
            {/* Using a hardcoded transform-translateY initially for the first frame before animation kicks in */}
            <div className="w-full h-full animate-popup" style={{ transform: 'translateY(120%)' }}>
              {/* Continuous horizontal slider wrapper */}
              <div className="flex h-full w-max animate-slider">
                {mascots.map((src, i) => (
                  <div key={i} className="w-32 h-32 shrink-0 flex items-end justify-center pb-1">
                    <img src={src} alt="Loading Mascot" className="w-[100px] h-[100px] object-contain drop-shadow-lg" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-xl md:text-2xl font-bold tracking-wide animate-pulse drop-shadow-sm text-[#3338A0] text-center mt-2">
          {message}
        </h2>
      </div>

      <style>{`
        @keyframes popup-mascot {
          0% { transform: translateY(120%); }
          100% { transform: translateY(0); }
        }
        @keyframes slide-mascot {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-8rem * 4)); } /* w-32 = 8rem, distinct items = 4 */
        }
        .animate-popup {
          animation: popup-mascot 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
        }
        .animate-slider {
          animation: slide-mascot 3s linear infinite;
          animation-delay: 0.8s; /* Waits for popup to finish + slight pause */
        }
      `}</style>
    </div>
  )
}

export default LoadingScreen
