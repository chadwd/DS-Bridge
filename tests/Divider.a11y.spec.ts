/**
 * Accessibility Tests for DsDivider Component
 * WCAG 2.1 Level AAA Compliance Testing
 */

import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import DsDivider from '../src/components/Divider.vue';

const vuetify = createVuetify({ components, directives });

describe('DsDivider Accessibility', () => {
  it('should render with semantic hr element', () => {
    const wrapper = mount(DsDivider, {
      global: { plugins: [vuetify] },
    });

    const hr = wrapper.find('hr');
    expect(hr.exists()).toBe(true);
  });

  it('should have role="separator" for screen readers', () => {
    const wrapper = mount(DsDivider, {
      global: { plugins: [vuetify] },
    });

    const hr = wrapper.find('hr');
    expect(hr.attributes('role')).toBe('separator');
  });

  it('should support aria-orientation when vertical', () => {
    const wrapper = mount(DsDivider, {
      props: { vertical: true },
      global: { plugins: [vuetify] },
    });

    const hr = wrapper.find('hr');
    expect(hr.attributes('aria-orientation')).toBe('vertical');
  });

  it('should be accessible with text content', () => {
    const wrapper = mount(DsDivider, {
      props: { text: 'OR' },
      global: { plugins: [vuetify] },
    });

    expect(wrapper.text()).toContain('OR');
    const hr = wrapper.find('hr');
    expect(hr.exists()).toBe(true);
  });
});
