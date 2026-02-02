import React from 'react';
import { Leaf, Heart, Globe, Shield, Users, Award, Clock, MapPin } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';

const ServicesPage = () => {
  const services = [
    {
      icon: Leaf,
      title: "Tour Organization",
      description: "Complete tour packages with accommodation, activities, and local experiences tailored to your preferences."
    },
    {
      icon: MapPin,
      title: "Transfers & Reservations",
      description: "Seamless airport transfers and hotel reservations handled by our professional team."
    },
    {
      icon: Globe,
      title: "Flight Tickets",
      description: "Best deals on international and domestic flights with flexible booking options."
    },
    {
      icon: Users,
      title: "Charter Services",
      description: "Private charter arrangements for groups seeking exclusive travel experiences."
    },
    {
      icon: Award,
      title: "Corporate Events",
      description: "Team-building retreats and corporate wellness programs designed for businesses."
    },
    {
      icon: Heart,
      title: "Wellness Programs",
      description: "Customized wellness itineraries including spa treatments, detox programs, and healing therapies."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-[#fafaf8]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-[#8B9D83] uppercase tracking-[0.2em] text-sm mb-4 font-medium">
            What We Offer
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-gray-900 mb-6">
            Our <span className="italic">Services</span>
          </h1>
          <p className="text-gray-600 max-w-2xl text-lg">
            Comprehensive travel and wellness services backed by ENC HOLIDAY's professional tourism expertise.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={index}
                  className="bg-[#fafaf8] rounded-2xl p-8 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="w-16 h-16 bg-[#e8ede5] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#8B9D83] transition-colors duration-300">
                    <IconComponent className="w-7 h-7 text-[#8B9D83] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-serif text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ServicesPage;
