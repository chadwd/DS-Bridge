# DS-Bridge

> Vue 3 + Vuetify 3 design system. TypeScript. WCAG AAA. Figma-synced tokens.

---

## Quick Start

```bash
npm run dev                    # Docs site → localhost:5173
npm run create-component Name  # Generate component + tests + docs
npm run test                   # Run all tests
npm run build                  # Build everything
```

---

## The Pattern

Every component follows this structure:

```vue
<template>
  <v-btn v-bind="$attrs" :color="computedColor">
    <slot />
  </v-btn>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  variant?: 'primary' | 'secondary'
}>()

const computedColor = computed(() => props.variant || 'primary')
</script>
```

**Key points:**
- Wrap Vuetify components, don't replace them
- `v-bind="$attrs"` passes through all props
- Design tokens from `src/tokens/`, never hardcode
- TypeScript for all props

---

## File Map

| What | Where |
|------|-------|
| Components | `src/components/*.vue` |
| Tokens | `src/tokens/index.ts` |
| Tests | `tests/*.spec.js` + `*.a11y.spec.ts` |
| Docs | `docs/components/*.md` |
| Exports | `src/index.ts` |

---

## Workflow

### Adding a Component

```bash
npm run create-component Card
```

Creates: component, unit tests, a11y tests, docs, export.

Then: implement → test → document → commit.

### The Two-Phase Rule

1. **Demo first** → Get approval on working code
2. **Document after** → Only document approved work

Slash commands:
- `/ds-build-component Name` → Phase 1 (demo)
- `/ds-create-component-docs Name` → Phase 2 (docs)

---

## Quality Gate

Run before every commit:

```bash
npm run lint:fix && npm run test && npm run build
```

All three must pass. No exceptions.

---

## Agent Behavior

### Do Automatically
- Fix lint errors
- Run tests after changes
- Fix TypeScript errors
- Add ARIA attributes
- Use design tokens

### Ask First
- New component APIs (prop names, variants)
- Breaking changes
- New dependencies
- Design decisions

### Never
- Skip accessibility
- Hardcode values (use tokens)
- Commit without quality gate
- Over-engineer simple tasks

---

## Git

**Branch format:** `sN-component-feature`

```bash
git checkout -b s10-card-layout
# work...
git add . && git commit -m "feat(card): add layout variants"
git push -u origin s10-card-layout
```

Commit at session end, not after every change.

---

## Session Management

| Command | Purpose |
|---------|---------|
| `/start-session-plan` | Plan objectives |
| `/done-with-session N` | Wrap up + capture |
| `/session-knowledge-capture` | Document learnings |

Files:
- Plans: `agent-sessions/{name}-SESSION_N_PLAN.md`
- Journal: `agent-journals/{name}-agent-work-journal.md`

---

## Architecture

```
src/
├── components/     # Vue components (wrap Vuetify)
├── tokens/         # Design tokens (Figma sync)
├── plugins/        # Vuetify theme config
└── index.ts        # Main exports

tests/
├── *.spec.js       # Unit tests
└── *.a11y.spec.ts  # Accessibility tests

docs/
├── components/     # Component documentation
├── design/         # Tokens, colors, typography
└── guide/          # Getting started
```

---

## Standards

| Standard | Requirement |
|----------|-------------|
| TypeScript | Strict mode, no `any` |
| Accessibility | WCAG 2.1 AAA |
| Testing | Unit + a11y for every component |
| Styling | Design tokens only |
| HTML | Semantic elements |

---

## Troubleshooting

| Problem | Fix |
|---------|-----|
| Tests failing | Check exports in `src/index.ts` |
| Build failing | Run `npm run type-check` |
| Lint errors | Run `npm run lint:fix` |
| Docs not building | Check `docs/.vitepress/config.js` |

---

## Reference

For deeper details:
- [CONTRIBUTING.md](./CONTRIBUTING.md) — Code standards
- [COMPONENT_TEMPLATE.md](./COMPONENT_TEMPLATE.md) — Generator docs
- [agent-knowledge/](./agent-knowledge/) — Captured learnings
- [FINAL_SUMMARY.md](./FINAL_SUMMARY.md) — Project journey

---

*Built with Vue 3, Vuetify 3, TypeScript, and Claude Code.*
