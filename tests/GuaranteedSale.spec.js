import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import DsGuaranteedSale from '../src/components/GuaranteedSale.vue';

const vuetify = createVuetify({ components, directives });

describe('DsGuaranteedSale.vue', () => {
  it('renders with default props', () => {
    const wrapper = mount(DsGuaranteedSale, {
      global: { plugins: [vuetify] },
    });

    expect(wrapper.find('.ds-guaranteed-sale').exists()).toBe(true);
    expect(wrapper.text()).toContain('Guaranteed Offer');
    expect(wrapper.text()).toContain('$22,500');
    expect(wrapper.text()).toContain('Accepted');
  });

  it('displays custom price value', () => {
    const wrapper = mount(DsGuaranteedSale, {
      props: { priceValue: '50,000' },
      global: { plugins: [vuetify] },
    });

    expect(wrapper.text()).toContain('$50,000');
  });

  it('displays custom status', () => {
    const wrapper = mount(DsGuaranteedSale, {
      props: { status: 'Available' },
      global: { plugins: [vuetify] },
    });

    expect(wrapper.text()).toContain('Offer Available');
  });

  it('handles left alignment', () => {
    const wrapper = mount(DsGuaranteedSale, {
      props: { align: 'left' },
      global: { plugins: [vuetify] },
    });

    expect(wrapper.find('.align-left').exists()).toBe(true);
  });

  it('shows datetime section by default', () => {
    const wrapper = mount(DsGuaranteedSale, {
      global: { plugins: [vuetify] },
    });

    expect(wrapper.find('.datetime-section').exists()).toBe(true);
    expect(wrapper.text()).toContain('Updated:');
    expect(wrapper.text()).toContain('Expires:');
  });

  it('hides datetime section when showDateTime is false', () => {
    const wrapper = mount(DsGuaranteedSale, {
      props: { showDateTime: false },
      global: { plugins: [vuetify] },
    });

    expect(wrapper.find('.datetime-section').exists()).toBe(false);
  });

  it('displays custom dates and times', () => {
    const wrapper = mount(DsGuaranteedSale, {
      props: {
        updatedDate: 'Dec 1, 2025',
        updatedTime: '14:30:00',
        timePeriod: 'p.m.',
        timezone: 'PST',
        expiresDate: 'Dec 5, 2025',
      },
      global: { plugins: [vuetify] },
    });

    expect(wrapper.text()).toContain('Dec 1, 2025');
    expect(wrapper.text()).toContain('14:30:00');
    expect(wrapper.text()).toContain('p.m.');
    expect(wrapper.text()).toContain('PST');
    expect(wrapper.text()).toContain('Dec 5, 2025');
  });

  it('renders action buttons', () => {
    const wrapper = mount(DsGuaranteedSale, {
      global: { plugins: [vuetify] },
    });

    const buttons = wrapper.findAllComponents({ name: 'VBtn' });
    expect(buttons.length).toBe(2);
    expect(buttons[0].text()).toContain('Primary Action');
    expect(buttons[1].text()).toContain('Secondary Action');
  });

  it('applies correct status badge classes', () => {
    const statuses = ['Available', 'Accepted', 'Requested', 'Expired', 'Not Available'];

    statuses.forEach((status) => {
      const wrapper = mount(DsGuaranteedSale, {
        props: { status },
        global: { plugins: [vuetify] },
      });

      const badge = wrapper.find('.status-badge');
      expect(badge.exists()).toBe(true);
    });
  });
});
