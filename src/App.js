import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import IntroductionSection from './components/IntroductionSection';
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
                <Link to="/services"><span class="material-symbols-sharp left-side">linked_services</span>Services<span class="material-symbols-sharp right-side">keyboard_double_arrow_down</span>
                </Link>
                  <ul className="submenu">
                    <li><Link to="/services/software-development"><span class="material-symbols-sharp sub-side">developer_mode_tv</span>Software Development</Link></li>
                    <li><Link to="/services/website-design"><span class="material-symbols-sharp sub-side">devices_other</span>Website Design & Development</Link></li>
                    <li><Link to="/services/web-application"><span class="material-symbols-sharp sub-side">stacks</span>Web Application Development</Link></li>
                    <li><Link to="/services/mobile-application"><span class="material-symbols-sharp sub-side">developer_mode</span>Mobile Application Development</Link></li>
                    <li><Link to="/services/website-maintenance"><span class="material-symbols-sharp sub-side">handyman</span>Maintenance & Content Management</Link></li>
                    <li><Link to="/services/software-project"><span class="material-symbols-sharp sub-side">monitoring</span>Software Project Management</Link></li>
                    <li><Link to="/services/mvp-development"><span class="material-symbols-sharp sub-side">rocket_launch</span>MVP Development</Link></li>
                    <li><Link to="/services/computer-architecture"><span class="material-symbols-sharp sub-side">computer</span>Computer Architecture</Link></li>
                    <li><Link to="/services/graphics-design"><span class="material-symbols-sharp sub-side">design_services</span>Graphics Design</Link></li>
                    <RotatingText />
                  </ul>
              </li>
              <li>
                <Link to="/about-us"><span class="material-symbols-sharp left-side">query_stats</span>About Us<span class="material-symbols-sharp right-side">keyboard_double_arrow_down</span>
                </Link>
                <ul className="submenu">
                  <li><Link to="/about-us/our-culture"><span class="material-symbols-sharp sub-side">house_with_shield</span>Our Culture</Link></li>
                  <li><Link to="/about-us/our-team"><span class="material-symbols-sharp sub-side">groups</span>Our Team</Link></li>
                  <li><Link to="/about-us/blog"><span class="material-symbols-sharp sub-side">article</span>Blog</Link></li>
                </ul>
              </li>
              <li><Link to="/industries"><span class="material-symbols-sharp left-side">precision_manufacturing</span>Industries</Link></li>
              <li><Link to="/built-by-us"><span class="material-symbols-sharp left-side">deployed_code</span>Built By Us</Link></li>
              <li>
                <Link to="/hire-a-developer"><span class="material-symbols-sharp left-side">deployed_code_account</span>Hire A Developer<span class="material-symbols-sharp right-side">keyboard_double_arrow_down</span>
                </Link>
                <ul className="submenu">
                  <li><Link to="/hire-a-developer/front-end"><span class="material-symbols-sharp sub-side">flip_to_front</span>Front-End</Link></li>
                  <li><Link to="/hire-a-developer/back-end"><span class="material-symbols-sharp sub-side">flip_to_back</span>Back-End</Link></li>
                </ul>
              </li>
            </ul>
          </nav>
          <div className="cta-button">
            <Link to="/contact">Let's Get Started</Link>
          </div>
        </header>

        <IntroductionSection />

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
    'We strictly adhere to industry-proven Agile SE processes',
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
      <p>{currentPhrase}</p>
    </div>
  );
}

export default App;
