import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function TechnologiesSection() {
    const categories = [
        { id: 'mobile', name: 'Mobile', images: ['ios_swift.svg', 'kotlin_logo.svg', 'flutter.svg', 'react_native.svg', 'pwa_logo.svg'] },
        { id: 'frontend', name: 'Front-End', images: ['frontend1.jpg', 'frontend2.jpg', 'frontend3.jpg'] },
        { id: 'backend', name: 'Back-End', images: ['backend1.jpg', 'backend2.jpg', 'backend3.jpg'] },
        { id: 'cms', name: 'CMS & ECommerce', images: ['cms1.jpg', 'cms2.jpg', 'cms3.jpg'] },
        { id: 'database', name: 'Database', images: ['database1.jpg', 'database2.jpg', 'database3.jpg'] },
        { id: 'cloud', name: 'Cloud', images: ['cloud1.jpg', 'cloud2.jpg', 'cloud3.jpg'] },
        { id: 'graphics', name: 'Graphics Design', images: ['graphics1.jpg', 'graphics2.jpg', 'graphics3.jpg'] },
      ];

      //Manage Selected Category
      const [selectedCategory, setSelectedCategory] = useState(categories[0]);
      
  return (
    <div className="technologies-section">
      <h2>We Build & Deploy Across The Tech Stack</h2>
      <p>Our team of expert designers, developers, and engineers are highly skilled in both classic and modern technologies.</p>
      
      <nav className="technologies-nav">
        <ul>
            {categories.map(category => (
                <li key={category.id}>
                    <Link
                        to={`/technologies/${category.id}`}
                        className={selectedCategory.id === category.id ? 'active' : ''}
                        onClick={() => setSelectedCategory(category)}
                    >
                        {category.name}
                    </Link>
                </li>
            ))}
        </ul>
      </nav>
      
      <div className="technologies-carousel">
        <div className="carousel-inner" style={{ transform: `translateX(-${categories.indexOf(selectedCategory) * 100}%)` }}>
            {selectedCategory.images.map((image, index) => (
                <img key={index} src={`/assets/${image}`} alt={selectedCategory.name} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default TechnologiesSection;
