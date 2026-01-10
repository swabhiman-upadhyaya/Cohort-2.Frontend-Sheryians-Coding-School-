import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Courses from './pages/Courses';
import Nav from './components/Nav';

const App = () => {
  return (
    <div className='App-wrapper'>
      
      <Nav/>
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/products' element={<Products />} />
        <Route path='/courses' element={<Courses />} />
      </Routes>
    </div>
  )
}

export default App