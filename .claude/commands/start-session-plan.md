# Session Planning Command

You are planning a new development session for the DS-Bridge design system. This command helps designers and developers create structured session plans.

## Required Information

**Session Number**: $ARGUMENTS (e.g., "7" or "Session 7")

If no session number provided, determine the next session number by checking existing plans in `agent-sessions/`.

## Contributor Detection

1. **Detect Contributor Name**:
   - Ask the user: "What is your first name? (e.g., 'chad', 'jake')"
   - Convert to lowercase for consistency
   - Use this as the file prefix: `{name}-SESSION_N_PLAN.md`

2. **If contributor has existing sessions**:
   - Look for pattern: `agent-sessions/{name}-SESSION_*.md`
   - Determine next session number from their existing files

## Planning Process

### 1. Review Previous Session
- Read the most recent session plan: `agent-sessions/{name}-SESSION_{N-1}_PLAN.md`
- Check for any deferred items or "Next Steps"
- Review `agent-journals/{name}-agent-work-journal.md` for outstanding tasks

### 2. Gather Session Goals
Ask the user:
- "What are the main goals for this session?"
- "Are there any specific components to build or update?"
- "Any blockers or dependencies to be aware of?"
- "Estimated time available for this session?"

### 3. Create Session Plan Document

Create `agent-sessions/{name}-SESSION_N_PLAN.md` with this structure:

```markdown
# DS-Bridge Session #N: {Session Title}

**Date**: {Today's date}
**Status**: PLANNED
**Focus**: {1-2 sentence summary}

---

## Objectives

1. {Primary objective}
2. {Secondary objective}
3. {etc.}

---

## Tasks

### Priority 1: {Category}
- [ ] Task 1
- [ ] Task 2

### Priority 2: {Category}
- [ ] Task 3
- [ ] Task 4

---

## Prerequisites

- {Any setup or context needed}
- {Dependencies on other work}

---

## Success Criteria

- [ ] {Measurable outcome 1}
- [ ] {Measurable outcome 2}

---

## Notes

{Any additional context, decisions to make, or considerations}

---

## Commands to Use

{List relevant slash commands for this session's work}
- `/component-demo {ComponentName}` - For new components
- `/component-docs {ComponentName}` - After demo approval
- `/session-wrapup N` - At end of session
```

### 4. Review Component Backlog (if applicable)
If building components, reference:
- `agent-sessions/chad-SESSION_6_PLAN.md` for the component priority list (created by Chad)
- `COMPONENT_TEMPLATE.md` for the creation workflow
- Check which components already exist in `src/components/`
- Review other contributors' session plans to avoid duplicate work

## Output

After creating the plan, summarize:
```
## Session {N} Plan Created

**Contributor**: {name}
**File**: agent-sessions/{name}-SESSION_N_PLAN.md

### Objectives:
1. {objective 1}
2. {objective 2}

### Estimated Tasks: {count}

### Ready to begin?
Run the tasks or use specific commands like `/component-demo ComponentName`
```

## Tips for Designers

- Start with clear, achievable goals
- Break large features into smaller tasks
- Include time for testing and documentation
- Plan for the demo-first workflow (demo → approve → document)
