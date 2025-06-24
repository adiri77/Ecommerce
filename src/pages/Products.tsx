import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import type { Product, SearchFilters } from '../types';
import { mockCategories } from '../lib/mockData';
import MockAPI from '../lib/api';
import ProductCard from '../components/ProductCard';
import Button from '../components/Button';
import Card from '../components/Card';

const Products: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filters, setFilters] = useState<SearchFilters>({
    query: searchParams.get('q') || '',
    category: searchParams.get('category') || '',
    sortBy: (searchParams.get('sortBy') as any) || 'newest',
    sortOrder: (searchParams.get('sortOrder') as any) || 'desc',
  });
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    loadProducts();
  }, [filters]);

  const loadProducts = async () => {
    setIsLoading(true);
    try {
      const response = await MockAPI.searchProducts(filters);
      setProducts(response.data.products);
    } catch (error) {
      console.error('Failed to load products:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleFilterChange = (newFilters: Partial<SearchFilters>) => {
    const updatedFilters = { ...filters, ...newFilters };
    setFilters(updatedFilters);
    
    // Update URL params
    const params = new URLSearchParams();
    Object.entries(updatedFilters).forEach(([key, value]) => {
      if (value) {
        params.set(key, value.toString());
      }
    });
    setSearchParams(params);
  };

  const clearFilters = () => {
    const clearedFilters: SearchFilters = {
      sortBy: 'newest',
      sortOrder: 'desc',
    };
    setFilters(clearedFilters);
    setSearchParams({});
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            {filters.query ? `Search results for "${filters.query}"` : 'All Products'}
          </h1>
          <p className="text-gray-600">
            {isLoading ? 'Loading...' : `${products.length} products found`}
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-64 flex-shrink-0">
            <Card padding="medium" className="sticky top-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-gray-900">Filters</h3>
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="lg:hidden text-blue-600"
                >
                  {showFilters ? 'Hide' : 'Show'}
                </button>
              </div>

              <div className={`space-y-6 ${showFilters ? 'block' : 'hidden lg:block'}`}>
                {/* Category Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Category
                  </label>
                  <select
                    value={filters.category || ''}
                    onChange={(e) => handleFilterChange({ category: e.target.value || undefined })}
                    className="w-full input"
                  >
                    <option value="">All Categories</option>
                    {mockCategories.map((category) => (
                      <option key={category.id} value={category.name}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Sort By */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Sort By
                  </label>
                  <select
                    value={filters.sortBy || 'newest'}
                    onChange={(e) => handleFilterChange({ sortBy: e.target.value as any })}
                    className="w-full input"
                  >
                    <option value="newest">Newest</option>
                    <option value="name">Name</option>
                    <option value="price">Price</option>
                    <option value="rating">Rating</option>
                  </select>
                </div>

                {/* Sort Order */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Order
                  </label>
                  <select
                    value={filters.sortOrder || 'desc'}
                    onChange={(e) => handleFilterChange({ sortOrder: e.target.value as any })}
                    className="w-full input"
                  >
                    <option value="asc">Ascending</option>
                    <option value="desc">Descending</option>
                  </select>
                </div>

                {/* Price Range */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Price Range
                  </label>
                  <div className="flex items-center space-x-2">
                    <input
                      type="number"
                      placeholder="Min"
                      className="w-full input"
                      onChange={(e) => {
                        const min = parseFloat(e.target.value) || 0;
                        const max = filters.priceRange?.[1] || 1000;
                        handleFilterChange({ priceRange: [min, max] });
                      }}
                    />
                    <span className="text-gray-500">-</span>
                    <input
                      type="number"
                      placeholder="Max"
                      className="w-full input"
                      onChange={(e) => {
                        const min = filters.priceRange?.[0] || 0;
                        const max = parseFloat(e.target.value) || 1000;
                        handleFilterChange({ priceRange: [min, max] });
                      }}
                    />
                  </div>
                </div>

                {/* In Stock Filter */}
                <div>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={filters.inStock || false}
                      onChange={(e) => handleFilterChange({ inStock: e.target.checked || undefined })}
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="ml-2 text-sm text-gray-700">In Stock Only</span>
                  </label>
                </div>

                {/* Clear Filters */}
                <Button
                  onClick={clearFilters}
                  variant="outline"
                  fullWidth
                  size="small"
                >
                  Clear Filters
                </Button>
              </div>
            </Card>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            {isLoading ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[...Array(9)].map((_, index) => (
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
            ) : products.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <Card padding="large" className="text-center">
                <div className="py-12">
                  <svg className="mx-auto h-12 w-12 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.467-.881-6.08-2.33" />
                  </svg>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No products found</h3>
                  <p className="text-gray-500 mb-4">
                    Try adjusting your search criteria or browse our categories.
                  </p>
                  <Button onClick={clearFilters} variant="outline">
                    Clear Filters
                  </Button>
                </div>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
