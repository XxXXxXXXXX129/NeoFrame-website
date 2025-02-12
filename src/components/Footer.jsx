import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">About Us</h3>
            <p className="mt-4 text-base">
              NeoFrame - Innovative art display systems for modern living.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">Navigation</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link to="/" className="text-base hover:text-white transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-base hover:text-white transition-colors duration-200">
                  About
                </Link>
              </li>
              <li>
                <Link to="/features" className="text-base hover:text-white transition-colors duration-200">
                  Features
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">Legal</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link to="/privacy" className="text-base hover:text-white transition-colors duration-200">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/imprint" className="text-base hover:text-white transition-colors duration-200">
                  Imprint
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">Contact</h3>
            <ul className="mt-4 space-y-4">
              <li className="text-base">
                Email: info@neoframe.com
              </li>
              <li className="text-base">
                Phone: +1 123 456789
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800">
          <p className="text-center text-base">
            © {new Date().getFullYear()} NeoFrame. All rights reserved.
          </p>
          <p className="mt-4 text-sm text-center max-w-3xl mx-auto">
            Disclaimer: This website is a demonstration project only. NeoFrame is not a real company and this website exists solely for demonstration purposes. 
            Any resemblance to real companies, products, or services is purely coincidental. No real products are available for purchase.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer; 