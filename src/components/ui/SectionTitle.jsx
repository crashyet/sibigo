import React from 'react'

/**
 * Komponen heading section dengan border pill.
 * Dipakai di About, Konten, Contact sections.
 *
 * @param {string} title - teks heading
 * @param {string} className - className tambahan untuk container
 */
const SectionTitle = ({ title, className = '' }) => {
  return (
    <div
      className={`flex items-center justify-center border-2 border-[#3338A0] rounded-full py-3 md:py-4 animate-on-scroll ${className}`}
      data-animation="animate-fade-up"
    >
      <h2 className="font-pjs font-bold text-3xl md:text-4xl lg:text-5xl">{title}</h2>
    </div>
  )
}

export default SectionTitle
