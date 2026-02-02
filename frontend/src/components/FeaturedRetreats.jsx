import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { retreats } from '../data/mock';

const FeaturedRetreats = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <p className="text-[#8B9D83] uppercase tracking-[0.2em] text-sm mb-4 font-medium">
              Featured Retreats
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-gray-900">
              Begin Your Journey
            </h2>
          </div>
          <Link
            to="/retreats"
            className="flex items-center text-[#8B9D83] hover:text-[#7a8c73] font-medium mt-6 md:mt-0 transition-colors duration-200 group"
          >
            View All Retreats
            <ChevronRight className="ml-1 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </div>

        {/* Retreats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {retreats.map((retreat) => (
            <div
              key={retreat.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={retreat.image}
                  alt={retreat.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Location & Duration */}
                <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                  <span>{retreat.location}</span>
                  <span>{retreat.duration}</span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-serif text-gray-900 mb-3">
                  {retreat.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">
                  {retreat.description}
                </p>

                {/* Price & CTA */}
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
  );
};

export default FeaturedRetreats;
