# Style Guide

This style guide provides practical guidelines for using DS-Bridge components and design tokens to build consistent, accessible, and beautiful user interfaces.

## Design Principles

Every design decision in DS-Bridge aligns with our core principles:

### Consistency
Use the same patterns, components, and tokens throughout your application. Consistency builds familiarity and trust.

### Clarity
Keep interfaces simple and intuitive. Users should understand what to do without reading documentation.

### Accessibility
Build for everyone. Every component meets WCAG 2.1 AAA standards.

### Performance
Fast is a feature. Optimize for speed and efficiency.

## Component Usage Guidelines

### Buttons

**Use buttons for actions**, not navigation (use links for that).

✅ **Good**:
```vue
<DsButton @click="saveChanges">Save Changes</DsButton>
<DsButton color="error" @click="deleteItem">Delete</DsButton>
```

❌ **Bad**:
```vue
<!-- Don't use buttons for navigation -->
<DsButton @click="goToPage">View Profile</DsButton>

<!-- Use links instead -->
<a href="/profile">View Profile</a>
```

**Button Hierarchy**:
- **Filled (primary)**: Main action (save, submit, create)
- **Outlined (secondary)**: Secondary actions (cancel, back)
- **Text (tertiary)**: Low-priority actions (skip, dismiss)

```vue
<!-- Primary action -->
<DsButton>Save</DsButton>

<!-- Secondary action -->
<DsButton variant="outlined">Cancel</DsButton>

<!-- Tertiary action -->
<DsButton variant="text">Skip</DsButton>
```

### Forms

**Group related fields** with consistent spacing:

```vue
<form :style="{ display: 'flex', flexDirection: 'column', gap: tokens.spacing.lg }">
  <!-- Name group -->
  <div :style="{ display: 'flex', flexDirection: 'column', gap: tokens.spacing.xs }">
    <label for="name">Name</label>
    <input id="name" type="text" />
  </div>

  <!-- Email group -->
  <div :style="{ display: 'flex', flexDirection: 'column', gap: tokens.spacing.xs }">
    <label for="email">Email</label>
    <input id="email" type="email" />
  </div>

  <!-- Actions -->
  <div :style="{ display: 'flex', gap: tokens.spacing.md, marginTop: tokens.spacing.md }">
    <DsButton variant="outlined">Cancel</DsButton>
    <DsButton type="submit">Submit</DsButton>
  </div>
</form>
```

**Form Validation**:
- Show errors inline, near the field
- Use semantic colors (error, warning, success)
- Provide clear, actionable error messages

```vue
<div>
  <label for="email">Email</label>
  <input id="email" type="email" :class="{ error: hasError }" />
  <span v-if="hasError" :style="{ color: tokens.colors.error, fontSize: tokens.typography.fontSize.sm }">
    Please enter a valid email address
  </span>
</div>
```

## Layout Patterns

### Page Layout

Use consistent spacing for page structure:

```vue
<template>
  <div :style="pageStyles">
    <!-- Header -->
    <header :style="headerStyles">
      <h1>Page Title</h1>
    </header>

    <!-- Main content -->
    <main :style="mainStyles">
      <section :style="sectionStyles">
        <h2>Section Title</h2>
        <p>Content</p>
      </section>
    </main>

    <!-- Footer -->
    <footer :style="footerStyles">
      Footer content
    </footer>
  </div>
</template>

<script setup>
import { tokens } from 'design-system/tokens';

const pageStyles = {
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
};

const headerStyles = {
  padding: `${tokens.spacing.lg} ${tokens.spacing.xl}`,
  borderBottom: `1px solid ${tokens.colors.divider}`,
};

const mainStyles = {
  flex: 1,
  padding: `${tokens.spacing.xl} ${tokens.spacing.lg}`,
};

const sectionStyles = {
  marginBottom: tokens.spacing.xxl,
};

const footerStyles = {
  padding: tokens.spacing.lg,
  borderTop: `1px solid ${tokens.colors.divider}`,
  backgroundColor: tokens.colors.surfaceVariant,
};
</script>
```

### Card Layout

Cards group related content:

```vue
<div :style="{
  backgroundColor: tokens.colors.surface,
  borderRadius: tokens.borderRadius.md,
  boxShadow: tokens.shadows.sm,
  padding: tokens.spacing.lg,
  marginBottom: tokens.spacing.md
}">
  <h3 :style="{ marginBottom: tokens.spacing.md, color: tokens.colors.textHigh }">
    Card Title
  </h3>
  <p :style="{ marginBottom: tokens.spacing.md, color: tokens.colors.textMedium }">
    Card description with proper typography and spacing.
  </p>
  <div :style="{ display: 'flex', gap: tokens.spacing.sm }">
    <DsButton variant="text">Learn More</DsButton>
    <DsButton>Take Action</DsButton>
  </div>
</div>
```

### Grid Layout

Use CSS Grid for responsive layouts:

```vue
<div :style="{
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  gap: tokens.spacing.lg,
  padding: tokens.spacing.xl
}">
  <div v-for="item in items" :key="item.id" class="grid-item">
    {{ item.name }}
  </div>
</div>
```

## Color Usage

### Text Hierarchy

Use text colors to create visual hierarchy:

```vue
<div>
  <!-- High emphasis - headings, important content -->
  <h2 :style="{ color: tokens.colors.textHigh }">
    Main Heading
  </h2>

  <!-- Medium emphasis - body text -->
  <p :style="{ color: tokens.colors.textMedium }">
    This is body text with standard emphasis.
  </p>

  <!-- Low emphasis - supporting text -->
  <span :style="{ color: tokens.colors.textLow, fontSize: tokens.typography.fontSize.sm }">
    Updated 2 hours ago
  </span>
</div>
```

### Semantic Colors

Use semantic colors to convey meaning:

```vue
<!-- Error message -->
<div :style="{
  backgroundColor: tokens.colors.errorLight,
  color: tokens.colors.error,
  padding: tokens.spacing.md,
  borderRadius: tokens.borderRadius.sm,
  borderLeft: `4px solid ${tokens.colors.error}`
}">
  Error: Unable to save changes
</div>

<!-- Success message -->
<div :style="{
  backgroundColor: tokens.colors.successLight,
  color: tokens.colors.success,
  padding: tokens.spacing.md,
  borderRadius: tokens.borderRadius.sm,
  borderLeft: `4px solid ${tokens.colors.success}`
}">
  Success: Changes saved!
</div>

<!-- Warning message -->
<div :style="{
  backgroundColor: tokens.colors.warningLight,
  color: tokens.colors.warning,
  padding: tokens.spacing.md,
  borderRadius: tokens.borderRadius.sm,
  borderLeft: `4px solid ${tokens.colors.warning}`
}">
  Warning: This action cannot be undone
</div>

<!-- Info message -->
<div :style="{
  backgroundColor: tokens.colors.infoLight,
  color: tokens.colors.info,
  padding: tokens.spacing.md,
  borderRadius: tokens.borderRadius.sm,
  borderLeft: `4px solid ${tokens.colors.info}`
}">
  Info: You have unsaved changes
</div>
```

## Typography Usage

### Heading Hierarchy

Use proper heading levels for structure:

```vue
<article>
  <h1 :style="headingStyles(1)">Page Title</h1>

  <section>
    <h2 :style="headingStyles(2)">Section Title</h2>
    <p>Section content...</p>

    <h3 :style="headingStyles(3)">Subsection</h3>
    <p>Subsection content...</p>
  </section>
</article>
```

```typescript
const headingStyles = (level: number) => ({
  fontFamily: tokens.typography.fontFamily.base,
  fontWeight: tokens.typography.fontWeight.bold,
  lineHeight: tokens.typography.lineHeight.tight,
  color: tokens.colors.textHigh,
  fontSize:
    level === 1 ? tokens.typography.fontSize['3xl'] :
    level === 2 ? tokens.typography.fontSize['2xl'] :
    level === 3 ? tokens.typography.fontSize.xl :
    tokens.typography.fontSize.lg,
});
```

### Body Text

Use appropriate sizes for content:

```vue
<!-- Primary content -->
<p :style="{
  fontSize: tokens.typography.fontSize.base,
  lineHeight: tokens.typography.lineHeight.normal,
  color: tokens.colors.textMedium
}">
  This is the main body text.
</p>

<!-- Secondary content -->
<p :style="{
  fontSize: tokens.typography.fontSize.sm,
  lineHeight: tokens.typography.lineHeight.normal,
  color: tokens.colors.textLow
}">
  This is supporting text.
</p>
```

## Spacing Patterns

### Vertical Rhythm

Maintain consistent vertical spacing:

```vue
<div>
  <h2 :style="{ marginBottom: tokens.spacing.md }">Section Title</h2>
  <p :style="{ marginBottom: tokens.spacing.md }">First paragraph</p>
  <p :style="{ marginBottom: tokens.spacing.md }">Second paragraph</p>
  <p :style="{ marginBottom: tokens.spacing.xl }">Last paragraph before next section</p>

  <h2 :style="{ marginBottom: tokens.spacing.md }">Next Section</h2>
</div>
```

### Horizontal Rhythm

Use consistent gaps in flex/grid layouts:

```vue
<!-- Button group -->
<div :style="{ display: 'flex', gap: tokens.spacing.md }">
  <DsButton variant="outlined">Cancel</DsButton>
  <DsButton>Save</DsButton>
</div>

<!-- Card grid -->
<div :style="{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: tokens.spacing.lg }">
  <div>Card 1</div>
  <div>Card 2</div>
  <div>Card 3</div>
</div>
```

## Accessibility Guidelines

### Keyboard Navigation

Ensure all interactive elements are keyboard accessible:

```vue
<!-- Proper button (keyboard accessible by default) -->
<DsButton @click="handleClick">Click me</DsButton>

<!-- If using div as button (not recommended), add keyboard support -->
<div
  role="button"
  tabindex="0"
  @click="handleClick"
  @keydown.enter="handleClick"
  @keydown.space.prevent="handleClick"
>
  Custom button
</div>
```

### ARIA Labels

Provide labels for icon-only buttons:

```vue
<!-- Icon button with label -->
<DsButton aria-label="Close dialog" @click="closeDialog">
  <v-icon icon="mdi-close" />
</DsButton>

<!-- Link with aria-label -->
<a href="/profile" aria-label="View your profile">
  <v-icon icon="mdi-account" />
</a>
```

### Color Contrast

Always ensure sufficient contrast:

```vue
<!-- Good contrast -->
<div :style="{
  backgroundColor: tokens.colors.primary,
  color: tokens.colors.textInverse
}">
  High contrast text
</div>

<!-- Check contrast ratio -->
<!-- textHigh on surface: 15.8:1 (AAA) -->
<!-- primary on white: 7.2:1 (AAA) -->
```

### Focus States

Ensure visible focus indicators:

```vue
<style>
button:focus-visible {
  outline: 2px solid var(--ds-color-primary);
  outline-offset: 2px;
  border-radius: var(--ds-radius-sm);
}
</style>
```

## Responsive Design

### Mobile-First Approach

Start with mobile styles, enhance for larger screens:

```vue
<script setup>
import { tokens } from 'design-system/tokens';
import { computed, onMounted, ref } from 'vue';

const isMobile = ref(false);

onMounted(() => {
  isMobile.value = window.innerWidth < 768;
  window.addEventListener('resize', () => {
    isMobile.value = window.innerWidth < 768;
  });
});

const containerStyles = computed(() => ({
  padding: isMobile.value ? tokens.spacing.md : tokens.spacing.xl,
  fontSize: isMobile.value ? tokens.typography.fontSize.sm : tokens.typography.fontSize.base,
}));
</script>
```

### Responsive Grids

Use auto-fit for responsive columns:

```vue
<div :style="{
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
  gap: tokens.spacing.lg
}">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```

## Best Practices Summary

### DO

✅ Use design tokens for all values
✅ Maintain consistent spacing and typography
✅ Follow accessibility guidelines (WCAG 2.1 AAA)
✅ Use semantic HTML elements
✅ Provide keyboard navigation
✅ Test with screen readers
✅ Ensure color contrast ratios
✅ Use semantic colors for meaning

### DON'T

❌ Hardcode colors, spacing, or font sizes
❌ Use divs for buttons or links
❌ Rely solely on color to convey information
❌ Create custom components that duplicate existing ones
❌ Ignore keyboard accessibility
❌ Use small font sizes (< 12px)
❌ Mix arbitrary values with tokens

## Component Checklist

When creating new components:

- [ ] Uses design tokens (no hardcoded values)
- [ ] Keyboard accessible (Tab, Enter, Space)
- [ ] Screen reader friendly (ARIA labels, semantic HTML)
- [ ] Proper focus states
- [ ] Color contrast meets WCAG AAA
- [ ] Responsive on mobile and desktop
- [ ] Consistent with existing components
- [ ] Documented with examples
- [ ] Unit tested
- [ ] Accessibility tested

## Learn More

- **[Design Tokens](/design/tokens)**: Token system overview
- **[Colors](/design/colors)**: Color palette and usage
- **[Typography](/design/typography)**: Type system
- **[Spacing](/design/spacing)**: Spacing scale
- **[Components](/components/button)**: Component library

---

**Questions about usage?** Review the [component documentation](/components/button) for detailed examples.
