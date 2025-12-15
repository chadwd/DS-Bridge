<template>
  <div class="prop-control">
    <!-- Vuetify Select for options -->
    <v-select
      v-if="options && options.length > 0"
      :label="label"
      :model-value="modelValue"
      @update:model-value="emit('update:modelValue', $event)"
      :items="options"
      variant="outlined"
      density="compact"
      hide-details
    />

    <!-- Checkbox for boolean -->
    <div v-else-if="type === 'boolean'" class="boolean-control">
      <label :for="id" class="prop-label">
        {{ label }}
      </label>
      <input
        :id="id"
        type="checkbox"
        :checked="modelValue"
        @change="handleBooleanChange"
        class="prop-checkbox"
      />
    </div>

    <!-- Text input for string/number -->
    <v-text-field
      v-else
      :label="label"
      :type="type === 'number' ? 'number' : 'text'"
      :model-value="modelValue"
      @update:model-value="handleInputChange"
      variant="outlined"
      density="compact"
      :placeholder="placeholder"
      hide-details
    />

    <p v-if="description" class="prop-description">{{ description }}</p>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  label: string;
  modelValue: any;
  options?: string[];
  type?: 'text' | 'number' | 'boolean';
  required?: boolean;
  description?: string;
  placeholder?: string;
}

const props = withDefaults(defineProps<Props>(), {
  type: 'text',
  required: false,
});

const emit = defineEmits<{
  'update:modelValue': [value: any];
}>();

const id = computed(() => {
  return `prop-${props.label.toLowerCase().replace(/\s+/g, '-')}`;
});

const handleInputChange = (value: any) => {
  const finalValue = props.type === 'number' ? Number(value) : value;
  emit('update:modelValue', finalValue);
};

const handleBooleanChange = (event: Event) => {
  const target = event.target as HTMLInputElement;
  emit('update:modelValue', target.checked);
};
</script>

<style scoped>
.prop-control {
  margin-bottom: 1rem;
}

.boolean-control {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.prop-label {
  display: block;
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--vp-c-text-1);
  margin: 0;
}

.prop-checkbox {
  width: 1.25rem;
  height: 1.25rem;
  cursor: pointer;
  accent-color: var(--vp-c-brand);
}

.prop-description {
  margin: 0.5rem 0 0 0;
  font-size: 0.75rem;
  color: var(--vp-c-text-2);
  font-style: italic;
}

/* Vuetify component overrides for dark mode consistency */
.prop-control :deep(.v-select),
.prop-control :deep(.v-text-field) {
  font-size: 0.875rem;
}

.prop-control :deep(.v-field__input) {
  font-size: 0.875rem;
  min-height: auto;
}

.prop-control :deep(.v-field--variant-outlined) {
  --v-field-border-opacity: 1;
}
</style>
