import React from 'react'

import useScrollReveal from '../../hooks/useScrollReveal'
import Navbar from '../../components/layout/Navbar'
import Footer from '../../components/layout/Footer'

const MoreKonten = () => {
  useScrollReveal()

  return (
    <>
      <Navbar />
      <div className="px-28" id='content'>
        <section id='hero' className='flex relative w-full h-screen'>
          <div className="mx-auto mt-40">
            <svg width="1688" height="993" viewBox="0 0 1688 993" fill="none" xmlns="http://www.w3.org/2000/svg">
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
          </div>

          <div className="absolute top-0 left-0 w-full h-screen z-10">
            <div className="container mx-auto">
              <div className="flex items-center justify-center h-screen">
                <h1 className="text-4xl font-bold text-black">More Konten</h1>
              </div>
            </div>
          </div>
        </section>

        <section id='fakta'></section>
        <section id='faq'></section>
        <section id='artikel'></section>
      </div>
      <Footer />
    </>
  )
}

export default MoreKonten