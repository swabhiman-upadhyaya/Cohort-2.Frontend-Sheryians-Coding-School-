import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Product from './pages/Product'
import About from './pages/About';
import Nav from './components/Nav';

const App = () => {
  return (
    <div className='p-2 min-h-screen bg-gray-200'>

      <Nav />
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product' element={<Product />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </div>
  )
}

export default App