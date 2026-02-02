import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { translations } from '../data/mock';
import { useLanguage } from '../context/LanguageContext';

const STORY_IMAGE = "https://images.unsplash.com/photo-1545389336-cf090694435e?w=800&q=80";

const OurStory = () => {
  const { language } = useLanguage();
  const t = translations[language].story;

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[#8B9D83] uppercase tracking-[0.2em] text-sm mb-4 font-medium">
              {t.tagline}
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-gray-900 mb-8 leading-tight">
              {t.title}
            </h2>
            
            <div className="space-y-6 mb-10">
              <p className="text-gray-600 leading-relaxed">{t.paragraph1}</p>
              <p className="text-gray-600 leading-relaxed">{t.paragraph2}</p>
            </div>

            <Link
              to="/about"
              className="inline-flex items-center bg-[#8B9D83] hover:bg-[#7a8c73] text-white px-8 py-4 rounded-full font-medium transition-all duration-300 group"
            >
              {t.learnStory}
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src={STORY_IMAGE}
                alt="Yoga pose"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-[#8B9D83]/90 backdrop-blur-sm p-6">
                <p className="text-white italic font-serif text-lg">
                  "{t.quote}"
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
