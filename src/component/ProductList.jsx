// src/components/ProductList.js
import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchProducts } from '../api/appelApi.jsx';
import ProductCard from './ProductCard';
import ProductModal from './ProductModal';

export default function ProductList() {
  const [selectedProductId, setSelectedProductId] = useState(null);

  const { isLoading, error, data } = useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts,
  });

  if (isLoading) return 'Loading...';
  if (error) return 'An error has occurred: ' + error.message;

  return (
    <>
      <div className="products-container">
        {data.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onCardClick={setSelectedProductId}
          />
        ))}
      </div>

      <ProductModal
        productId={selectedProductId}
        onClose={() => setSelectedProductId(null)}
      />
    </>
  );
}
