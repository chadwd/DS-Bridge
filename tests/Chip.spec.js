import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import DsChip from '../src/components/Chip.vue';

const vuetify = createVuetify({ components, directives });

describe('DsChip.vue', () => {
  it('renders with default props', () => {
    const wrapper = mount(DsChip, {
      slots: { default: 'Test Content' },
      global: { plugins: [vuetify] },
    });

    expect(wrapper.text()).toContain('Test Content');
    expect(wrapper.find('.ds-chip').exists()).toBe(true);
  });

  it('applies variant prop correctly', () => {
    const wrapper = mount(DsChip, {
      props: { variant: 'outlined' },
      slots: { default: 'Test' },
      global: { plugins: [vuetify] },
    });

    const vComponent = wrapper.findComponent({ name: 'VChip' });
    expect(vComponent.props('variant')).toBe('outlined');
  });

  it('applies color prop correctly', () => {
    const wrapper = mount(DsChip, {
      props: { color: 'secondary' },
      slots: { default: 'Test' },
      global: { plugins: [vuetify] },
    });

    const vComponent = wrapper.findComponent({ name: 'VChip' });
    expect(vComponent.props('color')).toBe('secondary');
  });

  it('handles disabled state', () => {
    const wrapper = mount(DsChip, {
      props: { disabled: true },
      slots: { default: 'Test' },
      global: { plugins: [vuetify] },
    });

    const vComponent = wrapper.findComponent({ name: 'VChip' });
    expect(vComponent.props('disabled')).toBe(true);
  });

  it('handles closable state', () => {
    const wrapper = mount(DsChip, {
      props: { closable: true },
      slots: { default: 'Test' },
      global: { plugins: [vuetify] },
    });

    const vComponent = wrapper.findComponent({ name: 'VChip' });
    expect(vComponent.props('closable')).toBe(true);
  });

  it('supports all variants', () => {
    const variants = ['elevated', 'flat', 'tonal', 'outlined', 'text'];

    variants.forEach((variant) => {
      const wrapper = mount(DsChip, {
        props: { variant },
        slots: { default: 'Test' },
        global: { plugins: [vuetify] },
      });

      const vComponent = wrapper.findComponent({ name: 'VChip' });
      expect(vComponent.props('variant')).toBe(variant);
    });
  });
});
