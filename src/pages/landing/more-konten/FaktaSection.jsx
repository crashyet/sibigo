import React from 'react'

const FaktaSection = () => {
  return (
    <section id='fakta' className="w-full max-w-[1280px] mx-auto font-pjs ">

      {/* Header */}
      <div className="text-center w-full lg:mb-24 relative z-10 px-4 pt-8">
        <h2 className="font-pjs font-bold text-2xl md:text-3xl lg:text-4xl text-center text-[#3338A0]">
          Fakta Menarik Tentang Sibi
        </h2>
      </div>

      <div className="relative mt-10 md:mt-16 lg:mt-20 py-16 md:py-20 lg:py-24 ">
        {/* Background Concentric Circles */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 md:mt-20">
          <div className="absolute w-[600px] h-[600px] lg:w-[900px] lg:h-[900px] xl:w-[1100px] xl:h-[1100px] rounded-full bg-[#FCC61D]/20"></div>
          <div className="absolute w-[400px] h-[400px] lg:w-[700px] lg:h-[700px] xl:w-[800px] xl:h-[800px] rounded-full bg-[#FCC61D]/10"></div>
          <div className="absolute w-[200px] h-[200px] lg:w-[500px] lg:h-[500px] xl:w-[600px] xl:h-[600px] rounded-full bg-[#FCC61D]/10"></div>
        </div>

        {/* Cards Container */}
        <div className="relative mx-auto flex flex-col gap-10 lg:gap-32 z-10 px-4">

          {/* Card 1 */}
          <div className="w-full lg:w-[47%] mr-auto">
            <div className="bg-white rounded-xl lg:rounded-[18px] p-6 lg:p-8 flex flex-col shadow-[4px_12px_40px_rgba(52,59,129,0.08)] border border-[#c8cbed] hover:-translate-y-1 transition-transform duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 lg:w-12 lg:h-12 shrink-0 rounded-full bg-[#39428F] text-white flex items-center justify-center font-bold text-lg lg:text-xl shadow-sm">
                  1
                </div>
                <h3 className="text-[17px] md:text-[19px] font-bold text-[#1E2B63] font-pjs leading-snug m-0">
                  Digunakan Dalam Pendidikan
                </h3>
              </div>
              <p className="text-[#565b66] text-sm md:text-[15px] leading-relaxed md:leading-[1.7] font-pjs px-1 lg:px-2">
                Studi pendidikan menunjukkan SIBI mendukung proses belajar yang lebih inklusif.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="w-full lg:w-[47%] ml-auto mt-0 lg:-mt-16">
            <div className="bg-white rounded-xl lg:rounded-[18px] p-6 lg:p-8 flex flex-col shadow-[4px_12px_40px_rgba(52,59,129,0.08)] border border-[#c8cbed] hover:-translate-y-1 transition-transform duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 lg:w-12 lg:h-12 shrink-0 rounded-full bg-[#39428F] text-white flex items-center justify-center font-bold text-lg lg:text-xl shadow-sm">
                  2
                </div>
                <h3 className="text-[17px] md:text-[19px] font-bold text-[#1E2B63] font-pjs leading-snug m-0">
                  Memiliki Struktur Bahasa
                </h3>
              </div>
              <p className="text-[#565b66] text-sm md:text-[15px] leading-relaxed md:leading-[1.7] font-pjs px-1 lg:px-2">
                Sistem Isyarat Bahasa Indonesia memiliki aturan dan susunan yang terstruktur, sehingga dapat digunakan sebagai sistem komunikasi yang jelas dan terarah.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="w-full lg:w-[47%] mr-auto mt-0 lg:-mt-16">
            <div className="bg-white rounded-xl lg:rounded-[18px] p-6 lg:p-8 flex flex-col shadow-[4px_12px_40px_rgba(52,59,129,0.08)] border border-[#c8cbed] hover:-translate-y-1 transition-transform duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 lg:w-12 lg:h-12 shrink-0 rounded-full bg-[#39428F] text-white flex items-center justify-center font-bold text-lg lg:text-xl shadow-sm">
                  3
                </div>
                <h3 className="text-[17px] md:text-[19px] font-bold text-[#1E2B63] font-pjs leading-snug m-0">
                  Memiliki bentuk isyarat untuk imbuhan (awalan & akhiran)
                </h3>
              </div>
              <p className="text-[#565b66] text-sm md:text-[15px] leading-relaxed md:leading-[1.7] font-pjs px-1 lg:px-2">
                SIBI bisa mengekspresikan kata seperti “berjalan”, “makanan”, dll dengan sistem imbuhan seperti Bahasa Indonesia.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="w-full lg:w-[47%] ml-auto mt-0 lg:-mt-16">
            <div className="bg-white rounded-xl lg:rounded-[18px] p-6 lg:p-8 flex flex-col shadow-[4px_12px_40px_rgba(52,59,129,0.08)] border border-[#c8cbed] hover:-translate-y-1 transition-transform duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 lg:w-12 lg:h-12 shrink-0 rounded-full bg-[#39428F] text-white flex items-center justify-center font-bold text-lg lg:text-xl shadow-sm">
                  4
                </div>
                <h3 className="text-[17px] md:text-[19px] font-bold text-[#1E2B63] font-pjs leading-snug m-0">
                  Dapat Dipelajari Siapa Saja
                </h3>
              </div>
              <p className="text-[#565b66] text-sm md:text-[15px] leading-relaxed md:leading-[1.7] font-pjs px-1 lg:px-2">
                Sistem Isyarat Bahasa Indonesia dapat dipelajari oleh siapa pun termasuk pemula karena strukturnya jelas dan mudah dipahami.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default FaktaSection
