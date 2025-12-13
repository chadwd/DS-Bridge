# Design Tokens

Design tokens are the foundation of the design system. They represent all the design decisions that make up the visual language.

All tokens are defined in `src/tokens/index.js` and exported for use throughout your applications.

## Color Tokens

### Primary Colors

Used for primary actions and brand identity.

```javascript
// From tokens.colors
primary: '#6366F1'           // Indigo-600 (Main brand color)
primaryDark: '#4F46E5'        // Indigo-700 (Darker variant)
primaryLight: '#818CF8'       // Indigo-400 (Lighter variant)
primaryLighter: '#E0E7FF'     // Indigo-100 (Very light variant)
```

### Secondary Colors

Used for secondary actions and accents.

```javascript
secondary: '#EC4899'          // Pink-500
secondaryDark: '#DB2777'      // Pink-600
secondaryLight: '#F472B6'     // Pink-300
```

### Semantic Colors

Communicate meaning and intent.

```javascript
// Error - For errors and destructive actions
error: '#DC2626'              // Red-600
errorLight: '#FEE2E2'         // Red-100

// Warning - For warnings and cautions
warning: '#F59E0B'            // Amber-500
warningLight: '#FEF3C7'       // Amber-100

// Success - For successful operations
success: '#10B981'            // Emerald-500
successLight: '#D1FAE5'       // Emerald-100

// Info - For informational messages
info: '#3B82F6'               // Blue-500
infoLight: '#DBEAFE'          // Blue-100
```

### Surface Colors

For backgrounds and surfaces.

```javascript
surface: '#FFFFFF'            // Default surface
surfaceVariant: '#F3F4F6'     // Gray-100 (Alternative surface)
surfaceHover: '#F9FAFB'       // Gray-50 (Hover state)
```

### Background Colors

For page and application backgrounds.

```javascript
background: '#FFFFFF'         // Primary background
backgroundSecondary: '#F9FAFB' // Secondary background
```

### Text Colors

For typography on light backgrounds.

```javascript
textHigh: '#111827'           // Gray-900 (Primary text)
textMedium: '#6B7280'         // Gray-500 (Secondary text)
textLow: '#D1D5DB'            // Gray-300 (Disabled/placeholder)
textInverse: '#FFFFFF'        // Text on dark backgrounds
```

### Neutral Colors

General purpose neutral colors.

```javascript
neutral: '#6B7280'            // Gray-500
neutralLight: '#E5E7EB'       // Gray-200
neutralDark: '#374151'        // Gray-700
```

### Dividers

For visual separation.

```javascript
divider: '#E5E7EB'            // Gray-200
```

## Spacing Scale

A consistent spacing scale ensures visual rhythm and alignment.

```javascript
xs: '4px'      // Small gaps, inline spacing
sm: '8px'      // Compact spacing
md: '16px'     // Default spacing (baseline)
lg: '24px'     // Large spacing
xl: '32px'     // Extra large spacing
xxl: '48px'    // Extra extra large spacing
```

### Usage

```vue
<div class="p-md">Default padding</div>
<div class="mt-lg">Large margin top</div>
<div class="gap-md">Flex gap</div>
```

## Typography Tokens

### Font Family

```javascript
fontFamily: {
  base: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, ...',
  code: 'Menlo, Monaco, "Courier New", monospace',
}
```

### Font Sizes

```javascript
fontSize: {
  xs: '12px'    // Small labels, captions
  sm: '14px'    // Button text, small body
  base: '16px'  // Default body text
  lg: '18px'    // Larger body text
  xl: '20px'    // Subheadings
  '2xl': '24px' // Section headings
  '3xl': '30px' // Page headings
}
```

### Line Height

```javascript
lineHeight: {
  tight: 1.2      // Headings
  normal: 1.5     // Default (body)
  relaxed: 1.75   // Readable prose
}
```

### Font Weight

```javascript
fontWeight: {
  light: 300          // Light text (disabled)
  regular: 400        // Normal text
  medium: 500         // Emphasized text, labels
  semibold: 600       // Stronger emphasis
  bold: 700           // Headings
}
```

## Border Radius

Consistent rounded corners throughout the UI.

```javascript
borderRadius: {
  none: '0'         // No rounding
  xs: '4px'         // Minimal rounding
  sm: '6px'         // Small buttons
  md: '8px'         // Standard components
  lg: '12px'        // Cards, larger components
  xl: '16px'        // Large surfaces
  full: '9999px'    // Pills and circles
}
```

## Shadows (Elevation)

Create depth and hierarchy with elevation shadows.

```javascript
shadows: {
  none: 'none'    // No shadow
  xs: '...'       // Subtle elevation
  sm: '...'       // Light elevation
  base: '...'     // Standard elevation
  md: '...'       // Medium elevation
  lg: '...'       // High elevation
  xl: '...'       // Maximum elevation
}
```

## Using Tokens in Code

### In Vue Components

```javascript
import { tokens } from '@/tokens/index.js';

export default {
  data() {
    return {
      primaryColor: tokens.colors.primary,
      spacing: tokens.spacing,
    };
  },
};
```

### In CSS

```css
.component {
  color: #6366F1; /* Use the actual color value */
  padding: 16px;  /* Use spacing values */
  font-size: 16px; /* Use typography values */
}
```

### With Vuetify

The tokens are automatically applied to Vuetify's theme system in `src/plugins/vuetify.js`:

```vue
<!-- These automatically use design tokens -->
<v-btn color="primary">Click me</v-btn>
<v-card class="pa-lg">Content</v-card>
```

## Token Updates

To update design tokens:

1. Edit `src/tokens/index.js`
2. Update `src/plugins/vuetify.js` if theme changes
3. Update documentation (this file)
4. The changes will apply globally across all components and applications using this design system

## Figma Synchronization

This token structure is designed to work with Figma Code Connect:

- Token names follow a consistent naming convention
- Token values are centralized and easy to locate
- The structure maps naturally to Figma token sets

To sync with Figma:

1. Define token sets in your Figma file
2. Map them to this structure using Figma Code Connect
3. Update tools will automatically sync Figma changes to this file

## Best Practices

- **Use tokens, not magic values**: Always reference tokens instead of hardcoding values
- **Be consistent**: Use the closest matching token; don't create new values
- **Document changes**: When adding tokens, document them here
- **Consider maintenance**: Keep tokens simple and their purpose clear
- **Theme-aware**: Design with light and dark modes in mind
