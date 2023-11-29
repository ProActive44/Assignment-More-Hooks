import { useState } from 'react'
import './App.css'
import UseReducer from './components/UseReducer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <UseReducer/>
    </>
  )
}

export default App
