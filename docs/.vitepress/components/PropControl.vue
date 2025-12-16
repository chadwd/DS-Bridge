<template>
  <div class="prop-control">
    <!-- Vuetify Select for options -->
    <v-select
      v-if="options && options.length > 0"
      :label="label"
      :model-value="modelValue"
      @update:model-value="handleUpdate"
      :items="options"
      variant="outlined"
      density="compact"
      hide-details
    />

    <!-- Vuetify Checkbox for boolean (consistent with other controls) -->
    <v-checkbox
      v-else-if="type === 'boolean'"
      :label="label"
      :model-value="modelValue"
      @update:model-value="handleUpdate"
      density="compact"
      hide-details
      color="primary"
    />

    <!-- Text/Number input -->
    <v-text-field
      v-else
      :label="label"
      :type="type === 'number' ? 'number' : 'text'"
      :model-value="modelValue"
      @update:model-value="handleUpdate"
      variant="outlined"
      density="compact"
      :placeholder="placeholder"
      hide-details
    />

    <p v-if="description" class="prop-description">{{ description }}</p>
  </div>
</template>

<script setup lang="ts">
interface Props {
  label: string;
  modelValue: string | number | boolean;
  options?: string[];
  type?: 'text' | 'number' | 'boolean';
  required?: boolean;
  description?: string;
  placeholder?: string;
}

withDefaults(defineProps<Props>(), {
  type: 'text',
  required: false,
});

const emit = defineEmits<{
  'update:modelValue': [value: string | number | boolean];
}>();

const handleUpdate = (value: string | number | boolean) => {
  emit('update:modelValue', value);
};
</script>

<style scoped>
.prop-control {
  margin-bottom: 1rem;
}

.prop-description {
  margin: 0.5rem 0 0 0;
  font-size: 0.75rem;
  color: var(--vp-c-text-2);
  font-style: italic;
}

/* Vuetify component overrides for dark mode consistency */
.prop-control :deep(.v-select),
.prop-control :deep(.v-text-field),
.prop-control :deep(.v-checkbox) {
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
