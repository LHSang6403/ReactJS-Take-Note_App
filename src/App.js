import './App.css';
import {Routes, Route, Link, useLocation} from 'react-router-dom';
import Note from './components/Note';
import Info from './components/Info';
import {AnimatePresence} from 'framer-motion';

function App() {
  const location = useLocation();

  return (
    <container>
      
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

      <AnimatePresence mode='wait' >
        <Routes key = {location.pathname} location = {location}>
          <Route path="/info" element={<Info/>} ></Route>
          <Route path="/note" element={<Note/>} ></Route>
        </Routes>
      </AnimatePresence>

    </container>
  )
}

// Them cac tinh nang:
// Luu content vao GG Sheet database

export default App;