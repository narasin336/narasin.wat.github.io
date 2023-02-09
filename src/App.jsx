import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

//Components
import Search from "./componesnts/Search"

function App() {
  const [count, setCount] = useState(0)



  return (
    <div className='App'>
      <h1>Pokemon Search App</h1>
      <Search/>


    </div>
  )
}

export default App
