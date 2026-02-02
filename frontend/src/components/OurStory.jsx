import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { storyData } from '../data/mock';

const OurStory = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <p className="text-[#8B9D83] uppercase tracking-[0.2em] text-sm mb-4 font-medium">
              {storyData.tagline}
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-gray-900 mb-8 leading-tight">
              Where Ancient Wisdom Meets Modern <span className="italic">Excellence</span>
            </h2>
            
            <div className="space-y-6 mb-10">
              {storyData.paragraphs.map((paragraph, index) => (
                <p key={index} className="text-gray-600 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            <Link
              to="/about"
              className="inline-flex items-center bg-[#8B9D83] hover:bg-[#7a8c73] text-white px-8 py-4 rounded-full font-medium transition-all duration-300 group"
            >
              Learn Our Story
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src={storyData.image}
                alt="Yoga pose"
                className="w-full h-[600px] object-cover"
              />
              {/* Quote overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-[#8B9D83]/90 backdrop-blur-sm p-6">
                <p className="text-white italic font-serif text-lg">
                  "{storyData.quote}"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
