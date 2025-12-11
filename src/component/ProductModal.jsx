import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchProductById } from '../api/appelApi.jsx';
import '../styles/ProductModal.css';

export default function ProductModal({ productId, onClose }) {
  const { isLoading, error, data: product } = useQuery({
    queryKey: ['product', productId],
    queryFn: () => fetchProductById(productId),
    enabled: !!productId,
  });

  if (!productId) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          ✕
        </button>

        {isLoading && <p className="modal-loading">Chargement...</p>}
        {error && <p className="modal-error">Erreur : {error.message}</p>}

        {product && (
          <div className="modal-product">
            <div className="modal-image-container">
              <img src={product.image} alt={product.title} />
            </div>

            <div className="modal-info">
              <h2>{product.title}</h2>
              <p className="modal-category">
                <strong>Catégorie :</strong> {product.category}
              </p>
              <p className="modal-price">
                <strong>Prix :</strong> {product.price} €
              </p>
              <div className="modal-rating">
                <strong>Note :</strong>{' '}
                {product.rating ? (
                  <span>
                    {product.rating.rate} / 5 ({product.rating.count} avis)
                  </span>
                ) : (
                  'Non disponible'
                )}
              </div>
              <div className="modal-description">
                <strong>Description :</strong>
                <p>{product.description}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
