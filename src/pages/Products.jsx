import React, { useState } from 'react';
import { ProductCard } from '../components/ProductCard';
import { ProductFilters } from '../components/ProductFilters';
import { products } from '../data/products';
import './Products.css';

export function Products({ onAddToCart }) {
  const [filters, setFilters] = useState({
    size: 'All',
    category: 'All',
  });

  // Filter the products based on size and category
  const filteredProducts = products.filter((product) => {
    // If a category is selected, filter by category
    if (filters.category !== 'All' && product.name !== filters.category) return false;

    // If a size is selected, filter by size
    if (filters.size !== 'All' && product.size !== filters.size) return false;

    return true;
  });

  return (
    <div className="products-container">
      <div className="products-wrapper">
        <h1 className="products-header">Our Collection</h1>
        <div className="products-layout">
          {/* Filters Sidebar */}
          <div className="filters-sidebar">
            <ProductFilters
              filters={filters}
              onFilterChange={setFilters}
            />
          </div>

          {/* Product Grid */}
          <div className="products-grid">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={onAddToCart}
              />
            ))}
            {filteredProducts.length === 0 && (
              <div className="no-products">
                <p>No products found matching your filters.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
