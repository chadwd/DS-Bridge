<template>
  <div class="code-preview">
    <div class="preview-tabs">
      <button
        :class="['tab', { active: activeTab === 'preview' }]"
        @click="activeTab = 'preview'"
      >
        Preview
      </button>
      <button
        :class="['tab', { active: activeTab === 'code' }]"
        @click="activeTab = 'code'"
      >
        Code
      </button>
      <button
        v-if="activeTab === 'code'"
        @click="copyCode"
        class="copy-button"
      >
        {{ copied ? 'Copied!' : 'Copy' }}
      </button>
    </div>

    <div class="preview-content">
      <div v-show="activeTab === 'preview'" class="preview-pane">
        <slot name="preview"></slot>
      </div>

      <div v-show="activeTab === 'code'" class="code-pane">
        <slot name="code"></slot>
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

const copyCode = () => {
  const codeElement = document.querySelector('.code-pane pre code');
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
.code-preview {
  margin: 1.5rem 0;
  border: 1px solid var(--vp-c-divider);
  border-radius: var(--ds-radius-md, 6px);
  overflow: hidden;
}

.preview-tabs {
  display: flex;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  background-color: var(--vp-c-bg-soft);
  border-bottom: 1px solid var(--vp-c-divider);
}

.tab {
  padding: 0.5rem 1rem;
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
  padding: 0.5rem 1rem;
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
  padding: 2rem;
  background-color: var(--vp-c-bg);
  display: flex;
  align-items: center;
  justify-content: center;
}

.code-pane {
  background-color: var(--vp-c-bg-alt);
}

.code-pane :deep(pre) {
  margin: 0;
  padding: 1.5rem;
  background-color: transparent !important;
}
</style>
