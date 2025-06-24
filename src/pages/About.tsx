import React from 'react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-600 to-blue-600 text-white py-20">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=1920&h=1080&fit=crop&crop=center"
            alt="Sustainable shopping"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green-600/80 to-blue-600/80"></div>
        </div>

        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">About EcoShop</h1>
            <p className="text-xl md:text-2xl text-green-100">
              Your trusted partner for sustainable, eco-friendly shopping
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                EcoShop is your one-stop destination for quality, sustainable products at great prices.
                We're committed to providing an excellent shopping experience while protecting our planet
                for future generations.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Every product we sell is carefully selected based on environmental impact, quality,
                and value. We believe that sustainable shopping shouldn't mean compromising on quality
                or breaking the bank.
              </p>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium text-gray-700">Carbon Neutral Shipping</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-sm font-medium text-gray-700">100% Recyclable Packaging</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=600&h=400&fit=crop&crop=center"
                alt="Sustainable products"
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">50K+</div>
                  <div className="text-sm text-gray-600">Trees Saved</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-lg text-gray-600">What drives us every day</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="relative mb-6">
                <img
                  src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=300&h=200&fit=crop&crop=center"
                  alt="Sustainability"
                  className="w-full h-48 object-cover rounded-xl"
                />
                <div className="absolute inset-0 bg-green-600/20 rounded-xl"></div>
                <div className="absolute bottom-4 left-4 bg-white p-2 rounded-lg">
                  <span className="text-2xl">🌱</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Sustainability</h3>
              <p className="text-gray-600">
                We prioritize products that are environmentally friendly and support sustainable practices.
              </p>
            </div>

            <div className="text-center">
              <div className="relative mb-6">
                <img
                  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=300&h=200&fit=crop&crop=center"
                  alt="Quality"
                  className="w-full h-48 object-cover rounded-xl"
                />
                <div className="absolute inset-0 bg-blue-600/20 rounded-xl"></div>
                <div className="absolute bottom-4 left-4 bg-white p-2 rounded-lg">
                  <span className="text-2xl">⭐</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Quality</h3>
              <p className="text-gray-600">
                Every product is carefully tested and selected to ensure it meets our high standards.
              </p>
            </div>

            <div className="text-center">
              <div className="relative mb-6">
                <img
                  src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=300&h=200&fit=crop&crop=center"
                  alt="Customer Focus"
                  className="w-full h-48 object-cover rounded-xl"
                />
                <div className="absolute inset-0 bg-purple-600/20 rounded-xl"></div>
                <div className="absolute bottom-4 left-4 bg-white p-2 rounded-lg">
                  <span className="text-2xl">❤️</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Customer Focus</h3>
              <p className="text-gray-600">
                Your satisfaction is our priority. We're here to provide exceptional service and support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-lg text-gray-600">The passionate people behind EcoShop</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face"
                alt="CEO"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-gray-900">John Smith</h3>
              <p className="text-blue-600 mb-2">CEO & Founder</p>
              <p className="text-gray-600 text-sm">
                Passionate about sustainable business practices and environmental conservation.
              </p>
            </div>

            <div className="text-center">
              <img
                src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop&crop=face"
                alt="CTO"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-gray-900">Sarah Johnson</h3>
              <p className="text-blue-600 mb-2">CTO</p>
              <p className="text-gray-600 text-sm">
                Leading our technology initiatives to create the best shopping experience.
              </p>
            </div>

            <div className="text-center">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face"
                alt="Head of Sustainability"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-gray-900">Mike Chen</h3>
              <p className="text-blue-600 mb-2">Head of Sustainability</p>
              <p className="text-gray-600 text-sm">
                Ensuring every product meets our environmental and ethical standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">10,000+</div>
              <div className="text-green-200">Happy Customers</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">500+</div>
              <div className="text-green-200">Eco Products</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">50K+</div>
              <div className="text-green-200">Trees Saved</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">99%</div>
              <div className="text-green-200">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
