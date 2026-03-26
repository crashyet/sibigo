import React from 'react'

/**
 * Komponen kartu statistik.
 * Dipakai di Home.jsx stats banner (3 kartu identik).
 *
 * @param {string} value - angka/nilai statistik (misal "2,5 JT+")
 * @param {string} label - deskripsi statistik
 */
const StatCard = ({ value, label }) => {
  return (
    <div className="flex-1 px-4 md:px-6 lg:px-8 py-5 md:py-8 lg:py-12 bg-[#777BDB] rounded-2xl md:rounded-3xl">
      <h3 className="font-pjs font-bold text-2xl md:text-3xl lg:text-4xl text-center mb-2 md:mb-4">
        {value}
      </h3>
      <p className="font-pjs font-medium text-sm md:text-base lg:text-xl text-center">
        {label}
      </p>
    </div>
  )
}

export default StatCard
