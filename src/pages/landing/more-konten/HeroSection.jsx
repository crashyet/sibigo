import React from 'react'
import Button from '@/components/ui/Button'
import sibi from '@/assets/sibi-white.png'

const data = [
  {
    title: 'LKS SIBI',
    description: 'Latihan interaktif untuk menguji pemahaman SIBI secara bertahap dan terstruktur.',
    button: 'Mulai',
    link: '/lesson'
  },
  {
    title: 'SIBIGO Ai Pintar',
    description: 'Dapatkan jawaban cepat dan akurat seputar SIBI melalui fitur tanya jawab otomatis.',
    button: 'Mulai',
    link: '/chat'
  },
  {
    title: 'Game Edukatif',
    description: 'Game dan tantangan seru untuk belajar SIBI dengan cara yang menyenangkan.',
    button: 'Mulai',
    link: '/play'
  }
]

const HeroSection = () => {
  return (
    <section id='hero' className='relative w-full min-h-dvh pt-32 pb-20 font-pjs flex items-stretch justify-center'>
      <div className="relative w-full max-w-[1500px] mx-auto mt-4 md:mt-10 flex flex-col">
        {/* Background SVG */}
        <svg className="absolute inset-0 w-full h-full drop-shadow-2xl z-0" preserveAspectRatio="none" viewBox="0 0 1688 993" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6.51003 133.845C2.96242 76.9825 47.5674 28.6508 104.531 27.6339L1550.71 1.81704C1606.63 0.818807 1652.5 45.8743 1652.5 101.801V885.619C1652.5 943.647 1603.27 989.491 1545.39 985.366L140.25 885.219C90.291 881.658 50.672 841.687 47.5533 791.698L6.51003 133.845Z" fill="url(#paint0_linear_416_3)" />
          <mask id="mask0_416_3" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="6" y="1" width="1678" height="977">
            <path d="M6.51003 133.845C2.96242 76.9825 47.5674 28.6508 104.531 27.6339L1554.27 1.7536C1608.8 0.780137 1654.05 43.6802 1655.99 98.1848L1683.57 874.035C1685.68 933.173 1636.25 981.192 1577.19 977.38L140.881 884.672C90.6451 881.43 50.651 841.35 47.5164 791.107L6.51003 133.845Z" fill="url(#paint1_linear_416_3)" />
          </mask>
          <g mask="url(#mask0_416_3)">
            <path d="M-21 0.5H604.796C604.796 0.5 645.947 51.1193 532 141C416 232.5 -21 160.771 -21 160.771V0.5Z" fill="#FCC61D" />
            <path d="M847 21C847 21 862.148 246.568 952.5 343.5C1060.92 459.816 1222.57 356.09 1342.5 460.5C1415.82 524.335 1471.96 569.412 1483 666C1499.25 808.163 1266.5 928.5 1263 959" stroke="#3338A0" strokeWidth="50" />
            <path opacity="0.5" d="M-116.244 6C-116.244 6 -218.098 207.832 -189.715 337.268C-155.655 492.588 36.2875 485.659 86.315 636.595C116.901 728.875 142.252 796.26 102.557 885.004C44.1311 1015.62 -217.457 1000.63 -236.004 1025.1" stroke="#3338A0" strokeWidth="50" />
          </g>
          <defs>
            <linearGradient id="paint0_linear_416_3" x1="826.25" y1="1.37316e-08" x2="826.51" y2="2003.65" gradientUnits="userSpaceOnUse">
              <stop offset="0.177885" stopColor="#3338A0" />
              <stop offset="1" stopColor="#12143A" />
            </linearGradient>
            <linearGradient id="paint1_linear_416_3" x1="843.75" y1="0" x2="844" y2="1011" gradientUnits="userSpaceOnUse">
              <stop stopColor="#3338A0" />
              <stop offset="1" stopColor="#12143A" />
            </linearGradient>
          </defs>
        </svg>

        {/* Foreground Content */}
        <div className="relative z-10 w-full flex-1 flex flex-col md:flex-row p-6 md:p-10 lg:p-16 lg:px-32 pb-12 lg:pb-16 items-center justify-between lg:items-center">
          
          {/* Badge Over Yellow Blob */}
          <div className="absolute top-[4%] left-[6%] md:top-[6%] md:left-[8%] z-20">
            <h2 
              className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-[#FCC61D] tracking-wider" 
              style={{ 
                WebkitTextStroke: '1px white', 
                textShadow: '2px 3px 6px rgba(0,0,0,0.2)' 
              }}
            >
              Konten
            </h2>
          </div>

          {/* Left Column (SIBI Info) */}
          <div className="w-full md:w-[60%] h-full flex flex-col justify-center pr-4 md:pr-10 lg:pr-16 mt-12 md:mt-4 lg:mt-0">
            <img src={sibi} alt="" className='w-24 md:w-32 h-auto mb-8' />
            <p className="text-white/95 text-sm md:text-base lg:text-lg xl:text-xl leading-relaxed lg:leading-[1.7] text-justify md:text-left font-medium drop-shadow-sm mb-8">
              Sistem Isyarat Bahasa Indonesia (SIBI) adalah bahasa isyarat resmi yang digunakan dalam dunia pendidikan di Indonesia. SIBI disusun mengikuti struktur Bahasa Indonesia, sehingga memiliki tata bahasa yang sistematis, formal, dan mudah dipelajari.
            </p>
            <p className="text-white/95 text-sm md:text-base lg:text-lg xl:text-xl leading-relaxed lg:leading-[1.7] text-justify md:text-left font-medium drop-shadow-sm">
              Karena kemudahan itulah membuat SIBI sebagai langkah awal yang tepat bagi siapa saja yang ingin memahami dan mempelajari komunikasi isyarat secara lebih mudah.
            </p>
          </div>

          {/* Right Column (Cards) */}
          <div className="w-full md:w-[35%] flex flex-col justify-center gap-3 lg:gap-4 xl:gap-5 mt-8 md:mt-4 lg:mt-0 z-10 pl-0 md:pl-2 lg:pl-6">
            {data.map((item, index) => (
              <div className="bg-white rounded-xl lg:rounded-2xl p-4 lg:p-5 xl:p-6 flex flex-col shadow-lg hover:-translate-y-1 transition-transform">
                <h3 className="text-[#3338A0] font-bold text-base lg:text-lg xl:text-xl mb-1 lg:mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-[10px] sm:text-[11px] lg:text-xs xl:text-sm leading-snug mb-3 lg:mb-4">
                  {item.description}
                </p>
                <Button variant="primary" className="w-full py-1.5 lg:py-2 text-[13px] lg:text-sm xl:text-base rounded-xl" onClick={() => window.location.href = item.link}>
                  {item.button}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
