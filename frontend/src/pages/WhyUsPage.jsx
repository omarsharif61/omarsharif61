import React from 'react';
import Navbar from '../components/Navbar';
import WhyUs from '../components/WhyUs';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';

const WhyUsPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-[#fafaf8]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-[#8B9D83] uppercase tracking-[0.2em] text-sm mb-4 font-medium">
            Why Choose Us
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-gray-900 mb-6">
            A Sacred <span className="italic">Pause</span>
          </h1>
          <p className="text-gray-600 max-w-2xl text-lg">
            Our retreats are not escapes — they are gateways to long-lasting transformation.
          </p>
        </div>
      </section>

      <WhyUs />

      {/* Additional Info */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif text-gray-900 mb-6">
            Professional Tourism Excellence
          </h2>
          <p className="text-gray-600 leading-relaxed mb-8">
            Backed by ENC HOLIDAY's professional tourism infrastructure, we guarantee quality service from booking to return, with contracted prices and personalized care. Our licensed agency ensures every aspect of your journey is handled with expertise and attention to detail.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-serif text-[#8B9D83] mb-2">500+</div>
              <p className="text-gray-600 text-sm">Happy Travelers</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-serif text-[#8B9D83] mb-2">15+</div>
              <p className="text-gray-600 text-sm">Destinations</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-serif text-[#8B9D83] mb-2">10+</div>
              <p className="text-gray-600 text-sm">Years Experience</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default WhyUsPage;
