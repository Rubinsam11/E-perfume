import { ShoppingCart, Sparkles } from 'lucide-react';

interface HeaderProps {
  cartItemsCount: number;
  onCartClick: () => void;
}

export function Header({ cartItemsCount, onCartClick }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Sparkles className="h-8 w-8 text-purple-600" />
            <span className="ml-2 text-lg sm:text-xl font-semibold">Essence</span>
          </div>
          <button
            onClick={onCartClick}
            className="relative p-2 text-gray-600 hover:text-purple-600 transition-colors"
            aria-label={`Shopping cart with ${cartItemsCount} items`}
          >
            <ShoppingCart className="h-5 w-5 sm:h-6 sm:w-6" />
            {cartItemsCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-purple-600 text-white text-xs sm:text-sm md:text-base rounded-full h-5 w-5 flex items-center justify-center">
                {cartItemsCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}