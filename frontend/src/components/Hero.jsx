import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const LOGO_URL = "https://customer-assets.emergentagent.com/job_yoga-retreat-2/artifacts/ydby3oq7_omar-sharif-logo-highres.png";
const HERO_BG = "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1920&q=80";

const Hero = () => {
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <section className="relative h-screen min-h-[700px] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={HERO_BG}
          alt="Yoga meditation"
          className="w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-20">
        <div className="max-w-3xl">
          {/* Brand Logo as Hero Anchor */}
          <div className="mb-8">
            <div 
              className="h-20 md:h-24 lg:h-28 w-auto drop-shadow-lg bg-white/90 rounded-lg p-3 backdrop-blur-sm"
              style={{ maxWidth: '220px', display: 'inline-block' }}
            >
              <img 
                src={LOGO_URL} 
                alt="Omar Sharif - International Yoga" 
                className="h-full w-auto object-contain"
              />
            </div>
          </div>

          {/* Tagline */}
          <p className="text-[#c4cfc0] uppercase tracking-[0.2em] text-sm mb-6 font-medium">
            International Yoga Tourism Business
          </p>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6">
            <span className="font-serif italic">Rediscover Your </span>
            <span className="font-serif italic text-[#c4cfc0]">Inner Peace</span>
            <span className="font-serif"> Through Transformational Journeys</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg text-gray-200 mb-10 max-w-2xl leading-relaxed">
            Experience luxury wellness retreats that reconnect mind, body, and nature. Professional tourism services backed by ENC HOLIDAY's expertise.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/retreats"
              className="inline-flex items-center justify-center bg-[#8B9D83] hover:bg-[#7a8c73] text-white px-8 py-4 rounded-full font-medium transition-all duration-300 group"
            >
              Discover Retreats
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/30 px-8 py-4 rounded-full font-medium transition-all duration-300"
            >
              Plan Your Journey
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center cursor-pointer" onClick={scrollToContent}>
        <span className="text-white/70 uppercase tracking-[0.2em] text-xs mb-3">Scroll</span>
        <div className="w-px h-12 bg-white/30 relative overflow-hidden">
          <div className="w-full h-4 bg-white/70 animate-pulse absolute top-0" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
