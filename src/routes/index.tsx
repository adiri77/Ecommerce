import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AppProvider } from '../store';
import Header from '../components/HeaderNew';
import Footer from '../components/Footer';
import Home from '../pages/Home';
import Products from '../pages/Products';
import ProductDetail from '../pages/ProductDetail';
import Cart from '../pages/Cart';
import Login from '../pages/Login';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Categories from '../pages/Categories';
import Wishlist from '../pages/Wishlist';
import Account from '../pages/Account';
import Register from '../pages/Register';
import Search from '../pages/Search';
import Checkout from '../pages/Checkout';
import NotFound from '../pages/NotFound';
import CSSDemo from '../pages/CSSDemo';



const AppRoutes: React.FC = () => {
  return (
    <AppProvider>
      <Router>
        <div className="min-h-screen bg-gray-50 flex flex-col">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/:id" element={<ProductDetail />} />
              <Route path="/categories" element={<Categories />} />
              <Route path="/categories/:slug" element={<Products />} />
              <Route path="/search" element={<Search />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/wishlist" element={<Wishlist />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/account" element={<Account />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/css-demo" element={<CSSDemo />} />

              {/* Redirect /home to / */}
              <Route path="/home" element={<Navigate to="/" replace />} />

              {/* 404 route */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AppProvider>
  );
};

export default AppRoutes;
