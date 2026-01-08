import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Product from './pages/Product'
import About from './pages/About';
import Nav from './components/Nav';
import Courses from './pages/Courses';
import Men from './pages/Men';
import Women from './pages/Women';
import Dynamic from './pages/Dynamic';
import RandomCourseDetails from './pages/RandomCourseDetails';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <div className='p-2 min-h-screen bg-gray-200'>

      <Nav />
      
      <Routes>
        {/* Direct Rendering */}
        <Route path='/' element={<Home />} />
        <Route path='/product' element={<Product />} />
        <Route path='/about' element={<About />} />
        <Route path='/courses' element={<Courses />} />

        {/* Nested Rendering */}
        <Route path='/product/men' element={<Men />} />
        <Route path='/product/women' element={<Women />} />

        {/* Dynamic Rendering */}
        <Route path='/courses/:id' element={<Dynamic />} />
        <Route path='/courses/:id/details' element={<RandomCourseDetails />} />

        {/* Not-Found Rendering */}
        <Route path='/*' element={<NotFound />} />

      </Routes>
    </div>
  )
}

export default App