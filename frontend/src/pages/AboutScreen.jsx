import React from 'react';
import { Phone, Camera, Globe, Mail, MapPin, ExternalLink } from 'lucide-react';

const AboutScreen = () => {
  return (
    <div className="container" style={{ padding: '4rem 1rem', maxWidth: '1000px' }}>
      <div className="glass" style={{ padding: '3rem', borderRadius: '24px' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '1.5rem', background: 'linear-gradient(135deg, #a855f7 0%, #3b82f6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          Our Story
        </h1>
        <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: '#94a3b8', marginBottom: '3rem' }}>
          Welcome to SweetShop, your ultimate destination for premium lifestyle products. Founded in 2024, we aim to bridge the gap between quality and accessibility. From the latest tech gadgets to high-fashion apparel and gourmet groceries, we curate every item with care. Our mission is to provide a seamless shopping experience that feels personalized, modern, and absolutely "sweet".
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {/* Contact Section */}
          <div style={{ padding: '2rem', background: 'rgba(255, 255, 255, 0.03)', borderRadius: '20px', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Mail size={24} color="#3b82f6" /> Contact Information
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '40px', height: '40px', background: 'rgba(59, 130, 246, 0.1)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Phone size={20} color="#3b82f6" />
                </div>
                <div>
                  <p style={{ fontSize: '0.8rem', color: '#64748b', marginBottom: '0.2rem' }}>Call Us</p>
                  <a href="tel:+917811033493" style={{ fontWeight: '600', color: 'inherit' }}>+91 78110 33493</a>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '40px', height: '40px', background: 'rgba(168, 85, 247, 0.1)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <MapPin size={20} color="#a855f7" />
                </div>
                <div>
                  <p style={{ fontSize: '0.8rem', color: '#64748b', marginBottom: '0.2rem' }}>Visit Us</p>
                  <p style={{ fontWeight: '600' }}>123 Sweet Street, Fashion Hub, NY 10001</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media Section */}
          <div style={{ padding: '2rem', background: 'rgba(255, 255, 255, 0.03)', borderRadius: '20px', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <ExternalLink size={24} color="#a855f7" /> Follow Our Journey
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <a 
                href="https://www.instagram.com/i_am_roman_guy?igsh=bXRlNGR3dHRtbGhh" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ 
                  display: 'flex', 
                  flexDirection: 'column', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  padding: '1.5rem',
                  background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)',
                  borderRadius: '16px',
                  color: '#fff',
                  transition: 'transform 0.3s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <Camera size={28} style={{ marginBottom: '0.5rem' }} />
                <span style={{ fontWeight: '600', fontSize: '0.9rem' }}>Instagram</span>
              </a>
              <a 
                href="https://www.facebook.com/share/1HwRk3JPuo/" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ 
                  display: 'flex', 
                  flexDirection: 'column', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  padding: '1.5rem',
                  background: '#1877F2',
                  borderRadius: '16px',
                  color: '#fff',
                  transition: 'transform 0.3s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <Globe size={28} style={{ marginBottom: '0.5rem' }} />
                <span style={{ fontWeight: '600', fontSize: '0.9rem' }}>Facebook</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutScreen;
