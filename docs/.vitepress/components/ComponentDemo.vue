<template>
  <div class="component-demo">
    <div class="demo-header">
      <h3>{{ title || 'Interactive Demo' }}</h3>
      <p v-if="description" class="demo-description">{{ description }}</p>
    </div>

    <div class="demo-container">
      <div class="demo-preview">
        <slot name="demo"></slot>
      </div>

      <div v-if="$slots.controls" class="demo-controls">
        <h4>Controls</h4>
        <slot name="controls"></slot>
      </div>
    </div>

    <div v-if="$slots.code" class="demo-code">
      <div class="code-header">
        <span>Code</span>
        <button @click="copyCode" class="copy-button">
          {{ copied ? 'Copied!' : 'Copy' }}
        </button>
      </div>
      <slot name="code"></slot>
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

const copyCode = () => {
  // Get code content from slot
  const codeElement = document.querySelector('.demo-code pre code');
  if (codeElement) {
    const code = codeElement.textContent || '';
    navigator.clipboard.writeText(code);
    copied.value = true;
    setTimeout(() => {
      copied.value = false;
    }, 2000);
  }
};
</script>

<style scoped>
.component-demo {
  margin: 2rem 0;
  border: 1px solid var(--vp-c-divider);
  border-radius: var(--ds-radius-lg, 8px);
  overflow: hidden;
}

.demo-header {
  padding: 1.5rem;
  background-color: var(--vp-c-bg-soft);
  border-bottom: 1px solid var(--vp-c-divider);
}

.demo-header h3 {
  margin: 0 0 0.5rem 0;
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
  gap: 1.5rem;
  padding: 2rem;
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
  padding: 2rem;
  border: 2px dashed var(--vp-c-divider);
  border-radius: var(--ds-radius-md, 6px);
  background-color: var(--vp-c-bg-soft);
}

.demo-controls {
  padding: 1.5rem;
  background-color: var(--vp-c-bg-soft);
  border-radius: var(--ds-radius-md, 6px);
}

.demo-controls h4 {
  margin: 0 0 1rem 0;
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
  padding: 0.75rem 1.5rem;
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
  padding: 0.25rem 0.75rem;
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
  padding: 1.25rem 1.5rem !important;
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
