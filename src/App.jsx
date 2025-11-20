import { useState } from 'react'
import './App.css'
import Api from './api/appelApi.jsx'

function App() {
  return (
    <>
      <header>
        <h2>Welcome to my clothes store</h2>
      </header>

      <main className="main-content">
        <Api />
      </main>
    </>
  )
}

export default App
