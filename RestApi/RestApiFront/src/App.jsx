import { useState, useEffect } from 'react'

import './App.css'
import axios from 'axios'

function App() {
  const [apidata, setApiData] = useState([])
  const url = 'http://localhost:4000/'

  const getData = async () => {
    const response = await axios.get(url)
    const data = response.data.posts
    setApiData(data)

  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <h1> Quora Posts </h1>
      <h2>This is post data</h2>
      {apidata.map(( data , index) => {
      return   (<div key={index}>
          <h3 key={index}>{data.username}</h3>
          <h3>{data.content}</h3>

        </div>)
      })}
    </>
  )
}

export default App
