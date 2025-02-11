import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function Pricing() {
  const [isMonthly, setIsMonthly] = useState(true);

  const plans = [
    {
      title: "Basic",
      description: "Perfect for getting started with digital art",
      price: isMonthly ? 9.99 : 99.90,
      features: [
        "15\" HD Display",
        "Basic AI Features",
        "100+ Art Styles",
        "Monthly Updates",
        "Community Support"
      ]
    },
    {
      title: "Pro",
      description: "Our most popular option for art enthusiasts",
      price: isMonthly ? 19.99 : 199.90,
      features: [
        "24\" 4K Display",
        "Advanced AI Features",
        "500+ Art Styles",
        "Weekly Updates",
        "Premium Support"
      ]
    },
    {
      title: "Ultimate",
      description: "The ultimate digital art gallery",
      price: isMonthly ? 29.99 : 299.90,
      features: [
        "32\" 4K OLED Display",
        "Unlimited AI Generation",
        "All Art Styles",
        "Daily Updates",
        "24/7 VIP Support"
      ]
    }
  ];

  const pricingFAQ = [
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, PayPal, and bank transfers. For enterprise solutions, we also offer invoice-based payment."
    },
    {
      question: "Can I upgrade my plan later?",
      answer: "Yes, you can upgrade your plan at any time. The price difference will be prorated for the remaining subscription period."
    },
    {
      question: "Is there a warranty?",
      answer: "Yes, all NeoFrames come with a 2-year warranty covering hardware defects and technical support."
    },
    {
      question: "Do you offer international shipping?",
      answer: "Yes, we ship worldwide. Shipping costs and delivery times vary by location."
    }
  ];

  const featureComparison = [
    {
      name: "Display Size",
      lite: "15\"",
      pro: "24\"",
      enterprise: "32\""
    },
    {
      name: "Resolution",
      lite: "HD",
      pro: "4K",
      enterprise: "4K OLED"
    },
    {
      name: "Art Styles",
      lite: "100+",
      pro: "500+",
      enterprise: "Unlimited"
    },
    {
      name: "Updates",
      lite: "Monthly",
      pro: "Weekly",
      enterprise: "Daily"
    },
    {
      name: "Support",
      lite: "Community",
      pro: "Premium",
      enterprise: "24/7 VIP"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-gray-800 to-gray-700 relative overflow-hidden pt-16">
      {/* Enhanced Background Effects */}
      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-40 -left-40 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute bottom-40 right-20 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-float-slow"></div>
        
        {/* Enhanced Particle Effects */}
        <div className="absolute inset-0">
          {/* Emerald Particles */}
          <div className="particle w-4 h-4 top-1/4 left-1/4 text-emerald-400 animate-float-particle">
            <div className="particle-trail"></div>
            <div className="absolute inset-0 animate-pulse-glow"></div>
          </div>
          <div className="particle w-3 h-3 top-1/3 left-1/3 text-emerald-500 animate-float-particle-delayed">
            <div className="particle-trail"></div>
            <div className="absolute inset-0 animate-pulse-glow"></div>
          </div>
          
          {/* Blue Particles */}
          <div className="particle w-4 h-4 top-2/3 right-1/4 text-blue-400 animate-float-particle">
            <div className="particle-trail"></div>
            <div className="absolute inset-0 animate-pulse-glow"></div>
          </div>
          <div className="particle w-3 h-3 bottom-1/3 right-1/3 text-blue-500 animate-float-particle-delayed">
            <div className="particle-trail"></div>
            <div className="absolute inset-0 animate-pulse-glow"></div>
          </div>
          
          {/* Purple Particles */}
          <div className="particle w-4 h-4 top-1/2 right-1/2 text-purple-400 animate-float-particle-slow">
            <div className="particle-trail"></div>
            <div className="absolute inset-0 animate-pulse-glow"></div>
          </div>
          <div className="particle w-3 h-3 bottom-1/4 left-2/3 text-purple-500 animate-float-particle">
            <div className="particle-trail"></div>
            <div className="absolute inset-0 animate-pulse-glow"></div>
          </div>

          {/* Additional Small Particles */}
          <div className="particle w-2 h-2 top-1/3 right-1/4 text-emerald-300 animate-float-particle-slow">
            <div className="absolute inset-0 animate-pulse-glow"></div>
          </div>
          <div className="particle w-2 h-2 bottom-1/3 left-1/4 text-blue-300 animate-float-particle-delayed">
            <div className="absolute inset-0 animate-pulse-glow"></div>
          </div>
          <div className="particle w-2 h-2 top-2/3 right-2/3 text-purple-300 animate-float-particle">
            <div className="absolute inset-0 animate-pulse-glow"></div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-extrabold text-white sm:text-5xl"
          >
            Simple, Transparent Pricing
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 max-w-2xl mx-auto text-xl text-gray-300"
          >
            Choose the perfect NeoFrame for your space
          </motion.p>
        </div>

        {/* Pricing Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-700 hover:transform hover:-translate-y-1 transition-all duration-300 ${
                plan.title === "Pro" ? 'ring-2 ring-emerald-500' : ''
              }`}
            >
              {plan.title === "Pro" && (
                <span className="absolute -top-3 right-8 bg-emerald-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              )}
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-4">{plan.title}</h3>
                <div className="text-4xl font-bold text-white mb-6">
                  €{plan.price.toFixed(2)}
                  <span className="text-lg font-normal text-gray-400">{isMonthly ? '/mo' : '/year'}</span>
                </div>
                <p className="text-gray-300 mb-8">{plan.description}</p>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <svg className="h-6 w-6 text-emerald-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                className={`w-full px-8 py-4 text-lg font-semibold text-white rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                  plan.title === "Pro"
                    ? 'bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700'
                    : 'bg-gray-700 hover:bg-gray-600'
                }`}
              >
                Get Started
              </button>
            </motion.div>
          ))}
        </div>

        {/* Features Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-32"
        >
          <h3 className="text-3xl font-bold text-center text-white mb-12">
            Features Comparison
          </h3>
          <div className="bg-gray-800 rounded-xl shadow-lg border border-gray-700 overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="px-6 py-4 text-left text-white">Feature</th>
                  <th className="px-6 py-4 text-center text-white">Basic</th>
                  <th className="px-6 py-4 text-center text-white">Pro</th>
                  <th className="px-6 py-4 text-center text-white">Ultimate</th>
                </tr>
              </thead>
              <tbody>
                {featureComparison.map((feature, index) => (
                  <tr key={index} className="border-b border-gray-700 last:border-b-0">
                    <td className="px-6 py-4 text-gray-300">{feature.name}</td>
                    <td className="px-6 py-4 text-center text-gray-300">{feature.lite}</td>
                    <td className="px-6 py-4 text-center text-gray-300">{feature.pro}</td>
                    <td className="px-6 py-4 text-center text-gray-300">{feature.enterprise}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mb-32"
        >
          <h3 className="text-3xl font-bold text-center text-white mb-12">
            Frequently Asked Questions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pricingFAQ.map((faq, index) => (
              <div key={index} className="bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-700">
                <h4 className="text-xl font-bold text-white mb-4">{faq.question}</h4>
                <p className="text-gray-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Contact Sales */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-4">Need a Custom Solution?</h3>
          <p className="text-gray-300 mb-8">
            Contact our sales team for custom pricing and special requirements.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
          >
            Contact Sales
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

export default Pricing; 