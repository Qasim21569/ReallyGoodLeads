import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp, HelpCircle, MessageCircle, Phone, Mail } from 'lucide-react';

const FAQs = () => {
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  const faqs = [
    {
      question: 'How quickly can I start receiving leads?',
      answer: 'Most clients start receiving leads within 24-48 hours of setup completion. Our team works quickly to configure your account and begin lead delivery.'
    },
    {
      question: 'Are the leads really exclusive?',
      answer: 'Yes, absolutely. Every lead we deliver is 100% exclusive to your business and is never shared or resold to competitors in your market.'
    },
    {
      question: 'What information do I get with each lead?',
      answer: 'Each lead includes complete contact information, project details, timeline, budget range, and any special requirements or notes from our qualification process.'
    },
    {
      question: 'Do you offer any guarantees?',
      answer: 'We guarantee lead quality and exclusivity. If a lead doesn\'t meet our quality standards, we\'ll provide a replacement at no additional cost.'
    },
    {
      question: 'Can I customize my lead criteria?',
      answer: 'Yes, we work with you to define specific criteria including service area, project types, budget ranges, and any other requirements for your business.'
    },
    {
      question: 'What support do you provide?',
      answer: 'We offer 24/7 customer support, dedicated account management, and ongoing optimization to ensure you\'re getting the best possible results.'
    },
    {
      question: 'How much do leads cost?',
      answer: 'Lead pricing varies by industry and service type. Roofing and HVAC leads typically range from $75-200 per lead, while moving and solar leads have different pricing structures. Contact us for specific pricing for your business.'
    },
    {
      question: 'What is your lead qualification process?',
      answer: 'Our leads go through a rigorous 5-step qualification process including initial interest verification, budget confirmation, timeline assessment, decision-maker validation, and project scope clarification.'
    },
    {
      question: 'Do you work with small businesses?',
      answer: 'Absolutely! We work with businesses of all sizes, from solo contractors to large companies. Our flexible packages can accommodate different budgets and lead volumes.'
    },
    {
      question: 'What geographic areas do you cover?',
      answer: 'We provide leads nationwide across the United States. You can specify your exact service areas, and we\'ll ensure leads come only from those locations.'
    },
    {
      question: 'How do I track my lead performance?',
      answer: 'You\'ll have access to a comprehensive dashboard showing lead delivery, conversion rates, ROI tracking, and detailed analytics to help optimize your campaigns.'
    },
    {
      question: 'Can I pause or stop my lead service?',
      answer: 'Yes, you have full control over your lead flow. You can pause, adjust, or stop your service at any time with no long-term contracts or cancellation fees.'
    }
  ];

  const leadGenFaqs = faqs.slice(0, 6);
  const generalFaqs = faqs.slice(6);

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
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-6">
              <HelpCircle className="w-8 h-8 text-rgl-gold" />
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl lg:text-2xl text-red-100 max-w-4xl mx-auto leading-relaxed">
              Get quick answers to common questions about our lead generation services, 
              process, and how we can help grow your business.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Lead Generation FAQs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-rgl-charcoal mb-4 text-center">
              Lead Generation Services
            </h2>
            <p className="text-xl text-rgl-gray text-center mb-12 max-w-3xl mx-auto">
              Everything you need to know about our lead generation process and services
            </p>

            <div className="space-y-4">
              {leadGenFaqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-50 rounded-2xl overflow-hidden"
                >
                  <button
                    onClick={() => toggleQuestion(index)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-100 transition-colors"
                  >
                    <h3 className="text-lg font-semibold text-rgl-charcoal pr-4">
                      {faq.question}
                    </h3>
                    {openQuestion === index ? (
                      <ChevronUp className="w-6 h-6 text-rgl-red flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-rgl-red flex-shrink-0" />
                    )}
                  </button>
                  <motion.div
                    initial={false}
                    animate={{
                      height: openQuestion === index ? 'auto' : 0,
                      opacity: openQuestion === index ? 1 : 0
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6">
                      <p className="text-rgl-gray leading-relaxed">{faq.answer}</p>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* General FAQs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-rgl-charcoal mb-4 text-center">
              General Questions
            </h2>
            <p className="text-xl text-rgl-gray text-center mb-12 max-w-3xl mx-auto">
              Common questions about pricing, coverage, and account management
            </p>

            <div className="space-y-4">
              {generalFaqs.map((faq, index) => (
                <motion.div
                  key={index + leadGenFaqs.length}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-50 rounded-2xl overflow-hidden"
                >
                  <button
                    onClick={() => toggleQuestion(index + leadGenFaqs.length)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-100 transition-colors"
                  >
                    <h3 className="text-lg font-semibold text-rgl-charcoal pr-4">
                      {faq.question}
                    </h3>
                    {openQuestion === index + leadGenFaqs.length ? (
                      <ChevronUp className="w-6 h-6 text-rgl-red flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-rgl-red flex-shrink-0" />
                    )}
                  </button>
                  <motion.div
                    initial={false}
                    animate={{
                      height: openQuestion === index + leadGenFaqs.length ? 'auto' : 0,
                      opacity: openQuestion === index + leadGenFaqs.length ? 1 : 0
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6">
                      <p className="text-rgl-gray leading-relaxed">{faq.answer}</p>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Still Have Questions CTA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-rgl-charcoal mb-6">
              Still Have Questions?
            </h2>
            <p className="text-xl text-rgl-gray mb-12 max-w-3xl mx-auto">
              Our team is here to help. Get in touch with us for personalized answers and assistance.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-2xl p-6 shadow-lg text-center"
              >
                <div className="bg-rgl-red text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-semibold text-rgl-charcoal mb-2">Call Us</h3>
                <p className="text-rgl-gray mb-4">Speak with our team directly</p>
                <a 
                  href="tel:+13214087274" 
                  className="text-rgl-red font-semibold hover:text-rgl-red-dark transition-colors"
                >
                  +1-321-408-7274
                </a>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-2xl p-6 shadow-lg text-center"
              >
                <div className="bg-rgl-red text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-semibold text-rgl-charcoal mb-2">Email Us</h3>
                <p className="text-rgl-gray mb-4">Send us your questions</p>
                <a 
                  href="mailto:contact@reallygoodleads.xyz" 
                  className="text-rgl-red font-semibold hover:text-rgl-red-dark transition-colors"
                >
                  contact@reallygoodleads.xyz
                </a>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-2xl p-6 shadow-lg text-center"
              >
                <div className="bg-rgl-red text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-semibold text-rgl-charcoal mb-2">Live Chat</h3>
                <p className="text-rgl-gray mb-4">Chat with support online</p>
                <button className="text-rgl-red font-semibold hover:text-rgl-red-dark transition-colors">
                  Start Chat
                </button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default FAQs; 