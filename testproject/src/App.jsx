import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <div>
    <h1>WEb devlopment</h1>
    <button onClick={alert("hello i am from innoknwovex")}>Cilck me button</button>
   </div>
   </>
  )
}

export default App
