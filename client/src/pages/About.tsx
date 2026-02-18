import { FiAward, FiUsers, FiTarget, FiHeart, FiCheckCircle } from 'react-icons/fi';

const About = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-100 via-white to-blue-200 pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
              About Neatify
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto">
              Transforming spaces with passion, precision, and professionalism
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p className="text-lg">
                  Neatify was born from a simple belief: every space deserves to shine. Founded in Addis Ababa, Ethiopia, we've grown from a small local cleaning service to a trusted name in professional cleaning solutions.
                </p>
                <p>
                  Our journey began with a commitment to excellence and a passion for creating pristine environments. Whether it's a post-construction cleanup or regular maintenance, we approach every project with the same dedication and attention to detail.
                </p>
                <p>
                  Today, we're proud to serve hundreds of satisfied clients across the region, bringing our expertise and care to homes and businesses alike.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-50 p-8 rounded-2xl shadow-xl">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
                  <div className="text-gray-600">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">1000+</div>
                  <div className="text-gray-600">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">5+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
                  <div className="text-gray-600">Satisfaction Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Mission & Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-br from-blue-200 to-blue-300 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <FiTarget className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To deliver exceptional cleaning services that exceed expectations, creating pristine environments that enhance the quality of life for our clients.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-br from-blue-200 to-blue-300 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <FiHeart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Values</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <FiCheckCircle className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span>Integrity in every interaction</span>
                </li>
                <li className="flex items-start gap-2">
                  <FiCheckCircle className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span>Excellence in execution</span>
                </li>
                <li className="flex items-start gap-2">
                  <FiCheckCircle className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span>Respect for clients and spaces</span>
                </li>
                <li className="flex items-start gap-2">
                  <FiCheckCircle className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span>Innovation in our approach</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-br from-blue-200 to-blue-300 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <FiAward className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Promise</h3>
              <p className="text-gray-600 leading-relaxed">
                We guarantee 100% satisfaction with every service. If you're not completely happy, we'll return to make it right—no questions asked.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Neatify?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-br from-blue-200 to-blue-300 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <FiUsers className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Expert Team</h3>
              <p className="text-gray-600">
                Trained professionals with years of experience
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-br from-blue-200 to-blue-300 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <FiAward className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Quality Assured</h3>
              <p className="text-gray-600">
                Premium products and proven techniques
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-br from-blue-200 to-blue-300 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <FiCheckCircle className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Reliable Service</h3>
              <p className="text-gray-600">
                On-time, every time, guaranteed
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-br from-blue-200 to-blue-300 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <FiHeart className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Customer First</h3>
              <p className="text-gray-600">
                Your satisfaction is our priority
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-200 via-blue-300 to-blue-400">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Experience the Neatify Difference?
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Let's discuss how we can help transform your space
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-tr-lg rounded-bl-lg rounded-tl-none rounded-br-none font-semibold text-lg transition-all shadow-lg hover:shadow-xl"
            >
              Get in Touch
            </a>
            <a 
              href="tel:+251937383931" 
              className="border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-8 py-4 rounded-tr-lg rounded-bl-lg rounded-tl-none rounded-br-none font-semibold text-lg transition-all"
            >
              Call Us Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
