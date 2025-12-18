import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import DsDivider from '../src/components/Divider.vue';

const vuetify = createVuetify({ components, directives });

describe('DsDivider.vue', () => {
  it('renders with text prop', () => {
    const wrapper = mount(DsDivider, {
      props: { text: 'Test Content' },
      global: { plugins: [vuetify] },
    });

    expect(wrapper.text()).toContain('Test Content');
    expect(wrapper.find('.ds-divider').exists()).toBe(true);
  });

  it('applies vertical prop correctly', () => {
    const wrapper = mount(DsDivider, {
      props: { vertical: true },
      global: { plugins: [vuetify] },
    });

    const vComponent = wrapper.findComponent({ name: 'VDivider' });
    expect(vComponent.props('vertical')).toBe(true);
  });

  it('applies inset prop correctly', () => {
    const wrapper = mount(DsDivider, {
      props: { inset: true },
      global: { plugins: [vuetify] },
    });

    const vComponent = wrapper.findComponent({ name: 'VDivider' });
    expect(vComponent.props('inset')).toBe(true);
  });

  it('applies thickness prop correctly', () => {
    const wrapper = mount(DsDivider, {
      props: { thickness: 4 },
      global: { plugins: [vuetify] },
    });

    const vComponent = wrapper.findComponent({ name: 'VDivider' });
    expect(vComponent.props('thickness')).toBe(4);
  });

  it('applies color prop correctly', () => {
    const wrapper = mount(DsDivider, {
      props: { color: 'primary' },
      global: { plugins: [vuetify] },
    });

    const vComponent = wrapper.findComponent({ name: 'VDivider' });
    expect(vComponent.props('color')).toBe('primary');
  });

  it('applies text prop correctly', () => {
    const wrapper = mount(DsDivider, {
      props: { text: 'OR' },
      global: { plugins: [vuetify] },
    });

    expect(wrapper.text()).toContain('OR');
  });
});
