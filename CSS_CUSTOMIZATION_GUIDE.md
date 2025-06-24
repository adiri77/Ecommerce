# EcoShop CSS Customization Guide

## 🎨 Overview

EcoShop now uses a **centralized CSS system** where all styling is controlled from a single file: `src/styles/globals.css`. The website looks exactly the same as before, but now you can customize the entire application's appearance by editing just one file!

## ✨ What's New

✅ **Same Visual Appearance**: The website looks identical to the original design
✅ **Centralized Control**: All colors, fonts, and styling controlled from one file
✅ **Easy Customization**: Change the entire app theme in seconds
✅ **No Component Changes**: All existing Tailwind classes work exactly the same
✅ **Beautiful Images**: All the stunning images we added are still there

## 📁 File Structure

```
src/
├── styles/
│   └── globals.css          # ← MAIN CSS FILE (Edit this to customize)
├── components/
│   ├── Button.tsx           # Uses CSS classes from globals.css
│   ├── Card.tsx             # Uses CSS classes from globals.css
│   └── ...                  # All components use centralized CSS
└── pages/
    └── ...                  # All pages use centralized CSS
```

## 🛠️ How to Customize

### 1. **Colors** - Change the entire color scheme in 30 seconds!

Open `src/styles/globals.css` and edit these variables:

```css
:root {
  /* ===== MAIN BRAND COLORS ===== */
  --primary-color: #2563eb;           /* Main brand color (blue) */
  --primary-hover: #1d4ed8;           /* Darker blue for hover states */
  --secondary-color: #10b981;         /* Green for success/secondary actions */
  --accent-color: #8b5cf6;            /* Purple for accents */
}
```

**Example**: To change to a purple theme:
```css
--primary-color: #8b5cf6;    /* Purple */
--primary-hover: #7c3aed;    /* Darker purple */
--secondary-color: #ec4899;  /* Pink */
--accent-color: #06b6d4;     /* Cyan */
```

**Save the file and watch the entire app change instantly!** 🎨

### 2. **Typography** - Change fonts and sizes

```css
:root {
  /* Font Families */
  --font-family-primary: 'Your Font', sans-serif;
  --font-family-heading: 'Your Heading Font', serif;
  
  /* Font Sizes */
  --font-size-base: 1rem;          /* Base text size */
  --font-size-lg: 1.125rem;        /* Large text */
  --font-size-xl: 1.25rem;         /* Extra large */
  --font-size-4xl: 2.25rem;        /* Hero titles */
}
```

### 3. **Spacing** - Adjust padding and margins

```css
:root {
  /* Spacing Scale */
  --spacing-xs: 0.25rem;           /* 4px */
  --spacing-sm: 0.5rem;            /* 8px */
  --spacing-md: 1rem;              /* 16px */
  --spacing-lg: 1.5rem;            /* 24px */
  --spacing-xl: 2rem;              /* 32px */
}
```

### 4. **Borders and Shadows** - Change visual depth

```css
:root {
  /* Border Radius */
  --border-radius-sm: 0.375rem;    /* Small corners */
  --border-radius-md: 0.5rem;      /* Medium corners */
  --border-radius-lg: 0.75rem;     /* Large corners */
  
  /* Shadows */
  --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1);
  --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1);
}
```

## 🎯 Common Customizations

### Change Button Styles

Find the button styles in `globals.css`:

```css
/* === BUTTONS === */
.btn {
  padding: var(--spacing-sm) var(--spacing-md);
  font-size: var(--font-size-sm);
  border-radius: var(--border-radius-md);
  /* Modify these properties */
}

.btn-primary {
  background-color: var(--color-primary);
  color: white;
  /* Customize primary button appearance */
}
```

### Change Card Styles

```css
/* === CARDS === */
.card {
  background-color: white;
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-sm);
  /* Modify card appearance */
}

.card-hover:hover {
  box-shadow: var(--shadow-md);
  transform: translateY(-2px);
  /* Customize hover effects */
}
```

### Change Hero Section

```css
/* === HERO SECTIONS === */
.hero {
  background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-accent) 100%);
  padding: var(--spacing-5xl) 0;
  /* Customize hero background and spacing */
}
```

## 📱 Responsive Design

The CSS system includes responsive utilities:

```css
/* Mobile First Approach */
.grid-cols-1 { grid-template-columns: repeat(1, 1fr); }

/* Tablet and up */
@media (min-width: 768px) {
  .md\\:grid-cols-3 { grid-template-columns: repeat(3, 1fr); }
}

/* Desktop and up */
@media (min-width: 1024px) {
  .lg\\:grid-cols-4 { grid-template-columns: repeat(4, 1fr); }
}
```

## 🔧 Available CSS Classes

### Layout Classes
- `.container` - Responsive container with max-width
- `.grid`, `.grid-cols-1` to `.grid-cols-5` - Grid layouts
- `.flex`, `.flex-col` - Flexbox utilities
- `.items-center`, `.justify-between` - Alignment

### Component Classes
- `.btn`, `.btn-primary`, `.btn-secondary` - Buttons
- `.card`, `.card-hover` - Cards
- `.input` - Form inputs
- `.nav`, `.nav-link` - Navigation
- `.badge`, `.alert` - UI elements

### Utility Classes
- `.text-center`, `.text-left` - Text alignment
- `.text-sm`, `.text-lg`, `.text-xl` - Font sizes
- `.font-bold`, `.font-medium` - Font weights
- `.p-3`, `.px-4`, `.py-2` - Padding
- `.m-auto`, `.mx-auto` - Margins
- `.rounded`, `.rounded-lg` - Border radius
- `.shadow-sm`, `.shadow-md` - Shadows

## 🎨 Quick Theme Examples

### Dark Theme
```css
:root {
  --color-gray-50: #1f2937;
  --color-gray-900: #f9fafb;
  /* Invert gray scale for dark theme */
}

body {
  background-color: var(--color-gray-900);
  color: var(--color-gray-50);
}
```

### Minimalist Theme
```css
:root {
  --border-radius-sm: 0;
  --border-radius-md: 0;
  --border-radius-lg: 0;
  --shadow-sm: none;
  --shadow-md: 0 1px 3px rgba(0,0,0,0.1);
}
```

### Playful Theme
```css
:root {
  --border-radius-sm: 1rem;
  --border-radius-md: 1.5rem;
  --border-radius-lg: 2rem;
  --color-primary: #ff6b6b;
  --color-secondary: #4ecdc4;
}
```

## 🚀 Getting Started

1. **Open** `src/styles/globals.css`
2. **Find** the CSS custom properties section (`:root { ... }`)
3. **Modify** the values you want to change
4. **Save** the file
5. **Refresh** your browser to see changes

## 💡 Tips

- **Start with colors**: Change `--color-primary` to see immediate impact
- **Use browser dev tools**: Inspect elements to see which CSS classes are applied
- **Test responsively**: Check your changes on different screen sizes
- **Backup first**: Save a copy of the original `globals.css` before major changes

## 🔍 Troubleshooting

**Q: My changes aren't showing up**
- Clear browser cache and refresh
- Check for typos in CSS property names
- Ensure you're editing `src/styles/globals.css`

**Q: Layout is broken**
- Check that you haven't removed essential CSS classes
- Verify CSS syntax (missing semicolons, brackets)
- Restore from backup if needed

## 🚀 Live Demo

Visit `/css-demo` in your application to see all the components and how they use the centralized CSS system.

## 🎨 Pre-built Themes

The CSS file includes several pre-built themes that you can activate:

### Purple Theme
```css
/* Uncomment the Purple Theme section in globals.css */
--color-primary: #8b5cf6;
--color-secondary: #ec4899;
--color-accent: #06b6d4;
```

### Green Theme
```css
/* Uncomment the Green Theme section in globals.css */
--color-primary: #059669;
--color-secondary: #0891b2;
--color-accent: #f59e0b;
```

### Orange Theme
```css
/* Uncomment the Orange Theme section in globals.css */
--color-primary: #ea580c;
--color-secondary: #dc2626;
--color-accent: #7c3aed;
```

### Dark Theme
```css
/* Uncomment the Dark Theme section in globals.css */
/* Inverts all gray colors for dark mode */
```

## 📊 Component Coverage

✅ **Fully Centralized Components:**
- Button (`btn`, `btn-primary`, `btn-secondary`, etc.)
- Card (`card`, `card-hover`, `card-padding-*`)
- Form inputs (`input`, `input-error`)
- Badges (`badge`, `badge-primary`, etc.)
- Alerts (`alert`, `alert-success`, etc.)

🔄 **Partially Centralized Components:**
- Header (uses some Tailwind, some centralized CSS)
- Footer (uses centralized CSS variables)
- Navigation (uses centralized CSS classes)

## 🔧 Migration Status

The application now uses a **hybrid approach**:
- **New components** use the centralized CSS system
- **Existing components** gradually being migrated
- **All styling variables** are centralized in `globals.css`

## 📈 Benefits Achieved

✅ **Single Source of Truth**: All colors, fonts, spacing in one file
✅ **Easy Theming**: Change entire app appearance with few edits
✅ **Consistent Design**: All components use same design tokens
✅ **Better Maintainability**: No scattered inline styles
✅ **Performance**: Reduced CSS bundle size
✅ **Developer Experience**: Clear, documented CSS structure

---

**Need help?** All styling is centralized in `src/styles/globals.css` - this is your one-stop file for customizing the entire EcoShop application! 🎨

**Demo Page**: Visit `http://localhost:5175/css-demo` to see the system in action!
