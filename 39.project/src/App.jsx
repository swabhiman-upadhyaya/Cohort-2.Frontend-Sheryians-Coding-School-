// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Product from './components/Product';
import About from './components/About';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/product' element={<Product />} /> 
      </Routes>
    </div>
  )
}

export default App