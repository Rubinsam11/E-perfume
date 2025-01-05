export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  size: '50ml' | '100ml' | '200ml';
  category: string;
  notes: string[];
}

export interface CartItem extends Product {
  quantity: number;
}

export interface ProductFilters {
  size: string;
  category: string;
}