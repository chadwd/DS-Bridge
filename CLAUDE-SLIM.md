# CLAUDE-SLIM.md

Lightweight instructions for Claude Code. For full details, see `CLAUDE.md`.

## Project

**DS-Bridge**: Vue 3 + Vuetify 3 design system with TypeScript.

## Key Commands

```bash
npm run dev              # Start docs site (localhost:5173)
npm run test             # Run all tests
npm run build            # Build everything
npm run create-component Name  # Generate new component
npm run lint:fix         # Auto-fix lint issues
```

## Component Pattern

Components wrap Vuetify with design tokens:

```vue
<template>
  <v-btn v-bind="$attrs" :color="color">
    <slot />
  </v-btn>
</template>

<script setup lang="ts">
const props = defineProps<{ variant?: 'primary' | 'secondary' }>();
const color = computed(() => props.variant || 'primary');
</script>
```

## Quality Gate (Run Before Commit)

```bash
npm run lint:fix && npm run test && npm run build
```

## File Locations

- Components: `src/components/`
- Tokens: `src/tokens/`
- Tests: `tests/`
- Docs: `docs/components/`

## Workflow

1. **Demo first**: Build interactive demo, get approval
2. **Then document**: Only document approved code
3. **Test automatically**: Run tests after changes

## Slash Commands

- `/ds-build-component Name` - Build component + demo
- `/ds-create-component-docs Name` - Complete documentation
- `/start-session-plan` - Plan a session
- `/done-with-session N` - Wrap up session

## Autonomy

- Fix lint/type errors without asking
- Run tests after component changes
- Make implementation decisions autonomously
- Ask only for design/architecture choices

## References

For details see:
- `CLAUDE.md` - Full instructions
- `agent-knowledge/` - Captured learnings
- `CONTRIBUTING.md` - Git and code standards
