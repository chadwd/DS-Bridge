#!/bin/bash

# DS-Bridge Component Generator
# Creates a new component based on the Button template
# Usage: npm run create-component ComponentName

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Check if component name is provided
if [ -z "$1" ]; then
  echo -e "${RED}Error: Component name is required${NC}"
  echo "Usage: npm run create-component ComponentName"
  echo "Example: npm run create-component Card"
  exit 1
fi

COMPONENT_NAME="$1"
COMPONENT_NAME_LOWER=$(echo "$COMPONENT_NAME" | tr '[:upper:]' '[:lower:]')
COMPONENT_NAME_PASCAL="$COMPONENT_NAME"

echo -e "${BLUE}🚀 Creating new component: ${COMPONENT_NAME}${NC}"
echo ""

# Check if component already exists
if [ -f "src/components/${COMPONENT_NAME}.vue" ]; then
  echo -e "${RED}Error: Component ${COMPONENT_NAME}.vue already exists!${NC}"
  exit 1
fi

# Step 1: Create Vue component
echo -e "${YELLOW}📝 Step 1/6: Creating Vue component...${NC}"
cat > "src/components/${COMPONENT_NAME}.vue" << 'EOF'
<template>
  <v-COMPONENT_LOWER
    :variant="variant"
    :color="color"
    :disabled="disabled"
    :loading="loading"
    v-bind="$attrs"
    class="ds-COMPONENT_LOWER"
  >
    <slot />
  </v-COMPONENT_LOWER>
</template>

<script setup lang="ts">
/**
 * DsCOMPONENT_PASCAL - Design System COMPONENT_PASCAL Component
 *
 * A flexible COMPONENT_LOWER wrapper around Vuetify's v-COMPONENT_LOWER that applies design system styling and conventions.
 *
 * Props:
 *   - variant: Component style variant (default: 'elevated')
 *   - color: Color name from design tokens (default: 'primary')
 *   - disabled: Boolean to disable the component (default: false)
 *   - loading: Boolean to show loading state (default: false)
 *
 * Slots:
 *   - default: Component content
 *
 * Accessibility:
 *   - Follows WCAG 2.1 AAA compliance
 *   - Supports keyboard navigation
 *   - Includes proper ARIA attributes
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
.ds-COMPONENT_LOWER {
  /* Add component-specific styles here */
  /* Use design tokens: var(--ds-spacing-*, --ds-color-*, etc.) */
}
</style>
EOF

# Replace placeholders
sed -i '' "s/COMPONENT_PASCAL/${COMPONENT_NAME_PASCAL}/g" "src/components/${COMPONENT_NAME}.vue"
sed -i '' "s/COMPONENT_LOWER/${COMPONENT_NAME_LOWER}/g" "src/components/${COMPONENT_NAME}.vue"

echo -e "${GREEN}✓ Created src/components/${COMPONENT_NAME}.vue${NC}"

# Step 2: Create unit tests
echo -e "${YELLOW}📝 Step 2/6: Creating unit tests...${NC}"
cat > "tests/${COMPONENT_NAME}.spec.js" << 'EOF'
import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import DsCOMPONENT_PASCAL from '../src/components/COMPONENT_PASCAL.vue';

const vuetify = createVuetify({ components, directives });

describe('DsCOMPONENT_PASCAL.vue', () => {
  it('renders with default props', () => {
    const wrapper = mount(DsCOMPONENT_PASCAL, {
      slots: { default: 'Test Content' },
      global: { plugins: [vuetify] },
    });

    expect(wrapper.text()).toContain('Test Content');
    expect(wrapper.find('.ds-COMPONENT_LOWER').exists()).toBe(true);
  });

  it('applies variant prop correctly', () => {
    const wrapper = mount(DsCOMPONENT_PASCAL, {
      props: { variant: 'outlined' },
      slots: { default: 'Test' },
      global: { plugins: [vuetify] },
    });

    const vComponent = wrapper.findComponent({ name: 'VCOMPONENT_PASCAL' });
    expect(vComponent.props('variant')).toBe('outlined');
  });

  it('applies color prop correctly', () => {
    const wrapper = mount(DsCOMPONENT_PASCAL, {
      props: { color: 'secondary' },
      slots: { default: 'Test' },
      global: { plugins: [vuetify] },
    });

    const vComponent = wrapper.findComponent({ name: 'VCOMPONENT_PASCAL' });
    expect(vComponent.props('color')).toBe('secondary');
  });

  it('handles disabled state', () => {
    const wrapper = mount(DsCOMPONENT_PASCAL, {
      props: { disabled: true },
      slots: { default: 'Test' },
      global: { plugins: [vuetify] },
    });

    const vComponent = wrapper.findComponent({ name: 'VCOMPONENT_PASCAL' });
    expect(vComponent.props('disabled')).toBe(true);
  });

  it('handles loading state', () => {
    const wrapper = mount(DsCOMPONENT_PASCAL, {
      props: { loading: true },
      slots: { default: 'Test' },
      global: { plugins: [vuetify] },
    });

    const vComponent = wrapper.findComponent({ name: 'VCOMPONENT_PASCAL' });
    expect(vComponent.props('loading')).toBe(true);
  });

  it('supports all variants', () => {
    const variants = ['elevated', 'flat', 'tonal', 'outlined', 'text'];

    variants.forEach((variant) => {
      const wrapper = mount(DsCOMPONENT_PASCAL, {
        props: { variant },
        slots: { default: 'Test' },
        global: { plugins: [vuetify] },
      });

      const vComponent = wrapper.findComponent({ name: 'VCOMPONENT_PASCAL' });
      expect(vComponent.props('variant')).toBe(variant);
    });
  });
});
EOF

sed -i '' "s/COMPONENT_PASCAL/${COMPONENT_NAME_PASCAL}/g" "tests/${COMPONENT_NAME}.spec.js"
sed -i '' "s/COMPONENT_LOWER/${COMPONENT_NAME_LOWER}/g" "tests/${COMPONENT_NAME}.spec.js"
sed -i '' "s/VCOMPONENT_PASCAL/V${COMPONENT_NAME_PASCAL}/g" "tests/${COMPONENT_NAME}.spec.js"

echo -e "${GREEN}✓ Created tests/${COMPONENT_NAME}.spec.js${NC}"

# Step 3: Create accessibility tests
echo -e "${YELLOW}📝 Step 3/6: Creating accessibility tests...${NC}"
cat > "tests/${COMPONENT_NAME}.a11y.spec.ts" << 'EOF'
import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import { createVuetify } from 'vuetify';
import { axe, toHaveNoViolations } from 'jest-axe';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import DsCOMPONENT_PASCAL from '../src/components/COMPONENT_PASCAL.vue';

expect.extend(toHaveNoViolations);

const vuetify = createVuetify({ components, directives });

describe('DsCOMPONENT_PASCAL Accessibility', () => {
  it('should have no accessibility violations (default)', async () => {
    const wrapper = mount(DsCOMPONENT_PASCAL, {
      slots: { default: 'Accessible COMPONENT_PASCAL' },
      global: { plugins: [vuetify] },
      attachTo: document.body,
    });

    const results = await axe(wrapper.element);
    expect(results).toHaveNoViolations();
    wrapper.unmount();
  });

  it('should have no violations with all variants', async () => {
    const variants = ['elevated', 'flat', 'tonal', 'outlined', 'text'];

    for (const variant of variants) {
      const wrapper = mount(DsCOMPONENT_PASCAL, {
        props: { variant },
        slots: { default: `${variant} COMPONENT_LOWER` },
        global: { plugins: [vuetify] },
        attachTo: document.body,
      });

      const results = await axe(wrapper.element);
      expect(results).toHaveNoViolations();
      wrapper.unmount();
    }
  });

  it('should have no violations when disabled', async () => {
    const wrapper = mount(DsCOMPONENT_PASCAL, {
      props: { disabled: true },
      slots: { default: 'Disabled COMPONENT_PASCAL' },
      global: { plugins: [vuetify] },
      attachTo: document.body,
    });

    const results = await axe(wrapper.element);
    expect(results).toHaveNoViolations();
    wrapper.unmount();
  });

  it('should have no violations when loading', async () => {
    const wrapper = mount(DsCOMPONENT_PASCAL, {
      props: { loading: true },
      slots: { default: 'Loading COMPONENT_PASCAL' },
      global: { plugins: [vuetify] },
      attachTo: document.body,
    });

    const results = await axe(wrapper.element);
    expect(results).toHaveNoViolations();
    wrapper.unmount();
  });
});
EOF

sed -i '' "s/COMPONENT_PASCAL/${COMPONENT_NAME_PASCAL}/g" "tests/${COMPONENT_NAME}.a11y.spec.ts"
sed -i '' "s/COMPONENT_LOWER/${COMPONENT_NAME_LOWER}/g" "tests/${COMPONENT_NAME}.a11y.spec.ts"

echo -e "${GREEN}✓ Created tests/${COMPONENT_NAME}.a11y.spec.ts${NC}"

# Step 4: Export from index.ts
echo -e "${YELLOW}📝 Step 4/6: Updating src/index.ts...${NC}"
if ! grep -q "export { default as Ds${COMPONENT_NAME} }" src/index.ts; then
  echo "export { default as Ds${COMPONENT_NAME} } from './components/${COMPONENT_NAME}.vue';" >> src/index.ts
  echo -e "${GREEN}✓ Added export to src/index.ts${NC}"
else
  echo -e "${YELLOW}⚠ Export already exists in src/index.ts${NC}"
fi

# Step 5: Create documentation
echo -e "${YELLOW}📝 Step 5/6: Creating documentation...${NC}"
cat > "docs/components/${COMPONENT_NAME_LOWER}.md" << 'EOF'
# COMPONENT_PASCAL Component

The `DsCOMPONENT_PASCAL` component is a flexible COMPONENT_LOWER component that wraps Vuetify's `v-COMPONENT_LOWER` with design system conventions and theming.

## Overview

DsCOMPONENT_PASCAL provides [brief description of what the component does and its key features].

<script setup>
import { ref, computed } from 'vue';

const variant = ref('elevated');
const color = ref('primary');
const disabled = ref(false);
const loading = ref(false);

const generatedCode = computed(() => {
  const props = [];
  if (variant.value !== 'elevated') props.push(`variant="${variant.value}"`);
  if (color.value !== 'primary') props.push(`color="${color.value}"`);
  if (disabled.value) props.push(':disabled="true"');
  if (loading.value) props.push(':loading="true"');

  const propsString = props.length > 0 ? '\n    ' + props.join('\n    ') + '\n  ' : '';

  return `<template>
  <DsCOMPONENT_PASCAL${propsString}>
    Content here
  </DsCOMPONENT_PASCAL>
</template>`;
});
</script>

## Interactive Demo

<ComponentDemo
  title="COMPONENT_PASCAL Playground"
  description="Customize the COMPONENT_LOWER using the controls below to see different variants and colors."
>
  <template #demo>
    <DsCOMPONENT_PASCAL
      :variant="variant"
      :color="color"
      :disabled="disabled"
      :loading="loading"
    >
      COMPONENT_PASCAL Content
    </DsCOMPONENT_PASCAL>
  </template>

  <template #controls>
    <PropControl
      label="Variant"
      v-model="variant"
      :options="['elevated', 'flat', 'tonal', 'outlined', 'text']"
      description="Component style variant"
    />
    <PropControl
      label="Color"
      v-model="color"
      :options="['primary', 'secondary', 'error', 'warning', 'success', 'info']"
      description="Color from design tokens"
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
      description="Disable component interaction"
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
      <DsCOMPONENT_PASCAL variant="elevated">Elevated</DsCOMPONENT_PASCAL>
      <DsCOMPONENT_PASCAL variant="flat">Flat</DsCOMPONENT_PASCAL>
      <DsCOMPONENT_PASCAL variant="tonal">Tonal</DsCOMPONENT_PASCAL>
      <DsCOMPONENT_PASCAL variant="outlined">Outlined</DsCOMPONENT_PASCAL>
      <DsCOMPONENT_PASCAL variant="text">Text</DsCOMPONENT_PASCAL>
    </div>
  </template>
  <template #code>

```vue
<template>
  <div class="button-group">
    <DsCOMPONENT_PASCAL variant="elevated">Elevated</DsCOMPONENT_PASCAL>
    <DsCOMPONENT_PASCAL variant="flat">Flat</DsCOMPONENT_PASCAL>
    <DsCOMPONENT_PASCAL variant="tonal">Tonal</DsCOMPONENT_PASCAL>
    <DsCOMPONENT_PASCAL variant="outlined">Outlined</DsCOMPONENT_PASCAL>
    <DsCOMPONENT_PASCAL variant="text">Text</DsCOMPONENT_PASCAL>
  </div>
</template>
```

  </template>
</CodePreview>

## API Reference

### Props

| Name     | Type    | Default   | Description                                                        |
| -------- | ------- | --------- | ------------------------------------------------------------------ |
| variant  | String  | elevated  | Component style: 'elevated', 'flat', 'tonal', 'outlined', or 'text'   |
| color    | String  | primary   | Color from design tokens (primary, secondary, error, warning, etc) |
| disabled | Boolean | false     | Disables component interaction                                        |
| loading  | Boolean | false     | Shows loading spinner and disables component                          |

### Slots

| Name    | Props | Description           |
| ------- | ----- | --------------------- |
| default | -     | Component main content |

## Guidelines

### Do

- [Add best practice 1]
- [Add best practice 2]
- [Add best practice 3]
- [Add best practice 4]

### Don't

- [Add anti-pattern 1]
- [Add anti-pattern 2]
- [Add anti-pattern 3]
- [Add anti-pattern 4]

## Accessibility

### ARIA & Semantics

- ✅ Uses semantic HTML elements
- ✅ Proper ARIA attributes applied
- ✅ Screen readers announce correctly

### Keyboard Navigation

- **Tab**: Focus the component
- **Enter/Space**: Activate/interact (if applicable)
- **Escape**: Close/cancel (if applicable)

### WCAG Compliance

This component meets WCAG 2.1 AAA standards:
- **Keyboard Accessible**: Full keyboard navigation support
- **Screen Reader Support**: Proper semantic markup and ARIA
- **Focus Management**: Clear focus indicators
- **Color Contrast**: Meets AAA contrast requirements

## Related Components

- [Button](/components/button) - For clickable actions
- [Add related components here]
EOF

sed -i '' "s/COMPONENT_PASCAL/${COMPONENT_NAME_PASCAL}/g" "docs/components/${COMPONENT_NAME_LOWER}.md"
sed -i '' "s/COMPONENT_LOWER/${COMPONENT_NAME_LOWER}/g" "docs/components/${COMPONENT_NAME_LOWER}.md"

echo -e "${GREEN}✓ Created docs/components/${COMPONENT_NAME_LOWER}.md${NC}"

# Step 6: Update VitePress config
echo -e "${YELLOW}📝 Step 6/6: Updating VitePress navigation...${NC}"
echo -e "${YELLOW}⚠ Manual step required: Add the following to docs/.vitepress/config.js sidebar:${NC}"
echo -e "${BLUE}{ text: '${COMPONENT_NAME}', link: '/components/${COMPONENT_NAME_LOWER}' }${NC}"
echo ""

# Summary
echo -e "${GREEN}✅ Component created successfully!${NC}"
echo ""
echo -e "${BLUE}📋 Files created:${NC}"
echo "  - src/components/${COMPONENT_NAME}.vue"
echo "  - tests/${COMPONENT_NAME}.spec.js"
echo "  - tests/${COMPONENT_NAME}.a11y.spec.ts"
echo "  - docs/components/${COMPONENT_NAME_LOWER}.md"
echo ""
echo -e "${BLUE}📝 Next steps:${NC}"
echo "  1. Add sidebar entry to docs/.vitepress/config.js"
echo "  2. Customize the component implementation in src/components/${COMPONENT_NAME}.vue"
echo "  3. Update the documentation in docs/components/${COMPONENT_NAME_LOWER}.md"
echo "  4. Run tests: npm run test"
echo "  5. Run docs: npm run dev"
echo ""
echo -e "${GREEN}Happy coding! 🚀${NC}"
