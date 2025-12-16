# Session Wrap-up Command

You are wrapping up a development session for the DS-Bridge design system. Complete the following tasks to properly document and close out this session.

## Required Information

**Session Number**: $ARGUMENTS (e.g., "6" or "Session 6")

If no session number provided, ask the user which session number this is.

## Contributor Detection

1. **Detect Contributor Name**:
   - Ask the user: "What is your first name? (e.g., 'chad', 'jake')"
   - Convert to lowercase for consistency
   - Use this for file lookups: `{name}-SESSION_N_PLAN.md` and `{name}-agent-work-journal.md`

## Tasks to Complete

### 1. Gather Session Context
- Review what was accomplished during this session by checking:
  - Recent git commits: `git log --oneline -20`
  - Modified files: `git diff --stat HEAD~10` (adjust as needed)
  - Any open todos or tasks discussed
  - Check the contributor's session plan: `agent-sessions/{name}-SESSION_N_PLAN.md`
- Ask the user for any additional context about what was accomplished

### 2. Update CHANGELOG.md
- Add a new entry for this session's work
- Follow the existing format in the file
- Include:
  - Version bump if applicable
  - Features added
  - Fixes made
  - Breaking changes (if any)

### 3. Update Session Plan Document
- Location: `agent-sessions/{name}-SESSION_N_PLAN.md`
- Update status from "PLANNED" or "IN PROGRESS" to "COMPLETE"
- Mark completed objectives with checkmarks
- Add any notes about deferred items

### 4. Update Agent Work Journal
- Location: `agent-journals/{name}-agent-work-journal.md`
- Create the file if it doesn't exist (for new contributors)
- Add a new session entry at the TOP following the existing format (most recent first):
  - Session number and date
  - Status: Complete
  - Objectives (what was planned)
  - Work Completed (detailed breakdown)
  - Files Created/Modified
  - Metrics
  - Next Steps

### 5. Create Next Session Plan (Optional)
- If there are clear next steps, create `agent-sessions/{name}-SESSION_{N+1}_PLAN.md`
- Or note that planning should happen at the start of next session

## Output Format

After completing updates, provide a summary:
```
## Session {N} Wrap-up Complete

**Contributor**: {name}

### Documents Updated:
- [ ] CHANGELOG.md
- [ ] agent-sessions/{name}-SESSION_N_PLAN.md
- [ ] agent-journals/{name}-agent-work-journal.md

### Key Accomplishments:
- {bullet points}

### Deferred to Next Session:
- {bullet points or "None"}

### Ready for Commit:
{Yes/No - list any uncommitted changes}
```

## Important Notes
- Do NOT commit changes automatically - let the user review first
- Ask clarifying questions if session accomplishments are unclear
- Preserve the existing format and style of each document
