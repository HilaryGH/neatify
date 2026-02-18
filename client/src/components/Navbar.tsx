import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center">
            <img 
              src="/neatify.jpg" 
              alt="Neatify Logo" 
              className="h-36 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link 
              to="/" 
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Home
            </Link>
            <Link 
              to="/services" 
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Services
            </Link>
            <Link 
              to="/about" 
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Contact
            </Link>
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white px-6 py-2.5 rounded-tr-lg rounded-bl-lg rounded-tl-none rounded-br-none font-semibold transition-colors shadow-md hover:shadow-lg"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none transition-all duration-300 transform hover:scale-110"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <FiX className="h-6 w-6 transition-transform duration-300 rotate-0" />
              ) : (
                <FiMenu className="h-6 w-6 transition-transform duration-300 rotate-0" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`md:hidden bg-white border-t border-gray-200 overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen 
            ? 'max-h-96 opacity-100 shadow-lg' 
            : 'max-h-0 opacity-0'
        }`}
      >
        <div className={`px-4 pt-2 pb-4 space-y-2 transform transition-all duration-300 ease-in-out ${
          isMenuOpen 
            ? 'translate-y-0 opacity-100' 
            : '-translate-y-4 opacity-0'
        }`}>
          <Link 
            to="/" 
            className="block px-3 py-2.5 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md font-medium transition-all duration-200 transform hover:translate-x-1"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            to="/services" 
            className="block px-3 py-2.5 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md font-medium transition-all duration-200 transform hover:translate-x-1"
            onClick={() => setIsMenuOpen(false)}
          >
            Services
          </Link>
          <Link 
            to="/about" 
            className="block px-3 py-2.5 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md font-medium transition-all duration-200 transform hover:translate-x-1"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <Link 
            to="/contact" 
            className="block px-3 py-2.5 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md font-medium transition-all duration-200 transform hover:translate-x-1"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
          <Link 
            to="/contact" 
            className="block bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white px-6 py-2.5 rounded-tr-lg rounded-bl-lg rounded-tl-none rounded-br-none font-semibold text-center transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105 mt-4"
            onClick={() => setIsMenuOpen(false)}
          >
            Get Quote
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
