import React from 'react';
import { Routes, Route } from "react-router-dom"
import Home from './pages/Home';
import Shop from './pages/Shop';
import Cart from './pages/Cart';

function App() {
  return (
    <div className='bg-gradient-to-r from-slate-700 to-black bg-emerald-400'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
