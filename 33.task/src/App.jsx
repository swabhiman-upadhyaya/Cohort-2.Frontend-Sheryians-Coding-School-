import axios from "axios";
import { useEffect, useState } from "react";

const App = () => {

  const [EachUser, setEachUser] = useState('')

  const [Number, setNumber] = useState(0)

  let getData = async () => {
    let response = await axios.get('https://randomuser.me/api/')
    setEachUser(response.data.results[0].name.title + " " + response.data.results[0].name.first + " " + response.data.results[0].name.last)
  }

  useEffect(() => {
    getData();
  }, [Number])

  return (
    <div>
      <h1>{EachUser}</h1>

      <h1>{Number}</h1>
      <button onClick={() => {
        setNumber(Number + 1)
      }}>Increase</button>

    </div>
  )
}

export default App