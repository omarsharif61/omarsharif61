import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import WhyUs from '../components/WhyUs';
import FeaturedRetreats from '../components/FeaturedRetreats';
import OurStory from '../components/OurStory';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <FeaturedRetreats />
      <OurStory />
      <WhyUs />
      <CTASection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default HomePage;
