import React from 'react'
import { Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Products from './Products';
import ProductDetails from './ProductDetails';


const NavBar = () => {
  return (
    <nav className='Nav-wrapper'>
      <div className="logo">Logo</div>
      <div className="navLinks">
        <Link to='/' >Home</Link>
        <Link to='/about' >About</Link>
        <Link to='/product' >Products</Link>
        <Link to='/product/:productId' />
      </div>
    </nav>
  )
}

export default NavBar