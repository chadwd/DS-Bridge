---
session: 8
contributor: chad
date: 2025-12-19
tags:
  - ds-bridge
  - session-learning
  - meta-prompting
  - workflow-design
  - automation
---

# Meta-Prompting Patterns

## What This Covers

Patterns for designing prompts that work in Claude-to-Claude pipelines, slash commands, and multi-phase workflows. These patterns emerged from building the DS-Bridge automation system.

## Core Principle: Demo-First Development

### The Philosophy

**Don't write documentation for code that might change.**

Traditional approach:
```
Build → Document → Review → Reject → Rebuild → Re-document
```

Demo-first approach:
```
Build Demo → Get Approval → Document (only approved code)
```

### Why This Works

1. **Faster iteration**: No docs overhead during prototyping
2. **Less wasted effort**: Only document approved work
3. **Better feedback**: Users see working code, not descriptions
4. **Accurate docs**: Documentation reflects final implementation

## Two-Phase Workflow Pattern

### Phase 1: Build + Demo

**Goal**: Get working code approved before documentation effort.

**Prompt Design**:
```markdown
# Phase 1: Component Demo

## Objective
Build [ComponentName] with an interactive demo ONLY.
Do NOT write full documentation.

## Steps
1. Gather requirements (Figma, user input)
2. Generate component scaffolding
3. Build interactive playground
4. STOP and request approval

## Output
- Working component
- Interactive demo
- Request for user approval before Phase 2
```

**Key Elements**:
- Explicit "do NOT" for what to skip
- Clear stopping point
- Approval checkpoint before next phase

### Phase 2: Complete Documentation

**Goal**: Document approved implementation thoroughly.

**Prompt Design**:
```markdown
# Phase 2: Documentation

## Prerequisite
Component demo approved by user.

## Steps
1. Complete Overview section
2. Add Props/Events/Slots tables
3. Add all variant examples
4. Add usage patterns
5. Add accessibility notes
6. Verify build passes

## Output
- Complete documentation page
- All sections filled in
- Ready for production
```

**Key Elements**:
- Prerequisite stated explicitly
- Comprehensive checklist
- Quality gates at end

## Slash Command Design Patterns

### Pattern 1: Action-Oriented Names

Commands should start with verbs that describe the action:

| Good | Bad | Why |
|------|-----|-----|
| `ds-build-component` | `component-demo` | "Build" is action, "demo" is noun |
| `start-session-plan` | `session-plan` | "Start" makes it action |
| `done-with-session` | `session-wrapup` | Conversational, clear intent |

### Pattern 2: Clear Phase Separation

When workflow has phases, make them obvious:

```markdown
# Phase 1: [Action]

[Steps for Phase 1]

---

# Phase 2: [Action]

[Steps for Phase 2]
```

### Pattern 3: Explicit Stop Points

Tell the agent when to pause:

```markdown
## Checkpoint

STOP here and request user approval before proceeding.

Do NOT automatically continue to Phase 2.
```

### Pattern 4: Graceful Degradation

Handle missing context:

```markdown
## Step 2: Gather Design Context

If Figma Desktop MCP is available:
1. Use get_design_context for specs
2. Use get_variable_defs for tokens

If not available:
1. Ask user for requirements
2. Reference existing patterns
3. Use design tokens from src/tokens/
```

### Pattern 5: Frontmatter Metadata

Include machine-readable metadata:

```yaml
---
name: command-name
description: What this command does
arguments:
  - name: ComponentName
    description: Name of component to build
    required: true
---
```

## Session Management Pattern

### The Pipeline

```
Session Plan → Work → Knowledge Capture → Wrap-up
```

### Session Plan Template

```markdown
# Session N: [Focus Area]

**Date**: YYYY-MM-DD
**Status**: IN PROGRESS
**Focus**: [One-line summary]

## Objectives
1. [Primary goal]
2. [Secondary goal]
3. [Tertiary goal]

## Tasks
### Priority 1: [Category]
- [ ] Task 1
- [ ] Task 2

### Priority 2: [Category]
- [ ] Task 3

## Success Criteria
- [ ] Measurable outcome 1
- [ ] Measurable outcome 2
```

### Knowledge Capture Template

```markdown
---
session: N
contributor: name
date: YYYY-MM-DD
tags: [relevant, tags]
---

# Topic Title

## What We Did
## Why We Did It
## Key Concepts
## Implementation Details
## Code Examples
## Learnings & Insights
## Questions & Unknowns
## Success Criteria
## Related Topics
```

### Session Wrap-up Checklist

```markdown
## Wrap-up Tasks
- [ ] Update CHANGELOG.md
- [ ] Commit session progress
- [ ] Note deferred items
- [ ] Update session plan status
- [ ] Capture knowledge if significant learnings
```

## Model Selection Strategy

### When to Use Opus

- Session planning
- Complex decision making
- Synthesis and analysis
- Architecture decisions
- Multi-step reasoning

### When to Use Sonnet

- Implementation tasks
- Agent workflows
- Code generation
- Test writing
- Documentation writing

### In Practice

```
User starts session with Opus:
  "Let's plan Session 8"
  → Creates structured plan

User switches to Sonnet for implementation:
  "Build the Card component"
  → Executes plan efficiently
```

## Anti-Patterns to Avoid

### 1. Monolithic Prompts

**Bad**: One giant prompt that does everything

```markdown
# Do Everything Command

Build component, write tests, add docs, update changelog,
commit code, create PR, and notify team.
```

**Good**: Separate concerns into phases

```markdown
# Phase 1: Build (separate command)
# Phase 2: Document (separate command)
# Commit: Manual or separate command
```

### 2. Implicit Assumptions

**Bad**: Assuming context without checking

```markdown
Use the Figma specs to build the component.
```

**Good**: Check and handle missing context

```markdown
If Figma MCP available:
  Get specs from Figma
Else:
  Ask user for requirements
```

### 3. No Approval Checkpoints

**Bad**: Auto-completing entire workflow

```markdown
Build component and write full documentation.
```

**Good**: Stop for approval at key points

```markdown
Build component demo.
STOP and request approval.
Only then proceed to documentation.
```

### 4. Vague Success Criteria

**Bad**: No way to know when done

```markdown
Make the component good.
```

**Good**: Measurable criteria

```markdown
Success Criteria:
- [ ] All tests pass
- [ ] TypeScript compiles
- [ ] Build succeeds
- [ ] User approves demo
```

## Composing Workflows

### Chaining Commands

Commands can reference each other:

```markdown
## After Approval

Once user approves Phase 1, suggest:
"Run /ds-create-component-docs ComponentName to complete documentation"
```

### Parallel vs Sequential

**Parallel** (independent tasks):
```
Run tests AND type-check AND lint
```

**Sequential** (dependencies):
```
Build component THEN run tests THEN commit
```

### Conditional Branching

```markdown
If component has Figma design:
  → Use Figma MCP for specs
  → Create Code Connect file
Else:
  → Use existing patterns
  → Skip Code Connect
```

## Testing Commands

### Validation Checklist

Before deploying a new command:

1. [ ] Run with real example
2. [ ] Test with missing context
3. [ ] Verify stopping points work
4. [ ] Check output format
5. [ ] Test with non-developer user

### Common Issues

- **Too verbose**: Trim unnecessary steps
- **Too terse**: Add context for edge cases
- **No exit**: Add explicit completion criteria
- **Breaks on errors**: Add error handling

## Related Topics

- [[Workflow Automation]] - Implementation of these patterns
- [[Designer-Developer Collaboration]] - User-facing workflow
- [[Component Documentation Best Practices]] - Output patterns
- [[Session Management]] - Pipeline in practice
