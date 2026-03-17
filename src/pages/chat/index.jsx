import React, { useState, useRef, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import { Link } from 'react-router-dom'
import { GoogleGenerativeAI } from '@google/generative-ai'
import logo from '../../assets/logo.png'

// Initialize Gemini
const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY)

const SYSTEM_INSTRUCTION = `Kamu adalah SIBIGO AI Pintar, asisten virtual dari platform SIBIGO yang membantu pengguna belajar bahasa isyarat SIBI (Sistem Isyarat Bahasa Indonesia). 

Tugas kamu:
- Menjawab pertanyaan seputar bahasa isyarat SIBI (huruf, kata, gerakan, tips belajar).
- Memberikan penjelasan yang ramah, jelas, dan mudah dipahami.
- Gunakan emoji sesekali agar terasa friendly.
- Jawab dalam bahasa Indonesia.
- Jika pertanyaan di luar topik bahasa isyarat, arahkan kembali dengan sopan.
- Jangan terlalu panjang, jawab secukupnya saja kecuali diminta detail.
- Jika pengguna meminta contoh gambar, foto, atau visual gerakan bahasa isyarat, kamu TIDAK BISA menampilkan gambar. Sebagai gantinya, arahkan pengguna ke menu **LKS SIBI** di platform SIBIGO untuk melihat contoh gerakan secara langsung. Contoh jawaban: "Sayangnya aku belum bisa menampilkan gambar di sini 😅 Tapi kamu bisa langsung lihat contoh gerakan di menu **LKS SIBI** ya! Di sana ada materi lengkap dengan visual gerakan bahasa isyarat. 📚✨"`

const quickQuestions = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
    ),
    text: 'Contoh percakapan sederhana menggunakan bahasa isyarat dalam kehidupan sehari-hari.',
    color: '#5B5FC7',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" /></svg>
    ),
    text: 'Bagaimana cara membedakan huruf U dan V saat melakukan bahasa isyarat?',
    color: '#5B5FC7',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" /><line x1="12" y1="17" x2="12.01" y2="17" /></svg>
    ),
    text: 'Tips dan strategi belajar untuk menghafal alfabet SIBI secara cepat dan konsisten.',
    color: '#5B5FC7',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" /></svg>
    ),
    text: 'Bagaimana cara melatih kelancaran gerakan tangan dalam bahasa isyarat SIBI?',
    color: '#5B5FC7',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></svg>
    ),
    text: 'Apa kesalahan umum yang sering dilakukan pemula saat belajar bahasa isyarat SIBI?',
    color: '#5B5FC7',
  },
]

const ChatBot = () => {
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef(null)
  const inputRef = useRef(null)
  const chatRef = useRef(null) // Stores the Gemini chat session

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages, isTyping])

  // Initialize or get Gemini chat session
  const getChat = () => {
    if (!chatRef.current) {
      const model = genAI.getGenerativeModel({
        model: 'gemini-2.5-flash-lite',
        systemInstruction: SYSTEM_INSTRUCTION,
      })
      chatRef.current = model.startChat({
        history: [],
      })
    }
    return chatRef.current
  }

  const handleSend = async (text) => {
    const messageText = text || input.trim()
    if (!messageText || isTyping) return

    // Add user message
    setMessages((prev) => [...prev, { role: 'user', content: messageText }])
    setInput('')
    setIsTyping(true)

    try {
      const chat = getChat()
      const result = await chat.sendMessage(messageText)
      const response = result.response.text()
      setMessages((prev) => [...prev, { role: 'ai', content: response }])
    } catch (error) {
      console.error('Gemini API error:', error)
      setMessages((prev) => [
        ...prev,
        { role: 'ai', content: 'Maaf, terjadi kesalahan pada Sibigo AI. Silahkan coba kembali setelah beberapa menit. 🙏' },
      ])
    } finally {
      setIsTyping(false)
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  const hasMessages = messages.length > 0

  return (
    <div className="min-h-screen font-pjs" style={{ background: '#E3E4FE' }}>
      {/* Top bar with back button and line */}
      <div className="flex items-center px-8 md:px-16 lg:px-32 pt-10 pb-5 sticky top-0 z-50 chat-glass">
        <Link to="/konten" className="absolute flex items-center gap-2 text-[#2D2D2D] font-semibold text-lg hover:opacity-70 transition-opacity">
          <svg width="10" height="18" viewBox="0 0 16 27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M0.610548 11.7854L12.396 -6.48499e-05L15.3418 2.94577L5.0293 13.2583L15.3418 23.5708L12.396 26.5166L0.610548 14.7312C0.219983 14.3405 0.000576019 13.8107 0.000576019 13.2583C0.000576019 12.7058 0.219983 12.176 0.610548 11.7854Z" fill="#424242" />
          </svg>
          Kembali
        </Link>

        {/* Decorative line with badge */}
        <div className="flex-1 flex items-center justify-center relative gap-7 mx-8">
          <div className="h-2 w-80 bg-gradient-to-r from-[#E3E4FE] to-[#3338A0] rounded-full"></div>
          <div className="bg-[#3338A0] text-white font-bold text-xl px-8 py-2 rounded-full whitespace-nowrap shadow-md">
            SIBIGO AI Pintar
          </div>
          <div className="h-2 w-80 bg-gradient-to-l from-[#E3E4FE] to-[#3338A0] rounded-full"></div>
        </div>
      </div>

      {/* Main content area */}
      <div className="flex flex-col items-center px-8 md:px-16 lg:px-32 pt-8 pb-32">
        {/* Title */}
        <h1 className="text-[#2D2D2D] text-3xl md:text-4xl font-extrabold text-center mb-2">
          Mau belajar apa hari ini?
        </h1>
        <p className="text-[#555] text-base md:text-lg text-center mb-10">
          Tanyakan tentang huruf, kata, atau gerakan SIBI.
        </p>

        {/* Quick Questions - shown only when no messages */}
        {!hasMessages && (
          <div className="w-full max-w-3xl grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
            {quickQuestions.slice(0, 3).map((q, i) => (
              <button
                key={i}
                onClick={() => handleSend(q.text)}
                className="bg-white rounded-2xl p-5 text-left shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer border border-gray-100 group"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 text-white"
                  style={{ background: q.color }}
                >
                  {q.icon}
                </div>
                <p className="text-[#2D2D2D] text-sm font-medium leading-relaxed group-hover:text-[#3338A0] transition-colors">
                  {q.text}
                </p>
              </button>
            ))}
            <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-5">
              {quickQuestions.slice(3).map((q, i) => (
                <button
                  key={i + 3}
                  onClick={() => handleSend(q.text)}
                  className="bg-white rounded-2xl p-5 text-left shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer border border-gray-100 group"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 text-white"
                    style={{ background: q.color }}
                  >
                    {q.icon}
                  </div>
                  <p className="text-[#2D2D2D] text-sm font-medium leading-relaxed group-hover:text-[#3338A0] transition-colors">
                    {q.text}
                  </p>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Chat Messages */}
        {hasMessages && (
          <div className="w-full max-w-3xl flex flex-col gap-6 mb-6">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex items-start gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
              >
                {/* Avatar */}
                {msg.role === 'user' ? (
                  <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center shrink-0 shadow">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                  </div>
                ) : (
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 shadow overflow-hidden">
                    <img src={logo} alt="SIBIGO" className="w-8 h-8 object-contain" />
                  </div>
                )}

                {/* Message Bubble */}
                <div
                  className={`max-w-[75%] px-5 py-4 rounded-2xl text-sm leading-relaxed shadow-sm whitespace-pre-wrap ${msg.role === 'user'
                    ? 'bg-white text-[#2D2D2D] rounded-tr-sm'
                    : 'bg-white text-[#2D2D2D] rounded-tl-sm'
                    }`}
                >
                  {/* {msg.content} */}

                  <ReactMarkdown>{msg.content}</ReactMarkdown>
                </div>
              </div>
            ))}

            {/* Typing indicator */}
            {isTyping && (
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 shadow overflow-hidden">
                  <img src={logo} alt="SIBIGO" className="w-8 h-8 object-contain" />
                </div>
                <div className="bg-white px-5 py-4 rounded-2xl rounded-tl-sm shadow-sm">
                  <div className="flex gap-1.5">
                    <span className="w-2 h-2 bg-[#3338A0] rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                    <span className="w-2 h-2 bg-[#3338A0] rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                    <span className="w-2 h-2 bg-[#3338A0] rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>
        )}
      </div>

      {/* Fixed Input Bar */}
      <div className="fixed bottom-0 left-0 right-0 px-8 md:px-16 lg:px-32 py-6" style={{ background: 'linear-gradient(transparent, #DDDCF5 30%)' }}>
        <div className="max-w-3xl mx-auto flex items-center gap-4">
          <div className="flex-1 flex items-center bg-white rounded-full shadow-lg border border-gray-200 overflow-hidden px-6 py-3">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Tulis pertanyaanmu di sini"
              className="flex-1 outline-none text-[#2D2D2D] text-base placeholder-gray-400 font-pjs bg-transparent"
            />
            <button
              onClick={() => handleSend()}
              disabled={!input.trim()}
              className="ml-3 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 cursor-pointer disabled:opacity-40"
              style={{ background: '#3B9CF0' }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="white">
                <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
              </svg>
            </button>
          </div>

          {/* Mic button */}
          <button className="w-14 h-14 rounded-full bg-white shadow-lg flex items-center justify-center hover:shadow-xl transition-all duration-200 cursor-pointer border border-gray-200">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3B9CF0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
              <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
              <line x1="12" y1="19" x2="12" y2="23" />
              <line x1="8" y1="23" x2="16" y2="23" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default ChatBot
