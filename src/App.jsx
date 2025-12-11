import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import ProductList from './component/ProductList.jsx'
import Header from './component/Header.jsx'
import LoginPage from './pages/LoginPage.jsx'
import ProtectedRoute from './components/ProtectedRoute.jsx'

const queryClient = new QueryClient()

function ShopPage() {
  return (
    <>
      <Header />
      <main className="main-content">
        <QueryClientProvider client={queryClient}>
          <ProductList />
        </QueryClientProvider>
      </main>
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <ShopPage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
