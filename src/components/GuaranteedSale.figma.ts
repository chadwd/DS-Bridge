import figma, { html } from '@figma/code-connect/html';

/**
 * Figma Code Connect for DsGuaranteedSale component
 *
 * This file maps the Figma design component to the Vue implementation,
 * allowing developers to see the actual code in Figma's Dev Mode.
 *
 * Figma URL: https://www.figma.com/design/EuDde9tKZRxoFIPhyOcvG0/DS-Bridge--white-label-?node-id=84-1465
 */

figma.connect(
  'https://www.figma.com/design/EuDde9tKZRxoFIPhyOcvG0/DS-Bridge--white-label-?node-id=84-1465',
  {
    props: {
      priceValue: figma.string('Price Value'),
      status: figma.enum('Status', {
        'Available': 'Available',
        'Requested': 'Requested',
        'Accepted': 'Accepted',
        'Expired': 'Expired',
        'Not Available': 'Not Available'
      }),
      align: figma.enum('Alignment', {
        'Center': 'center',
        'Left': 'left'
      }),
      showDateTime: figma.boolean('Show DateTime'),
      updatedDate: figma.string('Updated Date'),
      updatedTime: figma.string('Updated Time'),
      timePeriod: figma.string('Time Period'),
      timezone: figma.string('Timezone'),
      expiresDate: figma.string('Expires Date')
    },
    example: (props) => html`<script setup>
import { DsGuaranteedSale } from 'ds-bridge';

function handlePrimaryAction() {
  console.log('Primary action clicked');
}

function handleSecondaryAction() {
  console.log('Secondary action clicked');
}
</script>

<template>
  <DsGuaranteedSale
    price-value="${props.priceValue}"
    status="${props.status}"
    align="${props.align}"
    :show-date-time="${props.showDateTime}"
    updated-date="${props.updatedDate}"
    updated-time="${props.updatedTime}"
    time-period="${props.timePeriod}"
    timezone="${props.timezone}"
    expires-date="${props.expiresDate}"
    @primary-action="handlePrimaryAction"
    @secondary-action="handleSecondaryAction"
  />
</template>`,
    imports: ["import { DsGuaranteedSale } from 'ds-bridge';"]
  }
);
