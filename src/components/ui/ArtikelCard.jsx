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
    <div className="w-[514px] bg-white rounded-[40px] shadow-xl overflow-hidden border border-black p-4 font-pjs">
      {/* Container Gambar */}
      <div className="relative rounded-[30px] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-[250px] object-cover"
        />
        {/* Badge Kategori */}
        <div className="absolute top-4 right-4 bg-[#FFCB2E] text-white px-8 py-2 rounded-full font-semibold text-lg shadow-sm">
          {category}
        </div>
      </div>

      {/* Konten Teks */}
      <div className="mt-6 px-4 pb-4">
        <h2 className="text-[#2D2D2D] text-2xl font-bold leading-tight mb-4">
          {title}
        </h2>

        <p className="text-[#666666] text-lg leading-relaxed line-clamp-2">
          {description}
        </p>

        <Link
          to={`/artikel/${id}`}
          className="text-[#5B5FC7] text-lg font-medium mt-2 inline-block hover:underline cursor-pointer"
        >
          Lihat Selengkapnya
        </Link>

        <div className="mt-8 text-[#757575] text-xl">
          {date}
        </div>
      </div>
    </div>
  )
}

export default ArtikelCard
