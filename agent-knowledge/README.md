# Agent Knowledge

Captured learnings, patterns, and best practices from DS-Bridge development sessions.

## Purpose

This directory serves as a knowledge base for:
- Design system patterns and conventions
- Workflow automation documentation
- Tool integration guides (MCPs, Figma, etc.)
- Development best practices
- Troubleshooting guides

## File Structure

```
agent-knowledge/
├── _TEMPLATE.md                           # Template for new docs
├── README.md                              # This file
├── .obsidian/                             # Obsidian config (for wiki links)
│
├── # Workflow & Automation
├── Workflow Automation.md                 # Slash commands & session workflow
├── Meta-Prompting Patterns.md             # Prompt design patterns
├── Designer-Developer Collaboration.md   # Two-phase workflow
│
├── # Figma Integration
├── Figma Code Connect.md                  # Publishing code to Figma
├── Figma MCP Integration.md               # Reading designs from Figma
│
├── # Component Development
├── Component Documentation Best Practices.md
├── CodePreview Documentation Pattern.md
├── GuaranteedSale Component Implementation.md
├── Iterative Feature Exploration.md
│
├── # Technical Patterns
├── Vue 3 Composition API Patterns.md
├── Vue Composition API Migration.md
├── MCPs.md                                # MCP server documentation
```

## Document Template

All documents use consistent YAML frontmatter:

```yaml
---
session: N
contributor: name
date: YYYY-MM-DD
tags:
  - ds-bridge
  - relevant-tags
---
```

## Cross-References

Documents use wiki-style links: `[[Related Topic]]`

These render in Obsidian and serve as navigation hints.

## Key Documents

| Document | Description |
|----------|-------------|
| Workflow Automation | Session workflow, slash commands |
| Meta-Prompting Patterns | Demo-first philosophy, command design |
| MCPs | Playwright, Figma Desktop, rtfmbro |
| Figma Code Connect | Publishing code snippets to Figma |
| Component Documentation Best Practices | Doc site patterns |

## Related

- `agent-sessions/` - Session plans that generate knowledge
- `agent-journals/` - Daily logs with raw learnings
- `.claude/commands/` - Slash commands implementing patterns
