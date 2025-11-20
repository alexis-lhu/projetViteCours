import React from 'react';

export default function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p className="product-price">{product.price} €</p>
      <p className="product-description">{product.description}</p>
    </div>
  );
}
