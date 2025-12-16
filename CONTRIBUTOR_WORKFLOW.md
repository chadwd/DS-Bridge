# Contributor Workflow Guide

This guide explains how multiple designers and developers can collaborate on DS-Bridge using Claude Code with contributor-specific tracking.

## File Naming Convention

All session plans and work journals are **contributor-specific** to enable parallel work and clear attribution.

### Format

- **Session Plans**: `agent-sessions/{name}-SESSION_N_PLAN.md`
- **Work Journals**: `agent-journals/{name}-agent-work-journal.md`
- **Progress Tracking**: `agent-sessions/{name}-SESSION_N_PROGRESS.md` (optional)

Where `{name}` is the contributor's first name in lowercase (e.g., `chad`, `jake`, `sarah`).

### Examples

```
agent-sessions/
├── chad-SESSION_3_PLAN.md
├── chad-SESSION_4_PLAN.md
├── chad-SESSION_5_PLAN.md
├── chad-SESSION_6_PLAN.md
├── jake-SESSION_1_PLAN.md
└── jake-SESSION_2_PLAN.md

agent-journals/
├── chad-agent-work-journal.md
└── jake-agent-work-journal.md
```

## Slash Commands for Contributors

DS-Bridge provides four main slash commands that automatically handle contributor-specific files:

### 1. `/session-plan-start [N]`

**Purpose**: Start a new session by creating a structured plan

**What it does**:
- Asks for your name (first time only)
- Reviews your previous session plans
- Creates `{name}-SESSION_N_PLAN.md` with objectives and tasks
- Checks your work journal for outstanding items

**Usage**:
```
/session-plan-start 7
```

**Example interaction**:
```
Claude: What is your first name? (e.g., 'chad', 'jake')
You: jake

Claude: I found your previous session: jake-SESSION_1_PLAN.md
        What are the main goals for Session 2?
You: Build Card and Chip components

Claude: Created agent-sessions/jake-SESSION_2_PLAN.md
```

### 2. `/ds-build-component ComponentName`

**Purpose**: Create or update a component's interactive demo (Phase 1)

**What it does**:
- Gathers context (purpose, Figma specs, Vuetify base)
- Generates scaffolding using `npm run create-component`
- Builds ONLY the interactive demo (not full docs)
- Requests your approval before proceeding to documentation

**Usage**:
```
/ds-build-component Card
/ds-build-component Chip
```

**Workflow**:
1. Asks about component purpose and use cases
2. Offers to pull Figma design specs
3. Creates component files (Vue, tests, docs scaffold)
4. Builds interactive demo at top of docs page
5. Asks you to review and approve

### 3. `/ds-create-component-docs ComponentName`

**Purpose**: Complete documentation after demo approval (Phase 2)

**What it does**:
- Completes all documentation sections
- Adds props/events/slots tables
- Adds variant examples and usage patterns
- Adds accessibility notes
- Verifies build and tests

**Usage**:
```
/ds-create-component-docs Card
```

**Important**: Only run this AFTER you've approved the component demo from Phase 1.

### 4. `/session-done-wrapup [N]`

**Purpose**: Wrap up a session and update all documentation

**What it does**:
- Asks for your name
- Reviews git history to see what was accomplished
- Updates CHANGELOG.md
- Updates `{name}-SESSION_N_PLAN.md` (marks complete)
- Updates `{name}-agent-work-journal.md` (adds session entry)
- Provides summary for git commit

**Usage**:
```
/session-done-wrapup 6
```

## Contributor Workflow

### Starting a New Session

1. **Plan Your Work**:
   ```
   /session-plan-start 2
   ```
   - Claude asks for your name
   - You provide goals and objectives
   - Session plan is created: `jake-SESSION_2_PLAN.md`

2. **Build Components** (Demo-First):
   ```
   /ds-build-component Card
   ```
   - Claude gathers context
   - Creates component scaffolding
   - Builds interactive demo
   - You review and approve

3. **Complete Documentation**:
   ```
   /ds-create-component-docs Card
   ```
   - Claude adds full documentation
   - Props tables, examples, accessibility notes
   - Verifies build and tests

4. **Wrap Up Session**:
   ```
   /session-done-wrapup 2
   ```
   - Claude updates all tracking files
   - Your work journal updated: `jake-agent-work-journal.md`
   - Ready to commit

### Working in Parallel

Multiple contributors can work simultaneously:

**Chad's Session 6**:
```bash
# Chad is working on workflow automation
agent-sessions/chad-SESSION_6_PLAN.md
agent-journals/chad-agent-work-journal.md
```

**Jake's Session 1**:
```bash
# Jake is building Card component
agent-sessions/jake-SESSION_1_PLAN.md
agent-journals/jake-agent-work-journal.md
```

**Benefits**:
- ✅ No file conflicts
- ✅ Clear attribution of work
- ✅ Independent session tracking
- ✅ Each contributor has their own journal

## Best Practices

### 1. Use Descriptive Session Titles

**Good**:
```markdown
# DS-Bridge Session #2: Card & Chip Components
```

**Bad**:
```markdown
# DS-Bridge Session #2: Work
```

### 2. Keep Sessions Focused

Aim for 2-4 hours of work per session with clear, achievable goals.

**Good Session Plan**:
- Build Card component (demo + docs)
- Build Chip component (demo + docs)
- Run tests and verify accessibility

**Too Broad**:
- Build 10 components
- Redesign entire documentation site
- Refactor all existing components

### 3. Always Start with Demo Approval

**Correct Workflow**:
1. `/ds-build-component Card` → Build demo
2. Review demo in browser → Approve
3. `/ds-create-component-docs Card` → Complete docs

**Incorrect Workflow**:
❌ Skipping demo review
❌ Writing full docs before seeing working component
❌ Building multiple components without approval

### 4. Review Other Contributors' Work

Before starting a new component, check if someone else is working on it:

```bash
# Check all session plans
ls agent-sessions/*-SESSION_*_PLAN.md

# Search for component name
grep -r "Card component" agent-sessions/
```

### 5. Coordinate on Shared Components

If two contributors need to work on the same component, coordinate in advance:

**Option 1**: Sequential work
- Chad builds Card component (Session 6)
- Jake enhances Card with variants (Session 2)

**Option 2**: Different components
- Chad builds Card and Chip (Session 6)
- Jake builds List and Menu (Session 1)

## File Structure Overview

```
ds-bridge/
├── agent-sessions/              # Session plans (contributor-specific)
│   ├── chad-SESSION_3_PLAN.md
│   ├── chad-SESSION_4_PLAN.md
│   ├── chad-SESSION_5_PLAN.md
│   ├── chad-SESSION_6_PLAN.md
│   ├── jake-SESSION_1_PLAN.md
│   └── ...
│
├── agent-journals/              # Work journals (contributor-specific)
│   ├── chad-agent-work-journal.md
│   ├── jake-agent-work-journal.md
│   └── ...
│
├── .claude/commands/            # Slash commands (shared)
│   ├── ds-build-component.md
│   ├── ds-create-component-docs.md
│   ├── session-plan-start.md
│   └── session-done-wrapup.md
│
├── src/components/              # Components (shared)
│   ├── Button.vue
│   ├── Card.vue
│   └── ...
│
└── docs/components/             # Documentation (shared)
    ├── button.md
    ├── card.md
    └── ...
```

## Quick Reference

| Task | Command | Creates |
|------|---------|---------|
| Start session | `/session-plan-start N` | `{name}-SESSION_N_PLAN.md` |
| Build component demo | `/ds-build-component Name` | Component + demo |
| Complete docs | `/ds-create-component-docs Name` | Full documentation |
| End session | `/session-done-wrapup N` | Updates journal + plan |

## Getting Help

- **Command documentation**: Check `.claude/commands/*.md` files
- **Component template**: See `COMPONENT_TEMPLATE.md`
- **Development guide**: See `CLAUDE.md`
- **Architecture**: See `STRUCTURE.md`

## Common Questions

**Q: What if I forget my session number?**
A: Claude will check your existing session files and suggest the next number.

**Q: Can I work on the same component as another contributor?**
A: Yes, but coordinate first to avoid conflicts. Consider sequential work or splitting by variants.

**Q: What if I'm the first contributor?**
A: Just provide your name when prompted. Claude will create your journal and session files automatically.

**Q: Do I need to manually update the work journal?**
A: No! The `/session-done-wrapup` command handles this automatically.

**Q: Can I see what other contributors are working on?**
A: Yes, check `agent-sessions/{name}-SESSION_*_PLAN.md` files to see their plans.

---

**Last Updated**: 2025-12-16
**Maintained By**: Design System Team
