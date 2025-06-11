import React from 'react';
import { motion } from 'framer-motion';
import { Megaphone, CheckCircle, Star, TrendingUp, Target, BarChart } from 'lucide-react';

const RoofingMarketing = () => {
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
                <span className="text-rgl-gold font-semibold text-lg">ROOFING MARKETING</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
                Complete Roofing
                <span className="block text-rgl-gold">Marketing Solutions</span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-red-100 mb-8 leading-relaxed max-w-4xl mx-auto">
                Comprehensive digital marketing services designed specifically for roofing contractors. 
                From SEO to social media, we help you dominate your local market.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 max-w-5xl mx-auto"
            >
              {[
                'SEO & Local Search',
                'Google Ads Management',
                'Social Media Marketing',
                'Website Development'
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
              Our Roofing Marketing Services
            </h2>
            <p className="text-xl text-rgl-gray max-w-3xl mx-auto">
              Comprehensive digital marketing solutions tailored specifically for roofing contractors
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Target className="w-8 h-8" />,
                title: 'PPC Management',
                description: 'Google Ads campaigns optimized for roofing keywords and storm damage leads',
                features: ['Keyword research', 'Ad creation', 'Bid management', 'Landing page optimization']
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: 'SEO Optimization',
                description: 'Local SEO strategies to dominate roofing searches in your service area',
                features: ['Local listings', 'Content creation', 'Technical SEO', 'Review management']
              },
              {
                icon: <BarChart className="w-8 h-8" />,
                title: 'Social Media',
                description: 'Professional social media presence showcasing your roofing projects',
                features: ['Content strategy', 'Post scheduling', 'Community management', 'Paid social ads']
              },
              {
                icon: <Megaphone className="w-8 h-8" />,
                title: 'Website Development',
                description: 'Professional roofing websites designed to convert visitors into leads',
                features: ['Mobile responsive', 'Lead capture forms', 'Project galleries', 'Fast loading']
              },
              {
                icon: <Star className="w-8 h-8" />,
                title: 'Reputation Management',
                description: 'Build and maintain a stellar online reputation for your roofing business',
                features: ['Review monitoring', 'Response management', 'Rating improvement', 'Crisis management']
              },
              {
                icon: <CheckCircle className="w-8 h-8" />,
                title: 'Analytics & Reporting',
                description: 'Detailed reporting on all marketing activities and ROI tracking',
                features: ['Monthly reports', 'Lead tracking', 'ROI analysis', 'Performance insights']
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
              Marketing Package Pricing
            </h2>
            <p className="text-xl text-rgl-gray max-w-3xl mx-auto">
              Choose the marketing package that fits your business goals and budget
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: 'Starter',
                price: '$2,500',
                description: 'Perfect for small roofing companies',
                features: ['Basic PPC management', 'Local SEO setup', 'Social media setup', 'Monthly reporting', 'Email support']
              },
              {
                name: 'Professional',
                price: '$5,000',
                description: 'Most popular for growing businesses',
                features: ['Advanced PPC campaigns', 'Complete SEO optimization', 'Social media management', 'Website optimization', 'Phone support', 'Bi-weekly calls'],
                popular: true
              },
              {
                name: 'Enterprise',
                price: '$10,000',
                description: 'For established roofing companies',
                features: ['Full-service marketing', 'Custom website development', 'Advanced analytics', 'Reputation management', 'Dedicated account manager', 'Weekly strategy calls']
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
              Real Results for Roofing Companies
            </h2>
            <p className="text-xl text-rgl-gray max-w-3xl mx-auto">
              See how our marketing strategies have transformed roofing businesses
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { metric: '300%', label: 'Average ROI', desc: 'Return on marketing investment' },
              { metric: '150%', label: 'Lead Increase', desc: 'More qualified leads per month' },
              { metric: '85%', label: 'Client Retention', desc: 'Long-term partnerships' }
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
              Ready to Dominate Your Local Roofing Market?
            </h2>
            <p className="text-xl text-gray-100 mb-8 max-w-3xl mx-auto">
              Let our proven marketing strategies help you become the go-to roofing contractor in your area.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-rgl-red px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all shadow-xl"
            >
              Get Free Marketing Audit
            </motion.button>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default RoofingMarketing;