---
session: 8
contributor: chad
date: 2025-12-19
tags:
  - ds-bridge
  - session-learning
  - figma
  - mcp
  - design-handoff
---

# Figma MCP Integration

## What This Covers

Using the Figma Desktop MCP to extract design context directly from Figma during component development. This complements [[Figma Code Connect]] (which publishes code TO Figma) by reading design specs FROM Figma.

## The Problem

Traditional design handoff:
1. Designer creates design in Figma
2. Developer opens Figma, manually inspects specs
3. Developer writes code from memory/notes
4. Back-and-forth on discrepancies

**Friction points**:
- Context switching between Figma and IDE
- Manual transcription of design specs
- Easy to miss details (spacing, colors, states)

## The Solution: Figma Desktop MCP

Claude Code can read directly from Figma through the Figma Desktop MCP.

### Available Tools

| Tool | Purpose |
|------|---------|
| `get_design_context` | Extract design specs from current selection |
| `get_screenshot` | Capture visual of selected component |
| `get_variable_defs` | Get design token/variable definitions |

## Usage in Workflows

### During `/ds-build-component`

When building a new component, the workflow can:

1. **Check if Figma MCP is available**
2. **Prompt user to select component in Figma**
3. **Extract design specs automatically**:
   - Component dimensions
   - Colors and tokens used
   - Typography settings
   - Spacing values
   - Variant states

### Example Flow

```
User: /ds-build-component Card

Claude: I'll check for Figma design specs.

        Please select the Card component in Figma, then I'll
        extract the design context.

[User selects in Figma]

Claude: [Uses get_design_context]

        Found Card component specs:
        - Padding: 16px
        - Border radius: 8px
        - Shadow: elevation-02
        - Variants: outlined, elevated, flat

        Building component with these specs...
```

## Prerequisites

### Figma Desktop App

- Must have Figma Desktop installed (not web version)
- Design file must be open
- Component must be selected before MCP call

### MCP Configuration

Figma Desktop MCP should be configured in Claude Code settings. The MCP runs as a local server that communicates with the Figma app.

## Comparison: Figma MCP vs Code Connect

| Feature | Figma MCP | Code Connect |
|---------|-----------|--------------|
| Direction | Figma → Code | Code → Figma |
| Purpose | Read design specs | Show code snippets |
| When Used | During development | After development |
| Requires | Figma Desktop running | Published to Figma |

**Use Both Together**:
1. Figma MCP: Read specs while building
2. Code Connect: Publish finished code back to Figma

## Limitations

### Current Limitations

1. **Requires Figma Desktop**: Web version doesn't work
2. **Manual Selection**: User must select component first
3. **Local Only**: Works on developer's machine, not CI/CD

### Workarounds

If Figma MCP isn't available:
- Use Figma's Dev Mode to copy specs manually
- Reference design token documentation
- Ask designer for specific values

## Best Practices

### For Designers

1. **Name layers clearly** - MCP reads layer names
2. **Use design tokens** - Variables are extractable
3. **Keep components organized** - Easier to select

### For Developers

1. **Check MCP availability first** - Don't assume it's there
2. **Gracefully degrade** - Work without MCP if needed
3. **Verify extracted values** - MCP reads what's selected

## Integration with Slash Commands

The `/ds-build-component` command checks for Figma MCP:

```markdown
## Step 2: Gather Design Context

If Figma Desktop MCP is available:
1. Ask user to select component in Figma
2. Use get_design_context to extract specs
3. Use get_variable_defs for token mappings

If not available:
1. Ask user for component requirements
2. Reference existing component patterns
3. Use design tokens from src/tokens/
```

## Troubleshooting

### "MCP not available"

- Ensure Figma Desktop is running
- Check MCP server is configured in Claude Code
- Restart Claude Code if recently installed MCP

### "No selection"

- Select a component in Figma before calling MCP
- Use the Layers panel to ensure correct selection

### "Wrong context"

- Make sure correct Figma file is active
- Check that component frame is selected, not parent/child

## Future Enhancements

### Potential Improvements

1. **Batch extraction**: Get all component specs at once
2. **Token auto-mapping**: Match Figma vars to code tokens
3. **State extraction**: Get all variant states automatically
4. **Change detection**: Notify when design updates

### CI/CD Integration

Could potentially use Figma REST API for:
- Automated design-to-code sync
- Visual regression testing
- Token synchronization

## Related Topics

- [[Figma Code Connect]] - Publishing code to Figma (opposite direction)
- [[MCPs]] - Overview of all MCP integrations
- [[Workflow Automation]] - Slash commands that use Figma MCP
- [[Designer-Developer Collaboration]] - How this fits the workflow
