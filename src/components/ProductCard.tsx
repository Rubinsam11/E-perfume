import React from 'react';
import { Plus } from 'lucide-react';
import type { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export function ProductCard({ product, onAddToCart }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.02]">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-64 object-cover"
      />
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
            {product.size}
          </span>
        </div>
        <p className="text-gray-500 text-sm mb-2">{product.description}</p>
        <div className="flex flex-wrap gap-1 mb-4">
          {product.notes.map((note, index) => (
            <span
              key={index}
              className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800"
            >
              {note}
            </span>
          ))}
        </div>
        <div className="flex items-center justify-between">
          <span className="text-purple-600 font-medium">${product.price}</span>
          <button
            onClick={() => onAddToCart(product)}
            className="flex items-center gap-1 bg-purple-600 text-white px-3 py-1.5 rounded-md hover:bg-purple-700 transition-colors"
          >
            <Plus className="h-4 w-4" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}