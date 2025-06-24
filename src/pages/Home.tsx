import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import type { Product } from '../types';
import { getFeaturedProducts, mockCategories } from '../lib/mockData';
import ProductCard from '../components/ProductCard';
import Card from '../components/Card';
import Button from '../components/Button';

const Home: React.FC = () => {
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setFeaturedProducts(getFeaturedProducts());
      setIsLoading(false);
    }, 500);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-purple-700 text-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1920&h=1080&fit=crop&crop=center"
            alt="Shopping background"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/80 to-purple-700/80"></div>
        </div>

        <div className="container py-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-300">EcoShop</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                Discover amazing eco-friendly products at unbeatable prices. Shop sustainably with confidence and enjoy fast, carbon-neutral shipping.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link to="/products">
                  <Button size="large" className="bg-white text-blue-600 hover:bg-gray-100 shadow-lg">
                    🛍️ Shop Now
                  </Button>
                </Link>
                <Link to="/categories">
                  <Button variant="outline" size="large" className="border-white text-white hover:bg-white hover:text-blue-600">
                    📂 Browse Categories
                  </Button>
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/20">
                <div className="text-center">
                  <div className="text-2xl font-bold">10K+</div>
                  <div className="text-sm text-blue-200">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">500+</div>
                  <div className="text-sm text-blue-200">Eco Products</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">99%</div>
                  <div className="text-sm text-blue-200">Satisfaction</div>
                </div>
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=600&fit=crop&crop=center"
                  alt="Eco-friendly shopping"
                  className="rounded-2xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300"
                />
                <div className="absolute -bottom-4 -left-4 bg-green-400 text-green-900 px-4 py-2 rounded-lg font-semibold shadow-lg">
                  🌱 100% Sustainable
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Shop by Category</h2>
            <p className="text-lg text-gray-600">Find exactly what you're looking for</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {mockCategories.map((category) => (
              <Link
                key={category.id}
                to={`/categories/${category.slug}`}
                className="group"
              >
                <Card padding="none" hover className="text-center h-full overflow-hidden">
                  <div className="relative">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-2 left-2 right-2">
                      <h3 className="font-semibold text-white text-sm group-hover:text-blue-200 transition-colors">
                        {category.name}
                      </h3>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-xs text-gray-600 group-hover:text-blue-600 transition-colors">
                      {category.description}
                    </p>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16">
        <div className="container">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Products</h2>
              <p className="text-lg text-gray-600">Hand-picked favorites just for you</p>
            </div>
            <Link to="/products">
              <Button variant="outline">View All Products</Button>
            </Link>
          </div>

          {isLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[...Array(4)].map((_, index) => (
                <div key={index} className="animate-pulse">
                  <div className="bg-gray-300 h-48 rounded-t-lg"></div>
                  <div className="bg-white p-4 rounded-b-lg">
                    <div className="h-4 bg-gray-300 rounded mb-2"></div>
                    <div className="h-4 bg-gray-300 rounded w-2/3 mb-2"></div>
                    <div className="h-6 bg-gray-300 rounded w-1/3"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose EcoShop?</h2>
            <p className="text-lg text-gray-600">We're committed to providing the best shopping experience</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card padding="large" className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Free Shipping</h3>
              <p className="text-gray-600">Free shipping on orders over $50. Fast and reliable delivery to your doorstep.</p>
            </Card>

            <Card padding="large" className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Quality Guarantee</h3>
              <p className="text-gray-600">All products are carefully selected and tested to ensure the highest quality standards.</p>
            </Card>

            <Card padding="large" className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-purple-100 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Secure Payment</h3>
              <p className="text-gray-600">Your payment information is always secure with our encrypted checkout process.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-blue-600">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-xl mb-8 text-blue-100">
              Subscribe to our newsletter and be the first to know about new products and exclusive offers.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                required
              />
              <Button type="submit" className="bg-white text-blue-600 hover:bg-gray-100">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
