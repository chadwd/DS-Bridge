# Divider Component

The `DsDivider` component is a flexible divider component that wraps Vuetify's `v-divider` for separating content visually.

## Overview

DsDivider creates visual separation between content sections, list items, or layout areas. It provides both horizontal and vertical dividers with optional text labels.

<script setup>
import { ref, computed } from 'vue';

const vertical = ref(false);
const inset = ref(false);
const thickness = ref(1);
const color = ref('default');
const dividerText = ref('');

const generatedCode = computed(() => {
  const props = [];
  if (vertical.value) props.push(':vertical="true"');
  if (inset.value) props.push(':inset="true"');
  if (thickness.value !== 1) props.push(`:thickness="${thickness.value}"`);
  if (color.value && color.value !== 'default') props.push(`color="${color.value}"`);
  if (dividerText.value) props.push(`text="${dividerText.value}"`);

  const propsString = props.length > 0 ? ' ' + props.join(' ') : '';

  return `<DsDivider${propsString} />`;
});
</script>

## Interactive Demo

<ComponentDemo
  title="Divider Playground"
  description="Customize the divider using the controls below to see different orientations and styles."
>
  <template #demo>
    <div :style="vertical ? 'display: flex; height: 100px; align-items: center; gap: 16px;' : 'width: 100%; min-height: 40px;'">
      <DsDivider
        :vertical="vertical"
        :inset="inset"
        :thickness="thickness"
        :color="color"
        :text="dividerText"
      />
    </div>
  </template>

  <template #controls>
    <PropControl
      label="Vertical"
      v-model="vertical"
      type="boolean"
      description="Display divider vertically"
    />
    <PropControl
      label="Inset"
      v-model="inset"
      type="boolean"
      description="Add margin to the divider"
    />
    <PropControl
      label="Thickness"
      v-model="thickness"
      type="number"
      description="Line thickness in pixels"
    />
    <PropControl
      label="Color"
      v-model="color"
      :options="['default', 'primary', 'secondary', 'error', 'warning', 'success', 'info']"
      description="Color from design tokens"
    />
    <PropControl
      label="Text"
      v-model="dividerText"
      type="text"
      description="Optional text in the middle of divider"
    />
  </template>

  <template #code>
    <pre><code class="language-vue">{{ generatedCode }}</code></pre>
  </template>
</ComponentDemo>

## Examples

### Horizontal Divider (Default)

<CodePreview>
  <template #preview>
    <div>
      <p>Content above</p>
      <DsDivider color="primary" />
      <p>Content below</p>
    </div>
  </template>
  <template #code>

```vue
<template>
  <div>
    <p>Content above</p>
    <DsDivider />
    <p>Content below</p>
  </div>
</template>
```

  </template>
</CodePreview>

### Divider with Text

<CodePreview>
  <template #preview>
    <div style="width: 100%;">
      <DsDivider text="OR" color="primary" />
    </div>
  </template>
  <template #code>

```vue
<template>
  <DsDivider text="OR" />
</template>
```

  </template>
</CodePreview>

### Vertical Divider

<CodePreview>
  <template #preview>
    <div style="display: flex; height: 60px; align-items: center; gap: 16px;">
      <span>Left content</span>
      <DsDivider vertical color="primary" />
      <span>Right content</span>
    </div>
  </template>
  <template #code>

```vue
<template>
  <div style="display: flex; height: 60px; align-items: center; gap: 16px;">
    <span>Left content</span>
    <DsDivider vertical />
    <span>Right content</span>
  </div>
</template>
```

  </template>
</CodePreview>

### Inset Divider

<CodePreview>
  <template #preview>
    <div style="width: 100%;">
      <p style="margin: 8px 0;">Content above divider</p>
      <DsDivider inset color="primary" :thickness="2" />
      <p style="margin: 8px 0;">Content below divider</p>
    </div>
  </template>
  <template #code>

```vue
<template>
  <DsDivider inset />
</template>
```

  </template>
</CodePreview>

### Custom Thickness & Color

<CodePreview>
  <template #preview>
    <div style="width: 100%; min-height: 150px; display: flex; flex-direction: column; gap: 24px; padding: 16px; justify-content: center;">
      <DsDivider :thickness="2" color="primary" />
      <DsDivider :thickness="4" color="error" />
      <DsDivider :thickness="6" color="success" />
    </div>
  </template>
  <template #code>

```vue
<template>
  <div>
    <DsDivider :thickness="2" color="primary" />
    <DsDivider :thickness="4" color="error" />
    <DsDivider :thickness="6" color="success" />
  </div>
</template>
```

  </template>
</CodePreview>

## API Reference

### Props

| Name      | Type            | Default          | Description                                                    |
| --------- | --------------- | ---------------- | -------------------------------------------------------------- |
| vertical  | Boolean         | false            | Displays divider vertically instead of horizontally            |
| inset     | Boolean         | false            | Adds margin to the divider                                     |
| thickness | Number\|String  | 1                | Thickness of the divider line in pixels                        |
| color     | String          | 'grey-lighten-4' | Color from design tokens (default, primary, secondary, error, etc.) |
| text      | String          | undefined        | Optional text displayed in the middle of the divider           |

### Events

DsDivider does not emit any custom events. It inherits all Vuetify `v-divider` events via `v-bind="$attrs"`.

### Slots

DsDivider does not use slots. Use the `text` prop to display text in the divider center.

**Note**: Earlier versions used a slot, but this was changed to a prop for better conditional rendering control.

## Guidelines

### Do

- Separate sections of content on a page
- Divide list items in menus or navigation
- Create visual breaks in forms or cards
- Add labeled dividers (e.g., "OR" between login options)
- Separate toolbar items or actions
- Use inset dividers to separate nested content items

### Don't

- Use dividers for whitespace alone - use CSS margin/padding instead
- Place dividers between every element - overuse reduces effectiveness
- Use dividers in place of proper headings - use typography hierarchy instead
- Use dividers for decorative borders - use CSS borders or cards instead
- Use full-width dividers for nested content - use inset dividers instead

## Accessibility

### ARIA & Semantics

- ✅ Uses semantic `<hr>` element
- ✅ `role="separator"` applied automatically by Vuetify
- ✅ `aria-orientation` set to "vertical" when `vertical` prop is true
- ✅ Screen readers announce as "separator" with appropriate orientation

### Keyboard Navigation

Dividers are non-interactive elements and do not receive keyboard focus. They serve as visual and semantic separators only.

### WCAG Compliance

This component meets WCAG 2.1 AAA standards:
- **Non-text Contrast**: Divider lines meet 3:1 contrast ratio (when using default or semantic colors)
- **Semantic HTML**: Uses proper `<hr>` element for content separation
- **Screen Reader Support**: Announced correctly with role and orientation
- **Focus Management**: Non-focusable (correct behavior for separator elements)

## Related Components

- [Card](/components/card) - For containing content with dividers
- [List](/components/list) - For separating list items
