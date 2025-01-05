import React from 'react';
import type { ProductFilters } from '../types';

interface ProductFiltersProps {
  filters: ProductFilters;
  onFilterChange: (filters: ProductFilters) => void;
}

export function ProductFilters({ filters, onFilterChange }: ProductFiltersProps) {
  const fragranceList = [
    'Chocolate', 'Legend Musk', 'Dubai Gold', 'Cool Water', 'Sabaya Pro Max', 
    'Bombshell Nights', 'External Love', 'CR7', 'Royal Oud', 'Jaguar Black',
    'Blue Lady', 'Makka Blend', 'Arabian Night', 'Silky Musk', 'Rose', 
    'Marium', 'Musk Shawq', 'Sandal', 'Black Orchid', 'Vanilla', 'Oudh Arabiyath',
    'Jasmine', 'One Million', 'Era Pura', 'Victoria Secret', 'Christian Dior',
    'Brut', 'Ultra Male', 'Black Opium', 'Creed Aetus'
  ];

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onFilterChange({ ...filters, category: e.target.value });
  };

  const handleSizeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onFilterChange({ ...filters, size: e.target.value });
  };

  return (
    <div className="flex justify-center mt-24">
      <div className="w-full max-w-4xl px-6 sm:px-6 overflow-y-auto">
        <div className="flex justify-center space-x-10 mt-0 mb-4">
          {/* Size Filter */}
          <div className="flex flex-col">
            <h3 className="text-lg font-medium text-gray-900 mb-2">Size</h3>
            <select
              value={filters.size}
              onChange={handleSizeChange}
              className="h-10 px-4 text-gray-600 border rounded-md"
            >
              {['All', '6ml', '12ml', '30ml', '50ml', '100ml'].map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>
          </div>

          {/* Category Filter */}
          <div className="flex flex-col">
            <h3 className="text-lg font-medium text-gray-900 mb-2">Category</h3>
            <select
              value={filters.category}
              onChange={handleCategoryChange}
              className="h-10 px-4 text-gray-600 border rounded-md"
            >
              <option value="All">All</option>
              {fragranceList.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
