import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
        <div className="logo">
            <Link to="/">
                <img src="/assets/raasis_logo.svg" alt="Logo" />
            </Link>
        </div>
        <nav>
            <ul>
                <li>
                    <Link onClick={() => scrollToSection('services_section')}><span className="material-symbols-sharp left-side">linked_services</span>Services<span className="material-symbols-sharp right-side">keyboard_double_arrow_down</span>
                    </Link>
                    <ul className="submenu">
                        <li><Link to="/services/software-development"><span className="material-symbols-sharp sub-side">developer_mode_tv</span>Software Development</Link></li>
                        <li><Link to="/services/website-design"><span className="material-symbols-sharp sub-side">devices_other</span>Website Design & Development</Link></li>
                        <li><Link to="/services/web-application"><span className="material-symbols-sharp sub-side">stacks</span>Web Application Development</Link></li>
                        <li><Link to="/services/mobile-application"><span className="material-symbols-sharp sub-side">developer_mode</span>Mobile Application Development</Link></li>
                        <li><Link to="/services/website-maintenance"><span className="material-symbols-sharp sub-side">handyman</span>Maintenance & Content Management</Link></li>
                        <li><Link to="/services/software-project"><span className="material-symbols-sharp sub-side">monitoring</span>Software Project Management</Link></li>
                        <li><Link to="/services/mvp-development"><span className="material-symbols-sharp sub-side">rocket_launch</span>MVP Development</Link></li>
                        <li><Link to="/services/computer-architecture"><span className="material-symbols-sharp sub-side">computer</span>Computer Architecture</Link></li>
                        <li><Link to="/services/graphics-design"><span className="material-symbols-sharp sub-side">design_services</span>Graphics Design</Link></li>

                        <RotatingText />
                    </ul>
                </li>
                <li>
                    <Link to="/about-us"><span className="material-symbols-sharp left-side">query_stats</span>About Us<span className="material-symbols-sharp right-side">keyboard_double_arrow_down</span>
                    </Link>
                    <ul className="submenu">
                        <li><Link to="/about-us/our-culture"><span className="material-symbols-sharp sub-side">house_with_shield</span>Our Culture</Link></li>
                        <li><Link to="/about-us/our-team"><span className="material-symbols-sharp sub-side">groups</span>Our Team</Link></li>
                        <li><Link to="/about-us/blog"><span className="material-symbols-sharp sub-side">article</span>Blog</Link></li>
                    </ul>
                </li>
                <li><Link to="/industries"><span className="material-symbols-sharp left-side">precision_manufacturing</span>Industries</Link></li>
                <li><Link to="/built-by-us"><span className="material-symbols-sharp left-side">deployed_code</span>Built By Us</Link></li>
                <li>
                    <Link to="/hire-a-developer"><span className="material-symbols-sharp left-side">deployed_code_account</span>Hire A Developer<span className="material-symbols-sharp right-side">keyboard_double_arrow_down</span>
                    </Link>
                    <ul className="submenu">
                        <li><Link to="/hire-a-developer/front-end"><span className="material-symbols-sharp sub-side">flip_to_front</span>Front-End</Link></li>
                        <li><Link to="/hire-a-developer/back-end"><span className="material-symbols-sharp sub-side">flip_to_back</span>Back-End</Link></li>
                    </ul>
                </li>
            </ul>
        </nav>
        <div className="cta-button">
            <Link to="/contact">Let's Get Started</Link>
        </div>
    </header>
  );
}

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
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

export default Header;
