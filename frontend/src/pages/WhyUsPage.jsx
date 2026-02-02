import React from 'react';
import Navbar from '../components/Navbar';
import WhyUs from '../components/WhyUs';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import { translations } from '../data/mock';
import { useLanguage } from '../context/LanguageContext';

const WhyUsPage = () => {
  const { language } = useLanguage();
  const t = translations[language].whyUsPage;

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-[#fafaf8]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-[#8B9D83] uppercase tracking-[0.2em] text-sm mb-4 font-medium">
            {t.tagline}
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-gray-900 mb-6">
            {t.title.split(' ')[0]} <span className="italic">{t.title.split(' ').slice(1).join(' ')}</span>
          </h1>
          <p className="text-gray-600 max-w-2xl text-lg">
            {t.subtitle}
          </p>
        </div>
      </section>

      <WhyUs />

      {/* Additional Info */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif text-gray-900 mb-6">
            {t.professionalTitle}
          </h2>
          <p className="text-gray-600 leading-relaxed mb-8">
            {t.professionalDesc}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-serif text-[#8B9D83] mb-2">500+</div>
              <p className="text-gray-600 text-sm">{t.happyTravelers}</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-serif text-[#8B9D83] mb-2">15+</div>
              <p className="text-gray-600 text-sm">{t.destinations}</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-serif text-[#8B9D83] mb-2">10+</div>
              <p className="text-gray-600 text-sm">{t.yearsExperience}</p>
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
