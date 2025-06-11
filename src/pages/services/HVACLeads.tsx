import React from 'react';
import { motion } from 'framer-motion';
import { Wind, CheckCircle, Star, Shield, Clock, Users } from 'lucide-react';

const HVACLeads = () => {
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
                <Wind className="w-6 h-6 text-rgl-gold" />
                <span className="text-rgl-gold font-semibold text-lg">HVAC LEADS</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
                Premium HVAC Leads
                <span className="block text-rgl-gold">That Convert</span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-red-100 mb-8 leading-relaxed max-w-4xl mx-auto">
                Heating, cooling, installation, and maintenance opportunities from qualified customers 
                actively seeking HVAC services. Get exclusive leads with verified project details.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 max-w-5xl mx-auto"
            >
              {[
                'Emergency service calls',
                'System replacements',
                'Maintenance contracts',
                'Commercial & residential'
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

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <Shield className="w-8 h-8" />, stat: '90%', label: 'Lead Quality', desc: 'Pre-qualified prospects' },
              { icon: <Clock className="w-8 h-8" />, stat: '< 3min', label: 'Response Time', desc: 'Emergency leads delivered fast' },
              { icon: <Users className="w-8 h-8" />, stat: '750+', label: 'HVAC Partners', desc: 'Contractors we serve' }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 text-center shadow-lg"
              >
                <div className="text-rgl-red mb-4 flex justify-center">{item.icon}</div>
                <div className="text-3xl font-bold text-rgl-charcoal mb-2">{item.stat}</div>
                <div className="text-lg font-semibold text-rgl-charcoal mb-1">{item.label}</div>
                <div className="text-rgl-gray text-sm">{item.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Types */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-rgl-charcoal mb-4">
              Types of HVAC Leads We Provide
            </h2>
            <p className="text-xl text-rgl-gray max-w-3xl mx-auto">
              From emergency repairs to planned installations, we deliver diverse HVAC opportunities
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Emergency Repairs',
                desc: 'Urgent heating/cooling failures requiring immediate service',
                value: 'High Value',
                color: 'bg-red-500'
              },
              {
                title: 'System Replacements',
                desc: 'Full HVAC system installations and upgrades',
                value: 'Premium',
                color: 'bg-orange-500'
              },
              {
                title: 'Maintenance Contracts',
                desc: 'Recurring service agreements and tune-ups',
                value: 'Recurring',
                color: 'bg-blue-500'
              },
              {
                title: 'Commercial Projects',
                desc: 'Large-scale commercial HVAC installations',
                value: 'Enterprise',
                color: 'bg-purple-500'
              }
            ].map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all"
              >
                <div className={`${type.color} text-white p-3 rounded-lg w-fit mb-4`}>
                  <Wind className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-rgl-charcoal mb-3">{type.title}</h3>
                <p className="text-rgl-gray mb-4 text-sm">{type.desc}</p>
                <div className="bg-gray-50 rounded-lg px-3 py-2">
                  <span className="text-rgl-red font-semibold text-sm">{type.value}</span>
                </div>
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
              HVAC Lead Pricing
            </h2>
            <p className="text-xl text-rgl-gray max-w-3xl mx-auto">
              Competitive pricing for high-quality HVAC leads. No setup fees or long-term commitments.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: 'Residential',
                price: '$125',
                leads: '10-15 leads/month',
                features: ['Home HVAC services', 'Repairs & maintenance', 'SMS & email delivery', 'Standard support']
              },
              {
                name: 'Professional',
                price: '$100',
                leads: '20-30 leads/month',
                features: ['Residential + light commercial', 'System replacements', 'Priority delivery', '24/7 support'],
                popular: true
              },
              {
                name: 'Commercial',
                price: '$200',
                leads: '5-10 leads/month',
                features: ['Large commercial projects', 'High-value contracts', 'Dedicated support', 'Custom requirements']
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
                <div className="text-rgl-gray mb-6">per qualified lead</div>
                <div className="text-sm text-rgl-gray mb-6">{plan.leads}</div>
                
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

      {/* CTA Section */}
      <section className="py-20 bg-rgl-red text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Grow Your HVAC Business?
            </h2>
            <p className="text-xl text-gray-100 mb-8 max-w-3xl mx-auto">
              Join hundreds of successful HVAC contractors who rely on our lead generation services.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
                              className="bg-white text-rgl-red px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all shadow-xl"
            >
              Start Receiving HVAC Leads
            </motion.button>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default HVACLeads;