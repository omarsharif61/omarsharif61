import React from 'react';
import { Leaf, Heart, Globe, Shield } from 'lucide-react';
import { features, translations } from '../data/mock';
import { useLanguage } from '../context/LanguageContext';

const iconMap = {
  leaf: Leaf,
  heart: Heart,
  globe: Globe,
  shield: Shield
};

const WhyUs = () => {
  const { language } = useLanguage();
  const t = translations[language].whyUs;
  const currentFeatures = features[language];

  return (
    <section className="py-24 bg-[#fafaf8]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#8B9D83] uppercase tracking-[0.2em] text-sm mb-4 font-medium">
            {t.tagline}
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-gray-900 mb-6">
            {t.title}
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {currentFeatures.map((feature) => {
            const IconComponent = iconMap[feature.icon];
            return (
              <div
                key={feature.id}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-[#e8ede5] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#8B9D83] transition-colors duration-300">
                  <IconComponent className="w-7 h-7 text-[#8B9D83] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-serif text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
