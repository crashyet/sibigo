import React from 'react'

const FaktaSection = () => {
  return (
    <section id='fakta' className="relative w-full max-w-[1280px] mx-auto py-20 md:py-32 font-pjs overflow-hidden">
      {/* Background Concentric Circles */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 md:mt-20">
        <div className="absolute w-[800px] h-[800px] lg:w-[1200px] lg:h-[1200px] rounded-full bg-[#FFF8D6]/40"></div>
        <div className="absolute w-[600px] h-[600px] lg:w-[900px] lg:h-[900px] rounded-full bg-[#FFF8D6]/60"></div>
        <div className="absolute w-[400px] h-[400px] lg:w-[600px] lg:h-[600px] rounded-full bg-[#FFF8D6]/80"></div>
        <div className="absolute w-[250px] h-[250px] lg:w-[350px] lg:h-[350px] rounded-full bg-[#FFF8D6]"></div>
      </div>

      {/* Header */}
      <div className="text-center w-full mb-16 md:mb-24 relative z-10 px-4">
        <h2 className="text-2xl md:text-3xl lg:text-[40px] font-bold text-[#1E2B63] inline-block relative font-pjs tracking-wide">
          Fakta Menarik Tentang Sibi
          {/* Fade underline */}
          <div className="absolute -bottom-3 lg:-bottom-4 left-0 w-[45%] h-[3px] lg:h-1 bg-linear-to-r from-[#4E54C8] to-transparent rounded-r-full"></div>
        </h2>
      </div>

      {/* Cards Container */}
      <div className="relative max-w-5xl mx-auto flex flex-col gap-6 lg:gap-0 z-10 px-4">
        
        {/* Card 1 */}
        <div className="w-full lg:w-[47%] mr-auto">
          <div className="bg-white rounded-2xl lg:rounded-[20px] p-6 md:p-8 flex items-start gap-4 md:gap-6 shadow-[4px_10px_40px_rgba(78,84,200,0.08)] border border-white hover:-translate-y-1 transition-transform">
            <div className="w-10 h-10 lg:w-12 lg:h-12 shrink-0 rounded-full bg-[#4E54C8] text-white flex items-center justify-center font-bold text-lg lg:text-xl shadow-md">
              1
            </div>
            <div className="pt-1 md:pt-2">
              <h3 className="text-[17px] md:text-xl font-bold text-[#1E2B63] mb-2 md:mb-3 font-pjs leading-snug">Digunakan Dalam Pendidikan</h3>
              <p className="text-[#5f6368] text-xs md:text-[14px] leading-relaxed md:leading-[1.7] font-pjs">
                Studi pendidikan menunjukkan SIBI mendukung proses belajar yang lebih inklusif.
              </p>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="w-full lg:w-[47%] ml-auto mt-0 lg:-mt-14">
          <div className="bg-white rounded-2xl lg:rounded-[20px] p-6 md:p-8 flex items-start gap-4 md:gap-6 shadow-[4px_10px_40px_rgba(78,84,200,0.08)] border border-white hover:-translate-y-1 transition-transform">
            <div className="w-10 h-10 lg:w-12 lg:h-12 shrink-0 rounded-full bg-[#4E54C8] text-white flex items-center justify-center font-bold text-lg lg:text-xl shadow-md">
              2
            </div>
            <div className="pt-1 md:pt-2">
              <h3 className="text-[17px] md:text-xl font-bold text-[#1E2B63] mb-2 md:mb-3 font-pjs leading-snug">Memiliki Struktur Bahasa</h3>
              <p className="text-[#5f6368] text-xs md:text-[14px] leading-relaxed md:leading-[1.7] font-pjs">
                Sistem Isyarat Bahasa Indonesia memiliki aturan dan susunan yang terstruktur, sehingga dapat digunakan sebagai sistem komunikasi yang jelas dan terarah.
              </p>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="w-full lg:w-[47%] mr-auto mt-0 lg:-mt-14">
          <div className="bg-white rounded-2xl lg:rounded-[20px] p-6 md:p-8 flex items-start gap-4 md:gap-6 shadow-[4px_10px_40px_rgba(78,84,200,0.08)] border border-white hover:-translate-y-1 transition-transform">
            <div className="w-10 h-10 lg:w-12 lg:h-12 shrink-0 rounded-full bg-[#4E54C8] text-white flex items-center justify-center font-bold text-lg lg:text-xl shadow-md">
              3
            </div>
            <div className="pt-1 md:pt-2">
              <h3 className="text-[17px] md:text-xl font-bold text-[#1E2B63] mb-2 md:mb-3 font-pjs leading-snug">Membantu Akses Komunikasi</h3>
              <p className="text-[#5f6368] text-xs md:text-[14px] leading-relaxed md:leading-[1.7] font-pjs">
                Sistem Isyarat Bahasa Indonesia membantu mempermudah komunikasi bagi penyandang Tuli agar dapat berinteraksi dengan lebih efektif.
              </p>
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="w-full lg:w-[47%] ml-auto mt-0 lg:-mt-14">
          <div className="bg-white rounded-2xl lg:rounded-[20px] p-6 md:p-8 flex items-start gap-4 md:gap-6 shadow-[4px_10px_40px_rgba(78,84,200,0.08)] border border-white hover:-translate-y-1 transition-transform">
            <div className="w-10 h-10 lg:w-12 lg:h-12 shrink-0 rounded-full bg-[#4E54C8] text-white flex items-center justify-center font-bold text-lg lg:text-xl shadow-md">
              4
            </div>
            <div className="pt-1 md:pt-2">
              <h3 className="text-[17px] md:text-xl font-bold text-[#1E2B63] mb-2 md:mb-3 font-pjs leading-snug">Dapat Dipelajari Siapa Saja</h3>
              <p className="text-[#5f6368] text-xs md:text-[14px] leading-relaxed md:leading-[1.7] font-pjs">
                Sistem Isyarat Bahasa Indonesia dapat dipelajari oleh siapa pun sebagai bentuk kepedulian dan dukungan terhadap komunikasi yang inklusif.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default FaktaSection
