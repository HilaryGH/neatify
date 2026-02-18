import { Link } from 'react-router-dom';
import { FiCheckCircle, FiShield, FiClock, FiAward, FiHome, FiDroplet } from 'react-icons/fi';
import CommunicationWidget from './CommunicationWidget';

const Home = () => {
  return (
    <div className="w-full">
      <CommunicationWidget />
      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-br from-amber-50 via-white to-amber-50 pt-8 md:pt-12 pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div className="space-y-6">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Professional Post-Construction & General Cleaning Services
              </h1>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link 
                  to="/contact" 
                  className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-tr-lg rounded-bl-lg rounded-tl-none rounded-br-none font-semibold text-lg transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-center"
                >
                  Get Free Quote
                </Link>
                <Link 
                  to="/services" 
                  className="border-2 border-amber-500 text-amber-600 hover:bg-amber-50 px-8 py-4 rounded-tr-lg rounded-bl-lg rounded-tl-none rounded-br-none font-semibold text-lg transition-all text-center"
                >
                  Our Services
                </Link>
              </div>
              <div className="flex items-center gap-8 pt-6">
                <div>
                  <div className="text-3xl font-bold text-amber-600">500+</div>
                  <div className="text-sm text-gray-600">Happy Clients</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-amber-600">100%</div>
                  <div className="text-sm text-gray-600">Satisfaction</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-amber-600">24/7</div>
                  <div className="text-sm text-gray-600">Support</div>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="flex justify-center items-center">
              <img 
                src="/hero.svg" 
                alt="Professional Cleaning Service" 
                className="w-full h-auto max-w-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive cleaning solutions tailored to your needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Post-Construction Cleaning */}
            <div className="bg-gradient-to-br from-amber-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-amber-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-amber-500 p-4 rounded-xl">
                  <FiHome className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Post-Construction Cleaning</h3>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our specialty service designed to transform construction sites into pristine, move-in-ready spaces. We handle everything from debris removal to final touch-ups.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <FiCheckCircle className="h-5 w-5 text-amber-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Debris and dust removal</span>
                </li>
                <li className="flex items-start gap-3">
                  <FiCheckCircle className="h-5 w-5 text-amber-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Window and glass cleaning</span>
                </li>
                <li className="flex items-start gap-3">
                  <FiCheckCircle className="h-5 w-5 text-amber-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Floor scrubbing and polishing</span>
                </li>
                <li className="flex items-start gap-3">
                  <FiCheckCircle className="h-5 w-5 text-amber-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Cabinet and fixture cleaning</span>
                </li>
                <li className="flex items-start gap-3">
                  <FiCheckCircle className="h-5 w-5 text-amber-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Final inspection and touch-ups</span>
                </li>
              </ul>
            </div>

            {/* General Cleaning */}
            <div className="bg-gradient-to-br from-amber-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-amber-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-amber-500 p-4 rounded-xl">
                  <FiDroplet className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">General Cleaning</h3>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Regular maintenance cleaning to keep your home or office spotless. We offer flexible scheduling to fit your lifestyle.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <FiCheckCircle className="h-5 w-5 text-amber-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Deep cleaning services</span>
                </li>
                <li className="flex items-start gap-3">
                  <FiCheckCircle className="h-5 w-5 text-amber-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Regular maintenance cleaning</span>
                </li>
                <li className="flex items-start gap-3">
                  <FiCheckCircle className="h-5 w-5 text-amber-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Kitchen and bathroom sanitization</span>
                </li>
                <li className="flex items-start gap-3">
                  <FiCheckCircle className="h-5 w-5 text-amber-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Vacuuming and mopping</span>
                </li>
                <li className="flex items-start gap-3">
                  <FiCheckCircle className="h-5 w-5 text-amber-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Dusting and surface cleaning</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Neatify?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're committed to delivering exceptional cleaning services that exceed expectations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiShield className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Insured & Bonded</h3>
              <p className="text-gray-600">
                Fully licensed, insured, and bonded for your peace of mind
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiAward className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Expert Team</h3>
              <p className="text-gray-600">
                Trained professionals with years of experience in the industry
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiClock className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Flexible Scheduling</h3>
              <p className="text-gray-600">
                Available when you need us, including evenings and weekends
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiCheckCircle className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">100% Satisfaction</h3>
              <p className="text-gray-600">
                We guarantee our work and won't stop until you're completely satisfied
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 bg-gradient-to-r from-amber-500 to-amber-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Space?
          </h2>
          <p className="text-xl text-amber-50 mb-8">
            Get a free quote today and experience the Neatify difference
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+251937383931" 
              className="bg-white text-amber-600 hover:bg-gray-100 px-8 py-4 rounded-tr-lg rounded-bl-lg rounded-tl-none rounded-br-none font-semibold text-lg transition-all shadow-lg hover:shadow-xl"
            >
              Call Now: +251 937 383 931
            </a>
            <a 
              href="mailto:neatifycleaningservice@gmail.com" 
              className="border-2 border-white text-white hover:bg-white hover:text-amber-600 px-8 py-4 rounded-tr-lg rounded-bl-lg rounded-tl-none rounded-br-none font-semibold text-lg transition-all"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
