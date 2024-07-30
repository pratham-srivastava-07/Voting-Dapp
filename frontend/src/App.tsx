import { useState } from 'react'
import './App.css'
import Login from './components/Login'

function App() {

  const [account, setAccount] = useState(false)

  return (
    <>
    <div className="pt-24">
    <Login/>
    </div>
    </>
  )
}

export default App
