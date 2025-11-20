import './App.css'
import ProductList from './component/ProductList.jsx'
import Header from './component/Header.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

function App() {
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

export default App
