import { useState } from 'react'
import './App.css'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from './layout/navbar';
import Home from './pages/home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddUser from './users/AddUser';
import EditUser from './users/EditUser';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="App">
        <Router>
          <Navbar />

          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/adduser" element={<AddUser/>} />
            <Route exact path="/edituser/:id" element={<EditUser/>} />
          </Routes>
        </Router>
       
      </div>
      
    </>
  )
}

export default App
