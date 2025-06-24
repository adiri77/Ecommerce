import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/Card';

interface Category {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  productCount: number;
  slug: string;
}

const Categories: React.FC = () => {
  // Mock categories data - replace with actual data from API
  const categories: Category[] = [
    {
      id: '1',
      name: 'Electronics',
      description: 'Latest gadgets and electronic devices',
      imageUrl: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=400&h=300&fit=crop&crop=center',
      productCount: 156,
      slug: 'electronics'
    },
    {
      id: '2',
      name: 'Clothing',
      description: 'Fashion and apparel for all occasions',
      imageUrl: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop&crop=center',
      productCount: 243,
      slug: 'clothing'
    },
    {
      id: '3',
      name: 'Home & Garden',
      description: 'Everything for your home and garden',
      imageUrl: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop&crop=center',
      productCount: 189,
      slug: 'home-garden'
    },
    {
      id: '4',
      name: 'Sports & Outdoors',
      description: 'Gear for active lifestyle and outdoor adventures',
      imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop&crop=center',
      productCount: 127,
      slug: 'sports-outdoors'
    },
    {
      id: '5',
      name: 'Books & Media',
      description: 'Books, movies, music, and digital content',
      imageUrl: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop&crop=center',
      productCount: 98,
      slug: 'books-media'
    },
    {
      id: '6',
      name: 'Health & Beauty',
      description: 'Personal care and wellness products',
      imageUrl: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=300&fit=crop&crop=center',
      productCount: 167,
      slug: 'health-beauty'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-purple-600 to-blue-600 text-white py-20">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1920&h=1080&fit=crop&crop=center"
            alt="Shopping categories"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/80 to-blue-600/80"></div>
        </div>

        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Shop by Category</h1>
            <p className="text-xl md:text-2xl text-purple-100">
              Discover our wide range of product categories. From electronics to fashion,
              we have everything you need in one convenient place.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container">

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => (
          <Link
            key={category.id}
            to={`/categories/${category.slug}`}
            className="group"
          >
            <Card hover className="h-full transition-transform duration-200 group-hover:scale-105">
              <div className="relative mb-4 overflow-hidden rounded-lg">
                <img
                  src={category.imageUrl}
                  alt={category.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-white/90 text-gray-900 px-3 py-1 rounded-full text-sm font-medium">
                    {category.productCount} products
                  </span>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600">
                  {category.name}
                </h3>
                <p className="text-gray-600 mb-4">
                  {category.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-blue-600 font-medium group-hover:text-blue-700">
                    Shop now →
                  </span>
                </div>
              </div>
            </Card>
          </Link>
        ))}
      </div>

        </div>
      </section>

      {/* Featured Categories Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Featured Collections</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <Link to="/categories/new-arrivals" className="group">
              <Card hover className="relative overflow-hidden">
                <div className="absolute inset-0">
                  <img
                    src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop&crop=center"
                    alt="New arrivals"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/80 to-purple-600/80"></div>
                </div>
                <div className="relative p-8 text-white">
                  <h3 className="text-3xl font-bold mb-3">New Arrivals</h3>
                  <p className="mb-6 text-blue-100">Check out the latest products added to our store</p>
                  <span className="inline-flex items-center bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold group-hover:bg-blue-50 transition-colors">
                    Explore new items →
                  </span>
                </div>
              </Card>
            </Link>

            <Link to="/categories/sale" className="group">
              <Card hover className="relative overflow-hidden">
                <div className="absolute inset-0">
                  <img
                    src="https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?w=600&h=400&fit=crop&crop=center"
                    alt="Sale items"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-red-600/80 to-pink-600/80"></div>
                </div>
                <div className="relative p-8 text-white">
                  <h3 className="text-3xl font-bold mb-3">Sale Items</h3>
                  <p className="mb-6 text-red-100">Don't miss out on our amazing deals and discounts</p>
                  <span className="inline-flex items-center bg-white text-red-600 px-4 py-2 rounded-lg font-semibold group-hover:bg-red-50 transition-colors">
                    Shop sale →
                  </span>
                </div>
              </Card>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Categories;
