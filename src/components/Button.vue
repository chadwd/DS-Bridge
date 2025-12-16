<template>
  <v-btn
    :variant="variant"
    :color="color"
    :disabled="disabled"
    :size="mappedSize"
    :loading="loading"
    :icon="icon"
    :ripple="true"
    class="ds-button"
    v-bind="$attrs"
  >
    <slot />
  </v-btn>
</template>

<script setup lang="ts">
/**
 * DsButton - Design System Button Component
 *
 * A flexible button wrapper around Vuetify's v-btn that applies design system styling and conventions.
 * Supports all Vuetify button variants and sizes with design system defaults.
 *
 * Props:
 *   - variant: Button style variant (default: 'elevated')
 *     * 'elevated': Filled button with elevation (recommended for primary actions)
 *     * 'flat': Filled button without elevation
 *     * 'tonal': Subtle filled button with background tint
 *     * 'outlined': Outlined button without fill
 *     * 'text': Text-only button
 *   - color: Color name from design tokens (default: 'primary')
 *   - disabled: Boolean to disable the button (default: false)
 *   - loading: Boolean to show loading state (default: false)
 *   - size: Size preset (default: 'md')
 *     * 'sm': Small button
 *     * 'md': Medium button (default)
 *     * 'lg': Large button
 *   - icon: Boolean to render as icon button (default: false)
 *     * When true, button becomes square/circular with fixed dimensions (48px × 48px)
 *     * Only shows icon content without text padding
 *     * Maintains all variants (elevated, flat, tonal, outlined, text)
 *
 * Slots:
 *   - default: Button label/content (text or icons)
 *
 * Accessibility:
 *   - For icon-only buttons, use the aria-label prop to provide screen reader text
 *   - Example: <DsButton icon aria-label="Close dialog">
 *     <v-icon icon="mdi-close" />
 *   </DsButton>
 *   - All buttons have proper focus management and keyboard support
 *   - Supports WCAG 2.1 AAA contrast requirements
 */
import { computed } from 'vue';

type ButtonVariant = 'elevated' | 'flat' | 'tonal' | 'outlined' | 'text';
type ButtonSize = 'sm' | 'md' | 'lg';
type VuetifySize = 'small' | 'default' | 'large';

interface Props {
  variant?: ButtonVariant;
  color?: string;
  disabled?: boolean;
  loading?: boolean;
  size?: ButtonSize;
  icon?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'elevated',
  color: 'primary',
  disabled: false,
  loading: false,
  size: 'md',
  icon: false,
});

const SIZE_MAP: Record<ButtonSize, VuetifySize> = {
  sm: 'small',
  md: 'default',
  lg: 'large',
} as const;

const mappedSize = computed<VuetifySize>(() => SIZE_MAP[props.size]);
</script>

<style scoped>
.ds-button {
  /* Apply pill-shaped border radius from design tokens (9999px = full pill shape) */
  border-radius: 9999px;

  /* Typography from design system - DO NOT CHANGE */
  font-weight: 500;
  letter-spacing: 0.5px;
  text-transform: capitalize;
}

/* Icon button specific sizing from Figma tokens (48px x 48px) */
.ds-button:deep(.v-btn--icon) {
  width: 48px;
  height: 48px;
  min-width: 48px;
}
</style>
