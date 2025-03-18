import { useState } from 'react'
import './App.css'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from './layout/navbar';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="App">
       <Navbar />
      </div>
      
    </>
  )
}

export default App
