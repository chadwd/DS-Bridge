---
session: 7
contributor: chad
date: 2025-12-18
tags:
  - ds-bridge
  - figma
  - code-connect
  - design-systems
  - developer-handoff
---

# Figma Code Connect Integration

## What We Did
Set up Figma Code Connect for the DS-Bridge design system to bridge the gap between design and code. Configured the GuaranteedSale component as the first connected component, establishing patterns and workflows for future components.

## Why We Did It
Designers and developers needed a way to see actual implementation code directly in Figma's Dev Mode. Without Code Connect, designers had to manually inspect generic CSS or ask developers how to implement components. Code Connect automates this handoff by displaying Vue component code with accurate prop mappings directly in Figma.

## Key Concepts

### What is Figma Code Connect?
A tool that links Figma design components to their code implementations. When a designer inspects a component in Dev Mode, they see the actual Vue component code instead of auto-generated CSS.

### How It Works
1. Create `.figma.ts` files alongside Vue components
2. Map Figma properties to component props
3. Provide example code snippets
4. Publish to Figma using the CLI
5. Designers see code in Dev Mode

### Core Architecture
- **Config**: `figma.config.json` defines which files to scan and parser type
- **Connect Files**: `ComponentName.figma.ts` maps Figma → Code
- **CLI**: `@figma/code-connect` package provides publish/unpublish commands
- **Parser**: Uses `html` parser for Vue 3 components

## Implementation Details

### Prerequisites
- Node.js 18+
- Figma Organization or Enterprise plan
- Full Design or Dev Mode seat
- Personal Access Token with scopes:
  - Code Connect: **Write**
  - File content: **Read**

### File Structure
```
ds-bridge/
├── figma.config.json              # Main configuration
├── src/components/
│   ├── GuaranteedSale.vue         # Component implementation
│   └── GuaranteedSale.figma.ts    # Code Connect mapping
└── FIGMA_CODE_CONNECT.md          # Setup documentation
```

### Configuration (`figma.config.json`)
```json
{
  "codeConnect": {
    "include": ["src/components/**/*.figma.ts"],
    "exclude": [],
    "parser": "html",
    "label": "Vue 3"
  },
  "documentUrlSubstitutions": {
    "EuDde9tKZRxoFIPhyOcvG0": "https://www.figma.com/design/EuDde9tKZRxoFIPhyOcvG0/DS-Bridge--white-label-"
  }
}
```

**Key Settings**:
- `include`: Glob pattern for Code Connect files (`.figma.ts`)
- `parser`: Set to `"html"` for Vue/HTML frameworks
- `label`: Display label in Figma Dev Mode ("Vue 3")
- `documentUrlSubstitutions`: Maps file IDs to full URLs

### Package Installation
```bash
npm install --save-dev @figma/code-connect@latest
```

### NPM Scripts Added
```json
{
  "figma:publish": "figma connect publish",
  "figma:unpublish": "figma connect unpublish"
}
```

## Code Examples

### Code Connect File Structure (`GuaranteedSale.figma.ts`)

```typescript
import figma, { html } from '@figma/code-connect/html';

figma.connect(
  'https://www.figma.com/design/FILE_ID/...?node-id=84-1465',
  {
    props: {
      // String properties
      priceValue: figma.string('Price Value'),

      // Enum properties (variants)
      status: figma.enum('Status', {
        'Available': 'Available',
        'Requested': 'Requested',
        'Accepted': 'Accepted',
        'Expired': 'Expired',
        'Not Available': 'Not Available'
      }),

      // Boolean properties
      showDateTime: figma.boolean('Show DateTime')
    },

    // Example code shown in Figma
    example: (props) => html`<script setup>
import { DsGuaranteedSale } from 'ds-bridge';

function handlePrimaryAction() {
  console.log('Primary action clicked');
}
</script>

<template>
  <DsGuaranteedSale
    price-value="${props.priceValue}"
    status="${props.status}"
    :show-date-time="${props.showDateTime}"
    @primary-action="handlePrimaryAction"
  />
</template>`,

    // Import statements shown
    imports: ["import { DsGuaranteedSale } from 'ds-bridge';"]
  }
);
```

### Property Type Mappings

| Figma Type | Code Connect | Example |
|------------|--------------|---------|
| Text property | `figma.string('Name')` | Text values |
| Boolean | `figma.boolean('Visible')` | True/false toggles |
| Variant | `figma.enum('Size', {...})` | Dropdown variants |
| Instance swap | `figma.instance('Icon')` | Swappable components |

## Learnings & Insights

### What Worked Well
1. **Auto-detection**: Vue projects detected automatically from `package.json`
2. **HTML Parser**: Works perfectly for Vue 3 Single File Components
3. **Template Literals**: Using `html` tagged template provides syntax highlighting
4. **Config Flexibility**: `documentUrlSubstitutions` simplifies URLs

### Challenges
1. **No Interactive Setup for Vue**: Unlike React, Vue requires manual configuration
2. **Property Name Matching**: Figma property names must match **exactly** (case-sensitive)
3. **Node ID Discovery**: Finding correct `node-id` requires copying links from Figma
4. **Token Management**: Personal access tokens need proper scopes configured

### Best Practices Established
1. **Co-location**: Keep `.figma.ts` files next to `.vue` components
2. **Realistic Examples**: Show actual usage patterns developers will implement
3. **Event Handlers**: Include common event handling patterns
4. **Complete Mappings**: Map all Figma variants to props
5. **Documentation**: Maintain list of connected components

## Questions & Unknowns

### Outstanding Questions
1. **Batch Publishing**: Can we publish all components at once?
2. **Version Control**: How does Code Connect handle version mismatches?
3. **Prop Updates**: What happens when component props change but Figma properties don't?
4. **Multiple Files**: Can one component map to multiple Figma nodes?

### Future Research
- Explore component composition (nested components)
- Investigate slots and children mapping
- Test with design tokens integration
- CI/CD automation for publishing

## Success Criteria

### Validation Steps
1. ✅ Package installed successfully
2. ✅ `figma.config.json` created and valid
3. ✅ `GuaranteedSale.figma.ts` created with complete prop mappings
4. ✅ NPM scripts added for easy publishing
5. ✅ Documentation created (`FIGMA_CODE_CONNECT.md`)
6. ✅ `.gitignore` updated to exclude Figma cache

### How to Verify After Publishing
```bash
# Publish to Figma
export FIGMA_ACCESS_TOKEN=your_token
npm run figma:publish

# Expected output:
# ✔ Connected components:
#   - DsGuaranteedSale → https://www.figma.com/...?node-id=84-1465
```

**In Figma**:
1. Open DS-Bridge design file
2. Switch to Dev Mode (Shift + D)
3. Select GuaranteedSale component
4. Verify "Vue 3" code appears in Code tab
5. Check prop mappings are correct

## Publishing Workflow

### Initial Setup (One-time)
```bash
# 1. Get Figma token from Settings → Account → Tokens
# 2. Set environment variable
export FIGMA_ACCESS_TOKEN=figd_your_token_here

# 3. Publish
npm run figma:publish
```

### Updating Components
```bash
# 1. Update component code (GuaranteedSale.vue)
# 2. Update Code Connect file if props changed (GuaranteedSale.figma.ts)
# 3. Re-publish
npm run figma:publish
```

### Finding Node IDs
1. In Figma, go to Assets panel
2. Right-click component → "Copy link to component"
3. Extract node-id from URL: `?node-id=84-1465`
4. Use full URL in `.figma.ts` file

## Related Topics

### Direct Relationships
- [[Designer-Developer Collaboration]] - Code Connect improves handoff workflow
- [[Figma MCP Integration]] - Complementary Figma integration for automation
- [[Workflow Automation]] - Can be integrated into CI/CD pipelines

### Component Documentation
- Components with Code Connect files:
  - `GuaranteedSale.vue` → `node-id=84-1465`

### Future Connections
- Design tokens synchronization
- Component testing integration
- Storybook + Code Connect dual publishing

## Technical References

### Official Documentation
- [Code Connect Docs](https://developers.figma.com/docs/code-connect/)
- [HTML/Vue Guide](https://developers.figma.com/docs/code-connect/html/)
- [Quickstart Guide](https://developers.figma.com/docs/code-connect/quickstart-guide/)

### Repository Files
- `figma.config.json` - Main configuration
- `FIGMA_CODE_CONNECT.md` - Setup guide
- `src/components/GuaranteedSale.figma.ts` - Example implementation
- `package.json:62-63` - NPM scripts

### Key Commands
```bash
npm run figma:publish       # Publish all Code Connect files
npm run figma:unpublish     # Remove from Figma
npx figma connect --help    # CLI documentation
```

## Next Steps

### For New Components
1. Create Vue component (`ComponentName.vue`)
2. Create Code Connect file (`ComponentName.figma.ts`)
3. Get Figma node URL
4. Map properties
5. Publish: `npm run figma:publish`

### Scaling Strategy
- Create script to generate `.figma.ts` templates
- Add Code Connect files to component creation script
- Integrate publishing into CI/CD
- Document property naming conventions

### Integration Opportunities
- Combine with Figma MCP for two-way sync
- Link to component documentation site
- Add to design system onboarding
- Create developer handoff checklist
