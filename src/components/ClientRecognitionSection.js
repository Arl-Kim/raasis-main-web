import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

function ClientRecognitionSection() {
  return (
    <div className="client-recognition-section">
        <div className="client-recognition-left">
          <RotatingHeader />
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
  );
}

function RotatingHeader(){
    const phrases = [
        'We Empower Brands Across Kenya, Africa & The World',
        'In Equal Measure They Empower Us',
        'Join Our Growing Client Community Today',
      ];
    
      const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
    
      useEffect(() => {
        const intervalId = setInterval(() => {
          setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
        }, 5000); // Will adjust accordingly later
    
        return () => clearInterval(intervalId);
      }, []);
    
      return (
        <h2>
          {phrases[currentPhraseIndex]}
        </h2>
      );
}

export default ClientRecognitionSection;
