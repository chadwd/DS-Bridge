# GitHub Issues - Session #2 Enterprise Foundation Enhancement

This document contains all issues for Session #2. Create these as GitHub Issues for tracking and accountability.

---

## Session #2 Roadmap: Enterprise Foundation

**Goal:** Transform MVP into enterprise-ready design system
**Timeline:** Single session (parallel work items)
**Priority:** 1 (TypeScript) → 2 (A11y) → 3 (Build Opt) → Others

---

## Issues to Create

### ISSUE #1: Implement TypeScript Support (CRITICAL)

**Title:** Add TypeScript support to all source files

**Labels:** `enhancement`, `priority-high`, `typescript`

**Description:**
```markdown
## Summary
Add TypeScript support to make the design system type-safe and improve IDE support.

## Scope
- Convert all `.vue` files to use `<script lang="ts">`
- Convert all `.js` files to `.ts`
- Add type definitions for tokens
- Add component prop types
- Generate `.d.ts` files in build
- Update `tsconfig.json`
- Update `package.json` exports with `types` field

## Files to Convert
- [ ] `src/main.ts`
- [ ] `src/App.vue` (add lang="ts")
- [ ] `src/tokens/index.ts`
- [ ] `src/components/Button.vue` (add lang="ts")
- [ ] `src/components/index.ts`
- [ ] `src/plugins/vuetify.ts`
- [ ] `vite.config.ts`
- [ ] `vitest.config.ts`

## Deliverables
- [ ] All TypeScript files compile with zero errors
- [ ] Types exported in package.json
- [ ] `dist/index.d.ts` generated
- [ ] All imports updated
- [ ] Tests updated for TypeScript

## Acceptance Criteria
- `npm run build` produces `.d.ts` files
- `npm run test -- --run` passes with TS
- IDE shows proper type hints
- No `any` types without justification

## Dependencies
None - can start immediately
```

---

### ISSUE #2: Add Accessibility Testing & Compliance (CRITICAL)

**Title:** Implement WCAG 2.1 AAA accessibility testing

**Labels:** `enhancement`, `priority-high`, `accessibility`, `testing`

**Description:**
```markdown
## Summary
Add axe-core integration and accessibility tests to ensure WCAG 2.1 AAA compliance.

## Scope
- Install axe-core and axe-playwright
- Create accessibility test utilities
- Add tests for Button component
- Add color contrast validation
- Add keyboard navigation tests
- Document accessibility patterns

## Deliverables
- [ ] `npm install axe-core @axe-core/playwright`
- [ ] Create `tests/a11y.spec.js` for accessibility tests
- [ ] Button component a11y tests (10+ test cases)
- [ ] Color contrast validator in build
- [ ] ARIA documentation in component docs
- [ ] Keyboard navigation tests

## Test Cases
- [ ] Button keyboard focus visible
- [ ] Button keyboard activation (Enter/Space)
- [ ] Button ARIA labels
- [ ] Color contrast ratios
- [ ] Screen reader announcements
- [ ] Focus management
- [ ] Disabled state accessibility

## Acceptance Criteria
- All accessibility tests pass
- `npm run test:a11y` command works
- Zero axe violations on Button
- Components document ARIA requirements
- CI fails if a11y tests fail

## Documentation
- [ ] Update `docs/components/button.md` with a11y section
- [ ] Create `docs/accessibility.md` guide
- [ ] Add WCAG compliance statement to README
```

---

### ISSUE #3: Optimize Build Output & Per-Component Exports (HIGH)

**Title:** Enable tree-shaking and per-component imports

**Labels:** `enhancement`, `priority-high`, `build`, `performance`

**Description:**
```markdown
## Summary
Optimize build output with per-component exports, CSS modules, and tree-shaking support.

## Current Problem
- No per-component imports (must import from main)
- No CSS separation
- Bundle includes everything
- Hard to tree-shake

## Solution
- Add per-component export paths
- Implement CSS modules or separated CSS
- Update vite.config.js with proper exports
- Test tree-shaking with bundlesize

## Deliverables
- [ ] Update package.json exports:
  \`\`\`json
  {
    "exports": {
      ".": { "import": "./dist/index.js", "types": "./dist/index.d.ts" },
      "./components": { "import": "./dist/components/index.js" },
      "./tokens": { "import": "./dist/tokens/index.js" },
      "./components/Button": { "import": "./dist/components/Button.js" }
    }
  }
  \`\`\`
- [ ] Configure Vite for per-file chunks
- [ ] Test per-component imports work
- [ ] Add bundle analysis to build output
- [ ] Create bundlesize budget config

## Test Cases
- [ ] \`import { DsButton } from 'ds-bridge/components/Button'\` works
- [ ] \`import tokens from 'ds-bridge/tokens'\` works
- [ ] Unused components don't increase bundle
- [ ] CSS is properly separated or tree-shaken

## Acceptance Criteria
- Per-component imports functional
- Bundle size < 250kb gzipped (without Vuetify)
- Tree-shaking verified
- Build produces size report
```

---

### ISSUE #4: Setup Visual Regression Testing

**Title:** Integrate visual regression testing (Percy/Chromatic)

**Labels:** `enhancement`, `priority-medium`, `testing`, `ci-cd`

**Description:**
```markdown
## Summary
Add visual regression testing to catch unintended UI changes.

## Scope
- Choose and integrate Percy or Chromatic
- Add visual tests for Button component
- Integrate with CI/CD pipeline
- Create snapshot baselines

## Deliverables
- [ ] Choose Percy or Chromatic (recommend Percy)
- [ ] Setup project credentials
- [ ] Add visual test script
- [ ] Create Button visual tests
- [ ] Integrate with GitHub Actions
- [ ] Create baselines

## Setup Steps
1. Sign up at percy.io or chromatic.com
2. Get project token
3. Install Percy:
   \`\`\`bash
   npm install --save-dev @percy/cli @percy/playwright
   \`\`\`
4. Create visual tests
5. Add to CI workflow

## Acceptance Criteria
- Visual regression tests run in CI
- Button component has baseline snapshots
- Failed screenshots block merge
- Local visual testing works

## Documentation
- [ ] Add visual testing guide to CONTRIBUTING.md
- [ ] Document snapshot workflow
```

---

### ISSUE #5: Implement Storybook Integration

**Title:** Add Storybook for component development & design collaboration

**Labels:** `enhancement`, `priority-medium`, `documentation`, `design`

**Description:**
```markdown
## Summary
Set up Storybook as component preview/development environment.

## Scope
- Install Storybook with Vue 3
- Create Button stories with all variants
- Add Vuetify theme support
- Integrate with docs
- Create addon setup

## Deliverables
- [ ] \`npm run storybook\` command
- [ ] Button.stories.js with all variants
- [ ] Vuetify theme in Storybook
- [ ] Storybook build in CI
- [ ] Link from main docs
- [ ] Accessibility addon enabled
- [ ] Design tokens addon (optional)

## Stories to Create
- Button - Variants (filled, outlined, text)
- Button - Sizes (sm, md, lg)
- Button - Colors (primary, secondary, error)
- Button - States (default, disabled, loading)
- Button - Playground (interactive controls)

## Acceptance Criteria
- \`npm run storybook\` works
- All Button variants visible
- Vuetify theme applies correctly
- Accessibility panel shows no violations
- Can modify props and see changes

## Documentation
- [ ] Add Storybook link to README
- [ ] Create Storybook guide in CONTRIBUTING.md
```

---

### ISSUE #6: Create Additional Components (Card, Input, Select)

**Title:** Add Card, Input, and Select components with full tests & docs

**Labels:** `enhancement`, `priority-medium`, `components`

**Description:**
```markdown
## Summary
Expand component library with 3 essential components following enterprise patterns.

## Components to Create

### Card Component
**File:** \`src/components/Card.vue\`
**Props:**
- \`variant\` (outlined, elevated, flat)
- \`padding\` (none, sm, md, lg)
- \`shadow\` (none, xs, sm, md, lg)

**Slots:**
- \`default\` - main content
- \`header\` - header content
- \`footer\` - footer content
- \`actions\` - action buttons

**Tests:** 8+ test cases

### Input Component
**File:** \`src/components/Input.vue\`
**Props:**
- \`label\` - input label
- \`placeholder\` - placeholder text
- \`type\` - input type (text, email, number, password, etc.)
- \`disabled\` - disabled state
- \`readonly\` - readonly state
- \`error\` - error state
- \`errorMessage\` - error message text
- \`hint\` - helper text

**Events:**
- \`@input\` - on value change
- \`@focus\` - on focus
- \`@blur\` - on blur

**Tests:** 12+ test cases

### Select Component
**File:** \`src/components/Select.vue\`
**Props:**
- \`options\` - array of options
- \`label\` - select label
- \`placeholder\` - placeholder
- \`multiple\` - allow multiple selection
- \`disabled\` - disabled state
- \`error\` - error state
- \`errorMessage\` - error message

**Events:**
- \`@change\` - on selection change
- \`@blur\` - on blur

**Tests:** 12+ test cases

## Deliverables
- [ ] All components use TypeScript
- [ ] All components have accessibility support
- [ ] Each has 8-12 test cases
- [ ] Documentation in docs/components/
- [ ] Storybook stories created
- [ ] Added to component index.js
- [ ] 100% test coverage for new components

## Acceptance Criteria
- All tests pass
- All components accessible (axe clean)
- Full JSDoc documentation
- Storybook stories for all variants
- No linting errors
```

---

### ISSUE #7: Update Build Configuration & Add Performance Budgets

**Title:** Enhance build tooling with performance budgets and bundle analysis

**Labels:** `enhancement`, `priority-medium`, `build`, `performance`

**Description:**
```markdown
## Summary
Add build optimizations, performance budgets, and bundle analysis.

## Deliverables
- [ ] Install rollup-plugin-visualizer
- [ ] Add bundle size output to build
- [ ] Configure performance budgets:
  - Components bundle: < 100kb gzipped
  - Tokens bundle: < 5kb gzipped
  - Total: < 250kb gzipped
- [ ] Add \`npm run analyze\` command
- [ ] Update build script to show warnings for size overages
- [ ] Add to CI for enforcement

## Acceptance Criteria
- \`npm run build\` shows bundle analysis
- \`npm run analyze\` opens visualization
- CI fails if budget exceeded
- All component sizes tracked
```

---

### ISSUE #8: Update CHANGELOG & Documentation

**Title:** Document Session #2 progress and enterprise roadmap

**Labels:** `documentation`, `maintenance`

**Description:**
```markdown
## Summary
Update CHANGELOG and create enterprise roadmap documentation.

## Deliverables
- [ ] Update CHANGELOG.md with Session #2 items
- [ ] Add Enterprise Roadmap section
- [ ] Create docs/ENTERPRISE.md with:
  - WCAG 2.1 AAA compliance statement
  - TypeScript support details
  - Performance characteristics
  - Build optimization details
  - Accessibility patterns
- [ ] Update CONTRIBUTING.md with TypeScript guide
- [ ] Update README with enterprise features

## Acceptance Criteria
- All features documented
- Roadmap clear for next release
- Enterprise features highlighted
```

---

## Priority & Dependencies

```
┌─ #1: TypeScript (CRITICAL) ─ MUST START FIRST
│   └─ All other issues depend on this
├─ #2: A11y Testing (CRITICAL) ─ Can run in parallel with #1
├─ #3: Build Optimization ─ Depends on #1
├─ #4: Visual Regression Testing ─ Depends on #1, can start early
├─ #5: Storybook ─ Depends on #1
├─ #6: New Components ─ Depends on #1, #2
├─ #7: Build & Performance ─ Depends on #3, #6
└─ #8: Documentation ─ Last, but can do in parallel
```

---

## Creating Issues in GitHub

1. Go to: https://github.com/yourusername/DS-Bridge/issues
2. Click "New issue"
3. Copy title and description from above
4. Add labels
5. Assign to yourself
6. Set milestone: "Session #2 - Enterprise Foundation"

**Or use GitHub CLI:**
```bash
gh issue create --title "Add TypeScript support" --body "..." --label "enhancement,priority-high"
```

---

## Tracking Progress

**Check off as you complete:**
- [ ] Issue #1: TypeScript
- [ ] Issue #2: A11y Testing
- [ ] Issue #3: Build Optimization
- [ ] Issue #4: Visual Regression
- [ ] Issue #5: Storybook
- [ ] Issue #6: New Components
- [ ] Issue #7: Performance Budgets
- [ ] Issue #8: Documentation

---

## Success Criteria for Session #2

✅ All 8 issues closed
✅ All tests passing (20+ new tests)
✅ 3 new components (Card, Input, Select)
✅ TypeScript fully integrated
✅ Accessibility verified (WCAG 2.1 AAA)
✅ Visual regression testing setup
✅ Storybook running
✅ Per-component exports working
✅ Updated CHANGELOG & AGENT_WORK_JOURNAL

---

## Next Steps After Session #2

**Session #3 Ideas:**
- Figma Code Connect integration
- Dark mode completion & testing
- More components (Badge, Alert, Breadcrumb, Tabs)
- Form validation patterns
- State management examples
- Performance optimization docs
