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
                <p>Custom software solutions tailored to your needs.</p>
                <button>Learn More</button>
            </div>

            {/*Mobile Apps*/}
            <div className="service">
                <div className="service-icon">
                    <span className="material-symbols-sharp">developer_mode</span>
                </div>
                <h3>Mobile App Development</h3>
                <p>Custom mobile apps tailored to your needs.</p>
                <button>Learn More</button>
            </div>

            {/*MVP Development*/}
            <div className="service">
                <div className="service-icon">
                    <span className="material-symbols-sharp">rocket_launch</span>
                </div>
                <h3>MVP Development</h3>
                <p>Get an MVP for faster returns</p>
                <button>Learn More</button>
            </div>

            {/*Website Design & Development*/}
            <div className="service">
                <div className="service-icon">
                    <span className="material-symbols-sharp">devices_other</span>
                </div>
                <h3>Website Design & Development</h3>
                <p>Custom static or dynamic website tailored to your needs.</p>
                <button>Learn More</button>
            </div>

            {/*M & C Management*/}
            <div className="service">
                <div className="service-icon">
                    <span className="material-symbols-sharp">handyman</span>
                </div>
                <h3>Maintenance & Management</h3>
                <p>Get analysis and maintenance for your existing software</p>
                <button>Learn More</button>
            </div>

            {/*Computer Architecture*/}
            <div className="service">
                <div className="service-icon">
                    <span className="material-symbols-sharp">computer</span>
                </div>
                <h3>Computer Architecture</h3>
                <p>Computer architecture solutions and fixes to easen your production processes.</p>
                <button>Learn More</button>
            </div>

            {/*Web Application*/}
            <div className="service">
                <div className="service-icon">
                    <span className="material-symbols-sharp">stacks</span>
                </div>
                <h3>Web Application Development</h3>
                <p>Get a full stack web application custom tailored to suit your business needs.</p>
                <button>Learn More</button>
            </div>

            {/*Software Proj. Management*/}
            <div className="service">
                <div className="service-icon">
                    <span className="material-symbols-sharp">monitoring</span>
                </div>
                <h3>Software Project Management</h3>
                <p>Let us manage your software project, together we can realise 100% success</p>
                <button>Learn More</button>
            </div>

            {/*Graphics*/}
            <div className="service">
                <div className="service-icon">
                    <span className="material-symbols-sharp">design_services</span>
                </div>
                <h3>Graphics Design</h3>
                <p>Experience captivating visuals from us and get your custom branding tools</p>
                <button>Learn More</button>
            </div>
        </div>
    </div>
  );
}

export default ServicesOverviewSection;