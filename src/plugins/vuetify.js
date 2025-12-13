import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import tokens from '../tokens/index.js';

export default createVuetify({
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
          textHigh: tokens.colors.textHigh,
          textMedium: tokens.colors.textMedium,
          textLow: tokens.colors.textLow,
          divider: tokens.colors.divider,
        },
      },
      dark: {
        colors: {
          primary: tokens.colors.primaryLight,
          primaryDark: tokens.colors.primary,
          primaryLight: tokens.colors.primaryLighter,
          secondary: tokens.colors.secondary,
          secondaryDark: tokens.colors.secondaryDark,
          error: tokens.colors.error,
          warning: tokens.colors.warning,
          success: tokens.colors.success,
          info: tokens.colors.info,
          surface: '#1F2937',
          background: '#111827',
          textHigh: '#FFFFFF',
          textMedium: '#D1D5DB',
          textLow: '#6B7280',
          divider: '#374151',
        },
      },
    },
  },
});
