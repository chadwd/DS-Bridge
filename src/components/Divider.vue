<template>
  <v-divider
    :vertical="vertical"
    :inset="inset"
    :thickness="thickness"
    :color="computedColor"
    v-bind="$attrs"
    class="ds-divider"
    :class="{ 'ds-divider--no-text': !text }"
  >
    <template v-if="text">{{ text }}</template>
  </v-divider>
</template>

<script setup lang="ts">
import { computed } from 'vue';

/**
 * DsDivider - Design System Divider Component
 *
 * A flexible divider wrapper around Vuetify's v-divider for separating content.
 *
 * Props:
 *   - vertical: Displays divider vertically (default: false)
 *   - inset: Adds margin to the divider (default: false)
 *   - thickness: Thickness of the divider line in pixels (default: 1)
 *   - color: Color from design tokens (default: 'grey-lighten-5' - very light grey)
 *   - text: Optional text to display in the middle of the divider (default: undefined)
 *
 * Accessibility:
 *   - Uses semantic <hr> element
 *   - Role="separator" applied automatically by Vuetify
 *   - WCAG 2.1 AAA compliant
 */

interface Props {
  vertical?: boolean;
  inset?: boolean;
  thickness?: number | string;
  color?: string;
  text?: string;
}

const props = withDefaults(defineProps<Props>(), {
  vertical: false,
  inset: false,
  thickness: 1,
  color: undefined,
  text: undefined,
});

const computedColor = computed(() => {
  // If no color specified or "default", use grey-lighten-4
  if (!props.color || props.color === 'default') {
    return 'grey-lighten-4';
  }
  return props.color;
});
</script>

<style>
/* Use unscoped styles to properly override Vuetify */
.ds-divider.v-divider {
  border-color: currentColor !important;
  opacity: 1 !important;
}

.ds-divider.v-divider .v-divider__wrapper {
  opacity: 1 !important;
}

/* Hide the wrapper's second hr and content div when there's no text */
.v-divider__wrapper:has(.ds-divider--no-text) hr:last-of-type,
.v-divider__wrapper:has(.ds-divider--no-text) .v-divider__content {
  display: none !important;
}
</style>
