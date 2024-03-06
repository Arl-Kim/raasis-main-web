import React from 'react';

function ServicesOverviewSection() {
  return (
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
        <h3>Mobile Application Development</h3>
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
        <h3>Web Design & Development</h3>
        <p>Custom static or dynamic website tailored to your needs.</p>
        <button>Learn More</button>
      </div>

    </div>
  );
}

export default ServicesOverviewSection;