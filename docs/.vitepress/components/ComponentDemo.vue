<template>
  <div class="component-demo">
    <div class="demo-header">
      <h3>{{ title || 'Interactive Demo' }}</h3>
      <p v-if="description" class="demo-description">{{ description }}</p>
    </div>

    <div class="demo-container">
      <div class="demo-preview">
        <slot name="demo" />
      </div>

      <div v-if="$slots.controls" class="demo-controls">
        <h4>Controls</h4>
        <slot name="controls" />
      </div>
    </div>

    <div v-if="$slots.code" class="demo-code">
      <div class="code-header">
        <span>Code</span>
        <button @click="copyCode" class="copy-button" aria-label="Copy code to clipboard">
          {{ copied ? 'Copied!' : 'Copy' }}
        </button>
      </div>
      <div ref="codeContainer">
        <slot name="code" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

interface Props {
  title?: string;
  description?: string;
}

defineProps<Props>();

const copied = ref(false);
const codeContainer = ref<HTMLElement | null>(null);

const copyCode = async () => {
  if (!codeContainer.value) return;

  const codeElement = codeContainer.value.querySelector('pre code');
  if (!codeElement?.textContent) return;

  try {
    await navigator.clipboard.writeText(codeElement.textContent);
    copied.value = true;
    setTimeout(() => {
      copied.value = false;
    }, 2000);
  } catch (error) {
    console.error('Failed to copy code:', error);
  }
};
</script>

<style scoped>
.component-demo {
  margin: var(--ds-spacing-xxl, 2rem) 0;
  border: 1px solid var(--vp-c-divider);
  border-radius: var(--ds-radius-lg, 8px);
  overflow: hidden;
}

.demo-header {
  padding: var(--ds-spacing-lg, 1.5rem);
  background-color: var(--vp-c-bg-soft);
  border-bottom: 1px solid var(--vp-c-divider);
}

.demo-header h3 {
  margin: 0 0 var(--ds-spacing-sm, 0.5rem) 0;
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
}

.demo-description {
  margin: 0;
  color: var(--vp-c-text-2);
  font-size: 0.9rem;
}

.demo-container {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--ds-spacing-lg, 1.5rem);
  padding: var(--ds-spacing-xxl, 2rem);
  background-color: var(--vp-c-bg);
}

@media (min-width: 768px) {
  .demo-container {
    grid-template-columns: 2fr 1fr;
  }
}

.demo-preview {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 150px;
  padding: var(--ds-spacing-xxl, 2rem);
  border: 2px dashed var(--vp-c-divider);
  border-radius: var(--ds-radius-md, 6px);
  background-color: var(--vp-c-bg-soft);
}

.demo-controls {
  padding: var(--ds-spacing-lg, 1.5rem);
  background-color: var(--vp-c-bg-soft);
  border-radius: var(--ds-radius-md, 6px);
}

.demo-controls h4 {
  margin: 0 0 var(--ds-spacing-md, 1rem) 0;
  font-size: 1rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
}

.demo-code {
  border-top: 1px solid var(--vp-c-divider);
}

.code-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--ds-spacing-sm, 0.75rem) var(--ds-spacing-lg, 1.5rem);
  background-color: var(--vp-c-bg-soft);
  border-bottom: 1px solid var(--vp-c-divider);
}

.code-header span {
  font-weight: 600;
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.copy-button {
  padding: var(--ds-spacing-xs, 0.25rem) var(--ds-spacing-sm, 0.75rem);
  font-size: 0.875rem;
  color: var(--vp-c-brand);
  background-color: transparent;
  border: 1px solid var(--vp-c-brand);
  border-radius: var(--ds-radius-sm, 4px);
  cursor: pointer;
  transition: all 0.2s ease;
}

.copy-button:hover {
  background-color: var(--vp-c-brand);
  color: white;
}

.demo-code :deep(pre) {
  margin: 0 !important;
  padding: var(--ds-spacing-md, 1.25rem) var(--ds-spacing-lg, 1.5rem) !important;
  background-color: var(--vp-code-block-bg) !important;
  overflow-x: auto;
  border-radius: 0;
}

.demo-code :deep(pre code) {
  display: block;
  font-family: var(--vp-font-family-mono);
  font-size: 14px;
  line-height: 24px;
  color: var(--vp-code-block-color, var(--vp-c-text-1));
  white-space: pre;
  background: transparent !important;
}

/* Dark mode code styling */
.dark .demo-code :deep(pre) {
  background-color: var(--ds-color-background-secondary) !important;
}

.dark .demo-code :deep(pre code) {
  color: var(--ds-color-text-high);
}
</style>
