import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import img from './assets/pfp1.jpg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <img src={img}/>
    <h1> Welcome User</h1>

      <label htmlFor="myText">Name</label>&nbsp;&nbsp;&nbsp;
      <input type="text" id="myText" value=""></input>
      <br />
      <br />
      <label htmlFor="myText">Password</label>&nbsp;&nbsp;&nbsp;
      <input type="text" id="myText" value=""></input>
      <br />
      <br />
      <button onclick="myFunction()">Sign in</button>
      &nbsp;
      &nbsp;
      &nbsp;
      <button onclick="myFunction()">Regester</button>
    </>
  )
}

export default App
