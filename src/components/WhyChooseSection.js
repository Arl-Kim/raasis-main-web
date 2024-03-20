import React from 'react';

const WhyChooseSection = () => {
  return (
    <div className="why-choose-section">
      <div className="why-choose-introduction">
        <h2>Why Choose Ra'Asis?</h2>
        <p>Partnering with us comes with guaranteed digital transformation for your brand.</p>
      </div>
      <div className="why-choose-reasons">
        <div className="reason-card" id='light_orange'>
          <div className="reason-icon"><i className='bx bx-happy'></i></div>
          <h3>99%</h3>
          <h4>Client Satisfaction</h4>
        </div>
        <div className="reason-card" id='dark_orange'>
          <div className="reason-icon"><i className='bx bxs-package'></i></div>
          <h3>100++</h3>
          <h4>Completed Projects</h4>
        </div>
        <div className="reason-card" id='light_blue'>
          <div className="reason-icon"><i className='bx bxs-user-plus'></i></div>
          <h3>100%</h3>
          <h4>Client Retention Rate</h4>
        </div>
        <div className="reason-card" id='light_orange'>
          <div className="reason-icon"><i className='bx bxs-award'></i></div>
          <h3>5++</h3>
          <h4>Years Of Experience</h4>
        </div>
        <div className="reason-card" id='dark_orange'>
          <div className="reason-icon"><i className='material-symbols-sharp'>handyman</i></div>
          <h3>4 Weeks</h3>
          <h4>Free Maintenance After Deployment</h4>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseSection;
