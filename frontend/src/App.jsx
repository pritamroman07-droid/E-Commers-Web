import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomeScreen from './pages/HomeScreen';

const App = () => {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Routes>
          <Route path="/" element={<HomeScreen />} exact />
          {/* We'll add more routes here later */}
        </Routes>
      </main>
      <footer style={{ textAlign: 'center', padding: '2rem 0', color: '#94a3b8' }}>
        <p>&copy; 2024 GravityShop. All rights reserved.</p>
      </footer>
    </Router>
  );
};

export default App;
