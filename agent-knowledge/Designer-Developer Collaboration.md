---
session: 8
contributor: chad
date: 2025-12-19
tags:
  - ds-bridge
  - session-learning
  - collaboration
  - workflow
  - designer-enablement
---

# Designer-Developer Collaboration

## What This Covers

Patterns and workflows for designers (like Jake) and developers (like Chad) to work effectively together on DS-Bridge. The goal is enabling designers to contribute components independently while maintaining code quality.

## The Challenge

Traditional design system development has friction:
- Designers create specs, developers implement
- Communication overhead between handoffs
- Rework when implementation doesn't match intent
- Designers can't iterate quickly on code

## Our Solution: Two-Phase Workflow

### Phase 1: Demo-First Development

**Traditional Flow** (Slow):
```
Design Spec → Full Implementation → Full Documentation → Review → Rework
```

**Our Flow** (Fast):
```
Design Spec → Interactive Demo ONLY → Designer Approval → Full Documentation
```

**Why This Works**:
- Designer sees working code immediately
- Approval happens before documentation effort
- Less wasted work on rejected implementations
- Documentation reflects approved implementation

### Phase 2: Documentation After Approval

Only after the designer approves the demo do we:
- Write full API documentation
- Add all variant examples
- Create usage patterns
- Add accessibility notes

## Slash Commands for Designers

Commands are designed to be usable by designers, not just developers.

### `/ds-build-component ComponentName`

**Phase 1 command** - Builds component with interactive demo.

What it does:
1. Asks what component to build
2. Checks for Figma specs (via MCP if available)
3. Generates component scaffolding
4. Builds interactive playground demo
5. Stops for approval before Phase 2

Designer can run this independently to prototype a component.

### `/ds-create-component-docs ComponentName`

**Phase 2 command** - Completes full documentation.

Only run after designer approves Phase 1 demo. Creates:
- Overview and when-to-use sections
- Props/Events/Slots tables
- Variant examples
- Usage patterns
- Accessibility notes

### `/start-session-plan`

Creates a structured session plan. Helps designers:
- Review deferred items from previous sessions
- Set clear objectives
- Break work into tasks

### `/done-with-session N`

Wraps up a session. Automatically:
- Updates CHANGELOG.md
- Creates summary
- Notes deferred items for next session

## Command Naming Conventions

Commands use designer-friendly names:

| What It Does | Name | Why |
|--------------|------|-----|
| Build component demo | `ds-build-component` | "Build" is clearer than "demo" |
| Create documentation | `ds-create-component-docs` | Matches "build/create" pattern |
| Start planning | `start-session-plan` | Action-oriented verb |
| Finish session | `done-with-session` | Conversational, clear |

## Working in Parallel

DS-Bridge supports multiple contributors working simultaneously.

### File Naming Convention

```
agent-sessions/{name}-SESSION_N_PLAN.md
agent-journals/{name}-agent-work-journal.md
```

**Example**:
```
agent-sessions/chad-SESSION_8_PLAN.md
agent-sessions/jake-SESSION_1_PLAN.md
```

### Avoiding Conflicts

- Each contributor has their own session plan files
- Work journals are contributor-specific
- Git branches use `sN-component-feature` naming
- Components are claimed in session plans before work begins

## Figma Integration Points

### For Designers

1. **Figma Desktop MCP**: Claude can read design specs directly from Figma
2. **Code Connect**: See Vue code snippets in Figma Dev Mode

### For Developers

1. **Property Mapping**: Figma variants map to Vue props
2. **Token Sync**: Design tokens sync from Figma to code

See [[Figma Code Connect]] and [[Figma MCP Integration]] for details.

## Best Practices

### For Designers

1. **Use the slash commands** - They encode best practices
2. **Approve demos before Phase 2** - Prevents documentation rework
3. **Claim components in session plans** - Avoids conflicts
4. **Ask questions early** - Claude can help clarify implementation

### For Developers

1. **Make commands designer-friendly** - Clear names, minimal assumptions
2. **Include approval checkpoints** - Don't auto-complete everything
3. **Document as you go** - Knowledge docs help future sessions
4. **Test commands with fresh eyes** - Would a designer understand this?

## Model Strategy

For best results:
- **Opus 4.5**: Planning, complex decisions, synthesis
- **Sonnet 4.5**: Building, implementation, agent workflows

This applies to both designer and developer workflows.

## Related Topics

- [[Workflow Automation]] - Detailed slash command documentation
- [[Component Documentation Best Practices]] - Documentation patterns
- [[Figma Code Connect]] - Figma-to-code integration
- [[Meta-Prompting Patterns]] - Two-phase workflow design
