import React from 'react'
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Section from './components/Section';
import UserContext from './context/UserContext';

const App = () => {
  return (
    <UserContext>
      <div className='App-wrapper'>
        <NavBar />
        <Section />
        <Footer />
      </div>
    </UserContext>
  )
}

export default App