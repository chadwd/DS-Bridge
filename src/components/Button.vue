<template>
  <v-btn
    :variant="variant"
    :color="color"
    :disabled="disabled"
    :size="mappedSize"
    :class="['ds-button', `ds-button--${size}`]"
    @click="handleClick"
  >
    <slot />
  </v-btn>
</template>

<script>
/**
 * DsButton - Design System Button Component
 *
 * A wrapper around Vuetify's v-btn that applies design system styling and conventions.
 *
 * Props:
 *   - variant: 'filled' | 'outlined' | 'text' (default: 'filled')
 *   - color: Color name from design tokens (default: 'primary')
 *   - disabled: Boolean to disable the button (default: false)
 *   - size: 'sm' | 'md' | 'lg' (default: 'md')
 *
 * Events:
 *   - @click: Emitted when the button is clicked (if not disabled)
 *
 * Slots:
 *   - default: Button label/content
 *
 * Accessibility:
 *   - For icon-only buttons, use the aria-label prop on v-btn to provide screen reader text
 *   - Example: <ds-button aria-label="Close dialog">
 *     <v-icon icon="mdi-close" />
 *   </ds-button>
 */
export default {
  name: 'DsButton',
  props: {
    variant: {
      type: String,
      default: 'filled',
      validator: (value) => ['filled', 'outlined', 'text'].includes(value),
    },
    color: {
      type: String,
      default: 'primary',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: 'md',
      validator: (value) => ['sm', 'md', 'lg'].includes(value),
    },
  },
  emits: ['click'],
  computed: {
    mappedSize() {
      // Map our size prop to Vuetify's size prop
      const sizeMap = {
        sm: 'small',
        md: 'default',
        lg: 'large',
      };
      return sizeMap[this.size];
    },
  },
  methods: {
    handleClick(event) {
      if (!this.disabled) {
        this.$emit('click', event);
      }
    },
  },
};
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
