import React from 'react';

function TechnologiesSection() {
  return (
    <div className="technologies-section">
      <h2>We Build & Deploy Across The Tech Stack</h2>
      <p>Our team of expert designers, developers, and engineers are highly skilled in both classic and modern technologies.</p>
      
      <nav className="technologies-nav">
        <ul>
          <li><Link to="/technologies/mobile" className="active">Mobile</Link></li>
          <li><Link to="/technologies/frontend">Front-End</Link></li>
          <li><Link to="/technologies/backend">Back-End</Link></li>
          <li><Link to="/technologies/cms">CMS & ECommerce</Link></li>
          <li><Link to="/technologies/database">Database</Link></li>
          <li><Link to="/technologies/cloud">Cloud</Link></li>
          <li><Link to="/technologies/graphics">Graphics Design</Link></li>
        </ul>
      </nav>
      
      <div className="technologies-carousel">
        {/* Carousel content will go here */}
      </div>
    </div>
  );
}

export default TechnologiesSection;
