# Design Tokens

Design tokens are the single source of truth for all design values in DS-Bridge. They ensure consistency across components, applications, and even between your codebase and Figma designs.

## What are Design Tokens?

Design tokens are named entities that store visual design attributes. Instead of hardcoding values like `#6366F1` or `16px` throughout your codebase, you use semantic names like `colors.primary` or `spacing.md`.

### Benefits

- **Consistency**: Use the same values everywhere
- **Maintainability**: Update once, change everywhere
- **Clarity**: Semantic names convey intent
- **Sync with Figma**: Bridge design and code
- **Themability**: Easy to create variants (light/dark, brand variations)

## Token Categories

DS-Bridge organizes tokens into logical categories:

| Category | Purpose | Examples |
|----------|---------|----------|
| [Colors](/design/colors) | Brand colors, semantic colors, surfaces | `primary`, `error`, `surface` |
| [Typography](/design/typography) | Font families, sizes, weights, line heights | `fontFamily.base`, `fontSize.lg` |
| [Spacing](/design/spacing) | Margins, padding, gaps | `xs`, `sm`, `md`, `lg`, `xl` |
| Shadows | Elevation and depth | `elevation02`, `md`, `lg` |
| Border Radius | Corner rounding | `sm`, `md`, `full` |

## Using Design Tokens

### In Components

Import and use tokens in your Vue components:

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
  backgroundColor: tokens.colors.surface,
  fontFamily: tokens.typography.fontFamily.base,
  borderRadius: tokens.borderRadius.md,
  boxShadow: tokens.shadows.sm,
}));
</script>
```

### In CSS

Tokens are exported as CSS custom properties:

```css
.custom-component {
  /* Use design system tokens */
  color: var(--ds-color-text-high);
  padding: var(--ds-spacing-md);
  font-family: var(--ds-font-family-base);
  background-color: var(--ds-color-surface);
}
```

### In JavaScript/TypeScript

Access tokens directly:

```typescript
import { tokens } from 'ds-bridge/tokens';

const buttonPadding = tokens.spacing.md;        // '16px'
const primaryColor = tokens.colors.primary;      // '#6366F1'
const baseFontSize = tokens.typography.fontSize.base; // '16px'
```

## Token Structure

All tokens follow a consistent naming convention:

```
{category}.{property}.{variant}
```

### Examples

```typescript
colors.primary           // Primary brand color
colors.primaryDark       // Darker variant of primary
spacing.md               // Medium spacing (16px)
typography.fontSize.lg   // Large font size
shadows.elevation02      // Material elevation 2dp
borderRadius.sm          // Small border radius
```

## Figma Integration

DS-Bridge tokens are designed to sync 1-to-1 with Figma variables:

| Code Token | Figma Variable |
|------------|----------------|
| `colors.primary` | `Colors/Primary` |
| `spacing.md` | `Spacing/MD` |
| `typography.fontSize.base` | `Typography/Sizes/font-size-16` |
| `shadows.elevation02` | `Elevations/Elevation 02 dp` |

This enables:
- **Design-to-code sync**: Export Figma variables to code tokens
- **Code-to-design sync**: Update Figma from code changes
- **Single source of truth**: Designers and developers use same values

## Token Reference

### Quick Access

- **[Colors](/design/colors)**: Complete color palette with swatches
- **[Typography](/design/typography)**: Font system and type scale
- **[Spacing](/design/spacing)**: Layout and spacing grid
- **[Shadows](#shadows)**: Elevation system
- **[Border Radius](#border-radius)**: Corner rounding options

## Shadows

Material Design-inspired elevation system:

```typescript
export const shadows = {
  none: 'none',
  xs: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  sm: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
  base: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  md: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  lg: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  xl: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',

  // Material Design elevations
  elevation00: '0 0 0 0 rgba(0, 0, 0, 0.2), 0 0 0 0 rgba(0, 0, 0, 0.14), 0 0 0 0 rgba(0, 0, 0, 0.12)',
  elevation02: '0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2)',
};
```

**Usage**:

```vue
<div :style="{ boxShadow: tokens.shadows.md }">
  Elevated card
</div>
```

## Border Radius

Corner rounding options for elements:

```typescript
export const borderRadius = {
  none: '0',
  xs: '4px',
  sm: '6px',
  md: '8px',
  lg: '12px',
  xl: '16px',
  full: '9999px',  // For pills and circular elements
};
```

**Usage**:

```vue
<!-- Rounded button -->
<button :style="{ borderRadius: tokens.borderRadius.md }">
  Click me
</button>

<!-- Pill button -->
<button :style="{ borderRadius: tokens.borderRadius.full }">
  Pill Button
</button>
```

## Customizing Tokens

To customize DS-Bridge for your brand:

### 1. Fork the Repository

```bash
git clone https://github.com/yourusername/DS-Bridge.git
cd ds-bridge
```

### 2. Edit Token Values

Modify `src/tokens/index.ts`:

```typescript
export const colors = {
  primary: '#YOUR_BRAND_COLOR',      // Change primary color
  secondary: '#YOUR_ACCENT_COLOR',   // Change secondary color
  // ... other customizations
};

export const typography = {
  fontFamily: {
    base: 'Your Font, sans-serif',  // Change font family
  },
  // ... other customizations
};
```

### 3. Rebuild

```bash
npm run build
```

### 4. Sync with Figma (Optional)

Export your tokens to Figma using Figma Variables or a plugin like Tokens Studio.

## Token Validation

Tokens are TypeScript-typed for safety:

```typescript
export type ColorToken = typeof colors;
export type SpacingToken = typeof spacing;
export type TypographyToken = typeof typography;

export interface DesignTokens {
  colors: ColorToken;
  spacing: SpacingToken;
  typography: TypographyToken;
  borderRadius: BorderRadiusToken;
  shadows: ShadowToken;
}
```

This ensures:
- IntelliSense autocomplete
- Type checking at compile time
- Prevents typos and invalid values

## Best Practices

### DO

✅ Use semantic token names
```typescript
const primaryColor = tokens.colors.primary;
```

✅ Use tokens for all design values
```vue
<div :style="{ padding: tokens.spacing.md }">
```

✅ Create custom tokens for repeated values
```typescript
const customTokens = {
  headerHeight: '64px',
  sidebarWidth: '240px',
};
```

### DON'T

❌ Hardcode color values
```typescript
// Bad
const color = '#6366F1';

// Good
const color = tokens.colors.primary;
```

❌ Use arbitrary spacing values
```vue
<!-- Bad -->
<div style="padding: 17px">

<!-- Good -->
<div :style="{ padding: tokens.spacing.md }">
```

❌ Mix token and hardcoded values
```vue
<!-- Bad -->
<div :style="{
  padding: tokens.spacing.md,
  margin: '20px'  // Don't mix!
}">

<!-- Good -->
<div :style="{
  padding: tokens.spacing.md,
  margin: tokens.spacing.lg
}">
```

## Learn More

- **[Colors](/design/colors)**: Explore the complete color palette
- **[Typography](/design/typography)**: Understand the type system
- **[Spacing](/design/spacing)**: Learn the spacing grid
- **[Style Guide](/design/style-guide)**: Usage guidelines and patterns

---

**Ready to use tokens?** Check out the [Getting Started](/guide/getting-started) guide.
