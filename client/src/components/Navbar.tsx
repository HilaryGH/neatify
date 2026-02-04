import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <img 
              src="/Neatfy logo.png" 
              alt="Neatify Logo" 
              className="h-20 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <a href="#home" className="text-gray-700 hover:text-amber-600 transition-colors font-medium">
              Home
            </a>
            <a href="#services" className="text-gray-700 hover:text-amber-600 transition-colors font-medium">
              Services
            </a>
            <a href="#about" className="text-gray-700 hover:text-amber-600 transition-colors font-medium">
              About
            </a>
            <a href="#contact" className="text-gray-700 hover:text-amber-600 transition-colors font-medium">
              Contact
            </a>
            <a 
              href="#contact" 
              className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-2.5 rounded-tr-lg rounded-bl-lg rounded-tl-none rounded-br-none font-semibold transition-colors shadow-md hover:shadow-lg"
            >
              Get Quote
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-amber-600 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <FiX className="h-6 w-6" />
              ) : (
                <FiMenu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 pt-2 pb-4 space-y-2">
            <a 
              href="#home" 
              className="block px-3 py-2 text-gray-700 hover:text-amber-600 hover:bg-amber-50 rounded-md font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a 
              href="#services" 
              className="block px-3 py-2 text-gray-700 hover:text-amber-600 hover:bg-amber-50 rounded-md font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </a>
            <a 
              href="#about" 
              className="block px-3 py-2 text-gray-700 hover:text-amber-600 hover:bg-amber-50 rounded-md font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#contact" 
              className="block px-3 py-2 text-gray-700 hover:text-amber-600 hover:bg-amber-50 rounded-md font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
            <a 
              href="#contact" 
              className="block bg-amber-500 hover:bg-amber-600 text-white px-6 py-2.5 rounded-tr-lg rounded-bl-lg rounded-tl-none rounded-br-none font-semibold text-center transition-colors mt-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Get Quote
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
