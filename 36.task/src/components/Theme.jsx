import React, { useState } from 'react'

const Theme = (props) => {

  const [newTheme, setNewTheme] = useState('')


  const submitHandeler = (e) => {
    e.preventDefault();

    props.changeTheme(newTheme)
    setNewTheme('')
  }

  return (
    <div className='input-wrapper'>
      <form onSubmit={(e) => {
        submitHandeler(e)
      }}>
        <input type="text" placeholder="Enter your preffered theme"
          value={newTheme} onChange={(e) => {
            setNewTheme(e.target.value)
          }} />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Theme