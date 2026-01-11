import React, { useContext } from 'react'
import { UserDataContext } from '../context/UserContext'

const NavBar = () => {

  const userData = useContext(UserDataContext);
  console.log('User Data in NavBar:', userData);

  return (
    <div className='Nav-wrapper'>
      <h1>NavBar</h1>
    </div>
  )
}

export default NavBar