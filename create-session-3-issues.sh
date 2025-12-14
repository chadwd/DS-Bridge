#!/bin/bash

# DS-Bridge Session 3 GitHub Issues Creation Script
# Run this after setting up your GitHub remote: git remote add origin <your-repo-url>

echo "Creating GitHub Issues for Session 3..."

# Issue 0: CRITICAL - Fix Repository Structure
gh issue create \
  --title "[Session 3] CRITICAL: Fix repository working directory structure" \
  --body "## 🚨 CRITICAL ISSUE
The repository has a structural issue where work is being done at the wrong directory level.

## Problem
- Root folder: \`DS-Bridge/\`
- Actual project location: \`DS-Bridge/design-system/\`
- All source code and docs are in the \`design-system/\` subdirectory

## Tasks
- [ ] Ensure all work is done in \`/design-system/\` subdirectory
- [ ] Move any misplaced files from DS-Bridge root to design-system folder
- [ ] Update all file paths in documentation to use design-system as base
- [ ] Verify git is tracking the correct directory structure
- [ ] Update any scripts or configs that reference incorrect paths
- [ ] Ensure VS Code or IDE is opened at the correct level

## Correct Structure
\`\`\`
DS-Bridge/
└── design-system/          # ← All work should be here
    ├── src/               # Source code
    ├── docs/              # Documentation
    ├── tests/             # Tests
    ├── package.json       # Project config
    └── vite.config.ts     # Build config
\`\`\`

## Priority
CRITICAL - Must be fixed before any other work begins" \
  --label "bug" \
  --label "critical" \
  --label "high-priority"

# Issue 1: Custom VitePress Theme
gh issue create \
  --title "[Session 3] Implement custom VitePress theme with design system integration" \
  --body "## Description
Create custom theme structure to integrate design tokens and Vuetify into the documentation site.

## Tasks
- [ ] Create \`.vitepress/theme/\` directory structure
- [ ] Create custom \`index.js\` theme entry point
- [ ] Create \`style.css\` with design token imports
- [ ] Create custom \`Layout.vue\` component
- [ ] Import and configure Vuetify in theme

## Priority
HIGH - This is foundational for all other styling work

## Related Files
- Design tokens: \`src/tokens/index.ts\`
- Vuetify config: \`src/plugins/vuetify.ts\`" \
  --label "enhancement" \
  --label "documentation" \
  --label "high-priority"

# Issue 2: Typography System
gh issue create \
  --title "[Session 3] Fix typography to use Roboto font family from design tokens" \
  --body "## Description
Implement proper Roboto font family and typography scale throughout the documentation.

## Tasks
- [ ] Add Google Fonts link for Roboto (weights: 300, 400, 500, 700)
- [ ] Apply \`typography.fontFamily.base\` as root font
- [ ] Configure font sizes from tokens (xs, sm, base, lg, xl, 2xl, 3xl)
- [ ] Set line heights (tight: 1.2, normal: 1.5, relaxed: 1.75)
- [ ] Apply font weights correctly across headings and body text

## Priority
HIGH - Core visual consistency issue

## Design Token Reference
\`\`\`typescript
fontFamily: {
  base: 'Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Helvetica Neue\", Arial, sans-serif',
  code: 'Menlo, Monaco, \"Courier New\", monospace',
}
\`\`\`" \
  --label "bug" \
  --label "documentation" \
  --label "high-priority"

# Issue 3: Color System
gh issue create \
  --title "[Session 3] Apply design system colors throughout documentation" \
  --body "## Description
Implement color tokens as CSS custom properties and apply them globally.

## Tasks
- [ ] Create CSS custom properties for all color tokens
- [ ] Apply primary color (#6366F1) to navigation and CTAs
- [ ] Apply secondary color (#EC4899) for accents
- [ ] Implement semantic colors (error, warning, success, info)
- [ ] Configure text color hierarchy (textHigh, textMedium, textLow)
- [ ] Set surface and background colors

## Priority
HIGH - Essential for brand consistency

## Color Tokens
- Primary: #6366F1 (Indigo-600)
- Secondary: #EC4899 (Pink-500)
- Error: #DC2626
- Warning: #F59E0B
- Success: #10B981
- Info: #3B82F6" \
  --label "enhancement" \
  --label "documentation" \
  --label "high-priority"

# Issue 4: Core Documentation Pages
gh issue create \
  --title "[Session 3] Create Introduction, Tokens, and Style Guide pages" \
  --body "## Description
Build out core documentation pages with comprehensive content.

## Tasks
- [ ] Create \`docs/guide/introduction.md\`
- [ ] Create \`docs/guide/getting-started.md\`
- [ ] Create \`docs/guide/philosophy.md\`
- [ ] Create \`docs/design/tokens.md\` with live examples
- [ ] Create \`docs/design/colors.md\` with color swatches
- [ ] Create \`docs/design/typography.md\` with type scale
- [ ] Create \`docs/design/spacing.md\` with spacing grid
- [ ] Create \`docs/design/style-guide.md\`

## Priority
MEDIUM - Important for documentation completeness

## Content Requirements
- Interactive token previews
- Live code examples
- Usage guidelines
- Best practices" \
  --label "documentation" \
  --label "medium-priority"

# Issue 5: Component Organization
gh issue create \
  --title "[Session 3] Reorganize components by category" \
  --body "## Description
Create logical grouping for components to improve navigation and discoverability.

## Tasks
- [ ] Create category folders (form/, layout/, navigation/)
- [ ] Move existing components to appropriate categories
- [ ] Update navigation structure in config
- [ ] Add category overview pages
- [ ] Update import paths in examples

## Priority
MEDIUM - Improves documentation UX

## Proposed Structure
\`\`\`
components/
├── form/
│   ├── button.md
│   ├── input.md
│   └── select.md
├── layout/
│   ├── grid.md
│   └── container.md
└── navigation/
    ├── navbar.md
    └── sidebar.md
\`\`\`" \
  --label "documentation" \
  --label "medium-priority"

# Issue 6: Spacing System
gh issue create \
  --title "[Session 3] Implement consistent spacing using design tokens" \
  --body "## Description
Apply spacing tokens throughout the documentation site for visual consistency.

## Tasks
- [ ] Apply spacing tokens (xs: 4px, sm: 8px, md: 16px, lg: 24px, xl: 32px, xxl: 48px)
- [ ] Implement proper container widths
- [ ] Add responsive breakpoints
- [ ] Configure content padding and margins
- [ ] Apply consistent component spacing

## Priority
MEDIUM - Important for professional appearance

## Spacing Tokens
\`\`\`typescript
spacing: {
  xs: '4px',
  sm: '8px',
  md: '16px',
  lg: '24px',
  xl: '32px',
  xxl: '48px',
}
\`\`\`" \
  --label "enhancement" \
  --label "documentation" \
  --label "medium-priority"

# Issue 7: Dark Mode Feature
gh issue create \
  --title "[Session 3] Add dark/light mode toggle" \
  --body "## Description
Implement theme switching with user preference persistence.

## Tasks
- [ ] Add theme toggle button in navigation
- [ ] Create dark mode color mappings
- [ ] Persist user preference in localStorage
- [ ] Add smooth transitions between modes
- [ ] Test all components in both modes
- [ ] Update color tokens for dark mode

## Priority
LOW - Nice to have feature

## Technical Requirements
- Use VitePress appearance config
- Leverage CSS custom properties for theming
- Ensure accessibility in both modes" \
  --label "enhancement" \
  --label "feature" \
  --label "low-priority"

# Issue 8: Component Playground
gh issue create \
  --title "[Session 3] Create interactive component playground" \
  --body "## Description
Build interactive prop controls and live preview for components.

## Tasks
- [ ] Create interactive prop controls UI
- [ ] Add live code generation based on props
- [ ] Implement copy-to-clipboard functionality
- [ ] Add code/preview toggle
- [ ] Create responsive preview containers
- [ ] Add prop validation feedback

## Priority
LOW - Advanced feature for later implementation

## Features
- Real-time prop updates
- TypeScript prop definitions
- Export code snippets
- Responsive preview
- Accessibility testing integration" \
  --label "enhancement" \
  --label "feature" \
  --label "low-priority"

echo "✅ All GitHub issues created successfully!"
echo ""
echo "View your issues with: gh issue list"
echo "Or open in browser: gh issue list --web"