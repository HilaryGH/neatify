import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi';
import { FaTelegram, FaFacebook, FaInstagram, FaLinkedin, FaTiktok } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const socialLinks = [
    { icon: FaTelegram, href: '#', label: 'Telegram' },
    { icon: FaFacebook, href: '#', label: 'Facebook' },
    { icon: FaInstagram, href: '#', label: 'Instagram' },
    { icon: FaLinkedin, href: '#', label: 'LinkedIn' },
    { icon: FaTiktok, href: '#', label: 'TikTok' },
    { icon: FaXTwitter, href: '#', label: 'Twitter/X' },
  ];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // Handle subscription logic here
      console.log('Subscribed:', email);
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <img 
              src="/logo bg.png" 
              alt="Neatify Logo" 
              className="h-24 md:h-32 w-auto mb-2"
            />
            <p className="text-gray-400 leading-relaxed">
              Professional cleaning services specializing in post-construction cleanup and general cleaning solutions. Your trusted partner for a spotless space.
            </p>
            <div className="flex space-x-4 pt-2">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-amber-500 transition-colors p-1 hover:scale-110 transform duration-200"
                    aria-label={social.label}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-amber-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-amber-500 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-amber-500 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-amber-500 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-gray-400 hover:text-amber-500 transition-colors">
                  Post-Construction Cleaning
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-amber-500 transition-colors">
                  General Cleaning
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-amber-500 transition-colors">
                  Deep Cleaning
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-amber-500 transition-colors">
                  Commercial Cleaning
                </Link>
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
                  Addis Ababa, Ethiopia
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Subscription Section */}
        <div className="border-t border-gray-800 pt-8 mt-8 mb-8">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">Subscribe to Our Newsletter</h3>
              <p className="text-gray-400">
                Stay updated with our latest cleaning tips, special offers, and company news
              </p>
            </div>
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                />
              </div>
              <button
                type="submit"
                className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-8 py-3 rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 whitespace-nowrap"
              >
                {subscribed ? (
                  <>
                    <FiMail className="h-5 w-5" />
                    Subscribed!
                  </>
                ) : (
                  <>
                    <FiSend className="h-5 w-5" />
                    Subscribe
                  </>
                )}
              </button>
            </form>
            {subscribed && (
              <p className="text-center text-amber-500 mt-3 text-sm">
                Thank you for subscribing! Check your email for confirmation.
              </p>
            )}
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
