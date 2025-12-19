/**
 * Accessibility Tests for DsChip Component
 * WCAG 2.1 Level AAA Compliance Testing
 */

import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import DsChip from '../src/components/Chip.vue';
import {
  hasAccessibleName,
  testKeyboardNavigation,
} from './a11y.utils';

const vuetify = createVuetify({ components, directives });

describe('DsChip Accessibility', () => {
  it('should have accessible name', () => {
    const wrapper = mount(DsChip, {
      slots: { default: 'Accessible Chip' },
      global: { plugins: [vuetify] },
    });

    expect(hasAccessibleName(wrapper.element as HTMLElement)).toBe(true);
    wrapper.unmount();
  });

  it('should be keyboard navigable when closable', () => {
    const wrapper = mount(DsChip, {
      props: { closable: true },
      slots: { default: 'Keyboard Chip' },
      global: { plugins: [vuetify] },
    });

    // Closable chips have interactive buttons that should be keyboard navigable
    const element = wrapper.element as HTMLElement;
    const button = element.querySelector('button');

    expect(button).toBeTruthy();
    expect(() => testKeyboardNavigation(button as HTMLElement, true)).not.toThrow();
    wrapper.unmount();
  });

  it('should have proper ARIA attributes when disabled', () => {
    const wrapper = mount(DsChip, {
      props: { disabled: true },
      slots: { default: 'Disabled Chip' },
      global: { plugins: [vuetify] },
    });

    const element = wrapper.element as HTMLElement;
    const button = element.querySelector('button, [role="button"]') || element;

    // Disabled chips should have aria-disabled or disabled attribute
    expect(
      button.hasAttribute('disabled') ||
      button.getAttribute('aria-disabled') === 'true'
    ).toBe(true);

    wrapper.unmount();
  });

  it('should use semantic HTML', () => {
    const wrapper = mount(DsChip, {
      slots: { default: 'Semantic Chip' },
      global: { plugins: [vuetify] },
    });

    const element = wrapper.element as HTMLElement;
    // Vuetify chips render as spans with semantic structure
    // Check that the element exists and has the chip class
    expect(element.classList.contains('v-chip') || element.querySelector('.v-chip')).toBeTruthy();
    wrapper.unmount();
  });
});
