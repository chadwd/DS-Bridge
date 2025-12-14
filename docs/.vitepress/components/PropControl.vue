<template>
  <div class="prop-control">
    <label :for="id" class="prop-label">
      {{ label }}
      <span v-if="required" class="required">*</span>
    </label>

    <!-- Select dropdown for options -->
    <select
      v-if="options && options.length > 0"
      :id="id"
      :value="modelValue"
      @change="handleChange"
      class="prop-select"
    >
      <option v-for="option in options" :key="option" :value="option">
        {{ option }}
      </option>
    </select>

    <!-- Checkbox for boolean -->
    <input
      v-else-if="type === 'boolean'"
      :id="id"
      type="checkbox"
      :checked="modelValue"
      @change="handleBooleanChange"
      class="prop-checkbox"
    />

    <!-- Text input for string/number -->
    <input
      v-else
      :id="id"
      :type="type === 'number' ? 'number' : 'text'"
      :value="modelValue"
      @input="handleInput"
      class="prop-input"
      :placeholder="placeholder"
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

const handleChange = (event: Event) => {
  const target = event.target as HTMLSelectElement;
  emit('update:modelValue', target.value);
};

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement;
  const value = props.type === 'number' ? Number(target.value) : target.value;
  emit('update:modelValue', value);
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

.prop-label {
  display: block;
  margin-bottom: 0.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--vp-c-text-1);
}

.required {
  color: var(--vp-c-danger);
  margin-left: 0.25rem;
}

.prop-select,
.prop-input {
  width: 100%;
  padding: 0.5rem 0.75rem;
  font-size: 0.875rem;
  color: var(--vp-c-text-1);
  background-color: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
  border-radius: var(--ds-radius-sm, 4px);
  transition: border-color 0.2s ease;
}

.prop-select:focus,
.prop-input:focus {
  outline: none;
  border-color: var(--vp-c-brand);
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
</style>
