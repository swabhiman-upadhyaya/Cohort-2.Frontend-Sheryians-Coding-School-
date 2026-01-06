import React from 'react'
import axios from 'axios'
import User from './components/User'
import { useState } from 'react'

const App = () => {

  const [allData, setallData] = useState([])

  let getData = async () => {

    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    console.log(response.data);

    setallData(response.data)
  }

  return (
    <div className='userFunctionality'>

      <button onClick={getData} className='btn'>Get Data</button>

      <div className="userDetails">
        {allData.map((elem, idx) => {

          return <div key={idx} className='allCards'>
            <User elem={elem} address={elem.address} company={elem.company} />
          </div>

        })}
      </div>

    </div>
  )
}

export default App