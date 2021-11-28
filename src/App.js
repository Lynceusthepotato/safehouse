import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Loginform from './pages/Loginform';
import Frontpage from './pages/Frontpage';
import Dashboard from './pages/Dashboard';
import Registerform from './pages/Registerform';
import Navbar from './components/Navbar';

function App() {  
  const [username, setUsername] = useState('')

  useEffect(() => {
    (
        async () => {
            await axios.get('http://localhost:8000/api/user', {
                withCredentials: true
            }).then(res => {
              setUsername(res.data.name);
            }).catch(error => {
                if (error.response) {
                  console.log(error.response.data);
                  console.log(error.response.status);
                  console.log(error.response.headers);
                } else if (error.request) {
                  console.log(error.request);
                } else {
                  console.log(error, error.res);
                }
            })
        }
    )();
  });

  const logout =  async () => {
    await fetch('http://localhost:8000/api/logout', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      credentials: 'include',
    });
  }

  return (
    <Routes>
      <Route path="/" exact element={<Frontpage />} />
      <Route path="/login" element={<Loginform setUser={setUsername} />} />
      <Route path="/register" element={<Registerform />} />
      <Route path="/dashboard" element={<><Navbar logout={logout} /> <Dashboard username={username} /></>} />
    </Routes>
  );
}

export default App;
