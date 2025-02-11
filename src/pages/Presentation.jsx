import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from 'framer-motion';

const slides = [
  {
    id: 1,
    title: "NeoFrame",
    content: (
      <motion.div 
        className="flex flex-col items-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div 
          className="w-40 h-40 mb-12 relative group"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-full blur-xl group-hover:scale-110 transition-transform duration-300"></div>
          <svg className="w-full h-full text-emerald-400 relative transform group-hover:rotate-180 transition-transform duration-700" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="4" y="4" width="24" height="24" rx="2" stroke="currentColor" strokeWidth="2"/>
            <rect x="8" y="8" width="16" height="16" rx="1" fill="currentColor"/>
          </svg>
        </motion.div>
        <motion.p 
          className="text-2xl text-gray-300 text-center max-w-2xl leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Revolutionizing digital art display through 
          <span className="text-gradient-animation bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-400 text-transparent bg-clip-text font-bold"> AI and sustainability</span>
        </motion.p>
      </motion.div>
    )
  },
  {
    id: 2,
    title: "Our Vision",
    content: (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <motion.div 
            className="bg-gray-800/40 backdrop-blur-md rounded-2xl p-8 border border-gray-700/50 hover:border-emerald-500/30 transition-all duration-500"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h3 className="text-2xl font-extrabold mb-4 bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">Our Mission</h3>
            <p className="text-gray-300">
              To transform how people experience and interact with digital art by providing innovative, 
              sustainable display solutions that bring art to life in any space.
            </p>
          </motion.div>
          <motion.div 
            className="bg-gray-800/40 backdrop-blur-md rounded-2xl p-8 border border-gray-700/50 hover:border-emerald-500/30 transition-all duration-500"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h3 className="text-2xl font-extrabold mb-4 bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">Our Vision</h3>
            <p className="text-gray-300">
              To become the global leader in digital art display technology, making art more accessible 
              while promoting sustainability and innovation in the industry.
            </p>
          </motion.div>
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
    )
  },
  {
    id: 3,
    title: "AI-Powered Art Generation",
    content: (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Product Image */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <motion.div
            className="relative rounded-2xl overflow-hidden shadow-2xl transform perspective-1000"
            whileHover={{ scale: 1.02, rotateY: -5 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 mix-blend-overlay"></div>
            <img
              src="/Futuristic AI Art 3.jpeg"
              alt="NeoFrame AI Art Display"
              className="w-full h-full object-cover rounded-2xl"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "/Futuristic AI Art.jpeg";
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
          </motion.div>
          {/* Decorative Elements */}
          <div className="absolute -top-4 -left-4 w-72 h-72 bg-emerald-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        </motion.div>

        <div className="space-y-8">
          <h3 className="text-2xl font-extrabold bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
            Experience art that adapts to your style and mood
          </h3>
          <p className="text-gray-300">
            Our advanced AI algorithms create unique pieces that perfectly match your space and preferences.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center space-x-2">
              <span className="text-2xl">🎨</span>
              <span className="text-gray-300">Millions of styles</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-2xl">🌈</span>
              <span className="text-gray-300">Dynamic colors</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-2xl">🔄</span>
              <span className="text-gray-300">Real-time updates</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-2xl">📱</span>
              <span className="text-gray-300">Smart controls</span>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 4,
    title: "Energy Sources",
    content: (
      <div className="space-y-6">
        <motion.div 
          className="bg-gray-800/40 backdrop-blur-md rounded-2xl p-8 border border-gray-700/50 hover:border-emerald-500/30 transition-all duration-500 hover:shadow-lg hover:shadow-emerald-500/10 group transform-gpu hover:-translate-y-1"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
              <span className="text-2xl">⚡</span>
            </div>
            <h3 className="text-xl font-bold text-gradient-animation bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-400 text-transparent bg-clip-text">
              Renewable Energy Commitment
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: "☀️", text: "Solar-powered manufacturing facilities with rooftop panels", color: "from-yellow-400 to-orange-400" },
              { icon: "🌬️", text: "Wind energy partnerships for additional power needs", color: "from-blue-400 to-cyan-400" },
              { icon: "🔋", text: "Energy storage systems for consistent power supply", color: "from-green-400 to-emerald-400" },
              { icon: "♻️", text: "100% renewable energy commitment for all operations", color: "from-teal-400 to-emerald-400" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative group/item"
              >
                <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover/item:opacity-10 transition-opacity duration-300 rounded-xl"
                     style={{ backgroundImage: `linear-gradient(to right, ${item.color})` }}></div>
                <div className="relative flex items-start space-x-4 p-4 rounded-xl bg-gray-900/30 hover:bg-gray-900/50 transition-all duration-300">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-r flex items-center justify-center transform group-hover/item:scale-110 transition-transform duration-300"
                       style={{ backgroundImage: `linear-gradient(to right, ${item.color})` }}>
                    <span className="text-xl">{item.icon}</span>
                  </div>
                  <p className="flex-1 text-gray-300 group-hover/item:text-gray-200 transition-colors duration-300">
                    {item.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    )
  },
  {
    id: 5,
    title: "Waste Management",
    content: (
      <motion.div 
        className="space-y-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div 
          className="bg-gray-800/40 backdrop-blur-md rounded-2xl p-8 border border-gray-700/50 hover:border-emerald-500/30 transition-all duration-500 hover:shadow-lg hover:shadow-emerald-500/10 group transform-gpu hover:-translate-y-1"
        >
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
              <span className="text-2xl">♻️</span>
            </div>
            <h3 className="text-xl font-bold text-gradient-animation bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-400 text-transparent bg-clip-text">
              Zero-Waste Strategy
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { icon: "📦", text: "100% recyclable and biodegradable packaging", color: "from-blue-400 to-cyan-400" },
              { icon: "🔄", text: "Product return and recycling program", color: "from-green-400 to-emerald-400" },
              { icon: "♻️", text: "Modular design for easy repair and component recycling", color: "from-teal-400 to-emerald-400" },
              { icon: "🌱", text: "Digital-first documentation to minimize paper waste", color: "from-emerald-400 to-green-400" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="relative group/item"
              >
                <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover/item:opacity-10 transition-opacity duration-300 rounded-xl"
                     style={{ backgroundImage: `linear-gradient(to right, ${item.color})` }}></div>
                <div className="relative flex items-start space-x-4 p-4 rounded-xl bg-gray-900/30 hover:bg-gray-900/50 transition-all duration-300">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-r flex items-center justify-center transform group-hover/item:scale-110 transition-transform duration-300"
                       style={{ backgroundImage: `linear-gradient(to right, ${item.color})` }}>
                    <span className="text-xl">{item.icon}</span>
                  </div>
                  <p className="flex-1 text-gray-300 group-hover/item:text-gray-200 transition-colors duration-300">
                    {item.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    )
  },
  {
    id: 6,
    title: "Employee Benefits",
    content: (
      <motion.div 
        className="space-y-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div 
          className="bg-gray-800/40 backdrop-blur-md rounded-2xl p-8 border border-gray-700/50 hover:border-emerald-500/30 transition-all duration-500 hover:shadow-lg hover:shadow-emerald-500/10 group transform-gpu hover:-translate-y-1"
        >
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
              <span className="text-2xl">👥</span>
            </div>
            <h3 className="text-xl font-bold text-gradient-animation bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-400 text-transparent bg-clip-text">
              Management & Benefits
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { icon: "💰", text: "Competitive salary with profit sharing", color: "from-yellow-400 to-amber-400" },
              { icon: "🏥", text: "Comprehensive healthcare and wellness programs", color: "from-red-400 to-pink-400" },
              { icon: "📚", text: "Professional development and education support", color: "from-blue-400 to-indigo-400" },
              { icon: "⚖️", text: "Flexible work arrangements and paid time off", color: "from-purple-400 to-violet-400" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="relative group/item"
              >
                <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover/item:opacity-10 transition-opacity duration-300 rounded-xl"
                     style={{ backgroundImage: `linear-gradient(to right, ${item.color})` }}></div>
                <div className="relative flex items-start space-x-4 p-4 rounded-xl bg-gray-900/30 hover:bg-gray-900/50 transition-all duration-300">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-r flex items-center justify-center transform group-hover/item:scale-110 transition-transform duration-300"
                       style={{ backgroundImage: `linear-gradient(to right, ${item.color})` }}>
                    <span className="text-xl">{item.icon}</span>
                  </div>
                  <p className="flex-1 text-gray-300 group-hover/item:text-gray-200 transition-colors duration-300">
                    {item.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    )
  },
  {
    id: 7,
    title: "Sustainability Goals",
    content: (
      <div className="space-y-8 p-8">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-400 text-transparent bg-clip-text">
          2030 Vision
        </h2>
        <div className="space-y-6">
          {[
            {
              title: "Carbon negative operations",
              progress: 75,
              icon: "🌍",
              color: "from-emerald-500 to-green-500"
            },
            {
              title: "100% circular product lifecycle",
              progress: 60,
              icon: "♻️",
              color: "from-blue-500 to-cyan-500"
            },
            {
              title: "1 million trees planted through partnerships",
              progress: 45,
              icon: "🌱",
              color: "from-teal-500 to-emerald-500"
            },
            {
              title: "Zero e-waste through complete product recyclability",
              progress: 80,
              icon: "💡",
              color: "from-indigo-500 to-blue-500"
            }
          ].map((goal, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              className="relative"
            >
              <div className="flex items-center mb-2">
                <span className="text-2xl mr-3">{goal.icon}</span>
                <span className="text-gray-200 font-medium">{goal.title}</span>
              </div>
              <div className="relative h-4 bg-gray-700/50 rounded-full overflow-hidden backdrop-blur-sm">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${goal.progress}%` }}
                  transition={{ duration: 1.5, ease: "easeOut", delay: index * 0.2 }}
                  className={`absolute top-0 left-0 h-full rounded-full bg-gradient-to-r ${goal.color}`}
                />
                <div className="absolute top-0 right-0 bottom-0 flex items-center pr-2">
                  <span className="text-xs font-semibold text-white">{goal.progress}%</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    )
  },
  {
    id: 8,
    title: "Workplace Design",
    content: (
      <motion.div 
        className="space-y-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div 
          className="bg-gray-800/40 backdrop-blur-md rounded-2xl p-8 border border-gray-700/50 hover:border-emerald-500/30 transition-all duration-500 hover:shadow-lg hover:shadow-emerald-500/10 group transform-gpu hover:-translate-y-1"
        >
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
              <span className="text-2xl">🏢</span>
            </div>
            <h3 className="text-xl font-bold text-gradient-animation bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-400 text-transparent bg-clip-text">
              Sustainable Office Design
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { 
                icon: "🏢", 
                title: "LEED Platinum Certified",
                text: "Our building meets the highest standards of sustainable construction",
                color: "from-emerald-400 to-green-400"
              },
              { 
                icon: "🌿", 
                title: "Biophilic Design",
                text: "Living walls and natural light create a healthy work environment",
                color: "from-green-400 to-teal-400"
              },
              { 
                icon: "♻️", 
                title: "Sustainable Materials",
                text: "Using recycled and eco-friendly building materials throughout",
                color: "from-teal-400 to-cyan-400"
              },
              { 
                icon: "🎨", 
                title: "Interactive Showroom",
                text: "Experience our products in an immersive environment",
                color: "from-cyan-400 to-blue-400"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="relative group/item"
              >
                <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover/item:opacity-10 transition-opacity duration-300 rounded-xl"
                     style={{ backgroundImage: `linear-gradient(to right, ${item.color})` }}></div>
                <div className="relative p-6 rounded-xl bg-gray-900/30 hover:bg-gray-900/50 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r mb-4 flex items-center justify-center transform group-hover/item:scale-110 transition-transform duration-300"
                       style={{ backgroundImage: `linear-gradient(to right, ${item.color})` }}>
                    <span className="text-2xl">{item.icon}</span>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-200 mb-2">{item.title}</h4>
                  <p className="text-gray-400 group-hover/item:text-gray-300 transition-colors duration-300">
                    {item.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    )
  }
];

function Presentation() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [slideDirection, setSlideDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showHint, setShowHint] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [progress, setProgress] = useState(0);

  // Performance-optimierte Event-Handler
  const debouncedMouseMove = useCallback(
    debounce((e) => {
      const { clientX, clientY } = e;
      
      requestAnimationFrame(() => {
        setMousePosition({
          x: (clientX / window.innerWidth - 0.5) * 20,
          y: (clientY / window.innerHeight - 0.5) * 20
        });
      });
    }, 5),
    []
  );

  // Optimierte Event-Listener
  useEffect(() => {
    window.addEventListener('mousemove', debouncedMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', debouncedMouseMove);
      debouncedMouseMove.cancel();
    };
  }, [debouncedMouseMove]);

  // Reduzierte Partikelanzahl für bessere Performance
  const particles = useMemo(() => {
    return [...Array(12)].map((_, i) => ({
      id: i,
      size: Math.random() > 0.5 ? 4 : 6,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      color: Math.random() > 0.5 
        ? 'rgb(129, 140, 248)'
        : Math.random() > 0.5 
          ? 'rgb(52, 211, 153)'
          : 'rgb(139, 92, 246)',
      duration: Math.random() * 5 + 8,
      delay: Math.random() * 5
    }));
  }, []);

  // Optimierte Slide-Transition
  const optimizedTransition = useMemo(() => ({
    type: "spring",
    stiffness: 300,
    damping: 30,
    opacity: { duration: 0.5 },
    rotateY: { duration: 0.8 },
    z: { duration: 0.8 }
  }), []);

  // Verbesserte Slide-Varianten mit 3D-Effekten
  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
      rotateY: direction > 0 ? 45 : -45,
      z: -200
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0,
      z: 0
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
      rotateY: direction < 0 ? 45 : -45,
      z: -200
    })
  };

  // Verbesserte Keyboard Navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (isTransitioning) return;
      
      if (e.key === 'ArrowRight' || e.key === ' ') {
        setSlideDirection(1);
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        setSlideDirection(-1);
        previousSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide, isTransitioning]);

  // Verbessertes Autoplay mit Übergangsanimation
  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        if (currentSlide < slides.length) {
          setSlideDirection(1);
          setCurrentSlide(prev => prev + 1);
        } else {
          setIsAutoPlaying(false);
        }
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, currentSlide]);

  // Verbesserte Fortschrittsanimation
  useEffect(() => {
    setProgress(0);
    const duration = 5000;
    const interval = 16; // 60fps
    let start = null;
    let rafId;

    const animate = timestamp => {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;
      const newProgress = Math.min((elapsed / duration) * 100, 100);
      
      setProgress(newProgress);

      if (elapsed < duration && isAutoPlaying) {
        rafId = requestAnimationFrame(animate);
      }
    };

    if (isAutoPlaying) {
      rafId = requestAnimationFrame(animate);
    }

    return () => cancelAnimationFrame(rafId);
  }, [currentSlide, isAutoPlaying]);

  // Verbesserte Navigation mit Übergangseffekten
  const nextSlide = () => {
    if (isTransitioning || currentSlide >= slides.length) return;
    setIsTransitioning(true);
    setSlideDirection(1);
    setCurrentSlide(current => current + 1);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const previousSlide = () => {
    if (isTransitioning || currentSlide <= 1) return;
    setIsTransitioning(true);
    setSlideDirection(-1);
    setCurrentSlide(current => current - 1);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  return (
    <div 
      className="min-h-screen bg-gradient-to-br from-blue-900 via-gray-800 to-gray-700 relative overflow-hidden pt-16"
      role="region"
      aria-label="Präsentation"
    >
      {/* Optimierte Partikel */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute"
            style={{
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              top: particle.top,
              left: particle.left,
              background: particle.color,
              borderRadius: '50%',
              filter: 'blur(1px)',
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 30 - 15, 0],
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: particle.delay,
            }}
          />
        ))}
      </div>

      <motion.div 
        className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24"
        style={{
          perspective: "2000px"
        }}
      >
        <motion.div 
          className="bg-gray-900/80 backdrop-blur-lg rounded-2xl p-8 shadow-xl border border-gray-700/50 relative overflow-hidden"
          animate={{
            rotateX: mousePosition.y * 0.1,
            rotateY: mousePosition.x * 0.1,
          }}
          transition={{ type: "spring", stiffness: 100, damping: 30 }}
          style={{ transformStyle: "preserve-3d" }}
          role="presentation"
        >
          {/* Glanzeffekt */}
          <div className="absolute inset-0 pointer-events-none">
            <div 
              className="absolute inset-0 opacity-30"
              style={{
                background: `radial-gradient(circle at ${
                  50 + (mousePosition.x / 20) * 50
                }% ${
                  50 + (mousePosition.y / 20) * 50
                }%, rgba(255,255,255,0.2) 0%, transparent 50%)`
              }}
            />
          </div>

          {/* Zugängliche Navigation */}
          <div 
            className="flex justify-between items-center mb-8"
            role="navigation"
            aria-label="Präsentationssteuerung"
          >
            <div className="text-gray-400 flex items-center space-x-2">
              <span className="text-2xl font-bold text-gradient-animation bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-400 text-transparent bg-clip-text">
                Folie {currentSlide}
              </span>
              <span className="text-sm" aria-hidden="true">/</span>
              <span className="text-sm">von {slides.length}</span>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className={`px-4 py-2 rounded-lg transition-all duration-300 flex items-center space-x-2 ${
                isAutoPlaying 
                  ? 'bg-red-500/20 text-red-400 hover:bg-red-500/30'
                  : 'bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500/30'
              }`}
              aria-label={isAutoPlaying ? 'Automatische Wiedergabe stoppen' : 'Automatische Wiedergabe starten'}
            >
              <span>{isAutoPlaying ? 'Stop' : 'Auto Play'}</span>
              <motion.span
                animate={{ rotate: isAutoPlaying ? 360 : 0 }}
                transition={{ duration: 2, repeat: isAutoPlaying ? Infinity : 0, ease: "linear" }}
                aria-hidden="true"
              >
                {isAutoPlaying ? '⏹' : '▶'}
              </motion.span>
            </motion.button>
          </div>

          {/* Enhanced Progress Bar */}
          {isAutoPlaying && (
            <div className="w-full h-1 bg-gray-700 rounded-full mb-8 overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-500 background-animate"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>
          )}

          {/* Zugängliche Slide-Inhalte */}
          <div 
            className="relative overflow-hidden perspective-1000" 
            style={{ minHeight: '600px' }}
            role="region"
            aria-label={`Folie ${currentSlide}: ${slides[currentSlide - 1].title}`}
          >
            <AnimatePresence initial={false} custom={slideDirection}>
              <motion.div
                key={currentSlide}
                custom={slideDirection}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={optimizedTransition}
                className="absolute w-full transform-gpu"
                style={{ 
                  transformStyle: "preserve-3d",
                  perspective: "1000px"
                }}
              >
                <motion.div
                  className="relative"
                  animate={{
                    rotateX: mousePosition.y * 0.05,
                    rotateY: mousePosition.x * 0.05,
                  }}
                  transition={{ type: "spring", stiffness: 100, damping: 30 }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <motion.h2
                    className="text-4xl md:text-5xl font-bold text-gradient-animation bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-400 text-transparent bg-clip-text mb-8 relative"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    style={{ transform: "translateZ(40px)" }}
                  >
                    {slides[currentSlide - 1].title}
                  </motion.h2>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="glass-card hover:shadow-2xl transition-all duration-300 overflow-y-auto max-h-[500px] relative"
                    style={{ transform: "translateZ(20px)" }}
                  >
                    {/* Glasmorphism Overlay */}
                    <div 
                      className="absolute inset-0 backdrop-blur-sm bg-white/10 dark:bg-gray-900/10 border border-white/20 dark:border-gray-800/20 rounded-xl"
                      style={{
                        background: `radial-gradient(circle at ${
                          50 + (mousePosition.x / 20) * 50
                        }% ${
                          50 + (mousePosition.y / 20) * 50
                        }%, rgba(255,255,255,0.1) 0%, transparent 60%)`
                      }}
                    />
                    
                    {/* Content Container */}
                    <div className="relative z-10 p-8">
                      {slides[currentSlide - 1].content}
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Zugängliche Navigation */}
          <div 
            className="mt-12 flex flex-col items-center space-y-6"
            role="navigation"
            aria-label="Foliennavigation"
          >
            <div className="flex space-x-3">
              {slides.map((slide) => (
                <motion.button
                  key={slide.id}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setCurrentSlide(slide.id)}
                  className="relative group"
                  aria-label={`Gehe zu Folie ${slide.id}: ${slide.title}`}
                  aria-current={currentSlide === slide.id ? 'slide' : undefined}
                >
                  <div className={`w-3 h-3 rounded-full transition-all duration-300 transform ${
                    currentSlide === slide.id
                      ? 'bg-gradient-to-r from-emerald-400 to-teal-400 scale-125 ring-4 ring-emerald-400/20'
                      : 'bg-gray-600 hover:bg-gray-500 group-hover:scale-110'
                  }`} />
                  
                  {/* Hover Preview */}
                  <motion.div
                    className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-900/90 rounded-lg p-2 pointer-events-none"
                    initial={{ opacity: 0, y: 10, scale: 0.8 }}
                    whileHover={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="text-xs text-white whitespace-nowrap">
                      {slide.title}
                    </span>
                  </motion.div>
                </motion.button>
              ))}
            </div>
            
            <div className="flex justify-center space-x-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={previousSlide}
                disabled={currentSlide === 1}
                className="px-6 py-3 text-white bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed hover:from-emerald-500 hover:to-teal-500 transition-all duration-300 flex items-center space-x-2 group shadow-lg hover:shadow-xl relative overflow-hidden"
              >
                <motion.span
                  animate={{ x: [-2, 0, -2] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="transform rotate-180"
                >
                  →
                </motion.span>
                <span>Previous</span>
                
                {/* Button Shine Effect */}
                <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-shine" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={nextSlide}
                disabled={currentSlide === slides.length}
                className="px-6 py-3 text-white bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed hover:from-emerald-500 hover:to-teal-500 transition-all duration-300 flex items-center space-x-2 group shadow-lg hover:shadow-xl relative overflow-hidden"
              >
                <span>Next</span>
                <motion.span
                  animate={{ x: [0, 2, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
                
                {/* Button Shine Effect */}
                <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-shine" />
              </motion.button>
            </div>
          </div>

          {/* Zugängliche Tastaturnavigation */}
          <motion.div 
            className="mt-8 text-center text-gray-500 text-sm flex items-center justify-center space-x-4"
            role="region"
            aria-label="Tastaturnavigation"
          >
            <span>Use</span>
            <div className="flex space-x-2">
              <motion.kbd 
                className="px-2 py-1 bg-gray-800 rounded-lg shadow"
                whileHover={{ scale: 1.1, y: -2 }}
              >
                ←
              </motion.kbd>
              <motion.kbd 
                className="px-2 py-1 bg-gray-800 rounded-lg shadow"
                whileHover={{ scale: 1.1, y: -2 }}
              >
                →
              </motion.kbd>
            </div>
            <span>or</span>
            <motion.kbd 
              className="px-4 py-1 bg-gray-800 rounded-lg shadow"
              whileHover={{ scale: 1.1, y: -2 }}
            >
              space
            </motion.kbd>
            <span>to navigate</span>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}

// Performance-optimierte Debounce-Funktion
function debounce(func, wait) {
  let timeout;
  const debouncedFunction = function(...args) {
    const context = this;
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(context, args), wait);
  };
  debouncedFunction.cancel = () => clearTimeout(timeout);
  return debouncedFunction;
}

export default Presentation; 