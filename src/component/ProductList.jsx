// src/components/ProductList.js
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchProducts } from '../api/appelApi.jsx';
import ProductCard from './ProductCard';

export default function ProductList() {
  const { isLoading, error, data } = useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts,
  });

  if (isLoading) return 'Loading...';
  if (error) return 'An error has occurred: ' + error.message;

  return (
    <div className="products-container">
      {data.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
