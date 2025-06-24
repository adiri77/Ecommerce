import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import type { Product } from '../types/index';
import MockAPI from '../lib/api';

const Search: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const query = searchParams.get('q') || '';

  useEffect(() => {
    if (query) {
      handleSearch(query);
    }
  }, [query]);

  const handleSearch = async (searchQuery: string) => {
    setLoading(true);
    setError(null);

    try {
      const response = await MockAPI.searchProducts({ query: searchQuery });
      if (response.success) {
        setProducts(response.data.products);
      } else {
        setError('Failed to search products. Please try again.');
      }
    } catch (err) {
      setError('Failed to search products. Please try again.');
      console.error('Search error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container py-8">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Search Results</h1>
        {query && (
          <p className="mt-2 text-gray-600">
            Showing results for: <span className="font-medium">"{query}"</span>
          </p>
        )}
      </div>

      {loading && (
        <div className="flex justify-center items-center py-12">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
          <span className="ml-2 text-gray-600">Searching...</span>
        </div>
      )}

      {error && (
        <div className="bg-red-50 border border-red-200 rounded-md p-4 mb-6">
          <p className="text-red-800">{error}</p>
        </div>
      )}

      {!loading && !error && (
        <>
          {products.length > 0 ? (
            <>
              <p className="text-gray-600 mb-6">
                Found {products.length} product{products.length !== 1 ? 's' : ''}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </>
          ) : query ? (
            <div className="text-center py-12">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">No results found</h2>
              <p className="text-gray-600 mb-4">
                We couldn't find any products matching "{query}".
              </p>
              <div className="text-sm text-gray-500">
                <p>Try:</p>
                <ul className="mt-2 space-y-1">
                  <li>• Checking your spelling</li>
                  <li>• Using different keywords</li>
                  <li>• Using more general terms</li>
                </ul>
              </div>
            </div>
          ) : (
            <div className="text-center py-12">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Start your search</h2>
              <p className="text-gray-600">
                Enter a search term to find products.
              </p>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Search;
