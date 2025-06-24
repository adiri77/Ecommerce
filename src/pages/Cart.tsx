import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAppContext, cartActions } from '../store';
import { formatCurrency, getImageUrl } from '../lib/utils';
import Button from '../components/Button';
import Card from '../components/Card';

const Cart: React.FC = () => {
  const { state, dispatch } = useAppContext();
  const navigate = useNavigate();
  const { cart } = state;

  const handleUpdateQuantity = (itemId: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      dispatch(cartActions.removeItem(itemId));
    } else {
      dispatch(cartActions.updateQuantity(itemId, newQuantity));
    }
  };

  const handleRemoveItem = (itemId: string) => {
    dispatch(cartActions.removeItem(itemId));
  };

  const handleClearCart = () => {
    dispatch(cartActions.clear());
  };

  const handleCheckout = () => {
    if (state.auth.isAuthenticated) {
      navigate('/checkout');
    } else {
      navigate('/login', { state: { from: { pathname: '/checkout' } } });
    }
  };

  if (cart.items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="container py-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Shopping Cart</h1>
          
          <Card padding="large" className="text-center">
            <div className="py-12">
              <svg className="mx-auto h-12 w-12 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 11-4 0v-6m4 0V9a2 2 0 10-4 0v4.01" />
              </svg>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Your cart is empty</h3>
              <p className="text-gray-500 mb-6">
                Looks like you haven't added any items to your cart yet.
              </p>
              <Link to="/products">
                <Button size="large">
                  Continue Shopping
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Shopping Cart</h1>
          <Button
            onClick={handleClearCart}
            variant="outline"
            size="small"
          >
            Clear Cart
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <Card padding="none">
              <div className="divide-y divide-gray-200">
                {cart.items.map((item) => (
                  <div key={item.id} className="p-6">
                    <div className="flex items-center space-x-4">
                      {/* Product Image */}
                      <Link to={`/products/${item.product.id}`} className="flex-shrink-0">
                        <img
                          src={getImageUrl(item.product.images[0])}
                          alt={item.product.name}
                          className="w-20 h-20 object-cover rounded-lg"
                          onError={(e) => {
                            e.currentTarget.src = '/images/placeholder.jpg';
                          }}
                        />
                      </Link>

                      {/* Product Info */}
                      <div className="flex-1 min-w-0">
                        <Link
                          to={`/products/${item.product.id}`}
                          className="text-lg font-medium text-gray-900 hover:text-blue-600 line-clamp-2"
                        >
                          {item.product.name}
                        </Link>
                        <p className="text-sm text-gray-500 mt-1">{item.product.brand}</p>
                        <p className="text-lg font-semibold text-gray-900 mt-2">
                          {formatCurrency(item.product.price)}
                        </p>
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center space-x-3">
                        <div className="flex items-center border border-gray-300 rounded">
                          <button
                            onClick={() => handleUpdateQuantity(item.id.toString(), item.quantity - 1)}
                            className="px-3 py-1 hover:bg-gray-100 text-gray-600"
                            disabled={item.quantity <= 1}
                          >
                            -
                          </button>
                          <span className="px-4 py-1 border-x border-gray-300 min-w-[3rem] text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => handleUpdateQuantity(item.id.toString(), item.quantity + 1)}
                            className="px-3 py-1 hover:bg-gray-100 text-gray-600"
                            disabled={item.quantity >= item.product.stockQuantity}
                          >
                            +
                          </button>
                        </div>

                        {/* Remove Button */}
                        <button
                          onClick={() => handleRemoveItem(item.id.toString())}
                          className="text-red-600 hover:text-red-800 p-1"
                          aria-label="Remove item"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                      </div>

                      {/* Item Total */}
                      <div className="text-right">
                        <p className="text-lg font-semibold text-gray-900">
                          {formatCurrency(item.product.price * item.quantity)}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card padding="medium" className="sticky top-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Order Summary</h3>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">{formatCurrency(cart.subtotal)}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-medium">
                    {cart.shipping === 0 ? 'Free' : formatCurrency(cart.shipping)}
                  </span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600">Tax</span>
                  <span className="font-medium">{formatCurrency(cart.tax)}</span>
                </div>
                
                {cart.discountAmount && (
                  <div className="flex justify-between text-green-600">
                    <span>Discount ({cart.discountCode})</span>
                    <span>-{formatCurrency(cart.discountAmount)}</span>
                  </div>
                )}
                
                <div className="border-t border-gray-200 pt-3">
                  <div className="flex justify-between text-lg font-semibold">
                    <span>Total</span>
                    <span>{formatCurrency(cart.total)}</span>
                  </div>
                </div>
              </div>

              {/* Discount Code */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Discount Code
                </label>
                <div className="flex space-x-2">
                  <input
                    type="text"
                    placeholder="Enter code"
                    className="flex-1 input"
                  />
                  <Button variant="outline" size="small">
                    Apply
                  </Button>
                </div>
              </div>

              {/* Free Shipping Notice */}
              {cart.shipping > 0 && cart.subtotal < 50 && (
                <div className="mb-6 p-3 bg-blue-50 rounded-lg">
                  <p className="text-sm text-blue-800">
                    Add {formatCurrency(50 - cart.subtotal)} more for free shipping!
                  </p>
                </div>
              )}

              {/* Checkout Button */}
              <Button
                onClick={handleCheckout}
                fullWidth
                size="large"
                className="mb-4"
              >
                Proceed to Checkout
              </Button>

              {/* Continue Shopping */}
              <Link to="/products">
                <Button variant="outline" fullWidth>
                  Continue Shopping
                </Button>
              </Link>

              {/* Security Notice */}
              <div className="mt-6 flex items-center justify-center text-sm text-gray-500">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                Secure checkout
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
