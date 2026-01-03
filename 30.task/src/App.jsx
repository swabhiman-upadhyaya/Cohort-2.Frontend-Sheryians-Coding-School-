import React, { useState } from 'react'
import Card from './components/Card.jsx'

const App = () => {

  const [Name, setName] = useState('')
  const [Url, setUrl] = useState('')
  const [Role, setRole] = useState('')
  const [Desc, setDesc] = useState('')

  const [AllUser, setAllUser] = useState([])

  let submitHandler = (e) => {
    e.preventDefault();

    // let allUsers = [...AllUser]
    // allUsers.push({ Name, Url, Role, Desc })
    // console.log(allUsers);
    // setAllUser(allUsers)

    setAllUser([...AllUser, { Name, Url, Role, Desc }])

    setName('')
    setUrl('')
    setRole('')
    setDesc('')
  }

  let deleteHandler = (idx) => {
    let deleteUsers = [...AllUser]
    deleteUsers.splice(idx, 1)
    setAllUser(deleteUsers)
  }

  return (
    <div className='inputs'>
      <form onSubmit={submitHandler}>
        <input type="text" placeholder='Enter your Name' value={Name}
          onChange={(e) => {
            setName(e.target.value);
          }} />
        <input type="text" placeholder='Enter your profile url' value={Url}
          onChange={(e) => {
            setUrl(e.target.value);
          }} />
        <input type="text" placeholder='Enter your job role' value={Role}
          onChange={(e) => {
            setRole(e.target.value);
          }} />
        <input type="text" placeholder='Enter your description' value={Desc}
          onChange={(e) => {
            setDesc(e.target.value);
          }} />
        <button className='createUser'>Create User</button>
      </form>

      <div className="cards">
        {AllUser.map((user, idx) => {
          return (
            <Card user={user} idx={idx} deleteHandler={deleteHandler} />
          )
        })}
      </div>
    </div>
  )
}

export default App