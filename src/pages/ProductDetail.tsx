import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import type { Product } from '../types';
import { getProductById } from '../lib/mockData';
import { useAppContext, cartActions, wishlistActions, recentlyViewedActions } from '../store';
import { formatCurrency, generateStarRating, getImageUrl } from '../lib/utils';
import Button from '../components/Button';
import Card from '../components/Card';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { state, dispatch } = useAppContext();
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (id) {
      // Simulate API call
      setTimeout(() => {
        const foundProduct = getProductById(id);
        if (foundProduct) {
          setProduct(foundProduct);
          dispatch(recentlyViewedActions.add(foundProduct));
        }
        setIsLoading(false);
      }, 500);
    }
  }, [id, dispatch]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="container py-8">
          <div className="animate-pulse">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="bg-gray-300 h-96 rounded-lg"></div>
                <div className="flex space-x-2">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="bg-gray-300 h-20 w-20 rounded"></div>
                  ))}
                </div>
              </div>
              <div className="space-y-4">
                <div className="h-8 bg-gray-300 rounded"></div>
                <div className="h-4 bg-gray-300 rounded w-1/3"></div>
                <div className="h-6 bg-gray-300 rounded w-1/4"></div>
                <div className="h-20 bg-gray-300 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Card padding="large" className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h2>
          <p className="text-gray-600 mb-6">The product you're looking for doesn't exist.</p>
          <Button onClick={() => navigate('/products')}>
            Browse Products
          </Button>
        </Card>
      </div>
    );
  }

  const isInWishlist = state.wishlist.some(item => item.id === product.id);
  const stars = generateStarRating(product.rating);

  const handleAddToCart = () => {
    dispatch(cartActions.addItem({
      id: `${product.id}-${Date.now()}`,
      product,
      quantity,
    }));
  };

  const handleToggleWishlist = () => {
    if (isInWishlist) {
      dispatch(wishlistActions.remove(product.id.toString()));
    } else {
      dispatch(wishlistActions.add(product));
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container py-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 text-sm text-gray-500">
            <li>
              <button onClick={() => navigate('/')} className="hover:text-blue-600">
                Home
              </button>
            </li>
            <li>/</li>
            <li>
              <button onClick={() => navigate('/products')} className="hover:text-blue-600">
                Products
              </button>
            </li>
            <li>/</li>
            <li className="text-gray-900">{product.name}</li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div>
            <div className="mb-4">
              <img
                src={getImageUrl(product.images[selectedImageIndex])}
                alt={product.name}
                className="w-full h-96 object-cover rounded-lg"
                onError={(e) => {
                  e.currentTarget.src = '/images/placeholder.jpg';
                }}
              />
            </div>
            
            {/* Image Thumbnails */}
            {product.images.length > 1 && (
              <div className="flex space-x-2 overflow-x-auto">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImageIndex(index)}
                    className={`flex-shrink-0 w-20 h-20 rounded border-2 overflow-hidden ${
                      selectedImageIndex === index ? 'border-blue-500' : 'border-gray-200'
                    }`}
                  >
                    <img
                      src={getImageUrl(image)}
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src = '/images/placeholder.jpg';
                      }}
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div>
            <div className="mb-4">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
              <p className="text-lg text-gray-600">{product.brand}</p>
            </div>

            {/* Rating */}
            <div className="flex items-center mb-4">
              <div className="flex items-center">
                {stars.map((star, index) => (
                  <svg
                    key={index}
                    className={`w-5 h-5 ${
                      star === 'full' 
                        ? 'text-yellow-400 fill-current' 
                        : star === 'half'
                        ? 'text-yellow-400 fill-current'
                        : 'text-gray-300'
                    }`}
                    fill={star === 'empty' ? 'none' : 'currentColor'}
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                    />
                  </svg>
                ))}
              </div>
              <span className="ml-2 text-sm text-gray-600">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            {/* Price */}
            <div className="mb-6">
              <div className="flex items-center space-x-3">
                <span className="text-3xl font-bold text-gray-900">
                  {formatCurrency(product.price)}
                </span>
                {product.originalPrice && (
                  <span className="text-xl text-gray-500 line-through">
                    {formatCurrency(product.originalPrice)}
                  </span>
                )}
              </div>
              {product.originalPrice && (
                <p className="text-sm text-green-600 mt-1">
                  You save {formatCurrency(product.originalPrice - product.price)}
                </p>
              )}
            </div>

            {/* Description */}
            <div className="mb-6">
              <h3 className="font-semibold text-gray-900 mb-2">Description</h3>
              <p className="text-gray-600">{product.description}</p>
            </div>

            {/* Features */}
            {product.features.length > 0 && (
              <div className="mb-6">
                <h3 className="font-semibold text-gray-900 mb-2">Key Features</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-600">
                  {product.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Stock Status */}
            <div className="mb-6">
              {product.inStock ? (
                <p className="text-green-600 font-medium">
                  ✓ In Stock ({product.stockQuantity} available)
                </p>
              ) : (
                <p className="text-red-600 font-medium">✗ Out of Stock</p>
              )}
            </div>

            {/* Quantity and Add to Cart */}
            <div className="mb-6">
              <div className="flex items-center space-x-4 mb-4">
                <label className="font-medium text-gray-900">Quantity:</label>
                <div className="flex items-center border border-gray-300 rounded">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-1 hover:bg-gray-100"
                    disabled={quantity <= 1}
                  >
                    -
                  </button>
                  <span className="px-4 py-1 border-x border-gray-300">{quantity}</span>
                  <button
                    onClick={() => setQuantity(Math.min(product.stockQuantity, quantity + 1))}
                    className="px-3 py-1 hover:bg-gray-100"
                    disabled={quantity >= product.stockQuantity}
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="flex space-x-4">
                <Button
                  onClick={handleAddToCart}
                  disabled={!product.inStock}
                  size="large"
                  className="flex-1"
                >
                  Add to Cart
                </Button>
                <Button
                  onClick={handleToggleWishlist}
                  variant="outline"
                  size="large"
                  className="px-6"
                >
                  {isInWishlist ? '❤️' : '🤍'}
                </Button>
              </div>
            </div>

            {/* Specifications */}
            {product.specifications && Object.keys(product.specifications).length > 0 && (
              <Card padding="medium">
                <h3 className="font-semibold text-gray-900 mb-3">Specifications</h3>
                <dl className="space-y-2">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="flex justify-between">
                      <dt className="text-gray-600">{key}:</dt>
                      <dd className="font-medium text-gray-900">{value}</dd>
                    </div>
                  ))}
                </dl>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
