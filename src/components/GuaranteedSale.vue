<template>
  <div
    class="ds-guaranteed-sale"
    :class="{ 'align-left': align === 'left' }"
  >
    <!-- Header Section with Title, Value, and Status -->
    <div class="guaranteed-sale-header">
      <div class="header-title">
        <span class="title-text">Guaranteed Offer</span>
        <v-tooltip
          location="top"
          max-width="300"
        >
          <template #activator="{ props: tooltipProps }">
            <v-icon
              icon="mdi-information-outline"
              size="small"
              class="tooltip-icon"
              v-bind="tooltipProps"
            />
          </template>
          <span>{{ tooltipText }}</span>
        </v-tooltip>
      </div>
      <div class="header-value">
        <span class="currency-symbol">$</span>
        <span class="amount">{{ status === 'Not Available' ? '--' : priceValue }}</span>
      </div>
      <div
        class="status-badge"
        :class="statusClass"
      >
        <span class="status-text">{{ statusText }}</span>
      </div>
    </div>

    <!-- DateTime Section -->
    <div
      v-if="showDateTime && shouldShowDateTime"
      class="datetime-section"
    >
      <div
        v-if="showUpdatedDate || showUpdatedTime"
        class="datetime-row"
      >
        <v-icon
          icon="mdi-clock-outline"
          size="x-small"
          class="datetime-icon"
        />
        <span class="label">Updated:</span>
        <template v-if="showUpdatedDate">
          <span class="value">{{ updatedDate }}</span>
          <span
            v-if="showUpdatedTime"
            class="separator"
          >|</span>
        </template>
        <template v-if="showUpdatedTime">
          <span class="value">{{ updatedTime }}</span>
          <span class="time-period">{{ timePeriod }}</span>
          <span class="timezone">{{ timezone }}</span>
        </template>
      </div>
      <div
        v-if="showExpiresDate"
        class="datetime-row"
      >
        <v-icon
          icon="mdi-calendar-outline"
          size="x-small"
          class="datetime-icon"
        />
        <span class="label">Expires:</span>
        <span class="value">{{ expiresDate }}</span>
      </div>
    </div>

    <!-- Actions Section -->
    <div class="actions-section">
      <v-btn
        v-if="showPrimaryButton"
        color="primary"
        variant="elevated"
        size="default"
        class="primary-action-btn"
        :disabled="primaryButtonDisabled"
        :loading="primaryButtonLoading"
        @click="emit('primary-action')"
      >
        {{ primaryButtonLabel }}
      </v-btn>
      <v-btn
        v-if="showSecondaryButton"
        color="secondary"
        variant="outlined"
        size="default"
        class="secondary-action-btn"
        :disabled="secondaryButtonDisabled"
        :loading="secondaryButtonLoading"
        @click="emit('secondary-action')"
      >
        {{ secondaryButtonLabel }}
      </v-btn>
    </div>
  </div>
</template>

<script setup lang="ts">
/**
 * DsGuaranteedSale - Design System Guaranteed Sale Component
 *
 * Displays a guaranteed offer value with status, datetime information, and action buttons.
 * Provides two alignment modes (center and left) for flexible layout options.
 *
 * Props:
 *   - priceValue: The guaranteed sale amount (string, default: '22,500')
 *   - status: Status badge text (string, default: 'Accepted')
 *   - align: Layout alignment 'center' or 'left' (default: 'center')
 *   - showDateTime: Whether to show date/time section (default: true)
 *   - updatedDate: Updated date string (default: 'Nov 3, 2025')
 *   - updatedTime: Updated time string (default: '10:55:04')
 *   - timePeriod: AM/PM indicator (default: 'a.m.')
 *   - timezone: Timezone string (default: 'EST')
 *   - expiresDate: Expiration date string (default: 'Nov 3, 2025')
 *
 * Events:
 *   - primary-action: Emitted when primary action button is clicked
 *   - secondary-action: Emitted when secondary action button is clicked
 *
 * Accessibility:
 *   - Follows WCAG 2.1 AAA compliance
 *   - Semantic HTML structure
 *   - Proper icon labels and ARIA attributes
 */

import { computed } from 'vue';

type StatusType = 'Available' | 'Requested' | 'Accepted' | 'Expired' | 'Not Available';
type AlignType = 'center' | 'left';

interface Props {
  priceValue?: string;
  status?: StatusType;
  align?: AlignType;
  showDateTime?: boolean;
  updatedDate?: string;
  updatedTime?: string;
  timePeriod?: string;
  timezone?: string;
  expiresDate?: string;
  // DateTime visibility props
  showUpdatedDate?: boolean;
  showUpdatedTime?: boolean;
  showExpiresDate?: boolean;
  // Button customization props
  primaryButtonText?: string;
  secondaryButtonText?: string;
  hidePrimaryButton?: boolean;
  hideSecondaryButton?: boolean;
  primaryButtonDisabled?: boolean;
  secondaryButtonDisabled?: boolean;
  primaryButtonLoading?: boolean;
  secondaryButtonLoading?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  priceValue: '22,500',
  status: 'Accepted',
  align: 'center',
  showDateTime: true,
  updatedDate: 'Nov 3, 2025',
  updatedTime: '10:55:04',
  timePeriod: 'a.m.',
  timezone: 'EST',
  expiresDate: 'Nov 3, 2025',
  showUpdatedDate: true,
  showUpdatedTime: true,
  showExpiresDate: true,
  hidePrimaryButton: false,
  hideSecondaryButton: false,
  primaryButtonDisabled: false,
  secondaryButtonDisabled: false,
  primaryButtonLoading: false,
  secondaryButtonLoading: false,
});

const emit = defineEmits<{
  'primary-action': [];
  'secondary-action': [];
}>();

// Map status to CSS class for styling
const statusClass = computed(() => {
  switch (props.status) {
    case 'Available':
      return 'status-available';
    case 'Accepted':
      return 'status-accepted';
    case 'Requested':
      return 'status-requested';
    case 'Expired':
      return 'status-expired';
    case 'Not Available':
      return 'status-not-available';
    default:
      return 'status-accepted';
  }
});

const statusText = computed(() => {
  switch (props.status) {
    case 'Available':
      return 'Offer Available';
    case 'Accepted':
      return 'Accepted';
    case 'Requested':
      return 'Pricing Requested';
    case 'Expired':
      return 'Expired';
    case 'Not Available':
      return 'Not Available';
    default:
      return props.status;
  }
});

const tooltipText = computed(() => {
  switch (props.status) {
    case 'Available':
      return 'Guaranteed offer valid until expiration date';
    case 'Accepted':
      return 'Offer has been accepted';
    case 'Requested':
      return 'Pricing request pending review';
    case 'Expired':
      return 'Offer has expired';
    case 'Not Available':
      return 'No guaranteed offer available';
    default:
      return 'Guaranteed offer information';
  }
});

// Dynamic button labels based on status (with prop override)
const primaryButtonLabel = computed(() => {
  if (props.primaryButtonText) return props.primaryButtonText;

  switch (props.status) {
    case 'Available':
      return 'Accept Offer';
    case 'Accepted':
      return 'Cancel Offer';
    case 'Requested':
      return 'Check Status';
    case 'Expired':
      return 'Request New Offer';
    case 'Not Available':
      return 'Learn More';
    default:
      return 'Primary Action';
  }
});

const secondaryButtonLabel = computed(() => {
  if (props.secondaryButtonText) return props.secondaryButtonText;

  switch (props.status) {
    case 'Requested':
      return 'Cancel Request';
    default:
      return 'Secondary Action';
  }
});

// Button visibility logic
const showPrimaryButton = computed(() => {
  if (props.hidePrimaryButton) return false;
  return true; // Always show primary unless explicitly hidden
});

const showSecondaryButton = computed(() => {
  if (props.hideSecondaryButton) return false;

  // Only show secondary button for "Requested" status by default
  switch (props.status) {
    case 'Requested':
      return true;
    default:
      return false;
  }
});

// DateTime visibility logic - hide for Expired and Not Available statuses
const shouldShowDateTime = computed(() => {
  // Never show date/time for Expired or Not Available statuses
  if (props.status === 'Expired' || props.status === 'Not Available') {
    return false;
  }
  return true;
});
</script>

<style scoped>
.ds-guaranteed-sale {
  display: flex;
  flex-direction: column;
  gap: 12px;
  min-width: 318px;
  padding: 16px;
  background-color: #ffffff;
  border: 1px solid #cfd8dc;
  border-radius: 12px;

  &.align-left {
    align-items: flex-start;

    .guaranteed-sale-header {
      align-items: flex-start;
    }

    .datetime-section,
    .actions-section {
      align-items: flex-start;
    }
  }
}

.guaranteed-sale-header {
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: center;
  width: 100%;
}

.header-title {
  display: flex;
  gap: 2px;
  align-items: center;
  height: 20px;

  .title-text {
    font-family: 'Roboto', sans-serif;
    font-size: 12px;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: 0.4px;
    color: rgba(0, 0, 0, 0.87);
  }

  .tooltip-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: color 0.2s ease;
    color: rgba(0, 0, 0, 0.54);

    &:hover {
      color: rgba(0, 0, 0, 0.87);
    }
  }
}

.header-value {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0;
  height: 32px;
  font-family: 'Roboto', sans-serif;
  font-size: 24px;
  font-weight: 500;
  line-height: 32px;
  color: rgba(0, 0, 0, 0.87);

  .currency-symbol {
    display: inline;
  }

  .amount {
    display: inline;
  }
}

/* Status Badge Styling */
.status-badge {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 16px;
  padding: 0 12px;
  border-radius: 4px;
  background-color: #f3fcf9;
  border: 1px solid #99dbc8;

  .status-text {
    font-family: 'Roboto', sans-serif;
    font-size: 10px;
    font-weight: 400;
    line-height: 20px;
    color: #2d7654;
    white-space: nowrap;
  }

  &.status-available,
  &.status-accepted {
    background-color: #f3fcf9;
    border-color: #99dbc8;
    .status-text {
      color: #2d7654;
    }
  }

  &.status-expired {
    background-color: #fee2e2;
    border-color: #fca5a5;
    .status-text {
      color: #991b1b;
    }
  }

  &.status-not-available {
    background-color: #f3f4f6;
    border-color: #d1d5db;
    .status-text {
      color: #4b5563;
    }
  }

  &.status-requested {
    background-color: #dbeafe;
    border-color: #93c5fd;
    .status-text {
      color: #1e40af;
    }
  }
}

/* DateTime Section */
.datetime-section {
  display: flex;
  flex-direction: column;
  gap: 0;
  align-items: center;
  width: 100%;
}

.datetime-row {
  display: flex;
  gap: 4px;
  align-items: center;
  justify-content: center;
  height: 20px;
  width: 100%;

  .datetime-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .label {
    font-family: 'Roboto', sans-serif;
    font-size: 12px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0.4px;
    color: rgba(0, 0, 0, 0.6);
    white-space: nowrap;
  }

  .value {
    font-family: 'Roboto', sans-serif;
    font-size: 12px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0.4px;
    color: rgba(0, 0, 0, 0.6);
    white-space: nowrap;
  }

  .separator {
    font-family: 'Roboto', sans-serif;
    font-size: 12px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0.4px;
    color: rgba(0, 0, 0, 0.6);
  }

  .time-period {
    font-family: 'Roboto', sans-serif;
    font-size: 12px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0.4px;
    color: rgba(0, 0, 0, 0.6);
    white-space: nowrap;
  }

  .timezone {
    font-family: 'Roboto', sans-serif;
    font-size: 12px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0.4px;
    color: rgba(0, 0, 0, 0.6);
    white-space: nowrap;
  }
}

/* Actions Section */
.actions-section {
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding-top: 12px;
}

.primary-action-btn {
  /* Apply pill-shaped border radius from design tokens (9999px = full pill shape) */
  border-radius: 9999px;

  /* Typography from design system - DO NOT CHANGE */
  font-weight: 500;
  letter-spacing: 0.5px;
  text-transform: capitalize;
}

.secondary-action-btn {
  /* Apply pill-shaped border radius from design tokens (9999px = full pill shape) */
  border-radius: 9999px;

  /* Typography from design system - DO NOT CHANGE */
  font-weight: 500;
  letter-spacing: 0.5px;
  text-transform: capitalize;
}

.align-left .datetime-row {
  justify-content: flex-start;
}

.align-left .actions-section {
  justify-content: flex-start;
}
</style>
