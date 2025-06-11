import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Users, Clock, CheckCircle, Star, Headphones, Award, Shield } from 'lucide-react';

const CallCenter = () => {
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
            <div className="flex items-center justify-center space-x-3 mb-6">
              <Headphones className="w-8 h-8 text-red-200" />
              <span className="text-red-200 font-semibold">OUR CALL CENTER</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Professional Call Center Excellence
            </h1>
            
            <p className="text-xl lg:text-2xl text-red-100 max-w-4xl mx-auto leading-relaxed mb-8">
              Our experienced call center team ensures every lead is professionally handled, 
              qualified, and transferred to you with complete information and genuine interest.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                '24/7 lead processing',
                'Professional qualification',
                'Real-time transfers'
              ].map((feature, index) => (
                <div key={index} className="flex items-center justify-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-red-200" />
                  <span className="text-red-100 font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: <Phone className="w-8 h-8" />, stat: '50,000+', label: 'Calls Handled', desc: 'Monthly call volume' },
              { icon: <Users className="w-8 h-8" />, stat: '25+', label: 'Trained Agents', desc: 'Professional call specialists' },
              { icon: <Clock className="w-8 h-8" />, stat: '< 3 rings', label: 'Answer Time', desc: 'Average response speed' },
              { icon: <Award className="w-8 h-8" />, stat: '95%', label: 'Qualification Rate', desc: 'Successfully qualified leads' }
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

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-rgl-charcoal mb-4">
              Meet Our Professional Call Center Team
            </h2>
            <p className="text-xl text-rgl-gray max-w-3xl mx-auto">
              Experienced professionals trained specifically in lead qualification and customer service excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Lead Qualification Specialists',
                description: 'Expert agents trained to identify genuine prospects and gather complete project information',
                features: ['Industry-specific training', 'Advanced questioning techniques', 'CRM integration', 'Quality assurance']
              },
              {
                title: 'Customer Service Excellence',
                description: 'Professional representatives focused on creating positive first impressions for your business',
                features: ['Professional communication', 'Brand representation', 'Complaint resolution', 'Follow-up protocols']
              },
              {
                title: 'Technical Support Team',
                description: 'Dedicated technical staff ensuring seamless lead transfer and system reliability',
                features: ['Real-time monitoring', 'System maintenance', 'Data security', '24/7 availability']
              }
            ].map((team, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 rounded-2xl p-8"
              >
                <h3 className="text-xl font-bold text-rgl-charcoal mb-4">{team.title}</h3>
                <p className="text-rgl-gray mb-6">{team.description}</p>
                <ul className="space-y-3">
                  {team.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-rgl-charcoal">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-rgl-charcoal mb-4">
              Our Call Handling Process
            </h2>
            <p className="text-xl text-rgl-gray max-w-3xl mx-auto">
              Every call follows our proven process to ensure maximum lead quality and conversion potential
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '1',
                title: 'Initial Contact',
                description: 'Professional greeting and rapport building with potential customers',
                icon: <Phone className="w-6 h-6" />
              },
              {
                step: '2',
                title: 'Needs Assessment',
                description: 'Detailed questioning to understand project requirements and timeline',
                icon: <Users className="w-6 h-6" />
              },
              {
                step: '3',
                title: 'Qualification',
                description: 'Verification of decision-making authority, budget, and genuine interest',
                icon: <CheckCircle className="w-6 h-6" />
              },
              {
                step: '4',
                title: 'Transfer & Follow-up',
                description: 'Immediate transfer to your team with complete lead information',
                icon: <Award className="w-6 h-6" />
              }
            ].map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 text-center shadow-lg"
              >
                <div className="bg-rgl-red text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {process.step}
                </div>
                <div className="text-rgl-red mb-4 flex justify-center">{process.icon}</div>
                <h3 className="text-lg font-bold text-rgl-charcoal mb-3">{process.title}</h3>
                <p className="text-rgl-gray text-sm">{process.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-rgl-charcoal mb-4">
              Quality Assurance & Training
            </h2>
            <p className="text-xl text-rgl-gray max-w-3xl mx-auto">
              Continuous training and monitoring ensure consistent, professional service for every interaction
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-start space-x-4">
                <Shield className="w-8 h-8 text-rgl-red mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-rgl-charcoal mb-2">Compliance Training</h3>
                  <p className="text-rgl-gray">All agents receive comprehensive training on TCPA compliance and industry regulations.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Headphones className="w-8 h-8 text-rgl-red mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-rgl-charcoal mb-2">Call Monitoring</h3>
                  <p className="text-rgl-gray">Regular call monitoring and feedback sessions ensure consistent quality and improvement.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Award className="w-8 h-8 text-rgl-red mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-rgl-charcoal mb-2">Performance Metrics</h3>
                  <p className="text-rgl-gray">Detailed performance tracking and regular training updates based on industry best practices.</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-rgl-charcoal mb-6">Training Highlights</h3>
              <ul className="space-y-4">
                {[
                  'Industry-specific product knowledge',
                  'Advanced sales qualification techniques',
                  'Customer service excellence',
                  'CRM and technology training',
                  'Compliance and legal requirements',
                  'Continuous improvement programs'
                ].map((item, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-rgl-charcoal">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-rgl-charcoal mb-4">
              Advanced Technology Stack
            </h2>
            <p className="text-xl text-rgl-gray max-w-3xl mx-auto">
              State-of-the-art technology ensures reliable, secure, and efficient lead processing
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Cloud-Based Phone System',
                description: 'Redundant, scalable phone infrastructure with 99.9% uptime guarantee',
                features: ['Automatic failover', 'Call recording', 'Real-time monitoring', 'Geographic redundancy']
              },
              {
                title: 'CRM Integration',
                description: 'Seamless integration with major CRM platforms for instant lead delivery',
                features: ['Real-time sync', 'Custom field mapping', 'Automated workflows', 'API connectivity']
              },
              {
                title: 'Security & Compliance',
                description: 'Enterprise-grade security protecting customer data and ensuring compliance',
                features: ['Data encryption', 'TCPA compliance', 'Regular audits', 'Secure data storage']
              }
            ].map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <h3 className="text-xl font-bold text-rgl-charcoal mb-4">{tech.title}</h3>
                <p className="text-rgl-gray mb-6">{tech.description}</p>
                <ul className="space-y-3">
                  {tech.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-rgl-charcoal text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
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
              Experience Professional Call Center Excellence
            </h2>
            <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto">
              Let our experienced team handle your leads with the professionalism and expertise your business deserves.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-rgl-red px-8 py-4 rounded-lg font-semibold text-lg hover:bg-red-50 transition-all shadow-xl"
            >
              Schedule Call Center Tour
            </motion.button>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default CallCenter;