import React, { useState } from 'react';
import { ChevronDown, Star, X, Filter as FilterIcon } from 'lucide-react';

const FilterBar = ({ filters, setFilters, clearFilters }) => {
  const categories = ['All', 'Electronics', 'Grocery', 'Fashion', 'Gym'];
  const [showDropdown, setShowDropdown] = useState(null);

  return (
    <div className="glass" style={{ padding: '1rem', borderRadius: '1.25rem', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap', position: 'relative', zIndex: 50 }}>
      {/* Category Pills */}
      <div style={{ display: 'flex', gap: '0.75rem' }}>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilters({ ...filters, category: cat === 'All' ? '' : cat })}
            style={{
              padding: '0.5rem 1.25rem',
              borderRadius: '2rem',
              border: '1px solid var(--border)',
              background: (filters.category === cat || (cat === 'All' && !filters.category)) ? 'var(--primary)' : 'transparent',
              color: (filters.category === cat || (cat === 'All' && !filters.category)) ? 'white' : 'var(--text)',
              fontSize: '0.9rem',
              fontWeight: '600',
              transition: 'all 0.3s ease'
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      <div style={{ height: '24px', width: '1px', background: 'var(--border)' }}></div>

      {/* Price Dropdown */}
      <div style={{ position: 'relative' }}>
        <button 
          onClick={() => setShowDropdown(showDropdown === 'price' ? null : 'price')}
          style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'transparent', color: 'var(--text)', fontSize: '0.9rem' }}
        >
          Price Range <ChevronDown size={16} />
        </button>
        
        {showDropdown === 'price' && (
          <div className="glass" style={{ position: 'absolute', top: '100%', left: 0, marginTop: '1rem', padding: '1.5rem', borderRadius: '1rem', zIndex: 1000, width: '250px', boxShadow: 'var(--card-shadow)' }}>
            <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
              <input 
                type="number" 
                placeholder="Min" 
                value={filters.priceMin}
                onChange={(e) => setFilters({ ...filters, priceMin: e.target.value })}
                style={{ width: '100%', padding: '0.5rem', borderRadius: '0.5rem', background: 'var(--background)', border: '1px solid var(--border)' }}
              />
              <span style={{ color: 'var(--text-muted)' }}>-</span>
              <input 
                type="number" 
                placeholder="Max" 
                value={filters.priceMax}
                onChange={(e) => setFilters({ ...filters, priceMax: e.target.value })}
                style={{ width: '100%', padding: '0.5rem', borderRadius: '0.5rem', background: 'var(--background)', border: '1px solid var(--border)' }}
              />
            </div>
            <button 
              className="btn btn-primary" 
              style={{ width: '100%', marginTop: '1rem', padding: '0.5rem' }}
              onClick={() => setShowDropdown(null)}
            >
              Apply
            </button>
          </div>
        )}
      </div>

      {/* Rating Dropdown */}
      <div style={{ position: 'relative' }}>
        <button 
          onClick={() => setShowDropdown(showDropdown === 'rating' ? null : 'rating')}
          style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'transparent', color: 'var(--text)', fontSize: '0.9rem' }}
        >
          Ratings <ChevronDown size={16} />
        </button>
        
        {showDropdown === 'rating' && (
          <div className="glass" style={{ position: 'absolute', top: '100%', left: 0, marginTop: '1rem', padding: '1rem', borderRadius: '1rem', zIndex: 1000, width: '180px', boxShadow: 'var(--card-shadow)' }}>
            {[4, 3, 2, 1].map((star) => (
              <label key={star} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.5rem 0', cursor: 'pointer' }}>
                <input 
                  type="radio" 
                  name="rating" 
                  checked={Number(filters.rating) === star}
                  onChange={() => {
                    setFilters({ ...filters, rating: star });
                    setShowDropdown(null);
                  }}
                />
                <span style={{ fontSize: '0.9rem' }}>{star}+ Stars</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Clear Button */}
      {(filters.category || filters.rating || filters.priceMin || filters.priceMax) && (
        <button 
          onClick={clearFilters}
          style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--error)', background: 'transparent', fontSize: '0.9rem', marginLeft: 'auto' }}
        >
          <X size={16} /> Clear Filters
        </button>
      )}
    </div>
  );
};

export default FilterBar;
