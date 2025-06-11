import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Home, Wind, Truck, Sun, Megaphone, Settings, Star, TrendingUp, Eye, CheckCircle } from 'lucide-react';

const ServicesGrid = () => {
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const services = [
    {
      icon: <Home className="w-8 h-8" />,
      title: 'Roofing Leads',
      description: 'Storm damage and roof replacement prospects ready to buy',
      path: '/services/roofing-leads',
      color: 'bg-rgl-red',
      stats: '85% conversion rate',
      category: 'leads',
      price: '$125-150',
      features: ['Storm damage leads', 'Roof replacement', 'Insurance claims', '24hr delivery'],
      rating: 4.9,
      clients: '500+'
    },
    {
      icon: <Wind className="w-8 h-8" />,
      title: 'HVAC Leads',
      description: 'Heating, cooling, and maintenance service opportunities',
      path: '/services/hvac-leads',
      color: 'bg-rgl-red',
      stats: '90% qualified rate',
      category: 'leads',
      price: '$100-125',
      features: ['Emergency repairs', 'System replacements', 'Maintenance plans', 'Real-time alerts'],
      rating: 4.8,
      clients: '350+'
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: 'Moving Leads',
      description: 'Local and long-distance moving service requests',
      path: '/services/moving-leads',
      color: 'bg-rgl-red',
      stats: '75% close rate',
      category: 'leads',
      price: '$75-100',
      features: ['Local & long distance', 'Commercial moves', 'Packing services', 'Quick turnaround'],
      rating: 4.7,
      clients: '200+'
    },
    {
      icon: <Sun className="w-8 h-8" />,
      title: 'Solar Leads',
      description: 'Residential solar installation qualified prospects',
      path: '/services/solar-leads',
      color: 'bg-rgl-gold',
      stats: '80% interest rate',
      category: 'leads',
      price: '$150-200',
      features: ['Homeowner verified', 'Income qualified', 'Roof assessment', 'High-value leads'],
      rating: 4.9,
      clients: '150+'
    },
    {
      icon: <Megaphone className="w-8 h-8" />,
      title: 'Roofing Marketing',
      description: 'Complete marketing campaigns for roofing companies',
      path: '/services/roofing-marketing',
      color: 'bg-rgl-red',
      stats: '3x ROI average',
      category: 'marketing',
      price: '$2,500+',
      features: ['PPC management', 'SEO optimization', 'Website development', 'Social media'],
      rating: 4.8,
      clients: '100+'
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: 'HVAC Marketing',
      description: 'Comprehensive HVAC marketing and lead generation',
      path: '/services/hvac-marketing',
      color: 'bg-rgl-red',
      stats: '250% growth rate',
      category: 'marketing',
      price: '$2,000+',
      features: ['Seasonal campaigns', 'Emergency service ads', 'Local SEO', 'Review management'],
      rating: 4.9,
      clients: '80+'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Services', icon: <Star className="w-4 h-4" /> },
    { id: 'leads', label: 'Lead Generation', icon: <TrendingUp className="w-4 h-4" /> },
    { id: 'marketing', label: 'Marketing', icon: <Megaphone className="w-4 h-4" /> }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? services 
    : services.filter(service => service.category === selectedCategory);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 bg-rgl-red rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-rgl-gold rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 lg:mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center space-x-2 bg-rgl-red/10 rounded-full px-4 lg:px-6 py-2 mb-4 lg:mb-6"
          >
            <Star className="w-4 h-4 lg:w-5 lg:h-5 text-rgl-red" />
            <span className="text-rgl-red font-semibold text-sm lg:text-base">Premium Services</span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-rgl-charcoal mb-4 lg:mb-6 px-4">
            Choose Your Growth Strategy
          </h2>
          <p className="text-lg lg:text-xl text-rgl-gray max-w-3xl mx-auto mb-6 lg:mb-8 px-4">
            From exclusive leads to comprehensive marketing campaigns, we have the perfect solution to scale your business
          </p>

          {/* Service Categories Filter - Improved Mobile */}
          <div className="flex flex-wrap justify-center gap-3 lg:gap-4 mb-6 lg:mb-8 px-4">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center space-x-2 px-4 lg:px-6 py-2 lg:py-3 rounded-full font-semibold transition-all text-sm lg:text-base ${
                  selectedCategory === category.id
                    ? 'bg-rgl-red text-white shadow-lg'
                    : 'bg-white text-rgl-charcoal hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {category.icon}
                <span>{category.label}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Services Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12 lg:mb-16"
          >
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                onHoverStart={() => setHoveredService(index)}
                onHoverEnd={() => setHoveredService(null)}
                className="bg-white rounded-2xl lg:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group relative border border-gray-100"
              >
                {/* Service Preview Overlay - Hidden on mobile for better touch experience */}
                <AnimatePresence>
                  {hoveredService === index && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="hidden lg:absolute lg:inset-0 bg-gradient-to-br from-rgl-red/95 to-rgl-red-dark/95 z-10 lg:flex items-center justify-center p-8"
                    >
                      <div className="text-center text-white">
                        <motion.div
                          initial={{ scale: 0.8, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ delay: 0.1 }}
                          className="mb-4"
                        >
                          <Eye className="w-12 h-12 mx-auto mb-4" />
                          <h4 className="text-xl font-bold mb-2">Quick Preview</h4>
                        </motion.div>
                        <motion.ul
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.2 }}
                          className="space-y-2 mb-6"
                        >
                          {service.features.slice(0, 3).map((feature, idx) => (
                            <li key={idx} className="flex items-center justify-center space-x-2">
                              <CheckCircle className="w-4 h-4" />
                              <span className="text-sm">{feature}</span>
                            </li>
                          ))}
                        </motion.ul>
                        <Link
                          to={service.path}
                          className="inline-flex items-center space-x-2 bg-white text-rgl-red px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                        >
                          <span>Learn More</span>
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="p-6 lg:p-8 relative">
                  {/* Service Badge */}
                  <div className="absolute top-4 lg:top-6 right-4 lg:right-6">
                    <div className="bg-rgl-gold/10 text-rgl-gold px-2 lg:px-3 py-1 rounded-full text-xs font-semibold">
                      {service.category === 'leads' ? 'LEADS' : 'MARKETING'}
                    </div>
                  </div>

                  {/* Animated Icon */}
                  <motion.div 
                    className={`${service.color} text-white p-3 lg:p-4 rounded-xl lg:rounded-2xl w-fit mb-4 lg:mb-6 relative overflow-hidden`}
                    whileHover={{ 
                      scale: 1.1,
                      rotate: [0, -10, 10, 0],
                      transition: { duration: 0.5 }
                    }}
                  >
                    <div className="absolute inset-0 bg-white/20 transform -skew-x-12 translate-x-full group-hover:-translate-x-full transition-transform duration-700"></div>
                    <div className="w-6 h-6 lg:w-8 lg:h-8">
                      {service.icon}
                    </div>
                  </motion.div>

                  {/* Content */}
                  <div className="mb-4 lg:mb-6">
                    <h3 className="text-lg lg:text-xl font-bold text-rgl-charcoal mb-2 lg:mb-3 group-hover:text-rgl-red transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm lg:text-base text-rgl-gray mb-3 lg:mb-4 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Service Stats - Mobile optimized */}
                    <div className="grid grid-cols-2 gap-3 lg:gap-4 mb-3 lg:mb-4">
                      <div className="bg-gray-50 rounded-lg p-2 lg:p-3 text-center">
                        <div className="flex items-center justify-center space-x-1 mb-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className={`w-2 h-2 lg:w-3 lg:h-3 ${i < Math.floor(service.rating) ? 'text-rgl-gold fill-current' : 'text-gray-300'}`} />
                          ))}
                        </div>
                        <span className="text-xs text-rgl-gray">{service.rating}/5</span>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-2 lg:p-3 text-center">
                        <div className="text-xs lg:text-sm font-bold text-rgl-red">{service.clients}</div>
                        <span className="text-xs text-rgl-gray">Clients</span>
                      </div>
                    </div>

                    {/* Price - Mobile optimized */}
                    <div className="bg-gradient-to-r from-rgl-red/10 to-rgl-gold/10 rounded-lg p-3 mb-3 lg:mb-4">
                      <div className="flex items-center justify-between">
                        <span className="text-xs lg:text-sm text-rgl-gray">Starting at</span>
                        <span className="text-base lg:text-lg font-bold text-rgl-red">{service.price}</span>
                      </div>
                    </div>

                    {/* Key Features - Show all on mobile */}
                    <div className="space-y-2">
                      {service.features.slice(0, window.innerWidth < 768 ? 3 : 2).map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2 text-xs lg:text-sm text-rgl-gray">
                          <CheckCircle className="w-3 h-3 lg:w-4 lg:h-4 text-rgl-red flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA - Enhanced for mobile */}
                  <Link
                    to={service.path}
                    className="inline-flex items-center justify-center space-x-2 w-full lg:w-auto bg-rgl-red lg:bg-transparent text-white lg:text-rgl-red font-semibold px-4 py-3 lg:px-0 lg:py-0 rounded-lg lg:rounded-none hover:bg-rgl-red-dark lg:hover:bg-transparent lg:hover:text-rgl-red-dark transition-all lg:group-hover:translate-x-2 duration-300"
                  >
                    <span>Get Started</span>
                    <ArrowRight className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  </Link>
                </div>

                {/* Hover Effect Border */}
                <div className="h-1 bg-gradient-to-r from-rgl-red to-rgl-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Interactive Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative"
        >
          <div className="bg-gradient-to-br from-rgl-red to-rgl-red-dark rounded-3xl p-12 text-center text-white relative overflow-hidden">
            {/* Background Animation */}
            <div className="absolute inset-0">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-32 h-32 bg-white/10 rounded-full"
                  animate={{
                    x: [0, 100, 0],
                    y: [0, -50, 0],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 4 + i,
                    repeat: Infinity,
                    delay: i * 0.5,
                  }}
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                />
              ))}
            </div>

            <div className="relative z-10">
              <motion.h3 
                className="text-3xl font-bold mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Need a Custom Solution?
              </motion.h3>
              <motion.p 
                className="text-gray-100 mb-8 max-w-2xl mx-auto text-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                We specialize in creating tailored lead generation strategies for unique business needs. 
                Let's discuss how we can help grow your specific industry.
              </motion.p>
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)"
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-rgl-red px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all shadow-2xl inline-flex items-center space-x-3"
              >
                <span>Discuss Custom Solution</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesGrid;