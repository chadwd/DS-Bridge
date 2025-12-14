# Button Component

The `DsButton` component is a flexible button component that wraps Vuetify's `v-btn` with design system conventions and theming.

<script setup>
import { ref, computed } from 'vue';

const variant = ref('filled');
const color = ref('primary');
const size = ref('md');
const disabled = ref(false);
const buttonText = ref('Click Me');

const generatedCode = computed(() => {
  const props = [];
  if (variant.value !== 'filled') props.push(`variant="${variant.value}"`);
  if (color.value !== 'primary') props.push(`color="${color.value}"`);
  if (size.value !== 'md') props.push(`size="${size.value}"`);
  if (disabled.value) props.push(':disabled="true"');

  const propsString = props.length > 0 ? '\n    ' + props.join('\n    ') + '\n  ' : '';

  return `<template>
  <DsButton${propsString}>
    ${buttonText.value}
  </DsButton>
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
    >
      {{ buttonText }}
    </DsButton>
  </template>

  <template #controls>
    <PropControl
      label="Variant"
      v-model="variant"
      :options="['filled', 'outlined', 'text', 'tonal', 'elevated']"
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
      label="Disabled"
      v-model="disabled"
      type="boolean"
      description="Disable button interaction"
    />
    <PropControl
      label="Button Text"
      v-model="buttonText"
      type="text"
      placeholder="Enter button text"
      description="Text to display on button"
    />
  </template>

  <template #code>

```vue
{{ generatedCode }}
```

  </template>
</ComponentDemo>

## When to Use

Use buttons for:
- Primary actions (submit, save, create)
- Secondary or tertiary actions
- Navigation when paired with routing
- Triggering modals or dialogs

## Variants

The button supports three variants:

### Filled (Default)

The primary button style, best for important actions.

```vue
<ds-button>Click me</ds-button>
<ds-button color="secondary">Secondary</ds-button>
<ds-button color="error">Delete</ds-button>
```

### Outlined

For secondary actions that need emphasis without being primary.

```vue
<ds-button variant="outlined">Cancel</ds-button>
<ds-button variant="outlined" color="primary">Learn more</ds-button>
```

### Text

For tertiary or low-emphasis actions.

```vue
<ds-button variant="text">Skip</ds-button>
<ds-button variant="text" color="error">Dismiss</ds-button>
```

### Live Example: All Variants

<CodePreview>
  <template #preview>
    <div style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center;">
      <DsButton variant="filled">Filled</DsButton>
      <DsButton variant="elevated">Elevated</DsButton>
      <DsButton variant="tonal">Tonal</DsButton>
      <DsButton variant="outlined">Outlined</DsButton>
      <DsButton variant="text">Text</DsButton>
    </div>
  </template>
  <template #code>

```vue
<template>
  <div style="display: flex; gap: 1rem;">
    <DsButton variant="filled">Filled</DsButton>
    <DsButton variant="elevated">Elevated</DsButton>
    <DsButton variant="tonal">Tonal</DsButton>
    <DsButton variant="outlined">Outlined</DsButton>
    <DsButton variant="text">Text</DsButton>
  </div>
</template>
```

  </template>
</CodePreview>

## Sizes

Buttons come in three sizes: small, medium (default), and large.

```vue
<ds-button size="sm">Small</ds-button>
<ds-button size="md">Medium</ds-button>
<ds-button size="lg">Large</ds-button>
```

## Colors

Buttons inherit colors from the design system tokens. Available colors include:

- `primary` (default) - Brand primary color
- `secondary` - Secondary brand color
- `error` - For destructive actions
- `warning` - For cautionary actions
- `success` - For positive actions
- `info` - For informational actions

```vue
<ds-button color="primary">Primary</ds-button>
<ds-button color="secondary">Secondary</ds-button>
<ds-button color="error">Error</ds-button>
```

### Live Example: All Colors

<CodePreview>
  <template #preview>
    <div style="display: flex; gap: 0.75rem; flex-wrap: wrap; align-items: center;">
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
  <div style="display: flex; gap: 0.75rem; flex-wrap: wrap;">
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

## States

### Disabled

Disable buttons to prevent interaction:

```vue
<ds-button disabled>Disabled</ds-button>
```

Disabled buttons:
- Do not respond to clicks
- Have reduced opacity
- Have a different cursor style

### Loading

While Vuetify's loading state isn't directly exposed, you can use slots:

```vue
<ds-button :disabled="isLoading">
  {{ isLoading ? 'Loading...' : 'Submit' }}
</ds-button>
```

## API Reference

### Props

| Name     | Type    | Default | Description                      |
| -------- | ------- | ------- | -------------------------------- |
| variant  | String  | filled  | 'filled', 'outlined', or 'text'  |
| color    | String  | primary | Color name from design tokens    |
| disabled | Boolean | false   | Whether the button is disabled   |
| size     | String  | md      | 'sm', 'md', or 'lg'              |

### Events

| Event | Description                               |
| ----- | ----------------------------------------- |
| click | Emitted when button is clicked (if not disabled) |

### Slots

| Name    | Description   |
| ------- | ------------- |
| default | Button label  |

## Accessibility

- Buttons are fully keyboard accessible
- Focus states are clearly visible
- Labels are semantic and descriptive

### Icon-Only Buttons

When using icon-only buttons, always provide an `aria-label`:

```vue
<ds-button aria-label="Close dialog">
  <v-icon icon="mdi-close" />
</ds-button>
```

### Focus Management

Buttons receive focus with the Tab key and can be activated with Enter or Space.

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

### With Router Link

```vue
<template>
  <ds-button @click="$router.push('/dashboard')">
    Go to Dashboard
  </ds-button>
</template>
```

### Conditional Styling

```vue
<template>
  <div>
    <ds-button
      :color="isValid ? 'primary' : 'error'"
      :disabled="!isValid"
    >
      {{ isValid ? 'Submit' : 'Fix errors' }}
    </ds-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isValid: false,
    };
  },
};
</script>
```

### Button Groups

```vue
<template>
  <div class="d-flex gap-2">
    <ds-button variant="outlined">Cancel</ds-button>
    <ds-button>Save</ds-button>
  </div>
</template>
```

## Design System Integration

The button component uses design tokens from `src/tokens/index.js`:

- **Colors**: All color props map to token values
- **Typography**: Font weights and sizes follow token definitions
- **Spacing**: Internal padding uses token spacing scale

This ensures consistency across your entire application and makes it easy to update styles globally by modifying design tokens.
