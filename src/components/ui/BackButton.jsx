import React from 'react'
import { Link } from 'react-router-dom'

const variants = {
  white: '#FFFFFF',
  black: '#000000',
  gray: '#424242',
}

const BackButton = ({ to, variant, onClick }) => {
  if (onClick) {
    return (
      <button onClick={onClick} className={`flex gap-3 items-center mb-4 cursor-pointer bg-transparent border-none p-0`}>
        <svg width="16" height="20" viewBox="0 0 16 27" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M0.610548 11.7854L12.396 -6.48499e-05L15.3418 2.94577L5.0293 13.2583L15.3418 23.5708L12.396 26.5166L0.610548 14.7312C0.219983 14.3405 0.000576019 13.8107 0.000576019 13.2583C0.000576019 12.7058 0.219983 12.176 0.610548 11.7854Z" fill={variants[variant]} />
        </svg>
        <h2 className={`font-bold text-xl text-[${variants[variant]}]`}>Kembali</h2>
      </button>
    )
  }

  return (
    <Link to={to} className={`flex gap-3 items-center mb-4`}>
      <svg width="16" height="20" viewBox="0 0 16 27" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M0.610548 11.7854L12.396 -6.48499e-05L15.3418 2.94577L5.0293 13.2583L15.3418 23.5708L12.396 26.5166L0.610548 14.7312C0.219983 14.3405 0.000576019 13.8107 0.000576019 13.2583C0.000576019 12.7058 0.219983 12.176 0.610548 11.7854Z" fill={variants[variant]} />
      </svg>
      <h2 className={`font-bold text-xl text-[${variants[variant]}]`}>Kembali</h2>
    </Link>
  )
}

export default BackButton