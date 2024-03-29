import React from 'react';

const RecentProjectsSection = () => {
  return (
    <div className="recent-projects-section">
      <div className="recent-projects-intro">
        <h2>Here's What We've Built & Deployed Recently</h2>
        <p>We empower startups and upcoming brands, with cutting-edge digital software products, that propel them to guaranteed success in their niche.</p>
      </div>
      <div className='rp-grid-area'>
        <div className="recent-projects-grid">
            <div className='recent-project-item'>
                <img src='/assets/moocourses.png' alt='Transfrontières MooCourses'/>
                <img className='gif' src='/assets/moocourses.gif' alt='Transfrontières MooCourses'/>
            </div>
        </div>
        <div className="recent-projects-grid">
            <div className='recent-project-item'>
                <img src='/assets/moocourses.png' alt='Transfrontières MooCourses'/>
                <img className='gif' src='/assets/moocourses.gif' alt='Transfrontières MooCourses'/>
            </div>
        </div>
        <div className="recent-projects-grid">
            <div className='recent-project-item'>
                <img src='/assets/moocourses.png' alt='Transfrontières MooCourses'/>
                <img className='gif' src='/assets/moocourses.gif' alt='Transfrontières MooCourses'/>
            </div>
        </div>
        <div className="recent-projects-grid">
            <div className='recent-project-item'>
                <img src='/assets/moocourses.png' alt='Transfrontières MooCourses'/>
                <img className='gif' src='/assets/moocourses.gif' alt='Transfrontières MooCourses'/>
            </div>
        </div>
      </div>
    </div>
  );
}

export default RecentProjectsSection;
