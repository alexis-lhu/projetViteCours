import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Example />
    </QueryClientProvider>
  )
}

function Example() {
  const { isPending, error, data } = useQuery({
    queryKey: ['repoData'],
    queryFn: () =>
      fetch('https://fakestoreapi.com/products').then((res) =>
        res.json(),
      ),
  })

  if (isPending) return 'Loading...'
  if (error) return 'An error has occurred: ' + error.message

  return (
    <div className="products-container">
      {data.map((product) => (
        <div className="product-card" key={product.id}>
          <img src={product.image} alt="product image" />
          <h3>{product.title}</h3>
          <p className="product-price">{product.price} €</p>
          <p className="product-description">{product.description}</p>
        </div>
      ))}
    </div>
  )
}