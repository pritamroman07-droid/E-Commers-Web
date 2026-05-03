import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { MapPin, Heart, LogOut, Phone, User as UserIcon } from 'lucide-react';
import axios from 'axios';

const ProfileScreen = () => {
  const { userInfo, logout } = useAuth();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [address, setAddress] = useState('');
  const [activeTab, setActiveTab] = useState('address');

  useEffect(() => {
    if (userInfo) {
      setName(userInfo.name);
      setEmail(userInfo.email);
      setMobile(userInfo.mobile || '');
      setAddress(userInfo.address || '');
    }
  }, [userInfo]);

  const updateProfileHandler = async (e) => {
    e.preventDefault();
    alert('Profile update functionality coming soon!');
    // In a real app, we'd call axios.put('/api/users/profile', ...)
  };

  return (
    <div className="container" style={{ marginTop: '2rem' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 3fr', gap: '2rem' }}>
        {/* Sidebar */}
        <aside className="glass" style={{ padding: '1.5rem', borderRadius: '1.5rem', height: 'fit-content' }}>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <div style={{ width: '80px', height: '80px', background: 'var(--primary)', borderRadius: '50%', margin: '0 auto 1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', fontWeight: '800' }}>
              {userInfo?.name.charAt(0)}
            </div>
            <h3>{userInfo?.name}</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{userInfo?.email}</p>
          </div>

          <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <button 
              onClick={() => setActiveTab('address')}
              style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', borderRadius: '1rem', background: activeTab === 'address' ? 'rgba(99, 102, 241, 0.1)' : 'transparent', color: activeTab === 'address' ? 'var(--primary)' : 'var(--text-muted)', width: '100%', textAlign: 'left' }}
            >
              <MapPin size={20} /> Address Details
            </button>
            <button 
              onClick={() => setActiveTab('favorites')}
              style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', borderRadius: '1rem', background: activeTab === 'favorites' ? 'rgba(99, 102, 241, 0.1)' : 'transparent', color: activeTab === 'favorites' ? 'var(--primary)' : 'var(--text-muted)', width: '100%', textAlign: 'left' }}
            >
              <Heart size={20} /> Favorite Items
            </button>
            <button 
              onClick={logout}
              style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', borderRadius: '1rem', color: 'var(--error)', width: '100%', textAlign: 'left', marginTop: '1rem' }}
            >
              <LogOut size={20} /> Logout
            </button>
          </nav>
        </aside>

        {/* Content */}
        <main className="glass" style={{ padding: '2rem', borderRadius: '1.5rem' }}>
          {activeTab === 'address' && (
            <div>
              <h2 style={{ marginBottom: '1.5rem' }}>Shipping Address</h2>
              <form onSubmit={updateProfileHandler}>
                <div style={{ marginBottom: '1.5rem' }}>
                  <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Full Name</label>
                  <input 
                    type="text" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    placeholder="Enter full name"
                  />
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Mobile Number</label>
                  <input 
                    type="text" 
                    value={mobile} 
                    onChange={(e) => setMobile(e.target.value)} 
                    placeholder="Enter mobile number"
                  />
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Detailed Address</label>
                  <textarea 
                    value={address} 
                    onChange={(e) => setAddress(e.target.value)} 
                    placeholder="Enter your shipping address"
                    rows="4"
                    style={{ width: '100%', padding: '0.75rem 1rem', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '0.75rem', color: 'var(--text)', resize: 'none' }}
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary">Save Changes</button>
              </form>
            </div>
          )}

          {activeTab === 'favorites' && (
            <div>
              <h2 style={{ marginBottom: '1.5rem' }}>My Favorites</h2>
              <div style={{ textAlign: 'center', padding: '3rem 0', color: 'var(--text-muted)' }}>
                <Heart size={48} style={{ marginBottom: '1rem', opacity: 0.3 }} />
                <p>You haven't favorited any items yet.</p>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default ProfileScreen;
