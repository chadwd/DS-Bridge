/**
 * Custom VitePress Theme
 * Integrates DS-Bridge design system tokens with VitePress + Vuetify
 */
import DefaultTheme from 'vitepress/theme';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import 'vuetify/styles';

import Layout from './Layout.vue';
import './style.css';

// Import demo components
import ComponentDemo from '../components/ComponentDemo.vue';
import PropControl from '../components/PropControl.vue';
import CodePreview from '../components/CodePreview.vue';
import TronHomepage from '../components/TronHomepage.vue';

// Import design system components
import { DsButton } from '../../../src/components/index';

// Import tokens
import tokens from '../../../src/tokens/index';

// Create Vuetify instance with design system theme
const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        colors: {
          primary: tokens.colors.primary,
          primaryDark: tokens.colors.primaryDark,
          primaryLight: tokens.colors.primaryLight,
          secondary: tokens.colors.secondary,
          secondaryDark: tokens.colors.secondaryDark,
          error: tokens.colors.error,
          warning: tokens.colors.warning,
          success: tokens.colors.success,
          info: tokens.colors.info,
          surface: tokens.colors.surface,
          background: tokens.colors.background,
        },
      },
    },
  },
});

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    // Install Vuetify
    app.use(vuetify);

    // Register demo components globally
    app.component('ComponentDemo', ComponentDemo);
    app.component('PropControl', PropControl);
    app.component('CodePreview', CodePreview);
    app.component('TronHomepage', TronHomepage);

    // Register design system components globally
    app.component('DsButton', DsButton);
  },
};
