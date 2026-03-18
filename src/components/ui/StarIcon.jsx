import React from 'react'

/**
 * Komponen SVG bintang reusable.
 * Dipakai di Konten.jsx dan Quiz.
 *
 * @param {number} size - ukuran width/height (default: 29/28 original)
 * @param {string} fill - warna fill (default: "#FCC61D")
 * @param {string} stroke - warna stroke (default: "none")
 * @param {string} className - className tambahan
 */
const StarIcon = ({ size = 28, fill = '#FCC61D', stroke = 'none', className = '' }) => {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={fill}
      stroke={stroke}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  )
}

export default StarIcon
