import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const team = [
  {
    name: "Ben Bendig",
    role: "CEO & AI Research Lead",
    bio: "Tech innovator with a vision for sustainable AI solutions",
    image: "🎨"
  },
  {
    name: "Michael Weber",
    role: "Head of Sustainability",
    bio: "Environmental scientist turned tech innovator",
    image: "🌱"
  },
  {
    name: "David Park",
    role: "Head of Design",
    bio: "Award-winning industrial designer with focus on sustainable products",
    image: "✨"
  }
];

const milestones = [
  {
    year: "2021",
    title: "The Beginning",
    description: "NeoFrame was founded with a vision to revolutionize digital art"
  },
  {
    year: "2022",
    title: "AI Innovation",
    description: "Development of our proprietary AI art generation technology"
  },
  {
    year: "2023",
    title: "Sustainability Focus",
    description: "Achievement of carbon-neutral operations and sustainable manufacturing"
  },
  {
    year: "2024",
    title: "Global Launch",
    description: "NeoFrame becomes available worldwide"
  }
];

const values = [
  {
    icon: "🎯",
    title: "Innovation",
    description: "Pushing the boundaries of what's possible in digital art and AI"
  },
  {
    icon: "🌍",
    title: "Sustainability",
    description: "Committed to environmental responsibility in everything we do"
  },
  {
    icon: "🤝",
    title: "Community",
    description: "Building a global community of art lovers and creators"
  },
  {
    icon: "💡",
    title: "Excellence",
    description: "Delivering premium quality and exceptional user experience"
  }
];

function About() {
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
              About NeoFrame
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-4 max-w-2xl mx-auto text-xl text-gray-300"
            >
              Revolutionizing digital art display through innovation and sustainability
            </motion.p>
          </div>

          {/* Enhanced Mission & Vision */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-32"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-emerald-500/50 transition-all duration-300 group card-shine">
                  <h3 className="text-2xl font-extrabold mb-6 bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">Our Mission</h3>
                  <p className="text-gray-300">
                    To transform how people experience and interact with digital art by providing innovative, 
                    sustainable display solutions that bring art to life in any space.
                  </p>
                </div>
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-emerald-500/50 transition-all duration-300 group card-shine">
                  <h3 className="text-2xl font-extrabold mb-6 bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">Our Vision</h3>
                  <p className="text-gray-300">
                    To become the global leader in digital art display technology, making art more accessible 
                    while promoting sustainability and innovation in the industry.
                  </p>
                </div>
              </div>

              {/* Product Image */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <motion.div
                  className="relative rounded-2xl overflow-hidden shadow-2xl transform perspective-1000"
                  whileHover={{ scale: 1.02, rotateY: 5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 mix-blend-overlay"></div>
                  <img
                    src="/Futuristic AI Art (2).jpeg"
                    alt="NeoFrame Vision"
                    className="w-full h-full object-cover rounded-2xl"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "/Futuristic AI Art.jpeg";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
                </motion.div>
                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-72 h-72 bg-emerald-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
                <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
              </motion.div>
            </div>
          </motion.div>

          {/* Enhanced Team Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-32"
          >
            <h3 className="text-4xl md:text-6xl font-extrabold text-center mb-16 text-gradient-animation bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-400 text-transparent bg-clip-text">
              Meet Our Team
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02, translateY: -5 }}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-emerald-500/50 transition-all duration-300 group card-shine"
                >
                  <div className="text-5xl mb-6 transform transition-transform group-hover:scale-110 animate-glow">{member.image}</div>
                  <h4 className="text-2xl font-extrabold mb-2 bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">{member.name}</h4>
                  <div className="text-emerald-400 mb-4">{member.role}</div>
                  <p className="text-gray-300">{member.bio}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Enhanced Company Values */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mb-32"
          >
            <h3 className="text-4xl md:text-6xl font-extrabold text-center mb-16 text-gradient-animation bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-400 text-transparent bg-clip-text">
              Our Values
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02, translateY: -5 }}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-emerald-500/50 transition-all duration-300 group card-shine"
                >
                  <div className="text-5xl mb-6 transform transition-transform group-hover:scale-110 animate-glow">{value.icon}</div>
                  <h4 className="text-2xl font-extrabold mb-2 bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">{value.title}</h4>
                  <p className="text-gray-300">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Enhanced Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mb-32"
          >
            <h3 className="text-4xl md:text-6xl font-extrabold text-center mb-16 text-gradient-animation bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-400 text-transparent bg-clip-text">
              Our Journey
            </h3>
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02, translateY: -5 }}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-emerald-500/50 transition-all duration-300 group card-shine"
                >
                  <div className="flex items-center mb-4">
                    <div className="text-5xl font-extrabold text-emerald-400 mb-8 group-hover:scale-110 transition-transform bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent">{milestone.year}</div>
                    <div className="ml-4 h-0.5 flex-1 bg-emerald-400"></div>
                  </div>
                  <h4 className="text-2xl font-extrabold mb-2 bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">{milestone.title}</h4>
                  <p className="text-gray-300">{milestone.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Enhanced Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-center"
          >
            <h3 className="text-4xl md:text-6xl font-extrabold mb-8 text-gradient-animation bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-400 text-transparent bg-clip-text">
              Get in Touch
            </h3>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Have questions about NeoFrame? We'd love to hear from you. Send us a message and we'll 
              respond as soon as possible.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl group card-shine"
            >
              <span className="flex items-center">
                <span className="mr-2">Contact Us</span>
                <span className="transform transition-transform group-hover:translate-x-1">→</span>
              </span>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default About; 