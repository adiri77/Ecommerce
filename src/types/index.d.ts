// Global TypeScript type definitions for E-commerce Application

// Common utility types
export type ID = string | number;

export interface BaseEntity {
  id: ID;
  createdAt: string;
  updatedAt: string;
}

// Product types
export interface Product extends BaseEntity {
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  images: string[];
  category: string;
  brand: string;
  rating: number;
  reviewCount: number;
  inStock: boolean;
  stockQuantity: number;
  tags: string[];
  features: string[];
  specifications?: Record<string, string>;
}

export interface ProductCategory {
  id: ID;
  name: string;
  slug: string;
  description?: string;
  image?: string;
  parentId?: ID;
  children?: ProductCategory[];
}

// Cart types
export interface CartItem {
  id: ID;
  product: Product;
  quantity: number;
  selectedVariant?: ProductVariant;
}

export interface ProductVariant {
  id: ID;
  name: string;
  value: string;
  priceModifier?: number;
}

export interface Cart {
  items: CartItem[];
  subtotal: number;
  tax: number;
  shipping: number;
  total: number;
  discountCode?: string;
  discountAmount?: number;
}

// User and Authentication types
export interface User {
  id: ID;
  email: string;
  firstName: string;
  lastName: string;
  avatar?: string;
  phone?: string;
  dateOfBirth?: string;
  addresses: Address[];
  preferences: UserPreferences;
}

export interface Address {
  id: ID;
  type: 'billing' | 'shipping';
  firstName: string;
  lastName: string;
  company?: string;
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  isDefault: boolean;
}

export interface UserPreferences {
  newsletter: boolean;
  notifications: boolean;
  currency: string;
  language: string;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}

// Order types
export interface Order {
  id: ID;
  orderNumber: string;
  status: OrderStatus;
  items: CartItem[];
  subtotal: number;
  tax: number;
  shipping: number;
  total: number;
  shippingAddress: Address;
  billingAddress: Address;
  paymentMethod: PaymentMethod;
  createdAt: string;
  estimatedDelivery?: string;
  trackingNumber?: string;
}

export type OrderStatus = 'pending' | 'confirmed' | 'processing' | 'shipped' | 'delivered' | 'cancelled';

export interface PaymentMethod {
  id: ID;
  type: 'credit_card' | 'debit_card' | 'paypal' | 'apple_pay' | 'google_pay';
  last4?: string;
  brand?: string;
  expiryMonth?: number;
  expiryYear?: number;
}

// API Response types
export interface ApiResponse<T = any> {
  data: T;
  message?: string;
  success: boolean;
}

export interface ApiError {
  message: string;
  code?: string;
  status?: number;
}

// Search and Filter types
export interface SearchFilters {
  query?: string;
  category?: string;
  brand?: string[];
  priceRange?: [number, number];
  rating?: number;
  inStock?: boolean;
  sortBy?: 'name' | 'price' | 'rating' | 'newest';
  sortOrder?: 'asc' | 'desc';
}

export interface SearchResults {
  products: Product[];
  total: number;
  filters: {
    categories: { name: string; count: number }[];
    brands: { name: string; count: number }[];
    priceRange: [number, number];
  };
}

// Form types
export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterCredentials {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// Navigation types
export interface NavItem {
  label: string;
  href: string;
  icon?: string;
  children?: NavItem[];
}

// Loading states
export type LoadingState = 'idle' | 'loading' | 'success' | 'error';

// Pagination
export interface PaginationParams {
  page: number;
  limit: number;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
    hasNext: boolean;
    hasPrev: boolean;
  };
}

// Environment variables
declare global {
  interface ImportMetaEnv {
    readonly VITE_API_BASE_URL: string;
    readonly VITE_APP_NAME: string;
    readonly VITE_APP_VERSION: string;
    readonly VITE_STRIPE_PUBLIC_KEY: string;
  }

  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
}

export {};
