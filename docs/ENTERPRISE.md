# Enterprise Features Guide

This document outlines the enterprise-grade features and capabilities of the Design System Vuetify.

## Table of Contents

1. [Accessibility (WCAG 2.1 AAA)](#accessibility-wcag-21-aaa)
2. [TypeScript Support](#typescript-support)
3. [Performance Optimization](#performance-optimization)
4. [Build System](#build-system)
5. [Testing Infrastructure](#testing-infrastructure)
6. [Design System Integration](#ds-bridge-integration)

---

## Accessibility (WCAG 2.1 AAA)

### Compliance Level

This design system achieves **WCAG 2.1 AAA** compliance, exceeding the standard AA requirements. This means:

- Enhanced color contrast ratios (7:1 minimum vs 4.5:1 for AA)
- Robust keyboard navigation support
- Complete screen reader compatibility
- Comprehensive focus management

### Accessibility Testing

We use **axe-core** for automated accessibility testing:

```bash
npm run test:a11y
```

This runs 20+ accessibility test cases covering:
- Color contrast validation
- Keyboard navigation
- ARIA attribute correctness
- Focus visibility
- Semantic HTML structure

### Keyboard Navigation

All components support full keyboard navigation:

- **Tab**: Move focus forward
- **Shift+Tab**: Move focus backward
- **Enter**: Activate buttons and submit forms
- **Space**: Toggle checkboxes and activate buttons
- **Arrow Keys**: Navigate within composite widgets (menus, tabs, etc.)

### Screen Reader Support

All components use semantic HTML and proper ARIA attributes:

```vue
<!-- Example: Button with accessible label -->
<ds-button aria-label="Close dialog">
  <v-icon icon="mdi-close" />
</ds-button>
```

### Accessibility Patterns

#### Focus Management

```vue
<template>
  <div role="dialog" aria-labelledby="dialog-title">
    <h2 id="dialog-title">Confirm Action</h2>
    <p>Are you sure?</p>
    <button ref="focusedButton">Yes</button>
    <button>No</button>
  </div>
</template>

<script>
export default {
  mounted() {
    // Focus the confirm button on dialog open
    this.$refs.focusedButton?.focus();
  },
};
</script>
```

#### ARIA Labels

```vue
<!-- For icon-only buttons -->
<ds-button aria-label="Save document">
  <v-icon icon="mdi-content-save" />
</ds-button>

<!-- For form inputs -->
<label for="email">Email Address</label>
<input id="email" type="email" />
```

#### Semantic HTML

```vue
<!-- Use semantic tags -->
<nav>Navigation</nav>
<main>Main content</main>
<aside>Sidebar</aside>
<footer>Footer</footer>
```

---

## TypeScript Support

### Type-Safe Components

All components include full TypeScript definitions:

```typescript
import { DsButton } from '@/components/Button.vue';

interface ButtonProps {
  variant?: 'filled' | 'outlined' | 'text';
  color?: string;
  disabled?: boolean;
  size?: 'sm' | 'md' | 'lg';
}
```

### Component Type Definitions

```typescript
// Import component types
import type { PropType } from 'vue';
import DsButton from '@/components/Button.vue';

// Use in templates with full type checking
const buttonProps: InstanceType<typeof DsButton>['$props'] = {
  variant: 'outlined',
  color: 'primary',
};
```

### Design Token Types

```typescript
import type { DesignTokens } from '@/tokens/types';

// Full type safety for token usage
const tokens: DesignTokens = {
  colors: {
    primary: '#1976d2',
    secondary: '#424242',
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
  },
};
```

### Type-Safe Props

```vue
<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  name: 'DsComponent',
  props: {
    variant: {
      type: String as PropType<'outlined' | 'filled'>,
      default: 'filled',
    },
    size: {
      type: String as PropType<'sm' | 'md' | 'lg'>,
      default: 'md',
    },
  },
});
</script>
```

---

## Performance Optimization

### Per-Component Exports

Import only what you need for optimal bundle sizes:

```typescript
// Good: Tree-shakeable import
import { DsButton } from '@/components/Button.js';
import { DsCard } from '@/components/Card.js';

// Avoid: Imports entire component library
import * as Components from '@/components/index.js';
```

### Bundle Size Analysis

Check component sizes:

```bash
npm run analyze
```

This generates a visual bundle analysis showing:
- Individual component sizes
- Token bundle size
- Total bundle breakdown
- Optimization opportunities

### Expected Bundle Sizes (gzipped)

- **Components bundle**: < 100kb
- **Tokens bundle**: < 5kb
- **Total with Vuetify**: < 250kb

### Tree-Shaking Benefits

```javascript
// Unused components are removed from production bundle
import { DsButton } from '@/components/Button.js';

// Only DsButton is included in the final bundle
// DsCard, DsInput, DsSelect are completely removed
```

---

## Build System

### Development

```bash
npm run dev
```

Starts Vite dev server with HMR (Hot Module Replacement) support.

### Production Build

```bash
npm run build
```

Generates optimized production builds:
- **dist/ds-bridge-vuetify.js** - ES module
- **dist/ds-bridge-vuetify.cjs** - CommonJS module
- **dist/ds-bridge-vuetify.d.ts** - TypeScript definitions

### Build Features

- **Minification**: Terser with console/debugger removal
- **Source Maps**: For debugging in production
- **CSS Processing**: Separate CSS files for better caching
- **Per-Component Exports**: Individual component bundles

### Per-Component Exports

Each component has its own entry point:

```javascript
// src/button.ts
export { default } from './components/Button.vue';
```

This enables fine-grained control over what gets bundled.

---

## Testing Infrastructure

### Unit Tests

Run all tests:

```bash
npm run test
```

Watch mode for development:

```bash
npm run test -- --watch
```

### Test Coverage

Generate coverage report:

```bash
npm run test:coverage
```

### Accessibility Tests

Tests include:

- **20+ accessibility test cases** covering WCAG 2.1 AAA
- **Component functionality tests** for all components
- **Integration tests** for complex workflows
- **Visual regression testing** with pixelmatch

### Test Examples

```typescript
// Component test
describe('DsButton', () => {
  it('renders with correct variant', () => {
    const wrapper = mount(DsButton, {
      props: { variant: 'outlined' },
    });
    expect(wrapper.classes()).toContain('ds-button--outlined');
  });

  it('supports keyboard activation', async () => {
    const wrapper = mount(DsButton);
    await wrapper.trigger('click');
    expect(wrapper.emitted('click')).toBeTruthy();
  });

  it('meets color contrast requirements', () => {
    // Test color contrast ratios
  });
});
```

---

## Design System Integration

### Figma Code Connect

Components are mapped to Figma designs:

```typescript
// Figma Code Connect mapping
// Node: 374:5183 (Button component in Figma)
// Maps to: src/components/Button.vue
// Component: DsButton
```

This allows:
- Designers to jump to code from Figma
- Developers to see design context
- Single source of truth for components

### Token Sync

Design tokens are structured for Figma sync:

```typescript
// Tokens structure (maps to Figma)
export const tokens = {
  colors: {
    primary: '#1976d2',
    secondary: '#424242',
  },
  spacing: {
    xs: '4px',
    sm: '8px',
  },
};
```

### Storybook Integration

Components documented in Storybook:

```bash
npm run storybook
```

Features:
- Isolated component development
- Interactive component explorer
- Automatic prop controls
- Dark mode support

### Design Tokens in Components

```vue
<script lang="ts">
import { tokens } from '@/tokens/index';

export default {
  data() {
    return {
      primaryColor: tokens.colors.primary,
      spacing: tokens.spacing.md,
    };
  },
};
</script>
```

---

## Best Practices

### 1. Use TypeScript

Always use TypeScript for type safety:

```typescript
// ✓ Good
const button: DsButton = getButton();

// ✗ Avoid
const button: any = getButton();
```

### 2. Tree-Shake Imports

Import only what you need:

```typescript
// ✓ Good
import { DsButton } from '@/components/Button.js';

// ✗ Avoid
import { DsButton, DsCard, DsInput } from '@/components/index.js';
```

### 3. Test Accessibility

Always test with keyboard navigation:

```typescript
// Test keyboard support
it('responds to keyboard events', () => {
  wrapper.trigger('keydown.enter');
  expect(wrapper.emitted('activate')).toBeTruthy();
});
```

### 4. Use Semantic HTML

Always use semantic HTML elements:

```vue
<!-- ✓ Good -->
<nav>Navigation</nav>
<button>Click me</button>

<!-- ✗ Avoid -->
<div role="navigation">Navigation</div>
<div @click="handleClick">Click me</div>
```

### 5. Document ARIA Labels

Add ARIA labels for clarity:

```vue
<!-- ✓ Good -->
<ds-button aria-label="Close dialog">
  <v-icon icon="mdi-close" />
</ds-button>

<!-- ✗ Avoid -->
<ds-button>
  <v-icon icon="mdi-close" />
</ds-button>
```

---

## Monitoring & Maintenance

### Bundle Size Monitoring

Track bundle size changes:

```bash
npm run analyze
```

Monitor the output to ensure sizes stay within budgets.

### Accessibility Audits

Run regular accessibility audits:

```bash
npm run test:a11y
```

Fix any violations before merging to main.

### Performance Metrics

Check performance during development:

```bash
npm run build
npm run preview
```

Use browser DevTools to measure:
- First Contentful Paint (FCP)
- Largest Contentful Paint (LCP)
- Cumulative Layout Shift (CLS)

### Type Checking

Ensure TypeScript has no errors:

```bash
npx tsc --noEmit
```

---

## Resources

- [WCAG 2.1 AAA Guidelines](https://www.w3.org/WAI/WCAG21/quickref/?currentsetting=aaa)
- [Vue 3 TypeScript Guide](https://vuejs.org/guide/typescript/overview.html)
- [Vuetify 3 Documentation](https://vuetifyjs.com/)
- [Vite Documentation](https://vitejs.dev/)
- [Figma Code Connect](https://figma.com/developers/api/code-connect)

---

## Support

For questions or issues:

1. Check existing [GitHub issues](https://github.com/chadwd/DS-Bridge/issues)
2. Review the [main README](../README.md)
3. Open a [new issue](https://github.com/chadwd/DS-Bridge/issues/new)

---

**Last Updated**: December 13, 2025
**Version**: 0.1.0
**Compliance**: WCAG 2.1 AAA
