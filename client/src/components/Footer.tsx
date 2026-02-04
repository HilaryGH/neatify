import { FiMail, FiPhone, FiMapPin, FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <img 
              src="/Neatfy logo.png" 
              alt="Neatify Logo" 
              className="h-10 w-auto mb-4"
            />
            <p className="text-gray-400 leading-relaxed">
              Professional cleaning services specializing in post-construction cleanup and general cleaning solutions. Your trusted partner for a spotless space.
            </p>
            <div className="flex space-x-4 pt-2">
              <a 
                href="#" 
                className="text-gray-400 hover:text-amber-500 transition-colors"
                aria-label="Facebook"
              >
                <FiFacebook className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-amber-500 transition-colors"
                aria-label="Twitter"
              >
                <FiTwitter className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-amber-500 transition-colors"
                aria-label="Instagram"
              >
                <FiInstagram className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-amber-500 transition-colors"
                aria-label="LinkedIn"
              >
                <FiLinkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-amber-500 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-amber-500 transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-amber-500 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-amber-500 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-gray-400 hover:text-amber-500 transition-colors">
                  Post-Construction Cleaning
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-amber-500 transition-colors">
                  General Cleaning
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-amber-500 transition-colors">
                  Deep Cleaning
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-amber-500 transition-colors">
                  Commercial Cleaning
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <FiPhone className="h-5 w-5 text-amber-500 mt-0.5 flex-shrink-0" />
                <a href="tel:+251937383931" className="text-gray-400 hover:text-amber-500 transition-colors">
                  +251 937 383 931
                </a>
              </li>
              <li className="flex items-start gap-3">
                <FiMail className="h-5 w-5 text-amber-500 mt-0.5 flex-shrink-0" />
                <a href="mailto:sarahsarina0@gmail.com" className="text-gray-400 hover:text-amber-500 transition-colors">
                  sarahsarina0@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <FiMapPin className="h-5 w-5 text-amber-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400">
                  123 Cleaning Street<br />
                  City, State 12345
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Neatify. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
