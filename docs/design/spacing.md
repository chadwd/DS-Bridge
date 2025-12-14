# Spacing

The DS-Bridge spacing system provides consistent spacing values that create visual rhythm and hierarchy throughout your application.

## Spacing Scale

Our spacing scale follows a harmonious progression from 4px to 48px:

<div style="margin: 24px 0;">
  <div style="margin-bottom: 24px;">
    <div style="display: flex; align-items: center; margin-bottom: 8px;">
      <div style="background: #6366F1; width: 4px; height: 40px; margin-right: 16px;"></div>
      <div>
        <div style="font-family: monospace; font-weight: 700;">xs</div>
        <div style="font-family: monospace; color: #6B7280; font-size: 14px;">4px</div>
      </div>
    </div>
    <div style="color: #6B7280; font-size: 14px;">Extra small - tight spacing, fine details</div>
  </div>

  <div style="margin-bottom: 24px;">
    <div style="display: flex; align-items: center; margin-bottom: 8px;">
      <div style="background: #6366F1; width: 8px; height: 40px; margin-right: 16px;"></div>
      <div>
        <div style="font-family: monospace; font-weight: 700;">sm</div>
        <div style="font-family: monospace; color: #6B7280; font-size: 14px;">8px</div>
      </div>
    </div>
    <div style="color: #6B7280; font-size: 14px;">Small - compact layouts, icon spacing</div>
  </div>

  <div style="margin-bottom: 24px;">
    <div style="display: flex; align-items: center; margin-bottom: 8px;">
      <div style="background: #6366F1; width: 16px; height: 40px; margin-right: 16px;"></div>
      <div>
        <div style="font-family: monospace; font-weight: 700;">md</div>
        <div style="font-family: monospace; color: #6B7280; font-size: 14px;">16px</div>
      </div>
    </div>
    <div style="color: #6B7280; font-size: 14px;">Medium - default spacing, component padding</div>
  </div>

  <div style="margin-bottom: 24px;">
    <div style="display: flex; align-items: center; margin-bottom: 8px;">
      <div style="background: #6366F1; width: 24px; height: 40px; margin-right: 16px;"></div>
      <div>
        <div style="font-family: monospace; font-weight: 700;">lg</div>
        <div style="font-family: monospace; color: #6B7280; font-size: 14px;">24px</div>
      </div>
    </div>
    <div style="color: #6B7280; font-size: 14px;">Large - generous spacing, section padding</div>
  </div>

  <div style="margin-bottom: 24px;">
    <div style="display: flex; align-items: center; margin-bottom: 8px;">
      <div style="background: #6366F1; width: 32px; height: 40px; margin-right: 16px;"></div>
      <div>
        <div style="font-family: monospace; font-weight: 700;">xl</div>
        <div style="font-family: monospace; color: #6B7280; font-size: 14px;">32px</div>
      </div>
    </div>
    <div style="color: #6B7280; font-size: 14px;">Extra large - major sections, page margins</div>
  </div>

  <div style="margin-bottom: 24px;">
    <div style="display: flex; align-items: center; margin-bottom: 8px;">
      <div style="background: #6366F1; width: 48px; height: 40px; margin-right: 16px;"></div>
      <div>
        <div style="font-family: monospace; font-weight: 700;">xxl</div>
        <div style="font-family: monospace; font-size: 14px; color: #6B7280;">48px</div>
      </div>
    </div>
    <div style="color: #6B7280; font-size: 14px;">2X large - hero sections, large gaps</div>
  </div>
</div>

```typescript
export const spacing = {
  xs: '4px',
  sm: '8px',
  md: '16px',
  lg: '24px',
  xl: '32px',
  xxl: '48px',
};
```

## Visual Examples

### Padding Examples

<div style="margin: 24px 0;">
  <div style="margin-bottom: 16px;">
    <div style="font-family: monospace; font-size: 12px; color: #6B7280; margin-bottom: 8px;">padding: xs (4px)</div>
    <div style="background: #E0E7FF; display: inline-block;">
      <div style="background: #6366F1; color: white; padding: 4px;">Content</div>
    </div>
  </div>

  <div style="margin-bottom: 16px;">
    <div style="font-family: monospace; font-size: 12px; color: #6B7280; margin-bottom: 8px;">padding: sm (8px)</div>
    <div style="background: #E0E7FF; display: inline-block;">
      <div style="background: #6366F1; color: white; padding: 8px;">Content</div>
    </div>
  </div>

  <div style="margin-bottom: 16px;">
    <div style="font-family: monospace; font-size: 12px; color: #6B7280; margin-bottom: 8px;">padding: md (16px)</div>
    <div style="background: #E0E7FF; display: inline-block;">
      <div style="background: #6366F1; color: white; padding: 16px;">Content</div>
    </div>
  </div>

  <div style="margin-bottom: 16px;">
    <div style="font-family: monospace; font-size: 12px; color: #6B7280; margin-bottom: 8px;">padding: lg (24px)</div>
    <div style="background: #E0E7FF; display: inline-block;">
      <div style="background: #6366F1; color: white; padding: 24px;">Content</div>
    </div>
  </div>

  <div style="margin-bottom: 16px;">
    <div style="font-family: monospace; font-size: 12px; color: #6B7280; margin-bottom: 8px;">padding: xl (32px)</div>
    <div style="background: #E0E7FF; display: inline-block;">
      <div style="background: #6366F1; color: white; padding: 32px;">Content</div>
    </div>
  </div>
</div>

### Gap Examples

<div style="margin: 24px 0;">
  <div style="margin-bottom: 24px;">
    <div style="font-family: monospace; font-size: 12px; color: #6B7280; margin-bottom: 8px;">gap: sm (8px)</div>
    <div style="display: flex; gap: 8px;">
      <div style="background: #6366F1; color: white; padding: 16px; border-radius: 8px;">Item 1</div>
      <div style="background: #6366F1; color: white; padding: 16px; border-radius: 8px;">Item 2</div>
      <div style="background: #6366F1; color: white; padding: 16px; border-radius: 8px;">Item 3</div>
    </div>
  </div>

  <div style="margin-bottom: 24px;">
    <div style="font-family: monospace; font-size: 12px; color: #6B7280; margin-bottom: 8px;">gap: md (16px)</div>
    <div style="display: flex; gap: 16px;">
      <div style="background: #6366F1; color: white; padding: 16px; border-radius: 8px;">Item 1</div>
      <div style="background: #6366F1; color: white; padding: 16px; border-radius: 8px;">Item 2</div>
      <div style="background: #6366F1; color: white; padding: 16px; border-radius: 8px;">Item 3</div>
    </div>
  </div>

  <div style="margin-bottom: 24px;">
    <div style="font-family: monospace; font-size: 12px; color: #6B7280; margin-bottom: 8px;">gap: lg (24px)</div>
    <div style="display: flex; gap: 24px;">
      <div style="background: #6366F1; color: white; padding: 16px; border-radius: 8px;">Item 1</div>
      <div style="background: #6366F1; color: white; padding: 16px; border-radius: 8px;">Item 2</div>
      <div style="background: #6366F1; color: white; padding: 16px; border-radius: 8px;">Item 3</div>
    </div>
  </div>
</div>

## Usage Guidelines

### When to Use Each Size

| Size | Use For | Examples |
|------|---------|----------|
| **xs** (4px) | Fine details, micro spacing | Icon gaps, tight list items |
| **sm** (8px) | Compact layouts | Button icon spacing, form field gaps |
| **md** (16px) | Default spacing | Component padding, card spacing |
| **lg** (24px) | Generous spacing | Section padding, form groups |
| **xl** (32px) | Major sections | Page margins, large containers |
| **xxl** (48px) | Hero sections | Page headers, feature sections |

## Usage Examples

### In Components

```vue
<template>
  <div :style="containerStyles">
    <h2 :style="headingStyles">Section Title</h2>
    <div :style="contentStyles">
      <p>Content with proper spacing</p>
    </div>
  </div>
</template>

<script setup>
import { tokens } from 'design-system/tokens';
import { computed } from 'vue';

const containerStyles = computed(() => ({
  padding: tokens.spacing.lg,
  marginBottom: tokens.spacing.xl,
}));

const headingStyles = computed(() => ({
  marginBottom: tokens.spacing.md,
}));

const contentStyles = computed(() => ({
  gap: tokens.spacing.sm,
}));
</script>
```

### With CSS Custom Properties

```css
/* Spacing using design tokens */
.card {
  padding: var(--ds-spacing-lg);
  margin-bottom: var(--ds-spacing-md);
  gap: var(--ds-spacing-sm);
}

.section {
  padding: var(--ds-spacing-xl) var(--ds-spacing-lg);
}

.button-group {
  display: flex;
  gap: var(--ds-spacing-md);
}
```

### Flexbox with Gap

```vue
<template>
  <div :style="flexStyles">
    <button>Button 1</button>
    <button>Button 2</button>
    <button>Button 3</button>
  </div>
</template>

<script setup>
import { tokens } from 'design-system/tokens';

const flexStyles = {
  display: 'flex',
  gap: tokens.spacing.md,
  padding: tokens.spacing.lg,
};
</script>
```

### Grid with Gap

```vue
<template>
  <div :style="gridStyles">
    <div class="grid-item">Item 1</div>
    <div class="grid-item">Item 2</div>
    <div class="grid-item">Item 3</div>
  </div>
</template>

<script setup>
import { tokens } from 'design-system/tokens';

const gridStyles = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: tokens.spacing.lg,
  padding: tokens.spacing.xl,
};
</script>
```

## Spacing Patterns

### Card Layout

```vue
<div :style="{
  padding: tokens.spacing.lg,
  backgroundColor: tokens.colors.surface,
  borderRadius: tokens.borderRadius.md,
  boxShadow: tokens.shadows.sm,
}">
  <h3 :style="{ marginBottom: tokens.spacing.md }">
    Card Title
  </h3>
  <p :style="{ marginBottom: tokens.spacing.sm }">
    Card content with proper spacing
  </p>
  <div :style="{ display: 'flex', gap: tokens.spacing.sm }">
    <button>Action 1</button>
    <button>Action 2</button>
  </div>
</div>
```

### Form Layout

```vue
<form :style="{ display: 'flex', flexDirection: 'column', gap: tokens.spacing.lg }">
  <div :style="{ display: 'flex', flexDirection: 'column', gap: tokens.spacing.xs }">
    <label>Name</label>
    <input type="text" />
  </div>

  <div :style="{ display: 'flex', flexDirection: 'column', gap: tokens.spacing.xs }">
    <label>Email</label>
    <input type="email" />
  </div>

  <div :style="{ display: 'flex', gap: tokens.spacing.md, marginTop: tokens.spacing.md }">
    <button type="button">Cancel</button>
    <button type="submit">Submit</button>
  </div>
</form>
```

### Section Layout

```vue
<section :style="{
  padding: `${tokens.spacing.xxl} ${tokens.spacing.xl}`,
  marginBottom: tokens.spacing.xxl
}">
  <h2 :style="{ marginBottom: tokens.spacing.lg }">
    Section Title
  </h2>

  <div :style="{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: tokens.spacing.lg }">
    <div>Column 1</div>
    <div>Column 2</div>
    <div>Column 3</div>
  </div>
</section>
```

## Responsive Spacing

Adjust spacing for different screen sizes:

```vue
<script setup>
import { tokens } from 'design-system/tokens';
import { computed, onMounted, ref } from 'vue';

const isMobile = ref(false);

onMounted(() => {
  isMobile.value = window.innerWidth < 768;
});

const responsivePadding = computed(() => ({
  padding: isMobile.value
    ? tokens.spacing.md
    : tokens.spacing.xl,
}));
</script>

<template>
  <div :style="responsivePadding">
    Responsive content
  </div>
</template>
```

## Best Practices

### DO

✅ Use spacing tokens consistently
```vue
<div :style="{ padding: tokens.spacing.md }">
```

✅ Use the same spacing for similar elements
```vue
<!-- All cards have same padding -->
<div :style="{ padding: tokens.spacing.lg }">Card 1</div>
<div :style="{ padding: tokens.spacing.lg }">Card 2</div>
```

✅ Use larger spacing for major sections
```vue
<section :style="{ marginBottom: tokens.spacing.xxl }">
```

✅ Use smaller spacing for related items
```vue
<div :style="{ gap: tokens.spacing.xs }">
  <label>Label</label>
  <input />
</div>
```

### DON'T

❌ Use arbitrary spacing values
```vue
<!-- Bad -->
<div style="padding: 15px">

<!-- Good -->
<div :style="{ padding: tokens.spacing.md }">
```

❌ Mix different spacing scales
```vue
<!-- Bad -->
<div style="padding: 16px; margin: 20px;">

<!-- Good -->
<div :style="{ padding: tokens.spacing.md, margin: tokens.spacing.lg }">
```

❌ Use negative margins excessively
```vue
<!-- Bad - hard to maintain -->
<div style="margin-top: -10px">

<!-- Good - use proper layout -->
<div :style="{ marginTop: tokens.spacing.xs }">
```

## Accessibility

### Touch Targets

Ensure interactive elements have sufficient spacing:

```vue
<!-- Minimum touch target: 44x44px -->
<button :style="{
  padding: `${tokens.spacing.md} ${tokens.spacing.lg}`,
  minHeight: '44px',
  minWidth: '44px'
}">
  Click me
</button>
```

### Visual Grouping

Use spacing to create visual hierarchy:

```vue
<div>
  <!-- Related items - small gap -->
  <div :style="{ marginBottom: tokens.spacing.sm }">
    <label>First Name</label>
    <input />
  </div>

  <!-- Unrelated sections - large gap -->
  <div :style="{ marginTop: tokens.spacing.xl }">
    <h3>Next Section</h3>
  </div>
</div>
```

## Figma Integration

Spacing tokens sync with Figma auto-layout spacing:

| Code Token | Figma Spacing |
|------------|---------------|
| `spacing.xs` | `Spacing/XS (4px)` |
| `spacing.sm` | `Spacing/SM (8px)` |
| `spacing.md` | `Spacing/MD (16px)` |
| `spacing.lg` | `Spacing/LG (24px)` |
| `spacing.xl` | `Spacing/XL (32px)` |
| `spacing.xxl` | `Spacing/XXL (48px)` |

## Learn More

- **[Design Tokens](/design/tokens)**: Complete token reference
- **[Colors](/design/colors)**: Color system and palette
- **[Typography](/design/typography)**: Type system and fonts
- **[Style Guide](/design/style-guide)**: Usage guidelines

---

**Questions about spacing?** Check out the [style guide](/design/style-guide) for layout patterns.
