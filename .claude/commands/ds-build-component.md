# Component Demo Command

You are helping a designer create or update a component's interactive demo. This is the FIRST phase of component development - focus ONLY on the demo area until the designer approves it.

## Required Information

**Component Name**: $ARGUMENTS (e.g., "Card" or "Chip")

If no component name provided, ask: "Which component would you like to work on?"

## Workflow: Demo-First Development

### Phase 1: Context Gathering

Before writing any code, understand the component:

1. **Check if component exists**:
   - Look in `src/components/{ComponentName}.vue`
   - Look in `docs/components/{componentname}.md`

2. **If NEW component**, ask:
   - "What is the purpose of this component?"
   - "What are the key use cases?"
   - "Are there Figma designs to reference?" (offer to pull from Figma MCP)
   - "Which Vuetify component does this wrap?" (e.g., v-card, v-chip)

3. **If UPDATING component**, ask:
   - "What changes are you looking to make?"
   - "Is this a new variant, prop, or behavior?"

### Phase 2: Component Creation (New Components Only)

For new components:

1. **Generate scaffolding**:
   ```bash
   npm run create-component {ComponentName}
   ```

2. **This creates**:
   - `src/components/{ComponentName}.vue`
   - `tests/{ComponentName}.spec.js`
   - `tests/{ComponentName}.a11y.spec.ts`
   - `docs/components/{componentname}.md`
   - Export in `src/index.ts`

### Phase 3: Demo Area Development

**IMPORTANT**: Only modify the interactive demo section of the documentation.

The demo area is the `<script setup>` block and the "Interactive Playground" section at the top of the docs page.

1. **Set up reactive state** for all props the designer wants to control:
   ```vue
   <script setup>
   import { ref } from 'vue'
   const variant = ref('elevated')
   const size = ref('md')
   const disabled = ref(false)
   // etc.
   </script>
   ```

2. **Create the interactive demo** with:
   - Live component preview
   - PropControl components for each adjustable prop
   - Dynamic code generation showing current state

3. **Reference the Button demo** as the pattern:
   - See `docs/components/button.md` for the structure
   - Use `ComponentDemo` and `PropControl` components

### Phase 4: Designer Review

After the demo is working, present it to the designer:

```
## Demo Ready for Review

**Component**: {ComponentName}

**Interactive Props**:
- {prop1}: {options}
- {prop2}: {options}

**To test**:
1. Run `npm run dev`
2. Navigate to Components > {ComponentName}
3. Try the interactive playground

**Questions**:
- Does this match the expected behavior?
- Are there additional props to expose?
- Any variants or states missing?

When approved, run `/component-docs {ComponentName}` to complete documentation.
```

## What NOT to Do

- Do NOT write the full documentation sections yet
- Do NOT document all props in tables
- Do NOT add usage examples outside the demo
- Do NOT add "When to Use" or "Accessibility" sections yet

Those come in Phase 2 with `/component-docs`.

## File Locations

- Component: `src/components/{ComponentName}.vue`
- Demo/Docs: `docs/components/{componentname}.md`
- Demo Components: `docs/.vitepress/components/` (ComponentDemo.vue, PropControl.vue)

## Figma Integration

If the designer has Figma designs:
```
I can pull design context from Figma. Would you like me to:
1. Get the design specs for this component?
2. Check for design tokens or variables?

Please share the Figma node URL or I can check the currently selected node.
```

Use `mcp__figma-desktop__get_design_context` to pull specs.
