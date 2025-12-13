import { describe, it, expect, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import DsButton from '../src/components/Button.vue';

const vuetify = createVuetify({
  components,
  directives,
});

describe('DsButton.vue', () => {
  it('renders with default props', () => {
    const wrapper = mount(DsButton, {
      slots: {
        default: 'Click me',
      },
      global: {
        plugins: [vuetify],
      },
    });

    expect(wrapper.text()).toContain('Click me');
    expect(wrapper.find('.ds-button').exists()).toBe(true);
  });

  it('applies the correct variant prop', () => {
    const wrapper = mount(DsButton, {
      props: {
        variant: 'outlined',
      },
      slots: {
        default: 'Outlined',
      },
      global: {
        plugins: [vuetify],
      },
    });

    expect(wrapper.vm.variant).toBe('outlined');
  });

  it('applies the correct color prop', () => {
    const wrapper = mount(DsButton, {
      props: {
        color: 'secondary',
      },
      slots: {
        default: 'Colored',
      },
      global: {
        plugins: [vuetify],
      },
    });

    expect(wrapper.vm.color).toBe('secondary');
  });

  it('emits click event when clicked and not disabled', async () => {
    const wrapper = mount(DsButton, {
      props: {
        disabled: false,
      },
      slots: {
        default: 'Click me',
      },
      global: {
        plugins: [vuetify],
      },
    });

    await wrapper.find('.ds-button').trigger('click');
    expect(wrapper.emitted('click')).toBeTruthy();
    expect(wrapper.emitted('click')).toHaveLength(1);
  });

  it('does not emit click event when disabled', async () => {
    const wrapper = mount(DsButton, {
      props: {
        disabled: true,
      },
      slots: {
        default: 'Disabled',
      },
      global: {
        plugins: [vuetify],
      },
    });

    await wrapper.find('.ds-button').trigger('click');
    expect(wrapper.emitted('click')).toBeFalsy();
  });

  it('respects the disabled prop', () => {
    const wrapper = mount(DsButton, {
      props: {
        disabled: true,
      },
      slots: {
        default: 'Disabled',
      },
      global: {
        plugins: [vuetify],
      },
    });

    expect(wrapper.vm.disabled).toBe(true);
  });

  it('maps size prop correctly to Vuetify size', () => {
    const wrapper = mount(DsButton, {
      props: {
        size: 'lg',
      },
      slots: {
        default: 'Large',
      },
      global: {
        plugins: [vuetify],
      },
    });

    expect(wrapper.vm.mappedSize).toBe('large');
  });

  it('supports small, medium, and large sizes', () => {
    const sizes = ['sm', 'md', 'lg'];
    const mappedSizes = ['small', 'default', 'large'];

    sizes.forEach((size, index) => {
      const wrapper = mount(DsButton, {
        props: { size },
        slots: { default: 'Test' },
        global: { plugins: [vuetify] },
      });

      expect(wrapper.vm.mappedSize).toBe(mappedSizes[index]);
    });
  });

  it('applies the correct size class', () => {
    const wrapper = mount(DsButton, {
      props: {
        size: 'lg',
      },
      slots: {
        default: 'Large',
      },
      global: {
        plugins: [vuetify],
      },
    });

    expect(wrapper.find('.ds-button--lg').exists()).toBe(true);
  });
});
