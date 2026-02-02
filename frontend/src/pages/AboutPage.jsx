import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import { storyData } from '../data/mock';

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-[#fafaf8]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-[#8B9D83] uppercase tracking-[0.2em] text-sm mb-4 font-medium">
            About Us
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-gray-900 mb-6">
            Our <span className="italic">Story</span>
          </h1>
          <p className="text-gray-600 max-w-2xl text-lg">
            Where ancient wisdom meets modern excellence in transformational yoga journeys.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-serif text-gray-900 mb-6">
                International Yoga by Omar Sharif
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  International Yoga by Omar Sharif is more than a travel company — it's a philosophy of mindful living. We believe that yoga retreats are gateways to transformation, offering a sacred pause from the demands of modern life.
                </p>
                <p>
                  Backed by ENC HOLIDAY's professional tourism infrastructure, we guarantee quality service from booking to return, with contracted prices and personalized care.
                </p>
                <p>
                  Our mission is to create transformational experiences that reconnect you with your inner self, nature, and ancient wisdom traditions from around the world.
                </p>
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center mt-8 bg-[#8B9D83] hover:bg-[#7a8c73] text-white px-8 py-4 rounded-full font-medium transition-all duration-300 group"
              >
                Start Your Journey
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>
            <div className="relative">
              <img
                src={storyData.image}
                alt="Yoga meditation"
                className="w-full h-[500px] object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default AboutPage;
