import React, { createContext } from 'react'

const UserDataContext = createContext()

const UserContext = (props) => {

  return (
    <div>
      <UserDataContext.Provider value={'Swabhiman'}>
        {props.children}
      </UserDataContext.Provider>
    </div>
  )
}

export default UserContext
export { UserDataContext }