import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <div className="container py-8 text-center">
      <div className="max-w-md mx-auto">
        <div className="mb-8">
          <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Page Not Found</h2>
          <p className="text-gray-600 mb-8">
            The page you're looking for doesn't exist. It might have been moved, 
            deleted, or you entered the wrong URL.
          </p>
        </div>
        
        <div className="space-y-4">
          <Link
            to="/"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
          >
            Go Home
          </Link>
          
          <div className="text-sm text-gray-500">
            <p>Or try one of these popular pages:</p>
            <div className="mt-4 space-x-4">
              <Link to="/products" className="text-blue-600 hover:text-blue-800">
                Products
              </Link>
              <Link to="/categories" className="text-blue-600 hover:text-blue-800">
                Categories
              </Link>
              <Link to="/about" className="text-blue-600 hover:text-blue-800">
                About
              </Link>
              <Link to="/contact" className="text-blue-600 hover:text-blue-800">
                Contact
              </Link>
            </div>
          </div>
        </div>
        
        <div className="mt-12">
          <div className="text-8xl mb-4">🛍️</div>
          <p className="text-gray-500">
            Continue shopping with EcoShop
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
