<template>
  <div class="code-preview">
    <div class="preview-tabs">
      <button
        :class="['tab', { active: activeTab === 'preview' }]"
        @click="activeTab = 'preview'"
        aria-label="Show preview"
      >
        Preview
      </button>
      <button
        :class="['tab', { active: activeTab === 'code' }]"
        @click="activeTab = 'code'"
        aria-label="Show code"
      >
        Code
      </button>
      <button
        v-if="activeTab === 'code'"
        @click="copyCode"
        class="copy-button"
        aria-label="Copy code to clipboard"
      >
        {{ copied ? 'Copied!' : 'Copy' }}
      </button>
    </div>

    <div class="preview-content">
      <div v-show="activeTab === 'preview'" class="preview-pane">
        <slot name="preview" />
      </div>

      <div v-show="activeTab === 'code'" class="code-pane" ref="codeContainer">
        <slot name="code" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

interface Props {
  defaultTab?: 'preview' | 'code';
}

const props = withDefaults(defineProps<Props>(), {
  defaultTab: 'preview',
});

const activeTab = ref(props.defaultTab);
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
.code-preview {
  margin: var(--ds-spacing-lg, 1.5rem) 0;
  border: 1px solid var(--vp-c-divider);
  border-radius: var(--ds-radius-md, 6px);
  overflow: hidden;
}

.preview-tabs {
  display: flex;
  gap: var(--ds-spacing-sm, 0.5rem);
  padding: var(--ds-spacing-sm, 0.75rem) var(--ds-spacing-md, 1rem);
  background-color: var(--vp-c-bg-soft);
  border-bottom: 1px solid var(--vp-c-divider);
}

.tab {
  padding: var(--ds-spacing-sm, 0.5rem) var(--ds-spacing-md, 1rem);
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--vp-c-text-2);
  background-color: transparent;
  border: none;
  border-radius: var(--ds-radius-sm, 4px);
  cursor: pointer;
  transition: all 0.2s ease;
}

.tab:hover {
  color: var(--vp-c-text-1);
  background-color: var(--vp-c-bg);
}

.tab.active {
  color: var(--vp-c-brand);
  background-color: var(--vp-c-bg);
}

.copy-button {
  margin-left: auto;
  padding: var(--ds-spacing-sm, 0.5rem) var(--ds-spacing-md, 1rem);
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

.preview-content {
  min-height: 200px;
}

.preview-pane {
  padding: var(--ds-spacing-xxl, 2rem);
  background-color: var(--vp-c-bg);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  /* Ensure ripple effects work correctly */
  isolation: auto;
}

.code-pane {
  background-color: var(--vp-c-bg-alt);
}

.code-pane :deep(pre) {
  margin: 0;
  padding: var(--ds-spacing-lg, 1.5rem);
  background-color: transparent !important;
}
</style>
