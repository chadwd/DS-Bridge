/**
 * Custom VitePress Theme
 * Integrates DS-Bridge design system tokens with VitePress
 */
import DefaultTheme from 'vitepress/theme';
import Layout from './Layout.vue';
import './style.css';

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    // Register any custom components here if needed
  },
};
