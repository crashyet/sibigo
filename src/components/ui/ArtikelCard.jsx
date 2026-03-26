import React from 'react'
import { Link } from 'react-router-dom'

/**
 * Komponen kartu artikel reusable.
 *
 * @param {number} id - ID artikel
 * @param {string} image - URL gambar
 * @param {string} category - kategori artikel
 * @param {string} title - judul artikel
 * @param {string} description - deskripsi singkat
 * @param {string} date - tanggal artikel
 */
const ArtikelCard = ({ id, image, category, title, description, date }) => {
  return (
    <div className="w-full max-w-[514px] bg-white rounded-[24px] md:rounded-[40px] shadow-lg hover:shadow-2xl overflow-hidden border border-black p-3 md:p-4 font-pjs transition-all duration-300 hover:-translate-y-1 mx-auto">
      {/* Container Gambar */}
      <div className="relative rounded-[18px] md:rounded-[30px] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-[180px] md:h-[250px] object-cover hover:scale-105 transition-transform duration-500"
        />
        {/* Badge Kategori */}
        <div className="absolute top-3 right-3 md:top-4 md:right-4 bg-[#FFCB2E] text-white px-4 py-1 md:px-8 md:py-2 rounded-full font-semibold text-sm md:text-lg shadow-sm">
          {category}
        </div>
      </div>

      {/* Konten Teks */}
      <div className="mt-4 md:mt-6 px-2 md:px-4 pb-2 md:pb-4">
        <h2 className="text-[#2D2D2D] text-lg md:text-2xl font-bold leading-tight mb-2 md:mb-4 line-clamp-2 min-h-[56px]">
          {title}
        </h2>

        <p className="text-[#666666] text-sm md:text-lg leading-relaxed line-clamp-3 mb-3 md:mb-4">
          {description}
        </p>

        <Link
          to={`/artikel/${id}`}
          className="text-[#5B5FC7] text-sm md:text-lg font-medium inline-block hover:underline cursor-pointer"
        >
          Lihat Selengkapnya
        </Link>

        <div className="mt-6 md:mt-8 text-[#757575] text-base md:text-xl font-medium">
          {date}
        </div>
      </div>
    </div>
  )
}

export default ArtikelCard
