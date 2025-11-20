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
     <div>
    {data.map((product) => (
      <div key={product.id}>
        <img src={product.image} alt="product image" style={{width: "100px", height: "auto"}}/>
        <h3>{product.title}</h3>
        <p>{product.price} €</p>
        <p>{product.description}</p>
      </div>
    ))}
  </div>
  )
}