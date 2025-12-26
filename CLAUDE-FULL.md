# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**DS-Bridge** is an enterprise-grade, white-label Vue 3 design system built on Vuetify 3 and TypeScript. It provides reusable UI components with design tokens synchronized to Figma, accessibility-first development (WCAG 2.1 AAA compliance), and comprehensive documentation.

The repository name is `ds-bridge` and the npm package name is `ds-bridge`.

The project is a monorepo-style structure with:
- **Source**: Vue 3 components + design tokens (TypeScript) in `src/`
- **Tests**: Unit + accessibility tests with Vitest in `tests/`
- **Docs**: VitePress documentation site in `docs/`
- **Build**: Dual-format distribution (ES modules + CommonJS) in `dist/`
- **Agent Sessions**: Contributor-specific session plans in `agent-sessions/`
- **Agent Journals**: Contributor-specific work journals in `agent-journals/`

## Multi-Contributor Workflow

DS-Bridge supports multiple designers and developers working in parallel using **contributor-specific tracking files**.

**File Naming Convention**:
- Session Plans: `agent-sessions/{name}-SESSION_N_PLAN.md`
- Work Journals: `agent-journals/{name}-agent-work-journal.md`

**Example**:
```
agent-sessions/chad-SESSION_6_PLAN.md
agent-sessions/jake-SESSION_1_PLAN.md
agent-journals/chad-agent-work-journal.md
agent-journals/jake-agent-work-journal.md
```

**See [CONTRIBUTOR_WORKFLOW.md](./CONTRIBUTOR_WORKFLOW.md) for complete details on:**
- Slash command usage (`/session-plan-start`, `/ds-build-component`, etc.)
- Working in parallel with other contributors
- Session planning and wrap-up procedures
- Best practices for collaboration

## Agent Behavior & Autonomy

**Operating Mode**: High autonomy with proactive quality assurance.

### Core Principles

1. **Proactive Quality Gates**
   - Auto-run tests after making changes to components
   - Auto-fix linting issues before committing
   - Auto-validate TypeScript compilation
   - Auto-check accessibility compliance
   - Surface issues immediately, fix when possible

2. **Efficient Execution**
   - Execute independent operations in parallel (multiple tool calls in single message)
   - Read all relevant files upfront before making changes
   - Batch related changes together
   - Avoid unnecessary back-and-forth

3. **Smart Decision Making**
   - Make decisions on implementation details autonomously
   - Ask only for critical architectural choices or user preferences
   - Use best practices by default (WCAG AAA, TypeScript strict, semantic HTML)
   - Infer intent from context and project patterns

4. **Continuous Validation**
   - After component changes: run tests, check types, verify builds
   - Before commits: lint, test, build validation
   - After token updates: verify component rendering
   - Security: check for XSS, injection, OWASP top 10

### Proactive Behaviors

**Auto-Testing Pattern**:
```
After editing a component → Immediately run:
- npm run test tests/ComponentName.spec.js
- npm run test tests/ComponentName.a11y.spec.ts
- npm run type-check (if TypeScript changes)
```

**Auto-Fix Pattern**:
```
When lint errors detected → Auto-fix:
- npm run lint:fix
- Fix remaining issues manually
- Re-run tests to ensure fixes don't break behavior
```

**Parallel Execution Pattern**:
```
When gathering context → Execute in parallel:
- Read component file
- Read related tests
- Read documentation
- Check for similar patterns in codebase
```

**Quality Gate Pattern**:
```
Before suggesting completion → Validate:
✅ Tests pass (unit + a11y)
✅ TypeScript compiles without errors
✅ Linting passes
✅ Build succeeds
✅ Documentation updated
```

### When to Ask vs Decide

**Ask User About**:
- New component API design (prop names, variants)
- Breaking changes to existing components
- Architectural decisions (new dependencies, patterns)
- Design system token values or naming
- Feature prioritization

**Decide Autonomously**:
- Implementation details (variable names, code structure)
- Which Vuetify components to use
- Test structure and assertions
- Documentation wording
- Bug fixes and error handling
- Accessibility attribute selection
- TypeScript type definitions

### Error Prevention

**Before Writing Code**:
- ✅ Read existing files to understand patterns
- ✅ Check component exports in src/index.ts
- ✅ Verify design tokens exist before using
- ✅ Validate prop types align with Vuetify

**Security Checks**:
- ❌ No raw HTML rendering without sanitization
- ❌ No SQL queries (N/A for this project)
- ❌ No eval() or Function() constructors
- ❌ No direct DOM manipulation (use Vue refs)
- ✅ Validate user input at boundaries
- ✅ Use TypeScript strict mode
- ✅ Sanitize any dynamic content

**Common Pitfalls to Avoid**:
- Don't create files when editing existing ones works
- Don't add features beyond what's requested
- Don't skip accessibility attributes
- Don't hardcode values that should be tokens
- Don't forget to update exports in src/index.ts
- Don't commit without running quality gates

### Communication Style

**Be Concise**:
- State what you're doing, then do it
- Show results, not lengthy explanations
- Use file:line references for code locations
- Report issues with solutions, not just problems

**Be Proactive**:
- "I noticed X, fixing it now..." ✅
- "Should I fix X?" ❌ (just fix it)
- Run tests automatically, report results
- Fix lint issues without asking

**Be Context-Aware**:
- Reference session plans and journals
- Follow established component patterns
- Match existing code style
- Build on prior work in the session

### Quick Reference: Common Patterns

**Starting a Task**:
```
1. Read relevant files in parallel
2. Create TodoWrite list if 3+ steps
3. Execute changes
4. Run quality gates automatically
5. Report results concisely
```

**Component Change Workflow**:
```
Edit → Test → Type-check → Lint-fix → Build → Commit
(Auto-run all validation steps)
```

**Investigating Issues**:
```
1. Read file causing issue
2. Check related tests
3. Run tests to reproduce
4. Fix issue
5. Verify fix with tests
6. No need to ask "should I fix this?"
```

**Adding Features**:
```
1. Read existing similar components (parallel)
2. Implement following established patterns
3. Add/update tests immediately
4. Run test suite
5. Update docs
6. Validate build
```

**Code Quality Flow**:
```
Write code → Auto-lint → Auto-test → Auto-type-check → Report any issues with fixes
```

**Git Operations**:
```
Before commit:
- Run: npm run lint:fix && npm run test && npm run build
- Verify: git status (only intended changes)
- Commit with conventional commit message
- Push when session complete
```

## Branching Convention

DS-Bridge uses a simple, descriptive branching convention for feature development:

### Branch Naming Format

```
sN-component-feature
```

**Pattern**: `s<session-number>-<component-name>-<feature>`

**Examples**:
```bash
s2-gsale-btn          # Session 2: GuaranteedSale buttons
s3-card-layout        # Session 3: Card component layout
s4-input-validation   # Session 4: Input validation
s5-gsale-loading      # Session 5: GuaranteedSale loading states
```

### Git Workflow

1. **Create branch** for your session:
   ```bash
   git checkout -b s2-gsale-btn
   ```

2. **Work throughout the session** without committing after every change

3. **Commit and push at end of session** (or when taking breaks):
   ```bash
   git add <files>
   git commit -m "feat(components): add dynamic button labels"
   git push -u origin s2-gsale-btn
   ```

   **Commit Policy**:
   - ✅ Commit/push at end of session
   - ✅ Commit/push when taking breaks (to save progress)
   - ❌ Do NOT commit after every small change
   - Follow Git Safety Protocol (see below)

4. **Create Pull Request** on GitHub to merge into `main`

### Branch Naming Benefits

- ✅ **Short but contextful** - Quick to type, easy to understand
- ✅ **Session tracking** - Links directly to session plans in `agent-sessions/`
- ✅ **Component scoped** - Clear what part of the system is being worked on
- ✅ **Feature focused** - Describes the specific work being done
- ✅ **Team friendly** - Multiple contributors can work in parallel without branch name conflicts

## Common Development Commands

### Setup
```bash
npm install          # Install dependencies
npm run dev          # Start documentation site (http://localhost:5173) - RECOMMENDED
npm run playground   # Start component playground for contributors (http://localhost:5173)
```

**Note:** `npm run dev` now starts the documentation site by default. Use `npm run playground` for component development.

### Creating New Components
```bash
npm run create-component ComponentName  # Generate new component from template
```

**Example:**
```bash
npm run create-component Card    # Creates Card component
npm run create-component Input   # Creates Input component
npm run create-component Select  # Creates Select component
```

**What gets created:**
- `src/components/ComponentName.vue` - Vue component with TypeScript
- `tests/ComponentName.spec.js` - Unit tests (6 tests)
- `tests/ComponentName.a11y.spec.ts` - Accessibility tests (4 tests)
- `docs/components/componentname.md` - Interactive documentation
- Export added to `src/index.ts`

See [COMPONENT_TEMPLATE.md](./COMPONENT_TEMPLATE.md) for detailed documentation.

### Building
```bash
npm run build        # Build everything: type-check + library + documentation
npm run build:lib    # Build only the library (components + tokens)
npm run build:docs   # Build only the documentation site
npm run type-check   # Run TypeScript type checking without emitting files
```

### Testing
```bash
npm run test         # Run all tests once
npm run test:ui      # Open Vitest UI (visual test browser)
npm run test:watch   # Run tests in watch mode (DEPRECATED: use npm run test -- --watch)
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
npm run dev          # Start documentation site (RECOMMENDED)
npm run docs:dev     # Same as npm run dev (alias)
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
  - Main: `dist/ds-bridge.js` (full library)
  - Per-component: `dist/components/Button.js` (tree-shakeable)
  - Per-category: `dist/tokens/colors.js` (token-only exports)
- **Dual format**: ES modules (modern) + CommonJS (compatibility)
- **External deps**: Vue and Vuetify are NOT bundled (peer dependencies)
- **Minification**: Terser with console/debugger removal in production

## Development Workflow

### Adding a New Component

**Preferred Method**: Use the generator for consistency and speed.

```bash
npm run create-component MyComponent
```

This auto-generates component, tests, docs, and exports. Then:

1. **Implement Component Logic**
   - Read similar components to understand patterns
   - Use design tokens, never hardcode values
   - Add proper TypeScript types for props
   - Include ARIA attributes and semantic HTML

2. **Auto-Validate** (run in parallel):
   ```bash
   npm run test tests/MyComponent.spec.js &
   npm run test tests/MyComponent.a11y.spec.ts &
   npm run type-check
   ```

3. **Fix Issues Proactively**
   - Auto-fix lint: `npm run lint:fix`
   - Update failing tests to match implementation
   - Ensure axe-core checks pass

4. **Update Documentation**
   - Add component examples to `docs/components/mycomponent.md`
   - Document all props, events, slots
   - Include accessibility notes

5. **Final Quality Gate** (run before commit):
   ```bash
   npm run lint && npm run test && npm run build
   ```

**Manual Creation** (if not using generator):
1. Create `src/components/MyComponent.vue`
2. Export in `src/index.ts`
3. Create `tests/MyComponent.spec.js` + `tests/MyComponent.a11y.spec.ts`
4. Create `docs/components/mycomponent.md`
5. Follow validation steps above

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

### Workflow Efficiency

**Task Tracking**:
- Use TodoWrite for multi-step tasks (3+ steps)
- Mark tasks as in_progress before starting
- Mark completed immediately after finishing
- Keep only one task in_progress at a time

**Parallel Execution Examples**:
```
# Reading context (DO in parallel):
- Read component file
- Read tests
- Read docs
- Read similar components

# Running validations (DO in parallel):
- npm run test ComponentName.spec.js
- npm run test ComponentName.a11y.spec.ts
- npm run type-check

# Sequential operations (DO NOT parallelize):
- Edit file → Read file to verify
- Install package → Import package
- Fix test → Re-run test
```

**Decision Speed**:
- ✅ Use established patterns immediately
- ✅ Follow Vuetify best practices by default
- ✅ Implement WCAG AAA standards automatically
- ❌ Don't ask about standard implementation details
- ❌ Don't propose multiple approaches for simple tasks

**Session Continuity**:
- Check session plans at start: `agent-sessions/{name}-SESSION_N_PLAN.md`
- Update work journal at end: `agent-journals/{name}-agent-work-journal.md`
- Review git status to understand current work
- Build on previous session's progress

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

### Local Pre-commit Checklist

**Automated Quality Gate** (run automatically before suggesting commit):
```bash
# Step 1: Auto-fix what can be fixed
npm run lint:fix

# Step 2: Validate everything passes (parallel where possible)
npm run lint && npm run test && npm run type-check

# Step 3: Ensure build succeeds
npm run build
```

**Manual Verification**:
- ✅ All tests pass (unit + accessibility)
- ✅ No TypeScript errors
- ✅ No lint violations
- ✅ Build completes successfully
- ✅ Git status shows only intended changes
- ✅ Documentation updated for API changes

**If Any Check Fails**:
1. Fix the issue immediately (don't ask user unless critical)
2. Re-run the failed check
3. Verify fix doesn't break other tests
4. Only then proceed to commit

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

## Smart Code Analysis

### Proactive Improvements

When working with code, automatically identify and fix:

**Accessibility Issues**:
- Missing ARIA labels on interactive elements
- Insufficient color contrast (WCAG AAA requires 7:1)
- Missing keyboard navigation support
- Non-semantic HTML (divs instead of buttons)

**Performance Issues**:
- Unnecessary re-renders (missing computed, watch)
- Large bundle imports (import entire library vs tree-shaking)
- Unoptimized images or assets
- Missing v-once or v-memo where appropriate

**Code Quality Issues**:
- Hardcoded values that should be design tokens
- Duplicate code that should be extracted
- Missing TypeScript types (using `any`)
- Inconsistent naming conventions
- Missing error handling at boundaries

**Fix Immediately Without Asking**:
- Lint errors and warnings
- Missing semicolons or formatting
- Unused imports or variables
- TypeScript type errors
- Simple accessibility fixes (adding ARIA labels)

**Report and Suggest**:
- Complex refactoring opportunities
- Performance optimization potential
- Breaking API changes needed
- New design token requirements

### Code Review Mindset

When reading existing code:
1. Understand the pattern before changing
2. Maintain consistency with codebase style
3. Check if similar components exist to reuse
4. Verify design tokens are being used
5. Ensure accessibility standards are met
6. Look for security vulnerabilities

When writing new code:
1. Follow existing component patterns
2. Use TypeScript strict mode
3. Add comprehensive tests (unit + a11y)
4. Document public APIs
5. Use semantic HTML
6. Include proper ARIA attributes

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
