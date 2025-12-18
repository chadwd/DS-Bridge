# Session Knowledge Capture

**Usage**: `/session-knowledge-capture`

**Purpose**: Creates an Obsidian-style knowledge document capturing learnings, patterns, and insights from a development session.

**Model Recommendation**: Opus 4.5 (comprehensive analysis and synthesis)

---

## Instructions

You are creating a **session knowledge document** for the DS-Bridge design system. This is an Obsidian-compatible markdown file that captures what was learned during a session, using a mind-map/wiki-link style.

### 1. Gather Session Context

Read the following files to understand what happened in the session:
- `agent-sessions/{contributor}-SESSION_{N}_PLAN.md` - Session objectives and plan
- `agent-journals/{contributor}-agent-work-journal.md` - Detailed work log
- `CHANGELOG.md` - Changes made
- Recent git commits (`git log --oneline -20`)

**Ask the user**:
1. Which session should I analyze? (e.g., 5, 6, 7)
2. What contributor? (default: chad)
3. **What is the main topic/concept?** (e.g., "Vue Composition API Migration", "Workflow Automation", "Design Token Strategy")
   - This will become the filename
   - Keep it short and focused on the key learning/pattern
   - Think: "What would I want to link to in other docs?"

### 2. Analyze and Synthesize

Extract the following from session files:
- **Objectives**: What were we trying to accomplish?
- **Technical Decisions**: Architecture, patterns, tools chosen
- **Code Patterns**: Reusable code examples created
- **Learnings**: What worked, what didn't, insights gained
- **Metrics**: Test results, performance improvements, code reductions
- **Challenges**: Problems encountered and how they were solved

### 3. Create Knowledge Document

Use the template at `agent-knowledge/_TEMPLATE.md` to create:

**Filename**: `agent-knowledge/[Topic Name].md` (topic-focused, not session-focused)

**Examples**:
- ✅ `agent-knowledge/Vue Composition API Migration.md`
- ✅ `agent-knowledge/Component Template Generator.md`
- ✅ `agent-knowledge/Workflow Automation.md`
- ❌ `agent-knowledge/chad-session-5-refactoring.md` (too verbose)

**Required Sections**:
1. **What We Did** - Brief summary of session work
2. **Why We Did It** - Context and motivation
3. **Key Concepts** - Core ideas and patterns learned
4. **Implementation Details** - Technical specifics with code snippets
5. **Code Examples** - Actual code from the session with file references
6. **Learnings & Insights** - What worked, what didn't, what we'd change
7. **Questions & Unknowns** - Outstanding questions or future research
8. **Success Criteria** - Metrics and validation
9. **Related Topics (Reminds me of)** - Wiki-style links to related concepts

### 4. Wiki-Style Links

In the **"Related Topics (Reminds me of)"** section, create wiki-style links using `[[Topic Name]]` format:

**Examples**:
- `[[Design System Best Practices]]`
- `[[Vue 3 Composition API Patterns]]`
- `[[Component Architecture]]`
- `[[Session 4 - Interactive Documentation]]`
- `[[Design Token Strategy]]`
- `[[Code Quality Standards]]`

**Link Types to Include**:
- Related sessions (previous/next)
- Technical patterns used
- Tools or frameworks
- Design concepts
- Architecture decisions

### 5. Code Examples with References

When including code examples, add file path references in the format:
```
### Pattern Name (filename.ext:line)
```

Example:
```markdown
### Composition API Pattern (Button.vue:15-25)
\`\`\`vue
<script setup lang="ts">
// code here
</script>
\`\`\`
```

### 6. Frontmatter

Include proper YAML frontmatter:
```yaml
---
session: 5
contributor: chad
date: 2025-12-15
tags:
  - ds-bridge
  - session-learning
  - [specific-topics]
---
```

**Tags should include**:
- Always: `ds-bridge`, `session-learning`
- Topic-specific: `refactoring`, `component-template`, `accessibility`, etc.

### 7. Tone and Style

- **Conversational but precise**: Like the Loading.md example
- **Focus on learnings**: Not just what was done, but what was learned
- **Include metrics**: Numbers show impact (32% code reduction, 0 errors, etc.)
- **Practical examples**: Real code from the session
- **Honest reflection**: What worked AND what didn't

### 8. Verification

After creating the knowledge document:
1. ✅ Verify all sections are filled out
2. ✅ Check that code examples have file references
3. ✅ Ensure wiki-links are included in "Related Topics"
4. ✅ Confirm frontmatter is valid YAML
5. ✅ Ask user if they want to add anything else

### 9. Output

Present the created file to the user:
```
✅ Created: agent-knowledge/[Topic Name].md

📚 Key Concepts Captured:
- [List 3-5 main concepts]

🔗 Related Topics:
- [List wiki-links created]

💡 This document is now linkable in Obsidian as: [[Topic Name]]

Would you like me to add any additional sections or links?
```

---

## Example Usage

```
User: /session-knowledge-capture

Agent: I'll create a knowledge document. Let me gather some info:
- Which session? 5
- Contributor? (default: chad)
- Main topic/concept? Vue Composition API Migration

[Reads session files and git history]

📝 Creating: agent-knowledge/Vue Composition API Migration.md

Summary:
- Migrated Button.vue to Composition API (32% code reduction)
- Pattern now reusable for all future components
- Established TypeScript best practices

[Creates comprehensive knowledge document]

✅ Created: agent-knowledge/Vue Composition API Migration.md
💡 Linkable in Obsidian as: [[Vue Composition API Migration]]

Would you like me to add any additional insights?
```

---

## Benefits

1. **Knowledge Preservation**: Captures insights before they're forgotten
2. **Pattern Library**: Builds a searchable database of solutions
3. **Onboarding**: New contributors can learn from past sessions
4. **Wiki Network**: Links create a knowledge graph over time
5. **Obsidian Compatible**: Works with Obsidian's graph view and search
