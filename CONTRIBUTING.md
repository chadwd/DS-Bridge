# Contributing to Design System

Thank you for your interest in contributing to this design system! We welcome contributions from everyone. This document provides guidelines and instructions for contributing.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Setup](#development-setup)
- [Making Changes](#making-changes)
- [Creating Components](#creating-components)
- [Writing Tests](#writing-tests)
- [Writing Documentation](#writing-documentation)
- [Submitting Changes](#submitting-changes)
- [Code Style](#code-style)
- [Commit Messages](#commit-messages)
- [Pull Request Process](#pull-request-process)
- [Reporting Issues](#reporting-issues)

## Code of Conduct

This project is committed to providing a welcoming and inspiring community for all. Please be respectful and constructive in all interactions.

## Getting Started

### Prerequisites

- Node.js 18+ (LTS recommended)
- npm or yarn
- Git

### Fork and Clone

1. Fork the repository on GitHub
2. Clone your fork locally:

```bash
git clone https://github.com/yourusername/DS-Bridge.git
cd design-system
```

3. Add the upstream repository:

```bash
git remote add upstream https://github.com/yourusername/DS-Bridge.git
```

## Development Setup

### Install Dependencies

```bash
npm install
```

### Start Development Servers

In one terminal, start the playground:

```bash
npm run dev
```

In another terminal, start the documentation site:

```bash
npm run docs:dev
```

### Run Tests

```bash
# Run tests once
npm run test

# Run tests in watch mode
npm run test -- --watch

# View test UI
npm run test:ui

# Generate coverage report
npm run test:coverage
```

### Check Code Quality

```bash
# Check for linting issues
npm run lint

# Fix linting issues automatically
npm run lint:fix
```

### Build for Production

```bash
# Build component library
npm run build

# Build documentation site
npm run docs:build
```

## Making Changes

### Create a Feature Branch

Always create a new branch for your work:

```bash
git checkout -b feature/your-feature-name
```

Use descriptive branch names:
- `feature/component-name` for new components
- `fix/issue-description` for bug fixes
- `docs/topic` for documentation
- `refactor/description` for refactoring
- `test/description` for test improvements

### Keep Your Branch Updated

Before submitting, update your branch with the latest upstream changes:

```bash
git fetch upstream
git rebase upstream/main
```

## Creating Components

### Component Structure

Follow the DsButton pattern when creating new components:

1. **Create the component file** in `src/components/ComponentName.vue`:

```vue
<template>
  <v-component
    :prop="prop"
    class="ds-component"
  >
    <slot />
  </v-component>
</template>

<script>
/**
 * DsComponentName - Component description
 *
 * Props:
 *   - prop: Description (type, default)
 *
 * Events:
 *   - event: Description
 *
 * Slots:
 *   - default: Slot description
 *
 * Accessibility:
 *   - A11y notes
 */
export default {
  name: 'DsComponentName',
  props: {
    prop: {
      type: String,
      default: 'value',
    },
  },
  emits: ['event'],
};
</script>

<style scoped>
.ds-component {
  /* Styles */
}
</style>
```

2. **Export from `src/components/index.js`**:

```javascript
export { default as DsComponentName } from './ComponentName.vue';
```

3. **Create tests** in `tests/ComponentName.spec.js`:

```javascript
import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import DsComponentName from '../src/components/ComponentName.vue';

const vuetify = createVuetify({
  components,
  directives,
});

describe('DsComponentName.vue', () => {
  it('renders with default props', () => {
    const wrapper = mount(DsComponentName, {
      global: { plugins: [vuetify] },
    });
    expect(wrapper.find('.ds-component').exists()).toBe(true);
  });
});
```

4. **Document in `docs/components/component-name.md`**:

```markdown
# Component Name

Brief description.

## When to Use

Use cases.

## Variants

Variations.

## API Reference

Props, events, slots.

## Accessibility

A11y considerations.

## Usage Examples

Code examples.
```

### Component Guidelines

- **Use design tokens**: Reference `src/tokens/index.js` for colors, spacing, etc.
- **Extend Vuetify**: Wrap Vuetify components rather than reimplementing
- **Props documentation**: Include JSDoc comments in script blocks
- **Accessibility first**: Use semantic HTML, ARIA labels where needed
- **Slot support**: Allow flexible content through slots
- **Event emission**: Emit events for user interactions
- **Scoped styles**: Use scoped styles to avoid CSS conflicts

## Writing Tests

### Test Requirements

- Every component must have unit tests
- Aim for >80% code coverage
- Test props, events, slots, and states

### Test Patterns

```javascript
describe('Component', () => {
  it('renders with default props', () => {
    // Arrange
    // Act
    const wrapper = mount(Component, { /* options */ });
    // Assert
    expect(wrapper.exists()).toBe(true);
  });

  it('applies props correctly', () => {
    const wrapper = mount(Component, {
      props: { propName: 'value' },
    });
    expect(wrapper.vm.propName).toBe('value');
  });

  it('emits events', async () => {
    const wrapper = mount(Component);
    await wrapper.find('button').trigger('click');
    expect(wrapper.emitted('click')).toBeTruthy();
  });

  it('handles slots', () => {
    const wrapper = mount(Component, {
      slots: { default: 'Content' },
    });
    expect(wrapper.text()).toContain('Content');
  });
});
```

### Running Tests

```bash
# Run all tests
npm run test -- --run

# Run specific test file
npm run test -- tests/ComponentName.spec.js

# Run in watch mode
npm run test -- --watch

# View UI
npm run test:ui

# Coverage
npm run test:coverage
```

## Writing Documentation

### Documentation Guidelines

- **Clarity**: Write for developers unfamiliar with the project
- **Examples**: Include code examples for every feature
- **Accuracy**: Keep docs in sync with code
- **Completeness**: Document props, events, slots, and edge cases

### Documentation Structure

```markdown
# Component Name

One-line description.

## When to Use

Describe use cases and when to choose this component.

## Variants

Show different states/variants with examples.

## Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| name | Type | value | Description |

## Events

| Name | Description |
|------|-------------|
| event | Description |

## Slots

| Name | Description |
|------|-------------|
| default | Description |

## Accessibility

Accessibility considerations and best practices.

## Usage Examples

Real-world usage examples with code snippets.
```

### Updating Tokens Documentation

When adding tokens:

1. Update `src/tokens/index.js` with new tokens
2. Update `docs/tokens.md` with documentation
3. Include examples of usage
4. Update the CHANGELOG

## Submitting Changes

### Pre-Submission Checklist

Before submitting your PR, ensure:

- [ ] Code follows the project's style guide
- [ ] Tests are added/updated and passing
- [ ] Documentation is updated
- [ ] No console errors or warnings
- [ ] Commit messages are clear and descriptive
- [ ] Branch is updated with upstream changes

### Before Pushing

```bash
# Lint and fix
npm run lint:fix

# Run tests
npm run test -- --run

# Build to verify
npm run build

# Check documentation builds
npm run docs:build
```

## Code Style

### JavaScript/Vue Style

- Use 2-space indentation
- Use semicolons
- Use single quotes for strings
- Use camelCase for variables and methods
- Use PascalCase for component names
- Use UPPER_SNAKE_CASE for constants

### Vue Component Style

- Use single-file components (.vue)
- Place `<template>` before `<script>` before `<style>`
- Use scoped styles
- Use prop validation
- Document with JSDoc comments

### ESLint

The project uses ESLint with Vue plugin. Run:

```bash
npm run lint:fix
```

## Commit Messages

### Commit Message Format

```
type: subject

body

footer
```

### Type

- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation only changes
- `style`: Changes that don't affect code meaning
- `refactor`: Code change that neither fixes a bug nor adds a feature
- `perf`: Code change that improves performance
- `test`: Adding or updating tests
- `chore`: Changes to build process, dependencies, etc.

### Subject

- Use imperative mood ("add feature", not "added feature")
- Start with lowercase (unless naming a component)
- Don't end with a period
- Limit to 50 characters

### Body (Optional)

- Explain what and why, not how
- Wrap at 72 characters
- Separate from subject with a blank line

### Examples

```
feat: add Card component

Implement a new Card component with support for images,
actions, and custom styling. Includes full test coverage
and documentation.

Closes #123
```

```
fix: correct button disabled state

The button was not properly disabling on the disabled prop
change. This was due to the click handler not checking the
disabled state before emitting.

Fixes #456
```

## Pull Request Process

### Before Opening a PR

1. Ensure your branch is up to date with `upstream/main`
2. Run all checks locally:
   ```bash
   npm run lint:fix
   npm run test -- --run
   npm run build
   npm run docs:build
   ```
3. Push your branch to your fork

### Creating a Pull Request

1. Open a PR on GitHub with a clear title and description
2. Reference related issues (e.g., "Closes #123")
3. Provide a summary of changes
4. Link to documentation or examples if applicable

### PR Title Format

Use the same format as commit messages:
- `feat: add Card component`
- `fix: correct button disabled state`
- `docs: update contribution guidelines`

### PR Description Template

```markdown
## Description
Brief description of changes.

## Related Issues
Closes #123

## Changes
- Change 1
- Change 2
- Change 3

## Testing
Describe how to test these changes.

## Screenshots
If applicable, add screenshots or GIFs.

## Checklist
- [ ] Tests pass
- [ ] Code is linted
- [ ] Documentation updated
- [ ] No breaking changes
```

### Review Process

- At least one maintainer review required
- CI/CD checks must pass
- All conversations must be resolved
- Changes may be requested before merge

## Reporting Issues

### Before Opening an Issue

- Check existing issues to avoid duplicates
- Try the latest version
- Gather relevant information

### Issue Template

**Description**
Clear description of the issue.

**To Reproduce**
Steps to reproduce the behavior:
1. ...
2. ...
3. ...

**Expected behavior**
What should happen.

**Actual behavior**
What actually happens.

**Environment**
- Node version
- npm version
- Browser (if applicable)

**Additional context**
Any other context.

## Questions?

- Open a discussion on GitHub
- Check existing documentation
- Review similar components for patterns

---

## Resources

- [Vue 3 Documentation](https://vuejs.org/)
- [Vuetify 3 Documentation](https://vuetifyjs.com/)
- [Vite Documentation](https://vitejs.dev/)
- [Vitest Documentation](https://vitest.dev/)
- [Keep a Changelog](https://keepachangelog.com/)
- [Semantic Versioning](https://semver.org/)

Thank you for contributing! 🎉
