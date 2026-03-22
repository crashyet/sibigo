import React from 'react'
import alphabetIcon from '@/assets/book/lks.png'
import HeaderLine from '@/components/ui/HeaderLine'
import { Link } from 'react-router-dom'

const AlphabetView = () => {
  const lessons = [
    {
      range: 'Alfabet A-I',
      slug: 'a-i',
      description: 'Pelajari 9 huruf pertama alfabet SIBI',
      svgIcon: <svg width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M25.5 15.5826C25.5 11.6875 22.3125 8.5 18.4174 8.5H4.25V34H18.5045C25.5 34 25.5 41.0847 25.5 41.0847C25.5 41.0847 25.5 34 32.5826 34H46.75V8.5H32.5826C30.7059 8.50561 28.9077 9.25361 27.5806 10.5806C26.2536 11.9077 25.5056 13.7059 25.5 15.5826Z" fill="#0D99FF" fill-opacity="0.16"/>
                <path d="M25.5 15.5826C25.5 11.6875 22.3125 8.5 18.4174 8.5H4.25V34H18.5045C25.5 34 25.5 41.0847 25.5 41.0847M25.5 15.5826C25.5 11.6854 28.6875 8.5 32.5826 8.5H46.75V34H32.5826C25.5 34 25.5 41.0847 25.5 41.0847M25.5 15.5826V41.0847M29.4844 43.4733C29.9278 42.555 30.6185 41.7785 31.4789 41.2312C32.3392 40.6839 33.3352 40.3874 34.3549 40.375H44.625M21.5156 43.4733C21.0803 42.5487 20.3915 41.7668 19.5293 41.2183C18.6672 40.6699 17.667 40.3774 16.6451 40.375H6.375" stroke="#0D99FF" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>,
      count: '9 isyarat',
      bgColor: 'bg-[#3338A0]',
      shadowColor: 'shadow-[0_10px_20px_rgba(51,56,160,0.3)]',
    },
    
    {
      range: 'Alfabet J-R',
      slug: 'j-r',
      description: 'Pelajari 9 huruf pertama alfabet SIBI',
      svgIcon: <svg width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.417 9C22.036 9 25 11.964 25 15.583L26 15.584C26.0052 13.8394 26.701 12.1682 27.9346 10.9346C29.0911 9.77807 30.6322 9.09402 32.2578 9.00879L32.584 9H46.25V33.5H32.583C30.7249 33.5 29.2979 33.9665 28.2109 34.6914C27.1273 35.4141 26.4108 36.3736 25.9385 37.3184C25.7625 37.6705 25.6188 38.0221 25.5029 38.3604C25.3887 38.0229 25.2476 37.6726 25.0742 37.3213C24.608 36.3769 23.8997 35.4159 22.8281 34.6924C21.7533 33.9668 20.3421 33.5001 18.5049 33.5H4.75V9H18.417Z" fill="#C59560" fill-opacity="0.3" stroke="#C59560"/>
                <path d="M25.5 15.5826C25.5 11.6875 22.3125 8.5 18.4174 8.5H4.25V34H18.5045C25.5 34 25.5 41.0847 25.5 41.0847M25.5 15.5826C25.5 11.6854 28.6875 8.5 32.5826 8.5H46.75V34H32.5826C25.5 34 25.5 41.0847 25.5 41.0847M25.5 15.5826V41.0847M29.4844 43.4733C29.9278 42.555 30.6185 41.7785 31.4789 41.2312C32.3392 40.6839 33.3352 40.3874 34.3549 40.375H44.625M21.5156 43.4733C21.0803 42.5487 20.3915 41.7668 19.5293 41.2183C18.6672 40.6699 17.667 40.3774 16.6451 40.375H6.375" stroke="#C59560" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>,
      count: '9 isyarat',
      bgColor: 'bg-[#C2915A]',
      shadowColor: 'shadow-[0_10px_20px_rgba(194,145,90,0.3)]',
    },
    {
      range: 'Alfabet S-Z',
      slug: 's-z',
      description: 'Pelajari 9 huruf pertama alfabet SIBI',
      svgIcon: <svg width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.417 9C22.036 9 25 11.964 25 15.583L26 15.584C26.0052 13.8394 26.701 12.1682 27.9346 10.9346C29.0911 9.77807 30.6322 9.09402 32.2578 9.00879L32.584 9H46.25V33.5H32.583C30.7249 33.5 29.2979 33.9665 28.2109 34.6914C27.1273 35.4141 26.4108 36.3736 25.9385 37.3184C25.7625 37.6705 25.6188 38.0221 25.5029 38.3604C25.3887 38.0229 25.2476 37.6726 25.0742 37.3213C24.608 36.3769 23.8997 35.4159 22.8281 34.6924C21.7533 33.9668 20.3421 33.5001 18.5049 33.5H4.75V9H18.417Z" fill="#FCC61D" fill-opacity="0.16" stroke="#FCC61D"/>
                <path d="M25.5 15.5826C25.5 11.6875 22.3125 8.5 18.4174 8.5H4.25V34H18.5045C25.5 34 25.5 41.0847 25.5 41.0847M25.5 15.5826C25.5 11.6854 28.6875 8.5 32.5826 8.5H46.75V34H32.5826C25.5 34 25.5 41.0847 25.5 41.0847M25.5 15.5826V41.0847V15.5826ZM29.4844 43.4733C29.9278 42.555 30.6185 41.7785 31.4789 41.2312C32.3392 40.6839 33.3352 40.3874 34.3549 40.375H44.625M21.5156 43.4733C21.0803 42.5487 20.3915 41.7668 19.5293 41.2183C18.6672 40.6699 17.667 40.3774 16.6451 40.375H6.375" fill="#FCC61D" fill-opacity="0.16"/>
                <path d="M25.5 15.5826C25.5 11.6875 22.3125 8.5 18.4174 8.5H4.25V34H18.5045C25.5 34 25.5 41.0847 25.5 41.0847M25.5 15.5826C25.5 11.6854 28.6875 8.5 32.5826 8.5H46.75V34H32.5826C25.5 34 25.5 41.0847 25.5 41.0847M25.5 15.5826V41.0847M29.4844 43.4733C29.9278 42.555 30.6185 41.7785 31.4789 41.2312C32.3392 40.6839 33.3352 40.3874 34.3549 40.375H44.625M21.5156 43.4733C21.0803 42.5487 20.3915 41.7668 19.5293 41.2183C18.6672 40.6699 17.667 40.3774 16.6451 40.375H6.375" stroke="#FCC61D" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>,
      count: '8 isyarat',
      bgColor: 'bg-[#FBC02D]',
      shadowColor: 'shadow-[0_10px_20px_rgba(251,192,45,0.3)]',
    },
  ]

  return (
    <div className="-ml-40 relative overflow-hidden h-screen">
      {/* Decorative background blobs */}
      <div className="absolute -top-10 right-0">
        <svg width="318" height="283" viewBox="0 0 318 283" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path opacity="0.2" d="M527 12C527 161.669 409.027 283 263.5 283C117.973 283 0 161.669 0 12C0 -137.669 117.973 -259 263.5 -259C409.027 -259 527 -137.669 527 12ZM48.5969 12C48.5969 134.066 144.812 233.02 263.5 233.02C382.188 233.02 478.403 134.066 478.403 12C478.403 -110.066 382.188 -209.02 263.5 -209.02C144.812 -209.02 48.5969 -110.066 48.5969 12Z" fill="#FCC61D"/>
        </svg>
      </div>
      <div className="absolute -bottom-20 right-0">
        <svg width="758" height="563" viewBox="0 0 758 563" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path opacity="0.2" d="M861.537 24.3275C861.537 24.3275 641.519 76.3115 560.74 181.355C463.807 307.404 592.671 449.827 509.373 585.274C458.445 668.084 423.199 730.862 329.735 757.613C192.171 796.986 35.2457 587.159 4.58498 588.715" stroke="#3338A0" stroke-width="50"/>
        </svg>
      </div>

      <div className="flex flex-col items-center pt-18">
        {/* LKS Header Badge */}
        <HeaderLine title='LKS' variant1='right' variant2='left' />

        <h2 className="text-4xl font-bold text-[#2D2D2D] mb-2 tracking-tight">Materi</h2>
        <p className="text-gray-500 text-lg mb-24 text-center">
          Pelajari huruf SIBI dari tingkat dasar hingga mahir.
        </p>

        {/* Section Title with Icon */}
        <div className="w-full max-w-5xl flex items-center gap-5 mb-10 px-4">
          <div className="w-20 h-20 rounded-2xl overflow-hidden shadow-md shrink-0">
            <img src={alphabetIcon} alt="Huruf Alfabet" className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col">
            <h3 className="text-3xl font-bold text-[#2D2D2D]">Huruf Alfabet</h3>
            <span className="text-gray-500 font-medium text-lg">3 pelajaran</span>
          </div>
        </div>

        {/* Lesson Cards */}
        <div className="w-full max-w-5xl flex flex-col gap-6 px-4 pb-12">
          {lessons.map((lesson, index) => (
            <Link
              to={`/lesson/alphabet/${lesson.slug}`}
              key={index}
              className={`${lesson.bgColor} ${lesson.shadowColor} w-full rounded-[28px] p-6 flex items-center justify-between text-white hover:scale-[1.02] transition-all duration-300 cursor-pointer group text-left`}
            >
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 bg-white backdrop-blur-md rounded-2xl flex items-center justify-center p-3">
                  {lesson.svgIcon}
                </div>
                <div className="flex flex-col">
                  <h4 className="text-xl font-bold">{lesson.range}</h4>
                  <p className="text-white/80 text-lg font-medium">{lesson.description}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-lg font-medium text-white/90">
                <span>{lesson.count}</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AlphabetView
