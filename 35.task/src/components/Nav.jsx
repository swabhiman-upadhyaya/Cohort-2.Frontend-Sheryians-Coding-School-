import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='Nav'>
      <p>NavBar</p>
      <div className='Nav-wrapper'>
        <NavLink to='/' className={function({ isActive }) { isActive ? 'active' : '' }}>Home</NavLink>
        <NavLink to='/about' className={({ isActive }) => isActive ? 'active' : ''}>About</NavLink>
        <NavLink to='/products' className={({ isActive }) => isActive ? 'active' : ''}>Products</NavLink>
        <NavLink to='/courses' className={({ isActive }) => isActive ? 'active' : ''}>Courses</NavLink>
      </div>
    </div >
  )
}

export default Nav