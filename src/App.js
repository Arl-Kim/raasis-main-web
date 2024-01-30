import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Services from './components/Services';
import AboutUs from './components/AboutUs';
import Industries from './components/Industries';
import BuiltByUs from './components/BuiltByUs';
import HireADeveloper from './components/HireADeveloper';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/about-us">About Us</Link></li>
            <li><Link to="/industries">Industries</Link></li>
            <li><Link to="/built-by-us">Built By Us</Link></li>
            <li><Link to="/hire-a-developer">Hire A Developer</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/services" component={Services} />
          <Route path="/about-us" component={AboutUs} />
          <Route path="/industries" component={Industries} />
          <Route path="/built-by-us" component={BuiltByUs} />
          <Route path="/hire-a-developer" component={HireADeveloper} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
