---
session: 4
contributor: jake
date: 2025-12-19
tags:
  - ds-bridge
  - documentation
  - design-system
  - component-patterns
  - vitepress
---

# CodePreview Documentation Pattern

## What We Did

Implemented the CodePreview component pattern for interactive component documentation. This pattern provides live, working examples alongside copyable code snippets, creating an interactive learning experience for design system users.

## Why We Did It

Static documentation with API tables doesn't show users HOW to actually use components. CodePreview bridges the gap by showing:
- Live component rendering with working interactions
- Real Vue code they can copy and use immediately
- Practical examples that teach patterns, not just APIs

## Key Concepts

### 1. **Two-Slot Structure**
- `#preview` slot: Live, interactive component with event handlers and styling
- `#code` slot: Vue code snippet showing the implementation

### 2. **Interactive State Management**
Examples use Vue Composition API with `ref()` and `computed()` to manage live state, allowing viewers to interact with components.

### 3. **Progressive Disclosure**
Start with basic examples, progress to advanced features. Users learn at their own pace.

### 4. **Copy-Paste Ready Code**
Code snippets are production-quality and immediately usable in viewer's projects.

## Implementation Details

### Basic CodePreview Structure
```vue
<CodePreview>
  <template #preview>
    <div style="display: flex; justify-content: center; padding: 1.5rem;">
      <!-- Live component here -->
      <MyComponent
        :prop="value"
        @event="handleEvent"
      />
    </div>
  </template>
  <template #code>
\`\`\`vue
<template>
  <MyComponent
    :prop="value"
    @event="handleEvent"
  />
</template>

<script setup>
// Implementation code
</script>
\`\`\`
  </template>
</CodePreview>
```

### Styling Conventions
- Centered layout with `display: flex; justify-content: center`
- Consistent padding: `1.5rem`
- Light background for visibility
- Viewport-aware sizing

## Code Examples

### Example 1: Simple State (Button Component)
```vue
<CodePreview>
  <template #preview>
    <DsButton
      variant="elevated"
      color="primary"
      @click="count++"
    >
      Click me ({{ count }})
    </DsButton>
  </template>
  <template #code>
\`\`\`vue
<template>
  <DsButton
    variant="elevated"
    color="primary"
    @click="handleClick"
  >
    Click me
  </DsButton>
</template>

<script setup>
const handleClick = () => {
  // Handle click
};
</script>
\`\`\`
  </template>
</CodePreview>
```

### Example 2: Complex Props (GuaranteedSale)
```vue
<CodePreview>
  <template #preview>
    <div style="display: flex; justify-content: center; padding: 1.5rem;">
      <DsGuaranteedSale
        :price-value="price"
        :status="status"
        :align="align"
        @primary-action="handleAction"
      />
    </div>
  </template>
  <template #code>
\`\`\`vue
<template>
  <DsGuaranteedSale
    :price-value="price"
    :status="status"
    :align="align"
    @primary-action="handlePrimaryAction"
  />
</template>

<script setup>
const price = ref('25,000');
const status = ref('Available');
const align = ref('center');

const handlePrimaryAction = () => {
  console.log('Action triggered');
};
</script>
\`\`\`
  </template>
</CodePreview>
```

## Learnings & Insights

### What Works Well
- **Live interaction**: Users can click, toggle, change values before copying code
- **Context preservation**: Code snippet matches preview state
- **Multiple examples**: Progression from basic to advanced
- **Self-contained**: Each example is independent and understandable

### Common Pitfalls
- Overly complex examples (keep them focused)
- Code snippets that don't match preview behavior
- Too many features in one example
- Missing event handlers

### Best Practices
1. **One feature per example**: Each CodePreview demonstrates one concept
2. **Matching state**: Preview and code snippet should align exactly
3. **Production-quality code**: Examples should be copy-paste ready
4. **Clear variable names**: Make code self-documenting
5. **Include event handlers**: Show how to handle user interactions

## Questions & Unknowns

1. Should we support more complex patterns (multiple components, nested examples)?
2. How do we handle dynamic state that changes over time?
3. Can we improve the visual distinction between preview and code areas?
4. Should examples include error states and edge cases?

## Success Criteria

✅ Examples render correctly in VitePress
✅ Code snippets are accurate and copy-paste ready
✅ Interactive state works as expected
✅ Styling is consistent across all CodePreview instances
✅ Users understand the examples without additional explanation

## Related Topics (Reminds me of)

- [[Component Documentation Best Practices]] - The broader approach
- [[VitePress Documentation Structure]] - Platform used for rendering
- [[Interactive Component Examples]] - General concept
- [[Vue 3 Composition API Patterns]] - Script setup patterns used
- [[Design System Documentation Standards]] - Consistency requirements

---

**Pattern**: CodePreview
**First Used**: Session 4 (GuaranteedSale)
**Status**: Established Pattern
