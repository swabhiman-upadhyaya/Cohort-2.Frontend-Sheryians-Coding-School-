// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import Products from './components/Products';
import ProductDetails from './components/ProductDetails';
import About from './components/About';
import Home from './components/Home';
import NavBar from './components/NavBar';

const App = () => {
  return (
    <div>
      <NavBar />
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/product' element={<Products />} />
        <Route path='/product/:productId' element={<ProductDetails />} />
      </Routes>
    </div>
  )
}

export default App