import './App.css';
import {Routes, Route, Link} from 'react-router-dom';
import Note from './components/Note';
import Info from './components/Info';

function App() {
  return ( 
    <div className = 'app'>
      <nav className="header shadow">
        <ul>
          <li className="nav-list">
            <Link to="/info" className=" nav-icon shadow">Info</Link>
          </li>
          <li className="nav-list">
            <Link to="/note" className=" nav-icon shadow">Note</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/info" element={<Info/>} ></Route>
        <Route path="/note" element={<Note/>} ></Route>
      </Routes>
    </div>
  );
}

// Them cac tinh nang:
// Luu note vao localStorage
// GG Sheet database
// Doi mau icon navbar

export default App;