import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import TrustSection from './components/TrustSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import WorkflowSection from './components/WorkflowSection';
import HiringSection from './components/HiringSection';
import TechnologiesSection from './components/TechnologiesSection';
import DeliverablesSection from './components/DeliverablesSection';
import WhyChooseUsSection from './components/WhyChooseUsSection';
import CapabilitiesSection from './components/CapabilitiesSection';
import ClientTypesSection from './components/ClientTypesSection';
import CTASection from './components/CTASection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-sky-500 selection:text-white">
      {/* Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        <HeroSection />
        <TrustSection />
        <AboutSection />
        <ServicesSection />
        <WorkflowSection />
        <HiringSection />
        <TechnologiesSection />
        <DeliverablesSection />
        <WhyChooseUsSection />
        <CapabilitiesSection />
        <ClientTypesSection />
        <CTASection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
