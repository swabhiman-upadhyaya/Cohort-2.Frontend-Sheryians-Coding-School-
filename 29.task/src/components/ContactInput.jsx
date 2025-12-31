import { useState } from "react"

const ContactInput = () => {

  const [Name, setName] = useState('')
  const [Phone, setPhone] = useState('')
  const [Email, setEmail] = useState('')

  const [AllUsers, setAllUsers] = useState([])

  let submitHandler = (e) => {
    e.preventDefault();

    let destrUsers = [...AllUsers]
    destrUsers.push({ Name, Phone, Email })
    setAllUsers(destrUsers)
    
  }

  return (
    <div className="contactInput">
      <div className="card">
        <form onSubmit={(e) => {
          submitHandler(e);
        }}>

          <h3>Enter your Contact details below--</h3>
          <input type="text" placeholder="Enter your name" value={Name}
            onChange={(e) => {
              setName(e.target.value)
            }} />
          <input type="text" placeholder="Enter your ph number" value={Phone}
            onChange={(e) => {
              setPhone(e.target.value)
            }} />
          <input type="text" placeholder="Enter your email" value={Email}
            onChange={(e) => {
              setEmail(e.target.value)
            }} />

          <button>Submit</button>
        </form>
      </div>

      <div className="allUsers">
        {AllUsers.map((user, index) => {
          return (
            <div className="userCard" key={index}>
              <p> { user.Name } </p>
              <p> { user.Phone } </p>
              <p> { user.Email } </p>
            </div>
          )
        })}

      </div>
    </div>
  )
}

export default ContactInput