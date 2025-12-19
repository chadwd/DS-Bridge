# Button Component

The `DsButton` component is a flexible button component that wraps Vuetify's `v-btn` with design system conventions and theming.

## Overview

DsButton provides a comprehensive button solution with multiple variants, sizes, and states. It supports Material Design 3 styling, icon-only buttons, loading states, and full accessibility features.

<script setup>
import { ref, computed } from 'vue';

const variant = ref('elevated');
const color = ref('primary');
const size = ref('md');
const disabled = ref(false);
const loading = ref(false);
const icon = ref(false);
const buttonText = ref('Click Me');

// Card Actions example state
const isFavorite = ref(false);
const toggleFavorite = () => {
  isFavorite.value = !isFavorite.value;
};

const generatedCode = computed(() => {
  const props = [];
  if (variant.value !== 'elevated') props.push(`variant="${variant.value}"`);
  if (color.value !== 'primary') props.push(`color="${color.value}"`);
  if (size.value !== 'md') props.push(`size="${size.value}"`);
  if (disabled.value) props.push(':disabled="true"');
  if (loading.value) props.push(':loading="true"');
  if (icon.value) props.push('icon');

  const propsString = props.length > 0 ? '\n    ' + props.join('\n    ') + '\n  ' : '';

  const content = icon.value
    ? '\n    <v-icon icon="mdi-emoticon-happy-outline" />\n  '
    : `\n    ${buttonText.value}\n  `;

  return `<template>
  <DsButton${propsString}>${content}</DsButton>
</template>`;
});
</script>

## Interactive Demo

<ComponentDemo
  title="Button Playground"
  description="Customize the button using the controls below to see different variants, colors, and sizes."
>
  <template #demo>
    <DsButton
      :variant="variant"
      :color="color"
      :size="size"
      :disabled="disabled"
      :loading="loading"
      :icon="icon"
      :aria-label="icon ? 'Sentiment satisfied' : undefined"
    >
      <v-icon v-if="icon" icon="mdi-emoticon-happy-outline" />
      <template v-else>{{ buttonText }}</template>
    </DsButton>
  </template>

  <template #controls>
    <PropControl
      label="Variant"
      v-model="variant"
      :options="['elevated', 'flat', 'tonal', 'outlined', 'text']"
      description="Button style variant"
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
      :options="['sm', 'md', 'lg']"
      description="Button size"
    />
    <PropControl
      label="Icon"
      v-model="icon"
      type="boolean"
      description="Render as icon-only button (48px × 48px)"
    />
    <PropControl
      label="Loading"
      v-model="loading"
      type="boolean"
      description="Show loading spinner"
    />
    <PropControl
      label="Disabled"
      v-model="disabled"
      type="boolean"
      description="Disable button interaction"
    />
    <PropControl
      v-if="!icon"
      label="Button Text"
      v-model="buttonText"
      type="text"
      placeholder="Enter button text"
      description="Text to display on button"
    />
  </template>

  <template #code>
    <pre><code class="language-vue">{{ generatedCode }}</code></pre>
  </template>
</ComponentDemo>

## Variants

<CodePreview>
  <template #preview>
    <div class="button-group">
      <DsButton variant="elevated">Elevated</DsButton>
      <DsButton variant="flat">Flat</DsButton>
      <DsButton variant="tonal">Tonal</DsButton>
      <DsButton variant="outlined">Outlined</DsButton>
      <DsButton variant="text">Text</DsButton>
    </div>
  </template>
  <template #code>

```vue
<template>
  <div class="button-group">
    <DsButton variant="elevated">Elevated</DsButton>
    <DsButton variant="flat">Flat</DsButton>
    <DsButton variant="tonal">Tonal</DsButton>
    <DsButton variant="outlined">Outlined</DsButton>
    <DsButton variant="text">Text</DsButton>
  </div>
</template>
```

  </template>
</CodePreview>

The button supports five Material Design 3 variants:

- **Elevated** (default): Filled button with shadow elevation, best for important primary actions
- **Flat**: Filled button without shadow, for high-emphasis actions in constrained spaces
- **Tonal**: Subtle filled button with background tint, for medium-emphasis actions
- **Outlined**: For secondary actions that need emphasis without solid fill
- **Text**: For tertiary or low-emphasis actions

## Sizes

<CodePreview>
  <template #preview>
    <div class="button-group">
      <DsButton size="sm">Small</DsButton>
      <DsButton size="md">Medium</DsButton>
      <DsButton size="lg">Large</DsButton>
    </div>
  </template>
  <template #code>

```vue
<template>
  <div class="button-group">
    <DsButton size="sm">Small</DsButton>
    <DsButton size="md">Medium</DsButton>
    <DsButton size="lg">Large</DsButton>
  </div>
</template>
```

  </template>
</CodePreview>

Buttons come in three sizes:

- **sm** (small): Compact buttons for tight spaces
- **md** (medium, default): Standard button size for most use cases
- **lg** (large): Larger buttons for prominent actions or touch interfaces

## Colors

<CodePreview>
  <template #preview>
    <div class="button-group button-group--compact">
      <DsButton color="primary">Primary</DsButton>
      <DsButton color="secondary">Secondary</DsButton>
      <DsButton color="success">Success</DsButton>
      <DsButton color="info">Info</DsButton>
      <DsButton color="warning">Warning</DsButton>
      <DsButton color="error">Error</DsButton>
    </div>
  </template>
  <template #code>

```vue
<template>
  <div class="button-group button-group--compact">
    <DsButton color="primary">Primary</DsButton>
    <DsButton color="secondary">Secondary</DsButton>
    <DsButton color="success">Success</DsButton>
    <DsButton color="info">Info</DsButton>
    <DsButton color="warning">Warning</DsButton>
    <DsButton color="error">Error</DsButton>
  </div>
</template>
```

  </template>
</CodePreview>

Buttons inherit colors from the design system tokens. Available colors include:

- **primary** (default): Brand primary color for main actions
- **secondary**: Secondary brand color for supporting actions
- **success**: Green color for positive or successful actions
- **info**: Blue color for informational actions
- **warning**: Amber/orange color for cautionary actions
- **error**: Red color for destructive or error-related actions

## States

### Disabled

<CodePreview>
  <template #preview>
    <div class="button-group">
      <DsButton disabled>Disabled</DsButton>
      <DsButton variant="outlined" disabled>Outlined Disabled</DsButton>
      <DsButton variant="text" disabled>Text Disabled</DsButton>
    </div>
  </template>
  <template #code>

```vue
<template>
  <div class="button-group">
    <DsButton disabled>Disabled</DsButton>
    <DsButton variant="outlined" disabled>Outlined Disabled</DsButton>
    <DsButton variant="text" disabled>Text Disabled</DsButton>
  </div>
</template>
```

  </template>
</CodePreview>

Disabled buttons prevent user interaction and indicate unavailable actions:

- Do not respond to clicks or keyboard events
- Display with reduced opacity
- Show a "not-allowed" cursor on hover
- Maintain accessibility with `disabled` attribute for screen readers

### Loading

<CodePreview>
  <template #preview>
    <div class="button-group">
      <DsButton :loading="true">Loading</DsButton>
      <DsButton :loading="true" variant="outlined">Loading</DsButton>
      <DsButton :loading="true" variant="text">Loading</DsButton>
    </div>
  </template>
  <template #code>

```vue
<template>
  <div class="button-group">
    <DsButton :loading="isLoading">Submit</DsButton>
    <DsButton :loading="isLoading" variant="outlined">Save</DsButton>
    <DsButton :loading="isLoading" variant="text">Cancel</DsButton>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const isLoading = ref(false);

// Example: Toggle loading state
const handleSubmit = async () => {
  isLoading.value = true;
  await someApiCall();
  isLoading.value = false;
};
</script>
```

  </template>
</CodePreview>

The loading state provides visual feedback during async operations:

- Displays a circular progress indicator
- Automatically disables the button to prevent multiple submissions
- Works seamlessly with all variants and colors
- Maintains button dimensions to prevent layout shift

## Icon Buttons

<CodePreview>
  <template #preview>
    <div class="button-group">
      <DsButton icon aria-label="Close" variant="elevated">
        <v-icon icon="mdi-close" />
      </DsButton>
      <DsButton icon aria-label="Edit" variant="flat">
        <v-icon icon="mdi-pencil" />
      </DsButton>
      <DsButton icon aria-label="Share" variant="tonal">
        <v-icon icon="mdi-share-variant" />
      </DsButton>
      <DsButton icon aria-label="Favorite" variant="outlined">
        <v-icon icon="mdi-heart" />
      </DsButton>
      <DsButton icon aria-label="Settings" variant="text">
        <v-icon icon="mdi-cog" />
      </DsButton>
    </div>
  </template>
  <template #code>

```vue
<template>
  <div class="button-group">
    <DsButton icon aria-label="Close" variant="elevated">
      <v-icon icon="mdi-close" />
    </DsButton>
    <DsButton icon aria-label="Edit" variant="flat">
      <v-icon icon="mdi-pencil" />
    </DsButton>
    <DsButton icon aria-label="Share" variant="tonal">
      <v-icon icon="mdi-share-variant" />
    </DsButton>
    <DsButton icon aria-label="Favorite" variant="outlined">
      <v-icon icon="mdi-heart" />
    </DsButton>
    <DsButton icon aria-label="Settings" variant="text">
      <v-icon icon="mdi-cog" />
    </DsButton>
  </div>
</template>
```

  </template>
</CodePreview>

Icon buttons are square buttons (48px × 48px) designed for icon-only actions. Use the `:icon` prop to enable icon button styling.

**When to use:**
- Close/dismiss actions
- Common actions (edit, delete, share, favorite)
- Toolbar actions
- Compact UI where space is limited
- Actions where icons are universally understood

**Important:** Always provide an `aria-label` for screen readers when using icon-only buttons.

### Icon Button Colors

<CodePreview>
  <template #preview>
    <div class="button-group">
      <DsButton icon aria-label="Add" color="primary">
        <v-icon icon="mdi-plus" />
      </DsButton>
      <DsButton icon aria-label="Delete" color="error">
        <v-icon icon="mdi-delete" />
      </DsButton>
      <DsButton icon aria-label="Check" color="success">
        <v-icon icon="mdi-check" />
      </DsButton>
      <DsButton icon aria-label="Alert" color="warning">
        <v-icon icon="mdi-alert" />
      </DsButton>
      <DsButton icon aria-label="Info" color="info">
        <v-icon icon="mdi-information" />
      </DsButton>
    </div>
  </template>
  <template #code>

```vue
<template>
  <div class="button-group">
    <DsButton icon aria-label="Add" color="primary">
      <v-icon icon="mdi-plus" />
    </DsButton>
    <DsButton icon aria-label="Delete" color="error">
      <v-icon icon="mdi-delete" />
    </DsButton>
    <DsButton icon aria-label="Check" color="success">
      <v-icon icon="mdi-check" />
    </DsButton>
    <DsButton icon aria-label="Alert" color="warning">
      <v-icon icon="mdi-alert" />
    </DsButton>
    <DsButton icon aria-label="Info" color="info">
      <v-icon icon="mdi-information" />
    </DsButton>
  </div>
</template>
```

  </template>
</CodePreview>

Icon buttons work with all color options to convey semantic meaning.

### Icon Button States

<CodePreview>
  <template #preview>
    <div class="button-group">
      <DsButton icon aria-label="Save changes">
        <v-icon icon="mdi-content-save" />
      </DsButton>
      <DsButton icon aria-label="Cannot save" :disabled="true">
        <v-icon icon="mdi-content-save" />
      </DsButton>
      <DsButton icon aria-label="Saving changes" :loading="true">
        <v-icon icon="mdi-content-save" />
      </DsButton>
    </div>
  </template>
  <template #code>

```vue
<template>
  <div class="button-group">
    <!-- Active -->
    <DsButton icon aria-label="Save changes">
      <v-icon icon="mdi-content-save" />
    </DsButton>

    <!-- Disabled -->
    <DsButton icon aria-label="Cannot save" :disabled="true">
      <v-icon icon="mdi-content-save" />
    </DsButton>

    <!-- Loading -->
    <DsButton icon aria-label="Saving changes" :loading="isSaving">
      <v-icon icon="mdi-content-save" />
    </DsButton>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const isSaving = ref(false);
</script>
```

  </template>
</CodePreview>

Icon buttons support disabled and loading states just like regular buttons.

### Common Icon Button Patterns

**Dialog Header with Close Button:**

<CodePreview>
  <template #preview>
    <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; border: 1px solid var(--vp-c-divider); border-radius: 8px; background: var(--vp-c-bg-soft);">
      <h3 style="margin: 0; font-size: 1.25rem;">Dialog Title</h3>
      <DsButton icon aria-label="Close dialog" variant="text" @click="() => alert('Dialog closed!')">
        <v-icon icon="mdi-close" />
      </DsButton>
    </div>
  </template>
  <template #code>

```vue
<template>
  <div class="dialog-header">
    <h3>Dialog Title</h3>
    <DsButton icon aria-label="Close dialog" variant="text" @click="closeDialog">
      <v-icon icon="mdi-close" />
    </DsButton>
  </div>
</template>

<script setup>
const closeDialog = () => {
  // Handle dialog close
};
</script>
```

  </template>
</CodePreview>

**Toolbar Actions:**

<CodePreview>
  <template #preview>
    <div style="display: flex; gap: 0.5rem; padding: 0.75rem; border: 1px solid var(--vp-c-divider); border-radius: 8px; background: var(--vp-c-bg-soft);">
      <DsButton icon aria-label="Add item" variant="tonal" @click="() => alert('Add item clicked!')">
        <v-icon icon="mdi-plus" />
      </DsButton>
      <DsButton icon aria-label="Edit" variant="tonal" @click="() => alert('Edit clicked!')">
        <v-icon icon="mdi-pencil" />
      </DsButton>
      <DsButton icon aria-label="Delete" variant="tonal" color="error" @click="() => alert('Delete clicked!')">
        <v-icon icon="mdi-delete" />
      </DsButton>
    </div>
  </template>
  <template #code>

```vue
<template>
  <div class="toolbar">
    <DsButton icon aria-label="Add item" variant="tonal" @click="addItem">
      <v-icon icon="mdi-plus" />
    </DsButton>
    <DsButton icon aria-label="Edit" variant="tonal" @click="editItem">
      <v-icon icon="mdi-pencil" />
    </DsButton>
    <DsButton icon aria-label="Delete" variant="tonal" color="error" @click="deleteItem">
      <v-icon icon="mdi-delete" />
    </DsButton>
  </div>
</template>

<script setup>
const addItem = () => console.log('Add item');
const editItem = () => console.log('Edit item');
const deleteItem = () => console.log('Delete item');
</script>
```

  </template>
</CodePreview>

**Card Actions:**

<CodePreview>
  <template #preview>
    <div style="display: flex; gap: 0.5rem; padding: 0.75rem; border: 1px solid var(--vp-c-divider); border-radius: 8px; background: var(--vp-c-bg-soft);">
      <DsButton icon aria-label="Favorite" variant="text" @click="toggleFavorite">
        <v-icon :icon="isFavorite ? 'mdi-heart' : 'mdi-heart-outline'" />
      </DsButton>
      <DsButton icon aria-label="Share" variant="text" @click="() => alert('Share clicked!')">
        <v-icon icon="mdi-share-variant" />
      </DsButton>
      <DsButton icon aria-label="More options" variant="text" @click="() => alert('More options clicked!')">
        <v-icon icon="mdi-dots-vertical" />
      </DsButton>
    </div>
  </template>
  <template #code>

```vue
<template>
  <div class="card-actions">
    <DsButton icon aria-label="Favorite" variant="text" @click="toggleFavorite">
      <v-icon :icon="isFavorite ? 'mdi-heart' : 'mdi-heart-outline'" />
    </DsButton>
    <DsButton icon aria-label="Share" variant="text" @click="share">
      <v-icon icon="mdi-share-variant" />
    </DsButton>
    <DsButton icon aria-label="More options" variant="text" @click="showMenu">
      <v-icon icon="mdi-dots-vertical" />
    </DsButton>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const isFavorite = ref(false);

const toggleFavorite = () => isFavorite.value = !isFavorite.value;
const share = () => console.log('Share');
const showMenu = () => console.log('Show menu');
</script>
```

  </template>
</CodePreview>

## API Reference

### Props

| Name     | Type    | Default   | Description                                                        |
| -------- | ------- | --------- | ------------------------------------------------------------------ |
| variant  | String  | elevated  | Button style: 'elevated', 'flat', 'tonal', 'outlined', or 'text'   |
| color    | String  | primary   | Color from design tokens (primary, secondary, error, warning, etc) |
| disabled | Boolean | false     | Disables button interaction                                        |
| loading  | Boolean | false     | Shows loading spinner and disables button                          |
| size     | String  | md        | Button size: 'sm', 'md', or 'lg'                                   |
| icon     | Boolean | false     | Renders button as icon-only with fixed 48px × 48px dimensions      |

### Events

| Event | Description                               |
| ----- | ----------------------------------------- |
| click | Emitted when button is clicked (if not disabled) |

### Slots

| Name    | Description   |
| ------- | ------------- |
| default | Button label  |

## Guidelines

### Do

- Use elevated buttons for primary, high-emphasis actions
- Use outlined or text buttons for secondary actions
- Provide clear, action-oriented button labels (e.g., "Save Changes", not just "Save")
- Use icon buttons with `aria-label` for all icon-only buttons
- Use loading state for async operations to provide feedback
- Ensure adequate spacing between buttons in button groups

### Don't

- Use too many elevated buttons on one screen - reserve for primary actions
- Use vague labels like "Click Here" or "Submit" without context
- Create icon buttons without `aria-label` attributes
- Use disabled state as the only indicator - provide helper text explaining why
- Make buttons too small for touch targets (minimum 48×48px)
- Use buttons for navigation - use links or router-links instead

## Accessibility

The Button component is built with WCAG 2.1 AAA compliance in mind:

- **Keyboard Navigation**: Fully accessible via Tab key, activated with Enter or Space
- **Focus States**: Clear, high-contrast focus indicators
- **Semantic HTML**: Uses native `<button>` elements for proper screen reader support
- **Color Contrast**: All color variants meet AAA contrast requirements

### Icon Button Accessibility

Icon-only buttons require special attention for screen reader users:

**Always provide an `aria-label`:**

```vue
<!-- Good: Screen readers announce "Close dialog" -->
<ds-button icon aria-label="Close dialog">
  <v-icon icon="mdi-close" />
</ds-button>

<!-- Bad: Screen readers cannot identify the button's purpose -->
<ds-button icon>
  <v-icon icon="mdi-close" />
</ds-button>
```

**Use descriptive labels that explain the action:**

```vue
<!-- Good: Clear, action-oriented -->
<ds-button icon aria-label="Delete user account">
  <v-icon icon="mdi-delete" />
</ds-button>

<!-- Less helpful: Too generic -->
<ds-button icon aria-label="Delete">
  <v-icon icon="mdi-delete" />
</ds-button>
```

### Loading State Accessibility

When a button is in a loading state:
- The button is automatically disabled
- Screen readers announce the loading state
- The loading spinner has appropriate ARIA attributes

```vue
<ds-button :loading="isSubmitting" aria-label="Submit form">
  Submit
</ds-button>
```

### Focus Management

- Buttons receive keyboard focus with the Tab key
- Focused buttons can be activated with Enter or Space
- Focus order follows DOM order
- Focus indicators meet WCAG AAA contrast requirements (3:1 minimum)

## Usage Examples

### Basic Usage

```vue
<template>
  <ds-button @click="handleClick">Save Changes</ds-button>
</template>

<script>
export default {
  methods: {
    handleClick() {
      console.log('Button clicked');
    },
  },
};
</script>
```

<CodePreview>
  <template #preview>
    <DsButton @click="() => alert('Changes saved!')">Save Changes</DsButton>
  </template>
  <template #code>

```vue
<template>
  <DsButton @click="handleClick">Save Changes</DsButton>
</template>

<script setup>
const handleClick = () => {
  console.log('Button clicked');
  alert('Changes saved!');
};
</script>
```

  </template>
</CodePreview>

### With Router Link

```vue
<template>
  <ds-button @click="$router.push('/dashboard')">
    Go to Dashboard
  </ds-button>
</template>
```

<CodePreview>
  <template #preview>
    <DsButton @click="() => alert('Navigating to dashboard...')">
      Go to Dashboard
    </DsButton>
  </template>
  <template #code>

```vue
<template>
  <DsButton @click="navigateToDashboard">
    Go to Dashboard
  </DsButton>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();
const navigateToDashboard = () => {
  router.push('/dashboard');
};
</script>
```

  </template>
</CodePreview>

### Button Groups

```vue
<template>
  <div class="d-flex gap-2">
    <ds-button variant="outlined">Cancel</ds-button>
    <ds-button>Save</ds-button>
  </div>
</template>
```

<CodePreview>
  <template #preview>
    <div class="button-group">
      <DsButton variant="outlined" @click="() => alert('Cancelled')">Cancel</DsButton>
      <DsButton @click="() => alert('Saved!')">Save</DsButton>
    </div>
  </template>
  <template #code>

```vue
<template>
  <div class="button-group">
    <DsButton variant="outlined" @click="handleCancel">Cancel</DsButton>
    <DsButton @click="handleSave">Save</DsButton>
  </div>
</template>

<script setup>
const handleCancel = () => {
  console.log('Cancelled');
};

const handleSave = () => {
  console.log('Saved');
};
</script>
```

  </template>
</CodePreview>

