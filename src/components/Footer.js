import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
        <div className="footer">
            <div className="footer-left">
                <div className="footer-logo">
                    <Link to="/">
                        <img src="/assets/raasis_logo.svg" alt="Ra'Asis Logo" />
                    </Link>
                </div>
                <div className="footer-text">
                    <p>Explore and employ value-based business innovations for your business with our robust and secure digital ecosystems, designs, and sustainable digital solutions.</p>
                </div>
                <div className="footer-subscribe">
                    <form className="subscribe">
                        <label htmlFor="email-input">Subscribe For Weekly Tech Insights</label>
                        <input type="email" id="email_input" placeholder="Your E-mail Address" size="22" required />
                        <button type="submit" id="subscribe">Subscribe</button>
                        <br />
                        <small>*Your Personal Info Will Remain Confidential</small>
                    </form>
                </div>
                <div className="copyright">
                    <h6><i className='bx bx-copyright'></i>2023 || Powered By: Ra'Asis Software || All Rights Reserved</h6>
                </div>
            </div>
            <div className="footer-center">
                <div className="center-left">
                    <h4>Services</h4>
                    <ul>
                        <li><Link to="/services/mobile-application">Mobile Application Development</Link></li>
                        <li><Link to="/services/website-design">Website Design & Development</Link></li>
                        <li><Link to="/services/software-project">Software Project Management</Link></li>
                        <li><Link to="/services/web-application">Web Application Development</Link></li>
                        <li><Link to="/services/website-maintenance">Maintenance & Management</Link></li>
                        <li><Link to="/services/computer-architecture">Computer Architecture</Link></li>
                        <li><Link to="/services/software-development">Software Development</Link></li>
                        <li><Link to="/services/mvp-development">MVP Development</Link></li>
                        <li><Link to="/services/graphics-design">Graphics Design</Link></li>
                    </ul>
                </div>
                <div className="center-right">
                    <h4>About Ra'Asis</h4>
                    <ul>
                        <li><Link to="#">Security At Ra'Asis</Link></li>
                        <li><Link to="#">The Ra'Asis Team</Link></li>
                        <li><Link to="#">Robust & Secure</Link></li>
                        <li><Link to="#">Tech. Affiliates</Link></li>
                        <li><Link to="#">Testimonials</Link></li>
                        <li><Link to="#">Our Culture</Link></li>
                        <li><Link to="#">Industries</Link></li>
                        <li><Link to="#">Careers</Link></li>
                        <li><Link to="#">Blog</Link></li>
                    </ul>
                </div>
            </div>
            <div className='footer-right'>
                <div className='connect'>
                    <h4>Let's Connect</h4>
                    <ul>
                        <li><a href="mailto:info@raasissoftware.com"><i className='bx bx-mail-send'></i>info@raasissoftware.com</a></li>
                        <li><a href="tel:+254742807455"><i className='bx bx-phone-call'></i>+254742807455</a></li>
                        <li><a href="#"><i className='bx bx-current-location'></i>Nairobi, Kenya</a></li>
                    </ul>
                </div>
                <div className="footer-socials">
                    <a href="https://web.facebook.com/raasissoftware/" target="_blank" rel="noopener noreferrer"><i className='bx bxl-facebook'></i></a>
                    <a href="https://api.whatsapp.com/send?phone=254742807455&text=Hello%20Ra'Asis%20Software%2C%20I%20got%20your%20WhatsApp%20information%20from%20your%20website." target="_blank" rel="noopener noreferrer"><i className='bx bxl-whatsapp'></i></a>
                    <a href="https://www.instagram.com/ra_asis_software/" target="_blank" rel="noopener noreferrer"><i className='bx bxl-instagram'></i></a>
                    <a href="https://twitter.com/ra_asis_SW" target="_blank" rel="noopener noreferrer"><i className='bx bxl-twitter'></i></a>
                </div>
                <div className='terms-policy'>
                    <h6>Terms & Conditions || Privacy Policy || Sitemap</h6>
                </div>
            </div>
        </div>
    </footer>
  );
};

export default Footer;
