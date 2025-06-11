import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Calendar } from 'lucide-react';

const dotPatternUrl = "data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E";

const HeroSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    company: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section className="relative bg-gradient-to-br from-rgl-red via-rgl-red-dark to-red-800 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{ backgroundImage: `url("${dotPatternUrl}")` }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Trust Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium"
            >
              <CheckCircle className="w-4 h-4 text-rgl-gold" />
              <span>100% Compliant & Exclusive Leads</span>
            </motion.div>

            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="space-y-4"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Exclusive, Compliant &{' '}
                <span className="text-rgl-gold">High-Quality Leads</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-100 leading-relaxed">
                Stop wasting money on shared leads. Get exclusive, verified prospects delivered directly to your business.
              </p>
            </motion.div>

            {/* Value Points */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {[
                'Never shared or resold',
                'Real-time lead delivery',
                'Full contact information',
                'Pre-qualified prospects'
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-rgl-gold flex-shrink-0" />
                  <span className="text-gray-100">{feature}</span>
                </div>
              ))}
            </motion.div>

                         {/* CTA Button */}
             <motion.div
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.8, duration: 0.6 }}
               className="flex"
             >
               <motion.button
                 whileHover={{ scale: 1.05 }}
                 whileTap={{ scale: 0.95 }}
                 className="bg-white text-rgl-red px-8 py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 hover:bg-gray-100 transition-all shadow-xl"
               >
                 <Calendar className="w-5 h-5" />
                 <span>Schedule Demo</span>
               </motion.button>
             </motion.div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-white rounded-2xl shadow-2xl p-8"
          >
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-rgl-charcoal mb-2">Get Your Free Quote</h2>
              <p className="text-rgl-gray">Start receiving high-quality leads today</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name *"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="px-4 py-3 border border-rgl-light-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-rgl-red focus:border-transparent transition-all text-rgl-charcoal placeholder-rgl-gray"
                />
                <input
                  type="text"
                  name="company"
                  placeholder="Company Name"
                  value={formData.company}
                  onChange={handleChange}
                  className="px-4 py-3 border border-rgl-light-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-rgl-red focus:border-transparent transition-all text-rgl-charcoal placeholder-rgl-gray"
                />
              </div>

              <input
                type="email"
                name="email"
                placeholder="Email Address *"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-rgl-light-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-rgl-red focus:border-transparent transition-all text-rgl-charcoal placeholder-rgl-gray"
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number *"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-rgl-light-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-rgl-red focus:border-transparent transition-all text-rgl-charcoal placeholder-rgl-gray"
              />

              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-rgl-light-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-rgl-red focus:border-transparent transition-all text-rgl-charcoal"
              >
                <option value="">Select Service Type *</option>
                <option value="roofing">Roofing Leads</option>
                <option value="hvac">HVAC Leads</option>
                <option value="moving">Moving Leads</option>
                <option value="solar">Solar Leads</option>
                <option value="roofing-marketing">Roofing Marketing</option>
                <option value="hvac-marketing">HVAC Marketing</option>
              </select>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-rgl-red text-white py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 hover:bg-rgl-red-dark transition-all shadow-lg"
              >
                <span>Get Free Quote</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </form>

            <p className="text-xs text-rgl-gray text-center mt-4">
              By submitting this form, you agree to our Terms of Service and Privacy Policy. We respect your privacy and will never share your information.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;