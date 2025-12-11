import React from 'react';

export default function ProductCard({ product, onCardClick }) {
  return (
    <div className="product-card" onClick={() => onCardClick(product.id)}>
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p className="product-price">{product.price} €</p>
      <p className="product-description">{product.description}</p>
    </div>
  );
}
