import { Router, Routes, Route, HashRouter, Link } from 'react-router-dom';
import './App.css';
import Button from '@mui/material/Button';
import Patient from './components/patientdetails';
import Questionere1 from './components/questioneertext1';
import Questext2 from './components/questtext2';
import Homepage from './components/homepage';
import Register from './components/patregister';
import Login from './components/login2';
function App() {


  return (
    <HashRouter>

      <p className='text-center text-primary mt-1'>Welcome to Medical Cure @Clario</p>
      <ul className='Navbar mt-5'>

        <li><Link className="mylink" to="/home">Home</Link></li>
        <li><Link className="mylink" to="/qustext1">Questioneer-1</Link></li>
        <li><Link className="mylink" to="/qustext2">Questioneer-2</Link></li>
        <li><Link className="mylink" to="/Patient">Patient</Link></li>
        <li>
          <Link className="mylink" to="/login2">Login </Link>
        </li>
        <li><Link className="mylink" to="/signup">Register</Link></li>


      </ul>


      <Routes>
        <Route exact path="/signup" element={<Register />} />
        <Route exact path="/login2" element={<Login />} />
        <Route exact path="/home" element={<Homepage />} />
        <Route exact path="/qustext1" element={<Questionere1 />} />
        <Route exact path="/qustext2" element={<Questext2 />} />
        <Route exact path="/patient" element={<Patient />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
