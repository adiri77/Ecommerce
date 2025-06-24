# 🛒 EcoShop - Modern E-commerce Application

A comprehensive e-commerce web application built with React, TypeScript, and Tailwind CSS. EcoShop provides a complete shopping experience with product browsing, cart management, user authentication, and responsive design.

## ✨ Features

### 🛍️ **E-commerce Functionality**
- **Product Catalog** - Browse products with detailed information, images, and ratings
- **Shopping Cart** - Add/remove items, quantity management, and real-time total calculation
- **Wishlist** - Save favorite products for later purchase
- **Product Search** - Find products quickly with search functionality
- **Categories** - Browse products by categories
- **Product Details** - Detailed product pages with image galleries and specifications
- **Recently Viewed** - Track and display recently viewed products

### 🔐 **User Management**
- **User Authentication** - Login and registration system
- **User Account** - Profile management and order history
- **Guest Checkout** - Shop without creating an account

### 💻 **Technical Features**
- ⚡ **Vite** - Lightning fast development with hot module replacement
- 🔧 **TypeScript** - Full type safety and excellent developer experience
- 🎨 **Tailwind CSS** - Comprehensive utility-first CSS framework with custom configuration
- 📱 **Responsive Design** - Mobile-first design that works on all devices
- 🔄 **React Router** - Client-side routing for seamless navigation
- 🌐 **Axios** - HTTP client for API requests
- 🎯 **ESLint** - Code linting for consistent code quality
- 📦 **Component Architecture** - Reusable and modular components
- 🗃️ **State Management** - React Context for global state management

## 🌐 Live Demo & Screenshots

### Main Pages
- **Home Page** - Hero section with featured products and categories
- **Products Page** - Product grid with filtering and sorting
- **Product Detail** - Detailed product view with image gallery
- **Shopping Cart** - Cart management with quantity controls
- **User Authentication** - Login and registration forms

## 📁 Project Structure

```
my-app/
│
├── public/                    # Static assets
│   ├── favicon.svg
│   └── vite.svg
│
├── src/                       # Main source code
│   ├── assets/                # Images, fonts, and static resources
│   │
│   ├── components/            # Reusable UI components
│   │   ├── Button.tsx         # Customizable button component
│   │   ├── Card.tsx           # Card container component
│   │   ├── Header.tsx         # Navigation header
│   │   ├── ProductCard.tsx    # Product display card
│   │   └── SearchBar.tsx      # Search functionality
│   │
│   ├── hooks/                 # Custom React hooks
│   │   └── useDebounce.ts     # Debounce hook for search
│   │
│   ├── lib/                   # Utility functions and helpers
│   │   ├── axios.ts           # API client configuration
│   │   ├── mockData.ts        # Mock data for development
│   │   └── utils.ts           # Utility functions (formatting, validation)
│   │
│   ├── pages/                 # Page components
│   │   ├── Home.tsx           # Landing page with hero and featured products
│   │   ├── Products.tsx       # Product listing page
│   │   ├── ProductDetail.tsx  # Individual product page
│   │   ├── Cart.tsx           # Shopping cart page
│   │   └── Login.tsx          # Authentication page
│   │
│   ├── routes/                # Route definitions and navigation
│   │   └── index.tsx          # Main routing configuration
│   │
│   ├── styles/                # Global styles and CSS
│   │   └── globals.css        # Global styles with Tailwind utilities
│   │
│   ├── store/                 # State management
│   │   └── index.ts           # React Context store for cart, auth, wishlist
│   │
│   ├── types/                 # TypeScript type definitions
│   │   └── index.d.ts         # Global types (Product, User, Cart, etc.)
│   │
│   ├── App.tsx                # Root component
│   ├── main.tsx               # Vite entry point
│   └── vite-env.d.ts          # Vite environment types
│
├── dist/                      # Production build output
├── .env                       # Environment variables
├── index.html                 # HTML entry point
├── package.json               # Dependencies and scripts
├── tailwind.config.js         # Comprehensive Tailwind configuration
├── postcss.config.js          # PostCSS configuration
├── tsconfig.json              # TypeScript configuration
├── tsconfig.app.json          # App-specific TypeScript config
├── tsconfig.node.json         # Node-specific TypeScript config
├── eslint.config.js           # ESLint configuration
└── vite.config.ts             # Vite configuration
```

## 🚀 Quick Start

### Prerequisites
- **Node.js** (v20 or higher) - Required for latest React Router and ESLint versions
- **Yarn** package manager (recommended) or npm

> **Note**: While the project can run with Node.js v18.16+, some packages may show compatibility warnings. For the best experience, use Node.js v20 or higher.

### Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd my-app
   ```

2. **Install Yarn globally (if not already installed):**
   ```bash
   npm install -g yarn
   ```

3. **Install dependencies:**
   ```bash
   yarn install
   ```

4. **Start development server:**
   ```bash
   yarn dev
   ```
   The application will be available at `http://localhost:5173`

5. **Build for production:**
   ```bash
   yarn build
   ```

6. **Preview production build:**
   ```bash
   yarn preview
   ```

## 📝 Available Scripts

| Command | Description |
|---------|-------------|
| `yarn dev` | Start development server with hot reload |
| `yarn build` | Build optimized production bundle |
| `yarn preview` | Preview production build locally |
| `yarn lint` | Run ESLint for code quality checks |

### Alternative with npm
If you prefer to use npm instead of yarn:

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build optimized production bundle |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint for code quality checks |

## 🏗️ Application Architecture

### State Management
The application uses **React Context** for global state management, handling:
- **Authentication State** - User login status and profile
- **Shopping Cart** - Cart items, quantities, and totals
- **Wishlist** - Saved products for later
- **Recently Viewed** - Product browsing history

### Component Structure
- **Atomic Design** - Components are organized from simple to complex
- **Reusable Components** - Button, Card, SearchBar for consistency
- **Page Components** - Full page layouts and functionality
- **Custom Hooks** - Shared logic like debouncing and API calls

## ⚙️ Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
# API Configuration
VITE_API_BASE_URL=http://localhost:3001/api

# Application Settings
VITE_APP_NAME=EcoShop
VITE_APP_VERSION=1.0.0

# Feature Flags
VITE_ENABLE_ANALYTICS=true
VITE_ENABLE_PAYMENT=true
```

### Tailwind CSS Configuration

The application uses a comprehensive Tailwind CSS setup with:

- **Custom Color Palette** - Primary, secondary, success, warning, danger colors
- **Extended Theme** - Custom spacing, fonts, shadows, and animations
- **Responsive Design** - Mobile-first approach with custom breakpoints
- **Component Classes** - Pre-built button, card, and form styles
- **Utility Classes** - Extensive utility classes for rapid development

Key Tailwind features:
```javascript
// Custom colors
colors: {
  primary: { 50: '#eff6ff', 500: '#3b82f6', 700: '#1d4ed8' },
  // ... more colors
}

// Custom animations
animation: {
  'fade-in': 'fadeIn 0.3s ease-in-out',
  'slide-up': 'slideUp 0.3s ease-out',
}
```

## 🛒 E-commerce Features

### Product Management
- **Product Catalog** - Display products with images, prices, and ratings
- **Product Details** - Comprehensive product pages with specifications
- **Product Search** - Real-time search with debouncing
- **Categories** - Organize products by categories
- **Filtering & Sorting** - Filter by price, rating, category

### Shopping Experience
- **Shopping Cart** - Add/remove items, quantity management
- **Wishlist** - Save products for later purchase
- **Recently Viewed** - Track user browsing history
- **Price Calculation** - Automatic tax and shipping calculation
- **Responsive Design** - Optimized for mobile and desktop

### User Features
- **Authentication** - Login and registration system
- **User Profiles** - Manage account information
- **Order History** - Track past purchases
- **Guest Checkout** - Shop without account creation

## 🎨 Design System

### Component Library
- **Button** - Multiple variants (primary, secondary, danger, outline)
- **Card** - Flexible container with padding options
- **ProductCard** - Specialized product display component
- **SearchBar** - Search functionality with real-time results
- **Header** - Navigation with cart and user controls

### Styling Approach
- **Utility-First** - Tailwind CSS for rapid development
- **Component Classes** - Reusable component styles
- **Responsive Design** - Mobile-first responsive approach
- **Dark Mode Ready** - Prepared for dark mode implementation

## 🚀 Deployment

### Build for Production
```bash
# Create optimized production build
yarn build

# Preview production build locally
yarn preview
```

### Deployment Options
- **Vercel** - Recommended for React applications
- **Netlify** - Easy deployment with continuous integration
- **GitHub Pages** - Free hosting for static sites
- **AWS S3** - Scalable cloud hosting
- **Docker** - Containerized deployment

### Build Output
The `dist` folder contains:
- Optimized JavaScript bundles
- Minified CSS files
- Static assets
- HTML entry point

## 📦 Package Management

This project uses **Yarn** as the primary package manager for better dependency resolution and faster installs.

### Adding Dependencies
```bash
# Add a production dependency
yarn add <package-name>

# Add a development dependency
yarn add -D <package-name>

# Add a specific version
yarn add <package-name>@<version>
```

### Removing Dependencies
```bash
# Remove a dependency
yarn remove <package-name>
```

### Updating Dependencies
```bash
# Update all dependencies
yarn upgrade

# Update a specific dependency
yarn upgrade <package-name>

# Check for outdated packages
yarn outdated
```

### Yarn-Specific Features
- **Yarn Workspaces** - Ready for monorepo setup
- **Offline Mode** - Install packages from cache when offline
- **Deterministic Installs** - Consistent installs across environments
- **Parallel Downloads** - Faster package installation

## 🧪 Testing

### Running Tests
```bash
# Run unit tests
yarn test

# Run tests in watch mode
yarn test:watch

# Generate coverage report
yarn test:coverage
```

### Testing Strategy
- **Unit Tests** - Component and utility function testing
- **Integration Tests** - Feature workflow testing
- **E2E Tests** - Full application flow testing

## 📚 Documentation & Resources

### Project Documentation
- **Component Documentation** - Detailed component API docs
- **API Documentation** - Backend API integration guide
- **Deployment Guide** - Step-by-step deployment instructions

### External Resources
- [Vite Documentation](https://vitejs.dev/) - Build tool and development server
- [React Documentation](https://react.dev/) - React framework guide
- [TypeScript Documentation](https://www.typescriptlang.org/) - TypeScript language reference
- [Tailwind CSS Documentation](https://tailwindcss.com/) - CSS framework guide
- [React Router Documentation](https://reactrouter.com/) - Client-side routing

## 🤝 Contributing

### Development Workflow
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Code Standards
- **ESLint** - Follow configured linting rules
- **TypeScript** - Maintain type safety
- **Component Structure** - Follow established patterns
- **Commit Messages** - Use conventional commit format

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

For support and questions:
- **Issues** - Create GitHub issues for bugs and feature requests
- **Discussions** - Use GitHub discussions for general questions
- **Documentation** - Check the docs folder for detailed guides

---

**EcoShop** - Built with ❤️ using React, TypeScript, and Tailwind CSS
# Ecommerce
