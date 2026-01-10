import { useState } from "react"
import Theme from "./components/Theme"


const App = () => {

  const [theme, setTheme] = useState('_____')

  const changeTheme = (newTheme) => {
    setTheme(newTheme)
  }

  return (
    <div className="allContent-wrapper">
      <p>The theme is *{theme}*</p>
      <Theme changeTheme={changeTheme} />
    </div>
  )
}

export default App