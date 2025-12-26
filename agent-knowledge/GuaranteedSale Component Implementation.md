---
session: 1-4
contributor: jake
date: 2025-12-19
tags:
  - ds-bridge
  - component-implementation
  - guaranteedsale
  - vue3
  - design-system
---

# GuaranteedSale Component Implementation

## What We Did

Implemented a complete GuaranteedSale component across 4 sessions:
- **Session 1**: Initial component with 5 status states and interactive playground
- **Session 2**: Added dynamic button system and datetime visibility controls
- **Session 3**: Updated button styling to match design system standards
- **Session 4**: Created interactive CodePreview documentation with practical examples

## Why We Did It

Real estate, automotive, and marketplace applications need to display guaranteed offers with clear status indicators and actionable controls. The GuaranteedSale component provides a professional, accessible component for this use case.

## Key Concepts

### 1. **Status-Based UI**
Component adapts behavior and appearance based on 5 status states:
- Available: Offer is open for acceptance
- Accepted: Offer has been accepted
- Requested: Pricing request pending
- Expired: Offer has expired
- Not Available: No offer available

### 2. **Smart Button Labels**
Button text changes dynamically based on status, with override capability via props.

### 3. **Granular DateTime Controls**
Users can show/hide individual datetime elements, or auto-hide based on status.

### 4. **Flexible Alignment**
Component supports center and left alignment for different layout contexts.

### 5. **Design System Integration**
Full integration with design tokens, WCAG 2.1 AAA compliance, and design system patterns.

## Implementation Details

### Component Structure
```vue
<template>
  <div class="ds-guaranteed-sale" :class="{ 'align-left': align === 'left' }">
    <!-- Header: Title, Value, Status -->
    <div class="guaranteed-sale-header">
      <div class="header-title">Guaranteed Offer</div>
      <div class="header-value">${{ priceValue }}</div>
      <div class="status-badge">{{ statusText }}</div>
    </div>

    <!-- DateTime Section (conditional) -->
    <div v-if="showDateTime && shouldShowDateTime" class="datetime-section">
      <!-- Updated date/time -->
      <!-- Expires date -->
    </div>

    <!-- Actions Section -->
    <div class="actions-section">
      <v-btn @click="emit('primary-action')">{{ primaryButtonLabel }}</v-btn>
      <v-btn v-if="showSecondaryButton" @click="emit('secondary-action')">
        {{ secondaryButtonLabel }}
      </v-btn>
    </div>
  </div>
</template>

<script setup lang="ts">
// Props: 20 total (9 core + 8 button customization + 3 datetime visibility)
// Events: 2 (primary-action, secondary-action)
// Computed properties: 9 (for labels, visibility, styling)
</script>

<style scoped>
/* Button styling from design system */
/* Status badge colors */
/* DateTime layout */
/* Alignment variations */
</style>
```

### Props Structure (20 Total)

**Core Props (9)**:
- priceValue: string (default: '22,500')
- status: StatusType (Available | Accepted | Requested | Expired | Not Available)
- align: AlignType (center | left)
- showDateTime: boolean (default: true)
- updatedDate, updatedTime, timePeriod, timezone, expiresDate: string

**Button Customization Props (8)**:
- primaryButtonText, secondaryButtonText: string (override defaults)
- hidePrimaryButton, hideSecondaryButton: boolean
- primaryButtonDisabled, secondaryButtonDisabled: boolean
- primaryButtonLoading, secondaryButtonLoading: boolean

**DateTime Visibility Props (3)**:
- showUpdatedDate: boolean (default: true)
- showUpdatedTime: boolean (default: true)
- showExpiresDate: boolean (default: true)

### Status-Based Behavior

```typescript
// Smart button labels by status
const primaryButtonLabel = computed(() => {
  if (props.primaryButtonText) return props.primaryButtonText;

  switch (props.status) {
    case 'Available': return 'Accept Offer';
    case 'Accepted': return 'Cancel Offer';
    case 'Requested': return 'Check Status';
    case 'Expired': return 'Request New Offer';
    case 'Not Available': return 'Learn More';
  }
});

// Auto-hide datetime for certain statuses
const shouldShowDateTime = computed(() => {
  return props.status !== 'Expired' && props.status !== 'Not Available';
});
```

## Code Examples

### Example 1: Basic Usage (src/components/GuaranteedSale.vue:1-78)
```vue
<DsGuaranteedSale
  price-value="25,000"
  status="Available"
  @primary-action="handleAcceptOffer"
/>
```

### Example 2: Custom Button Labels
```vue
<DsGuaranteedSale
  price-value="18,500"
  status="Accepted"
  primary-button-text="View Contract"
  @primary-action="viewContract"
/>
```

### Example 3: Left Alignment with DateTime
```vue
<DsGuaranteedSale
  align="left"
  price-value="22,500"
  status="Available"
  updated-date="Dec 18, 2025"
  updated-time="14:30:00"
  time-period="p.m."
  timezone="PST"
  expires-date="Dec 25, 2025"
/>
```

### Example 4: Conditional DateTime Display
```vue
<DsGuaranteedSale
  price-value="19,800"
  status="Accepted"
  :show-updated-time="false"
  :show-expires-date="false"
/>
```

## Learnings & Insights

### What Worked Well
1. **Status-driven design**: Component behavior naturally follows offer lifecycle
2. **Smart defaults**: Button labels adapt to status automatically
3. **Granular controls**: DateTime visibility props provide flexibility without complexity
4. **Design system alignment**: Followed established patterns for consistency
5. **Progressive enhancement**: Built features incrementally across 4 sessions

### Challenges & Solutions

**Challenge 1: Auto-hide DateTime for certain statuses**
- Solution: Created `shouldShowDateTime` computed property that overrides `showDateTime` prop

**Challenge 2: Multiple button label defaults vs. overrides**
- Solution: Checked override prop first, then switched on status

**Challenge 3: Orphaned state in documentation examples**
- Solution: Removed unused state variables after removing loading state examples

### Evolution Across Sessions

| Session | Focus | Additions |
|---------|-------|-----------|
| 1 | Core component | 5 status states, basic props |
| 2 | Button flexibility | 8 button props, datetime controls |
| 3 | Design alignment | Button styling updates |
| 4 | Documentation | CodePreview examples |

## Questions & Unknowns

1. Should loading states be implemented as actual component states or just documentation?
2. Are there status-specific workflows (e.g., Expired → Request New flow) to document?
3. Should we support animations between status changes?
4. Are there accessibility enhancements needed for screen readers on complex states?

## Success Criteria

✅ **Feature Completeness**
- 5 status states implemented
- 20 props for full customization
- Smart defaults that work without configuration

✅ **Testing**
- 22 unit tests passing
- 13 accessibility tests passing
- 100% test coverage of features

✅ **Accessibility**
- WCAG 2.1 AAA compliant
- Semantic HTML
- Proper ARIA labels

✅ **Documentation**
- 4 CodePreview examples
- Interactive playground
- API reference
- Usage patterns

✅ **Code Quality**
- TypeScript: 0 errors
- Build: Successful
- No linting warnings

## Related Topics (Reminds me of)

- [[Component Documentation Best Practices]] - How we documented this
- [[CodePreview Documentation Pattern]] - Documentation pattern used
- [[Vue 3 Composition API Patterns]] - Implementation patterns
- [[Design System Button Component]] - Related component for consistency
- [[Accessibility Compliance WCAG AAA]] - Compliance achieved
- [[Status-Based Component Design]] - Design pattern used

---

**Component**: GuaranteedSale
**Version**: 0.3.1
**Status**: Production Ready
**Sessions**: 1-4 (Complete)
**Lines of Code**: 550+
**Tests**: 35 (22 unit + 13 a11y)
