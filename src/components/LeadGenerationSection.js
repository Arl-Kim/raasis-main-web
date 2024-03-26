import React, { useState } from 'react';

const LeadGenerationSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    email: '',
    country: '',
    serviceOfInterest: '',
    budget: '',
    projectDescription: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3001/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        console.log('Form submitted successfully');
        // Clear form fields after successful submission
        setFormData({
          name: '',
          phoneNumber: '',
          email: '',
          country: '',
          serviceOfInterest: '',
          budget: '',
          projectDescription: ''
        });
      } else {
        console.error('Failed to submit form');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
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
          <div className='input-box'>
              <div className='input-field'>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
              </div>
              <div className='input-field'>
                  <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} placeholder="Phone Number" required />
              </div>
          </div>

          <div className='input-box'>
              <div className='input-field'>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
              </div>
              <div className='input-field'>
                  <input type="country" name="country" value={formData.country} onChange={handleChange} placeholder="Country" required />
              </div>
          </div>

          <div className='input-box'>
              <div className='select-field'>
                  <select name="serviceOfInterest" value={formData.serviceOfInterest} onChange={handleChange} required>
                      <option value="">Service Of Interest</option>
                      <option value="Software Development">Software Development</option>
                      <option value="Website Design & Development">Website Design & Development</option>
                      <option value="Web Application Development">Web Application Development</option>
                      <option value="Mobile Application Development">Mobile Application Development</option>
                      <option value="MVP Development">MVP Development</option>
                      <option value="Maintenance">Maintenance</option>
                      <option value="Software Project Management">Software Project Management</option>
                      <option value="Computer Architecture">Computer Architecture</option>
                      <option value="Graphics Design">Graphics Design</option>
                  </select>
              </div>
              <div className='select-field'>
                  <select name="budget" value={formData.budget} onChange={handleChange} required>
                      <option value="">Choose Budget</option>
                      <option value="Below KES 10K">Below KES 10K</option>
                      <option value="KES 10K - KES 20K">KES 10K - KES 20K</option>
                      <option value="KES 20K - KES 40K">KES 20K - KES 40K</option>
                      <option value="KES 40K - KES 80K">KES 40K - KES 80K</option>
                      <option value="KES 80K - KES 160K">KES 80K - KES 160K</option>
                      <option value="KES 160K - KES 320K">KES 160K - KES 320K</option>
                      <option value="Above KES 320K">Above KES 320K</option>
                      {/* Will add more options as needed */}
                  </select>
              </div>
          </div>
          <div className='input-box'>
            <div className='textarea-field'>
                <textarea name="projectDescription" value={formData.projectDescription} onChange={handleChange} placeholder="Project Description" required></textarea>
            </div>
          </div>
          <div className='input-box'>
            <div className='submit-btn'>
              <button type="submit">Send Details</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LeadGenerationSection;
