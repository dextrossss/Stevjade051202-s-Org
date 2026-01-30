import { LucideIcon } from 'lucide-react';

export interface MenuItem {
  id: string;
  label: string;
  icon: LucideIcon;
  badge?: string; // e.g., "BETA", "NEW", number
  badgeColor?: 'green' | 'blue' | 'red' | 'gray';
  isActive?: boolean;
}

export interface SalesData {
  today: number;
  saleCount: number;
  yesterday: number;
  thisMonth: number;
}

export interface StockData {
  registeredProducts: number;
  amountInStock: number;
  availableItems: number;
}

export interface Product {
  id: string;
  name: string;
  code: string;
  price: number;
  stock: number;
  expiry?: string;
  category?: string;
  imageColor: string;
  isStarred?: boolean;
}