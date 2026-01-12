import React, { useContext } from 'react'
import { themeProviderContext } from '../context/ThemeContext'

const NavBar = () => {

  const [Theme, setTheme] = useContext(themeProviderContext)

  return (
    <div className='NavBar-wrapper flex justify-between text-md bg-gray-700 px-2 py-1.5 items-center text-white'>
        <h5>NavBar</h5>
        <h4 className='bg-white text-black px-2 rounded-full ml-[20rem]'>{Theme}</h4>
      <div className="navLinks flex gap-5 items-center">
        <a href="#" className='hover:text-blue-400 transition duration-300 hover:underline'>Home</a>
        <a href="#" className='hover:text-blue-400 transition duration-300 hover:underline'>About</a>
        <a href="#" className='hover:text-blue-400 transition duration-300 hover:underline'>Dishes</a>
        <a href="#" className='hover:text-blue-400 transition duration-300 hover:underline'>Testinomial</a>
        <button className='bg-black px-2 py-[0.2rem] rounded text-[.9rem] cursor-pointer text-white
        hover:bg-white  hover:text-black transition-all duration-800 active:scale-92'
        onClick={() => {
          // if (Theme == 'light') setTheme("dark")
          // else setTheme("light")
          setTheme(Theme == "light" ? "dark": "light")
        }}>Change Theme</button>
      </div>
    </div>
  )
}

export default NavBar