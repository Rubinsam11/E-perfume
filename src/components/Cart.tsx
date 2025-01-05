import React from 'react';
import { X, Send } from 'lucide-react';
import type { CartItem } from '../types';

interface CartProps {
  items: CartItem[];
  onClose: () => void;
  onUpdateQuantity: (id: string, quantity: number) => void;
  onRemove: (id: string) => void;
}

export function Cart({ items, onClose, onUpdateQuantity, onRemove }: CartProps) {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleWhatsAppOrder = () => {
    if (items.length === 0) return alert('No items in the order'); // Add a check for empty items
  
    const message = items
      .map(item => {
        const itemDetails = `${item.quantity}x ${item.name} ($${item.price})`;
        const itemImage = item.image ? `Image: ${item.image}` : '';
        return `${itemDetails}\n${itemImage}`;
      })
      .join('\n');
  
    const totalMessage = `\nTotal: $${total.toFixed(2)}`;
    const encodedMessage = encodeURIComponent(`Hello! I would like to order:\n${message}${totalMessage}`);
  
    // Check if the URL is correctly formatted before opening
    const url = `https://wa.me/+9025493230?text=${encodedMessage}`;
    
    // Open the WhatsApp link
    window.open(url, '_blank');
  };
  
  
  

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex justify-end">
      <div className="bg-white w-full max-w-md">
        <div className="p-4 border-b flex justify-between items-center">
          <h2 className="text-lg font-semibold">Your Cart</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="h-6 w-6" />
          </button>
        </div>
        <div className="p-4 flex flex-col gap-4 h-[calc(100vh-180px)] overflow-auto">
          {items.length === 0 ? (
            <p className="text-gray-500 text-center">Your cart is empty</p>
          ) : (
            items.map(item => (
              <div key={item.id} className="flex gap-4 border-b pb-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded"
                />
                <div className="flex-1">
                  <h3 className="font-medium">{item.name}</h3>
                  <p className="text-sm text-gray-500">${item.price}</p>
                  <div className="mt-2 flex items-center gap-2">
                    <button
                      onClick={() => onUpdateQuantity(item.id, Math.max(0, item.quantity - 1))}
                      className="px-2 py-1 border rounded"
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                      className="px-2 py-1 border rounded"
                    >
                      +
                    </button>
                    <button
                      onClick={() => onRemove(item.id)}
                      className="ml-auto text-red-500 hover:text-red-700"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
        {items.length > 0 && (
          <div className="p-4 border-t">
            <div className="flex justify-between mb-4">
              <span className="font-semibold">Total:</span>
              <span className="font-semibold">${total.toFixed(2)}</span>
            </div>
            <button
              onClick={handleWhatsAppOrder}
              className="w-full bg-green-500 text-white py-2 rounded-md flex items-center justify-center gap-2 hover:bg-green-600 transition-colors"
            >
              <Send className="h-4 w-4" />
              Order via WhatsApp
            </button>
          </div>
        )}
      </div>
    </div>
  );
}