import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Globe, Menu, X } from 'lucide-react';
import { navLinks } from '../data/mock';

// New logo with black background - works great on dark surfaces
const LOGO_BLACK_BG = "https://customer-assets.emergentagent.com/job_yoga-retreat-2/artifacts/x03fqkve_omar-sharif-logo-highres%20%281%29.png";
// Original logo with white background - works great on light surfaces
const LOGO_WHITE_BG = "https://customer-assets.emergentagent.com/job_yoga-retreat-2/artifacts/ydby3oq7_omar-sharif-logo-highres.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHomePage = location.pathname === '/';
  const isOnDarkBg = !isScrolled && isHomePage;
  
  const navBg = isOnDarkBg ? 'bg-transparent' : 'bg-white shadow-sm';
  const textColor = isOnDarkBg ? 'text-white' : 'text-gray-800';
  
  // Use black-bg logo on dark backgrounds (transparent nav), white-bg logo on light backgrounds (white nav)
  const currentLogo = isOnDarkBg ? LOGO_BLACK_BG : LOGO_WHITE_BG;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src={currentLogo} 
              alt="Omar Sharif - International Yoga" 
              className="h-12 md:h-14 w-auto object-contain transition-all duration-300"
              style={{ maxWidth: '160px' }}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`${textColor} hover:text-[#8B9D83] transition-colors duration-200 text-sm font-medium`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right side items */}
          <div className="hidden lg:flex items-center space-x-4">
            <button className={`flex items-center space-x-1 ${textColor} hover:text-[#8B9D83] transition-colors duration-200`}>
              <Globe className="w-4 h-4" />
              <span className="text-sm">EN</span>
            </button>
            <Link
              to="/contact"
              className="bg-[#8B9D83] hover:bg-[#7a8c73] text-white px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-200"
            >
              Book Retreat
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className={`lg:hidden ${textColor}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white rounded-lg shadow-lg mt-2 py-4 px-4 absolute left-4 right-4">
            {/* Mobile Logo - always use white background version */}
            <div className="pb-4 mb-4 border-b border-gray-100">
              <img 
                src={LOGO_WHITE_BG} 
                alt="Omar Sharif - International Yoga" 
                className="h-10 w-auto object-contain"
              />
            </div>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="block py-3 text-gray-800 hover:text-[#8B9D83] transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="border-t mt-4 pt-4">
              <Link
                to="/contact"
                className="block w-full bg-[#8B9D83] hover:bg-[#7a8c73] text-white px-6 py-3 rounded-full text-center font-medium transition-all duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Book Retreat
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
