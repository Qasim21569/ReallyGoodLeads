import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Mike Johnson',
      company: 'Johnson Roofing Co.',
      role: 'Owner',
      rating: 5,
      text: 'Really Good Leads transformed our business. We went from struggling to find customers to having more qualified leads than we can handle. The quality is unmatched.',
      results: '100% increase in monthly revenue',
      industry: 'Roofing'
    },
    {
      name: 'Sarah Williams',
      company: 'Elite HVAC Services',
      role: 'General Manager',
      rating: 5,
      text: 'The leads are exactly what they promise - pre-qualified and exclusive. Our conversion rate has never been higher, and the ROI is incredible.',
      results: '45% conversion rate',
      industry: 'HVAC'
    },
    {
      name: 'David Chen',
      company: 'SunPower Solutions',
      role: 'Sales Director',
      rating: 5,
      text: 'After trying multiple lead generation companies, Really Good Leads is the only one that consistently delivers quality prospects ready to buy.',
      results: '$650K in additional sales',
      industry: 'Solar'
    },
    {
      name: 'Jennifer Martinez',
      company: 'Swift Moving Services',
      role: 'Co-Owner',
      rating: 5,
      text: 'The professionalism and quality of service is outstanding. Every lead comes with complete information and genuine interest in our services.',
      results: '90% business growth',
      industry: 'Moving'
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-rgl-charcoal mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-rgl-gray max-w-3xl mx-auto">
            Don't just take our word for it. Here's what industry leaders say about our lead generation services.
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-50 rounded-2xl p-8 lg:p-12"
            >
              {/* Quote Icon */}
              <div className="text-rgl-red mb-6">
                <Quote className="w-12 h-12" />
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-lg lg:text-xl text-rgl-charcoal leading-relaxed mb-8">
                "{testimonials[currentIndex].text}"
              </blockquote>

              {/* Results */}
              <div className="bg-rgl-red text-white rounded-lg p-4 mb-8 inline-block">
                <div className="font-semibold text-lg">
                  {testimonials[currentIndex].results}
                </div>
              </div>

              {/* Author Info */}
              <div className="flex items-center justify-between">
                <div>
                  {/* Stars */}
                  <div className="flex items-center mb-2">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  {/* Name and Company */}
                  <div className="font-semibold text-rgl-charcoal">
                    {testimonials[currentIndex].name}
                  </div>
                  <div className="text-rgl-gray">
                    {testimonials[currentIndex].role}, {testimonials[currentIndex].company}
                  </div>
                </div>

                {/* Industry Badge */}
                <div className="bg-white border border-rgl-light-gray rounded-full px-4 py-2">
                  <span className="text-rgl-red font-medium text-sm">
                    {testimonials[currentIndex].industry}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            <button
              onClick={prevTestimonial}
              className="bg-white border border-rgl-light-gray p-3 rounded-full hover:bg-gray-50 transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-rgl-charcoal" />
            </button>

            {/* Dots */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-rgl-red' : 'bg-rgl-light-gray'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="bg-white border border-rgl-light-gray p-3 rounded-full hover:bg-gray-50 transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-rgl-charcoal" />
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-rgl-red mb-2">4.9/5</div>
            <div className="text-rgl-charcoal font-semibold">Average Rating</div>
            <div className="flex justify-center mt-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
              ))}
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-rgl-red mb-2">98%</div>
            <div className="text-rgl-charcoal font-semibold">Client Retention</div>
            <div className="text-rgl-gray text-sm mt-1">Year-over-year</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-rgl-red mb-2">24hrs</div>
            <div className="text-rgl-charcoal font-semibold">Setup Time</div>
            <div className="text-rgl-gray text-sm mt-1">From contract to leads</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;