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
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services/*" element={<ServicesRoutes />} />
          <Route path="/about-us/*" element={<AboutUsRoutes />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/built-by-us" element={<BuiltByUs />} />
          <Route path="/hire-a-developer/*" element={<HireADeveloperRoutes />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

function Home() {
  return (
    <>
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
    </>
  );
}

function ServicesRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Services />} />
      <Route path="/software-development" element={<SoftwareDevelopment />} />
      <Route path="/website-design" element={<WebsiteDesign />} />
      <Route path="/web-application" element={<WebApplication />} />
      <Route path="/mobile-application" element={<MobileApplication />} />
      <Route path="/website-maintenance" element={<WebsiteMaintenance />} />
      <Route path="/software-project" element={<SoftwareProject />} />
      <Route path="/mvp-development" element={<MvpDevelopment />} />
      <Route path="/computer-architecture" element={<ComputerArchitecture />} />
      <Route path="/graphics-design" element={<GraphicsDesign />} />
    </Routes>
  );
}

function AboutUsRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AboutUs />} />
      <Route path="/our-culture" element={<OurCulture />} />
      <Route path="/our-team" element={<OurTeam />} />
      <Route path="/blog" element={<Blog />} />
    </Routes>
  );
}

function HireADeveloperRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HireADeveloper />} />
      <Route path="/front-end" element={<FrontEnd />} />
      <Route path="/back-end" element={<BackEnd />} />
    </Routes>
  );
}

export default App;