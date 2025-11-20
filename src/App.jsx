import './App.css'
import Api from './api/appelApi.jsx'
import Header from './component/Header.jsx'

function App() {
  return (
    <>
      <Header />
      <main className="main-content">
        <Api />
      </main>
    </>
  )
}

export default App
