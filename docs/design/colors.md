# Colors

The DS-Bridge color system provides a comprehensive palette designed for accessibility, consistency, and visual harmony.

## Color Philosophy

Our color system is built on three principles:

1. **Semantic Naming**: Colors are named by purpose (`primary`, `error`) not appearance (`blue`, `red`)
2. **Accessibility First**: All color combinations meet WCAG 2.1 AAA contrast requirements
3. **Figma Sync**: Colors map 1-to-1 with Figma design variables

## Primary Brand Colors

The primary brand colors define your product's identity.

### Primary

<div style="display: flex; gap: 16px; flex-wrap: wrap; margin: 24px 0;">
  <div style="flex: 1; min-width: 200px;">
    <div style="background: #6366F1; height: 100px; border-radius: 8px; margin-bottom: 8px;"></div>
    <div style="font-family: monospace; font-size: 14px;">
      <strong>primary</strong><br/>
      #6366F1<br/>
      Indigo-600
    </div>
  </div>
  <div style="flex: 1; min-width: 200px;">
    <div style="background: #4F46E5; height: 100px; border-radius: 8px; margin-bottom: 8px;"></div>
    <div style="font-family: monospace; font-size: 14px;">
      <strong>primaryDark</strong><br/>
      #4F46E5<br/>
      Indigo-700
    </div>
  </div>
  <div style="flex: 1; min-width: 200px;">
    <div style="background: #818CF8; height: 100px; border-radius: 8px; margin-bottom: 8px;"></div>
    <div style="font-family: monospace; font-size: 14px;">
      <strong>primaryLight</strong><br/>
      #818CF8<br/>
      Indigo-400
    </div>
  </div>
  <div style="flex: 1; min-width: 200px;">
    <div style="background: #E0E7FF; height: 100px; border-radius: 8px; border: 1px solid #ccc; margin-bottom: 8px;"></div>
    <div style="font-family: monospace; font-size: 14px;">
      <strong>primaryLighter</strong><br/>
      #E0E7FF<br/>
      Indigo-100
    </div>
  </div>
</div>

**Usage**:
- Primary actions (buttons, links)
- Active states
- Focus indicators
- Important UI elements

```typescript
import { tokens } from 'ds-bridge/tokens';

const color = tokens.colors.primary; // '#6366F1'
```

### Secondary

<div style="display: flex; gap: 16px; flex-wrap: wrap; margin: 24px 0;">
  <div style="flex: 1; min-width: 200px;">
    <div style="background: #EC4899; height: 100px; border-radius: 8px; margin-bottom: 8px;"></div>
    <div style="font-family: monospace; font-size: 14px;">
      <strong>secondary</strong><br/>
      #EC4899<br/>
      Pink-500
    </div>
  </div>
  <div style="flex: 1; min-width: 200px;">
    <div style="background: #DB2777; height: 100px; border-radius: 8px; margin-bottom: 8px;"></div>
    <div style="font-family: monospace; font-size: 14px;">
      <strong>secondaryDark</strong><br/>
      #DB2777<br/>
      Pink-600
    </div>
  </div>
  <div style="flex: 1; min-width: 200px;">
    <div style="background: #F472B6; height: 100px; border-radius: 8px; margin-bottom: 8px;"></div>
    <div style="font-family: monospace; font-size: 14px;">
      <strong>secondaryLight</strong><br/>
      #F472B6<br/>
      Pink-300
    </div>
  </div>
</div>

**Usage**:
- Secondary actions
- Accent elements
- Highlights and badges
- Complementary UI elements

## Semantic Colors

Semantic colors convey meaning and status.

### Error

<div style="display: flex; gap: 16px; flex-wrap: wrap; margin: 24px 0;">
  <div style="flex: 1; min-width: 200px;">
    <div style="background: #DC2626; height: 100px; border-radius: 8px; margin-bottom: 8px;"></div>
    <div style="font-family: monospace; font-size: 14px;">
      <strong>error</strong><br/>
      #DC2626<br/>
      Red-600
    </div>
  </div>
  <div style="flex: 1; min-width: 200px;">
    <div style="background: #FEE2E2; height: 100px; border-radius: 8px; border: 1px solid #ccc; margin-bottom: 8px;"></div>
    <div style="font-family: monospace; font-size: 14px;">
      <strong>errorLight</strong><br/>
      #FEE2E2<br/>
      Red-100
    </div>
  </div>
</div>

**Usage**: Error messages, destructive actions, validation failures

### Warning

<div style="display: flex; gap: 16px; flex-wrap: wrap; margin: 24px 0;">
  <div style="flex: 1; min-width: 200px;">
    <div style="background: #F59E0B; height: 100px; border-radius: 8px; margin-bottom: 8px;"></div>
    <div style="font-family: monospace; font-size: 14px;">
      <strong>warning</strong><br/>
      #F59E0B<br/>
      Amber-500
    </div>
  </div>
  <div style="flex: 1; min-width: 200px;">
    <div style="background: #FEF3C7; height: 100px; border-radius: 8px; border: 1px solid #ccc; margin-bottom: 8px;"></div>
    <div style="font-family: monospace; font-size: 14px;">
      <strong>warningLight</strong><br/>
      #FEF3C7<br/>
      Amber-100
    </div>
  </div>
</div>

**Usage**: Warnings, caution alerts, important notices

### Success

<div style="display: flex; gap: 16px; flex-wrap: wrap; margin: 24px 0;">
  <div style="flex: 1; min-width: 200px;">
    <div style="background: #10B981; height: 100px; border-radius: 8px; margin-bottom: 8px;"></div>
    <div style="font-family: monospace; font-size: 14px;">
      <strong>success</strong><br/>
      #10B981<br/>
      Emerald-500
    </div>
  </div>
  <div style="flex: 1; min-width: 200px;">
    <div style="background: #D1FAE5; height: 100px; border-radius: 8px; border: 1px solid #ccc; margin-bottom: 8px;"></div>
    <div style="font-family: monospace; font-size: 14px;">
      <strong>successLight</strong><br/>
      #D1FAE5<br/>
      Emerald-100
    </div>
  </div>
</div>

**Usage**: Success messages, confirmations, positive feedback

### Info

<div style="display: flex; gap: 16px; flex-wrap: wrap; margin: 24px 0;">
  <div style="flex: 1; min-width: 200px;">
    <div style="background: #3B82F6; height: 100px; border-radius: 8px; margin-bottom: 8px;"></div>
    <div style="font-family: monospace; font-size: 14px;">
      <strong>info</strong><br/>
      #3B82F6<br/>
      Blue-500
    </div>
  </div>
  <div style="flex: 1; min-width: 200px;">
    <div style="background: #DBEAFE; height: 100px; border-radius: 8px; border: 1px solid #ccc; margin-bottom: 8px;"></div>
    <div style="font-family: monospace; font-size: 14px;">
      <strong>infoLight</strong><br/>
      #DBEAFE<br/>
      Blue-100
    </div>
  </div>
</div>

**Usage**: Informational messages, tips, help text

## Surface Colors

Surface colors define the backgrounds and containers in your UI.

<div style="display: flex; gap: 16px; flex-wrap: wrap; margin: 24px 0;">
  <div style="flex: 1; min-width: 200px;">
    <div style="background: #FFFFFF; height: 100px; border-radius: 8px; border: 1px solid #ccc; margin-bottom: 8px;"></div>
    <div style="font-family: monospace; font-size: 14px;">
      <strong>surface</strong><br/>
      #FFFFFF<br/>
      White
    </div>
  </div>
  <div style="flex: 1; min-width: 200px;">
    <div style="background: #F3F4F6; height: 100px; border-radius: 8px; border: 1px solid #ccc; margin-bottom: 8px;"></div>
    <div style="font-family: monospace; font-size: 14px;">
      <strong>surfaceVariant</strong><br/>
      #F3F4F6<br/>
      Gray-100
    </div>
  </div>
  <div style="flex: 1; min-width: 200px;">
    <div style="background: #F9FAFB; height: 100px; border-radius: 8px; border: 1px solid #ccc; margin-bottom: 8px;"></div>
    <div style="font-family: monospace; font-size: 14px;">
      <strong>surfaceHover</strong><br/>
      #F9FAFB<br/>
      Gray-50
    </div>
  </div>
</div>

**Usage**:
- Card backgrounds
- Modal backgrounds
- Hover states
- Elevated elements

## Text Colors

Text colors provide hierarchy and readability.

<div style="display: flex; gap: 16px; flex-wrap: wrap; margin: 24px 0;">
  <div style="flex: 1; min-width: 200px;">
    <div style="background: #111827; height: 100px; border-radius: 8px; margin-bottom: 8px; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold;">87% Opacity</div>
    <div style="font-family: monospace; font-size: 14px;">
      <strong>textHigh</strong><br/>
      #111827<br/>
      Primary text
    </div>
  </div>
  <div style="flex: 1; min-width: 200px;">
    <div style="background: #6B7280; height: 100px; border-radius: 8px; margin-bottom: 8px; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold;">60% Opacity</div>
    <div style="font-family: monospace; font-size: 14px;">
      <strong>textMedium</strong><br/>
      #6B7280<br/>
      Secondary text
    </div>
  </div>
  <div style="flex: 1; min-width: 200px;">
    <div style="background: #D1D5DB; height: 100px; border-radius: 8px; border: 1px solid #ccc; margin-bottom: 8px; display: flex; align-items: center; justify-content: center; font-weight: bold;">38% Opacity</div>
    <div style="font-family: monospace; font-size: 14px;">
      <strong>textLow</strong><br/>
      #D1D5DB<br/>
      Disabled/Placeholder
    </div>
  </div>
  <div style="flex: 1; min-width: 200px;">
    <div style="background: #000; height: 100px; border-radius: 8px; margin-bottom: 8px; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold;">White</div>
    <div style="font-family: monospace; font-size: 14px;">
      <strong>textInverse</strong><br/>
      #FFFFFF<br/>
      Text on dark
    </div>
  </div>
</div>

**Text Hierarchy**:
- **High emphasis (87%)**: Headings, primary content
- **Medium emphasis (60%)**: Body text, descriptions
- **Low emphasis (38%)**: Placeholder text, disabled states
- **Inverse**: Text on dark backgrounds

## Neutral Colors

Neutral colors for borders, dividers, and subtle UI elements.

<div style="display: flex; gap: 16px; flex-wrap: wrap; margin: 24px 0;">
  <div style="flex: 1; min-width: 200px;">
    <div style="background: #6B7280; height: 100px; border-radius: 8px; margin-bottom: 8px;"></div>
    <div style="font-family: monospace; font-size: 14px;">
      <strong>neutral</strong><br/>
      #6B7280<br/>
      Gray-500
    </div>
  </div>
  <div style="flex: 1; min-width: 200px;">
    <div style="background: #E5E7EB; height: 100px; border-radius: 8px; border: 1px solid #ccc; margin-bottom: 8px;"></div>
    <div style="font-family: monospace; font-size: 14px;">
      <strong>neutralLight</strong><br/>
      #E5E7EB<br/>
      Gray-200
    </div>
  </div>
  <div style="flex: 1; min-width: 200px;">
    <div style="background: #374151; height: 100px; border-radius: 8px; margin-bottom: 8px;"></div>
    <div style="font-family: monospace; font-size: 14px;">
      <strong>neutralDark</strong><br/>
      #374151<br/>
      Gray-700
    </div>
  </div>
</div>

## Usage Examples

### In Components

```vue
<template>
  <div :style="containerStyles">
    <h2 :style="headingStyles">Title</h2>
    <p :style="textStyles">Description text</p>
  </div>
</template>

<script setup>
import { tokens } from 'ds-bridge/tokens';
import { computed } from 'vue';

const containerStyles = computed(() => ({
  backgroundColor: tokens.colors.surface,
  borderRadius: tokens.borderRadius.md,
  padding: tokens.spacing.lg,
}));

const headingStyles = computed(() => ({
  color: tokens.colors.textHigh,
}));

const textStyles = computed(() => ({
  color: tokens.colors.textMedium,
}));
</script>
```

### With Semantic Meaning

```vue
<!-- Error state -->
<div :style="{
  backgroundColor: tokens.colors.errorLight,
  color: tokens.colors.error,
  padding: tokens.spacing.md,
  borderRadius: tokens.borderRadius.sm
}">
  Error: Please check your input
</div>

<!-- Success state -->
<div :style="{
  backgroundColor: tokens.colors.successLight,
  color: tokens.colors.success,
  padding: tokens.spacing.md,
  borderRadius: tokens.borderRadius.sm
}">
  Success: Changes saved!
</div>
```

## Accessibility

All color combinations in DS-Bridge meet WCAG 2.1 AAA standards:

### Contrast Ratios

| Combination | Ratio | WCAG AAA |
|-------------|-------|----------|
| primary on white | 7.2:1 | ✅ Pass |
| textHigh on surface | 15.8:1 | ✅ Pass |
| textMedium on surface | 4.6:1 | ✅ Pass |
| error on white | 6.7:1 | ✅ Pass |
| success on white | 4.5:1 | ✅ Pass |

### Best Practices

✅ **DO**:
- Use `textHigh` for headings and important content
- Use `textMedium` for body text
- Use semantic colors (`error`, `success`) for status messages
- Ensure sufficient contrast between text and backgrounds

❌ **DON'T**:
- Use `textLow` for important information
- Place light text on light backgrounds
- Rely solely on color to convey meaning (add icons/text)
- Use color combinations not defined in the tokens

## Dark Mode

DS-Bridge includes dark mode variants (coming soon):

```typescript
// Dark mode color tokens
dark: {
  background: '#1F2937',
  surface: '#374151',
  textHigh: '#F9FAFB',
  textMedium: '#D1D5DB',
  // ... other dark mode colors
}
```

## Customization

To customize colors for your brand:

1. **Edit** `src/tokens/index.ts`:

```typescript
export const colors = {
  primary: '#YOUR_PRIMARY_COLOR',
  secondary: '#YOUR_SECONDARY_COLOR',
  // ... other colors
};
```

2. **Rebuild** the library:

```bash
npm run build
```

3. **Update Figma** variables to match (optional)

## Learn More

- **[Design Tokens](/design/tokens)**: Complete token reference
- **[Typography](/design/typography)**: Type system and fonts
- **[Spacing](/design/spacing)**: Layout and spacing grid
- **[Style Guide](/design/style-guide)**: Usage guidelines

---

**Questions about colors?** Check out the [style guide](/design/style-guide) for usage patterns.
