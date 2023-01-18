import React from 'react';
import { Routes, Route } from "react-router-dom"
import Home from './pages/Home';
import Shop from './pages/Shop';
import Cart from './pages/Cart';

function App() {
  return (
    <div className='bg-gradient-to-r from-rose-400 to-lime-400 min-h-screen'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
