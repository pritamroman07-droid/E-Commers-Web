import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';
import Product from '../components/Product';
import FilterBar from '../components/FilterBar';
import Banner from '../components/Banner';

const HomeScreen = () => {
  const [searchParams] = useSearchParams();
  const keyword = searchParams.get('keyword') || '';

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    category: '',
    rating: '',
    priceMin: '',
    priceMax: '',
  });

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const params = new URLSearchParams();
      if (keyword) params.append('keyword', keyword);
      if (filters.category) params.append('category', filters.category);
      if (filters.rating) params.append('rating', filters.rating);
      if (filters.priceMin) params.append('priceMin', filters.priceMin);
      if (filters.priceMax) params.append('priceMax', filters.priceMax);

      const { data } = await axios.get(`http://localhost:5001/api/products?${params.toString()}`);
      setProducts(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching products:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [filters, keyword]);

  const clearFilters = () => {
    setFilters({
      category: '',
      rating: '',
      priceMin: '',
      priceMax: '',
    });
  };

  return (
    <div className="container" style={{ marginTop: '2rem' }}>
      <Banner />
      
      {/* Page Title & Filter Bar */}
      <div style={{ marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>
          {keyword ? `Search Results for "${keyword}"` : filters.category ? `${filters.category} Collection` : 'Explore Our Shop'}
        </h1>
        
        <FilterBar 
          filters={filters} 
          setFilters={setFilters} 
          clearFilters={clearFilters} 
        />
      </div>

      {/* Product Listing */}
      {loading ? (
        <div style={{ textAlign: 'center', padding: '4rem' }}>Loading Products...</div>
      ) : products.length === 0 ? (
        <div className="glass" style={{ textAlign: 'center', padding: '4rem', borderRadius: '1.5rem' }}>
          <h3>No products found</h3>
          <p style={{ color: 'var(--text-muted)' }}>Try adjusting your filters to find what you're looking for.</p>
        </div>
      ) : (
        <div className="product-grid">
          {products.map((product) => (
            <Product key={product._id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default HomeScreen;
