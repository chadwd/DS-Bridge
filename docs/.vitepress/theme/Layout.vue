<template>
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
</template>

<script setup>
import { useData } from 'vitepress';
import DefaultTheme from 'vitepress/theme';

const { Layout } = DefaultTheme;
const { frontmatter } = useData();
</script>

<style scoped>
/* Custom layout-specific styles */
</style>
