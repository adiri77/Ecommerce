import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDebounce } from '../hooks/useDebounce';
import { searchProducts } from '../lib/mockData';
import type { Product } from '../types';
import { formatCurrency, getImageUrl } from '../lib/utils';

const SearchBar: React.FC = () => {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [results, setResults] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const debouncedQuery = useDebounce(query, 300);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (debouncedQuery.trim()) {
      setIsLoading(true);
      // Simulate API call delay
      setTimeout(() => {
        const searchResults = searchProducts(debouncedQuery).slice(0, 5);
        setResults(searchResults);
        setIsLoading(false);
        setIsOpen(true);
      }, 200);
    } else {
      setResults([]);
      setIsOpen(false);
      setIsLoading(false);
    }
  }, [debouncedQuery]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query.trim())}`);
      setIsOpen(false);
      inputRef.current?.blur();
    }
  };

  const handleProductClick = (productId: string) => {
    navigate(`/products/${productId}`);
    setIsOpen(false);
    setQuery('');
  };

  const handleViewAllResults = () => {
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query.trim())}`);
      setIsOpen(false);
    }
  };

  return (
    <div ref={searchRef} className="relative">
      <form onSubmit={handleSubmit} className="relative">
        <div className="relative">
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search products..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          {isLoading && (
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
              <div className="spinner"></div>
            </div>
          )}
        </div>
      </form>

      {/* Search Results Dropdown */}
      {isOpen && (query.trim() || results.length > 0) && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-96 overflow-y-auto">
          {isLoading ? (
            <div className="p-4 text-center text-gray-500">
              <div className="spinner mx-auto mb-2"></div>
              Searching...
            </div>
          ) : results.length > 0 ? (
            <>
              {results.map((product) => (
                <button
                  key={product.id}
                  onClick={() => handleProductClick(product.id.toString())}
                  className="w-full p-3 hover:bg-gray-50 flex items-center space-x-3 text-left border-b border-gray-100 last:border-b-0"
                >
                  <img
                    src={getImageUrl(product.images[0])}
                    alt={product.name}
                    className="w-12 h-12 object-cover rounded"
                    onError={(e) => {
                      e.currentTarget.src = '/images/placeholder.jpg';
                    }}
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">
                      {product.name}
                    </p>
                    <p className="text-sm text-gray-500">{product.brand}</p>
                    <p className="text-sm font-medium text-blue-600">
                      {formatCurrency(product.price)}
                    </p>
                  </div>
                </button>
              ))}
              
              {/* View All Results */}
              <button
                onClick={handleViewAllResults}
                className="w-full p-3 text-center text-blue-600 hover:bg-blue-50 font-medium border-t border-gray-200"
              >
                View all results for "{query}"
              </button>
            </>
          ) : query.trim() ? (
            <div className="p-4 text-center text-gray-500">
              <svg className="mx-auto h-12 w-12 text-gray-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.467-.881-6.08-2.33" />
              </svg>
              <p>No products found for "{query}"</p>
              <p className="text-sm mt-1">Try searching with different keywords</p>
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
