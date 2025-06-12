import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    { name: 'Roofing Leads', path: '/services/roofing-leads' },
    { name: 'HVAC Leads', path: '/services/hvac-leads' },
    { name: 'Moving Leads', path: '/services/moving-leads' },
    { name: 'Solar Leads', path: '/services/solar-leads' },
    { name: 'Roofing Marketing', path: '/services/roofing-marketing' },
    { name: 'HVAC Marketing', path: '/services/hvac-marketing' },
  ];

  const closeMobileMenu = () => {
    setIsOpen(false);
    setMobileServicesOpen(false);
    // Scroll to top when navigating on mobile
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-rgl-red'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2" onClick={closeMobileMenu}>
            <div className={`text-2xl font-bold ${isScrolled ? 'text-rgl-red' : 'text-white'}`}>
              Really Good Leads
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link
              to="/"
              className={`font-medium transition-colors ${
                isScrolled ? 'text-rgl-charcoal hover:text-rgl-red' : 'text-white hover:text-gray-200'
              } ${location.pathname === '/' ? (isScrolled ? 'text-rgl-red' : 'text-white') : ''}`}
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className={`flex items-center space-x-1 font-medium transition-colors ${
                  isScrolled ? 'text-rgl-charcoal hover:text-rgl-red' : 'text-white hover:text-gray-200'
                }`}
              >
                <span>Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {servicesOpen && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-100 py-2"
                >
                  <Link
                    to="/services"
                    className="block px-4 py-2 text-rgl-charcoal hover:bg-gray-50 font-medium"
                    onClick={() => {
                      setServicesOpen(false);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                  >
                    All Services
                  </Link>
                  <div className="border-t border-gray-100 mt-2 pt-2">
                    {services.map((service) => (
                      <Link
                        key={service.path}
                        to={service.path}
                        className="block px-4 py-2 text-rgl-gray hover:bg-gray-50 hover:text-rgl-red transition-colors"
                        onClick={() => {
                          setServicesOpen(false);
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>

            <Link
              to="/call-center"
              className={`font-medium transition-colors ${
                isScrolled ? 'text-rgl-charcoal hover:text-rgl-red' : 'text-white hover:text-gray-200'
              }`}
            >
              Call Center
            </Link>

            <Link
              to="/faqs"
              className={`font-medium transition-colors ${
                isScrolled ? 'text-rgl-charcoal hover:text-rgl-red' : 'text-white hover:text-gray-200'
              }`}
            >
              FAQs
            </Link>

            <Link
              to="/contact"
              className={`font-medium transition-colors ${
                isScrolled ? 'text-rgl-charcoal hover:text-rgl-red' : 'text-white hover:text-gray-200'
              }`}
            >
              Contact
            </Link>

            {/* Phone Number */}
            <a
              href="tel:+1234567890"
              className={`flex items-center space-x-2 font-semibold transition-colors ${
                isScrolled ? 'text-rgl-red hover:text-rgl-red-dark' : 'text-white hover:text-gray-200'
              }`}
            >
              <Phone className="w-4 h-4" />
              <span>(123) 456-7890</span>
            </a>

            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                isScrolled
                  ? 'bg-rgl-red text-white hover:bg-rgl-red-dark'
                  : 'bg-white text-rgl-red hover:bg-gray-100'
              }`}
            >
              Get Started
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-md ${
              isScrolled ? 'text-rgl-charcoal' : 'text-white'
            }`}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-200"
          >
            <div className="py-4 space-y-2">
              <Link
                to="/"
                className="block px-4 py-3 text-rgl-charcoal hover:text-rgl-red hover:bg-gray-50 font-medium rounded-lg mx-2 transition-colors"
                onClick={closeMobileMenu}
              >
                Home
              </Link>
              
              {/* Mobile Services Dropdown */}
              <div className="px-2">
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="flex items-center justify-between w-full px-4 py-3 text-rgl-charcoal hover:text-rgl-red hover:bg-gray-50 font-medium rounded-lg transition-colors"
                >
                  <span>Services</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {mobileServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-2 space-y-1 bg-gray-50 rounded-lg p-2"
                  >
                    <Link
                      to="/services"
                      className="block px-4 py-2 text-rgl-charcoal hover:text-rgl-red font-medium rounded-lg hover:bg-white transition-colors"
                      onClick={closeMobileMenu}
                    >
                      All Services
                    </Link>
                    <div className="border-t border-gray-200 my-2"></div>
                    {services.map((service) => (
                      <Link
                        key={service.path}
                        to={service.path}
                        className="block px-4 py-2 text-sm text-rgl-gray hover:text-rgl-red hover:bg-white rounded-lg transition-colors"
                        onClick={closeMobileMenu}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </div>
              
              <Link
                to="/call-center"
                className="block px-4 py-3 text-rgl-charcoal hover:text-rgl-red hover:bg-gray-50 font-medium rounded-lg mx-2 transition-colors"
                onClick={closeMobileMenu}
              >
                Call Center
              </Link>
              <Link
                to="/faqs"
                className="block px-4 py-3 text-rgl-charcoal hover:text-rgl-red hover:bg-gray-50 font-medium rounded-lg mx-2 transition-colors"
                onClick={closeMobileMenu}
              >
                FAQs
              </Link>
              <Link
                to="/contact"
                className="block px-4 py-3 text-rgl-charcoal hover:text-rgl-red hover:bg-gray-50 font-medium rounded-lg mx-2 transition-colors"
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
              
              {/* Mobile Phone & CTA */}
              <div className="border-t border-gray-200 pt-4 mt-4 px-2 space-y-3">
                <a
                  href="tel:+1234567890"
                  className="flex items-center space-x-3 px-4 py-3 text-rgl-red font-semibold bg-rgl-red/10 rounded-lg hover:bg-rgl-red/20 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <span>(123) 456-7890</span>
                </a>
                <button 
                  className="w-full bg-rgl-red text-white py-3 px-4 rounded-lg font-semibold hover:bg-rgl-red-dark transition-colors"
                  onClick={closeMobileMenu}
                >
                  Get Started
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navigation;