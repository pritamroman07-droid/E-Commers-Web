import React, { useState, useEffect } from 'react';

const Banner = () => {
  const images = [
    { url: '/images/model1.jpg', title: 'Summer Collection', subtitle: 'Floral Elegance' },
    { url: '/images/model2.jpg', title: 'Night Out', subtitle: 'Glamorous Gowns' },
    { url: '/images/model3.jpg', title: 'Urban Chic', subtitle: 'Modern Cocktail Dresses' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="glass" style={{ position: 'relative', width: '100%', height: '500px', borderRadius: '2rem', overflow: 'hidden', marginBottom: '3rem' }}>
      {images.map((image, index) => (
        <div
          key={index}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            opacity: index === currentIndex ? 1 : 0,
            transition: 'opacity 1s ease-in-out',
            backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.1)), url(${image.url})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '4rem',
            color: 'white'
          }}
        >
          <h4 style={{ fontSize: '1.5rem', fontWeight: '400', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '4px' }}>
            {image.subtitle}
          </h4>
          <h2 style={{ fontSize: '4rem', fontWeight: '800', marginBottom: '2rem', lineHeight: '1.1' }}>
            {image.title}
          </h2>
          <button className="btn btn-primary" style={{ width: 'fit-content', padding: '1rem 2rem' }}>
            Shop Now
          </button>
        </div>
      ))}

      {/* Dots */}
      <div style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '1rem', zIndex: 10 }}>
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            style={{
              width: index === currentIndex ? '30px' : '10px',
              height: '10px',
              borderRadius: '5px',
              background: index === currentIndex ? 'var(--primary)' : 'rgba(255,255,255,0.5)',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Banner;
