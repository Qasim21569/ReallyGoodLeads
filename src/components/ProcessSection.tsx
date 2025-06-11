import React from 'react';
import { motion } from 'framer-motion';
import { MousePointer, Phone, UserCheck, DollarSign, ArrowRight, Clock, CheckCircle, Zap } from 'lucide-react';

const ProcessSection = () => {
  const steps = [
    {
      icon: MousePointer,
      title: 'Online Form/Ad',
      description: 'Customers find and complete our targeted forms or respond to strategic advertisements',
      time: '2-3 mins',
      number: '01'
    },
    {
      icon: Phone,
      title: 'Call Lead',
      description: 'Our professional team immediately contacts prospects to verify interest and qualify',
      time: '< 5 mins',
      number: '02'
    },
    {
      icon: UserCheck,
      title: 'Transfer to You',
      description: 'Qualified leads are instantly transferred with complete contact and project details',
      time: 'Instant',
      number: '03'
    },
    {
      icon: DollarSign,
      title: 'Close Deal',
      description: 'You close the deal with our ongoing support to maximize conversion opportunities',
      time: 'Ongoing',
      number: '04'
    }
  ];

  const stats = [
    { label: 'Average Response', value: '< 5 min', icon: Clock },
    { label: 'Qualification Rate', value: '95%', icon: CheckCircle },
    { label: 'Lead Processing', value: '24/7', icon: Zap }
  ];

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center px-4 py-2 bg-rgl-red/10 rounded-full text-rgl-red text-sm font-medium mb-6">
            Simple Process
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-rgl-charcoal mb-6">
            How It <span className="text-rgl-red">Works</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our streamlined process delivers qualified leads in four simple steps
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="relative mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative group"
              >
                {/* Mobile connector line */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden absolute left-6 top-16 w-0.5 h-16 bg-gray-200" />
                )}

                {/* Step Content */}
                <div className="relative z-10 flex flex-col lg:items-center pt-3">
                  {/* Icon Container */}
                  <div className="flex items-start lg:items-center lg:flex-col">
                    <div className="relative flex-shrink-0 mb-0 lg:mb-8">
                      {/* Icon Circle */}
                      <motion.div
                        className="w-12 h-12 lg:w-16 lg:h-16 bg-white border-2 border-gray-200 rounded-full flex items-center justify-center relative z-10 group-hover:border-rgl-red transition-colors duration-300"
                        whileHover={{ scale: 1.1 }}
                      >
                        <step.icon className="w-5 h-5 lg:w-7 lg:h-7 text-gray-500 group-hover:text-rgl-red transition-colors duration-300" />
                      </motion.div>
                      
                      {/* Step Number */}
                      <div className="absolute -top-4 -right-4 w-7 h-7 bg-rgl-red text-white text-sm font-bold rounded-full flex items-center justify-center shadow-sm">
                        {index + 1}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="ml-4 lg:ml-0 lg:text-center flex-1">
                      {/* Time Badge */}
                      <div className="inline-flex items-center px-2 py-1 bg-gray-100 rounded-full text-xs font-medium text-gray-600 mb-3">
                        {step.time}
                      </div>
                      
                      <h3 className="text-lg lg:text-xl font-bold text-rgl-charcoal mb-3 group-hover:text-rgl-red transition-colors duration-300">
                        {step.title}
                      </h3>
                      
                      <p className="text-gray-600 text-sm lg:text-base leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Desktop Arrow */}
                {index < steps.length - 1 && (
                  <motion.div
                    className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-20"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.15 + 0.3 }}
                  >
                    <ArrowRight className="w-5 h-5 text-gray-400" />
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="bg-gray-50 rounded-2xl p-8 lg:p-12"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-rgl-charcoal mb-4">
              Why Choose Our Process
            </h3>
            <p className="text-gray-600 text-lg">
              Industry-leading metrics that deliver real results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm group-hover:shadow-lg transition-shadow duration-300">
                  <stat.icon className="w-7 h-7 text-rgl-red" />
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-rgl-charcoal mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-rgl-red to-rgl-gold text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
          >
            <CheckCircle className="w-5 h-5 mr-3" />
            Start Your Process Today
            <ArrowRight className="w-5 h-5 ml-3" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSection;