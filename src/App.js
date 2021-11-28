import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Loginform from './components/Loginform';
import Frontpage from './components/Frontpage';
import Dashboard from './components/Dashboard';
import Registerform from './components/Registerform';

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
                  console.log(error, error.res)
                }
            })
        }
    )();
  });


  return (
    <Routes>
      <Route path="/" exact element={<Frontpage />} />
      <Route path="/login" element={<Loginform setUser={setUsername} />} />
      <Route path="/register" element={<Registerform />} />
      <Route path="/dashboard" element={<Dashboard username={username} />} />
    </Routes>
  );
}

export default App;
