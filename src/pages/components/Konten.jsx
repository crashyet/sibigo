import React from 'react'

import maskot5 from '../../assets/maskot/maskot5.png'
import maskot6 from '../../assets/maskot/maskot6.png'
import maskot7 from '../../assets/maskot/maskot7.png'
import maskot8 from '../../assets/maskot/maskot8.png'

const Konten = () => {
  return (
    <section id='konten' className=''>
      <div className="relative px-40 mt-40">
        <div className="flex items-center justify-center border-2 border-[#3338A0] rounded-full py-4">
          <h2 className="font-pjs font-bold text-5xl">Konten</h2>
        </div>

        <div className="flex flex-col items-center justify-center mt-24">
          <h2 className='font-pjs font-bold text-black text-6xl'>Belajar SIBI Jadi Lebih Seru</h2>
          <p className='font-pjs text-4xl mt-18 text-center px-24'>Platform belajar Sistem Isyarat Bahasa Indonesia dengan sistem level, kuis interaktif, dan materi bertahap yang dirancang untuk pemula hingga mahir.</p>
        </div>

        <div className="flex items-center justify-between mt-12 px-10">
          <div className="h-2 rounded-full w-[314px] bg-gradient-to-r from-[#ffffff] to-[#3338A0]"></div>
          <div className="flex items-center gap-5">
            <div className="py-2.5 px-12 border-1 border-black rounded-full font-pjs font-bold text-3xl">Ai Pintar</div>
            <div className="py-2.5 px-12 border-1 border-black rounded-full font-pjs font-bold text-3xl">LKS Sibi</div>
            <div className="py-2.5 px-12 border-1 border-black rounded-full font-pjs font-bold text-3xl">Game Edukatif</div>
          </div>
          <div className="h-2 rounded-full w-[314px] bg-gradient-to-r from-[#3338A0] to-[#ffffff]"></div>
        </div>

        <div className="relative mt-30 flex justify-between">
          <div className="relative flex flex-col justify-center w-fit h-fit pt-5 pb-14 px-9 mt-18 border-1 border-[#3338A0] rounded-3xl shadow-[0_0_10px_0px] shadow-[#3338A0]/50 ">
            <img src={maskot5} alt="" className='absolute top-0 left-0' />
            <h2 className='font-pjs font-semibold text-base text-end mr-6 mb-2.5'>@ LKS Sibi</h2>
            <div className="bg-[#d9d9d9] h-[386px] w-[381px] rounded-3xl">

            </div>
            <div className="mb-10 mt-5">
              <div className="flex items-center gap-2">
                <h2 className='font-pjs font-bold text-xl'>SIBIGO</h2>
                <p className='font-pjs font-medium text-base'>Latihan interaktif untuk menguji</p>
                <div className="flex items-center gap-1 ml-2">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_155_672)">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M15 6.75C16.245 6.75 17.25 7.755 17.25 9C17.25 10.245 16.245 11.25 15 11.25H14.43L14.835 11.655C15.2564 12.0769 15.493 12.6487 15.493 13.245C15.493 13.8413 15.2564 14.4131 14.835 14.835C14.4131 15.2564 13.8413 15.493 13.245 15.493C12.6487 15.493 12.0769 15.2564 11.655 14.835L11.25 14.43V15C11.25 16.245 10.245 17.25 9 17.25C7.755 17.25 6.75 16.245 6.75 15V14.43L6.345 14.835C5.92312 15.2564 5.35125 15.493 4.755 15.493C4.15875 15.493 3.58688 15.2564 3.165 14.835C2.74365 14.4131 2.50698 13.8413 2.50698 13.245C2.50698 12.6487 2.74365 12.0769 3.165 11.655L3.57 11.25H3C1.755 11.25 0.75 10.245 0.75 9C0.75 7.755 1.755 6.75 3 6.75H3.57L3.165 6.345C2.74365 5.92312 2.50698 5.35125 2.50698 4.755C2.50698 4.15875 2.74365 3.58688 3.165 3.165C3.58688 2.74365 4.15875 2.50698 4.755 2.50698C5.35125 2.50698 5.92312 2.74365 6.345 3.165L6.75 3.57V3C6.75 1.755 7.755 0.75 9 0.75C10.245 0.75 11.25 1.755 11.25 3V3.57L11.655 3.165C12.0769 2.74365 12.6487 2.50698 13.245 2.50698C13.8413 2.50698 14.4131 2.74365 14.835 3.165C15.2564 3.58688 15.493 4.15875 15.493 4.755C15.493 5.35125 15.2564 5.92312 14.835 6.345L14.43 6.75H15ZM12 9C12 9.79565 11.6839 10.5587 11.1213 11.1213C10.5587 11.6839 9.79565 12 9 12C8.20435 12 7.44129 11.6839 6.87868 11.1213C6.31607 10.5587 6 9.79565 6 9C6 8.20435 6.31607 7.44129 6.87868 6.87868C7.44129 6.31607 8.20435 6 9 6C9.79565 6 10.5587 6.31607 11.1213 6.87868C11.6839 7.44129 12 8.20435 12 9Z" fill="#F222CC" />
                    </g>
                    <defs>
                      <clipPath id="clip0_155_672">
                        <rect width="18" height="18" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.59996 14.7319C6.38796 14.7319 6.87996 14.1079 6.68346 13.5499M6.68346 13.5499C6.68346 13.3574 6.76346 13.3229 6.68346 13.1179C6.60346 12.9129 6.05696 13.3764 6.25396 13.4679C6.48696 13.5749 6.42696 13.5499 6.68346 13.5499ZM6.68346 13.5499C7.27396 13.7469 7.79946 13.5499 8.06196 12.7619M18.9625 13.0899C19.7095 13.5169 19.783 12.5649 19.455 12.1049C19.077 11.5764 18.2725 12.0224 17.912 11.4814C17.567 10.9639 17.629 10.0149 16.8135 9.71293C16.756 9.69143 16.728 9.62293 16.7605 9.57143C17.795 7.92643 19.7205 7.72143 21.425 8.49393C22.18 8.83593 22.3735 8.24693 22.18 7.93543C21.4275 6.72543 17.937 6.39493 15.7035 8.47093C15.6875 8.48521 15.6673 8.49398 15.646 8.49593C12.941 8.69393 11.3635 9.05843 9.17846 10.5949M18.9625 13.0899C17.9335 12.5024 17.2185 12.9979 16.697 12.7619C16.194 12.5344 16.0235 12.1544 15.537 11.9319C15.5207 11.9247 15.5027 11.9225 15.4851 11.9255C15.4676 11.9285 15.4514 11.9367 15.4385 11.9489C15.3095 12.0673 15.1785 12.1809 15.0455 12.2899M18.9625 13.0899C18.9625 13.0899 18.7805 13.4799 18.5625 13.4799C17.8735 13.4799 16.734 13.5264 16.406 13.3759C15.765 13.0829 15.0455 12.2899 15.0455 12.2899M9.17846 10.5949C9.67446 11.1619 9.89346 13.3884 8.39946 14.8519C9.15446 15.4099 10.5575 16.1169 11.3725 16.3859M9.17846 10.5949C9.08423 10.4871 8.99171 10.3777 8.90096 10.2669M15.0455 12.2899C13.6955 13.3934 12.1285 14.0194 10.679 14.4349C10.665 14.4387 10.6522 14.4458 10.6416 14.4556C10.631 14.4654 10.6229 14.4776 10.618 14.4912C10.6131 14.5048 10.6115 14.5193 10.6134 14.5337C10.6153 14.548 10.6207 14.5616 10.629 14.5734C11.055 15.1499 11.6405 15.3099 12.199 15.6514C12.79 16.0124 12.4615 17.0299 11.608 16.5049C11.5205 16.4509 11.451 16.4529 11.3725 16.3859M11.3725 16.3859C11.608 16.8329 11.3725 17.0304 11.0825 17.0304C10.2025 17.0304 7.60546 15.4294 7.60546 15.4294M8.39946 14.8514C8.17296 15.0734 7.90296 15.2664 7.60546 15.4294M7.60546 15.4294C6.35746 16.1114 4.63046 16.2504 3.65596 15.6514M8.90096 10.2669C8.41646 9.67593 6.92296 7.29293 6.42046 7.44343C5.91796 7.59393 6.12496 9.01893 5.89496 10.2669C5.17296 10.2669 4.28696 10.6474 3.76096 11.1859M8.90096 10.2669C8.90096 10.2669 7.27396 11.7114 5.89546 10.2669M2.67796 12.7619C2.51346 13.2869 2.51046 14.2664 3.07146 15.0929C3.23246 15.3304 3.43146 15.5129 3.65596 15.6514M2.67796 12.7619C2.08746 12.0724 1.50446 10.5729 1.85696 10.2669C2.20946 9.96093 3.07196 10.8249 3.76096 11.1859M2.67796 12.7619C2.72763 12.6043 2.79696 12.4469 2.88596 12.2899M3.65596 15.6514C4.31946 14.2394 3.65596 13.2874 2.88596 12.2899M3.76096 11.1859C3.39396 11.5624 3.09096 11.9259 2.88596 12.2899" stroke="#F29822" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M6.93359 12.5293C7.1407 12.5293 7.30859 12.3614 7.30859 12.1543C7.30859 11.9472 7.1407 11.7793 6.93359 11.7793C6.72649 11.7793 6.55859 11.9472 6.55859 12.1543C6.55859 12.3614 6.72649 12.5293 6.93359 12.5293Z" fill="#F29822" />
                    <path d="M4.82812 13.7417C5.03523 13.7417 5.20312 13.5738 5.20312 13.3667C5.20312 13.1596 5.03523 12.9917 4.82812 12.9917C4.62102 12.9917 4.45312 13.1596 4.45312 13.3667C4.45312 13.5738 4.62102 13.7417 4.82812 13.7417Z" fill="#F29822" />
                  </svg>
                </div>
              </div>
              <p className='font-pjs font-medium text-base'>pemahaman SIBI secara bertahap dan terstruktur.</p>
            </div>
            <button className="bg-[#FCC61D] text-[#f7f7f7] rounded-3xl font-pjs font-bold text-xl py-2.5 shadow-[0_5px_0_#C59560] hover:bg-[#C59560] hover:shadow-none hover:translate-y-1 transition-all duration-300 cursor-pointer">Coba</button>
          </div>

          <div>
            <div className="relative flex flex-col justify-center w-fit pt-5 pb-5 px-9 border-1 border-[#3338A0] rounded-3xl shadow-[0_0_10px_0px] shadow-[#3338A0]/50">
              <img src={maskot6} alt="" className='absolute top-3 right-10' />
              <h2 className='font-pjs font-semibold text-base mr-6 mb-2.5'>Pendamping belajar yang  menjawab pertanyaan seputar SIBI.</h2>
              <div className="bg-[#d9d9d9] h-[189px] w-[550px] rounded-t-3xl"></div>

              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center gap-3">
                  <div className="w-[75px] h-[75px] rounded-full bg-[#d9d9d9]"></div>
                  <div className="font-pjs">
                    <h3 className='font-bold text-xl'>SIBIGO</h3>
                    <p className='font-medium text-sm'>Ai Pintar</p>
                  </div>
                </div>
                <div className="flex gap-1">
                  <svg width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.2656 0L17.6333 10.3647H28.5315L19.7147 16.7705L23.0824 27.1353L14.2656 20.7295L5.44885 27.1353L8.81656 16.7705L-0.00022316 10.3647H10.8979L14.2656 0Z" fill="#FCC61D" />
                  </svg>
                  <svg width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.2656 0L17.6333 10.3647H28.5315L19.7147 16.7705L23.0824 27.1353L14.2656 20.7295L5.44885 27.1353L8.81656 16.7705L-0.00022316 10.3647H10.8979L14.2656 0Z" fill="#FCC61D" />
                  </svg>
                  <svg width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.2656 0L17.6333 10.3647H28.5315L19.7147 16.7705L23.0824 27.1353L14.2656 20.7295L5.44885 27.1353L8.81656 16.7705L-0.00022316 10.3647H10.8979L14.2656 0Z" fill="#FCC61D" />
                  </svg>
                  <svg width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.2656 0L17.6333 10.3647H28.5315L19.7147 16.7705L23.0824 27.1353L14.2656 20.7295L5.44885 27.1353L8.81656 16.7705L-0.00022316 10.3647H10.8979L14.2656 0Z" fill="#FCC61D" />
                  </svg>
                  <svg width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.2656 0L17.6333 10.3647H28.5315L19.7147 16.7705L23.0824 27.1353L14.2656 20.7295L5.44885 27.1353L8.81656 16.7705L-0.00022316 10.3647H10.8979L14.2656 0Z" fill="#FCC61D" />
                  </svg>

                </div>
              </div>
            </div>

            <div className="mt-12">
              <div className="flex justify-between">
                <div className="relative flex flex-col justify-center w-fit py-6 px-7 border-1 border-[#3338A0] rounded-3xl shadow-lg">
                  <div className="bg-[#d9d9d9] h-[245px] w-[245px] rounded-2xl"></div>
                </div>
                <div className="relative flex flex-col justify-center w-fit py-6 px-7 border-1 border-[#3338A0] rounded-3xl shadow-lg">
                  <div className="bg-[#d9d9d9] h-[245px] w-[245px] rounded-2xl"></div>
                </div>
              </div>

              <div className="flex justify-between mt-9">
                <div className="relative flex flex-col justify-center w-fit py-6 px-7 border-1 border-[#3338A0] rounded-3xl">
                  <div className="bg-[#d9d9d9] h-[245px] w-[245px] rounded-2xl"></div>
                </div>
                <div className="relative flex flex-col justify-center w-fit py-6 px-7 border-1 border-[#3338A0] rounded-3xl">
                  <div className="bg-[#d9d9d9] h-[245px] w-[245px] rounded-2xl"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative flex flex-col justify-center w-fit h-fit pt-5 pb-14 px-9 mt-18 border-1 border-[#3338A0] rounded-3xl shadow-[0_0_10px_0px] shadow-[#3338A0]/50 ">
            <img src={maskot7} alt="" className='absolute top-0 right-0' />
            <h2 className='font-pjs font-semibold text-base mr-6 mb-2.5'>@ Game Edukatif</h2>
            <div className="bg-[#d9d9d9] h-[386px] w-[381px] rounded-3xl">

            </div>
            <div className="mb-10 mt-5">
              <div className="flex items-center gap-2">
                <h2 className='font-pjs font-bold text-xl'>SIBIGO</h2>
                <p className='font-pjs font-medium text-base'>Game dan tantangan seru untuk belajar</p>
              </div>
              <div className="flex">
                <p className='font-pjs font-medium text-base'>SIBI dengan cara yang menyenangkan.</p>
                <div className="flex items-center gap-1 ml-2">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_155_672)">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M15 6.75C16.245 6.75 17.25 7.755 17.25 9C17.25 10.245 16.245 11.25 15 11.25H14.43L14.835 11.655C15.2564 12.0769 15.493 12.6487 15.493 13.245C15.493 13.8413 15.2564 14.4131 14.835 14.835C14.4131 15.2564 13.8413 15.493 13.245 15.493C12.6487 15.493 12.0769 15.2564 11.655 14.835L11.25 14.43V15C11.25 16.245 10.245 17.25 9 17.25C7.755 17.25 6.75 16.245 6.75 15V14.43L6.345 14.835C5.92312 15.2564 5.35125 15.493 4.755 15.493C4.15875 15.493 3.58688 15.2564 3.165 14.835C2.74365 14.4131 2.50698 13.8413 2.50698 13.245C2.50698 12.6487 2.74365 12.0769 3.165 11.655L3.57 11.25H3C1.755 11.25 0.75 10.245 0.75 9C0.75 7.755 1.755 6.75 3 6.75H3.57L3.165 6.345C2.74365 5.92312 2.50698 5.35125 2.50698 4.755C2.50698 4.15875 2.74365 3.58688 3.165 3.165C3.58688 2.74365 4.15875 2.50698 4.755 2.50698C5.35125 2.50698 5.92312 2.74365 6.345 3.165L6.75 3.57V3C6.75 1.755 7.755 0.75 9 0.75C10.245 0.75 11.25 1.755 11.25 3V3.57L11.655 3.165C12.0769 2.74365 12.6487 2.50698 13.245 2.50698C13.8413 2.50698 14.4131 2.74365 14.835 3.165C15.2564 3.58688 15.493 4.15875 15.493 4.755C15.493 5.35125 15.2564 5.92312 14.835 6.345L14.43 6.75H15ZM12 9C12 9.79565 11.6839 10.5587 11.1213 11.1213C10.5587 11.6839 9.79565 12 9 12C8.20435 12 7.44129 11.6839 6.87868 11.1213C6.31607 10.5587 6 9.79565 6 9C6 8.20435 6.31607 7.44129 6.87868 6.87868C7.44129 6.31607 8.20435 6 9 6C9.79565 6 10.5587 6.31607 11.1213 6.87868C11.6839 7.44129 12 8.20435 12 9Z" fill="#F222CC" />
                    </g>
                    <defs>
                      <clipPath id="clip0_155_672">
                        <rect width="18" height="18" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.59996 14.7319C6.38796 14.7319 6.87996 14.1079 6.68346 13.5499M6.68346 13.5499C6.68346 13.3574 6.76346 13.3229 6.68346 13.1179C6.60346 12.9129 6.05696 13.3764 6.25396 13.4679C6.48696 13.5749 6.42696 13.5499 6.68346 13.5499ZM6.68346 13.5499C7.27396 13.7469 7.79946 13.5499 8.06196 12.7619M18.9625 13.0899C19.7095 13.5169 19.783 12.5649 19.455 12.1049C19.077 11.5764 18.2725 12.0224 17.912 11.4814C17.567 10.9639 17.629 10.0149 16.8135 9.71293C16.756 9.69143 16.728 9.62293 16.7605 9.57143C17.795 7.92643 19.7205 7.72143 21.425 8.49393C22.18 8.83593 22.3735 8.24693 22.18 7.93543C21.4275 6.72543 17.937 6.39493 15.7035 8.47093C15.6875 8.48521 15.6673 8.49398 15.646 8.49593C12.941 8.69393 11.3635 9.05843 9.17846 10.5949M18.9625 13.0899C17.9335 12.5024 17.2185 12.9979 16.697 12.7619C16.194 12.5344 16.0235 12.1544 15.537 11.9319C15.5207 11.9247 15.5027 11.9225 15.4851 11.9255C15.4676 11.9285 15.4514 11.9367 15.4385 11.9489C15.3095 12.0673 15.1785 12.1809 15.0455 12.2899M18.9625 13.0899C18.9625 13.0899 18.7805 13.4799 18.5625 13.4799C17.8735 13.4799 16.734 13.5264 16.406 13.3759C15.765 13.0829 15.0455 12.2899 15.0455 12.2899M9.17846 10.5949C9.67446 11.1619 9.89346 13.3884 8.39946 14.8519C9.15446 15.4099 10.5575 16.1169 11.3725 16.3859M9.17846 10.5949C9.08423 10.4871 8.99171 10.3777 8.90096 10.2669M15.0455 12.2899C13.6955 13.3934 12.1285 14.0194 10.679 14.4349C10.665 14.4387 10.6522 14.4458 10.6416 14.4556C10.631 14.4654 10.6229 14.4776 10.618 14.4912C10.6131 14.5048 10.6115 14.5193 10.6134 14.5337C10.6153 14.548 10.6207 14.5616 10.629 14.5734C11.055 15.1499 11.6405 15.3099 12.199 15.6514C12.79 16.0124 12.4615 17.0299 11.608 16.5049C11.5205 16.4509 11.451 16.4529 11.3725 16.3859M11.3725 16.3859C11.608 16.8329 11.3725 17.0304 11.0825 17.0304C10.2025 17.0304 7.60546 15.4294 7.60546 15.4294M8.39946 14.8514C8.17296 15.0734 7.90296 15.2664 7.60546 15.4294M7.60546 15.4294C6.35746 16.1114 4.63046 16.2504 3.65596 15.6514M8.90096 10.2669C8.41646 9.67593 6.92296 7.29293 6.42046 7.44343C5.91796 7.59393 6.12496 9.01893 5.89496 10.2669C5.17296 10.2669 4.28696 10.6474 3.76096 11.1859M8.90096 10.2669C8.90096 10.2669 7.27396 11.7114 5.89546 10.2669M2.67796 12.7619C2.51346 13.2869 2.51046 14.2664 3.07146 15.0929C3.23246 15.3304 3.43146 15.5129 3.65596 15.6514M2.67796 12.7619C2.08746 12.0724 1.50446 10.5729 1.85696 10.2669C2.20946 9.96093 3.07196 10.8249 3.76096 11.1859M2.67796 12.7619C2.72763 12.6043 2.79696 12.4469 2.88596 12.2899M3.65596 15.6514C4.31946 14.2394 3.65596 13.2874 2.88596 12.2899M3.76096 11.1859C3.39396 11.5624 3.09096 11.9259 2.88596 12.2899" stroke="#F29822" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M6.93359 12.5293C7.1407 12.5293 7.30859 12.3614 7.30859 12.1543C7.30859 11.9472 7.1407 11.7793 6.93359 11.7793C6.72649 11.7793 6.55859 11.9472 6.55859 12.1543C6.55859 12.3614 6.72649 12.5293 6.93359 12.5293Z" fill="#F29822" />
                    <path d="M4.82812 13.7417C5.03523 13.7417 5.20312 13.5738 5.20312 13.3667C5.20312 13.1596 5.03523 12.9917 4.82812 12.9917C4.62102 12.9917 4.45312 13.1596 4.45312 13.3667C4.45312 13.5738 4.62102 13.7417 4.82812 13.7417Z" fill="#F29822" />
                  </svg>
                </div>
              </div>
            </div>
            <button className="bg-[#FCC61D] text-[#f7f7f7] rounded-3xl font-pjs font-bold text-xl py-2.5 shadow-[0_5px_0_#C59560] hover:bg-[#C59560] hover:shadow-none hover:translate-y-1 transition-all duration-300 cursor-pointer">Coba</button>
          </div>
          {/* Gradient Putih di Bawah (Hanya untuk Kartu) */}
          <div className="absolute bottom-0 left-0 w-full h-100 bg-linear-to-t from-white to-transparent pointer-events-none z-10"></div>
        </div>
      </div>

      {/* Banner Biru di Bawah */}
      <div className="flex items-center gap-50 px-38 pt-5 pb-20 mt-20 overflow-hidden relative"
        style={{background: `linear-gradient(to bottom, #3338A0 79%, #23266D 89%, #12143A 100%)`}}
      >
        <div className="ml-20">
          <img src={maskot8} alt="" className="" />
        </div>
        <div className="text-white font-pjs">
          <h2 className="font-bold text-6xl leading-tight mb-6">Ayo!! Belajar bareng <br />dengan Sibigo</h2>
          <p className="text-3xl mb-16 opacity-90 leading-tight tracking-wider">Masuk ke dunia pembelajaran interaktif dengan <br />latihan dan tantangan seru.</p>
          <button className="bg-white text-[#3338A0] rounded-3xl font-pjs font-bold text-3xl px-20 py-5 shadow-[0_5px_0_#D0D0D0] hover:bg-[#D0D0D0] hover:shadow-none hover:translate-y-1 transition-all duration-300 cursor-pointer">Liat Semua Konten</button>
        </div>
      </div>
    </section>
  )
}

export default Konten