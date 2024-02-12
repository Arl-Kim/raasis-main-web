import React, {useState, useEffect} from 'react';

function IntroductionSection(){
    return(
        <div className="introduction-container">
            {/* Left Section (Image Carousel) */}
            <div className="left-section">
                <img src="/assets/android.webp" alt="Image 1" />
                <img src="/assets/apple.webp" alt="Image 2" />
                <img src="/assets/angular.webp" alt="Image 1" />
                <img src="/assets/Vue.webp" alt="Image 1" />
                <img src="/assets/PhP.webp" alt="Image 2" />
                <img src="/assets/ruby.webp" alt="Image 1" />
                <img src="/assets/MySQL.webp" alt="Image 1" />
                <img src="/assets/aws.webp" alt="Image 2" />
            </div>
            
            {/* Right Section (Rotating Text) */}
            <div className="right-section">
                <RotatingHeaderText />
                <p>
                    Your paragraph text here.
                </p>
            </div>
        </div>
    );
}

function RotatingHeaderText(){
    const phrases = [
        'Robust & Secure',
        'Quality Assured',
        'Technology From & For The Future',
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
