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

{ComponentName} is used for {primary purpose}. It provides {key features}.

### When to Use
- {Use case 1}
- {Use case 2}
- {Use case 3}

### When NOT to Use
- {Anti-pattern 1} - use {Alternative} instead
```

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

#### F. Usage Examples
Add practical, real-world examples:
```markdown
## Usage Examples

### Basic Usage
{code example}

### With Icons
{code example}

### In a Form
{code example}
```

#### G. Accessibility Section
```markdown
## Accessibility

### Keyboard Navigation
- **Tab**: {behavior}
- **Enter/Space**: {behavior}
- **Escape**: {behavior if applicable}

### Screen Readers
- {ARIA attribute notes}
- {Role information}

### WCAG Compliance
This component meets WCAG 2.1 AAA standards:
- {Specific compliance notes}
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
- [x] Overview & When to Use
- [x] Props table ({count} props)
- [x] Events table ({count} events)
- [x] Slots table ({count} slots)
- [x] Variant examples
- [x] Usage examples
- [x] Accessibility notes
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
