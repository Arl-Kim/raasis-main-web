import React, { useState } from 'react';

const testimonialsData = [
  {
    id: 1,
    name: 'Clara C. Lagat',
    position: 'CEO & Founder',
    company: 'Transfrontières Agencies Limited',
    testimonial: 'Working with Ra\'Asis has been a game-changer for our business. Their expertise and dedication have helped us achieve remarkable results.'
  },
  {
    id: 2,
    name: 'Eng. Onesmus Maritim',
    position: 'Founder',
    company: 'Oaks Africa Foundation',
    testimonial: 'Ra\'Asis exceeded our expectations with their innovative solutions. We are delighted with the impact their services have had on our foundation.'
  },

  {
    id: 3,
    name: 'Eng. Samwel Ochieng Young',
    position: 'Chairman',
    company: 'Mombasa Infernos Softball & Baseball Club',
    testimonial: 'Ra\'Asis exceeded our expectations with their innovative solutions. We are delighted with the impact their services have had on our club.'
  },

  {
    id: 4,
    name: 'Kelvin Kiprono',
    position: 'CEO & Founder',
    company: 'KayTech CompVilla',
    testimonial: 'Ra\'Asis exceeded our expectations with their innovative solutions. We are delighted with the impact their services have had on our firm.'
  },

  {
    id: 5,
    name: 'Francis Karugu',
    position: 'Sports Director & Manager',
    company: 'MMU Stormerz Softball Club',
    testimonial: 'Ra\'Asis exceeded our expectations with their innovative solutions. We are delighted with the impact their services have had on our club.'
  },

  // Will add more testimonials as needed
];

const ClientTestimonialsSection = () => {
    const [testimonials, setTestimonials] = useState(testimonialsData);
    const [selectedTestimonial, setSelectedTestimonial] = useState(testimonialsData[Math.floor(testimonialsData.length / 2)]);

    const handleTestimonialClick = (testimonial) => {
        const index = testimonials.findIndex((item) => item.id === testimonial.id);
        const newTestimonials = [...testimonials];
        const clickedTestimonial = newTestimonials.splice(index, 1)[0]; // Remove the clicked testimonial from the array
        const centerIndex = Math.floor(newTestimonials.length / 2); // Calculate the center index
        newTestimonials.splice(centerIndex, 0, clickedTestimonial); // Insert the clicked testimonial at the center

        setTestimonials(newTestimonials);
        setSelectedTestimonial(testimonial);
  };

  return (
    <div className="client-testimonials-section">
      <div className="client-testimonials-intro">
        <h2>If You Are Digital Happy We Are Happy</h2>
        <p>Our digital products have put smiles on many business & brand owners on their paths to success. Here are some words from some of the top minds we work with on how our services have impacted their brands.</p>
      </div>
      <div className="client-testimonials">
        <div className="client-images">
          {testimonials.map((testimonial) => (
            <img
              key={testimonial.id}
              src={`/assets/client_${testimonial.id}.jpg`}
              alt={testimonial.name}
              className={testimonial === selectedTestimonial ? 'active' : ''}
              onClick={() => handleTestimonialClick(testimonial)}
            />
          ))}
        </div>
        <div className="testimonial-content">
          <h3>{selectedTestimonial.name}</h3>
          <h4>{selectedTestimonial.position}, {selectedTestimonial.company}</h4>
          <p>{selectedTestimonial.testimonial}</p>
        </div>
      </div>
    </div>
  );
};

export default ClientTestimonialsSection;
