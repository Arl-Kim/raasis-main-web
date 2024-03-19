import React from 'react';
import { Link } from 'react-router-dom';

function ClientRecognitionSection() {
  return (
    <div className="client-recognition-section">
      <div className="client-recognition-content">
        <div className="client-recognition-left">
          <h2>We Empower Brands Across Kenya, Africa & The World</h2>
          <p>From individual brands and startups to leading industry enterprises, Our Client Community keeps gaining new members. What makes them stay at Ra'Asis is our top-notch IT talent that facilitates upscaling of their teams or building custom software solutions. We know you have your unique needs as an individual or group and so we deliver a full spectrum of integrated design, development, and maintenance services for automation and modernization.</p>
          <img src="/assets/client_image.jpg" alt="Client Image" />
        </div>
        <div className="client-recognition-right">
          {/* Logos of brands displayed in a grid format */}
          <div className="brand-logos">
            {/* Logos go here */}
          </div>
          <Link to="/join" className="cta-button">Join Our Client Community</Link>
        </div>
      </div>
    </div>
  );
}

export default ClientRecognitionSection;
