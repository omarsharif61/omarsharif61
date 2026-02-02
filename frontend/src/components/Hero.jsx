import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { translations } from '../data/mock';
import { useLanguage } from '../context/LanguageContext';

const HERO_BG = "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1920&q=80";

const Hero = () => {
  const { language } = useLanguage();
  const t = translations[language].hero;

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
          {/* Tagline */}
          <p className="text-[#c4cfc0] uppercase tracking-[0.2em] text-sm mb-6 font-medium">
            {t.tagline}
          </p>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6">
            <span className="font-serif italic">{t.titlePart1}</span>
            <span className="font-serif italic text-[#c4cfc0]">{t.titleHighlight}</span>
            <span className="font-serif">{t.titlePart2}</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg text-gray-200 mb-10 max-w-2xl leading-relaxed">
            {t.subtitle}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/retreats"
              className="inline-flex items-center justify-center bg-[#8B9D83] hover:bg-[#7a8c73] text-white px-8 py-4 rounded-full font-medium transition-all duration-300 group"
            >
              {t.discoverRetreats}
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/30 px-8 py-4 rounded-full font-medium transition-all duration-300"
            >
              {t.planJourney}
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center cursor-pointer" onClick={scrollToContent}>
        <span className="text-white/70 uppercase tracking-[0.2em] text-xs mb-3">{t.scroll}</span>
        <div className="w-px h-12 bg-white/30 relative overflow-hidden">
          <div className="w-full h-4 bg-white/70 animate-pulse absolute top-0" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
