import React from 'react'

import SectionTitle from '../../../components/ui/SectionTitle'
import ContactInfoCard from '../../../components/ui/ContactInfoCard'

const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
)

const EmailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
)

const LocationIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
)

const CONTACT_INFO = [
  { icon: <PhoneIcon />, title: 'Nomer Telephone', value: '+62 856 9555 4326' },
  { icon: <EmailIcon />, title: 'Email', value: 'sibigo@gmail.com' },
  { icon: <LocationIcon />, title: 'Alamat', value: 'Jl. Dr. Soetomo, Karangcengis, Kabupaten Cilacap' },
]

const SOCIAL_LINKS = [
  { icon: 'facebook', path: 'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z' },
  { icon: 'linkedin', path: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z M2 9h4v12H2z M4 2a2 2 0 110 4 2 2 0 010-4z' },
  { icon: 'youtube', path: 'M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 00-1.94 2C1 8.14 1 12 1 12s0 3.86.46 5.58a2.78 2.78 0 001.94 2c1.72.42 8.6.42 8.6.42s6.88 0 8.6-.42a2.78 2.78 0 001.94-2C23 15.86 23 12 23 12s0-3.86-.46-5.58z M9.75 15.02V8.98L15.5 12l-5.75 3.02z' },
  { icon: 'instagram', path: 'M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z M21.23 6.29a2.38 2.38 0 11-4.76 0 2.38 2.38 0 014.76 0z M12 21.35c-5.17 0-9.35-4.18-9.35-9.35S6.83 2.65 12 2.65s9.35 4.18 9.35 9.35-4.18 9.35-9.35 9.35z' },
  { icon: 'tiktok', path: 'M12.525.02c1.31 0 2.57.51 3.51 1.44.3.3.56.63.78.98.81-.03 1.63-.03 2.44 0v3.42c-.81 0-1.61-.02-2.42-.05 0 2.11-.04 4.22-.05 6.33 0 3.31-2.69 6-6 6-3.31 0-6-2.69-6-6 0-3.31 2.69-6 6-6 .31 0 .61.02.91.07V9.75c-.3-.04-.6-.06-.91-.06-1.38 0-2.5 1.12-2.5 2.5 0 1.38 1.12 2.5 2.5 2.5 1.38 0 2.5-1.12 2.5-2.5 0-2.4-.04-4.8-.05-7.2 1.37.16 2.73 1.15 3.32 2.44V.02h-3.41z' },
]

const Contact = () => {
  return (
    <section id='contact' className='container mx-auto px-6 md:px-20 lg:px-32 py-12 md:py-20 font-pjs'>
      {/* Top Banner */}
      <SectionTitle title="Contact Us" className="mb-10 md:mb-20 max-w-7xl mx-auto" />

      <div className="flex flex-col lg:flex-row gap-8 md:gap-12 max-w-7xl mx-auto animate-on-scroll" data-animation="animate-fade-up">
        {/* Left Column: Form */}
        <div className="flex-1">
          <div className="flex items-center gap-4 mb-10">
            <div className="h-1 w-20 bg-gradient-to-r from-blue-200 to-blue-700 rounded-full"></div>
            <h3 className="text-2xl font-bold tracking-widest text-[#1E2B63]">CONTACT US</h3>
          </div>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-lg font-semibold text-[#1E2B63]">Nama <span className="text-red-500">*</span></label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-2xl py-4 px-6 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-lg font-semibold text-[#1E2B63]">Email <span className="text-red-500">*</span></label>
                <input
                  type="email"
                  className="w-full border border-gray-300 rounded-2xl py-4 px-6 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-lg font-semibold text-[#1E2B63]">Subject <span className="text-red-500">*</span></label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-2xl py-4 px-6 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              />
            </div>

            <div className="space-y-2">
              <label className="text-lg font-semibold text-[#1E2B63]">Pesan Anda <span className="text-red-500">*</span></label>
              <textarea
                rows="6"
                className="w-full border border-gray-300 rounded-2xl py-4 px-6 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none"
              ></textarea>
            </div>

            <button className="bg-[#FFBD24] hover:bg-[#E5A91F] text-white font-bold text-xl py-4 px-12 rounded-2xl shadow-lg transition-all transform active:scale-95">
              Kirim
            </button>
          </form>
        </div>

        {/* Right Column: Information Box */}
        <div className="lg:w-[450px] bg-[#2E338A] rounded-[40px] p-10 text-white flex flex-col justify-between">
          <div className="space-y-8">
            <h4 className="text-2xl font-bold leading-tight mb-4">
              Hallo! Kita Selalu Disini Untuk Membantu Anda
            </h4>

            {/* Contact Cards */}
            <div className="space-y-4">
              {CONTACT_INFO.map((info) => (
                <ContactInfoCard
                  key={info.title}
                  icon={info.icon}
                  title={info.title}
                  value={info.value}
                />
              ))}
            </div>
          </div>

          <div className="mt-12 space-y-4">
            <div className="h-[1px] bg-white/20 w-full"></div>
            <p className="text-sm font-semibold">Connect with us</p>
            <div className="flex gap-4">
              {SOCIAL_LINKS.map((social, idx) => (
                <a key={idx} href="#" className="w-12 h-12 bg-white/10 hover:bg-white/20 flex items-center justify-center rounded-full transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d={social.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
