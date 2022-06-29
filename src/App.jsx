import { useState } from 'react'
import './App.css'
import Header from "./components/Header"
import Form from "./components/Form"
function App() {
  const [count, setCount] = useState(0)
  const [input1, setInput1] = useState('')
  return (
    <div className="App">
      <Header/>
      <Form/>
    </div>
  )
}

export default App