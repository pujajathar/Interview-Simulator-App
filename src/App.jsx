import { useState } from 'react'
import HomePage from './components/HomePage/HomePage'
import './App.css'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <body>
      <main>
        <Routes>
          <Route path='/' element={ <HomePage />} />
        </Routes>
      </main>
    </body>
      
    
  )
}

export default App
