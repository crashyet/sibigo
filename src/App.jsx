import './App.css'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'

// Pages
import LandingPage from './pages/landing/LandingPage'
import MoreKonten from './pages/landing/MoreKonten'
import DetailArtikel from './pages/article'
import ChatBot from './pages/chat'

// Book
import BookPage from './pages/book'
import AlphabetView from './pages/book/alphabet'
import AlphabetDetailView from './pages/book/alphabet/detail'
import WordsView from './pages/book/words'
import WordsDetailView from './pages/book/words/detail'
import ConversationView from './pages/book/conversation'
import ConversationDetailView from './pages/book/conversation/detail'
import NumberView from './pages/book/number'
import NumberDetailView from './pages/book/number/detail'

// Games
import GamesPage from './pages/games/GamesPage'
import QuizPage from './pages/games/QuizPage'
import SelectionPage from './pages/games/SelectionPage'

// Error
import NotFound from './pages/not-found/NotFound'

function App() {

  return (
    <>
      <Router>
        <Routes>
          {/* Landing */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/konten" element={<MoreKonten />} />
          <Route path="/artikel/:id" element={<DetailArtikel />} />
          <Route path="/chat" element={<ChatBot />} />

          {/* Book / LKS */}
          <Route path="/lesson" element={<BookPage />}>
            <Route index element={<Navigate to="alphabet" replace />} />
            <Route path="alphabet" element={<AlphabetView />} />
            <Route path="words" element={<WordsView />} />
            <Route path="conversation" element={<ConversationView />} />
            <Route path="numbers" element={<NumberView />} />
          </Route>

          <Route path="/lesson/alphabet/:id" element={<AlphabetDetailView />} />
          <Route path="/lesson/words/:id" element={<WordsDetailView />} />
          <Route path="/lesson/conversation/:id" element={<ConversationDetailView />} />
          <Route path="/lesson/number/detail" element={<NumberDetailView />} />


          {/* Games */}
          <Route path="/play" element={<SelectionPage />} />
          <Route path="/play/games" element={<GamesPage />} />
          <Route path="/play/quiz" element={<QuizPage />} />

          {/* Fallback */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
