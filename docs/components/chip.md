# Chip Component

The `DsChip` component is a flexible chip component that wraps Vuetify's `v-chip` for displaying compact elements like tags, filters, and status indicators.

## Overview

DsChip provides a comprehensive chip solution with multiple variants, sizes, and customization options. It supports Material Design 3 styling, closable chips, icon support, and full accessibility features.

<script setup>
import { ref, computed } from 'vue';

const variant = ref('tonal');
const color = ref('primary');
const size = ref('default');
const closable = ref(false);
const pill = ref(true);
const label = ref(false);
const prependIcon = ref('');
const appendIcon = ref('');
const disabled = ref(false);
const chipText = ref('Chip Label');
const showChip = ref(true);

const handleClose = () => {
  showChip.value = false;
  setTimeout(() => {
    showChip.value = true;
  }, 2000);
};

const generatedCode = computed(() => {
  const props = [];
  if (variant.value !== 'tonal') props.push(`variant="${variant.value}"`);
  if (color.value !== 'primary') props.push(`color="${color.value}"`);
  if (size.value !== 'default') props.push(`size="${size.value}"`);
  if (closable.value) props.push(':closable="true"');
  if (!pill.value) props.push(':pill="false"');
  if (label.value) props.push(':label="true"');
  if (prependIcon.value) props.push(`prepend-icon="${prependIcon.value}"`);
  if (appendIcon.value) props.push(`append-icon="${appendIcon.value}"`);
  if (disabled.value) props.push(':disabled="true"');

  const propsString = props.length > 0 ? '\n    ' + props.join('\n    ') + '\n  ' : '';

  return `<template>
  <DsChip${propsString}>
    ${chipText.value}
  </DsChip>
</template>`;
});
</script>

## Interactive Demo

<ComponentDemo
  title="Chip Playground"
  description="Customize the chip using the controls below to see different variants, colors, sizes, and features."
>
  <template #demo>
    <DsChip
      v-if="showChip"
      :variant="variant"
      :color="color"
      :size="size"
      :closable="closable"
      :pill="pill"
      :label="label"
      :prepend-icon="prependIcon || undefined"
      :append-icon="appendIcon || undefined"
      :disabled="disabled"
      @click:close="handleClose"
    >
      {{ chipText }}
    </DsChip>
    <div v-else style="color: #666; font-style: italic; padding: 12px;">
      Chip closed. Reappearing in 2 seconds...
    </div>
  </template>

  <template #controls>
    <PropControl
      label="Variant"
      v-model="variant"
      :options="['elevated', 'flat', 'tonal', 'outlined', 'text']"
      description="Chip style variant"
    />
    <PropControl
      label="Color"
      v-model="color"
      :options="['primary', 'secondary', 'error', 'warning', 'success', 'info']"
      description="Color from design tokens"
    />
    <PropControl
      label="Size"
      v-model="size"
      :options="['x-small', 'small', 'default', 'large', 'x-large']"
      description="Chip size"
    />
    <PropControl
      label="Closable"
      v-model="closable"
      type="boolean"
      description="Show close icon"
    />
    <PropControl
      label="Pill"
      v-model="pill"
      type="boolean"
      description="Pill-shaped border radius"
    />
    <PropControl
      label="Label"
      v-model="label"
      type="boolean"
      description="Square corners (overrides pill)"
    />
    <PropControl
      label="Prepend Icon"
      v-model="prependIcon"
      :options="['', 'mdi-account', 'mdi-star', 'mdi-heart']"
      description="Icon before text"
    />
    <PropControl
      label="Append Icon"
      v-model="appendIcon"
      :options="['', 'mdi-chevron-down', 'mdi-close', 'mdi-check']"
      description="Icon after text"
    />
    <PropControl
      label="Disabled"
      v-model="disabled"
      type="boolean"
      description="Disable chip interaction"
    />
    <PropControl
      label="Chip Text"
      v-model="chipText"
      type="text"
      placeholder="Enter chip text"
      description="Text to display on chip"
    />
  </template>

  <template #code>
    <pre><code class="language-vue">{{ generatedCode }}</code></pre>
  </template>
</ComponentDemo>

## Variants

<CodePreview>
  <template #preview>
    <div class="chip-group">
      <DsChip variant="elevated">Elevated</DsChip>
      <DsChip variant="flat">Flat</DsChip>
      <DsChip variant="tonal">Tonal</DsChip>
      <DsChip variant="outlined">Outlined</DsChip>
      <DsChip variant="text">Text</DsChip>
    </div>
  </template>
  <template #code>

```vue
<template>
  <div class="chip-group">
    <DsChip variant="elevated">Elevated</DsChip>
    <DsChip variant="flat">Flat</DsChip>
    <DsChip variant="tonal">Tonal</DsChip>
    <DsChip variant="outlined">Outlined</DsChip>
    <DsChip variant="text">Text</DsChip>
  </div>
</template>
```

  </template>
</CodePreview>

## Sizes

<CodePreview>
  <template #preview>
    <div class="chip-group" style="align-items: center;">
      <DsChip size="x-small">X-Small</DsChip>
      <DsChip size="small">Small</DsChip>
      <DsChip size="default">Default</DsChip>
      <DsChip size="large">Large</DsChip>
      <DsChip size="x-large">X-Large</DsChip>
    </div>
  </template>
  <template #code>

```vue
<template>
  <div class="chip-group">
    <DsChip size="x-small">X-Small</DsChip>
    <DsChip size="small">Small</DsChip>
    <DsChip size="default">Default</DsChip>
    <DsChip size="large">Large</DsChip>
    <DsChip size="x-large">X-Large</DsChip>
  </div>
</template>
```

  </template>
</CodePreview>

## With Icons

<CodePreview>
  <template #preview>
    <div class="chip-group">
      <DsChip prepend-icon="mdi-account">User</DsChip>
      <DsChip append-icon="mdi-chevron-down">Dropdown</DsChip>
      <DsChip prepend-icon="mdi-star" append-icon="mdi-close">Favorite</DsChip>
    </div>
  </template>
  <template #code>

```vue
<template>
  <div class="chip-group">
    <DsChip prepend-icon="mdi-account">User</DsChip>
    <DsChip append-icon="mdi-chevron-down">Dropdown</DsChip>
    <DsChip prepend-icon="mdi-star" append-icon="mdi-close">Favorite</DsChip>
  </div>
</template>
```

  </template>
</CodePreview>

## Closable

<CodePreview>
  <template #preview>
    <div class="chip-group">
      <DsChip closable>Closable Chip</DsChip>
      <DsChip closable color="secondary">Remove Tag</DsChip>
      <DsChip closable variant="outlined" color="error">Delete Filter</DsChip>
    </div>
  </template>
  <template #code>

```vue
<template>
  <div class="chip-group">
    <DsChip closable>Closable Chip</DsChip>
    <DsChip closable color="secondary">Remove Tag</DsChip>
    <DsChip closable variant="outlined" color="error">Delete Filter</DsChip>
  </div>
</template>
```

  </template>
</CodePreview>

## Shapes

<CodePreview>
  <template #preview>
    <div class="chip-group">
      <DsChip :pill="true">Pill Shape (Default)</DsChip>
      <DsChip :pill="false">Rounded</DsChip>
      <DsChip :label="true">Label (Square)</DsChip>
    </div>
  </template>
  <template #code>

```vue
<template>
  <div class="chip-group">
    <DsChip :pill="true">Pill Shape (Default)</DsChip>
    <DsChip :pill="false">Rounded</DsChip>
    <DsChip :label="true">Label (Square)</DsChip>
  </div>
</template>
```

  </template>
</CodePreview>

## Colors

<CodePreview>
  <template #preview>
    <div class="chip-group">
      <DsChip color="primary">Primary</DsChip>
      <DsChip color="secondary">Secondary</DsChip>
      <DsChip color="success">Success</DsChip>
      <DsChip color="warning">Warning</DsChip>
      <DsChip color="error">Error</DsChip>
      <DsChip color="info">Info</DsChip>
    </div>
  </template>
  <template #code>

```vue
<template>
  <div class="chip-group">
    <DsChip color="primary">Primary</DsChip>
    <DsChip color="secondary">Secondary</DsChip>
    <DsChip color="success">Success</DsChip>
    <DsChip color="warning">Warning</DsChip>
    <DsChip color="error">Error</DsChip>
    <DsChip color="info">Info</DsChip>
  </div>
</template>
```

  </template>
</CodePreview>

## Disabled State

<CodePreview>
  <template #preview>
    <div class="chip-group">
      <DsChip disabled>Disabled Chip</DsChip>
      <DsChip disabled variant="outlined">Disabled Outlined</DsChip>
      <DsChip disabled closable>Disabled Closable</DsChip>
    </div>
  </template>
  <template #code>

```vue
<template>
  <div class="chip-group">
    <DsChip disabled>Disabled Chip</DsChip>
    <DsChip disabled variant="outlined">Disabled Outlined</DsChip>
    <DsChip disabled closable>Disabled Closable</DsChip>
  </div>
</template>
```

  </template>
</CodePreview>

<style scoped>
.chip-group {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  align-items: center;
}
</style>

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| variant | `'elevated'` \| `'flat'` \| `'tonal'` \| `'outlined'` \| `'text'` | `'tonal'` | Chip style variant |
| color | `string` | `'primary'` | Color from design tokens (primary, secondary, error, warning, success, info) |
| size | `'x-small'` \| `'small'` \| `'default'` \| `'large'` \| `'x-large'` | `'default'` | Chip size |
| closable | `boolean` | `false` | Show close icon that emits click:close event when clicked |
| pill | `boolean` | `true` | Apply pill-shaped border radius (fully rounded ends) |
| label | `boolean` | `false` | Apply square corners instead of rounded (overrides pill) |
| prependIcon | `string` | `undefined` | Material Design Icon to display before text (e.g., 'mdi-account') |
| appendIcon | `string` | `undefined` | Material Design Icon to display after text (e.g., 'mdi-close') |
| disabled | `boolean` | `false` | Disable chip interaction and apply disabled styling |

## Events

| Event | Payload | Description |
|-------|---------|-------------|
| click:close | `MouseEvent` | Emitted when the close icon is clicked (only when closable is true) |

## Slots

| Slot | Description |
|------|-------------|
| default | Main chip content/label text |

## Guidelines

### Do

- Use chips to represent filters, tags, or categorization in a compact format
- Keep chip labels short and scannable (1-3 words maximum)
- Use closable chips for dismissible items like selected filters or active tags
- Use tonal variant for low-emphasis chips in dense layouts
- Group related chips together with consistent spacing (12px gap recommended)
- Use prepend icons to add visual context (e.g., user icon for contacts, star for favorites)

### Don't

- Don't use chips as primary action buttons - use DsButton instead
- Don't use long text labels that wrap or truncate awkwardly
- Don't mix different variants within the same chip group for visual consistency
- Don't use closable chips for permanent, non-dismissible information
- Don't use chips for critical information that must be immediately visible
- Don't stack multiple icons (prepend + append + close) which creates visual clutter

## Accessibility

### ARIA & Semantics

- ✅ Uses semantic button element for interactive chips
- ✅ Close button includes proper ARIA label "Close" for screen readers
- ✅ Disabled chips have `aria-disabled="true"` attribute
- ✅ Screen readers announce chip role and content correctly

### Keyboard Navigation

- **Tab**: Focus the chip or close button
- **Enter/Space**: Activate chip click or close action
- **Escape**: Not applicable (chips don't open menus/dialogs)

### WCAG Compliance

This component meets WCAG 2.1 AAA standards:
- **Keyboard Accessible**: Full keyboard navigation support for all interactive elements
- **Screen Reader Support**: Proper semantic markup and ARIA labels for close button
- **Focus Management**: Clear focus indicators on chip and close button
- **Color Contrast**: All color variants and states meet AAA contrast requirements (7:1 for normal text)

## Related Components

- [Button](/components/button) - For primary actions and commands
- [Divider](/components/divider) - For separating chip groups or sections
