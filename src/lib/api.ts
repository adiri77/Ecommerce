// Mock API utilities for E-commerce application
import type { 
  Product, 
  ProductCategory, 
  User, 
  LoginCredentials, 
  RegisterCredentials,
  SearchFilters,
  SearchResults,
  Order,
  ApiResponse 
} from '../types';
import { 
  mockProducts, 
  mockCategories, 
  mockUser, 
  getProductsByCategory, 
  searchProducts, 
  getFeaturedProducts,
  getProductById 
} from './mockData';

// Simulate API delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Mock API class
export class MockAPI {
  // Authentication
  static async login(credentials: LoginCredentials): Promise<ApiResponse<{ user: User; token: string }>> {
    await delay(1000);
    
    // Simple mock validation
    if (credentials.email === 'john.doe@example.com' && credentials.password === 'password') {
      const token = 'mock-jwt-token-' + Date.now();
      localStorage.setItem('authToken', token);
      
      return {
        success: true,
        data: {
          user: mockUser,
          token,
        },
        message: 'Login successful',
      };
    }
    
    throw new Error('Invalid credentials');
  }

  static async register(credentials: RegisterCredentials): Promise<ApiResponse<{ user: User; token: string }>> {
    await delay(1200);
    
    const newUser: User = {
      ...mockUser,
      id: Date.now().toString(),
      email: credentials.email,
      firstName: credentials.firstName,
      lastName: credentials.lastName,
    };
    
    const token = 'mock-jwt-token-' + Date.now();
    localStorage.setItem('authToken', token);
    
    return {
      success: true,
      data: {
        user: newUser,
        token,
      },
      message: 'Registration successful',
    };
  }

  static async logout(): Promise<ApiResponse<null>> {
    await delay(500);
    localStorage.removeItem('authToken');
    
    return {
      success: true,
      data: null,
      message: 'Logout successful',
    };
  }

  static async getCurrentUser(): Promise<ApiResponse<User>> {
    await delay(800);
    const token = localStorage.getItem('authToken');
    
    if (!token) {
      throw new Error('No authentication token found');
    }
    
    return {
      success: true,
      data: mockUser,
    };
  }

  // Products
  static async getProducts(page = 1, limit = 12): Promise<ApiResponse<{ products: Product[]; total: number }>> {
    await delay(600);
    
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const products = mockProducts.slice(startIndex, endIndex);
    
    return {
      success: true,
      data: {
        products,
        total: mockProducts.length,
      },
    };
  }

  static async getProduct(id: string): Promise<ApiResponse<Product>> {
    await delay(400);
    
    const product = getProductById(id);
    if (!product) {
      throw new Error('Product not found');
    }
    
    return {
      success: true,
      data: product,
    };
  }

  static async getFeaturedProducts(): Promise<ApiResponse<Product[]>> {
    await delay(500);
    
    return {
      success: true,
      data: getFeaturedProducts(),
    };
  }

  static async searchProducts(filters: SearchFilters): Promise<ApiResponse<SearchResults>> {
    await delay(700);
    
    let filteredProducts = mockProducts;
    
    // Apply search query
    if (filters.query) {
      filteredProducts = searchProducts(filters.query);
    }
    
    // Apply category filter
    if (filters.category) {
      filteredProducts = filteredProducts.filter(p => 
        p.category.toLowerCase() === filters.category?.toLowerCase()
      );
    }
    
    // Apply brand filter
    if (filters.brand && filters.brand.length > 0) {
      filteredProducts = filteredProducts.filter(p => 
        filters.brand?.includes(p.brand)
      );
    }
    
    // Apply price range filter
    if (filters.priceRange) {
      const [min, max] = filters.priceRange;
      filteredProducts = filteredProducts.filter(p => 
        p.price >= min && p.price <= max
      );
    }
    
    // Apply rating filter
    if (filters.rating) {
      filteredProducts = filteredProducts.filter(p => 
        p.rating >= filters.rating!
      );
    }
    
    // Apply stock filter
    if (filters.inStock) {
      filteredProducts = filteredProducts.filter(p => p.inStock);
    }
    
    // Apply sorting
    if (filters.sortBy) {
      filteredProducts.sort((a, b) => {
        let aValue: any, bValue: any;
        
        switch (filters.sortBy) {
          case 'name':
            aValue = a.name;
            bValue = b.name;
            break;
          case 'price':
            aValue = a.price;
            bValue = b.price;
            break;
          case 'rating':
            aValue = a.rating;
            bValue = b.rating;
            break;
          case 'newest':
            aValue = new Date(a.createdAt);
            bValue = new Date(b.createdAt);
            break;
          default:
            return 0;
        }
        
        if (filters.sortOrder === 'desc') {
          return aValue < bValue ? 1 : -1;
        }
        return aValue > bValue ? 1 : -1;
      });
    }
    
    // Generate filter aggregations
    const categories = mockCategories.map(cat => ({
      name: cat.name,
      count: mockProducts.filter(p => p.category === cat.name).length,
    }));
    
    const brands = Array.from(new Set(mockProducts.map(p => p.brand))).map(brand => ({
      name: brand,
      count: mockProducts.filter(p => p.brand === brand).length,
    }));
    
    const prices = mockProducts.map(p => p.price);
    const priceRange: [number, number] = [Math.min(...prices), Math.max(...prices)];
    
    return {
      success: true,
      data: {
        products: filteredProducts,
        total: filteredProducts.length,
        filters: {
          categories,
          brands,
          priceRange,
        },
      },
    };
  }

  // Categories
  static async getCategories(): Promise<ApiResponse<ProductCategory[]>> {
    await delay(300);
    
    return {
      success: true,
      data: mockCategories,
    };
  }

  static async getProductsByCategory(categorySlug: string): Promise<ApiResponse<Product[]>> {
    await delay(500);
    
    const category = mockCategories.find(cat => cat.slug === categorySlug);
    if (!category) {
      throw new Error('Category not found');
    }
    
    const products = getProductsByCategory(category.name);
    
    return {
      success: true,
      data: products,
    };
  }

  // Orders (mock implementation)
  static async createOrder(orderData: any): Promise<ApiResponse<Order>> {
    await delay(1500);
    
    const mockOrder: Order = {
      id: Date.now().toString(),
      orderNumber: `ORD-${Date.now()}`,
      status: 'confirmed',
      items: orderData.items,
      subtotal: orderData.subtotal,
      tax: orderData.tax,
      shipping: orderData.shipping,
      total: orderData.total,
      shippingAddress: orderData.shippingAddress,
      billingAddress: orderData.billingAddress,
      paymentMethod: orderData.paymentMethod,
      createdAt: new Date().toISOString(),
      estimatedDelivery: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
    };
    
    return {
      success: true,
      data: mockOrder,
      message: 'Order created successfully',
    };
  }

  static async getOrders(): Promise<ApiResponse<Order[]>> {
    await delay(800);
    
    // Return empty array for demo
    return {
      success: true,
      data: [],
    };
  }
}

export default MockAPI;
