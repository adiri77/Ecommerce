import React from 'react';
import { Link } from 'react-router-dom';
import type { Product } from '../types';
import { formatCurrency, calculateDiscount, generateStarRating, getImageUrl } from '../lib/utils';
import { useAppContext, cartActions, wishlistActions } from '../store';
import Button from './Button';
import Card from './Card';

interface ProductCardProps {
  product: Product;
  className?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, className }) => {
  const { state, dispatch } = useAppContext();
  const isInWishlist = state.wishlist.some(item => item.id === product.id);

  const handleAddToCart = (e?: React.MouseEvent<HTMLButtonElement>) => {
    e?.preventDefault();
    e?.stopPropagation();

    dispatch(cartActions.addItem({
      id: `${product.id}-${Date.now()}`,
      product,
      quantity: 1,
    }));
  };

  const handleToggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (isInWishlist) {
      dispatch(wishlistActions.remove(product.id.toString()));
    } else {
      dispatch(wishlistActions.add(product));
    }
  };

  const discountPercentage = product.originalPrice 
    ? calculateDiscount(product.originalPrice, product.price)
    : 0;

  const stars = generateStarRating(product.rating);

  return (
    <Link to={`/products/${product.id}`} className={className}>
      <Card padding="none" hover className="h-full group">
        <div className="relative">
          <img
            src={getImageUrl(product.images[0])}
            alt={product.name}
            className="w-full h-48 object-cover"
            onError={(e) => {
              e.currentTarget.src = '/images/placeholder.jpg';
            }}
          />
          
          {/* Discount Badge */}
          {discountPercentage > 0 && (
            <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-sm font-medium">
              -{discountPercentage}%
            </div>
          )}
          
          {/* Wishlist Button */}
          <button
            onClick={handleToggleWishlist}
            className="absolute top-2 right-2 p-2 rounded-full bg-white shadow-md hover:bg-gray-50 transition-colors"
            aria-label={isInWishlist ? 'Remove from wishlist' : 'Add to wishlist'}
          >
            <svg
              className={`w-5 h-5 ${isInWishlist ? 'text-red-500 fill-current' : 'text-gray-400'}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </button>
          
          {/* Stock Status */}
          {!product.inStock && (
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <span className="text-white font-medium">Out of Stock</span>
            </div>
          )}
        </div>
        
        <div className="p-4">
          <div className="mb-2">
            <h3 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
              {product.name}
            </h3>
            <p className="text-sm text-gray-500 mt-1">{product.brand}</p>
          </div>
          
          {/* Rating */}
          <div className="flex items-center mb-2">
            <div className="flex items-center">
              {stars.map((star, index) => (
                <svg
                  key={index}
                  className={`w-4 h-4 ${
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
            <span className="text-sm text-gray-500 ml-1">
              ({product.reviewCount})
            </span>
          </div>
          
          {/* Price */}
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-2">
              <span className="text-lg font-bold text-gray-900">
                {formatCurrency(product.price)}
              </span>
              {product.originalPrice && (
                <span className="text-sm text-gray-500 line-through">
                  {formatCurrency(product.originalPrice)}
                </span>
              )}
            </div>
          </div>
          
          {/* Add to Cart Button */}
          <Button
            onClick={handleAddToCart}
            disabled={!product.inStock}
            fullWidth
            size="small"
            className="group-hover:bg-blue-700"
          >
            {product.inStock ? 'Add to Cart' : 'Out of Stock'}
          </Button>
        </div>
      </Card>
    </Link>
  );
};

export default ProductCard;
