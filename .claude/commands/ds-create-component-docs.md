# Component Documentation Command

You are completing the full documentation for a component whose interactive demo has been approved. This is Phase 2 of the component workflow.

## Required Information

**Component Name**: $ARGUMENTS (e.g., "Card" or "Chip")

If no component name provided, ask: "Which component's documentation should I complete?"

## Prerequisites

Before running this command:
- The component should exist in `src/components/{ComponentName}.vue`
- The interactive demo should be working in `docs/components/{componentname}.md`
- The designer should have approved the demo behavior

If the demo hasn't been created yet, suggest: "Run `/component-demo {ComponentName}` first to create the interactive demo."

## Documentation Sections to Complete

### 1. Read Current State
- Read the component file to understand all props, events, and slots
- Read the current docs file to see what exists

### 2. Complete These Sections (in order)

#### A. Overview Section
Add after the title, before the demo:
```markdown
## Overview

{ComponentName} provides {brief description of what the component does and its key features}.
```

**Note**: Keep it concise - 1-2 sentences max. No subsections. The Guidelines section (added later) will cover Do's and Don'ts.

#### B. Props Table
Add after the interactive demo:
```markdown
## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| variant | 'elevated' \| 'flat' \| 'tonal' \| 'outlined' \| 'text' | 'elevated' | Visual style variant |
| size | 'sm' \| 'md' \| 'lg' | 'md' | Component size |
| disabled | boolean | false | Disables the component |
```

#### C. Events Table (if applicable)
```markdown
## Events

| Event | Payload | Description |
|-------|---------|-------------|
| click | MouseEvent | Emitted when clicked |
| update:modelValue | boolean | Emitted when value changes |
```

#### D. Slots Table (if applicable)
```markdown
## Slots

| Slot | Description |
|------|-------------|
| default | Main content |
| prepend | Content before main content |
| append | Content after main content |
```

#### E. Variant Examples
Add live examples for each variant:
```markdown
## Variants

### Elevated (Default)
<ComponentDemo>
  <Ds{ComponentName} variant="elevated">Elevated</Ds{ComponentName}>
</ComponentDemo>

### Flat
<ComponentDemo>
  <Ds{ComponentName} variant="flat">Flat</Ds{ComponentName}>
</ComponentDemo>
```

#### F. Guidelines Section
Add before Accessibility section:
```markdown
## Guidelines

### Do

- [Best practice 1 - clear, actionable guidance]
- [Best practice 2]
- [Best practice 3]
- [Best practice 4]
- [Best practice 5]
- [Best practice 6]

### Don't

- [Anti-pattern 1 - what to avoid and why]
- [Anti-pattern 2]
- [Anti-pattern 3]
- [Anti-pattern 4]
- [Anti-pattern 5]
```

**Note**: Focus on practical, actionable guidance. Use Material Design 3 style - text only, no component examples needed.

#### G. Accessibility Section
```markdown
## Accessibility

### ARIA & Semantics

- ✅ Uses semantic HTML elements
- ✅ Proper ARIA attributes applied
- ✅ Screen readers announce correctly with {role/aria details}

### Keyboard Navigation

- **Tab**: Focus the component
- **Enter/Space**: {specific activation behavior}
- **Escape**: {close/cancel behavior if applicable}
- **Arrow Keys**: {navigation behavior if applicable}

### WCAG Compliance

This component meets WCAG 2.1 AAA standards:
- **Keyboard Accessible**: Full keyboard navigation support
- **Screen Reader Support**: Proper semantic markup and ARIA
- **Focus Management**: Clear focus indicators
- **Color Contrast**: All color variants meet AAA contrast requirements
```

#### H. Related Components
```markdown
## Related Components

- [Button](/components/button) - For actions
- [Card](/components/card) - For content containers
```

### 3. Update VitePress Sidebar

Ensure the component is in `docs/.vitepress/config.js`:
```javascript
{
  text: 'Components',
  items: [
    { text: 'Button', link: '/components/button' },
    { text: '{ComponentName}', link: '/components/{componentname}' },
  ]
}
```

### 4. Run Verification

```bash
npm run type-check  # Verify no TypeScript errors
npm run test        # Verify all tests pass
npm run build       # Verify build succeeds
```

## Output Summary

After completing documentation:

```
## Documentation Complete: {ComponentName}

### Sections Added:
- [x] Overview (concise description)
- [x] Props table ({count} props)
- [x] Events table ({count} events)
- [x] Slots table ({count} slots)
- [x] Variant examples
- [x] Guidelines (Do's and Don'ts)
- [x] Accessibility (ARIA, Keyboard, WCAG)
- [x] Related components

### Verification:
- [x] TypeScript: No errors
- [x] Tests: {count} passing
- [x] Build: Success

### View at:
`npm run dev` → Components → {ComponentName}
```

## Reference

Use the Button documentation as the gold standard:
- File: `docs/components/button.md`
- Shows the complete structure and style
