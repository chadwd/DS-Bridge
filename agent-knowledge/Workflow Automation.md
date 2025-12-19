---
session: 6
contributor: chad
date: 2025-12-16
tags:
  - ds-bridge
  - session-learning
  - workflow-automation
  - slash-commands
  - designer-enablement
  - two-phase-workflow
---

# Workflow Automation

## What We Did
1. Created 4 slash commands for repeating development workflows
2. Designed two-phase component development workflow (demo-first, docs-later)
3. Made component development accessible to designers (non-developers)
4. Built Divider component using iterative refinement approach
5. Created placeholder pages for 7 planned components

## Why We Did It
**Original Plan**: Build 7 components immediately (Cards, Chips, Dialogs, Dividers, Expansion Panels, Lists, Menus)

**Problem Discovered**: Manual component development was too slow and required too much context switching. Designers (like Jake) couldn't effectively contribute without developer hand-holding.

**Pivot Decision**: Before building components at scale, we needed to:
- Automate repetitive session tasks (planning, wrap-up)
- Standardize component development workflow
- Enable designers to build components independently
- Reduce rework by showing working demos before writing docs

## Key Concepts

### Demo-First Development
**Traditional Flow** (Slow):
```
Build Component → Write Full Docs → User Reviews → Rework Everything
```

**New Flow** (Fast):
```
Phase 1: Build Component → Interactive Demo ONLY → User Approves
Phase 2: Write Full Documentation (only after approval)
```

**Benefits**:
- Faster iteration cycles (no docs overhead during reviews)
- User sees working code immediately
- Less wasted effort if component needs changes
- Documentation reflects final, approved implementation

### Slash Command Pattern
Slash commands encapsulate complex workflows into simple, reusable prompts:
- `/ds-build-component ComponentName` - Phase 1 workflow
- `/ds-create-component-docs ComponentName` - Phase 2 workflow
- `/start-session-plan` - Plan new sessions
- `/done-with-session` - Automated wrap-up

**Key Design Principle**: Commands must be usable by designers, not just developers. Clear names, structured prompts, minimal assumptions.

### Session Management Strategy
**Problem**: Sessions accumulate context and need structured handoffs.

**Solution**:
- Session plans document objectives upfront
- Work journals track implementation details chronologically
- Wrap-up commands automate CHANGELOG updates and context capture
- Planning commands review previous session for deferred items

### Model Strategy (User Preference)
- **Opus 4.5**: Planning, analytics, complex decisions, synthesis
- **Sonnet 4.5**: Building, agent workflows, implementation tasks

## Implementation Details

### Slash Command Structure
All commands stored in `.claude/commands/` as markdown files with YAML frontmatter.

**Example: `/ds-build-component` (Phase 1)**
```markdown
---
name: ds-build-component
description: Build a design system component with interactive demo
usage: /ds-build-component ComponentName
---

# Instructions
1. Gather context (purpose, Figma specs, Vuetify base)
2. Run: npm run create-component ComponentName
3. Build interactive demo ONLY
4. Request designer approval
5. Do NOT write full documentation yet
```

### Two-Phase Workflow Details

**Phase 1: `/ds-build-component ComponentName`**
```
├── Gather context (purpose, Figma specs, Vuetify base)
├── Generate component scaffolding (npm run create-component)
├── Build interactive demo ONLY
│   ├── Live playground with prop controls
│   ├── Dynamic code generation
│   └── Basic usage examples
├── Designer reviews and approves demo
└── Stop (no full documentation yet)
```

**Phase 2: `/ds-create-component-docs ComponentName`**
```
├── Complete Overview & When to Use sections
├── Add Props/Events/Slots tables
├── Add variant examples (all variants shown)
├── Add usage examples (real-world patterns)
├── Add accessibility notes (WCAG 2.1 AAA)
├── Add related components links
└── Verify build and tests pass
```

### Command Naming Evolution
Commands were renamed for better designer UX:

| Original Name | Final Name | Reason |
|--------------|------------|---------|
| `component-demo` | `ds-build-component` | Clearer purpose (build vs demo) |
| `component-docs` | `ds-create-component-docs` | Matches build/create pattern |
| `session-plan` | `start-session-plan` | Action-oriented (start) |
| `session-wrapup` | `done-with-session` | Conversational (done) |

### Divider Component: Iterative Refinement
Built Divider component manually (not using slash commands) to validate patterns:

**Challenge 1: Text Slot Behavior**
- Problem: Empty text field showed TWO divider lines instead of one
- Root Cause: Vuetify creates wrapper with two `<hr>` elements when slot exists
- Solution: Changed from slot to `text` prop + conditional class + CSS `:has()` selector

**Challenge 2: Default Color**
- Problem: `color="default"` interpreted as theme color (dark grey)
- DOM Evidence: `rgb(107, 114, 128)` instead of light grey
- Solution: Computed property returns `'grey-lighten-4'` when color is undefined

**Key Learning**: Sometimes manual implementation reveals edge cases that inform automation design.

## Code Examples

### Slash Command Registration (.claude/commands/ds-build-component.md)
```markdown
# Phase 1: Component Demo Development

**Purpose**: Build component + interactive demo ONLY (no full docs)

## Steps
1. Ask user: What component are we building?
2. Read Figma specs (if available via MCP)
3. Run: npm run create-component ComponentName
4. Build interactive playground in docs
5. Request approval BEFORE proceeding to Phase 2
```

### Conditional Divider Rendering (Divider.vue:45-60)
```vue
<template>
  <v-divider
    v-bind="$attrs"
    :vertical="vertical"
    :inset="inset"
    :thickness="thickness"
    :color="colorValue"
    :class="{ 'ds-divider--no-text': !text }"
  >
    <span v-if="text">{{ text }}</span>
  </v-divider>
</template>

<script setup lang="ts">
const colorValue = computed(() =>
  !props.color || props.color === 'default'
    ? 'grey-lighten-4'
    : props.color
);
</script>

<style scoped>
.v-divider:has(.ds-divider--no-text) hr:last-child,
.v-divider:has(.ds-divider--no-text) .v-divider__content {
  display: none;
}
</style>
```

### Session Plan Template Structure (start-session-plan.md:120-145)
```markdown
## Session Plan Structure
1. Session Header (number, date, status)
2. Objectives (3-5 clear goals)
3. Task List (priority order)
4. Success Criteria (measurable)
5. Files to Create/Modify
6. Context for Next Session
```

## Learnings & Insights

### What Worked Well
1. **Two-Phase Workflow**: Dramatically reduces rework on component iterations
2. **Slash Command Naming**: Designer-friendly names improved clarity
3. **Demo-First Philosophy**: Users see working code faster
4. **Manual Divider Build**: Revealed edge cases before automating workflow
5. **Component Placeholders**: All 7 component pages created upfront with sidebar entries

### What Didn't Work
- **Initial Command Names**: Too developer-centric (`component-demo` unclear)
- **Trying to Use Commands Immediately**: Better to design workflow first, test with real component second
- **Assuming Empty Slots Work**: Vuetify's DOM structure surprised us (two `<hr>` elements)

### What We'd Do Differently
- Test slash commands with a designer earlier (before building all 4)
- Document the "when to use manual vs slash command" decision tree
- Create a "slash command testing checklist" for validation

### Unexpected Discovery
**CSS `:has()` Selector**: Modern CSS feature (90%+ browser support) allowed elegant solution to Vuetify's two-`<hr>` structure. Previously would have required JavaScript workarounds.

## Questions & Unknowns
- **Command Discoverability**: Will designers find the commands in the `/` menu?
- **Figma MCP Integration**: How well will automatic design spec pulling work in practice?
- **Workflow Scalability**: Will two-phase workflow work for complex components (Dialogs, Menus)?
- **Knowledge Tracker**: Still waiting for Obsidian `.md` examples to design the knowledge capture system

## Success Criteria
- ✅ **4 slash commands created** (session + component workflows)
- ✅ **Two-phase workflow designed** (demo-first, docs-later)
- ✅ **7 component placeholders created** (all in VitePress sidebar)
- ✅ **1 component built** (Divider, production-ready)
- ✅ **10/10 tests passing** (6 unit + 4 a11y)
- ✅ **Commands designed for designers** (not just developers)
- ⏳ **Commands tested in practice** (pending Jake's first component)

## Related Topics (Reminds me of)
- [[Component Template System]]
- [[Session Management Best Practices]]
- [[Designer-Developer Collaboration]]
- [[Iterative Development]]
- [[Vue 3 Composition API Patterns]]
- [[Vuetify Component Wrapping]]
- [[Interactive Documentation]]
- [[CSS Modern Features]]
- [[Design System Workflows]]
- [[Figma MCP Integration]]
