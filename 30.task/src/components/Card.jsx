import React from 'react'

const Card = (props) => {
  return (
    <div className='card'>
        <img src={props.user.Url} alt="" />
        <p className='name'>{props.user.Name}</p>
        <p className='role'>{props.user.Role}</p>
        <p className='description'>{props.user.Desc}</p>
        <button onClick={() => {
          props.deleteHandler(props.idx);
        }}>remove</button>
    </div>
  )
}

export default Card