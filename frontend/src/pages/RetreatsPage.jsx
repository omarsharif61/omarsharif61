import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import { retreats } from '../data/mock';

const RetreatsPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-[#fafaf8]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-[#8B9D83] uppercase tracking-[0.2em] text-sm mb-4 font-medium">
            Our Retreats
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-gray-900 mb-6">
            Transformational <span className="italic">Journeys</span>
          </h1>
          <p className="text-gray-600 max-w-2xl text-lg">
            Explore our carefully curated retreats designed to reconnect you with your inner self through yoga, meditation, and cultural immersion.
          </p>
        </div>
      </section>

      {/* Retreats Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {retreats.map((retreat) => (
              <div
                key={retreat.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group border border-gray-100"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={retreat.image}
                    alt={retreat.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                    <span>{retreat.location}</span>
                    <span>{retreat.duration}</span>
                  </div>
                  <h3 className="text-xl font-serif text-gray-900 mb-3">
                    {retreat.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {retreat.description}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="text-gray-900 font-medium">
                      From ${retreat.price.toLocaleString()}
                    </span>
                    <Link
                      to="/contact"
                      className="text-[#8B9D83] hover:text-[#7a8c73] font-medium text-sm transition-colors duration-200"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default RetreatsPage;
