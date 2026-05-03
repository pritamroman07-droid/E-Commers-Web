import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingCart, Heart } from 'lucide-react';
import { useState } from 'react';

const Product = ({ product }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className="product-card" style={{ position: 'relative' }}>
      <button 
        onClick={() => setIsFavorite(!isFavorite)}
        style={{ 
          position: 'absolute', 
          top: '1rem', 
          right: '1rem', 
          zIndex: 10, 
          background: 'rgba(0, 0, 0, 0.3)', 
          padding: '0.5rem', 
          borderRadius: '50%', 
          backdropFilter: 'blur(4px)',
          color: isFavorite ? '#ef4444' : 'white',
          transition: 'all 0.3s ease'
        }}
      >
        <Heart size={20} fill={isFavorite ? '#ef4444' : 'none'} />
      </button>

      <Link to={`/product/${product._id}`}>
        <img src={product.image} alt={product.name} className="product-image" />
      </Link>

      <div className="product-info">
        <Link to={`/product/${product._id}`}>
          <h3 className="product-name">{product.name}</h3>
        </Link>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
          <Star size={16} fill="#fbbf24" color="#fbbf24" />
          <span style={{ color: '#94a3b8', fontSize: '0.9rem' }}>
            {product.rating} ({product.numReviews} reviews)
          </span>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span className="product-price">${product.price}</span>
          <button className="btn btn-primary" style={{ padding: '0.5rem' }}>
            <ShoppingCart size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
