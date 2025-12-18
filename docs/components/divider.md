# Divider Component

The `DsDivider` component is a flexible divider component that wraps Vuetify's `v-divider` for separating content visually.

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
      <DsDivider />
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
      <DsDivider text="OR" />
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
      <DsDivider vertical />
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
    <div>
      <DsDivider inset />
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
    <div style="display: flex; flex-direction: column; gap: 16px;">
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

| Name      | Type            | Default         | Description                                                    |
| --------- | --------------- | --------------- | -------------------------------------------------------------- |
| vertical  | Boolean         | false           | Displays divider vertically instead of horizontally            |
| inset     | Boolean         | false           | Adds margin to the divider                                     |
| thickness | Number\|String  | 1               | Thickness of the divider line in pixels                        |
| color     | String          | 'grey-lighten-5' | Color from design tokens (default, primary, secondary, error, etc.) |
| text      | String          | undefined       | Optional text displayed in the middle of the divider           |

## Accessibility

- ✅ WCAG 2.1 AAA compliant
- ✅ Uses semantic `<hr>` element
- ✅ `role="separator"` applied automatically by Vuetify
- ✅ Screen reader compatible

## Related Components

- [Card](/components/card) - For containing content with dividers
- [List](/components/list) - For separating list items
