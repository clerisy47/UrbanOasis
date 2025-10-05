import React from 'react';
import { Home, MapPin, Brain, BookOpen } from 'lucide-react';
import { Link } from '../../router/Router';

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-floral/80 backdrop-blur-lg border-b border-sage/20">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-serif font-bold text-brunswick">
            Urban Oasis
          </Link>
          
          <div className="flex gap-6">
            <Link
              to="/"
              className="flex items-center gap-2 text-brunswick hover:text-sage transition-colors font-medium"
            >
              <Home className="w-4 h-4" />
              Home
            </Link>
            <Link
              to="/map"
              className="flex items-center gap-2 text-brunswick hover:text-sage transition-colors font-medium"
            >
              <MapPin className="w-4 h-4" />
              Map
            </Link>
            <Link
              to="/quiz"
              className="flex items-center gap-2 text-brunswick hover:text-sage transition-colors font-medium"
            >
              <Brain className="w-4 h-4" />
              Quiz
            </Link>
            <Link
              to="/know-more"
              className="flex items-center gap-2 text-brunswick hover:text-sage transition-colors font-medium"
            >
              <BookOpen className="w-4 h-4" />
              Know More
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;