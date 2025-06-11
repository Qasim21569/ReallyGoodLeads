import React from 'react';
import { motion } from 'framer-motion';
import { Home, CheckCircle, Star, ArrowRight, Shield, Clock, Users } from 'lucide-react';

const RoofingLeads = () => {
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
                <Home className="w-6 h-6 text-rgl-gold" />
                <span className="text-rgl-gold font-semibold text-lg">ROOFING LEADS</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
                Exclusive Roofing Leads 
                <span className="block text-rgl-gold">Ready to Buy</span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-red-100 mb-8 leading-relaxed max-w-4xl mx-auto">
                Storm damage, roof repairs, and replacement prospects actively seeking roofing contractors. 
                Get exclusive leads with full contact information and project details.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 max-w-5xl mx-auto"
            >
              {[
                'Insurance claim leads',
                'Storm damage prospects', 
                'Residential & commercial',
                'Pre-qualified homeowners'
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
              { icon: <Shield className="w-8 h-8" />, stat: '85%', label: 'Conversion Rate', desc: 'Industry-leading close rates' },
              { icon: <Clock className="w-8 h-8" />, stat: '< 5min', label: 'Response Time', desc: 'Leads delivered instantly' },
              { icon: <Users className="w-8 h-8" />, stat: '500+', label: 'Happy Clients', desc: 'Roofing contractors served' }
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

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-rgl-charcoal mb-4">
              How Roofing Lead Generation Works
            </h2>
            <p className="text-xl text-rgl-gray max-w-3xl mx-auto">
              Our proven 4-step process delivers qualified roofing prospects directly to your business
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'Lead Capture', desc: 'Homeowners submit roofing service requests through our optimized forms' },
              { step: '2', title: 'Qualification', desc: 'Our team verifies project details, timeline, and budget requirements' },
              { step: '3', title: 'Instant Delivery', desc: 'Qualified leads are immediately sent to your preferred contact method' },
              { step: '4', title: 'Follow-up Support', desc: 'We provide additional information and support to help you close deals' }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-rgl-red text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-rgl-charcoal mb-3">{item.title}</h3>
                <p className="text-rgl-gray">{item.desc}</p>
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
              Roofing Lead Pricing
            </h2>
            <p className="text-xl text-rgl-gray max-w-3xl mx-auto">
              Transparent pricing with no hidden fees. Pay only for qualified leads that match your criteria.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: 'Starter',
                price: '$150',
                leads: '5-10 leads/month',
                features: ['Residential leads only', 'Basic project info', 'Email delivery', '48-hour support']
              },
              {
                name: 'Professional',
                price: '$125',
                leads: '15-25 leads/month',
                features: ['Residential + commercial', 'Detailed project specs', 'Real-time delivery', '24/7 support'],
                popular: true
              },
              {
                name: 'Enterprise',
                price: '$100',
                leads: '30+ leads/month',
                features: ['Premium lead priority', 'Custom lead criteria', 'Dedicated account manager', 'Same-day setup']
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

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-rgl-charcoal mb-4">
              What Roofing Contractors Say
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                name: 'Mike Johnson',
                company: 'Johnson Roofing Co.',
                text: 'The roofing leads from Really Good Leads are the best quality I\'ve ever received. 85% of leads convert to sales.',
                rating: 5
              },
              {
                name: 'Sarah Williams',
                company: 'Elite Roofing Services',
                text: 'We\'ve tripled our revenue since partnering with Really Good Leads. The storm damage leads are especially valuable.',
                rating: 5
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 rounded-2xl p-8"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-rgl-charcoal mb-6 text-lg">"{testimonial.text}"</p>
                <div>
                  <div className="font-semibold text-rgl-charcoal">{testimonial.name}</div>
                  <div className="text-rgl-gray">{testimonial.company}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Grow Your Roofing Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Join hundreds of successful roofing contractors who trust us for their lead generation needs.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-all shadow-xl"
            >
              Start Receiving Leads Today
            </motion.button>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default RoofingLeads;