# GuaranteedSale Component

The `DsGuaranteedSale` component displays a guaranteed offer with current value, status badge, datetime information, and action buttons. It provides a clean, professional presentation for guaranteed sale offers with flexible alignment options (center or left).

<script setup>
import { ref, computed } from 'vue';

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
      description="Display date/time information section"
    />
    <PropControl
      label="Updated Date"
      v-model="updatedDate"
      type="text"
      placeholder="e.g., Nov 3, 2025"
      description="Update date string"
    />
    <PropControl
      label="Updated Time"
      v-model="updatedTime"
      type="text"
      placeholder="e.g., 10:55:04"
      description="Update time string"
    />
    <PropControl
      label="Time Period"
      v-model="timePeriod"
      :options="['a.m.', 'p.m.']"
      description="AM/PM indicator"
    />
    <PropControl
      label="Timezone"
      v-model="timezone"
      :options="['PST', 'MST', 'CST', 'EST']"
      description="Timezone abbreviation"
    />
    <PropControl
      label="Expires Date"
      v-model="expiresDate"
      type="text"
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
      <DsGuaranteedSale status="Available" :show-date-time="false" />
      <DsGuaranteedSale status="Accepted" :show-date-time="false" />
      <DsGuaranteedSale status="Requested" :show-date-time="false" />
      <DsGuaranteedSale status="Expired" :show-date-time="false" />
      <DsGuaranteedSale status="Not Available" :show-date-time="false" />
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

## API Reference

### Props

| Name         | Type    | Default        | Description                                                    |
| ------------ | ------- | -------------- | -------------------------------------------------------------- |
| priceValue   | String  | '22,500'       | The guaranteed sale amount (displays as $amount)               |
| status       | String  | 'Accepted'     | Status badge: 'Available', 'Accepted', 'Requested', 'Expired', 'Not Available' |
| align        | String  | 'center'       | Layout alignment: 'center' or 'left'                           |
| showDateTime | Boolean | true           | Whether to display the date/time section                       |
| updatedDate  | String  | 'Nov 3, 2025'  | Date string for updated timestamp                              |
| updatedTime  | String  | '10:55:04'     | Time string for updated timestamp                              |
| timePeriod   | String  | 'a.m.'         | AM/PM indicator: 'a.m.' or 'p.m.'                              |
| timezone     | String  | 'EST'          | Timezone: 'PST', 'MST', 'CST', or 'EST'                        |
| expiresDate  | String  | 'Nov 3, 2025'  | Date string for expiration                                     |

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
