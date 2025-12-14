# Getting Started

This guide will walk you through installing and using DS-Bridge in your Vue 3 application.

## Prerequisites

Before you begin, ensure you have:

- **Node.js** 16.x or higher
- **npm** 7.x or higher (or equivalent package manager)
- **Vue 3** project (or ready to create one)

## Installation

### Step 1: Install Dependencies

First, install DS-Bridge and its peer dependencies:

```bash
npm install ds-bridge vue@^3 vuetify@^3
```

### Step 2: Install Vuetify Icon Font (Optional)

If you plan to use Material Design Icons:

```bash
npm install @mdi/font
```

### Step 3: Configure Your Application

Import and register the design system in your main application file:

```javascript
// main.js
import { createApp } from 'vue';
import App from './App.vue';

// Import Vuetify and design system
import { createVuetify } from 'vuetify';
import { tokens } from 'ds-bridge/tokens';
import 'vuetify/styles';
import '@mdi/font/css/materialdesignicons.css';

// Create Vuetify instance with design system tokens
const vuetify = createVuetify({
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        colors: {
          primary: tokens.colors.primary,
          secondary: tokens.colors.secondary,
          error: tokens.colors.error,
          warning: tokens.colors.warning,
          success: tokens.colors.success,
          info: tokens.colors.info,
        },
      },
    },
  },
});

const app = createApp(App);
app.use(vuetify);
app.mount('#app');
```

## Using Components

### Importing Components

You can import components individually for optimal tree-shaking:

```vue
<template>
  <div>
    <DsButton @click="handleClick">Click me</DsButton>
  </div>
</template>

<script setup>
import { DsButton } from 'ds-bridge/components';

const handleClick = () => {
  console.log('Button clicked!');
};
</script>
```

### Using Design Tokens

Access design tokens directly in your components:

```vue
<template>
  <div :style="containerStyles">
    <h1>Hello World</h1>
  </div>
</template>

<script setup>
import { tokens } from 'ds-bridge/tokens';
import { computed } from 'vue';

const containerStyles = computed(() => ({
  padding: tokens.spacing.lg,
  backgroundColor: tokens.colors.background,
  fontFamily: tokens.typography.fontFamily.base,
}));
</script>
```

## Project Setup for Development

If you want to contribute to DS-Bridge or customize it for your needs:

### Clone the Repository

```bash
git clone https://github.com/chadwd/ds-bridge.git
cd ds-bridge
npm install
```

### Run the Development Server

Start the component playground:

```bash
npm run dev
```

The playground will open at `http://localhost:5173`.

### Run the Documentation Site

Start the documentation in development mode:

```bash
npm run docs:dev
```

The documentation will open at `http://localhost:5173/`.

### Run Tests

Execute the test suite:

```bash
# Run all tests
npm run test

# Run tests in watch mode
npm run test:watch

# Run tests with UI
npm run test:ui

# Generate coverage report
npm run test:coverage
```

### Linting and Type Checking

Ensure code quality:

```bash
# Check for linting issues
npm run lint

# Auto-fix linting issues
npm run lint:fix

# Run TypeScript type checking
npm run type-check
```

## Building for Production

### Build the Library

Create a production build of the component library:

```bash
npm run build:lib
```

This generates:
- ES modules in `dist/`
- Type definitions
- Minified CSS

### Build the Documentation

Build the static documentation site:

```bash
npm run docs:build
```

The built site will be in `docs/.vitepress/dist/`.

## Configuration

### Customizing Design Tokens

To customize the design system for your brand:

1. Fork or clone the repository
2. Modify `src/tokens/index.ts` with your brand colors, fonts, and spacing
3. Update `src/plugins/vuetify.ts` to apply your tokens
4. Rebuild the library

Example token customization:

```typescript
// src/tokens/index.ts
export const colors = {
  primary: '#YOUR_PRIMARY_COLOR',
  secondary: '#YOUR_SECONDARY_COLOR',
  // ... other colors
};

export const typography = {
  fontFamily: {
    base: 'Your Font, sans-serif',
    // ... other fonts
  },
  // ... other typography settings
};
```

### Vuetify Theme Configuration

Customize Vuetify's theme settings in `src/plugins/vuetify.ts`:

```typescript
import { createVuetify } from 'vuetify';
import { tokens } from '../tokens';

export default createVuetify({
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        colors: {
          primary: tokens.colors.primary,
          secondary: tokens.colors.secondary,
          // Add your custom colors
        },
      },
      dark: {
        colors: {
          // Dark mode colors
        },
      },
    },
  },
});
```

## IDE Setup

### VS Code Extensions

For the best development experience, install:

- **Volar**: Vue 3 language support
- **ESLint**: Code linting
- **Prettier**: Code formatting
- **TypeScript Vue Plugin**: Enhanced TypeScript support

### TypeScript Configuration

The project uses strict TypeScript settings. Your IDE should automatically pick up the `tsconfig.json` configuration.

## Troubleshooting

### Common Issues

**Issue**: Components don't have proper styling
```bash
# Make sure you imported Vuetify styles
import 'vuetify/styles';
```

**Issue**: Icons not showing
```bash
# Install and import Material Design Icons
npm install @mdi/font
import '@mdi/font/css/materialdesignicons.css';
```

**Issue**: Type errors in TypeScript
```bash
# Run type checking to see detailed errors
npm run type-check
```

**Issue**: Build fails
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

## Next Steps

Now that you have DS-Bridge set up:

1. **Explore Components**: Check out the [component library](/components/button)
2. **Learn Design Tokens**: Understand the [token system](/design/tokens)
3. **Read the Philosophy**: Learn about our [design principles](/guide/philosophy)
4. **Build Something**: Start creating with consistent, accessible components

## Need Help?

- Review the [component documentation](/components/button)
- Check the [design tokens reference](/design/tokens)
- Read about [accessibility features](/design/style-guide)

---

**Happy building!** 🚀
