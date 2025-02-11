import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Link } from 'react-router-dom';

const highlights = [
  {
    icon: "🎨",
    title: "AI Art",
    description: "Personalized artworks that adapt to your taste"
  },
  {
    icon: "🌱",
    title: "Sustainable",
    description: "2.5t CO₂ savings per frame/year"
  },
  {
    icon: "💡",
    title: "Smart",
    description: "Full smart home integration & voice control"
  },
  {
    icon: "⚡",
    title: "Efficient",
    description: "40% less energy consumption than traditional displays"
  }
];

const keyFeatures = [
  {
    title: "Intelligent Art Generation",
    description: "Our AI creates unique artworks based on your preferences",
    icon: "✨"
  },
  {
    title: "Sustainable Design",
    description: "100% recyclable materials and energy-efficient technology",
    icon: "♻️"
  },
  {
    title: "Premium Quality",
    description: "4K OLED Display with adaptive brightness control",
    icon: "🎯"
  }
];

function Hero() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    });
  }, [controls]);

  const typewriterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100
      }
    }
  };

  const scrollIndicatorVariants = {
    initial: { y: 0 },
    animate: {
      y: [0, 10, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-blue-900 via-gray-800 to-gray-700">
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

      {/* Subtle Grid Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/10 to-gray-900/30 backdrop-blur-[1px]"></div>

      {/* Enhanced Content Container with Glass Effect */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="relative pb-8 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="lg:grid lg:grid-cols-12 lg:gap-8">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={controls}
                className="text-center lg:text-left lg:col-span-6"
              >
                <motion.h1 
                  className="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl mb-8 relative"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.2 }}
                >
                  <span className="block text-gradient-animation bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-400 text-transparent bg-clip-text relative">
                    Art that evolves
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shine"></div>
                  </span>
                  <span className="block text-gradient-animation bg-gradient-to-r from-blue-400 via-blue-500 to-indigo-500 text-transparent bg-clip-text relative">
                    with you
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shine delay-300"></div>
                  </span>
                </motion.h1>
                <motion.p
                  variants={typewriterVariants}
                  initial="hidden"
                  animate="visible"
                  className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
                >
                  Discover NeoFrame - the AI-powered digital art frame that brings your spaces to life with personalized, 
                  dynamic art. Sustainable, intelligent, and as unique as you are.
                </motion.p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start space-x-4">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="rounded-md shadow relative group"
                  >
                    <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-200"></div>
                    <Link
                      to="/pricing"
                      className="relative w-full flex items-center justify-center px-8 py-3 text-base font-medium rounded-xl text-white glass-morphism bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 md:py-4 md:text-lg md:px-10 hover-scale magnetic-effect card-shine"
                    >
                      Pre-order Now
                    </Link>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="rounded-md relative group"
                  >
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-200"></div>
                    <Link
                      to="/features"
                      className="relative w-full flex items-center justify-center px-8 py-3 text-base font-medium rounded-xl glass-card text-blue-100 hover:text-white hover:bg-blue-900/50 md:py-4 md:text-lg md:px-10 hover-scale magnetic-effect card-shine"
                    >
                      Learn More
                    </Link>
                  </motion.div>
                </div>
              </motion.div>

              {/* Product Image */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="mt-12 lg:mt-0 lg:col-span-6 relative"
              >
                <div className="relative mx-auto w-full max-w-lg">
                  {/* Glow Effect */}
                  <div className="absolute top-0 -left-4 w-72 h-72 bg-emerald-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
                  <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
                  <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
                  
                  {/* Image Container */}
                  <motion.div
                    className="relative rounded-2xl overflow-hidden shadow-2xl transform perspective-1000"
                    whileHover={{ scale: 1.02, rotateY: 5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 mix-blend-overlay"></div>
                    <img
                      src="/Flux_Dev_A_product_showcase_featuring_three_squareshaped_digit_1.jpeg"
                      alt="NeoFrame Product Showcase"
                      className="w-full h-full object-cover rounded-2xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </main>

          {/* Scroll Indicator */}
          <motion.div
            variants={scrollIndicatorVariants}
            initial="initial"
            animate="animate"
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
          >
            <span className="text-gray-400 text-sm mb-2">Scroll Down</span>
            <svg
              className="w-6 h-6 text-gray-400 animate-bounce"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </motion.div>
        </div>
      </div>

      {/* Enhanced Highlights Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="relative glass-morphism py-12 mt-12"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                className="text-center glass-card rounded-xl p-6 hover-scale card-shine transform perspective-1000"
                whileHover={{ 
                  scale: 1.05,
                  rotateX: 5,
                  rotateY: 5,
                  transition: { duration: 0.2 }
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <motion.div 
                  className="text-4xl mb-2 transform-gpu"
                  animate={{ 
                    rotateY: [0, 360],
                    transition: { 
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear"
                    }
                  }}
                  style={{ 
                    transformStyle: "preserve-3d",
                    animationDelay: `${index * 0.5}s`
                  }}
                >
                  {highlight.icon}
                </motion.div>
                <h3 className="text-lg font-semibold text-gradient-animation bg-gradient-to-r from-white via-gray-200 to-white text-transparent bg-clip-text mb-1">
                  {highlight.title}
                </h3>
                <p className="text-sm text-gray-400">
                  {highlight.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Key Features Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="py-16 relative"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gradient-animation bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-400 text-transparent bg-clip-text">
              Why NeoFrame?
            </h2>
            <p className="mt-4 text-gray-400">
              Innovation meets sustainability
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {keyFeatures.map((feature, index) => (
              <motion.div
                key={index}
                className="glass-card rounded-xl p-6 text-center hover-scale card-shine"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-3xl mb-4 animate-float" style={{ animationDelay: `${index * 0.5}s` }}>{feature.icon}</div>
                <h3 className="text-lg font-semibold text-gradient-animation bg-gradient-to-r from-white via-gray-200 to-white text-transparent bg-clip-text mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-400">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Testimonials Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="glass-morphism py-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gradient-animation bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-400 text-transparent bg-clip-text">
              What Our Customers Say
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="glass-card rounded-xl p-6 shadow-lg hover:transform hover:-translate-y-1 transition-all duration-300 card-shine">
              <p className="text-lg text-gray-300 mb-4">
                "My living room transforms throughout the day! The AI creates exactly the art I want to see."
              </p>
              <p className="font-medium text-gradient-animation bg-gradient-to-r from-white via-gray-200 to-white text-transparent bg-clip-text">
                - Lisa M.
              </p>
            </div>
            <div className="glass-card rounded-xl p-6 shadow-lg hover:transform hover:-translate-y-1 transition-all duration-300 card-shine">
              <p className="text-lg text-gray-300 mb-4">
                "Not only is the art fantastic, but the commitment to sustainability really convinced me."
              </p>
              <p className="font-medium text-gradient-animation bg-gradient-to-r from-white via-gray-200 to-white text-transparent bg-clip-text">
                - Mark H.
              </p>
            </div>
          </div>
          <div className="mt-10 text-center">
            <p className="text-3xl font-bold text-blue-400 animate-pulse-slow">⭐⭐⭐⭐⭐</p>
            <p className="text-lg font-medium text-gray-200">4.9/5 on Trustpilot</p>
          </div>
        </div>
      </motion.div>

      {/* Final CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="py-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-gradient-animation bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-400 text-transparent bg-clip-text mb-8">
            Ready for the Future of Art?
          </h2>
          <Link
            to="/pricing"
            className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl group card-shine"
          >
            <span className="flex items-center">
              <span className="mr-2">Discover NeoFrame Now</span>
              <span className="transform transition-transform group-hover:translate-x-1">→</span>
            </span>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}

export default Hero; 