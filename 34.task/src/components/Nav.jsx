import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className='w-full h-12 px-4 py-2 bg-gray-500 text-[1.3rem] flex justify-between items-center'>
      <h1>Nav Bar</h1>
      <div className='Nav-wrapper flex gap-5'>
        <Link to='/' className='hover:underline'>Home</Link>
        <Link to='/about' className='hover:underline'>About</Link>
        <Link to='/product' className='hover:underline'>Product</Link>
      </div>
    </nav>
  )
}

export default Nav