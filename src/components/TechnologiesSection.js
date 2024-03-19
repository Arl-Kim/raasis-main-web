import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function TechnologiesSection() {
    const categories = [
        { id: 'mobile', name: 'Mobile', images: ['ios_swift.svg', 'kotlin_logo.svg', 'flutter.svg', 'react_native.svg', 'pwa_logo.svg'], labels: ['Swift', 'Kotlin', 'Flutter', 'React Native', 'PWA'] },
        { id: 'frontend', name: 'Front-End', images: ['html.svg', 'css.svg', 'javascript.svg', 'react.svg', 'angular.svg', 'vue.svg', 'next.svg', 'meteor.svg', 'gatsby.svg', 'nuxtjs_icon.svg'], labels: ['HTML', 'CSS', 'JavaScript', 'React', 'Angular', 'Vue', 'Next.js', 'Meteor', 'Gatsby', 'Nuxt.js'] },
        { id: 'backend', name: 'Back-End', images: ['java.svg', 'nest.svg', 'net_core.svg', 'net_mvc.svg', 'node.svg', 'php.svg', 'python.svg'], labels: ['Java', 'Nest', '.NET Core', '.NET MVC', 'Node.js', 'PHP', 'Python'] },
        { id: 'cms', name: 'CMS & ECommerce', images: ['contentful.svg', 'magento.svg', 'meteor.svg', 'quintype.svg', 'shopify.svg', 'strapi.svg', 'woo_commerce.svg', 'wordpress.svg'], labels: ['Contentful', 'Magento', 'Meteor', 'Quintype', 'Shopify', 'Strapi', 'WooCommerce', 'WordPress'] },
        { id: 'database', name: 'Database', images: ['firebase.svg', 'mongodb.svg', 'mysql_server.svg', 'NoSQL.svg', 'oracle.svg', 'postgre_SQl.svg', 'SQL_server.svg'], labels: ['Firebase', 'MongoDB', 'MySQL Server', 'NoSQL', 'Oracle', 'PostgreSQL', 'SQL Server'] },
        { id: 'cloud', name: 'Cloud', images: ['aws.svg', 'azure_logo.svg', 'gcp.svg', 'heroku.svg'], labels: ['AWS', 'Microsoft Azure', 'Google Cloud Platform', 'Heroku'] },
        { id: 'graphics', name: 'Graphics Design', images: ['adobe_illustrator.svg', 'adobe_indesign.svg', 'adobe_photoshop.svg', 'blender.svg', 'canva.svg', 'figma.svg'], labels: ['Adobe Illustrator', 'Adobe InDesign', 'Adobe Photoshop', 'Blender', 'Canva', 'Figma'] },
      ];

      //Manage Selected Category
      const [selectedCategory, setSelectedCategory] = useState(categories[0]);
      
  return (
    <div className="technologies-section">
      <div className='technologies-intro'>
        <h2>We Build & Deploy Across The Tech Stack</h2>
        <p>Our team of expert designers, developers, and engineers are highly skilled in both classic and modern technologies.</p>
      </div>
      
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
      
      <div className="technologies-images">
        {selectedCategory.images.map((image, index) => (
            <div key={index} className="technology-image">
                <img src={`/assets/${image}`} alt={selectedCategory.labels[index]} />
                <p>{selectedCategory.labels[index]}</p>
            </div>
        ))}
      </div>
    </div>
  );
}

export default TechnologiesSection;
