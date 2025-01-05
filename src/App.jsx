import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Cart } from './components/Cart';
import { Home } from './pages/Home';
import { Products } from './pages/Products';
import { Contact } from './pages/Contact';

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false); // State for toggling the cart modal
  const [cartItems, setCartItems] = useState([]); // State to store cart items

  // Add product to cart or increase quantity
  const handleAddToCart = (product) => {
    setCartItems((items) => {
      const existingItem = items.find((item) => item.id === product.id);
      if (existingItem) {
        return items.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...items, { ...product, quantity: 1 }];
    });
  };

  // Update product quantity or remove if quantity is 0
  const handleUpdateQuantity = (id, quantity) => {
    setCartItems((items) =>
      items
        .map((item) =>
          item.id === id ? { ...item, quantity } : item
        )
        .filter((item) => item.quantity > 0) // Filter out items with 0 quantity
    );
  };

  // Remove product from cart
  const handleRemoveFromCart = (id) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        {/* Navbar */}
        <Navbar
          cartItemsCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)} // Pass cart item count
          onCartClick={() => setIsCartOpen(true)} // Open cart modal on click
        />

        {/* Main Content */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/products"
              element={<Products onAddToCart={handleAddToCart} />} // Pass add-to-cart handler to Products
            />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />

        {/* Cart Modal */}
        {isCartOpen && (
          <Cart
            items={cartItems} // Pass cart items
            onClose={() => setIsCartOpen(false)} // Close cart modal
            onUpdateQuantity={handleUpdateQuantity} // Handle quantity updates
            onRemove={handleRemoveFromCart} // Handle item removal
          />
        )}
      </div>
    </BrowserRouter>
  );
}

export default App;