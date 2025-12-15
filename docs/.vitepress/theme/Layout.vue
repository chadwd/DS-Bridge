<template>
  <v-app>
    <Layout>
      <!-- Custom layout enhancements can be added here -->
      <template #doc-before>
        <!-- Content before the main document -->
      </template>

      <template #doc-after>
        <!-- Content after the main document -->
      </template>

      <template #aside-outline-before>
        <!-- Content before the outline in the aside -->
      </template>

      <template #aside-outline-after>
        <!-- Content after the outline in the aside -->
      </template>
    </Layout>
  </v-app>
</template>

<script setup>
import { useData } from 'vitepress';
import { useTheme } from 'vuetify';
import { watch, onMounted } from 'vue';
import DefaultTheme from 'vitepress/theme';

const { Layout } = DefaultTheme;
const { isDark } = useData();
const theme = useTheme();

// Sync Vuetify theme with VitePress dark mode
const syncTheme = () => {
  theme.global.name.value = isDark.value ? 'dark' : 'light';
};

// Watch for dark mode changes
watch(isDark, syncTheme, { immediate: true });

// Sync on mount
onMounted(syncTheme);
</script>

<style scoped>
/* Custom layout-specific styles */
</style>
