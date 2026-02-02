import React from 'react';
import { Link } from 'react-router-dom';
import { ctaData } from '../data/mock';

const CTASection = () => {
  return (
    <section className="relative py-32">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={ctaData.backgroundImage}
          alt="Group yoga"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-white mb-6">
          {ctaData.title}
        </h2>
        <p className="text-lg text-gray-200 mb-10 max-w-2xl mx-auto">
          {ctaData.subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/retreats"
            className="inline-flex items-center justify-center bg-[#8B9D83] hover:bg-[#7a8c73] text-white px-8 py-4 rounded-full font-medium transition-all duration-300"
          >
            Explore Retreats
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/30 px-8 py-4 rounded-full font-medium transition-all duration-300"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
