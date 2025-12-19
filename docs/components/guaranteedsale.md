# GuaranteedSale Component

## Overview

The `DsGuaranteedSale` component displays a guaranteed offer with current value, status badge, datetime information, and action buttons. It provides a clean, professional presentation for guaranteed sale offers with flexible alignment options (center or left).

This enterprise component is ideal for real estate, automotive, and marketplace applications where guaranteed pricing needs to be prominently displayed with clear status indicators and actionable controls.

### When to Use

- **Real Estate Applications**: Display guaranteed home offers with acceptance status
- **Automotive Marketplaces**: Show guaranteed trade-in or purchase values
- **Enterprise Dashboards**: Present time-sensitive guaranteed pricing with expiration dates
- **Transaction Workflows**: Guide users through offer acceptance, review, or cancellation flows
- **Status Tracking**: Monitor pricing requests with visual status indicators

### When NOT to Use

- **Static Pricing Displays** - Use a simple Card or pricing component instead
- **Non-Guaranteed Values** - This component implies a commitment; use estimates/quotes components for non-binding prices
- **Simple Call-to-Action** - Use a Button component if you don't need status tracking
- **Multiple Offers Side-by-Side** - Consider a comparison table or grid layout instead

### Key Features

- **5 Status States**: Available, Accepted, Requested, Expired, Not Available
- **Smart Button Labels**: Context-aware button text based on status (with override capability)
- **Flexible Date/Time Display**: Granular show/hide controls for updated and expires timestamps
- **Dual Alignment Modes**: Center or left alignment for various layout contexts
- **Full Customization**: 20 props for complete control over appearance and behavior
- **WCAG 2.1 AAA Compliant**: Meets highest accessibility standards

<script setup>
import { ref, computed, onMounted } from 'vue';

// Interactive demo state
const priceValue = ref('22,500');
const status = ref('Accepted');
const align = ref('center');
const showDateTime = ref(true);
const updatedDate = ref('Nov 3, 2025');
const updatedTime = ref('10:55:04');
const timePeriod = ref('a.m.');
const timezone = ref('EST');
const expiresDate = ref('Nov 3, 2025');
const showUpdatedDate = ref(true);
const showUpdatedTime = ref(true);
const showExpiresDate = ref(true);

// Loading state for "With Loading State" example
const isLoading = ref(false);

// Disable date/time controls for Expired and Not Available statuses
const isDateTimeDisabled = computed(() => {
  return status.value === 'Expired' || status.value === 'Not Available';
});

const generatedCode = computed(() => {
  const props = [];
  if (priceValue.value !== '22,500') props.push(`price-value="${priceValue.value}"`);
  if (status.value !== 'Accepted') props.push(`status="${status.value}"`);
  if (align.value !== 'center') props.push(`align="${align.value}"`);
  if (showDateTime.value === false) props.push(':show-date-time="false"');
  if (updatedDate.value !== 'Nov 3, 2025') props.push(`updated-date="${updatedDate.value}"`);
  if (updatedTime.value !== '10:55:04') props.push(`updated-time="${updatedTime.value}"`);
  if (timePeriod.value !== 'a.m.') props.push(`time-period="${timePeriod.value}"`);
  if (timezone.value !== 'EST') props.push(`timezone="${timezone.value}"`);
  if (expiresDate.value !== 'Nov 3, 2025') props.push(`expires-date="${expiresDate.value}"`);
  if (showUpdatedDate.value === false) props.push(':show-updated-date="false"');
  if (showUpdatedTime.value === false) props.push(':show-updated-time="false"');
  if (showExpiresDate.value === false) props.push(':show-expires-date="false"');

  const propsString = props.length > 0 ? '\n    ' + props.join('\n    ') + '\n  ' : '';

  return `<template>
  <DsGuaranteedSale${propsString}
    @primary-action="handlePrimaryAction"
    @secondary-action="handleSecondaryAction"
  />
</template>

<script setup>
const handlePrimaryAction = () => {
  console.log('Primary action clicked!');
};

const handleSecondaryAction = () => {
  console.log('Secondary action clicked!');
};
<\/script>`;
});

// Loading state handler for usage example
const checkStatus = async () => {
  isLoading.value = true;
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 2000));
  isLoading.value = false;
  alert('Status checked!');
};

// Skeleton loading state
const isSkeletonLoading = ref(true);

// Auto-load skeleton after 3 seconds
onMounted(() => {
  setTimeout(() => {
    isSkeletonLoading.value = false;
  }, 3000);
});
</script>

## Interactive Demo

<ComponentDemo
  title="GuaranteedSale Playground"
  description="Customize the guaranteed sale offer using the controls below. Experiment with different values, statuses, alignment, and date/time options."
>
  <template #demo>
    <div style="padding: 1.5rem; background: var(--ds-color-background); border-radius: 8px; display: flex; justify-content: center;">
      <DsGuaranteedSale
        :price-value="priceValue"
        :status="status"
        :align="align"
        :show-date-time="showDateTime"
        :updated-date="updatedDate"
        :updated-time="updatedTime"
        :time-period="timePeriod"
        :timezone="timezone"
        :expires-date="expiresDate"
        :show-updated-date="showUpdatedDate"
        :show-updated-time="showUpdatedTime"
        :show-expires-date="showExpiresDate"
      />
    </div>
  </template>

  <template #controls>
    <PropControl
      label="Price Value"
      v-model="priceValue"
      type="text"
      placeholder="e.g., 22,500"
      description="The guaranteed sale amount (without $)"
    />
    <PropControl
      label="Status"
      v-model="status"
      :options="['Available', 'Accepted', 'Requested', 'Expired', 'Not Available']"
      description="Current status badge"
    />
    <PropControl
      label="Alignment"
      v-model="align"
      :options="['center', 'left']"
      description="Layout alignment for content"
    />
    <PropControl
      label="Show DateTime"
      v-model="showDateTime"
      type="boolean"
      :disabled="isDateTimeDisabled"
      description="Display date/time information section (disabled for Expired and Not Available statuses)"
    />
    <PropControl
      v-if="showDateTime"
      label="Show Updated Date"
      v-model="showUpdatedDate"
      type="boolean"
      :disabled="isDateTimeDisabled"
      description="Display the updated date in the datetime section"
    />
    <PropControl
      v-if="showDateTime"
      label="Show Updated Time"
      v-model="showUpdatedTime"
      type="boolean"
      :disabled="isDateTimeDisabled"
      description="Display the updated time in the datetime section"
    />
    <PropControl
      v-if="showDateTime"
      label="Show Expires Date"
      v-model="showExpiresDate"
      type="boolean"
      :disabled="isDateTimeDisabled"
      description="Display the expires date in the datetime section"
    />
    <PropControl
      v-if="showDateTime && showUpdatedDate"
      label="Updated Date"
      v-model="updatedDate"
      type="text"
      :disabled="isDateTimeDisabled"
      placeholder="e.g., Nov 3, 2025"
      description="Update date string"
    />
    <PropControl
      v-if="showDateTime && showUpdatedTime"
      label="Updated Time"
      v-model="updatedTime"
      type="text"
      :disabled="isDateTimeDisabled"
      placeholder="e.g., 10:55:04"
      description="Update time string"
    />
    <PropControl
      v-if="showDateTime && showUpdatedTime"
      label="Time Period"
      v-model="timePeriod"
      :options="['a.m.', 'p.m.']"
      :disabled="isDateTimeDisabled"
      description="AM/PM indicator"
    />
    <PropControl
      v-if="showDateTime && showUpdatedTime"
      label="Timezone"
      v-model="timezone"
      :options="['PST', 'MST', 'CST', 'EST']"
      :disabled="isDateTimeDisabled"
      description="Timezone abbreviation"
    />
    <PropControl
      v-if="showDateTime && showExpiresDate"
      label="Expires Date"
      v-model="expiresDate"
      type="text"
      :disabled="isDateTimeDisabled"
      placeholder="e.g., Nov 3, 2025"
      description="Expiration date string"
    />
  </template>

  <template #code>
    <pre><code class="language-vue">{{ generatedCode }}</code></pre>
  </template>
</ComponentDemo>

## When to Use

Use GuaranteedSale for:
- Displaying guaranteed offer values in real estate or automotive contexts
- Showing current offer value with acceptance status
- Presenting time-sensitive offers with expiration dates
- Providing users with key transaction information and action buttons
- Enterprise dashboards where guaranteed values need prominent display

## Alignment Options

<CodePreview>
  <template #preview>
    <div style="display: flex; gap: 2rem; flex-wrap: wrap;">
      <div>
        <h3 style="margin-bottom: 0.5rem; font-size: 0.875rem; color: rgba(0,0,0,0.6);">Center Alignment</h3>
        <DsGuaranteedSale align="center" />
      </div>
      <div>
        <h3 style="margin-bottom: 0.5rem; font-size: 0.875rem; color: rgba(0,0,0,0.6);">Left Alignment</h3>
        <DsGuaranteedSale align="left" />
      </div>
    </div>
  </template>
  <template #code>

```vue
<!-- Center Alignment (default) -->
<template>
  <DsGuaranteedSale align="center" />
</template>

<!-- Left Alignment -->
<template>
  <DsGuaranteedSale align="left" />
</template>
```

  </template>
</CodePreview>

## Status Variations

<CodePreview>
  <template #preview>
    <div style="display: grid; gap: 1rem; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));">
      <DsGuaranteedSale status="Available" />
      <DsGuaranteedSale status="Accepted" />
      <DsGuaranteedSale status="Requested" />
      <DsGuaranteedSale status="Expired" />
      <DsGuaranteedSale status="Not Available" />
    </div>
  </template>
  <template #code>

```vue
<template>
  <DsGuaranteedSale status="Available" />
  <DsGuaranteedSale status="Accepted" />
  <DsGuaranteedSale status="Requested" />
  <DsGuaranteedSale status="Expired" />
  <DsGuaranteedSale status="Not Available" />
</template>
```

  </template>
</CodePreview>

## Usage Examples

### Basic Usage

<CodePreview>
  <template #preview>
    <div style="display: flex; justify-content: center; padding: 1.5rem;">
      <DsGuaranteedSale
        price-value="25,000"
        status="Available"
        @primary-action="() => alert('Offer accepted!')"
      />
    </div>
  </template>
  <template #code>

```vue
<template>
  <DsGuaranteedSale
    price-value="25,000"
    status="Available"
    @primary-action="handleAcceptOffer"
  />
</template>

<script setup>
const handleAcceptOffer = () => {
  console.log('Offer accepted!');
  // Handle offer acceptance logic
};
</script>
```

  </template>
</CodePreview>

### Custom Button Labels

<CodePreview>
  <template #preview>
    <div style="display: flex; justify-content: center; padding: 1.5rem;">
      <DsGuaranteedSale
        price-value="18,500"
        status="Accepted"
        primary-button-text="View Contract"
        @primary-action="() => alert('Navigating to contract...')"
      />
    </div>
  </template>
  <template #code>

```vue
<template>
  <DsGuaranteedSale
    price-value="18,500"
    status="Accepted"
    primary-button-text="View Contract"
    @primary-action="viewContract"
  />
</template>

<script setup>
const viewContract = () => {
  // Navigate to contract view
};
</script>
```

  </template>
</CodePreview>

### With Loading State

<CodePreview>
  <template #preview>
    <div style="display: flex; justify-content: center; padding: 1.5rem;">
      <DsGuaranteedSale
        price-value="30,000"
        status="Requested"
        :primary-button-loading="isLoading"
        @primary-action="checkStatus"
        @secondary-action="() => alert('Request cancelled')"
      />
    </div>
  </template>
  <template #code>

```vue
<template>
  <DsGuaranteedSale
    price-value="30,000"
    status="Requested"
    :primary-button-loading="isLoading"
    @primary-action="checkStatus"
    @secondary-action="cancelRequest"
  />
</template>

<script setup>
import { ref } from 'vue';

const isLoading = ref(false);

const checkStatus = async () => {
  isLoading.value = true;
  // API call to check status
  await fetch('/api/offer-status');
  isLoading.value = false;
};

const cancelRequest = () => {
  // Handle cancellation
};
</script>
```

  </template>
</CodePreview>

### Skeleton Loading State

<CodePreview>
  <template #preview>
    <div style="display: flex; justify-content: center; padding: 1.5rem;">
      <div v-if="isSkeletonLoading" style="width: 100%; max-width: 350px;">
        <div style="background: white; border-radius: 8px; padding: 1.5rem; display: flex; flex-direction: column; gap: 1rem;">
          <!-- Header skeleton -->
          <div style="display: flex; flex-direction: column; gap: 0.5rem; align-items: center;">
            <v-skeleton-loader type="text" width="100px" />
            <v-skeleton-loader type="text" width="150px" />
            <v-skeleton-loader type="chip" width="120px" />
          </div>
          <!-- DateTime skeleton -->
          <div style="display: flex; flex-direction: column; gap: 0.5rem;">
            <v-skeleton-loader type="text" width="100%" />
            <v-skeleton-loader type="text" width="100%" />
          </div>
          <!-- Button skeleton -->
          <div style="display: flex; gap: 0.5rem; justify-content: center;">
            <v-skeleton-loader type="button" width="140px" />
          </div>
        </div>
      </div>
      <div v-else>
        <DsGuaranteedSale
          price-value="27,500"
          status="Available"
        />
      </div>
    </div>
  </template>
  <template #code>

```vue
<template>
  <div v-if="isLoading">
    <!-- Skeleton loading state -->
    <div style="background: white; border-radius: 8px; padding: 1.5rem; display: flex; flex-direction: column; gap: 1rem;">
      <!-- Header skeleton -->
      <div style="display: flex; flex-direction: column; gap: 0.5rem; align-items: center;">
        <v-skeleton-loader type="text" width="100px" />
        <v-skeleton-loader type="text" width="150px" />
        <v-skeleton-loader type="chip" width="120px" />
      </div>
      <!-- DateTime skeleton -->
      <div style="display: flex; flex-direction: column; gap: 0.5rem;">
        <v-skeleton-loader type="text" width="100%" />
        <v-skeleton-loader type="text" width="100%" />
      </div>
      <!-- Button skeleton -->
      <div style="display: flex; gap: 0.5rem; justify-content: center;">
        <v-skeleton-loader type="button" width="140px" />
      </div>
    </div>
  </div>
  <div v-else>
    <!-- Actual component -->
    <DsGuaranteedSale
      :price-value="priceValue"
      :status="status"
      @primary-action="handlePrimaryAction"
    />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const priceValue = ref('27,500');
const status = ref('Available');
const isLoading = ref(true);

onMounted(() => {
  // Simulate data loading
  setTimeout(() => {
    isLoading.value = false;
  }, 2000);
});

const handlePrimaryAction = () => {
  console.log('Offer accepted!');
};
</script>
```

This demonstrates how to use Vuetify's `v-skeleton-loader` component to create a loading placeholder while data is being fetched, then swap it with the actual GuaranteedSale component once data is ready.

  </template>
</CodePreview>

### Left Alignment in Dashboard

<CodePreview>
  <template #preview>
    <div style="display: flex; justify-content: center; padding: 1.5rem;">
      <DsGuaranteedSale
        align="left"
        price-value="22,500"
        status="Available"
        updated-date="Dec 18, 2025"
        updated-time="14:30:00"
        time-period="p.m."
        timezone="PST"
        expires-date="Dec 25, 2025"
      />
    </div>
  </template>
  <template #code>

```vue
<template>
  <DsGuaranteedSale
    align="left"
    price-value="22,500"
    status="Available"
    updated-date="Dec 18, 2025"
    updated-time="14:30:00"
    time-period="p.m."
    timezone="PST"
    expires-date="Dec 25, 2025"
  />
</template>
```

  </template>
</CodePreview>

### Conditional Date/Time Display

<CodePreview>
  <template #preview>
    <div style="display: flex; justify-content: center; padding: 1.5rem;">
      <DsGuaranteedSale
        price-value="19,800"
        status="Accepted"
        :show-updated-time="false"
        :show-expires-date="false"
      />
    </div>
  </template>
  <template #code>

```vue
<template>
  <DsGuaranteedSale
    price-value="19,800"
    status="Accepted"
    :show-updated-time="false"
    :show-expires-date="false"
  />
</template>
```

This displays only the updated date without time or expiration information.

  </template>
</CodePreview>

## API Reference

### Props

#### Core Props

| Name         | Type    | Default        | Description                                                    |
| ------------ | ------- | -------------- | -------------------------------------------------------------- |
| priceValue   | String  | '22,500'       | The guaranteed sale amount (displays as $amount)               |
| status       | String  | 'Accepted'     | Status badge: 'Available', 'Accepted', 'Requested', 'Expired', 'Not Available' |
| align        | String  | 'center'       | Layout alignment: 'center' or 'left'                           |
| showDateTime | Boolean | true           | Whether to display the date/time section (auto-hides for Expired/Not Available) |
| updatedDate  | String  | 'Nov 3, 2025'  | Date string for updated timestamp                              |
| updatedTime  | String  | '10:55:04'     | Time string for updated timestamp                              |
| timePeriod   | String  | 'a.m.'         | AM/PM indicator: 'a.m.' or 'p.m.'                              |
| timezone     | String  | 'EST'          | Timezone: 'PST', 'MST', 'CST', or 'EST'                        |
| expiresDate  | String  | 'Nov 3, 2025'  | Date string for expiration                                     |

#### DateTime Visibility Props

| Name             | Type    | Default | Description                                                    |
| ---------------- | ------- | ------- | -------------------------------------------------------------- |
| showUpdatedDate  | Boolean | true    | Toggle display of updated date in datetime section             |
| showUpdatedTime  | Boolean | true    | Toggle display of updated time in datetime section             |
| showExpiresDate  | Boolean | true    | Toggle display of expires date in datetime section             |

#### Button Customization Props

| Name                    | Type    | Default     | Description                                                    |
| ----------------------- | ------- | ----------- | -------------------------------------------------------------- |
| primaryButtonText       | String  | (dynamic)   | Override default primary button label (based on status if not provided) |
| secondaryButtonText     | String  | (dynamic)   | Override default secondary button label (based on status if not provided) |
| hidePrimaryButton       | Boolean | false       | Hide the primary action button                                 |
| hideSecondaryButton     | Boolean | false       | Hide the secondary action button                               |
| primaryButtonDisabled   | Boolean | false       | Disable the primary action button                              |
| secondaryButtonDisabled | Boolean | false       | Disable the secondary action button                            |
| primaryButtonLoading    | Boolean | false       | Show loading spinner on primary button                         |
| secondaryButtonLoading  | Boolean | false       | Show loading spinner on secondary button                       |

### Events

| Name            | Payload | Description              |
| --------------- | ------- | ------------------------ |
| primary-action  | -       | Emitted when primary action button is clicked |
| secondary-action| -       | Emitted when secondary action button is clicked |

## Accessibility

- ✅ WCAG 2.1 AAA compliant
- ✅ Semantic HTML structure with proper heading hierarchy
- ✅ Icon labels for screen reader compatibility
- ✅ Keyboard navigation support on action buttons
- ✅ Proper color contrast for all text and status badges
- ✅ Clear visual status indicators with text labels (not color-only)

## Related Components

- [Button](/components/button) - For custom action buttons
- [Card](/components/card) - For surrounding container layouts
