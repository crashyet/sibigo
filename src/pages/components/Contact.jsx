import React from 'react'

const Contact = () => {
  return (
    <section id='contact' className='relative px-40 mt-40 mb-20'>
      <div className="flex items-center justify-center border-2 border-[#3338A0] rounded-full py-4 mb-20">
        <h2 className="font-pjs font-bold text-5xl">Contact Person</h2>
      </div>

      <div className="flex gap-20">
        {/* Kolom Kiri: Form */}
        <div className="w-2/3 flex flex-col gap-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Email"
              className="w-full bg-[#f4f4f9] border-1 border-gray-200 rounded-3xl py-6 px-8 text-2xl font-pjs text-gray-500 shadow-md focus:outline-none"
            />
          </div>
          <div className="relative">
            <input
              type="text"
              placeholder="Nama"
              className="w-full bg-[#f4f4f9] border-1 border-gray-200 rounded-3xl py-6 px-8 text-2xl font-pjs text-gray-500 shadow-md focus:outline-none"
            />
          </div>
          <div className="relative">
            <textarea
              placeholder="Massage"
              rows="5"
              className="w-full bg-[#f4f4f9] border-1 border-gray-200 rounded-3xl py-6 px-8 text-2xl font-pjs text-gray-500 shadow-md focus:outline-none resize-none"
            ></textarea>
          </div>
          <div>
            <button className="bg-[#FCC61D] text-white rounded-2xl font-pjs font-bold text-2xl py-4 px-16 shadow-[0_5px_0_#C59560] hover:bg-[#C59560] hover:shadow-none hover:translate-y-1 transition-all duration-300 cursor-pointer">
              Kirim
            </button>
          </div>
        </div>

        {/* Kolom Kanan: Kotak Informasi */}
        <div className="w-1/3 flex flex-col gap-8">
          <div className="bg-[#d9d9d9] h-[250px] rounded-3xl"></div>
          <div className="bg-[#d9d9d9] h-[300px] rounded-3xl"></div>
        </div>
      </div>

      
    </section>
  )
}

export default Contact