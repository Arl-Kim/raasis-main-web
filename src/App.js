import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Services from './components/Services';
import AboutUs from './components/AboutUs';
import Industries from './components/Industries';
import BuiltByUs from './components/BuiltByUs';
import HireADeveloper from './components/HireADeveloper';
import SoftwareDevelopment from './components/services/SoftwareDevelopment';
import WebsiteDesign from './components/services/WebsiteDesign';
import WebApplication from './components/services/WebApplication';
import MobileApplication from './components/services/MobileApplication';
import WebsiteMaintenance from './components/services/WebsiteMaintenance';
import SoftwareProject from './components/services/SoftwareProject';
import MvpDevelopment from './components/services/MvpDevelopment';
import ComputerArchitecture from './components/services/ComputerArchitecture';
import GraphicsDesign from './components/services/GraphicsDesign';
import OurCulture from './components/about-us/OurCulture';
import OurTeam from './components/about-us/OurTeam';
import Blog from './components/about-us/Blog';
import FrontEnd from './components/hire-a-developer/FrontEnd';
import BackEnd from './components/hire-a-developer/BackEnd';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <div className="logo">
            <Link to="/">
              <img src="/assets/logo.png" alt="Logo" />
            </Link>
          </div>
          <nav>
            <ul>
              <li>
                <Link to="/services">Services<span class="material-symbols-sharp">keyboard_double_arrow_down</span>
                </Link>
                <ul className="submenu">
                  <RotatingText />
                  <li><Link to="/services/software-development">Software Development</Link></li>
                  <li><Link to="/services/website-design">Website Design & Development</Link></li>
                  <li><Link to="/services/web-application">Web Application Development</Link></li>
                  <li><Link to="/services/mobile-application">Mobile Application Development</Link></li>
                  <li><Link to="/services/website-maintenance">Maintenance & Content Management</Link></li>
                  <li><Link to="/services/software-project">Software Project Management</Link></li>
                  <li><Link to="/services/mvp-development">MVP Development</Link></li>
                  <li><Link to="/services/computer-architecture">Computer Architecture</Link></li>
                  <li><Link to="/services/graphics-design">Graphics Design</Link></li>
                </ul>
              </li>
              <li>
                <Link to="/about-us">About Us<span class="material-symbols-sharp">keyboard_double_arrow_down</span>
                </Link>
                <ul className="submenu">
                  <li><Link to="/about-us/our-culture">Our Culture</Link></li>
                  <li><Link to="/about-us/our-team">Our Team</Link></li>
                  <li><Link to="/about-us/blog">Blog</Link></li>
                </ul>
              </li>
              <li><Link to="/industries">Industries</Link></li>
              <li><Link to="/built-by-us">Built By Us</Link></li>
              <li>
                <Link to="/hire-a-developer">Hire A Developer<span class="material-symbols-sharp">keyboard_double_arrow_down</span>
                </Link>
                <ul className="submenu">
                  <li><Link to="/hire-a-developer/front-end">Front-End</Link></li>
                  <li><Link to="/hire-a-developer/back-end">Back-End</Link></li>
                </ul>
              </li>
            </ul>
          </nav>
          <div className="cta-button">
            <Link to="/contact">Let's Get Started</Link>
          </div>
        </header>

        <Routes>
          <Route path="/services" element={<Services />} />
          
          <Route path="/services/software-development" element={<SoftwareDevelopment />} />
          <Route path="/services/website-design" element={<WebsiteDesign />} />
          <Route path="/services/web-application" element={<WebApplication />} />
          <Route path="/services/mobile-application" element={<MobileApplication />} />
          <Route path="/services/website-maintenance" element={<WebsiteMaintenance />} />
          <Route path="/services/software-project" element={<SoftwareProject />} />
          <Route path="/services/mvp-development" element={<MvpDevelopment />} />
          <Route path="/services/computer-architecture" element={<ComputerArchitecture />} />
          <Route path="/services/graphics-design" element={<GraphicsDesign />} />
          
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/about-us/our-culture" element={<OurCulture />} />
          <Route path="/about-us/our-team" element={<OurTeam />} />
          <Route path="/about-us/blog" element={<Blog />} />
          
          <Route path="/industries" element={<Industries />} />
          <Route path="/built-by-us" element={<BuiltByUs />} />

          <Route path="/hire-a-developer" element={<HireADeveloper />} />
          <Route path="/hire-a-developer/front-end" element={<FrontEnd />} />
          <Route path="/hire-a-developer/back-end" element={<BackEnd />} />
        </Routes>
      </div>
    </Router>
  );
}

function RotatingText() {
  const phrases = [
    'We build and deploy across the tech stack',
    'We strictly adhere to industry proven Agile SE processes',
    'We guarantee robust and secure digital products',
  ];

  const [currentPhrase, setCurrentPhrase] = useState(phrases[0]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * phrases.length);
      setCurrentPhrase(phrases[randomIndex]);
    }, 10000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="submenu-text">
      <p>Here's What We Do</p>
      <p>{currentPhrase}</p>
    </div>
  );
}

export default App;
