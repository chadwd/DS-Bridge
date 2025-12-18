# Knowledge Tracker System

**Purpose**: Capture session learnings in an Obsidian-compatible format for building a searchable knowledge graph.

---

## Overview

The Knowledge Tracker system creates **Obsidian-style markdown documents** that capture:
- What was learned during development sessions
- Technical patterns and code examples
- Architecture decisions and their rationale
- Connections between related topics (wiki-links)

This builds a **knowledge graph** over time that helps:
- Preserve insights before they're forgotten
- Create a searchable pattern library
- Onboard new contributors
- Track evolution of technical decisions

---

## Directory Structure

```
agent-knowledge/
├── _TEMPLATE.md                      # Template for new knowledge docs
├── Vue Composition API Migration.md  # Composition API patterns
├── Component Template Generator.md   # Automated scaffolding
├── Workflow Automation.md            # Slash commands and automation
└── Design Token Strategy.md          # Token architecture
```

**Naming Convention**: `[Topic Name].md` (topic-focused, not session-focused)

**Examples**:
- ✅ `Vue Composition API Migration.md` (topic-focused)
- ✅ `Component Template Generator.md` (describes the concept)
- ✅ `Design Token Strategy.md` (searchable, reusable)
- ❌ `chad-session-5-refactoring.md` (too verbose, session-focused)

---

## File Format

### Frontmatter (YAML)
```yaml
---
session: 5
contributor: chad
date: 2025-12-15
tags:
  - ds-bridge
  - session-learning
  - refactoring
  - component-template
---
```

### Sections

1. **What We Did** - Brief summary of session objectives and outcomes
2. **Why We Did It** - Context: problem solved, goal achieved
3. **Key Concepts** - Core ideas, patterns, or technologies learned
4. **Implementation Details** - Technical specifics, architectural decisions
5. **Code Examples** - Snippets with file references (e.g., `Button.vue:15-25`)
6. **Learnings & Insights** - What worked, what didn't, what we'd change
7. **Questions & Unknowns** - Outstanding questions, future research
8. **Success Criteria** - Metrics, test results, validation
9. **Related Topics (Reminds me of)** - Wiki-style links `[[Topic Name]]`

---

## Wiki-Style Links

Use double-bracket syntax for linking related topics:

```markdown
## Related Topics (Reminds me of)
- [[Design System Best Practices]]
- [[Vue 3 Composition API Patterns]]
- [[Component Architecture]]
- [[Session 4 - Interactive Documentation]]
- [[Design Token Strategy]]
```

**Link Types**:
- Related sessions (previous/next)
- Technical patterns used
- Tools or frameworks
- Design concepts
- Architecture decisions

**Benefits**:
- Obsidian creates a visual graph of connections
- Easy navigation between related topics
- Discover patterns across sessions
- Build a mind-map style knowledge base

---

## Code Examples with References

Always include file path and line references for code examples:

```markdown
### Composition API Pattern (Button.vue:15-25)
\`\`\`vue
<script setup lang="ts">
import { computed } from 'vue';

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
});
</script>
\`\`\`
```

This helps:
- Locate code quickly in the codebase
- Understand context of the example
- Track changes over time

---

## Creating Knowledge Documents

### Option 1: Use Slash Command (Recommended)

```bash
/session-knowledge-capture 6 Workflow Automation
```

**What it does**:
1. Reads session plan and work journal
2. Analyzes git commits and changes
3. Extracts key learnings and patterns
4. Creates formatted knowledge document
5. Generates wiki-links to related topics

### Option 2: Manual Creation

1. Copy `agent-knowledge/_TEMPLATE.md`
2. Rename to topic-focused name (e.g., `Vue Composition API Migration.md`)
3. Fill out all sections
4. Add wiki-links to "Related Topics"
5. Include code examples with file references

---

## Example Knowledge Document

See **`agent-knowledge/Vue Composition API Migration.md`** for a complete example including:
- Comprehensive "What We Did" summary
- Code examples from the session
- Metrics (32% code reduction, 0 errors)
- Learnings (what worked, what didn't)
- Wiki-links to 8 related topics

---

## Obsidian Integration

### Opening in Obsidian

1. Open Obsidian
2. Open folder: `/Users/cdunbar/Repos/ds-bridge/agent-knowledge/`
3. Obsidian will automatically:
   - Parse wiki-links `[[Topic]]`
   - Create graph view connections
   - Enable backlinks panel
   - Support search across all docs

### Graph View

Obsidian's graph view shows:
- **Nodes**: Each knowledge document
- **Edges**: Wiki-links between documents
- **Clusters**: Related topic groups

This reveals:
- Which patterns are most connected
- Knowledge gaps (isolated nodes)
- Evolution of topics over time

### Backlinks

When viewing a document, Obsidian shows:
- What other documents link to this one
- Mentions of related topics
- Context around each link

---

## Best Practices

### When to Create Knowledge Documents

Create a knowledge doc for sessions that involve:
- Learning new patterns or techniques
- Making architectural decisions
- Solving complex problems
- Creating reusable code patterns
- Significant refactoring

**Frequency**: Aim for 1 knowledge doc per session (if applicable)

### What to Include

**DO**:
- Include specific metrics (code reduction %, test counts)
- Add real code examples from the session
- Note what didn't work (not just successes)
- Link to related sessions and topics
- Use conversational but precise language

**DON'T**:
- Just copy-paste from session plan
- Skip the "Learnings" section
- Forget to add wiki-links
- Include generic advice without context

### Linking Strategy

**Good Links** (specific):
- `[[Session 5 - Refactoring]]`
- `[[Composition API Migration Pattern]]`
- `[[Component Template Generator]]`

**Bad Links** (too generic):
- `[[Vue]]`
- `[[TypeScript]]`
- `[[Testing]]`

Be specific enough that the link topic is meaningful and searchable.

---

## Benefits

1. **Knowledge Preservation**: Captures insights before they're forgotten
2. **Pattern Library**: Builds searchable database of solutions
3. **Onboarding**: New contributors learn from past decisions
4. **Decision History**: Understand why choices were made
5. **Wiki Network**: Links create a knowledge graph over time
6. **Obsidian Compatible**: Works with graph view, search, backlinks
7. **Retrospective Aid**: Review what was learned across sessions

---

## Related Files

- **`agent-knowledge/_TEMPLATE.md`** - Template for new knowledge docs
- **`agent-knowledge/Vue Composition API Migration.md`** - Example knowledge doc
- **`.claude/commands/session-knowledge-capture.md`** - Slash command
- **`CONTRIBUTOR_WORKFLOW.md`** - Overall workflow documentation

---

## Example Workflow

```bash
# End of Session 6
/session-knowledge-capture

# Agent asks: "What is the main topic/concept for this knowledge doc?"
# User responds: "Workflow Automation"

# Reviews session plan, work journal, and git commits
# Creates: agent-knowledge/Workflow Automation.md

# Opens in Obsidian
# Graph view now shows "Workflow Automation" connected to:
# - Vue Composition API Migration
# - Design System Best Practices
# - Component Template Generator
# - Slash Command Architecture
```

---

**Last Updated**: 2025-12-18
**Version**: 1.0.0
