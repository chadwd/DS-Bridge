# Project Structure Overview

## Complete Folder Tree

```
ds-bridge/
│
├── 📁 src/                                 # Vue 3 Component Library
│   ├── 📁 tokens/
│   │   └── index.js                       # Design tokens (colors, spacing, typography)
│   ├── 📁 components/
│   │   ├── Button.vue                     # Button component (MVP)
│   │   └── index.js                       # Component barrel exports
│   ├── 📁 plugins/
│   │   └── vuetify.js                     # Vuetify 3 theme configuration
│   ├── App.vue                            # Playground/demo app
│   └── main.js                            # Vue app entry point
│
├── 📁 docs/                               # VitePress Documentation Site
│   ├── 📁 .vitepress/
│   │   ├── config.js                      # VitePress configuration
│   │   └── 📁 components/                 # Custom VitePress components
│   ├── index.md                           # Design system overview
│   ├── tokens.md                          # Design tokens reference
│   └── 📁 components/
│       └── button.md                      # Button component documentation
│
├── 📁 tests/                              # Unit Tests
│   └── Button.spec.js                     # Button component tests (Vitest)
│
├── 📁 .github/
│   └── 📁 workflows/
│       └── ci.yml                         # GitHub Actions CI/CD pipeline
│
├── 📄 index.html                          # HTML entry point for Vite
├── 📄 package.json                        # Dependencies and npm scripts
├── 📄 vite.config.js                      # Vite build configuration
├── 📄 vitest.config.js                    # Vitest/Jest configuration
├── 📄 .eslintrc.cjs                       # ESLint rules
├── 📄 .gitignore                          # Git ignore patterns
├── 📄 README.md                           # Main project documentation
└── 📄 STRUCTURE.md                        # This file
```

## File Summary

### Core Application Files

| File | Purpose |
|------|---------|
| `index.html` | Vite entry point, loads Vue app |
| `src/main.js` | Vue app initialization, mount point |
| `src/App.vue` | Main playground/demo component |
| `src/plugins/vuetify.js` | Vuetify theme setup with design tokens |

### Design System Core

| File | Purpose |
|------|---------|
| `src/tokens/index.js` | Single source of truth for all design values |
| `src/components/Button.vue` | Example component using design tokens |
| `src/components/index.js` | Barrel export for components |

### Documentation

| File | Purpose |
|------|---------|
| `docs/.vitepress/config.js` | VitePress site configuration |
| `docs/index.md` | Getting started guide |
| `docs/tokens.md` | Complete token reference |
| `docs/components/button.md` | Button component docs with examples |

### Testing & Quality

| File | Purpose |
|------|---------|
| `tests/Button.spec.js` | Unit tests for Button component |
| `vitest.config.js` | Vitest test runner configuration |
| `.eslintrc.cjs` | ESLint code quality rules |

### Configuration

| File | Purpose |
|------|---------|
| `package.json` | Dependencies, scripts, project metadata |
| `vite.config.js` | Vite bundler configuration |
| `.gitignore` | Files to exclude from git |

### CI/CD

| File | Purpose |
|------|---------|
| `.github/workflows/ci.yml` | GitHub Actions workflow for linting, testing, building |

### Documentation Files

| File | Purpose |
|------|---------|
| `README.md` | Main project documentation |
| `STRUCTURE.md` | This structure reference |

## Design System Architecture

### Token Hierarchy

```
src/tokens/index.js
├── colors
│   ├── primary, primaryDark, primaryLight
│   ├── secondary, secondaryDark, secondaryLight
│   ├── error, warning, success, info
│   ├── surface, background
│   ├── textHigh, textMedium, textLow
│   └── ...more
├── spacing
│   └── xs, sm, md, lg, xl, xxl
├── typography
│   ├── fontFamily
│   ├── fontSize
│   ├── lineHeight
│   └── fontWeight
├── borderRadius
│   └── none, xs, sm, md, lg, xl, full
└── shadows
    └── none, xs, sm, base, md, lg, xl
```

### Component Architecture

```
Components
├── src/components/
│   ├── Button.vue
│   └── index.js (barrel export)
├── tests/
│   └── Button.spec.js
└── docs/components/
    └── button.md
```

### Vuetify Integration

```
Vuetify 3
├── Theme colors (from tokens)
├── Registered components
└── Registered directives
    ↓
Available globally in all Vue components
```

## Data Flow

```
Design Tokens (src/tokens/index.js)
    ↓
Vuetify Theme (src/plugins/vuetify.js)
    ↓
Components (src/components/)
    ↓
Application (src/App.vue)
    ↓
Browser
```

## Development Workflow

```
┌─────────────────────────────────────────┐
│  Create/Update Design Token            │
│  (src/tokens/index.js)                  │
└──────────────┬──────────────────────────┘
               ↓
┌─────────────────────────────────────────┐
│  Update Vuetify Theme                   │
│  (src/plugins/vuetify.js)               │
└──────────────┬──────────────────────────┘
               ↓
┌─────────────────────────────────────────┐
│  Use in Components                      │
│  (src/components/*.vue)                 │
└──────────────┬──────────────────────────┘
               ↓
┌─────────────────────────────────────────┐
│  Write Tests                            │
│  (tests/*.spec.js)                      │
└──────────────┬──────────────────────────┘
               ↓
┌─────────────────────────────────────────┐
│  Document                               │
│  (docs/components/*.md)                 │
└─────────────────────────────────────────┘
```

## Import Patterns

### Import Components
```javascript
import { DsButton } from '@/components/index.js';
```

### Import Tokens
```javascript
import tokens, { colors, spacing, typography } from '@/tokens/index.js';
```

### Use Vuetify Directly
```vue
<v-btn color="primary">Click me</v-btn>
<v-card class="pa-lg">Content</v-card>
```

## NPM Scripts Reference

```bash
npm run dev              # Start playground (port 5173)
npm run build            # Build component library
npm run preview          # Preview production build

npm run docs:dev         # Start docs site
npm run docs:build       # Build docs for production
npm run docs:preview     # Preview built docs

npm run test             # Run tests once
npm run test:ui          # Run tests with UI
npm run test:coverage    # Generate coverage report

npm run lint             # Check code quality
npm run lint:fix         # Fix linting issues
```

## Key Design Decisions

### 1. **Single Token File**
- All design values in one place (`src/tokens/index.js`)
- Easy to sync with Figma variables
- Clear source of truth

### 2. **Vuetify as Base**
- Components extend Vuetify, not replace it
- Vuetify components available globally
- Theme system integrated with tokens

### 3. **Component Wrapper Pattern**
- `DsButton` wraps `v-btn` with design conventions
- Adds design system specific APIs
- Extensible for future enhancements

### 4. **Separated Docs**
- VitePress site in `/docs` folder
- Can be built and deployed independently
- Separate from playground app

### 5. **Comprehensive Testing**
- Vitest for fast unit testing
- Vue Test Utils for component testing
- Coverage reports available

### 6. **CI/CD from Start**
- GitHub Actions workflow included
- Runs lint, tests, build
- PR/push automation

### 7. **Figma-Ready Structure**
- Tokens easily map to Figma variables
- Component naming follows conventions
- Ready for Code Connect integration

## Extension Points

### Adding Components
1. Create `src/components/NewComponent.vue`
2. Export from `src/components/index.js`
3. Add tests in `tests/NewComponent.spec.js`
4. Document in `docs/components/new-component.md`

### Adding Tokens
1. Update `src/tokens/index.js`
2. Update theme in `src/plugins/vuetify.js` if needed
3. Document in `docs/tokens.md`

### Adding Pages to Docs
1. Create `.md` file in `docs/`
2. Reference in `.vitepress/config.js` nav/sidebar
3. Build with `npm run docs:build`

## Build Output

### Development Build
- `npm run dev` → local dev server at :5173
- Hot module replacement (HMR) enabled
- Source maps for debugging

### Production Build
- `npm run build` → outputs to `dist/`
- Optimized bundle
- ES module and CommonJS variants

### Documentation Build
- `npm run docs:build` → outputs to `docs/.vitepress/dist/`
- Static HTML site
- Ready for deployment to any static host

## Dependencies Overview

### Core
- `vue` (3.4+) - UI framework
- `vuetify` (3.4+) - Material Design component library
- `vite` (5.0+) - Build tool

### Dev
- `@vitejs/plugin-vue` - Vite Vue support
- `vitest` - Unit testing
- `@vue/test-utils` - Vue component testing
- `eslint` & `eslint-plugin-vue` - Code quality
- `vitepress` - Documentation site builder
- `material-design-icons-iconfont` - Icon support

---

This structure is designed to be:
- **Scalable**: Easy to add components and tokens
- **Maintainable**: Clear organization and separation of concerns
- **Documentable**: Each part has clear purpose
- **Testable**: Testing structure in place from the start
- **Production-ready**: CI/CD and build process included
- **Figma-friendly**: Structure supports design tool integration
