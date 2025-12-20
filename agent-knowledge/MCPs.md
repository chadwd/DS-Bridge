---
session: 8
contributor: chad
date: 2025-12-19
tags:
  - ds-bridge
  - session-learning
  - mcp
  - tooling
  - automation
---

# MCP Integrations for DS-Bridge

## What This Covers

Model Context Protocol (MCP) servers extend Claude Code's capabilities with specialized tools. This document covers the MCPs configured for the DS-Bridge project and how to use them effectively.

## Configured MCPs

### 1. Playwright MCP

**Purpose**: Browser automation for visual testing and documentation screenshots.

**Key Tools**:
- `browser_navigate` - Navigate to URLs
- `browser_snapshot` - Capture accessibility tree (preferred over screenshots)
- `browser_take_screenshot` - Visual screenshots
- `browser_click` / `browser_type` - Interact with pages
- `browser_evaluate` - Run JavaScript on page

**Use Cases**:
- Testing component documentation pages
- Capturing screenshots for docs
- Verifying responsive layouts
- Testing interactive demos

**Example Workflow**:
```
1. Start dev server: npm run dev
2. Navigate to component page: browser_navigate to localhost:5173/components/button
3. Take snapshot: browser_snapshot for accessibility audit
4. Take screenshot: browser_take_screenshot for visual documentation
```

### 2. Figma Desktop MCP

**Purpose**: Extract design context directly from Figma files.

**Key Tools**:
- `get_design_context` - Get design specs from Figma selection
- `get_screenshot` - Capture Figma design visuals
- `get_variable_defs` - Extract design token definitions

**Use Cases**:
- Getting component specs during `/ds-build-component`
- Extracting design tokens from Figma
- Verifying implementation matches design

**Requirements**:
- Figma Desktop app running
- Design file open
- Component selected in Figma

**See Also**: [[Figma Code Connect]] for publishing code snippets back to Figma.

### 3. rtfmbro MCP

**Purpose**: Access package documentation and README files.

**Key Tools**:
- `get_readme` - Fetch package README (npm, pypi, etc.)
- `get_documentation_tree` - Browse docs structure
- `read_files` - Read specific doc files
- `search_github_repositories` - Find relevant repos

**Use Cases**:
- Looking up Vuetify component APIs
- Checking Vue 3 Composition API patterns
- Finding examples from open-source projects

**Example**:
```
Get Vuetify docs: get_readme package="vuetify" version="*" ecosystem="npm"
```

## MCP Best Practices

### When to Use MCPs

**Use Playwright MCP when**:
- Testing documentation site visually
- Capturing screenshots for docs
- Verifying responsive breakpoints
- Checking component behavior in browser

**Use Figma Desktop MCP when**:
- Building new components from design specs
- Verifying implementation matches design
- Extracting design tokens

**Use rtfmbro MCP when**:
- Looking up library documentation
- Checking API references
- Finding code patterns

### When NOT to Use MCPs

- For simple code searches (use Grep/Glob instead)
- For reading local files (use Read tool)
- When the information is already in codebase docs

## Troubleshooting

### Playwright Issues

**"Browser not installed"**: Run `npx playwright install chromium`

**Page not loading**: Ensure dev server is running (`npm run dev`)

**Timeout errors**: Check if page has loading spinners, use `browser_wait_for`

### Figma Desktop Issues

**"No selection"**: Select a component in Figma before using MCP

**"App not running"**: Open Figma Desktop app

**Wrong file**: Ensure the DS-Bridge design file is active

## Related Topics

- [[Figma Code Connect]] - Publishing code snippets to Figma
- [[Workflow Automation]] - Slash commands that use MCPs
- [[Component Documentation Best Practices]] - Documentation patterns
