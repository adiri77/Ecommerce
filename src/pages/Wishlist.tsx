import React from 'react';
import { Link } from 'react-router-dom';
import { useAppContext, wishlistActions, cartActions } from '../store';
import ProductCard from '../components/ProductCard';
import Button from '../components/Button';
import Card from '../components/Card';

const Wishlist: React.FC = () => {
  const { state, dispatch } = useAppContext();
  const { wishlist } = state;

  const handleRemoveFromWishlist = (productId: string) => {
    dispatch(wishlistActions.remove(productId));
  };

  const handleMoveToCart = (product: any) => {
    // Add to cart
    dispatch(cartActions.addItem({
      id: `${product.id}-${Date.now()}`,
      product,
      quantity: 1,
    }));
    
    // Remove from wishlist
    dispatch(wishlistActions.remove(product.id.toString()));
  };

  const handleClearWishlist = () => {
    if (window.confirm('Are you sure you want to clear your entire wishlist?')) {
      wishlist.forEach(product => {
        dispatch(wishlistActions.remove(product.id.toString()));
      });
    }
  };

  if (wishlist.length === 0) {
    return (
      <div className="container py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">My Wishlist</h1>
        
        <Card className="text-center py-12">
          <div className="max-w-md mx-auto">
            <div className="mb-6">
              <svg className="w-16 h-16 text-gray-300 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
              </svg>
            </div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Your wishlist is empty</h2>
            <p className="text-gray-600 mb-6">
              Save items you love by clicking the heart icon on any product. 
              They'll appear here for easy access later.
            </p>
            <Link to="/products">
              <Button variant="primary" size="large">
                Start Shopping
              </Button>
            </Link>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="container py-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">My Wishlist</h1>
          <p className="text-gray-600 mt-2">
            {wishlist.length} {wishlist.length === 1 ? 'item' : 'items'} saved
          </p>
        </div>
        
        {wishlist.length > 0 && (
          <Button 
            variant="outline" 
            onClick={handleClearWishlist}
            className="text-red-600 border-red-300 hover:bg-red-50"
          >
            Clear All
          </Button>
        )}
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {wishlist.map((product) => (
          <div key={product.id} className="relative">
            <ProductCard product={product} />
            
            {/* Wishlist-specific actions */}
            <div className="mt-3 space-y-2">
              <Button
                variant="primary"
                fullWidth
                onClick={() => handleMoveToCart(product)}
              >
                Move to Cart
              </Button>
              
              <Button
                variant="outline"
                fullWidth
                onClick={() => handleRemoveFromWishlist(product.id.toString())}
                className="text-red-600 border-red-300 hover:bg-red-50"
              >
                Remove
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* Wishlist Actions */}
      <div className="mt-12 text-center">
        <Card className="max-w-2xl mx-auto">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Ready to purchase?
          </h3>
          <p className="text-gray-600 mb-6">
            Move your favorite items to cart or continue shopping for more great products.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/products">
              <Button variant="outline" size="large">
                Continue Shopping
              </Button>
            </Link>
            <Link to="/cart">
              <Button variant="primary" size="large">
                View Cart ({state.cart.items.length})
              </Button>
            </Link>
          </div>
        </Card>
      </div>

      {/* Recently Viewed Section */}
      {state.recentlyViewed.length > 0 && (
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Recently Viewed</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {state.recentlyViewed.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Wishlist;
