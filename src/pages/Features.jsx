import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const features = [
  {
    title: "🎨 AI Art Generation",
    description: "Our advanced AI creates unique artworks based on your preferences and room ambiance.",
    details: [
      "Millions of art styles available",
      "Personalized color palettes",
      "Mood-based generation",
      "Daily new artworks"
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    title: "🏠 Smart Home Integration",
    description: "Control your NeoFrame via app or voice command. Full compatibility with all major smart home systems.",
    details: [
      "Alexa & Google Assistant",
      "Apple HomeKit ready",
      "IFTTT Integration",
      "Automatic scenarios"
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    title: "💡 Adaptive Brightness",
    description: "The display automatically adjusts to lighting conditions for optimal visibility with minimal energy consumption.",
    details: [
      "Automatic adjustment",
      "Night mode",
      "Anti-glare protection",
      "Eye-friendly technology"
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" />
      </svg>
    )
  },
  {
    title: "👤 Personalization",
    description: "The AI continuously learns from your preferences and creates tailored artworks that perfectly match your taste.",
    details: [
      "Learning AI",
      "Taste profiles",
      "Mood detection",
      "Interactive feedback"
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: "🖼️ Art Gallery Access",
    description: "Access a curated collection of artworks or let the AI generate new pieces based on classic styles.",
    details: [
      "Curated art collection",
      "AI-generated variations",
      "Weekly new styles",
      "Artist collaborations"
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    )
  },
  {
    title: "⚡ Energy Efficient",
    description: "State-of-the-art display technology and intelligent energy management for minimal power consumption with maximum image quality.",
    details: [
      "Adaptive energy management",
      "Automatic eco mode",
      "Intelligent brightness control",
      "Minimal standby consumption"
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  }
];

const howItWorks = [
  {
    title: "🔍 AI Analysis",
    description: "The AI analyzes your art preferences and room ambiance.",
    details: "Our AI system scans your existing art collection and learns from your preferences."
  },
  {
    title: "✨ Generation",
    description: "Based on the analysis, unique artworks are created in real-time.",
    details: "High-performance GPUs create new, personalized artworks in seconds."
  },
  {
    title: "📈 Adaptation",
    description: "The system continuously learns from your feedback and refines the artworks.",
    details: "The more you interact, the better the AI understands your taste."
  },
  {
    title: "🔄 Automation",
    description: "Artworks change automatically based on time of day and mood.",
    details: "Intelligent algorithms adapt the art to your routine and mood."
  }
];

const specifications = {
  display: {
    title: "📺 Display",
    specs: [
      "4K OLED or E-Ink Display",
      "Sizes: 15\", 20\", 30\"",
      "HDR Support",
      "Adaptive Sync Technology"
    ]
  },
  controls: {
    title: "🎮 Controls",
    specs: [
      "Mobile App (iOS/Android)",
      "Voice Control",
      "Touch Interface",
      "Smart Home Integration"
    ]
  },
  power: {
    title: "⚡ Power Efficiency",
    specs: [
      "40% lower power consumption",
      "Automatic sleep mode",
      "Optional solar module",
      "EnergyStar certified"
    ]
  },
  materials: {
    title: "🛠 Materials",
    specs: [
      "Recycled aluminum",
      "FSC certified wood",
      "Tempered glass",
      "100% recyclable packaging"
    ]
  }
};

function Features() {
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
        </div>
      </div>

      <div className="relative py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Enhanced Hero Section */}
          <div className="text-center mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-6xl font-extrabold text-gradient-animation bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-400 text-transparent bg-clip-text mb-8"
            >
              Features & Technology
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-4 max-w-2xl mx-auto text-xl text-gray-300"
            >
              Discover the innovative features that make NeoFrame unique
            </motion.p>
          </div>

          {/* Product Showcase */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-32"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <motion.div
                  className="relative rounded-2xl overflow-hidden shadow-2xl transform perspective-1000"
                  whileHover={{ scale: 1.02, rotateY: -5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 mix-blend-overlay"></div>
                  <img
                    src="/Futuristic AI Art.jpeg"
                    alt="NeoFrame AI Art Display"
                    className="w-full h-full object-cover rounded-2xl"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "/Futuristic AI Art (1).jpeg";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
                </motion.div>
                {/* Decorative Elements */}
                <div className="absolute -top-4 -left-4 w-72 h-72 bg-emerald-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
                <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
              </div>
              
              <div className="space-y-6">
                <motion.h3
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="text-3xl font-bold text-gradient-animation bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-400 text-transparent bg-clip-text"
                >
                  AI-Powered Art Generation
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="text-gray-300 text-lg"
                >
                  Experience art that adapts to your style and mood. Our advanced AI algorithms create unique pieces that perfectly match your space and preferences.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="grid grid-cols-2 gap-4"
                >
                  {[
                    { icon: "🎨", text: "Millions of styles" },
                    { icon: "🌈", text: "Dynamic colors" },
                    { icon: "🔄", text: "Real-time updates" },
                    { icon: "📱", text: "Smart controls" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-2 text-gray-300">
                      <span className="text-2xl">{item.icon}</span>
                      <span>{item.text}</span>
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Enhanced Main Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, translateY: -5 }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-emerald-500/50 transition-all duration-300 group card-shine"
              >
                <div className="bg-emerald-500/20 w-14 h-14 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform animate-glow">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-extrabold mb-4 bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">{feature.title}</h3>
                <p className="text-gray-300 mb-6">{feature.description}</p>
                <ul className="space-y-3">
                  {feature.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start">
                      <span className="w-6 h-6 mr-3 flex items-center justify-center text-emerald-400 bg-emerald-500/10 rounded-full animate-pulse-slow">•</span>
                      <span className="text-gray-300">{detail}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Enhanced Technical Specifications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-32"
          >
            <h3 className="text-4xl md:text-6xl font-extrabold text-center mb-16 text-gradient-animation bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-400 text-transparent bg-clip-text">
              Technical Specifications
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {Object.values(specifications).map((spec, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02, translateY: -5 }}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-emerald-500/50 transition-all duration-300 group card-shine"
                >
                  <h4 className="text-2xl font-extrabold mb-6 bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">{spec.title}</h4>
                  <div className="space-y-4">
                    {spec.specs.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-center">
                        <span className="w-6 h-6 mr-3 flex items-center justify-center text-emerald-400 bg-emerald-500/10 rounded-full animate-pulse-slow">•</span>
                        <span className="text-gray-300">{detail}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Enhanced Key Features Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mb-32"
          >
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-emerald-500/50 transition-all duration-300 group card-shine">
              <h3 className="text-4xl md:text-6xl font-extrabold text-center mb-16 text-gradient-animation bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-400 text-transparent bg-clip-text">
                Key Features
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-2xl font-extrabold mb-6 bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">Machine Learning</h4>
                  <p className="text-gray-300 mb-6">
                    Our advanced AI algorithms analyze your preferences and continuously learn to create 
                    personalized artwork that resonates with your taste.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <span className="w-6 h-6 mr-3 flex items-center justify-center text-emerald-400 bg-emerald-500/10 rounded-full animate-pulse-slow">•</span>
                      <span className="text-gray-300">Real-time style transfer</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-6 h-6 mr-3 flex items-center justify-center text-emerald-400 bg-emerald-500/10 rounded-full animate-pulse-slow">•</span>
                      <span className="text-gray-300">Adaptive color schemes</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-6 h-6 mr-3 flex items-center justify-center text-emerald-400 bg-emerald-500/10 rounded-full animate-pulse-slow">•</span>
                      <span className="text-gray-300">Pattern recognition</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-2xl font-extrabold mb-6 bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">Neural Networks</h4>
                  <p className="text-gray-300 mb-6">
                    Our deep learning models process and generate art in real-time, ensuring each piece 
                    is unique and tailored to your preferences.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <span className="w-6 h-6 mr-3 flex items-center justify-center text-emerald-400 bg-emerald-500/10 rounded-full animate-pulse-slow">•</span>
                      <span className="text-gray-300">Deep learning architecture</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-6 h-6 mr-3 flex items-center justify-center text-emerald-400 bg-emerald-500/10 rounded-full animate-pulse-slow">•</span>
                      <span className="text-gray-300">Real-time processing</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-6 h-6 mr-3 flex items-center justify-center text-emerald-400 bg-emerald-500/10 rounded-full animate-pulse-slow">•</span>
                      <span className="text-gray-300">Continuous learning</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Enhanced Testimonials Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mb-32"
          >
            <h3 className="text-4xl md:text-6xl font-extrabold text-center mb-16 text-gradient-animation bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-400 text-transparent bg-clip-text">
              What Our Customers Say
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                whileHover={{ scale: 1.02, translateY: -5 }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-emerald-500/50 transition-all duration-300 group card-shine"
              >
                <div className="text-5xl mb-6 transform transition-transform group-hover:scale-110 animate-glow">⭐⭐⭐⭐⭐</div>
                <p className="text-gray-300 mb-6 text-lg">
                  "My living room transforms throughout the day! The AI creates exactly the art I want to see."
                </p>
                <p className="font-medium text-gradient-animation bg-gradient-to-r from-white via-gray-200 to-white text-transparent bg-clip-text">
                  - Lisa M.
                </p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02, translateY: -5 }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-emerald-500/50 transition-all duration-300 group card-shine"
              >
                <div className="text-5xl mb-6 transform transition-transform group-hover:scale-110 animate-glow">⭐⭐⭐⭐⭐</div>
                <p className="text-gray-300 mb-6 text-lg">
                  "Not only is the art fantastic, but the commitment to sustainability really convinced me."
                </p>
                <p className="font-medium text-gradient-animation bg-gradient-to-r from-white via-gray-200 to-white text-transparent bg-clip-text">
                  - Mark H.
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Enhanced Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-center"
          >
            <h3 className="text-4xl md:text-6xl font-extrabold mb-8 text-gradient-animation bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-400 text-transparent bg-clip-text">
              Ready to Experience NeoFrame?
            </h3>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Transform your space with personalized digital art that adapts to your style.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl group card-shine"
            >
              <span className="flex items-center">
                <span className="mr-2">Get Started</span>
                <span className="transform transition-transform group-hover:translate-x-1">→</span>
              </span>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Features; 