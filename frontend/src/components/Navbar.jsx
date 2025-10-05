import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-brunswick/90 backdrop-blur-md text-floral shadow-lg">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="font-serif text-xl font-bold">
            Urban Oasis
          </Link>
          <div className="flex gap-6">
            <Link 
              to="/" 
              className={`font-sans hover:text-sage transition-colors ${
                location.pathname === '/' ? 'text-sage' : 'text-floral'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/map" 
              className={`font-sans hover:text-sage transition-colors ${
                location.pathname === '/map' ? 'text-sage' : 'text-floral'
              }`}
            >
              Map
            </Link>
            <Link 
              to="/quiz" 
              className={`font-sans hover:text-sage transition-colors ${
                location.pathname === '/quiz' ? 'text-sage' : 'text-floral'
              }`}
            >
              Quiz
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;