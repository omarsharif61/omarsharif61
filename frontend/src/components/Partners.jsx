import React from 'react';
import { useLanguage } from '../context/LanguageContext';

// Partner logos
const partners = [
  {
    name: "Emirates",
    logo: "https://customer-assets.emergentagent.com/job_yoga-retreat-2/artifacts/2d1uqyxp_Emirates_%28airline%29-Logo.wine.png"
  },
  {
    name: "FlyDubai",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Flydubai_logo.svg/2560px-Flydubai_logo.svg.png"
  },
  {
    name: "Qatar Airways",
    logo: "https://customer-assets.emergentagent.com/job_yoga-retreat-2/artifacts/0gu0lzlt_qatar_logo.avif"
  },
  {
    name: "SunExpress",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/SunExpress_Logo.svg/2560px-SunExpress_Logo.svg.png"
  },
  {
    name: "Pegasus Airlines",
    logo: "https://customer-assets.emergentagent.com/job_yoga-retreat-2/artifacts/msec26g0_Pegasus-Airlines-Logo-768x432.png"
  },
  {
    name: "TÜRSAB",
    logo: "https://customer-assets.emergentagent.com/job_yoga-retreat-2/artifacts/njzra960_TURSAB-RGB.png"
  },
  {
    name: "Aslı Başar Yoga Okulu",
    logo: "https://customer-assets.emergentagent.com/job_yoga-retreat-2/artifacts/28xzb7lm_WhatsApp%20Bild%202025-03-16%20um%2014.47.54_aee40682.jpg"
  },
  {
    name: "ENC Holiday",
    logo: null // Will render as text
  }
];

const Partners = () => {
  const { language } = useLanguage();
  
  const title = language === 'en' ? 'Our Partners' : 'İş Ortaklarımız';
  const subtitle = language === 'en' 
    ? 'Trusted by leading airlines and organizations worldwide'
    : 'Dünya çapında önde gelen havayolları ve kuruluşların güveniyle';

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-[#8B9D83] uppercase tracking-[0.2em] text-sm mb-4 font-medium">
            {title}
          </p>
          <p className="text-gray-500 text-base max-w-xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Logo Carousel - Desktop */}
        <div className="hidden md:flex items-center justify-center flex-wrap gap-10 lg:gap-14">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="group flex items-center justify-center h-16 transition-all duration-300"
            >
              {partner.logo ? (
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-12 lg:h-14 w-auto max-w-[140px] object-contain filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                  title={partner.name}
                />
              ) : (
                <span className="text-xl lg:text-2xl font-bold text-gray-400 group-hover:text-[#8B9D83] transition-colors duration-300 tracking-wide">
                  {partner.name}
                </span>
              )}
            </div>
          ))}
        </div>

        {/* Logo Carousel - Mobile (Horizontal Scroll) */}
        <div className="md:hidden overflow-x-auto scrollbar-hide">
          <div className="flex items-center gap-8 pb-4 px-2" style={{ minWidth: 'max-content' }}>
            {partners.map((partner, index) => (
              <div
                key={index}
                className="flex items-center justify-center h-14 flex-shrink-0"
              >
                {partner.logo ? (
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="h-10 w-auto max-w-[120px] object-contain filter grayscale opacity-60"
                    title={partner.name}
                  />
                ) : (
                  <span className="text-lg font-bold text-gray-400 tracking-wide whitespace-nowrap">
                    {partner.name}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
