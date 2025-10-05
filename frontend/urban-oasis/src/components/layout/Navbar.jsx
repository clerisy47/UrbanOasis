import React from 'react';
import logo from '../../assets/NASA.png';

const Navbar = () => (
  <nav className="px-6 py-4 bg-floral/60 backdrop-blur-md border-b border-sage/20">
    <div className="max-w-7xl mx-auto flex items-center justify-between">
      <div className="flex items-center">
        <a href="/" aria-label="Urban Oasis home" className="flex items-center group focus:outline-none focus:ring-2 focus:ring-sage/50 rounded">
          <img
            src={logo}
            alt="Urban Oasis logo"
            className="h-14 sm:h-16 md:h-20 lg:h-24 w-auto mr-4 transition-transform duration-200 transform group-hover:scale-105 group-focus:scale-105"
          />
          <h1 className="text-brunswick font-serif text-2xl md:text-3xl font-bold hidden sm:block transition-colors duration-150 group-hover:text-forest">
            UrbanOasis
          </h1>
        </a>
      </div>

      <div className="flex items-center space-x-3">
        <nav className="hidden md:flex space-x-4">
          <a href="#maps" className="text-sm text-brunswick hover:text-forest transition-colors">Maps</a>
          <a href="#quiz" className="text-sm text-brunswick hover:text-forest transition-colors">Quiz</a>
        </nav>

        <a
          href="#get-started"
          className="inline-flex items-center px-3 py-1.5 bg-sage text-white rounded-md text-sm font-medium hover:bg-sage/90 focus:outline-none focus:ring-2 focus:ring-sage/50 transition"
        >
          Get Started
        </a>
      </div>
    </div>
  </nav>
);

export default Navbar;
