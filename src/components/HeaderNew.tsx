import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAppContext, authActions } from '../store';
import Button from './Button';
import SearchBar from './SearchBar';

const Header: React.FC = () => {
  const { state, dispatch } = useAppContext();
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const cartItemsCount = state.cart.items.reduce((sum, item) => sum + item.quantity, 0);

  const handleLogout = () => {
    dispatch(authActions.logout());
    navigate('/');
    setIsUserMenuOpen(false);
  };

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsUserMenuOpen(false);
  }, [location]);

  const navigation = [
    { name: 'Home', href: '/', icon: '🏠' },
    { name: 'Products', href: '/products', icon: '🛍️' },
    { name: 'Categories', href: '/categories', icon: '📂' },
    { name: 'About', href: '/about', icon: 'ℹ️' },
    { name: 'Contact', href: '/contact', icon: '📞' },
  ];

  const isActiveRoute = (href: string) => {
    if (href === '/') return location.pathname === '/';
    return location.pathname.startsWith(href);
  };

  return (
    <>
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center py-2 text-sm">
        <div className="container">
          🎉 Free shipping on orders over $50! Use code: FREESHIP50
        </div>
      </div>

      {/* Main Header */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/50' 
          : 'bg-white shadow-sm border-b border-gray-200'
      }`}>
        <div className="container">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                  <span className="text-white font-bold text-xl">🌱</span>
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  EcoShop
                </span>
                <span className="text-xs text-gray-500 -mt-1">Sustainable Living</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 font-medium ${
                    isActiveRoute(item.href)
                      ? 'bg-blue-50 text-blue-600 shadow-sm'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                >
                  <span className="text-lg">{item.icon}</span>
                  <span>{item.name}</span>
                </Link>
              ))}
            </nav>

            {/* Search Bar */}
            <div className="hidden xl:block flex-1 max-w-lg mx-8">
              <SearchBar />
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-2">
              {/* Wishlist */}
              <Link
                to="/wishlist"
                className="relative p-3 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all duration-200 group"
                aria-label="Wishlist"
              >
                <svg className="w-6 h-6 group-hover:scale-110 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                {state.wishlist.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold shadow-lg animate-pulse">
                    {state.wishlist.length}
                  </span>
                )}
              </Link>

              {/* Cart */}
              <Link
                to="/cart"
                className="relative p-3 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 group"
                aria-label="Shopping Cart"
              >
                <svg className="w-6 h-6 group-hover:scale-110 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 11-4 0v-6m4 0V9a2 2 0 10-4 0v4.01" />
                </svg>
                {cartItemsCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold shadow-lg animate-bounce">
                    {cartItemsCount}
                  </span>
                )}
              </Link>

              {/* User Menu */}
              {state.auth.isAuthenticated ? (
                <div className="relative">
                  <button
                    onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                    className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 transition-all duration-200"
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                      {state.auth.user?.firstName?.charAt(0) || 'U'}
                    </div>
                    <div className="hidden md:block text-left">
                      <div className="text-sm font-medium text-gray-900">
                        {state.auth.user?.firstName} {state.auth.user?.lastName}
                      </div>
                      <div className="text-xs text-gray-500">View Profile</div>
                    </div>
                  </button>

                  {/* User Dropdown */}
                  {isUserMenuOpen && (
                    <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-lg border border-gray-200 py-2 z-50">
                      <div className="px-4 py-3 border-b border-gray-100">
                        <div className="text-sm font-medium text-gray-900">
                          {state.auth.user?.firstName} {state.auth.user?.lastName}
                        </div>
                        <div className="text-sm text-gray-500">{state.auth.user?.email}</div>
                      </div>
                      <Link
                        to="/account"
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                        onClick={() => setIsUserMenuOpen(false)}
                      >
                        My Account
                      </Link>
                      <button
                        onClick={handleLogout}
                        className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
                      >
                        Sign Out
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <div className="flex items-center space-x-3">
                  <Link to="/login">
                    <Button variant="outline" size="small" className="hidden sm:inline-flex">
                      Login
                    </Button>
                  </Link>
                  <Link to="/register">
                    <Button size="small" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                      Sign Up
                    </Button>
                  </Link>
                </div>
              )}

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-3 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200"
                aria-label="Toggle menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isMobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden border-t border-gray-200/50 bg-white/95 backdrop-blur-md">
              <div className="container py-6">
                <div className="flex flex-col space-y-6">
                  {/* Mobile Search */}
                  <div className="xl:hidden">
                    <SearchBar />
                  </div>
                  
                  {/* Mobile Navigation */}
                  <div className="grid grid-cols-2 gap-3">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className={`flex items-center space-x-3 p-4 rounded-xl transition-all duration-200 ${
                          isActiveRoute(item.href)
                            ? 'bg-blue-50 text-blue-600 shadow-sm'
                            : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                        }`}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <span className="text-2xl">{item.icon}</span>
                        <span className="font-medium">{item.name}</span>
                      </Link>
                    ))}
                  </div>
                  
                  {/* Mobile Auth */}
                  {!state.auth.isAuthenticated && (
                    <div className="flex flex-col space-y-3 pt-6 border-t border-gray-200">
                      <Link to="/login" onClick={() => setIsMobileMenuOpen(false)}>
                        <Button variant="outline" fullWidth size="large">
                          Login
                        </Button>
                      </Link>
                      <Link to="/register" onClick={() => setIsMobileMenuOpen(false)}>
                        <Button fullWidth size="large" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                          Sign Up
                        </Button>
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
