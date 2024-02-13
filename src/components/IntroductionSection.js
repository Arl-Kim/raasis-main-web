import React, {useState, useEffect} from 'react';

function IntroductionSection(){
    return(
        <div className="introduction-container">
            {/* Left Section (Image Carousel) */}
            <div className="left-section">
              <div className="img-container">
                <img src="/assets/js.webp" />
              </div>
            </div>
            
            {/* Right Section (Rotating Text) */}
            <div className="right-section">
                <RotatingHeaderText />
                <div className="intro-paragraph">
                  <p>
                    Welcome to The Ra'Asis somaCode Platform, where coding meets creativity in a fun and engaging atmosphere! 🌟 Whether you're a coding newbie or a tech enthusiast, our platform offers a range of exciting learning sections, from HTML, CSS & JavaScript to Python and Java. Uncover the secrets of coding magic, experiment with dynamic languages, and turn your ideas into digital masterpieces. With our user-friendly approach featuring a number of engaging exercises and scenarios, you'll be amazed at how coding becomes an adventure.

                    Join us on this exciting journey, and let's craft a world of innovation together! We will transform businesses of most major sectors with powerful and adaptable digital solutions that satisfy the needs of today. 
                  </p>
                </div>
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
