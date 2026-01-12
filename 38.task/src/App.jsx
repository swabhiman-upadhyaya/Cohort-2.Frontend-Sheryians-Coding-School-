import React, { useContext } from 'react'
import NavBar from './components/NavBar'
import Section from './components/Section'
import Footer from './components/Footer'
import { themeProviderContext } from './context/ThemeContext'

const App = () => {

  const getThemeContext = useContext(themeProviderContext)

  return (
    <div>
      <NavBar />
      <Section />
      <Footer />
    </div>
  )
}

export default App