import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Phone, Calendar, CheckCircle } from 'lucide-react';

const dotPatternUrl = "data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E";

const CTASection = () => {
  return (
    <section className="py-16 lg:py-20 bg-gradient-to-br from-rgl-red via-rgl-red-dark to-red-800 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{ backgroundImage: `url("${dotPatternUrl}")` }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-6 lg:mb-8"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-4 lg:mb-6 px-4">
              Ready to Scale Your Business with
              <span className="block text-rgl-gold">Exclusive Leads?</span>
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-100 max-w-4xl mx-auto leading-relaxed px-4">
              Join thousands of successful businesses growing with our proven lead generation system. 
              Get started today and see results within 24 hours.
            </p>
          </motion.div>

          {/* Benefits List - Mobile Optimized */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 mb-8 lg:mb-12 max-w-4xl mx-auto px-4"
          >
            {[
              'Exclusive leads never shared',
              'Pre-qualified prospects',
              'Real-time lead delivery'
            ].map((benefit, index) => (
              <div key={index} className="flex items-center justify-center space-x-3 p-3 lg:p-0 bg-white/5 lg:bg-transparent rounded-lg lg:rounded-none">
                <CheckCircle className="w-5 h-5 lg:w-6 lg:h-6 text-rgl-gold flex-shrink-0" />
                <span className="text-base lg:text-lg">{benefit}</span>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons - Mobile First */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4 lg:space-x-6 mb-8 lg:mb-12 px-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-rgl-red px-6 lg:px-8 py-3 lg:py-4 rounded-lg font-bold text-base lg:text-lg flex items-center justify-center space-x-2 hover:bg-gray-100 transition-all shadow-xl"
            >
              <Calendar className="w-5 h-5 lg:w-6 lg:h-6" />
              <span>Schedule Free Consultation</span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white px-6 lg:px-8 py-3 lg:py-4 rounded-lg font-bold text-base lg:text-lg flex items-center justify-center space-x-2 hover:bg-white hover:text-rgl-red transition-all"
            >
              <Phone className="w-5 h-5 lg:w-6 lg:h-6" />
              <span>Call (123) 456-7890</span>
            </motion.button>
          </motion.div>

          {/* Urgency Element - Mobile Optimized */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-white/10 backdrop-blur-sm rounded-xl lg:rounded-2xl p-4 lg:p-6 max-w-2xl mx-auto mb-8 lg:mb-0"
          >
            <div className="text-base lg:text-lg font-semibold mb-2">
              🚀 Limited Time Offer
            </div>
            <p className="text-gray-100 mb-3 lg:mb-4 text-sm lg:text-base">
              Get your first 10 leads FREE when you sign up this month. 
              No setup fees, no long-term contracts required.
            </p>
            <div className="text-xs lg:text-sm text-rgl-gold font-medium">
              Offer expires in 7 days
            </div>
          </motion.div>

          {/* Trust Indicators - Mobile Optimized */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-8 lg:mt-12 pt-6 lg:pt-8 border-t border-white/20"
          >
            <p className="text-gray-200 mb-3 lg:mb-4 text-sm lg:text-base">Trusted by 2,500+ businesses nationwide</p>
            <div className="grid grid-cols-2 lg:flex lg:flex-wrap justify-center items-center gap-3 lg:gap-8">
              {['BBB A+ Rated', 'TCPA Compliant', '24/7 Support', '100% Satisfaction Guarantee'].map((trust, index) => (
                <div key={index} className="text-xs lg:text-sm text-gray-300 font-medium text-center bg-white/5 lg:bg-transparent py-2 lg:py-0 px-2 lg:px-0 rounded lg:rounded-none">
                  {trust}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;