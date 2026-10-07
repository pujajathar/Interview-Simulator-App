import { useState } from 'react'
import HomePage from './components/HomePage/HomePage'
import InterviewSetup from './components/InterviewSetup/InterviewSetup'
import Interview from './components/Interview/Interview'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'

function App() {

  return (
   
      <main>
        <Header />
        <Routes>
          <Route path='/' element={ <HomePage />} />
          <Route path='/interview-setup' element={ <InterviewSetup />} />
          <Route path='/interview/:sessionId' element={ <Interview />} />
        </Routes>
        <Footer />
      </main>

  )
}

export default App
