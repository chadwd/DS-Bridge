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

  it('renders primary button with default label for Accepted status', () => {
    const wrapper = mount(DsGuaranteedSale, {
      props: { status: 'Accepted' },
      global: { plugins: [vuetify] },
    });

    const buttons = wrapper.findAllComponents({ name: 'VBtn' });
    expect(buttons.length).toBe(1); // Only primary button for Accepted
    expect(buttons[0].text()).toContain('Cancel Offer');
  });

  it('shows both buttons for Requested status', () => {
    const wrapper = mount(DsGuaranteedSale, {
      props: { status: 'Requested' },
      global: { plugins: [vuetify] },
    });

    const buttons = wrapper.findAllComponents({ name: 'VBtn' });
    expect(buttons.length).toBe(2); // Primary and secondary for Requested
    expect(buttons[0].text()).toContain('Check Status');
    expect(buttons[1].text()).toContain('Cancel Request');
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

  it('hides datetime section for Expired status even when showDateTime is true', () => {
    const wrapper = mount(DsGuaranteedSale, {
      props: { status: 'Expired', showDateTime: true },
      global: { plugins: [vuetify] },
    });

    expect(wrapper.find('.datetime-section').exists()).toBe(false);
  });

  it('hides datetime section for Not Available status even when showDateTime is true', () => {
    const wrapper = mount(DsGuaranteedSale, {
      props: { status: 'Not Available', showDateTime: true },
      global: { plugins: [vuetify] },
    });

    expect(wrapper.find('.datetime-section').exists()).toBe(false);
  });

  it('shows datetime section for Available status when showDateTime is true', () => {
    const wrapper = mount(DsGuaranteedSale, {
      props: { status: 'Available', showDateTime: true },
      global: { plugins: [vuetify] },
    });

    expect(wrapper.find('.datetime-section').exists()).toBe(true);
  });

  it('shows datetime section for Accepted status when showDateTime is true', () => {
    const wrapper = mount(DsGuaranteedSale, {
      props: { status: 'Accepted', showDateTime: true },
      global: { plugins: [vuetify] },
    });

    expect(wrapper.find('.datetime-section').exists()).toBe(true);
  });

  it('shows datetime section for Requested status when showDateTime is true', () => {
    const wrapper = mount(DsGuaranteedSale, {
      props: { status: 'Requested', showDateTime: true },
      global: { plugins: [vuetify] },
    });

    expect(wrapper.find('.datetime-section').exists()).toBe(true);
  });

  it('hides updated date when showUpdatedDate is false', () => {
    const wrapper = mount(DsGuaranteedSale, {
      props: {
        showUpdatedDate: false,
        updatedDate: 'Dec 1, 2025',
        expiresDate: 'Dec 5, 2025'
      },
      global: { plugins: [vuetify] },
    });

    const text = wrapper.text();
    // Updated date should not appear
    expect(text).not.toContain('Dec 1, 2025');
    // Time should still be visible
    expect(text).toContain('10:55:04');
    // Expires date should still show
    expect(text).toContain('Dec 5, 2025');
  });

  it('hides updated time when showUpdatedTime is false', () => {
    const wrapper = mount(DsGuaranteedSale, {
      props: {
        showUpdatedTime: false,
        updatedDate: 'Dec 1, 2025',
        expiresDate: 'Dec 5, 2025'
      },
      global: { plugins: [vuetify] },
    });

    const text = wrapper.text();
    // Updated date should still be visible
    expect(text).toContain('Dec 1, 2025');
    // Time should not be visible
    expect(text).not.toContain('10:55:04');
    expect(text).not.toContain('a.m.');
    expect(text).not.toContain('EST');
    // Expires date should still show
    expect(text).toContain('Dec 5, 2025');
  });

  it('hides expires date when showExpiresDate is false', () => {
    const wrapper = mount(DsGuaranteedSale, {
      props: { showExpiresDate: false },
      global: { plugins: [vuetify] },
    });

    const text = wrapper.text();
    // Updated section should still show
    expect(text).toContain('Updated:');
    // Expires section should not show
    expect(text).not.toContain('Expires:');
  });

  it('hides updated row when both showUpdatedDate and showUpdatedTime are false', () => {
    const wrapper = mount(DsGuaranteedSale, {
      props: { showUpdatedDate: false, showUpdatedTime: false },
      global: { plugins: [vuetify] },
    });

    const text = wrapper.text();
    expect(text).not.toContain('Updated:');
    // Expires should still show
    expect(text).toContain('Expires:');
  });

  it('shows all datetime elements by default', () => {
    const wrapper = mount(DsGuaranteedSale, {
      global: { plugins: [vuetify] },
    });

    const text = wrapper.text();
    expect(text).toContain('Updated:');
    expect(text).toContain('Nov 3, 2025');
    expect(text).toContain('10:55:04');
    expect(text).toContain('a.m.');
    expect(text).toContain('EST');
    expect(text).toContain('Expires:');
  });

  it('allows showing only updated date without time', () => {
    const wrapper = mount(DsGuaranteedSale, {
      props: {
        showUpdatedDate: true,
        showUpdatedTime: false,
        updatedDate: 'Dec 1, 2025',
        expiresDate: 'Dec 5, 2025'
      },
      global: { plugins: [vuetify] },
    });

    const text = wrapper.text();
    expect(text).toContain('Updated:');
    expect(text).toContain('Dec 1, 2025');
    expect(text).not.toContain('10:55:04');
    expect(text).not.toContain('|'); // Separator should not show
  });

  it('allows showing only updated time without date', () => {
    const wrapper = mount(DsGuaranteedSale, {
      props: { showUpdatedDate: false, showUpdatedTime: true },
      global: { plugins: [vuetify] },
    });

    const text = wrapper.text();
    expect(text).toContain('Updated:');
    expect(text).toContain('10:55:04');
    expect(text).toContain('a.m.');
    expect(text).toContain('EST');
    // Should not show the separator when date is hidden
    expect(text).not.toContain('|');
  });
});
