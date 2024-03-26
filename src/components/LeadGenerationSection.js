import React, { useState } from 'react';

const LeadGenerationSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    email: '',
    serviceOfInterest: '',
    budget: '',
    projectDescription: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send form data to email address
    console.log('Form submitted:', formData);
    
    // Clear form fields after submission
    setFormData({
      name: '',
      phoneNumber: '',
      email: '',
      serviceOfInterest: '',
      budget: '',
      projectDescription: ''
    });
  };

  return (
    <div className="lead-generation-section">
      <div className="lead-gen-left">
        <h2>We Are Software Engineers, Combining Code & Creativity With Agile Software Engineering Processes</h2>
        <p>
          Check out the case studies for what we have built recently over at the 
          <a href="/built-by-us" target="_blank" rel="noopener noreferrer"> Built By Us </a>
          page. If you are ready to work, let us discuss your project in detail.<br/>
          <span className="arrow-icon">&#10132;</span>
        </p>
      </div>
      <div className="lead-gen-right">
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" required /><br/>
          <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} placeholder="Phone Number" required /><br/>
          <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required /><br/>
          <select name="serviceOfInterest" value={formData.serviceOfInterest} onChange={handleChange} required>
            <option value="">Service Of Interest</option>
            {/* Replace the following options with your nine main services */}
            <option value="Service 1">Service 1</option>
            <option value="Service 2">Service 2</option>
            {/* Add more options as needed */}
          </select><br/>
          <select name="budget" value={formData.budget} onChange={handleChange} required>
            <option value="">Choose Budget</option>
            {/* Add ranges of amounts as options */}
            <option value="KES 10K - KES 20K">KES 10K - KES 20K</option>
            {/* Add more options as needed */}
          </select><br/>
          <textarea name="projectDescription" value={formData.projectDescription} onChange={handleChange} placeholder="Project Description" required /><br/>
          <button type="submit">Send Details</button>
        </form>
      </div>
    </div>
  );
};

export default LeadGenerationSection;
