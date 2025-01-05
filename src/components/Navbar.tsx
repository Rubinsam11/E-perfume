import React, { useState, useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { ShoppingCart, Menu, X } from 'lucide-react';

interface NavbarProps {
  cartItemsCount: number;
  onCartClick: () => void;
}

export function Navbar({ cartItemsCount, onCartClick }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  // Close menu if clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            {/* Logo */}
            <div className="flex items-center">
              <img src="1.png" alt="E Perfume" className="h-4 w-4" /> {/* Your logo */}
              <span className="ml-2 text-xl font-semibold">E-perfume</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-4 font-medium justify-center items-center">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md ${isActive ? 'text-purple-600' : 'text-gray-600 hover:text-purple-600'}`
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/products"
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md ${isActive ? 'text-purple-600' : 'text-gray-600 hover:text-purple-600'}`
                }
              >
                Products
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md ${isActive ? 'text-purple-600' : 'text-gray-600 hover:text-purple-600'}`
                }
              >
                Contact
              </NavLink>
            </div>
          </div>
             
          {/* Cart Button */}
          <button
            onClick={onCartClick}
            className="relative p-2 text-gray-600 hover:text-purple-600 transition-colors"
            aria-label="View Cart"
          >
            <ShoppingCart className="h-6 w-6" />
            {cartItemsCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-purple-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {cartItemsCount}
              </span>
            )}
          </button>
         
          </div>
           {/* Hamburger Menu */}
           <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-gray-900 hover:text-purple-900 transition-colors"
            aria-label={isMenuOpen ? 'Close Menu' : 'Open Menu'}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-5 w-6" />}
          </button>
        </div>
        <div>
        </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div ref={menuRef} className="md:hidden bg-white border-t border-gray-100">
          <div className="flex flex-col space-y-4 p-4 font-medium">
            <NavLink
              to="/"
              className="text-gray-600 hover:text-purple-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/products"
              className="text-gray-600 hover:text-purple-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </NavLink>
            <NavLink
              to="/contact"
              className="text-gray-600 hover:text-purple-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
}
