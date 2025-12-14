# Typography

The DS-Bridge typography system provides a consistent, scalable type hierarchy that works across all screen sizes and contexts.

## Font Family

DS-Bridge uses **Roboto** as the primary font family, a modern, legible sans-serif typeface designed for optimal readability on screens.

### Base Font

<div style="font-family: Roboto, sans-serif; font-size: 48px; font-weight: 400; margin: 24px 0;">
  Roboto
</div>

```typescript
typography.fontFamily.base =
  'Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Arial, sans-serif'
```

**Fallback Stack**:
1. Roboto (primary)
2. -apple-system (iOS/macOS system font)
3. BlinkMacSystemFont (macOS)
4. Segoe UI (Windows)
5. Helvetica Neue (fallback)
6. Arial (universal fallback)
7. sans-serif (generic)

### Code Font

For code blocks and monospace text:

<div style="font-family: 'Courier New', monospace; font-size: 16px; margin: 24px 0;">
  const example = 'Menlo, Monaco, Courier New';
</div>

```typescript
typography.fontFamily.code =
  'Menlo, Monaco, "Courier New", monospace'
```

## Font Weights

DS-Bridge provides five font weights for hierarchy and emphasis:

<div style="margin: 24px 0;">
  <div style="font-family: Roboto, sans-serif; font-size: 24px; font-weight: 300; margin-bottom: 16px;">
    <span style="font-family: monospace; font-size: 14px; color: #6B7280;">light (300)</span><br/>
    Light weight for subtle headings
  </div>
  <div style="font-family: Roboto, sans-serif; font-size: 24px; font-weight: 400; margin-bottom: 16px;">
    <span style="font-family: monospace; font-size: 14px; color: #6B7280;">regular (400)</span><br/>
    Regular weight for body text
  </div>
  <div style="font-family: Roboto, sans-serif; font-size: 24px; font-weight: 500; margin-bottom: 16px;">
    <span style="font-family: monospace; font-size: 14px; color: #6B7280;">medium (500)</span><br/>
    Medium weight for emphasis
  </div>
  <div style="font-family: Roboto, sans-serif; font-size: 24px; font-weight: 600; margin-bottom: 16px;">
    <span style="font-family: monospace; font-size: 14px; color: #6B7280;">semibold (600)</span><br/>
    Semibold for sub-headings
  </div>
  <div style="font-family: Roboto, sans-serif; font-size: 24px; font-weight: 700; margin-bottom: 16px;">
    <span style="font-family: monospace; font-size: 14px; color: #6B7280;">bold (700)</span><br/>
    Bold weight for headings
  </div>
</div>

```typescript
export const fontWeight = {
  light: 300,
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
};
```

## Font Size Scale

A modular scale from extra small to 3xl:

<div style="margin: 24px 0;">
  <div style="font-family: Roboto, sans-serif; font-size: 12px; margin-bottom: 16px;">
    <span style="font-family: monospace; font-size: 12px; color: #6B7280;">xs (12px)</span><br/>
    Extra small - captions, labels
  </div>
  <div style="font-family: Roboto, sans-serif; font-size: 14px; margin-bottom: 16px;">
    <span style="font-family: monospace; font-size: 12px; color: #6B7280;">sm (14px)</span><br/>
    Small - secondary text, buttons
  </div>
  <div style="font-family: Roboto, sans-serif; font-size: 16px; margin-bottom: 16px;">
    <span style="font-family: monospace; font-size: 12px; color: #6B7280;">base (16px)</span><br/>
    Base - body text, paragraphs
  </div>
  <div style="font-family: Roboto, sans-serif; font-size: 18px; margin-bottom: 16px;">
    <span style="font-family: monospace; font-size: 12px; color: #6B7280;">lg (18px)</span><br/>
    Large - emphasized text, small headings
  </div>
  <div style="font-family: Roboto, sans-serif; font-size: 20px; margin-bottom: 16px;">
    <span style="font-family: monospace; font-size: 12px; color: #6B7280;">xl (20px)</span><br/>
    Extra large - h4, prominent text
  </div>
  <div style="font-family: Roboto, sans-serif; font-size: 24px; margin-bottom: 16px;">
    <span style="font-family: monospace; font-size: 12px; color: #6B7280;">2xl (24px)</span><br/>
    2X large - h3, section headings
  </div>
  <div style="font-family: Roboto, sans-serif; font-size: 30px; margin-bottom: 16px;">
    <span style="font-family: monospace; font-size: 12px; color: #6B7280;">3xl (30px)</span><br/>
    3X large - h1/h2, hero text
  </div>
</div>

```typescript
export const fontSize = {
  xs: '12px',
  sm: '14px',
  base: '16px',
  lg: '18px',
  xl: '20px',
  '2xl': '24px',
  '3xl': '30px',
};
```

## Line Height

Line height controls vertical rhythm and readability:

<div style="margin: 24px 0;">
  <div style="margin-bottom: 24px;">
    <div style="font-family: monospace; font-size: 12px; color: #6B7280; margin-bottom: 8px;">tight (1.2) - Headings</div>
    <div style="font-family: Roboto, sans-serif; font-size: 24px; line-height: 1.2; font-weight: 700; background: #F3F4F6; padding: 16px; border-radius: 8px;">
      The quick brown fox<br/>
      jumps over the lazy dog
    </div>
  </div>
  <div style="margin-bottom: 24px;">
    <div style="font-family: monospace; font-size: 12px; color: #6B7280; margin-bottom: 8px;">normal (1.5) - Body text</div>
    <div style="font-family: Roboto, sans-serif; font-size: 16px; line-height: 1.5; background: #F3F4F6; padding: 16px; border-radius: 8px;">
      The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.
    </div>
  </div>
  <div style="margin-bottom: 24px;">
    <div style="font-family: monospace; font-size: 12px; color: #6B7280; margin-bottom: 8px;">relaxed (1.75) - Long-form content</div>
    <div style="font-family: Roboto, sans-serif; font-size: 16px; line-height: 1.75; background: #F3F4F6; padding: 16px; border-radius: 8px;">
      The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.
    </div>
  </div>
</div>

```typescript
export const lineHeight = {
  tight: 1.2,     // Headings
  normal: 1.5,    // UI elements, body text
  relaxed: 1.75,  // Long-form content, articles
};
```

## Type Hierarchy

### Headings

<div style="margin: 24px 0;">
  <h1 style="font-family: Roboto, sans-serif; font-size: 30px; font-weight: 700; line-height: 1.2; margin: 16px 0;">
    Heading 1 - 30px/Bold/1.2
  </h1>
  <h2 style="font-family: Roboto, sans-serif; font-size: 24px; font-weight: 700; line-height: 1.2; margin: 16px 0;">
    Heading 2 - 24px/Bold/1.2
  </h2>
  <h3 style="font-family: Roboto, sans-serif; font-size: 20px; font-weight: 700; line-height: 1.2; margin: 16px 0;">
    Heading 3 - 20px/Bold/1.2
  </h3>
  <h4 style="font-family: Roboto, sans-serif; font-size: 18px; font-weight: 700; line-height: 1.2; margin: 16px 0;">
    Heading 4 - 18px/Bold/1.2
  </h4>
  <h5 style="font-family: Roboto, sans-serif; font-size: 16px; font-weight: 700; line-height: 1.2; margin: 16px 0;">
    Heading 5 - 16px/Bold/1.2
  </h5>
  <h6 style="font-family: Roboto, sans-serif; font-size: 16px; font-weight: 600; line-height: 1.2; margin: 16px 0;">
    Heading 6 - 16px/Semibold/1.2
  </h6>
</div>

### Body Text

<div style="margin: 24px 0;">
  <p style="font-family: Roboto, sans-serif; font-size: 16px; font-weight: 400; line-height: 1.5; color: #111827; margin: 16px 0;">
    <strong>Body Large (16px/Regular/1.5)</strong><br/>
    This is the default body text size. It provides excellent readability for most content and is the foundation of the type system.
  </p>
  <p style="font-family: Roboto, sans-serif; font-size: 14px; font-weight: 400; line-height: 1.5; color: #6B7280; margin: 16px 0;">
    <strong>Body Small (14px/Regular/1.5)</strong><br/>
    This is secondary body text. Use it for supporting information, captions, or less prominent content.
  </p>
  <p style="font-family: Roboto, sans-serif; font-size: 12px; font-weight: 400; line-height: 1.5; color: #6B7280; margin: 16px 0;">
    <strong>Caption (12px/Regular/1.5)</strong><br/>
    This is caption text. Use it for labels, timestamps, and tertiary information.
  </p>
</div>

## Usage Examples

### In Vue Components

```vue
<template>
  <div>
    <h1 :style="headingStyles">Page Title</h1>
    <p :style="bodyStyles">This is body text with proper spacing.</p>
    <span :style="captionStyles">Updated 2 hours ago</span>
  </div>
</template>

<script setup>
import { tokens } from 'ds-bridge/tokens';
import { computed } from 'vue';

const headingStyles = computed(() => ({
  fontFamily: tokens.typography.fontFamily.base,
  fontSize: tokens.typography.fontSize['3xl'],
  fontWeight: tokens.typography.fontWeight.bold,
  lineHeight: tokens.typography.lineHeight.tight,
  color: tokens.colors.textHigh,
}));

const bodyStyles = computed(() => ({
  fontFamily: tokens.typography.fontFamily.base,
  fontSize: tokens.typography.fontSize.base,
  fontWeight: tokens.typography.fontWeight.regular,
  lineHeight: tokens.typography.lineHeight.normal,
  color: tokens.colors.textMedium,
}));

const captionStyles = computed(() => ({
  fontFamily: tokens.typography.fontFamily.base,
  fontSize: tokens.typography.fontSize.xs,
  fontWeight: tokens.typography.fontWeight.regular,
  lineHeight: tokens.typography.lineHeight.normal,
  color: tokens.colors.textLow,
}));
</script>
```

### With CSS Custom Properties

```css
/* Typography using design tokens */
h1 {
  font-family: var(--ds-font-family-base);
  font-size: var(--ds-font-size-3xl);
  font-weight: var(--ds-font-weight-bold);
  line-height: var(--ds-line-height-tight);
  color: var(--ds-color-text-high);
}

p {
  font-family: var(--ds-font-family-base);
  font-size: var(--ds-font-size-base);
  font-weight: var(--ds-font-weight-regular);
  line-height: var(--ds-line-height-normal);
  color: var(--ds-color-text-medium);
}

code {
  font-family: var(--ds-font-family-code);
  font-size: var(--ds-font-size-sm);
}
```

## Typography Patterns

### Emphasis Hierarchy

```vue
<template>
  <div>
    <!-- High emphasis -->
    <h2 :style="{ color: tokens.colors.textHigh }">
      Main Heading
    </h2>

    <!-- Medium emphasis -->
    <p :style="{ color: tokens.colors.textMedium }">
      Body text with normal emphasis
    </p>

    <!-- Low emphasis -->
    <span :style="{ color: tokens.colors.textLow }">
      Supporting information
    </span>
  </div>
</template>
```

### Responsive Typography

```vue
<script setup>
import { tokens } from 'ds-bridge/tokens';
import { computed, onMounted, ref } from 'vue';

const isMobile = ref(false);

onMounted(() => {
  isMobile.value = window.innerWidth < 768;
});

const responsiveHeading = computed(() => ({
  fontSize: isMobile.value
    ? tokens.typography.fontSize['2xl']
    : tokens.typography.fontSize['3xl'],
}));
</script>

<template>
  <h1 :style="responsiveHeading">
    Responsive Heading
  </h1>
</template>
```

## Best Practices

### DO

✅ Use the type scale consistently
```css
/* Use defined sizes */
font-size: var(--ds-font-size-lg);
```

✅ Match font weight to emphasis
```css
/* Bold for headings */
h1 { font-weight: var(--ds-font-weight-bold); }

/* Regular for body */
p { font-weight: var(--ds-font-weight-regular); }
```

✅ Use appropriate line heights
```css
/* Tight for headings */
h1 { line-height: var(--ds-line-height-tight); }

/* Relaxed for long-form */
article p { line-height: var(--ds-line-height-relaxed); }
```

### DON'T

❌ Use arbitrary font sizes
```css
/* Bad - non-standard size */
font-size: 17px;

/* Good - use scale */
font-size: var(--ds-font-size-lg);
```

❌ Mix multiple font families
```css
/* Bad - inconsistent */
.title { font-family: 'Arial'; }
.body { font-family: 'Helvetica'; }

/* Good - consistent */
font-family: var(--ds-font-family-base);
```

❌ Use extreme line heights
```css
/* Bad - too tight */
line-height: 1.0;

/* Good - use scale */
line-height: var(--ds-line-height-tight);
```

## Accessibility

### Readable Font Sizes

- Minimum body text: **16px** (base)
- Minimum interactive elements: **14px** (sm)
- Never use fonts smaller than **12px** (xs)

### Sufficient Line Height

- Body text: **1.5** (normal) minimum
- Headings: **1.2** (tight) minimum
- Long-form content: **1.75** (relaxed) recommended

### Color Contrast

Ensure text meets WCAG 2.1 AAA standards:

```vue
<!-- High contrast for readability -->
<p :style="{
  color: tokens.colors.textHigh,
  backgroundColor: tokens.colors.surface
}">
  Highly readable text
</p>
```

## Figma Integration

Typography tokens map to Figma text styles:

| Code Token | Figma Text Style |
|------------|------------------|
| `fontSize.base` | `Typography/Sizes/font-size-16` |
| `fontSize.sm` | `Typography/Sizes/font-size-14` |
| `fontWeight.medium` | `Typography/Weights/fw-medium-500` |
| `fontFamily.base` | `Typography/body-font-family` |

## Learn More

- **[Design Tokens](/design/tokens)**: Complete token reference
- **[Colors](/design/colors)**: Color system and palette
- **[Spacing](/design/spacing)**: Layout and spacing grid
- **[Style Guide](/design/style-guide)**: Usage guidelines

---

**Questions about typography?** Check out the [style guide](/design/style-guide) for more patterns.
