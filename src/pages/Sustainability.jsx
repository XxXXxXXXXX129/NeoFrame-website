import React from 'react';
import { motion } from 'framer-motion';

const sustainabilityInitiatives = [
  {
    title: "🌱 Sustainable Products",
    description: "NeoFrame develops digital art displays focusing on longevity and repairability.",
    details: [
      "15+ years lifespan guaranteed",
      "Modular design for easy repairs",
      "Free repair services",
      "Recycling program for old devices"
    ]
  },
  {
    title: "♻️ Packaging & Waste",
    description: "Zero-waste strategy in production and packaging.",
    details: [
      "100% plastic-free packaging",
      "Biodegradable materials",
      "Reusable transport boxes",
      "Local recycling partnerships"
    ]
  },
  {
    title: "⚡ Energy & Resources",
    description: "100% renewable energy in production and operations.",
    details: [
      "Solar-powered production",
      "Energy-efficient devices",
      "Carbon-neutral supply chain",
      "Water-saving processes"
    ]
  },
  {
    title: "👥 People & Society",
    description: "Fair working conditions and social commitment.",
    details: [
      "Above-market compensation",
      "Flexible working hours",
      "Comprehensive healthcare",
      "Professional development programs"
    ]
  }
];

const productDetails = [
  {
    title: "Product & Purpose",
    icon: "🎨",
    points: [
      "Energy-efficient digital art displays",
      "40% less power consumption than conventional displays",
      "Reduction of physical art transport",
      "Promotion of digital, sustainable art"
    ]
  },
  {
    title: "Energy Sources",
    icon: "⚡",
    points: [
      "100% renewable energy in production",
      "Solar panels on all company buildings",
      "Green data centers for AI processing",
      "Energy storage systems for excess power"
    ]
  },
  {
    title: "Waste Management",
    icon: "♻️",
    points: [
      "Zero-waste production by 2025",
      "Recycling program for old devices",
      "Component refurbishment",
      "Partnerships with local recyclers"
    ]
  }
];

const employeeBenefits = [
  {
    title: "Compensation & Benefits",
    details: [
      "Above-market base salary",
      "Annual profit sharing",
      "Stock options after 2 years",
      "Additional retirement benefits"
    ]
  },
  {
    title: "Work-Life Balance",
    details: [
      "30 days annual leave",
      "Flexible working hours",
      "Remote work options",
      "Sabbatical after 3 years"
    ]
  },
  {
    title: "Health & Wellbeing",
    details: [
      "Premium health insurance",
      "Mental health program",
      "Sports & fitness allowance",
      "Healthy meals in cafeteria"
    ]
  }
];

const sustainabilityGoals = [
  {
    year: "2024",
    goals: [
      "Carbon-neutral operations at all locations",
      "100% recyclable packaging",
      "Launch of reforestation program"
    ]
  },
  {
    year: "2025",
    goals: [
      "50% energy consumption reduction",
      "Closed material cycle",
      "1 million trees planted"
    ]
  },
  {
    year: "2030",
    goals: [
      "Climate-positive production",
      "Zero-waste manufacturing",
      "100% renewable energy in supply chain"
    ]
  }
];

function Sustainability() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-gray-800 to-gray-700 relative overflow-hidden pt-16">
      {/* Background Effects */}
      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-40 -left-40 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute bottom-40 right-20 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-float-slow"></div>
      </div>
      
      <div className="relative py-24">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-32"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:text-left">
                <h1 className="text-5xl md:text-7xl font-bold mb-8 text-gradient-animation bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-400 text-transparent bg-clip-text">
                  Sustainability at NeoFrame
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                  Where innovation meets environmental responsibility. We're committed to creating a sustainable 
                  future through technology and conscious business practices.
                </p>
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
                  <img
                    src="/Futuristic AI Art 3.jpeg"
                    alt="NeoFrame Sustainable Technology"
                    className="w-full h-full object-cover rounded-2xl"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "/Futuristic AI Art.jpeg";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          {/* Initiatives Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
            {sustainabilityInitiatives.map((initiative, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-emerald-500/50 transition-all duration-300 group"
              >
                <div className="text-5xl mb-6">{initiative.title.split(" ")[0]}</div>
                <h3 className="text-3xl font-extrabold mb-4 bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
                  {initiative.title.split(" ").slice(1).join(" ")}
                </h3>
                <p className="text-gray-300 mb-6">{initiative.description}</p>
                <ul className="space-y-4">
                  {initiative.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-center text-gray-300">
                      <span className="w-6 h-6 mr-3 flex items-center justify-center text-emerald-400">•</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Goals Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-32"
          >
            <h2 className="text-4xl font-extrabold text-center mb-16 text-gradient-animation bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-400 text-transparent bg-clip-text">
              Sustainability Roadmap
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {sustainabilityGoals.map((period, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02, translateY: -5 }}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-emerald-500/50 transition-all duration-300 group"
                >
                  <div className="text-5xl font-extrabold text-emerald-400 mb-8 group-hover:scale-110 transition-transform">
                    {period.year}
                  </div>
                  <ul className="space-y-4">
                    {period.goals.map((goal, goalIndex) => (
                      <li key={goalIndex} className="flex items-start text-gray-300">
                        <span className="w-6 h-6 mr-3 flex items-center justify-center text-emerald-400">•</span>
                        {goal}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Transparency Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-4xl font-extrabold mb-8 text-gradient-animation bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-400 text-transparent bg-clip-text">
              Transparency & Reporting
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              We're committed to full transparency in our sustainability efforts. 
              Quarterly reports and independent audits ensure we meet our goals 
              and continuously improve our impact.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl group"
            >
              <span className="flex items-center">
                <span className="mr-2">Download Sustainability Report</span>
                <span className="transform transition-transform group-hover:translate-x-1">→</span>
              </span>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Sustainability; 