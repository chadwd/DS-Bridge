---
session: 1-4
contributor: jake
date: 2025-12-19
tags:
  - ds-bridge
  - vue3
  - composition-api
  - code-patterns
  - typescript
---

# Vue 3 Composition API Patterns

## What We Did

Used Vue 3 Composition API extensively throughout GuaranteedSale component development (Sessions 1-4). Established consistent patterns for:
- Reactive state with `ref()` and `computed()`
- Type-safe props with TypeScript interfaces
- Emit events with type safety
- Complex computed logic for conditional rendering
- Documentation examples using script setup syntax

## Why We Did It

Vue 3 Composition API provides:
- **Readability**: Code organized by logical concern, not lifecycle
- **Reusability**: Composables can be shared across components
- **Type Safety**: Full TypeScript support with intellisense
- **Simplicity**: Less boilerplate than Options API for complex logic
- **Testing**: Easier to test isolated logic

## Key Concepts

### 1. **Script Setup Syntax**
Modern, concise way to write Vue 3 components:
```vue
<script setup lang="ts">
// Component logic here
// No export default needed
// Automatically exposes variables to template
</script>
```

### 2. **Reactive State with ref()**
Wraps primitive values to make them reactive:
```typescript
const count = ref(0);
const name = ref('Jake');
```

### 3. **Computed Properties**
Derive reactive values from other reactive state:
```typescript
const doubled = computed(() => count.value * 2);
const statusColor = computed(() => {
  switch (status.value) {
    case 'Active': return 'green';
    case 'Inactive': return 'gray';
  }
});
```

### 4. **Type-Safe Props with Interfaces**
Define props with TypeScript for type safety:
```typescript
interface Props {
  priceValue?: string;
  status?: StatusType;
  align?: AlignType;
  // ... more props
}

const props = withDefaults(defineProps<Props>(), {
  priceValue: '22,500',
  status: 'Accepted',
  align: 'center',
});
```

### 5. **Typed Emits**
Define emitted events with type safety:
```typescript
const emit = defineEmits<{
  'primary-action': [];
  'secondary-action': [];
}>();
```

## Implementation Details

### GuaranteedSale Component Pattern (src/components/GuaranteedSale.vue)

```typescript
// 1. Type definitions
type StatusType = 'Available' | 'Requested' | 'Accepted' | 'Expired' | 'Not Available';
type AlignType = 'center' | 'left';

interface Props {
  priceValue?: string;
  status?: StatusType;
  align?: AlignType;
  // ... 17 more props
}

// 2. Props with type safety
const props = withDefaults(defineProps<Props>(), {
  priceValue: '22,500',
  status: 'Accepted',
  align: 'center',
  // ... defaults for other props
});

// 3. Typed emits
const emit = defineEmits<{
  'primary-action': [];
  'secondary-action': [];
}>();

// 4. Computed properties for conditional logic
const statusClass = computed(() => {
  switch (props.status) {
    case 'Available': return 'status-available';
    case 'Accepted': return 'status-accepted';
    // ... more cases
  }
});

// 5. Smart defaults with computed
const primaryButtonLabel = computed(() => {
  if (props.primaryButtonText) return props.primaryButtonText;

  switch (props.status) {
    case 'Available': return 'Accept Offer';
    case 'Accepted': return 'Cancel Offer';
    // ... more cases
  }
});

// 6. Conditional visibility logic
const showPrimaryButton = computed(() => {
  if (props.hidePrimaryButton) return false;
  return true;
});

const shouldShowDateTime = computed(() => {
  return props.status !== 'Expired' && props.status !== 'Not Available';
});
```

### Documentation Example Pattern (docs/components/guaranteedsale.md)

```typescript
// Interactive playground using Composition API
const priceValue = ref('22,500');
const status = ref('Accepted');
const align = ref('center');
const showDateTime = ref(true);

const isDateTimeDisabled = computed(() => {
  return status.value === 'Expired' || status.value === 'Not Available';
});

const generatedCode = computed(() => {
  const props = [];
  if (priceValue.value !== '22,500') {
    props.push(`price-value="${priceValue.value}"`);
  }
  // Build code snippet based on current state
  return `<template>...\</template>`;
});
```

## Code Examples

### Example 1: Reactive State (GuaranteedSale.vue:138-157)
```typescript
const props = withDefaults(defineProps<Props>(), {
  priceValue: '22,500',
  status: 'Accepted',
  align: 'center',
  showDateTime: true,
  updatedDate: 'Nov 3, 2025',
  updatedTime: '10:55:04',
  timePeriod: 'a.m.',
  timezone: 'EST',
  expiresDate: 'Nov 3, 2025',
  showUpdatedDate: true,
  showUpdatedTime: true,
  showExpiresDate: true,
  hidePrimaryButton: false,
  hideSecondaryButton: false,
  primaryButtonDisabled: false,
  secondaryButtonDisabled: false,
  primaryButtonLoading: false,
  secondaryButtonLoading: false,
});
```

### Example 2: Computed with Switch Logic (GuaranteedSale.vue:165-180)
```typescript
const statusClass = computed(() => {
  switch (props.status) {
    case 'Available':
      return 'status-available';
    case 'Accepted':
      return 'status-accepted';
    case 'Requested':
      return 'status-requested';
    case 'Expired':
      return 'status-expired';
    case 'Not Available':
      return 'status-not-available';
    default:
      return 'status-accepted';
  }
});
```

### Example 3: Smart Defaults (GuaranteedSale.vue:217-234)
```typescript
const primaryButtonLabel = computed(() => {
  // Override prop takes precedence
  if (props.primaryButtonText) return props.primaryButtonText;

  // Smart defaults based on status
  switch (props.status) {
    case 'Available':
      return 'Accept Offer';
    case 'Accepted':
      return 'Cancel Offer';
    case 'Requested':
      return 'Check Status';
    case 'Expired':
      return 'Request New Offer';
    case 'Not Available':
      return 'Learn More';
    default:
      return 'Primary Action';
  }
});
```

## Learnings & Insights

### Best Practices Established

1. **Type Everything**: Use TypeScript interfaces for props, computed, refs
2. **Smart Defaults**: Computed properties with prop checks enable smart behavior
3. **Conditional Logic in Computed**: Complex conditions belong in computed, not template
4. **Single Responsibility**: Each computed property does one thing
5. **Clear Naming**: Variable names should indicate type and purpose

### Pattern Benefits Realized

- **Type Safety**: Caught errors at development time, not runtime
- **Clarity**: Code reads like business logic, not Vue mechanics
- **Reusability**: Patterns used across multiple components
- **Testability**: Logic easily isolated and tested
- **Maintenance**: Clear structure makes future changes safe

### Common Pitfalls Avoided

1. **Computed in template**: Kept complex logic out of templates
2. **Too many refs**: Grouped related state together
3. **Unclear types**: Named types explicitly (StatusType, AlignType)
4. **Overusing watchers**: Used computed instead when possible
5. **Missing defaults**: Always provided sensible defaults

## Questions & Unknowns

1. Should we extract composables for reusable datetime logic?
2. How to handle async computed properties if needed?
3. Are there performance optimizations needed for 20 props?
4. Should we add prop watchers for side effects?
5. How deep can computed chains go before refactoring?

## Success Criteria

✅ **Type Safety**
- Full TypeScript support
- 0 TypeScript errors
- Props fully typed

✅ **Code Quality**
- Clear, readable patterns
- Consistent across component
- Self-documenting

✅ **Functionality**
- All computed properties work correctly
- Props and emits function as expected
- State management is predictable

✅ **Testing**
- Unit tests pass (22/22)
- Computed properties tested
- Type-safety prevents errors

## Related Topics (Reminds me of)

- [[TypeScript in Vue 3]] - Type safety patterns
- [[Component Props Design]] - Props interface patterns
- [[Computed Properties Best Practices]] - Optimization and patterns
- [[Vue 3 Performance Optimization]] - When to use computed vs reactive
- [[Testing Composition API]] - Testing patterns
- [[Component Architecture]] - How patterns fit in architecture

---

**Pattern**: Vue 3 Composition API with TypeScript
**Framework**: Vue 3.x
**Language**: TypeScript
**Component**: GuaranteedSale
**Status**: Established Pattern
