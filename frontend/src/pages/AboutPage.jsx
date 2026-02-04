import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import { translations } from '../data/mock';
import { useLanguage } from '../context/LanguageContext';

const STORY_IMAGE = "https://images.unsplash.com/photo-1545389336-cf090694435e?w=800&q=80";

const AboutPage = () => {
  const { language } = useLanguage();
  const t = translations[language].aboutPage;
  const st = translations[language].story;

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

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-serif text-gray-900 mb-6">
                Omar Sharif Retreats
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>{st.paragraph1}</p>
                <p>{st.paragraph2}</p>
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center mt-8 bg-[#8B9D83] hover:bg-[#7a8c73] text-white px-8 py-4 rounded-full font-medium transition-all duration-300 group"
              >
                {t.startJourney}
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>
            <div className="relative">
              <img
                src={STORY_IMAGE}
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
