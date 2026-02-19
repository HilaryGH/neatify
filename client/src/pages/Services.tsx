import { FiHome, FiDroplet, FiShield, FiClock, FiCheckCircle, FiStar, FiTrendingUp } from 'react-icons/fi';

const Services = () => {
  const services = [
    {
      icon: FiHome,
      title: 'Post-Construction Cleaning',
      description: 'Comprehensive cleaning service designed to transform construction sites into pristine, move-in-ready spaces.',
      color: 'from-blue-600 to-blue-600',
      iconBg: 'bg-gradient-to-br from-blue-600 to-blue-600',
      features: [
        'Debris and dust removal',
        'Window and glass cleaning',
        'Floor scrubbing and polishing',
        'Cabinet and fixture cleaning',
        'Wall and surface cleaning',
        'Final inspection and touch-ups',
        'HVAC system cleaning',
        'Paint and adhesive removal'
      ],
      highlight: 'Perfect for new builds and renovations'
    },
    {
      icon: FiDroplet,
      title: 'General Cleaning',
      description: 'Regular maintenance cleaning to keep your home or office spotless with flexible scheduling options.',
      color: 'from-blue-600 to-blue-600',
      iconBg: 'bg-gradient-to-br from-blue-600 to-blue-600',
      features: [
        'Deep cleaning services',
        'Regular maintenance cleaning',
        'Kitchen and bathroom sanitization',
        'Vacuuming and mopping',
        'Dusting and surface cleaning',
        'Trash removal',
        'Appliance cleaning',
        'Window cleaning'
      ],
      highlight: 'Weekly, bi-weekly, or monthly options'
    },
    {
      icon: FiShield,
      title: 'Deep Cleaning',
      description: 'Intensive cleaning service that reaches every corner, perfect for spring cleaning or special occasions.',
      color: 'from-blue-600 to-blue-600',
      iconBg: 'bg-gradient-to-br from-blue-600 to-blue-600',
      features: [
        'Baseboard and corner cleaning',
        'Inside cabinet and drawer cleaning',
        'Light fixture cleaning',
        'Vent and fan cleaning',
        'Behind and under furniture',
        'Grout and tile deep cleaning',
        'Upholstery cleaning',
        'Complete sanitization'
      ],
      highlight: 'Recommended quarterly or seasonally'
    },
    {
      icon: FiTrendingUp,
      title: 'Commercial Cleaning',
      description: 'Professional cleaning solutions for offices, retail spaces, and commercial properties.',
      color: 'from-blue-600 to-blue-600',
      iconBg: 'bg-gradient-to-br from-blue-600 to-blue-600',
      features: [
        'Office space cleaning',
        'Restroom maintenance',
        'Floor care and maintenance',
        'Window and glass cleaning',
        'Carpet and upholstery care',
        'Kitchen and break room cleaning',
        'Trash and recycling management',
        'Customized cleaning schedules'
      ],
      highlight: 'Tailored to your business needs'
    }
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-white to-blue-600 pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto">
              Comprehensive cleaning solutions tailored to your needs
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group"
                >
                  <div className="flex items-start gap-6 mb-6">
                    <div className={`${service.iconBg} p-4 rounded-xl shadow-lg group-hover:scale-110 transition-transform`}>
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{service.description}</p>
                    </div>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg mb-4 border-l-4 border-blue-500">
                    <p className="text-sm font-semibold text-blue-600">{service.highlight}</p>
                  </div>

                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <FiCheckCircle className={`h-5 w-5 ${service.iconBg} text-white rounded-full mt-0.5 flex-shrink-0`} />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How We Work
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our streamlined process ensures exceptional results every time
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-br from-blue-600 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Consultation</h3>
              <p className="text-gray-600">
                We discuss your needs and assess the space
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-br from-blue-600 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Quote</h3>
              <p className="text-gray-600">
                Receive a detailed, transparent quote
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-br from-blue-600 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Service</h3>
              <p className="text-gray-600">
                Our expert team delivers exceptional cleaning
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-br from-blue-600 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Inspection</h3>
              <p className="text-gray-600">
                Final walkthrough to ensure perfection
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Our Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-600 via-blue-600 to-blue-600 p-8 rounded-2xl text-gray-900 shadow-xl">
              <FiStar className="h-10 w-10 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Premium Quality</h3>
              <p className="text-gray-700">
                We use only the finest cleaning products and equipment to ensure the best results for your space.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-600 via-blue-600 to-blue-600 p-8 rounded-2xl text-gray-900 shadow-xl">
              <FiClock className="h-10 w-10 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Flexible Scheduling</h3>
              <p className="text-gray-700">
                We work around your schedule. Available weekdays, weekends, and evenings to fit your needs.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-600 via-blue-600 to-blue-600 p-8 rounded-2xl text-gray-900 shadow-xl">
              <FiShield className="h-10 w-10 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Insured & Bonded</h3>
              <p className="text-gray-700">
                Fully licensed, insured, and bonded. Your property and peace of mind are protected.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-blue-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Get a free quote today and experience the Neatify difference
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-tr-lg rounded-bl-lg rounded-tl-none rounded-br-none font-semibold text-lg transition-all shadow-lg hover:shadow-xl"
            >
              Request a Quote
            </a>
            <a 
              href="tel:+251937383931" 
              className="border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-8 py-4 rounded-tr-lg rounded-bl-lg rounded-tl-none rounded-br-none font-semibold text-lg transition-all"
            >
              Call: +251 937 383 931
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
