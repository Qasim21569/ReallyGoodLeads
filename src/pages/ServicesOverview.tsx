import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Home, Wind, Truck, Sun, Megaphone, Settings, CheckCircle, Star } from 'lucide-react';

const ServicesOverview = () => {
  const leadServices = [
    {
      icon: <Home className="w-8 h-8" />,
      title: 'Roofing Leads',
      description: 'Storm damage, roof repairs, and replacement prospects ready to hire',
      features: ['Insurance claim leads', 'Storm damage prospects', 'Residential & commercial'],
      path: '/services/roofing-leads',
      color: 'bg-blue-500',
      price: 'Starting at $150/lead'
    },
    {
      icon: <Wind className="w-8 h-8" />,
      title: 'HVAC Leads',
      description: 'Heating, cooling, installation, and maintenance service opportunities',
      features: ['Emergency service calls', 'System replacements', 'Maintenance contracts'],
      path: '/services/hvac-leads',
      color: 'bg-green-500',
      price: 'Starting at $125/lead'
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: 'Moving Leads',
      description: 'Local and long-distance moving service requests from qualified customers',
      features: ['Residential moves', 'Commercial relocations', 'Storage services'],
      path: '/services/moving-leads',
      color: 'bg-orange-500',
      price: 'Starting at $100/lead'
    },
    {
      icon: <Sun className="w-8 h-8" />,
      title: 'Solar Leads',
      description: 'Residential solar installation prospects interested in renewable energy',
      features: ['Homeowner leads', 'Qualified income levels', 'Roof suitability verified'],
      path: '/services/solar-leads',
      color: 'bg-yellow-500',
      price: 'Starting at $200/lead'
    }
  ];

  const marketingServices = [
    {
      icon: <Megaphone className="w-8 h-8" />,
      title: 'Roofing Marketing',
      description: 'Complete marketing campaigns designed specifically for roofing companies',
      features: ['PPC management', 'SEO optimization', 'Social media marketing'],
      path: '/services/roofing-marketing',
      color: 'bg-purple-500',
      price: 'Starting at $2,500/month'
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: 'HVAC Marketing',
      description: 'Comprehensive marketing solutions for heating and cooling businesses',
      features: ['Local SEO', 'Seasonal campaigns', 'Review management'],
      path: '/services/hvac-marketing',
      color: 'bg-indigo-500',
      price: 'Starting at $2,000/month'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-16 lg:pt-20"
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-rgl-red via-rgl-red-dark to-red-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Our Premium Services
            </h1>
            <p className="text-xl lg:text-2xl text-gray-100 max-w-4xl mx-auto leading-relaxed">
              Choose from our comprehensive suite of lead generation and marketing services designed to grow your business
            </p>
          </motion.div>
        </div>
      </section>

      {/* Lead Generation Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-rgl-charcoal mb-4">
              Lead Generation Services
            </h2>
            <p className="text-xl text-rgl-gray max-w-3xl mx-auto">
              Exclusive, pre-qualified leads delivered directly to your business
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {leadServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-gray-100"
              >
                <div className={`${service.color} text-white p-4 rounded-xl w-fit mb-6`}>
                  {service.icon}
                </div>

                <h3 className="text-2xl font-bold text-rgl-charcoal mb-4">
                  {service.title}
                </h3>
                
                <p className="text-rgl-gray mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-rgl-charcoal">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="border-t border-gray-200 pt-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-2xl font-bold text-rgl-red">
                      {service.price}
                    </div>
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                  
                  <Link
                    to={service.path}
                    className="block w-full bg-rgl-red text-white text-center py-3 rounded-lg font-semibold hover:bg-rgl-red-dark transition-colors"
                  >
                    Learn More
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Marketing Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-rgl-charcoal mb-4">
              Marketing Services
            </h2>
            <p className="text-xl text-rgl-gray max-w-3xl mx-auto">
              Complete marketing solutions to grow your brand and generate more leads
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {marketingServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-gray-100"
              >
                <div className={`${service.color} text-white p-4 rounded-xl w-fit mb-6`}>
                  {service.icon}
                </div>

                <h3 className="text-2xl font-bold text-rgl-charcoal mb-4">
                  {service.title}
                </h3>
                
                <p className="text-rgl-gray mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-rgl-charcoal">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="border-t border-gray-200 pt-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-2xl font-bold text-rgl-red">
                      {service.price}
                    </div>
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                  
                  <Link
                    to={service.path}
                    className="block w-full bg-rgl-red text-white text-center py-3 rounded-lg font-semibold hover:bg-rgl-red-dark transition-colors"
                  >
                    Learn More
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-rgl-charcoal mb-4">
              Why Choose Really Good Leads?
            </h2>
            <p className="text-xl text-rgl-gray max-w-3xl mx-auto">
              See how we compare to other lead generation companies
            </p>
          </motion.div>

          <div className="bg-gray-50 rounded-2xl p-8 overflow-x-auto">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-4 px-4 font-semibold text-rgl-charcoal">Feature</th>
                  <th className="text-center py-4 px-4 font-semibold text-rgl-red">Really Good Leads</th>
                  <th className="text-center py-4 px-4 font-semibold text-rgl-gray">Competitors</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Lead Exclusivity', '100% Exclusive', 'Often Shared'],
                  ['Lead Quality', 'Pre-qualified & Verified', 'Mixed Quality'],
                  ['Response Time', 'Under 5 minutes', '1-24 hours'],
                  ['Support', '24/7 Live Support', 'Business Hours Only'],
                  ['Setup Time', 'Same Day', '1-2 Weeks'],
                  ['Contracts', 'No Long-term Contracts', 'Often Required']
                ].map(([feature, us, them], index) => (
                  <motion.tr
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="border-b border-gray-100"
                  >
                    <td className="py-4 px-4 font-medium text-rgl-charcoal">{feature}</td>
                    <td className="py-4 px-4 text-center">
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                        {us}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-center">
                      <span className="bg-gray-100 text-rgl-gray px-3 py-1 rounded-full text-sm">
                        {them}
                      </span>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
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
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-100 mb-8 max-w-3xl mx-auto">
              Choose the service that's right for your business and start receiving quality leads today
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-rgl-red px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all shadow-xl"
            >
              Schedule Free Consultation
            </motion.button>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default ServicesOverview;