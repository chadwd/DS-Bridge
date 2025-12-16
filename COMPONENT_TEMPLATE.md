# Component Template System

## Overview

DS-Bridge includes a smart component generator that creates new components based on the Button template. This ensures consistency across all components and saves significant development time.

## Quick Start

### Create a New Component

```bash
npm run create-component ComponentName
```

**Example:**
```bash
npm run create-component Card
npm run create-component Input
npm run create-component Select
```

### What Gets Created

The generator creates 4 files automatically:

1. **`src/components/ComponentName.vue`** - Vue component with TypeScript
2. **`tests/ComponentName.spec.js`** - Unit tests (6 tests)
3. **`tests/ComponentName.a11y.spec.ts`** - Accessibility tests (4 tests)
4. **`docs/components/componentname.md`** - Interactive documentation

Plus:
- ✅ Exports added to `src/index.ts`
- ✅ Component ready for import in documentation

## Features

### ✅ Complete Component Scaffold
- Vue 3 Composition API (`<script setup>`)
- TypeScript interfaces and types
- Vuetify component wrapper pattern
- Design system CSS class
- Proper prop defaults and validation

### ✅ Comprehensive Tests
- **Unit Tests**: Props, variants, colors, disabled, loading states
- **A11y Tests**: WCAG 2.1 AAA compliance with axe-core
- All tests follow established patterns
- Ready to run: `npm run test`

### ✅ Interactive Documentation
- Live interactive playground with controls
- Code preview with variants
- API reference table
- Accessibility checklist
- Related components section

### ✅ Best Practices Built-in
- Composition API with `<script setup>`
- Strict TypeScript typing
- Design token usage
- Accessibility considerations
- Consistent file structure

## Step-by-Step Guide

### 1. Generate Component

```bash
npm run create-component Card
```

**Output:**
```
🚀 Creating new component: Card

📝 Step 1/6: Creating Vue component...
✓ Created src/components/Card.vue

📝 Step 2/6: Creating unit tests...
✓ Created tests/Card.spec.js

📝 Step 3/6: Creating accessibility tests...
✓ Created tests/Card.a11y.spec.ts

📝 Step 4/6: Updating src/index.ts...
✓ Added export to src/index.ts

📝 Step 5/6: Creating documentation...
✓ Created docs/components/card.md

📝 Step 6/6: Updating VitePress navigation...
⚠ Manual step required: Add the following to docs/.vitepress/config.js sidebar:
{ text: 'Card', link: '/components/card' }

✅ Component created successfully!
```

### 2. Update VitePress Navigation

Add your component to the sidebar in `docs/.vitepress/config.js`:

```javascript
'/components/': [
  {
    text: 'Components',
    items: [
      { text: 'Button', link: '/components/button' },
      { text: 'Card', link: '/components/card' },  // ← Add this
    ],
  },
],
```

### 3. Customize the Component

Edit `src/components/Card.vue`:

```vue
<template>
  <v-card
    :variant="variant"
    :color="color"
    :disabled="disabled"
    :loading="loading"
    v-bind="$attrs"
    class="ds-card"
  >
    <slot />
  </v-card>
</template>

<script setup lang="ts">
// Customize props and types here
interface Props {
  variant?: 'elevated' | 'flat' | 'tonal' | 'outlined';
  color?: string;
  disabled?: boolean;
  loading?: boolean;
  // Add your custom props here
  title?: string;
  subtitle?: string;
  image?: string;
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'elevated',
  color: 'primary',
  disabled: false,
  loading: false,
});
</script>

<style scoped>
.ds-card {
  /* Add custom styles using design tokens */
  border-radius: var(--ds-radius-lg);
}
</style>
```

### 4. Update Documentation

Edit `docs/components/card.md`:

- Update the description
- Customize the interactive demo
- Add usage examples
- Update "When to Use" section
- Add live code previews

### 5. Run Tests

```bash
# Run all tests
npm run test

# Run in watch mode
npm run test -- --watch

# Run with UI
npm run test:ui
```

### 6. Test in Docs

```bash
npm run dev
```

Visit `http://localhost:5174/components/card` to see your component.

## Template Structure

### Vue Component Template

```vue
<template>
  <v-{component}
    :variant="variant"
    :color="color"
    :disabled="disabled"
    :loading="loading"
    v-bind="$attrs"
    class="ds-{component}"
  >
    <slot />
  </v-{component}>
</template>

<script setup lang="ts">
/**
 * Component documentation
 */
type ComponentVariant = 'elevated' | 'flat' | 'tonal' | 'outlined' | 'text';

interface Props {
  variant?: ComponentVariant;
  color?: string;
  disabled?: boolean;
  loading?: boolean;
}

withDefaults(defineProps<Props>(), {
  variant: 'elevated',
  color: 'primary',
  disabled: false,
  loading: false,
});
</script>

<style scoped>
.ds-{component} {
  /* Design token usage */
}
</style>
```

### Test Template (Unit)

```javascript
import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import { createVuetify } from 'vuetify';
import DsComponent from '../src/components/Component.vue';

const vuetify = createVuetify({ components, directives });

describe('DsComponent.vue', () => {
  it('renders with default props', () => {
    // Test implementation
  });

  it('applies variant prop correctly', () => {
    // Test implementation
  });

  // ... more tests
});
```

### Test Template (Accessibility)

```typescript
import { describe, it, expect } from 'vitest';
import { axe, toHaveNoViolations } from 'jest-axe';
import DsComponent from '../src/components/Component.vue';

expect.extend(toHaveNoViolations);

describe('DsComponent Accessibility', () => {
  it('should have no accessibility violations', async () => {
    const wrapper = mount(DsComponent, {
      // ...
      attachTo: document.body,
    });

    const results = await axe(wrapper.element);
    expect(results).toHaveNoViolations();
    wrapper.unmount();
  });
});
```

## Customization Guide

### Adding Custom Props

1. **Update the Props interface:**

```typescript
interface Props {
  variant?: ComponentVariant;
  color?: string;
  disabled?: boolean;
  loading?: boolean;
  // Add your custom props
  title?: string;
  subtitle?: string;
  elevation?: number;
}
```

2. **Add defaults:**

```typescript
withDefaults(defineProps<Props>(), {
  variant: 'elevated',
  color: 'primary',
  disabled: false,
  loading: false,
  title: '',
  subtitle: '',
  elevation: 2,
});
```

3. **Update tests:**

```javascript
it('applies custom prop correctly', () => {
  const wrapper = mount(DsComponent, {
    props: { title: 'Test Title' },
    global: { plugins: [vuetify] },
  });

  expect(wrapper.text()).toContain('Test Title');
});
```

4. **Update documentation:**

Add to the props table and interactive demo controls.

### Adding Slots

1. **Add slot to template:**

```vue
<template>
  <v-card>
    <v-card-title v-if="$slots.title">
      <slot name="title" />
    </v-card-title>

    <v-card-text>
      <slot />
    </v-card-text>

    <v-card-actions v-if="$slots.actions">
      <slot name="actions" />
    </v-card-actions>
  </v-card>
</template>
```

2. **Document in API reference:**

```markdown
### Slots

| Name    | Props | Description           |
| ------- | ----- | --------------------- |
| default | -     | Main card content     |
| title   | -     | Card title area       |
| actions | -     | Action buttons area   |
```

### Adding Events

1. **Define emits:**

```typescript
const emit = defineEmits<{
  click: [event: MouseEvent];
  close: [];
}>();
```

2. **Emit events:**

```vue
<template>
  <v-card @click="emit('click', $event)">
    <!-- ... -->
  </v-card>
</template>
```

3. **Test events:**

```javascript
it('emits click event', async () => {
  const wrapper = mount(DsComponent, {
    global: { plugins: [vuetify] },
  });

  await wrapper.trigger('click');
  expect(wrapper.emitted('click')).toBeTruthy();
});
```

## Best Practices

### ✅ DO:
- Use `<script setup>` for all components
- Use strict TypeScript interfaces
- Follow the Vuetify wrapper pattern
- Use design tokens for all styling
- Add comprehensive tests (unit + a11y)
- Include live examples in documentation
- Follow the established naming conventions

### ❌ DON'T:
- Don't use Options API
- Don't hardcode colors or spacing values
- Don't skip accessibility tests
- Don't forget to export from `src/index.ts`
- Don't create components without documentation
- Don't use `any` types

## Troubleshooting

### Component Already Exists

```
Error: Component Card.vue already exists!
```

**Solution:** Choose a different name or delete the existing component first.

### Tests Failing

```
✖ Cannot find Vuetify component
```

**Solution:** Make sure the Vuetify component name matches (e.g., `VCard` not `V-card`).

### Documentation Not Showing

**Solution:** Check that you added the sidebar entry to `docs/.vitepress/config.js`.

### TypeScript Errors

**Solution:** Run `npm run type-check` to see specific errors. Ensure all props have proper types.

## Examples

### Creating a Card Component

```bash
npm run create-component Card
```

Then customize:
- Add `title`, `subtitle`, `image` props
- Add `actions` slot
- Update documentation with card examples
- Add tests for new props

### Creating an Input Component

```bash
npm run create-component Input
```

Then customize:
- Add `label`, `placeholder`, `rules` props
- Add `v-model` support
- Add validation logic
- Update tests for v-model
- Add form examples to docs

### Creating a Select Component

```bash
npm run create-component Select
```

Then customize:
- Add `items`, `multiple`, `chips` props
- Add `v-model` support
- Add item customization props
- Test multi-select behavior
- Add dropdown examples

## Advanced: Modifying the Template

The template itself is in `scripts/create-component.sh`. You can modify it to:

- Change default props
- Add different Vuetify components
- Customize the documentation structure
- Add more test cases
- Change styling patterns

**Note:** Changes to the template will only affect **new** components created after the modification.

## Summary

The component template system provides:

✅ **Consistency** - All components follow the same patterns
✅ **Speed** - Create full components in seconds
✅ **Quality** - Built-in tests and documentation
✅ **Best Practices** - Modern Vue 3 + TypeScript patterns
✅ **Maintainability** - Easy to update and extend

**Ready to create your next component?**

```bash
npm run create-component YourComponent
```
