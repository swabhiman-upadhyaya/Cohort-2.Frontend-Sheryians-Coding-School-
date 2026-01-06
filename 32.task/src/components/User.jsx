import React from 'react'

const User = (props) => {
  
  const c1 = Math.floor(Math.random() * 256)
  const c2 = Math.floor(Math.random() * 256)
  const c3 = Math.floor(Math.random() * 256)

  return (
    <div style={{backgroundColor: `rgb(${c1},${c2},${c3})`}} className='single-card'>
      <h4>{props.elem.name}</h4>
      <p>{props.elem.email}</p>
      <p>{props.elem.website}</p>
      <h4 style={{fontStyle: 'italic', color: 'black'}}>{props.elem.username}</h4>
      <p>{props.elem.id}</p>
      <p>{props.address.city},{props.address.street},{props.address.zipcode},{props.address.suite}</p>
      <p>{props.company.name},{props.company.catchPhrase},{props.company.bs}</p>
    </div>
  )
}

export default User