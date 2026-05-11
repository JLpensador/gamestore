import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'

import HomePage from './pages/HomePage'
import ProductsPage from './pages/ProductsPage'
import DetailPage from './pages/DetailPage'
import QuizPage from './pages/QuizPage'

export default function App() {
  return (
    <BrowserRouter>
      <div className="bg-main min-vh-100">
        <Navbar />

        <main className="container py-5">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/games" element={<ProductsPage />} />
            <Route path="/quiz" element={<QuizPage />} />
            <Route path="/game/:id" element={<DetailPage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}