import { useState } from 'react'
import HomePage from './components/HomePage/HomePage'
import InterviewSetup from './components/InterviewSetup/InterviewSetup'
import Interview from './components/Interview/Interview'
import './App.css'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <body>
      <main>
        <Routes>
          <Route path='/' element={ <HomePage />} />
          <Route path='/interview-setup' element={ <InterviewSetup />} />
          <Route path='/interview' element={ <Interview />} />
        </Routes>
      </main>
    </body>
      
    
  )
}

export default App
