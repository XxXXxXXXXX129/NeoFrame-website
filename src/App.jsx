import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './pages/About';
import Features from './pages/Features';
import Sustainability from './pages/Sustainability';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';
import Hero from './components/Hero';
import Presentation from './pages/Presentation';
import ScrollToTop from './components/ScrollToTop';
import CanvasBackground from './components/CanvasBackground';
import SoundManager from './components/SoundManager';
import TouchManager from './components/TouchManager';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <CanvasBackground />
      <SoundManager />
      <TouchManager />
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/features" element={<Features />} />
          <Route path="/sustainability" element={<Sustainability />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/presentation" element={<Presentation />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App; 