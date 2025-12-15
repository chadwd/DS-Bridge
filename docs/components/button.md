# Button Component

The `DsButton` component is a flexible button component that wraps Vuetify's `v-btn` with design system conventions and theming.

<script setup>
import { ref, computed } from 'vue';

const variant = ref('elevated');
const color = ref('primary');
const size = ref('md');
const disabled = ref(false);
const buttonText = ref('Click Me');

// For conditional styling example
const conditionalValid = ref(false);

const generatedCode = computed(() => {
  const props = [];
  if (variant.value !== 'elevated') props.push(`variant="${variant.value}"`);
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
    <pre><code class="language-vue">{{ generatedCode }}</code></pre>
  </template>
</ComponentDemo>

## When to Use

Use buttons for:
- Primary actions (submit, save, create)
- Secondary or tertiary actions
- Navigation when paired with routing
- Triggering modals or dialogs

## Variants

The button supports five Material Design 3 variants:

### Elevated (Default)

Filled button with shadow elevation, best for important primary actions.

```vue
<ds-button variant="elevated">Click me</ds-button>
<ds-button variant="elevated" color="secondary">Secondary</ds-button>
<ds-button variant="elevated" color="error">Delete</ds-button>
```

### Flat

Filled button without shadow, for high-emphasis actions in constrained spaces.

```vue
<ds-button variant="flat">Save</ds-button>
<ds-button variant="flat" color="primary">Continue</ds-button>
```

### Tonal

Subtle filled button with background tint, for medium-emphasis actions.

```vue
<ds-button variant="tonal">Edit</ds-button>
<ds-button variant="tonal" color="success">Approve</ds-button>
```

### Outlined

For secondary actions that need emphasis without solid fill.

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

## Sizes

Buttons come in three sizes: small, medium (default), and large.

```vue
<ds-button size="sm">Small</ds-button>
<ds-button size="md">Medium</ds-button>
<ds-button size="lg">Large</ds-button>
```

### Live Example: All Sizes

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

### Live Example: Disabled States

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

### Loading

While Vuetify's loading state isn't directly exposed, you can use slots:

```vue
<ds-button :disabled="isLoading">
  {{ isLoading ? 'Loading...' : 'Submit' }}
</ds-button>
```

### Live Example: Loading State

<CodePreview>
  <template #preview>
    <div class="button-group">
      <DsButton disabled>Loading...</DsButton>
      <DsButton>Submit</DsButton>
    </div>
  </template>
  <template #code>

```vue
<template>
  <div class="button-group">
    <DsButton :disabled="isLoading">
      {{ isLoading ? 'Loading...' : 'Submit' }}
    </DsButton>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const isLoading = ref(false);
</script>
```

  </template>
</CodePreview>

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

<CodePreview>
  <template #preview>
    <div style="display: flex; flex-direction: column; gap: 1rem; align-items: flex-start;">
      <DsButton
        :color="conditionalValid ? 'success' : 'error'"
        :disabled="!conditionalValid"
        @click="conditionalValid = !conditionalValid"
      >
        {{ conditionalValid ? 'Valid - Click to toggle' : 'Invalid - Click to toggle' }}
      </DsButton>
      <p style="color: var(--vp-c-text-2); font-size: 0.875rem; margin: 0;">
        Click the button to toggle between valid and invalid states
      </p>
    </div>
  </template>
  <template #code>

```vue
<template>
  <DsButton
    :color="isValid ? 'success' : 'error'"
    :disabled="!isValid"
  >
    {{ isValid ? 'Submit' : 'Fix errors' }}
  </DsButton>
</template>

<script setup>
import { ref } from 'vue';
const isValid = ref(false);
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

## Design System Integration

The button component uses design tokens from `src/tokens/index.js`:

- **Colors**: All color props map to token values
- **Typography**: Font weights and sizes follow token definitions
- **Spacing**: Internal padding uses token spacing scale

This ensures consistency across your entire application and makes it easy to update styles globally by modifying design tokens.
