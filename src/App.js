import './App.css';
import { Routes, Route } from 'react-router-dom'
import Loginform from './components/Loginform';
import Frontpage from './components/Frontpage';
import Dashboard from './components/Dashboard';
import Registerform from './components/Registerform';

function App() {  
  return (
    <Routes>
      <Route path="/" exact element={<Frontpage />} />
      <Route path="/login" element={<Loginform />} />
      <Route path="/register" element={<Registerform />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
