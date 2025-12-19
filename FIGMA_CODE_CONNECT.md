# Figma Code Connect Setup Guide

This guide explains how to use Figma Code Connect to bridge the gap between design and code in the DS-Bridge design system.

## What is Figma Code Connect?

Figma Code Connect allows designers and developers to see the actual implementation code directly in Figma's Dev Mode. When a designer inspects a component in Dev Mode, they'll see your Vue component code instead of generic CSS.

## Prerequisites

- Node.js 18 or newer
- Figma Organization or Enterprise plan
- Full Design or Dev Mode seat
- Figma personal access token with:
  - **Code Connect** scope set to **Write**
  - **File content** scope set to **Read**

## Getting Your Figma Access Token

1. Go to Figma Settings → Account → Personal Access Tokens
2. Click "Create new token"
3. Set scopes:
   - Code Connect: **Write**
   - File content: **Read**
4. Copy the token (you won't see it again!)

## Setup

The package is already installed as a dev dependency:

```bash
npm install --save-dev @figma/code-connect@latest
```

## Configuration

The project is configured with `figma.config.json`:

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

## Creating Code Connect Files

Each component that should be connected to Figma needs a `ComponentName.figma.ts` file.

### Example: GuaranteedSale Component

File: `src/components/GuaranteedSale.figma.ts`

```typescript
import figma, { html } from '@figma/code-connect/html';

figma.connect(
  'https://www.figma.com/design/EuDde9tKZRxoFIPhyOcvG0/DS-Bridge--white-label-?node-id=84-1465',
  {
    props: {
      priceValue: figma.string('Price Value'),
      status: figma.enum('Status', {
        'Available': 'Available',
        'Requested': 'Requested',
        'Accepted': 'Accepted',
        'Expired': 'Expired',
        'Not Available': 'Not Available'
      }),
      align: figma.enum('Alignment', {
        'Center': 'center',
        'Left': 'left'
      }),
      showDateTime: figma.boolean('Show DateTime')
    },
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
    align="${props.align}"
    :show-date-time="${props.showDateTime}"
    @primary-action="handlePrimaryAction"
  />
</template>`,
    imports: ["import { DsGuaranteedSale } from 'ds-bridge';"]
  }
);
```

### Key Mapping Elements

1. **Figma URL with node-id**: Get this from the Figma component's "Copy link" option
2. **Props mapping**: Maps Figma properties to component props
   - `figma.string()` - Text properties
   - `figma.boolean()` - True/false properties
   - `figma.enum()` - Variant properties with mapping
3. **Example code**: The actual Vue component usage
4. **Imports**: Import statements shown in Dev Mode

## Publishing to Figma

Once you've created Code Connect files, publish them to Figma:

```bash
npx figma connect publish --token=YOUR_FIGMA_ACCESS_TOKEN
```

Or use an environment variable:

```bash
export FIGMA_ACCESS_TOKEN=your_token_here
npx figma connect publish
```

You should see output like:

```
✔ Connected components:
  - DsGuaranteedSale → https://www.figma.com/design/...?node-id=84-1465
```

## Verifying in Figma

1. Open your Figma file
2. Switch to **Dev Mode** (Shift + D)
3. Select the GuaranteedSale component
4. Look for the "Code" tab in the right panel
5. You should see your Vue component code with the "Vue 3" label

## NPM Scripts

Add these convenient scripts to `package.json`:

```json
{
  "scripts": {
    "figma:publish": "figma connect publish",
    "figma:unpublish": "figma connect unpublish"
  }
}
```

Then run:

```bash
npm run figma:publish
```

## Workflow

### For New Components

1. Create the Vue component: `src/components/YourComponent.vue`
2. Create the Code Connect file: `src/components/YourComponent.figma.ts`
3. Get the Figma node URL from the component
4. Map Figma properties to component props
5. Publish: `npm run figma:publish`

### For Updated Components

When you update component code:

1. Update the `.figma.ts` file if props changed
2. Re-publish: `npm run figma:publish`

Figma will automatically update the code shown in Dev Mode.

## Finding Component Node IDs

To get the correct node-id for a component:

1. In Figma, right-click the component in the **Assets** panel
2. Select "Copy link to component"
3. The URL will look like: `https://www.figma.com/design/FILE_ID/...?node-id=84-1465`
4. Use this full URL in your `.figma.ts` file

## Troubleshooting

### "Component not found" error

- Verify the node-id in the Figma URL matches the component
- Ensure you have access to the Figma file
- Check that your token has the correct scopes

### Properties not mapping correctly

- Check that Figma property names match exactly (case-sensitive)
- Verify enum values match your Figma variants
- Use Figma's "Inspect" panel to see exact property names

### Code not showing in Dev Mode

- Ensure you published successfully
- Try refreshing Figma (Cmd+R / Ctrl+R)
- Check that you're viewing the correct component instance

## Best Practices

1. **Keep examples realistic**: Show actual usage patterns developers will use
2. **Include event handlers**: Show how to handle component events
3. **Map all variants**: Ensure all Figma variants map to component props
4. **Update regularly**: Re-publish when component APIs change
5. **Use TypeScript**: The `.figma.ts` extension enables better tooling

## Resources

- [Figma Code Connect Documentation](https://developers.figma.com/docs/code-connect/)
- [HTML/Vue Guide](https://developers.figma.com/docs/code-connect/html/)
- [Quickstart Guide](https://developers.figma.com/docs/code-connect/quickstart-guide/)

## Current Connected Components

- **DsGuaranteedSale** - [Figma Link](https://www.figma.com/design/EuDde9tKZRxoFIPhyOcvG0/DS-Bridge--white-label-?node-id=84-1465)

---

*Note: Code Connect files are NOT executed - they're treated as template strings. This means you can use real component imports without worrying about runtime dependencies.*
