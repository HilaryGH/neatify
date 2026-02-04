import { FiTag } from 'react-icons/fi';
import { FaTelegram, FaFacebook, FaInstagram, FaLinkedin, FaTiktok } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const PromotionBanner = () => {

  const socialLinks = [
    { icon: FaTelegram, href: '#', label: 'Telegram' },
    { icon: FaFacebook, href: '#', label: 'Facebook' },
    { icon: FaInstagram, href: '#', label: 'Instagram' },
    { icon: FaLinkedin, href: '#', label: 'LinkedIn' },
    { icon: FaTiktok, href: '#', label: 'TikTok' },
    { icon: FaXTwitter, href: '#', label: 'Twitter/X' },
  ];

  return (
    <div className="bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 text-white relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-1.5 md:py-2">
          {/* Promotion Text - Left Side */}
          <div className="flex items-center gap-2 flex-1 min-w-0">
            <FiTag className="h-3 w-3 md:h-4 md:w-4 flex-shrink-0 animate-pulse" />
            <p className="text-xs md:text-sm font-medium truncate">
              <span className="font-bold">Special Offer:</span>{' '}
              Get <span className="font-bold">20% OFF</span> on your first post-construction cleaning! 
              <a 
                href="#contact" 
                className="underline font-semibold ml-1 hover:text-amber-100 transition-colors"
              >
                Book Now
              </a>
            </p>
          </div>

          {/* Social Media Icons - Right Side */}
          <div className="flex items-center gap-2 md:gap-3 ml-4 flex-shrink-0">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/90 hover:text-white transition-colors p-1 hover:scale-110 transform duration-200"
                  aria-label={social.label}
                >
                  <Icon className="h-3.5 w-3.5 md:h-4 md:w-4" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromotionBanner;
