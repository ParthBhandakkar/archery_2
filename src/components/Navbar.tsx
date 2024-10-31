import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Target, ShoppingCart, Menu, X, User } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cartItems } = useCart();
  const { user, logout } = useAuth();

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Target className="h-8 w-8 text-emerald-600" />
              <span className="ml-2 text-xl font-bold text-gray-800">ArcheryPro</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-600 hover:text-emerald-600">Home</Link>
            <Link to="/products" className="text-gray-600 hover:text-emerald-600">Products</Link>
            <Link to="/about" className="text-gray-600 hover:text-emerald-600">About</Link>
            <Link to="/contact" className="text-gray-600 hover:text-emerald-600">Contact</Link>
            
            <div className="flex items-center space-x-4">
              <div className="relative">
                <ShoppingCart className="h-6 w-6 text-gray-600 hover:text-emerald-600 cursor-pointer" />
                {cartItems.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-emerald-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cartItems.length}
                  </span>
                )}
              </div>
              
              {user ? (
                <div className="relative group">
                  <button className="flex items-center space-x-1 text-gray-600 hover:text-emerald-600">
                    <User className="h-6 w-6" />
                    <span>{user.name}</span>
                  </button>
                  <div className="absolute right-0 w-48 mt-2 py-2 bg-white rounded-md shadow-xl hidden group-hover:block">
                    <button
                      onClick={logout}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                    >
                      Sign out
                    </button>
                  </div>
                </div>
              ) : (
                <Link
                  to="/login"
                  className="text-gray-600 hover:text-emerald-600 flex items-center space-x-1"
                >
                  <User className="h-6 w-6" />
                  <span>Sign in</span>
                </Link>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-emerald-600"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 text-gray-600 hover:text-emerald-600">Home</Link>
            <Link to="/products" className="block px-3 py-2 text-gray-600 hover:text-emerald-600">Products</Link>
            <Link to="/about" className="block px-3 py-2 text-gray-600 hover:text-emerald-600">About</Link>
            <Link to="/contact" className="block px-3 py-2 text-gray-600 hover:text-emerald-600">Contact</Link>
            {user ? (
              <>
                <span className="block px-3 py-2 text-gray-600">{user.name}</span>
                <button
                  onClick={logout}
                  className="block px-3 py-2 text-gray-600 hover:text-emerald-600 w-full text-left"
                >
                  Sign out
                </button>
              </>
            ) : (
              <Link to="/login" className="block px-3 py-2 text-gray-600 hover:text-emerald-600">
                Sign in
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}