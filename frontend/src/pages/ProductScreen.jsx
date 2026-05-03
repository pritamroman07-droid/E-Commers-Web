import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { Star, ShoppingCart, ArrowLeft, Heart, Check, X } from 'lucide-react';
import axios from 'axios';
import { useCart } from '../context/CartContext';

const ProductScreen = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  
  const [product, setProduct] = useState(null);
  const [qty, setQty] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const { data } = await axios.get(`http://localhost:5001/api/products/${id}`);
        setProduct(data);
        setLoading(false);
      } catch (err) {
        setError(err.response?.data?.message || err.message);
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  const addToCartHandler = () => {
    addToCart(product, qty);
    navigate('/cart');
  };

  if (loading) return <div className="container" style={{ padding: '4rem 0', textAlign: 'center' }}>Loading...</div>;
  if (error) return <div className="container" style={{ padding: '4rem 0', textAlign: 'center', color: 'var(--error)' }}>{error}</div>;

  return (
    <div className="container" style={{ marginTop: '2rem' }}>
      <Link to="/" className="btn" style={{ marginBottom: '2rem', padding: '0.5rem 0', color: 'var(--text-muted)' }}>
        <ArrowLeft size={20} /> Back to Products
      </Link>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '4rem' }}>
        {/* Product Image */}
        <div className="glass" style={{ borderRadius: '2rem', overflow: 'hidden', height: 'fit-content' }}>
          <img 
            src={product.image} 
            alt={product.name} 
            style={{ width: '100%', display: 'block', objectFit: 'cover' }} 
          />
        </div>

        {/* Product Info */}
        <div>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', lineHeight: '1.2' }}>{product.name}</h1>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  size={20} 
                  fill={i < Math.floor(product.rating) ? "#fbbf24" : "none"} 
                  color="#fbbf24" 
                />
              ))}
            </div>
            <span style={{ color: 'var(--text-muted)' }}>{product.numReviews} Reviews</span>
          </div>

          <div style={{ fontSize: '2rem', fontWeight: '800', color: 'var(--primary)', marginBottom: '2rem' }}>
            ${product.price}
          </div>

          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginBottom: '2rem', lineHeight: '1.8' }}>
            {product.description}
          </p>

          <div className="glass" style={{ padding: '2rem', borderRadius: '1.5rem', marginBottom: '2rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
              <span>Status</span>
              <span style={{ color: product.countInStock > 0 ? 'var(--success)' : 'var(--error)', fontWeight: '600' }}>
                {product.countInStock > 0 ? (
                  <><Check size={18} inline /> In Stock</>
                ) : (
                  <><X size={18} inline /> Out of Stock</>
                )}
              </span>
            </div>

            {product.countInStock > 0 && (
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                <span>Quantity</span>
                <select 
                  value={qty} 
                  onChange={(e) => setQty(Number(e.target.value))}
                  style={{ width: '80px', marginBottom: 0 }}
                >
                  {[...Array(product.countInStock).keys()].map((x) => (
                    <option key={x + 1} value={x + 1}>{x + 1}</option>
                  ))}
                </select>
              </div>
            )}

            <button 
              className="btn btn-primary" 
              style={{ width: '100%', padding: '1rem' }}
              disabled={product.countInStock === 0}
              onClick={addToCartHandler}
            >
              <ShoppingCart size={22} /> Add to Cart
            </button>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div style={{ marginTop: '4rem' }}>
        <h2 style={{ marginBottom: '2rem' }}>Customer Reviews</h2>
        {product.reviews.length === 0 ? (
          <div className="glass" style={{ padding: '2rem', borderRadius: '1.5rem', color: 'var(--text-muted)' }}>
            No reviews yet. Be the first to review this product!
          </div>
        ) : (
          <div style={{ display: 'grid', gap: '1.5rem' }}>
            {product.reviews.map((review) => (
              <div key={review._id} className="glass" style={{ padding: '1.5rem', borderRadius: '1.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <strong>{review.name}</strong>
                  <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                    {new Date(review.createdAt).toLocaleDateString()}
                  </span>
                </div>
                <div style={{ display: 'flex', gap: '0.25rem', marginBottom: '1rem' }}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill={i < review.rating ? "#fbbf24" : "none"} color="#fbbf24" />
                  ))}
                </div>
                <p>{review.comment}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductScreen;
