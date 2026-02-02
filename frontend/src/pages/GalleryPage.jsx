import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&q=80",
    alt: "Yoga meditation at sunset"
  },
  {
    src: "https://images.unsplash.com/photo-1545389336-cf090694435e?w=600&q=80",
    alt: "Yoga pose in nature"
  },
  {
    src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80",
    alt: "Group yoga session"
  },
  {
    src: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&q=80",
    alt: "Bali temple"
  },
  {
    src: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&q=80",
    alt: "Nepal mountains"
  },
  {
    src: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=600&q=80",
    alt: "Thailand beach"
  },
  {
    src: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=600&q=80",
    alt: "Meditation retreat"
  },
  {
    src: "https://images.unsplash.com/photo-1508672019048-805c876b67e2?w=600&q=80",
    alt: "Beach yoga"
  },
  {
    src: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&q=80",
    alt: "Mountain retreat"
  }
];

const GalleryPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-[#fafaf8]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-[#8B9D83] uppercase tracking-[0.2em] text-sm mb-4 font-medium">
            Visual Journey
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-gray-900 mb-6">
            Our <span className="italic">Gallery</span>
          </h1>
          <p className="text-gray-600 max-w-2xl text-lg">
            Explore moments of tranquility, transformation, and connection from our retreats around the world.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-2xl aspect-square group cursor-pointer"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default GalleryPage;
