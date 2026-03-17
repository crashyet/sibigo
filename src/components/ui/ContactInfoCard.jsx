import React from 'react'

/**
 * Komponen kartu informasi kontak.
 * Dipakai di Contact.jsx (3 kartu info: telepon, email, alamat).
 *
 * @param {React.ReactNode} icon - SVG icon
 * @param {string} title - judul kartu (misal "Nomer Telephone")
 * @param {string} value - isi info (misal "+62 856 9555 4326")
 */
const ContactInfoCard = ({ icon, title, value }) => {
  return (
    <div className="bg-[#F0F3FF] rounded-3xl p-6 flex items-center gap-6 text-[#1E2B63]">
      <div className="bg-white/10 p-2 rounded-lg">{icon}</div>
      <div>
        <h5 className="font-bold text-xl">{title}</h5>
        <p className="text-sm opacity-80">{value}</p>
      </div>
    </div>
  )
}

export default ContactInfoCard
