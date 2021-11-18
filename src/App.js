import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios';
import Header from './components/Header';
import Loginform from './components/Loginform';
import Frontpage from './components/Frontpage';
import Dashboard from './components/Dashboard';

function App() {
  const [isLogin, setIsLogin] = useState(false)

  const login = (username, password) => {
    axios.post("https://reqres.in/api/users/2",
      {
        email: username,
      }
    ).then(res => {
      if (res.data.status === 'fail'){
        alert("Your email and password is wrong :v")
      } else {
        setIsLogin(isLogin => !isLogin)
      }
    }).catch(error => {
      console.log(error, error.responseData)
    })
  }
  
  return (
    <Router>
      {isLogin ? <Dashboard /> : ""}
      <Routes>
        <Route path="/" exact element={<Frontpage />} />
        <Route path="/login" element={<Loginform login={login} />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
