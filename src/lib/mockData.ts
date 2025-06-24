// Mock data for E-commerce application
import type { Product, ProductCategory, User } from '../types';

export const mockCategories: ProductCategory[] = [
  {
    id: '1',
    name: 'Electronics',
    slug: 'electronics',
    description: 'Latest gadgets and electronic devices',
    image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=400&h=300&fit=crop&crop=center',
  },
  {
    id: '2',
    name: 'Clothing',
    slug: 'clothing',
    description: 'Fashion and apparel for all occasions',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop&crop=center',
  },
  {
    id: '3',
    name: 'Home & Garden',
    slug: 'home-garden',
    description: 'Everything for your home and garden',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop&crop=center',
  },
  {
    id: '4',
    name: 'Sports & Outdoors',
    slug: 'sports-outdoors',
    description: 'Gear for active lifestyle',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop&crop=center',
  },
  {
    id: '5',
    name: 'Books',
    slug: 'books',
    description: 'Books for every reader',
    image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop&crop=center',
  },
];

export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Wireless Bluetooth Headphones',
    description: 'Premium quality wireless headphones with noise cancellation and 30-hour battery life.',
    price: 199.99,
    originalPrice: 249.99,
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=500&h=500&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=500&h=500&fit=crop&crop=center',
    ],
    category: 'Electronics',
    brand: 'AudioTech',
    rating: 4.5,
    reviewCount: 128,
    inStock: true,
    stockQuantity: 45,
    tags: ['wireless', 'bluetooth', 'noise-cancelling'],
    features: [
      'Active Noise Cancellation',
      '30-hour battery life',
      'Quick charge (5 min = 3 hours)',
      'Premium comfort design',
    ],
    specifications: {
      'Battery Life': '30 hours',
      'Charging Time': '2 hours',
      'Weight': '250g',
      'Connectivity': 'Bluetooth 5.0',
    },
    createdAt: '2024-01-15T10:00:00Z',
    updatedAt: '2024-01-15T10:00:00Z',
  },
  {
    id: '2',
    name: 'Smart Fitness Watch',
    description: 'Advanced fitness tracking with heart rate monitoring, GPS, and smartphone integration.',
    price: 299.99,
    images: [
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=500&h=500&fit=crop&crop=center',
    ],
    category: 'Electronics',
    brand: 'FitTech',
    rating: 4.3,
    reviewCount: 89,
    inStock: true,
    stockQuantity: 23,
    tags: ['fitness', 'smartwatch', 'gps'],
    features: [
      'Heart rate monitoring',
      'Built-in GPS',
      'Water resistant',
      '7-day battery life',
    ],
    specifications: {
      'Display': '1.4" AMOLED',
      'Battery Life': '7 days',
      'Water Resistance': '5ATM',
      'Sensors': 'Heart rate, GPS, Accelerometer',
    },
    createdAt: '2024-01-10T10:00:00Z',
    updatedAt: '2024-01-10T10:00:00Z',
  },
  {
    id: '3',
    name: 'Organic Cotton T-Shirt',
    description: 'Comfortable and sustainable organic cotton t-shirt in various colors.',
    price: 29.99,
    images: [
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=500&h=500&fit=crop&crop=center',
    ],
    category: 'Clothing',
    brand: 'EcoWear',
    rating: 4.7,
    reviewCount: 156,
    inStock: true,
    stockQuantity: 78,
    tags: ['organic', 'cotton', 'sustainable'],
    features: [
      '100% Organic Cotton',
      'Pre-shrunk',
      'Machine washable',
      'Available in 8 colors',
    ],
    specifications: {
      'Material': '100% Organic Cotton',
      'Fit': 'Regular',
      'Care': 'Machine wash cold',
      'Origin': 'Made in USA',
    },
    createdAt: '2024-01-05T10:00:00Z',
    updatedAt: '2024-01-05T10:00:00Z',
  },
  {
    id: '4',
    name: 'Professional Coffee Maker',
    description: 'Programmable coffee maker with built-in grinder and thermal carafe.',
    price: 149.99,
    originalPrice: 179.99,
    images: [
      'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=500&h=500&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=500&h=500&fit=crop&crop=center',
    ],
    category: 'Home & Garden',
    brand: 'BrewMaster',
    rating: 4.4,
    reviewCount: 67,
    inStock: true,
    stockQuantity: 12,
    tags: ['coffee', 'kitchen', 'programmable'],
    features: [
      'Built-in grinder',
      'Programmable timer',
      'Thermal carafe',
      '12-cup capacity',
    ],
    specifications: {
      'Capacity': '12 cups',
      'Grinder': 'Burr grinder',
      'Carafe': 'Thermal stainless steel',
      'Dimensions': '14" x 10" x 16"',
    },
    createdAt: '2024-01-01T10:00:00Z',
    updatedAt: '2024-01-01T10:00:00Z',
  },
  {
    id: '5',
    name: 'Yoga Mat Premium',
    description: 'Non-slip yoga mat with excellent grip and cushioning for all yoga practices.',
    price: 49.99,
    images: [
      'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=500&h=500&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1506629905607-c60f6c3e7db1?w=500&h=500&fit=crop&crop=center',
    ],
    category: 'Sports & Outdoors',
    brand: 'ZenFit',
    rating: 4.6,
    reviewCount: 203,
    inStock: true,
    stockQuantity: 34,
    tags: ['yoga', 'fitness', 'non-slip'],
    features: [
      'Non-slip surface',
      'Extra thick cushioning',
      'Eco-friendly materials',
      'Carrying strap included',
    ],
    specifications: {
      'Thickness': '6mm',
      'Material': 'TPE (Eco-friendly)',
      'Size': '72" x 24"',
      'Weight': '2.5 lbs',
    },
    createdAt: '2023-12-28T10:00:00Z',
    updatedAt: '2023-12-28T10:00:00Z',
  },
  {
    id: '6',
    name: 'JavaScript: The Complete Guide',
    description: 'Comprehensive guide to modern JavaScript programming with practical examples.',
    price: 39.99,
    images: [
      'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=500&h=500&fit=crop&crop=center',
    ],
    category: 'Books',
    brand: 'TechBooks',
    rating: 4.8,
    reviewCount: 94,
    inStock: true,
    stockQuantity: 67,
    tags: ['programming', 'javascript', 'education'],
    features: [
      '800+ pages',
      'Practical examples',
      'Modern ES6+ syntax',
      'Online resources included',
    ],
    specifications: {
      'Pages': '856',
      'Publisher': 'TechBooks Publishing',
      'Language': 'English',
      'Format': 'Paperback',
    },
    createdAt: '2023-12-20T10:00:00Z',
    updatedAt: '2023-12-20T10:00:00Z',
  },
];

export const mockUser: User = {
  id: '1',
  email: 'john.doe@example.com',
  firstName: 'John',
  lastName: 'Doe',
  avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
  phone: '+1 (555) 123-4567',
  addresses: [
    {
      id: '1',
      type: 'shipping',
      firstName: 'John',
      lastName: 'Doe',
      street: '123 Main St',
      city: 'New York',
      state: 'NY',
      zipCode: '10001',
      country: 'United States',
      isDefault: true,
    },
    {
      id: '2',
      type: 'billing',
      firstName: 'John',
      lastName: 'Doe',
      street: '123 Main St',
      city: 'New York',
      state: 'NY',
      zipCode: '10001',
      country: 'United States',
      isDefault: true,
    },
  ],
  preferences: {
    newsletter: true,
    notifications: true,
    currency: 'USD',
    language: 'en',
  },
};

// Helper function to get products by category
export const getProductsByCategory = (category: string): Product[] => {
  return mockProducts.filter(product => 
    product.category.toLowerCase() === category.toLowerCase()
  );
};

// Helper function to search products
export const searchProducts = (query: string): Product[] => {
  const lowercaseQuery = query.toLowerCase();
  return mockProducts.filter(product =>
    product.name.toLowerCase().includes(lowercaseQuery) ||
    product.description.toLowerCase().includes(lowercaseQuery) ||
    product.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  );
};

// Helper function to get featured products
export const getFeaturedProducts = (): Product[] => {
  return mockProducts.filter(product => product.rating >= 4.5).slice(0, 4);
};

// Helper function to get product by ID
export const getProductById = (id: string): Product | undefined => {
  return mockProducts.find(product => product.id === id);
};
