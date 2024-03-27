import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Header from './components/Header';
import IntroductionSection from './components/IntroductionSection';
import ProjectProcessSection from './components/ProjectProcessSection';
import ServicesOverviewSection from './components/ServicesOverviewSection';
import TechnologiesSection from './components/TechnologiesSection';
import RecentProjectsSection from './components/RecentProjectsSection';
import ClientRecognitionSection from './components/ClientRecognitionSection';
import ClientTestimonialsSection from './components/ClientTestimonialsSection';
import WhyChooseSection from './components/WhyChooseSection';
import LeadGenerationSection from './components/LeadGenerationSection';
import Footer from './components/Footer';
import Services from './components/Services';
import AboutUs from './components/AboutUs';
import Industries from './components/Industries';
import BuiltByUs from './components/BuiltByUs';
import HireADeveloper from './components/HireADeveloper';
import SoftwareDevelopment from './components/services/SoftwareDevelopment';
import WebsiteDesign from './components/services/WebsiteDesign';
import WebApplication from './components/services/WebApplication';
import MobileApplication from './components/services/MobileApplication';
import WebsiteMaintenance from './components/services/WebsiteMaintenance';
import SoftwareProject from './components/services/SoftwareProject';
import MvpDevelopment from './components/services/MvpDevelopment';
import ComputerArchitecture from './components/services/ComputerArchitecture';
import GraphicsDesign from './components/services/GraphicsDesign';
import OurCulture from './components/about-us/OurCulture';
import OurTeam from './components/about-us/OurTeam';
import Blog from './components/about-us/Blog';
import FrontEnd from './components/hire-a-developer/FrontEnd';
import BackEnd from './components/hire-a-developer/BackEnd';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">

        <Header />
        
        <IntroductionSection />

        <ProjectProcessSection />

        <div id='services_section'>
          <ServicesOverviewSection />
        </div>

        <TechnologiesSection />

        <RecentProjectsSection />

        <ClientRecognitionSection />

        <ClientTestimonialsSection />

        <WhyChooseSection />

        <LeadGenerationSection />

        <Routes>
          <Route path="/services" element={<Services />} />
          
          <Route path="/services/software-development" element={<SoftwareDevelopment />} />
          <Route path="/services/website-design" element={<WebsiteDesign />} />
          <Route path="/services/web-application" element={<WebApplication />} />
          <Route path="/services/mobile-application" element={<MobileApplication />} />
          <Route path="/services/website-maintenance" element={<WebsiteMaintenance />} />
          <Route path="/services/software-project" element={<SoftwareProject />} />
          <Route path="/services/mvp-development" element={<MvpDevelopment />} />
          <Route path="/services/computer-architecture" element={<ComputerArchitecture />} />
          <Route path="/services/graphics-design" element={<GraphicsDesign />} />
          
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/about-us/our-culture" element={<OurCulture />} />
          <Route path="/about-us/our-team" element={<OurTeam />} />
          <Route path="/about-us/blog" element={<Blog />} />
          
          <Route path="/industries" element={<Industries />} />
          <Route path="/built-by-us" element={<BuiltByUs />} />

          <Route path="/hire-a-developer" element={<HireADeveloper />} />
          <Route path="/hire-a-developer/front-end" element={<FrontEnd />} />
          <Route path="/hire-a-developer/back-end" element={<BackEnd />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
