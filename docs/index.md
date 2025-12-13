# Design System

A white-label design system built with Vue 3, Vite, and Vuetify 3.

## What is this?

This is a modular, extensible design system that provides:

- **Component Library**: Pre-built, accessible Vue 3 components
- **Design Tokens**: Centralized design values (colors, spacing, typography) that can be synced with Figma
- **Style Guide**: Interactive documentation for components and tokens
- **Design Consistency**: Single source of truth for UI styling across your applications

## Goals

- **Consistency**: Maintain visual and functional consistency across products
- **Transparency**: Clear documentation of components, patterns, and tokens
- **Reusability**: Components and tokens can be used across multiple applications
- **Clarity**: Easy-to-understand patterns and component APIs
- **Figma Integration**: Ready for Figma Code Connect and Figma MCP integration

## Quick Start

### Development

Start the design system playground and component browser:

```bash
npm install
npm run dev
```

The app will open at `http://localhost:5173`.

### Documentation

Start the interactive style guide and component documentation:

```bash
npm run docs:dev
```

The documentation will open at `http://localhost:5173/docs`.

### Testing

Run the test suite:

```bash
npm run test
```

### Linting

Check for code quality issues:

```bash
npm run lint
```

Fix issues automatically:

```bash
npm run lint:fix
```

## Project Structure

```
design-system-vuetify-whitelabel/
├── src/                    # Component library source
│   ├── tokens/            # Design tokens (colors, spacing, typography)
│   ├── components/        # Vue components
│   ├── plugins/           # Vue plugins (Vuetify setup)
│   ├── App.vue            # Main app / playground
│   └── main.js            # Entry point
├── docs/                  # VitePress documentation site
├── tests/                 # Unit tests
└── .github/workflows/     # CI/CD configuration
```

## Design Tokens

All design values are centralized in `src/tokens/index.js`:

- **Colors**: Primary, secondary, semantic colors, and surfaces
- **Spacing**: xs, sm, md, lg, xl scale
- **Typography**: Font families, sizes, weights, and line heights
- **Border Radius**: Rounded corner sizes
- **Shadows**: Elevation shadows

These tokens are:
- Used by Vuetify's theme system
- Exported for use in components
- Ready to be synced with Figma variables

## Components

The component library is located in `src/components/`.

Each component:
- Is built on top of Vuetify 3
- Follows design system conventions
- Is fully typed (supports JSDoc)
- Has comprehensive tests
- Is documented in the style guide

### Using Components

In your Vue applications:

```javascript
import { DsButton } from 'design-system-vuetify-whitelabel/components';
```

## Building for Production

Build the library:

```bash
npm run build
```

Build the documentation site:

```bash
npm run docs:build
```

## Extending the Design System

### Adding a New Component

1. Create a new `.vue` file in `src/components/`
2. Export it from `src/components/index.js`
3. Add tests in `tests/ComponentName.spec.js`
4. Document it in `docs/components/ComponentName.md`

### Adding Design Tokens

1. Update `src/tokens/index.js` with new token values
2. Update `src/plugins/vuetify.js` to apply new tokens to the theme
3. Document the tokens in `docs/tokens.md`

## Figma Integration

This design system is structured to work with:

- **Figma Code Connect**: Generate component code from Figma designs
- **Figma MCP**: Sync design tokens and variables with Figma

To set up integration:

1. Install Figma Code Connect
2. Create `figma.config.js` at the root
3. Map your components to Figma file keys
4. Define token mappings for Figma variables

## Accessibility

- All components follow WCAG 2.1 AA standards
- Components use semantic HTML
- Focus management and keyboard navigation are built in
- Color contrast ratios meet accessibility guidelines

## Contributing

When contributing to this design system:

1. Follow the existing code structure
2. Write tests for new components
3. Update documentation
4. Run `npm run lint:fix` before committing
5. Ensure all tests pass with `npm run test`

## License

MIT
