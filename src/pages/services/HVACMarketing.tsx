import React from 'react';
import { motion } from 'framer-motion';
import { Settings, CheckCircle, Star, TrendingUp, Target, BarChart, Wind, Megaphone, ArrowRight, Shield, Clock } from 'lucide-react';

const HVACMarketing = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-16 lg:pt-20"
    >
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-rgl-red via-rgl-red-dark to-red-900 text-white py-12 lg:py-20 overflow-hidden min-h-screen flex items-center">
        {/* Background Effects */}
        <div className="absolute inset-0">
          {/* Gradient Orbs */}
          <motion.div
            className="absolute top-1/4 right-1/4 w-96 h-96 bg-rgl-gold/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-white/5 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
          />
          
          {/* Dot Pattern */}
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
                <Megaphone className="w-6 h-6 text-rgl-gold" />
                <span className="text-rgl-gold font-semibold text-lg">HVAC MARKETING</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
                Complete HVAC
                <span className="block text-rgl-gold">Marketing Solutions</span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-red-100 mb-8 leading-relaxed max-w-4xl mx-auto">
                Specialized digital marketing services designed exclusively for HVAC contractors. 
                Drive more emergency calls and increase your local market share.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 max-w-5xl mx-auto"
            >
              {[
                'Local SEO Domination',
                'Emergency PPC Ads',
                'Social Media Growth',
                'Mobile-First Websites'
              ].map((feature, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  className="flex items-center justify-center space-x-3 bg-white/5 backdrop-blur-sm rounded-xl px-4 py-3"
                >
                  <CheckCircle className="w-5 h-5 text-rgl-gold flex-shrink-0" />
                  <span className="text-gray-100 font-medium">{feature}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex justify-center"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-rgl-red px-12 py-4 rounded-xl font-bold text-xl hover:bg-gray-100 transition-all shadow-2xl"
              >
                Get Started Today
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-rgl-charcoal mb-4">
              Our HVAC Marketing Services
            </h2>
            <p className="text-xl text-rgl-gray max-w-3xl mx-auto">
              Specialized digital marketing solutions designed for heating and cooling contractors
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Target className="w-8 h-8" />,
                title: 'Seasonal Campaigns',
                description: 'Strategic marketing campaigns timed for peak heating and cooling seasons',
                features: ['Summer cooling prep', 'Winter heating focus', 'Maintenance reminders', 'Emergency service ads']
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: 'Local SEO',
                description: 'Dominate local HVAC searches and emergency service queries',
                features: ['Google My Business', 'Local citations', 'Service area pages', 'Emergency keywords']
              },
              {
                icon: <BarChart className="w-8 h-8" />,
                title: 'PPC Management',
                description: 'Google Ads campaigns optimized for HVAC services and emergency calls',
                features: ['Emergency service ads', 'Seasonal bidding', 'Mobile optimization', 'Call extensions']
              },
              {
                icon: <Settings className="w-8 h-8" />,
                title: 'Website Optimization',
                description: 'HVAC-focused websites designed to capture emergency and scheduled services',
                features: ['Emergency contact forms', 'Service scheduling', 'Mobile responsive', 'Fast loading']
              },
              {
                icon: <Star className="w-8 h-8" />,
                title: 'Review Management',
                description: 'Build trust with professional review management and reputation building',
                features: ['Review monitoring', 'Response templates', 'Rating improvement', 'Customer follow-up']
              },
              {
                icon: <CheckCircle className="w-8 h-8" />,
                title: 'Social Media',
                description: 'Professional social presence showcasing HVAC expertise and customer service',
                features: ['Educational content', 'Before/after photos', 'Customer testimonials', 'Seasonal tips']
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all"
              >
                <div className="text-rgl-red mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-rgl-charcoal mb-3">{service.title}</h3>
                <p className="text-rgl-gray mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2 text-sm text-rgl-gray">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-rgl-charcoal mb-4">
              HVAC Marketing Packages
            </h2>
            <p className="text-xl text-rgl-gray max-w-3xl mx-auto">
              Choose the marketing package that fits your HVAC business needs and growth goals
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: 'Essential',
                price: '$2,000',
                description: 'Perfect for small HVAC companies',
                features: ['Basic PPC management', 'Local SEO setup', 'Google My Business', 'Monthly reporting', 'Email support']
              },
              {
                name: 'Growth',
                price: '$4,000',
                description: 'Most popular for growing HVAC businesses',
                features: ['Advanced PPC campaigns', 'Complete SEO optimization', 'Seasonal campaigns', 'Review management', 'Phone support', 'Bi-weekly calls'],
                popular: true
              },
              {
                name: 'Dominate',
                price: '$8,000',
                description: 'For established HVAC companies',
                features: ['Full-service marketing', 'Custom website development', 'Advanced analytics', 'Social media management', 'Dedicated account manager', 'Weekly strategy calls']
              }
            ].map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`bg-white rounded-2xl p-8 shadow-lg ${plan.popular ? 'ring-2 ring-rgl-red transform scale-105' : ''}`}
              >
                {plan.popular && (
                  <div className="bg-rgl-red text-white text-sm font-semibold px-4 py-1 rounded-full text-center mb-4">
                    Most Popular
                  </div>
                )}
                
                <h3 className="text-2xl font-bold text-rgl-charcoal mb-2">{plan.name}</h3>
                <div className="text-4xl font-bold text-rgl-red mb-1">{plan.price}</div>
                <div className="text-rgl-gray mb-4">per month</div>
                <p className="text-rgl-gray mb-6">{plan.description}</p>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                      <span className="text-rgl-charcoal">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                  plan.popular 
                    ? 'bg-rgl-red text-white hover:bg-rgl-red-dark' 
                    : 'bg-gray-100 text-rgl-charcoal hover:bg-gray-200'
                }`}>
                  Get Started
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-rgl-charcoal mb-4">
              Proven Results for HVAC Companies
            </h2>
            <p className="text-xl text-rgl-gray max-w-3xl mx-auto">
              See how our specialized HVAC marketing strategies deliver real business growth
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { metric: '250%', label: 'Lead Growth', desc: 'Average increase in qualified leads' },
              { metric: '400%', label: 'ROI', desc: 'Return on marketing investment' },
              { metric: '90%', label: 'Client Satisfaction', desc: 'Long-term client retention rate' }
            ].map((result, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center bg-gray-50 rounded-2xl p-8"
              >
                <div className="text-4xl font-bold text-rgl-red mb-2">{result.metric}</div>
                <div className="text-lg font-semibold text-rgl-charcoal mb-1">{result.label}</div>
                <div className="text-rgl-gray">{result.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-rgl-red text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Dominate Your Local HVAC Market?
            </h2>
            <p className="text-xl text-gray-100 mb-8 max-w-3xl mx-auto">
              Let our proven HVAC marketing strategies help you become the go-to heating and cooling contractor in your area.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-rgl-red px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all shadow-xl"
            >
              Get Free HVAC Marketing Audit
            </motion.button>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default HVACMarketing;