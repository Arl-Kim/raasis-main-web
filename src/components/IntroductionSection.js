import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

function IntroductionSection(){
  const images = [
    '/assets/js.webp',
    '/assets/angular.webp',
    '/assets/Vue.webp',
    '/assets/apple.webp',
    '/assets/android.webp',
    '/assets/PhP.webp',
    '/assets/ruby.webp',
    '/assets/MySQL.webp',
    '/assets/aws.webp',
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Control interval as needed

    return () => clearInterval(intervalId);
  }, []);


    return(
        <div className="introduction-container">
            {/* Left Section (Image Carousel) */}
            <div className="left-section">
              <div className="img-container">
                <img src={images[currentImageIndex]} alt={`Image ${currentImageIndex + 1}`} />
              </div>
            </div>
            
            {/* Right Section (Rotating Text) */}
            <div className="right-section">
                <RotatingHeaderText />
                <div className="intro-paragraph">
                  <p>
                    We design, build, deploy and manage custom software as well as digital products and tools that are utilised in a number of industries. Are you an individual, a startup or even an established market leader in your industry ? Ra'Asis could be your trusted IT partner today. Together we will tap into the power of digital innovation and craft your success story. Our development approach combines strict Agile Software Engineering processes with efficient CI/CD methods.
                  </p>
                </div>

                {/* Buttons Section */}
                <div className="intro-buttons">
                  <Link to="/request-quote" id="dev_team">
                    Get Your Dev Team
                  </Link>
                  <Link to="/about-us" id="more_about">
                    More About Ra'Asis
                  </Link>
                </div>
            </div>
        </div>
    );
}

function RotatingHeaderText(){
    const phrases = [
        'Robust & Secure',
        'Quality Assured',
        'Technology For The Future',
      ];
    
      const [currentPhrase, setCurrentPhrase] = useState(phrases[0]);
    
      useEffect(() => {
        const intervalId = setInterval(() => {
          const randomIndex = Math.floor(Math.random() * phrases.length);
          setCurrentPhrase(phrases[randomIndex]);
        }, 5000); // Will adjust accordingly later
    
        return () => clearInterval(intervalId);
      }, []);
    
      return (
        <h2 className="rotating-header">
          {currentPhrase}
        </h2>
      );
}

export default IntroductionSection;
