import React, { useState, useEffect } from 'react';
import { Phone, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, x: 100 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          exit={{ opacity: 0, scale: 0.8, x: 100 }}
          className="fixed bottom-6 right-6 z-50"
        >
          <div className="relative">
            {/* Expanded Form */}
            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 20 }}
                  className="absolute bottom-16 right-0 w-80 bg-white rounded-lg shadow-2xl border border-gray-200 p-6"
                >
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-semibold text-rgl-charcoal">Get Started Today</h3>
                    <button
                      onClick={() => setIsExpanded(false)}
                      className="text-gray-400 hover:text-gray-600"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                  
                  <form className="space-y-4">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-4 py-2 border border-rgl-light-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-rgl-red focus:border-transparent"
                    />
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full px-4 py-2 border border-rgl-light-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-rgl-red focus:border-transparent"
                    />
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      className="w-full px-4 py-2 border border-rgl-light-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-rgl-red focus:border-transparent"
                    />
                    <select className="w-full px-4 py-2 border border-rgl-light-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-rgl-red focus:border-transparent">
                      <option value="">Select Service</option>
                      <option value="roofing">Roofing Leads</option>
                      <option value="hvac">HVAC Leads</option>
                      <option value="moving">Moving Leads</option>
                      <option value="solar">Solar Leads</option>
                    </select>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      className="w-full bg-rgl-red text-white py-3 rounded-lg font-semibold hover:bg-rgl-red-dark transition-colors"
                    >
                      Request Quote
                    </motion.button>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Main CTA Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsExpanded(!isExpanded)}
              className="bg-rgl-red text-white p-4 rounded-full shadow-2xl hover:bg-rgl-red-dark transition-all duration-300 flex items-center space-x-2"
            >
              <Phone className="w-6 h-6" />
              {!isExpanded && <span className="font-semibold">Get Quote</span>}
            </motion.button>

            {/* Pulse Animation */}
            <div className="absolute inset-0 bg-rgl-red rounded-full animate-ping opacity-20"></div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingCTA;