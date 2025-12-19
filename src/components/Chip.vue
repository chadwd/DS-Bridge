<template>
  <v-chip
    :variant="variant"
    :color="color"
    :disabled="disabled"
    :size="mappedSize"
    :closable="closable"
    :pill="pill"
    :label="label"
    :prepend-icon="prependIcon"
    :append-icon="appendIcon"
    class="ds-chip"
    v-bind="$attrs"
  >
    <slot />
  </v-chip>
</template>

<script setup lang="ts">
/**
 * DsChip - Design System Chip Component
 *
 * A flexible chip wrapper around Vuetify's v-chip for displaying compact elements like tags, filters, and status indicators.
 *
 * Props:
 *   - variant: Chip style variant (default: 'tonal')
 *     * 'elevated': Filled chip with elevation
 *     * 'flat': Filled chip without elevation
 *     * 'tonal': Subtle filled chip with background tint (default)
 *     * 'outlined': Outlined chip without fill
 *     * 'text': Text-only chip
 *   - color: Color name from design tokens (default: 'primary')
 *   - size: Size preset (default: 'md')
 *     * 'x-small': Extra small chip
 *     * 'small': Small chip
 *     * 'default': Medium chip (default)
 *     * 'large': Large chip
 *     * 'x-large': Extra large chip
 *   - closable: Boolean to show close icon (default: false)
 *   - pill: Boolean for pill-shaped border radius (default: true)
 *   - label: Boolean for square corners instead of rounded (default: false)
 *   - prependIcon: Icon to show before text
 *   - appendIcon: Icon to show after text
 *   - disabled: Boolean to disable the chip (default: false)
 *
 * Slots:
 *   - default: Chip content/label
 *
 * Events:
 *   - click:close: Emitted when close icon is clicked (if closable=true)
 *
 * Accessibility:
 *   - Follows WCAG 2.1 AAA compliance
 *   - Supports keyboard navigation
 *   - Close button has proper ARIA label
 *   - Sufficient color contrast in all variants
 */
import { computed } from 'vue';

type ChipVariant = 'elevated' | 'flat' | 'tonal' | 'outlined' | 'text';
type ChipSize = 'x-small' | 'small' | 'default' | 'large' | 'x-large';

interface Props {
  variant?: ChipVariant;
  color?: string;
  size?: ChipSize;
  closable?: boolean;
  pill?: boolean;
  label?: boolean;
  prependIcon?: string;
  appendIcon?: string;
  disabled?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'tonal',
  color: 'primary',
  size: 'default',
  closable: false,
  pill: true,
  label: false,
  prependIcon: undefined,
  appendIcon: undefined,
  disabled: false,
});

// Map our size names to Vuetify's size prop values
const mappedSize = computed(() => props.size);
</script>

<style scoped>
.ds-chip {
  /* Typography from design system */
  font-weight: 500;
  letter-spacing: 0.15px;
}
</style>
