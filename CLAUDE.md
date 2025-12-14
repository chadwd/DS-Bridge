# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**DS-Bridge** is an enterprise-grade, white-label Vue 3 design system built on Vuetify 3 and TypeScript. It provides reusable UI components with design tokens synchronized to Figma, accessibility-first development (WCAG 2.1 AAA compliance), and comprehensive documentation.

The project is a monorepo-style structure with:
- **Source**: Vue 3 components + design tokens (TypeScript) in `src/`
- **Tests**: Unit + accessibility tests with Vitest in `tests/`
- **Docs**: VitePress documentation site in `docs/`
- **Build**: Dual-format distribution (ES modules + CommonJS) in `dist/`

## Common Development Commands

### Setup
```bash
npm install          # Install dependencies
npm run dev          # Start Vite dev server + documentation site (http://localhost:5173)
```

### Building
```bash
npm run build        # Build library (dist/) and documentation site
npm run build:lib    # Build only the library (components + tokens)
npm run build:docs   # Build only the documentation site
```

### Testing
```bash
npm run test         # Run all tests once
npm run test:ui      # Open Vitest UI (visual test browser)
npm run test:watch   # Run tests in watch mode
npm run test:coverage  # Generate coverage reports (see coverage/ directory)
```

### Code Quality
```bash
npm run lint         # Check for ESLint violations
npm run lint:fix     # Auto-fix ESLint violations
npm run type-check   # Run TypeScript compiler (npx tsc --noEmit)
```

### Documentation
```bash
npm run docs:dev     # Dev server for docs only (port 5173)
npm run docs:build   # Build docs static site
npm run docs:preview # Preview built docs locally
```

### Running a Single Test
```bash
# Run a specific test file
npm run test tests/Button.spec.js

# Run tests matching a pattern
npm run test -- Button

# Run with watch mode
npm run test -- --watch tests/Button.spec.js

# Run in UI mode for a file
npm run test:ui -- tests/Button.spec.js
```

## Project Structure

### Source Code Organization (`src/`)
- **`components/`**: Vue 3 components (TypeScript + template)
  - Button.vue, AppLayout.vue, etc.
  - Each wraps Vuetify components with design system conventions
  - Prop validation and TypeScript types included
- **`tokens/`**: Design tokens (colors, spacing, typography, shadows)
  - Organized by category (colors.ts, spacing.ts, etc.)
  - Synced from Figma design variables
  - Single source of truth for design consistency
- **`plugins/`**: Vuetify 3 theme configuration
  - `vuetify.ts`: Theme customization, color schemes, component defaults
- **`*.ts` entry points**: Individual exports for tree-shaking
  - `button.ts`, `tokens.ts`, `index.ts` (main)

### Tests (`tests/`)
- **Unit tests** (`.spec.js`): Component behavior, props, events
- **Accessibility tests** (`.a11y.spec.ts`): axe-core automated a11y checks, ARIA, keyboard navigation
- **Utilities** (`a11y.utils.ts`): Helper functions for accessibility testing

### Documentation (`docs/`)
- VitePress site with component guides and API documentation
- Markdown files in `docs/components/` and `docs/` root
- Configuration in `docs/.vitepress/config.js`

## Architecture Patterns

### Component Architecture
Components follow a **Vuetify wrapper pattern**:
1. Extend base Vuetify component (e.g., `v-btn`)
2. Apply design system tokens (colors, sizing, spacing)
3. Add custom props for design system conventions
4. Maintain full Vuetify prop compatibility for flexibility

Example:
```vue
<template>
  <v-btn v-bind="$attrs" :color="color" :size="sizeValue">
    <slot />
  </v-btn>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { COLORS, SIZES } from '@/tokens';

const props = withDefaults(defineProps<{
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
}>(), {
  variant: 'primary',
  size: 'md',
});

const color = computed(() => COLORS[props.variant]);
const sizeValue = computed(() => SIZES[props.size]);
</script>
```

### Design Tokens Strategy
- **Single source of truth**: Figma → `src/tokens/index.ts`
- **Exported by category**: colors, spacing, typography, shadows
- **Used in components**: Components import tokens, not hardcoded values
- **TypeScript-safe**: Token keys are type-safe constants

### Build & Distribution
- **Vite library mode** with multiple entry points:
  - Main: `dist/design-system-vuetify.js` (full library)
  - Per-component: `dist/components/Button.js` (tree-shakeable)
  - Per-category: `dist/tokens/colors.js` (token-only exports)
- **Dual format**: ES modules (modern) + CommonJS (compatibility)
- **External deps**: Vue and Vuetify are NOT bundled (peer dependencies)
- **Minification**: Terser with console/debugger removal in production

## Development Workflow

### Adding a New Component
1. Create `src/components/MyComponent.vue` (TypeScript + Vue 3)
2. Export from `src/index.ts`
3. Create entry point `src/myComponent.ts` if needed for tree-shaking
4. Write tests in `tests/MyComponent.spec.js` (unit) and `.a11y.spec.ts` (accessibility)
5. Add documentation in `docs/components/MyComponent.md`
6. Run linting and tests before commit

### Updating Design Tokens
1. Update `src/tokens/` files (colors.ts, spacing.ts, etc.)
2. Re-export from `src/tokens/index.ts`
3. Update `docs/tokens.md` with changes
4. Test component rendering with new tokens
5. Tests should verify tokens are applied correctly

### Testing Requirements
- **Unit tests**: Props, events, computed properties, slot behavior
- **Accessibility tests**: axe-core checks, keyboard nav, ARIA attributes, contrast
- **Coverage target**: Aim for >80% coverage
- **A11y compliance**: WCAG 2.1 AAA for all new components
- Use `@vue/test-utils` for component mounting and interaction

### Documentation Requirements
- Document all component props and events
- Include usage examples
- Note accessibility features
- Link to Figma design specs if applicable
- Update CHANGELOG.md with version notes

## Code Quality Standards

### TypeScript
- Strict mode enabled (tsconfig.json)
- No `any` types without justification
- Unused variables detected and flagged
- Full type safety for component props and events

### Vue 3 Conventions
- `<script setup>` syntax preferred
- Composition API for complex logic
- Proper prop validation with types
- Emit events with type safety
- Accessibility attributes (aria-*, role)

### Component Naming
- Multi-word component names (not single word)
- PascalCase for component files and names
- CSS class names follow BEM convention when needed

### Linting
- ESLint enforces code style
- Warnings for unused variables, undefined symbols
- TypeScript strict checking
- Run `npm run lint:fix` before committing

## CI/CD & Testing

### GitHub Actions (`.github/workflows/ci.yml`)
Automatically runs on push/PR to main or develop:
1. Lint check (npm run lint)
2. Tests (npm run test)
3. Build (npm run build)
4. All must pass before merge

### Local Pre-commit
Always run before committing:
```bash
npm run lint:fix   # Fix linting issues
npm run test       # Run test suite
npm run build      # Verify build succeeds
```

## Important Development Notes

### Vuetify Integration
- Components wrap Vuetify (v-btn, v-card, etc.), don't replace them
- Vuetify is a peer dependency (external in bundle)
- Access Vuetify theme via `$vuetify` injected property
- Theme customization in `src/plugins/vuetify.ts`

### Figma Sync
- Design variables are synced from Figma → `src/tokens/`
- Manual sync: Update tokens file with Figma values
- Rebuild library after token changes
- Document any design system changes in CHANGELOG.md

### Accessibility Focus
- WCAG 2.1 AAA compliance required (not just AA)
- Use semantic HTML (`<button>`, `<nav>`, `<main>`, etc.)
- Include ARIA attributes for complex components
- Test keyboard navigation and screen readers
- axe-core automated checks must pass

### Performance
- Tree-shaking enabled (per-component exports)
- External Vue/Vuetify dependencies not bundled
- CSS is compiled to `dist/style.css`
- Minification removes console/debugger in production

## Related Files

- **README.md**: Quick start, installation, feature overview
- **CONTRIBUTING.md**: Detailed contribution guidelines, code style
- **STRUCTURE.md**: Complete file tree and architecture diagrams
- **CHANGELOG.md**: Version history and feature roadmap
- **docs/ENTERPRISE.md**: Enterprise features, accessibility details

## Quick Troubleshooting

### Tests failing after component changes
- Check that component exports are updated in `src/index.ts`
- Verify TypeScript compiles: `npm run type-check`
- Run specific test: `npm run test tests/YourComponent.spec.js`

### Build failing
- Check for TypeScript errors: `npm run type-check`
- Verify all imports resolve correctly
- Check that external dependencies (Vue, Vuetify) are marked as external in vite.config.ts

### Linting errors
- Run auto-fix: `npm run lint:fix`
- Check eslint config in `.eslintrc.cjs` for rules
- Multi-word component names required (not single word)

### Documentation not building
- Verify markdown syntax in `docs/`
- Check VitePress config: `docs/.vitepress/config.js`
- Built docs go to `docs/.vitepress/dist/`
