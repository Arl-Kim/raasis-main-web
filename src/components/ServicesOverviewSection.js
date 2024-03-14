import React from 'react';

function ServicesOverviewSection() {
  return (
    <div class="s-overview-main">
        <div class="s-overview-intro">
            <h2>Innovate For The Future With These Services</h2>
            <p>
                The power of technology across multiple industries, we have just the right solutions to align with your business goals
            </p>
        </div>
        <div className="services-overview">
      
            {/* Software Dev*/}
            <div className="service">
                <div className="service-icon">
                    <span className="material-symbols-sharp">developer_mode_tv</span>
                </div>
                <h3>Software Development</h3>
                <p>Custom software solutions for your business</p>
                <div className="service-btn">
                    <button>Learn More</button>
                </div>
            </div>

            {/*Mobile Apps*/}
            <div className="service">
                <div className="service-icon">
                    <span className="material-symbols-sharp">developer_mode</span>
                </div>
                <h3>Mobile App Development</h3>
                <p>A mobile app tailored specifically for you</p>
                <div className="service-btn">
                    <button>Learn More</button>
                </div>
            </div>

            {/*MVP Development*/}
            <div className="service">
                <div className="service-icon">
                    <span className="material-symbols-sharp">rocket_launch</span>
                </div>
                <h3>MVP Development</h3>
                <p>Get a Minimum Viable Product (faster returns)</p>
                <div className="service-btn">
                    <button>Learn More</button>
                </div>
            </div>

            {/*Website Design & Development*/}
            <div className="service">
                <div className="service-icon">
                    <span className="material-symbols-sharp">devices_other</span>
                </div>
                <h3>Website Design & Development</h3>
                <p>A static or dynamic website for your business</p>
                <div className="service-btn">
                    <button>Learn More</button>
                </div>
            </div>

            {/*M & C Management*/}
            <div className="service">
                <div className="service-icon">
                    <span className="material-symbols-sharp">handyman</span>
                </div>
                <h3>Maintenance & Management</h3>
                <p>Expert analysis maintenance and management</p>
                <div className="service-btn">
                    <button>Learn More</button>
                </div>
            </div>

            {/*Computer Architecture*/}
            <div className="service">
                <div className="service-icon">
                    <span className="material-symbols-sharp">computer</span>
                </div>
                <h3>Computer Architecture</h3>
                <p>Computer architecture solutions and fixes</p>
                <div className="service-btn">
                    <button>Learn More</button>
                </div>
            </div>

            {/*Web Application*/}
            <div className="service">
                <div className="service-icon">
                    <span className="material-symbols-sharp">stacks</span>
                </div>
                <h3>Web Application Development</h3>
                <p>A full stack web application for your business</p>
                <div className="service-btn">
                    <button>Learn More</button>
                </div>
            </div>

            {/*Software Proj. Management*/}
            <div className="service">
                <div className="service-icon">
                    <span className="material-symbols-sharp">monitoring</span>
                </div>
                <h3>Software Project Management</h3>
                <p>Professional management for your project</p>
                <div className="service-btn">
                    <button>Learn More</button>
                </div>
            </div>

            {/*Graphics*/}
            <div className="service">
                <div className="service-icon">
                    <span className="material-symbols-sharp">design_services</span>
                </div>
                <h3>Graphics Design</h3>
                <p>Captivating visuals for a lasting impression</p>
                <div className="service-btn">
                    <button>Learn More</button>
                </div>
            </div>
        </div>
    </div>
  );
}

export default ServicesOverviewSection;