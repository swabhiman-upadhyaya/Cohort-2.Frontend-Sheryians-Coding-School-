import React, { createContext, useState } from 'react'
import App from '../App'

export const themeProviderContext = createContext()


const ThemeContext = (props) => {

  const [Theme, setTheme] = useState('light')
  
  return (
    <div className="theme-context">
      <themeProviderContext.Provider value={[Theme, setTheme]}>
        {props.children}
      </themeProviderContext.Provider>
    </div>
  )
}

export default ThemeContext