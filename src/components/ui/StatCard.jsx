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
    <div className="px-6 md:px-9 py-5 md:py-10 lg:py-14 bg-[#777BDB] rounded-2xl md:rounded-3xl">
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
