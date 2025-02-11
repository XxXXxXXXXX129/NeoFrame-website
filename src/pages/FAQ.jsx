import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function FAQ() {
  const [faqCategories, setFaqCategories] = useState([]);
  const [faqSections, setFaqSections] = useState([]);

  useEffect(() => {
    // Fetch faqCategories and faqSections from the backend
    fetchFaqData();
  }, []);

  const fetchFaqData = async () => {
    try {
      const response = await fetch('/api/faq');
      const data = await response.json();
      setFaqCategories(data.categories);
      setFaqSections(data.sections);
    } catch (error) {
      console.error('Error fetching FAQ data:', error);
    }
  };

  return (
    <div className="min-h-screen py-24 bg-gradient-to-br from-blue-900 via-gray-800 to-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-extrabold text-white sm:text-5xl"
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 max-w-2xl mx-auto text-xl text-gray-300"
          >
            Find answers to common questions about NeoFrame
          </motion.p>
        </div>

        {/* FAQ Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {faqCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-700 hover:transform hover:-translate-y-1 transition-all duration-300"
            >
              <div className="text-3xl mb-4">{category.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">{category.title}</h3>
              <p className="text-gray-300">{category.description}</p>
            </motion.div>
          ))}
        </div>

        {/* FAQ Questions */}
        <div className="space-y-8">
          {faqSections.map((section, sectionIndex) => (
            <motion.div
              key={sectionIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + sectionIndex * 0.1 }}
              className="bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-700"
            >
              <h3 className="text-2xl font-bold text-white mb-6">{section.title}</h3>
              <div className="space-y-6">
                {section.questions.map((faq, faqIndex) => (
                  <div key={faqIndex} className="border-b border-gray-700 pb-6 last:border-b-0 last:pb-0">
                    <h4 className="text-lg font-semibold text-white mb-3">{faq.question}</h4>
                    <p className="text-gray-300">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Still Have Questions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-4">Still Have Questions?</h3>
          <p className="text-gray-300 mb-8">
            Can't find the answer you're looking for? Please chat with our friendly team.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
          >
            Contact Support
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

export default FAQ; 