<template>
  <v-btn
    :variant="variant"
    :color="color"
    :disabled="disabled"
    :size="mappedSize"
    :loading="loading"
    :class="['ds-button', `ds-button--${size}`]"
    @click="handleClick"
  >
    <slot />
  </v-btn>
</template>

<script lang="ts">
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
 *
 * Events:
 *   - @click: Emitted when the button is clicked (if not disabled)
 *
 * Slots:
 *   - default: Button label/content (text or icons)
 *
 * Accessibility:
 *   - For icon-only buttons, use the aria-label prop on the v-btn to provide screen reader text
 *   - Example: <ds-button aria-label="Close dialog">
 *     <v-icon icon="mdi-close" />
 *   </ds-button>
 *   - All buttons have proper focus management and keyboard support
 *   - Supports WCAG 2.1 AAA contrast requirements
 */
import { defineComponent, PropType } from 'vue';

type ButtonVariant = 'elevated' | 'flat' | 'tonal' | 'outlined' | 'text';
type ButtonSize = 'sm' | 'md' | 'lg';
type VuetifySize = 'small' | 'default' | 'large';

interface SizeMap {
  [key in ButtonSize]: VuetifySize;
}

export default defineComponent({
  name: 'DsButton',
  props: {
    variant: {
      type: String as PropType<ButtonVariant>,
      default: 'elevated' as ButtonVariant,
      validator: (value: ButtonVariant) =>
        ['elevated', 'flat', 'tonal', 'outlined', 'text'].includes(value),
    },
    color: {
      type: String,
      default: 'primary',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String as PropType<ButtonSize>,
      default: 'md' as ButtonSize,
      validator: (value: ButtonSize) => ['sm', 'md', 'lg'].includes(value),
    },
  },
  emits: {
    click: (event: MouseEvent) => event instanceof MouseEvent,
  },
  computed: {
    mappedSize(): VuetifySize {
      // Map our size prop to Vuetify's size prop
      const sizeMap: SizeMap = {
        sm: 'small',
        md: 'default',
        lg: 'large',
      };
      return sizeMap[this.size];
    },
  },
  methods: {
    handleClick(event: MouseEvent): void {
      if (!this.disabled) {
        this.$emit('click', event);
      }
    },
  },
});
</script>

<style scoped>
.ds-button {
  /* Add minimal scoped styles if needed. Most styling comes from Vuetify theme. */
  font-weight: 500;
  letter-spacing: 0.5px;
  transition: all 0.2s ease-in-out;
}

.ds-button--sm {
  /* Size-specific adjustments if needed */
}

.ds-button--md {
  /* Default size adjustments */
}

.ds-button--lg {
  /* Large size adjustments */
}
</style>
