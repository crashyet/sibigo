import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import LandingPage from './pages/landing/LandingPage'
import MoreKonten from './pages/landing/MoreKonten'
import DetailArtikel from './pages/article/DetailArtikel'
import ChatBot from './pages/chat/ChatBot'
import BookPage from './pages/book'
import AlphabetView from './pages/book/alphabet/AlphabetView'
import QuizPage from './pages/quiz'

import NotFound from './pages/components/NotFound'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/konten" element={<MoreKonten />} />
          <Route path="/artikel/:id" element={<DetailArtikel />} />
          <Route path="/chat" element={<ChatBot />} />
          <Route path="/book" element={<BookPage />}>
            <Route index element={<Navigate to="alphabet" replace />} />
            <Route path="alphabet" element={<AlphabetView />} />
            <Route path="words" element={<div className="p-10 text-2xl font-bold">Materi: Isyarat Kata</div>} />
            <Route path="conversation" element={<div className="p-10 text-2xl font-bold">Materi: Percakapan Harian</div>} />
            <Route path="numbers" element={<div className="p-10 text-2xl font-bold">Materi: Angka & Bilangan</div>} />
          </Route>
          <Route path="/quiz" element={<QuizPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
