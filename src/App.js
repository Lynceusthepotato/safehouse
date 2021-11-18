import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header';
import Loginform from './components/Loginform';
import Frontpage from './components/Frontpage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Frontpage />} />
        <Route path="/login" element={<Loginform />} />
      </Routes>
    </Router>
  );
}

export default App;
