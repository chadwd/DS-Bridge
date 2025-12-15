/**
 * Design System Tokens
 * Single source of truth for all design values (colors, spacing, typography)
 * Synced 1-to-1 with Figma design variables
 * @see https://www.figma.com/design/GKPD7KWPXqVvQMXaNY5Nvd/Official-Vuetify-3-UI-Kit
 */

// Figma Dynamic Colors
const figmaColors = {
  surface: '#FFFFFF',           // dynamic-full-surface (from Figma)
  onSurface: '#000000',         // dynamic-full-on-surface (from Figma)
  currentColor: '#000000',      // dynamic-full-current-color (from Figma)
  borderColor: '#000000',       // dynamic-full-border-color (from Figma)
} as const;

// Border Color from Figma
const figuraBorderColor = '#0000001f'; // Borders/border-color-root (from Figma)

export const colors = {
  // Figma dynamic colors (primary)
  ...figmaColors,

  // Primary brand colors (Tron Cyan)
  primary: '#0097A7',           // Cyan-700 (Tron inspired)
  primaryDark: '#00838F',        // Cyan-800
  primaryLight: '#00BCD4',       // Cyan-500
  primaryLighter: '#B2EBF2',     // Cyan-100

  // Secondary colors (Tron Deep Orange)
  secondary: '#FF6F00',          // Deep Orange-900
  secondaryDark: '#E65100',      // Deep Orange-A700
  secondaryLight: '#FF8F00',     // Deep Orange-800

  // Semantic colors
  error: '#DC2626',              // Red-600
  errorLight: '#FEE2E2',         // Red-100
  warning: '#F59E0B',            // Amber-500
  warningLight: '#FEF3C7',       // Amber-100
  success: '#10B981',            // Emerald-500
  successLight: '#D1FAE5',       // Emerald-100
  info: '#3B82F6',               // Blue-500
  infoLight: '#DBEAFE',          // Blue-100

  // Surface colors (from Figma)
  surfaceVariant: '#F3F4F6',     // Gray-100
  surfaceHover: '#F9FAFB',       // Gray-50

  // Background colors
  background: '#FFFFFF',
  backgroundSecondary: '#F9FAFB', // Gray-50

  // Text colors
  textHigh: '#111827',           // Gray-900 - Primary text (87% opacity effect)
  textMedium: '#6B7280',         // Gray-500 - Secondary text (60% opacity effect)
  textLow: '#D1D5DB',            // Gray-300 - Disabled/placeholder text
  textInverse: '#FFFFFF',        // For text on dark backgrounds

  // Neutral palette
  neutral: '#6B7280',            // Gray-500
  neutralLight: '#E5E7EB',       // Gray-200
  neutralDark: '#374151',        // Gray-700

  // Divider (from Figma)
  divider: figuraBorderColor,    // Borders/border-color-root
} as const;

export type ColorToken = typeof colors;

export const spacing = {
  xs: '4px',
  sm: '8px',
  md: '16px',
  lg: '24px',
  xl: '32px',
  xxl: '48px',
} as const;

export type SpacingToken = typeof spacing;

export const typography = {
  fontFamily: {
    // From Figma: Typography/body-font-family
    base: 'Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Arial, sans-serif',
    code: 'Menlo, Monaco, "Courier New", monospace',
  },
  fontSize: {
    xs: '12px',
    // From Figma: Typography/Sizes/font-size-14
    sm: '14px',
    base: '16px',
    lg: '18px',
    xl: '20px',
    '2xl': '24px',
    '3xl': '30px',
  },
  lineHeight: {
    tight: 1.2,
    normal: 1.5,
    relaxed: 1.75,
  },
  fontWeight: {
    light: 300,
    regular: 400,
    // From Figma: Typography/Weights/fw-medium-500
    medium: 500,
    semibold: 600,
    bold: 700,
  },
} as const;

export type TypographyToken = typeof typography;

export const borderRadius = {
  none: '0',
  xs: '4px',
  sm: '6px',
  md: '8px',
  lg: '12px',
  xl: '16px',
  // From Figma: rounded variable
  full: '9999px',
} as const;

export type BorderRadiusToken = typeof borderRadius;

export const shadows = {
  none: 'none',
  xs: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  sm: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
  base: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  md: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  lg: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  xl: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',

  // Figma Material Design Elevation tokens
  // Elevations/Elevation 00 dp - no shadow
  elevation00: '0 0 0 0 rgba(0, 0, 0, 0.2), 0 0 0 0 rgba(0, 0, 0, 0.14), 0 0 0 0 rgba(0, 0, 0, 0.12)',

  // Elevations/Elevation 02 dp - subtle elevation
  elevation02:
    '0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2)',
} as const;

export type ShadowToken = typeof shadows;

// Figma Component-Specific Tokens
export const components = {
  button: {
    // VBtn/default - Standard button size
    default: {
      height: '36px',                    // VBtn/default/v-btn-height
      minWidth: '64px',                  // VBtn/default/v-btn-min-width
      paddingX: '16px',                  // VBtn/default/v-btn-padding-x
      fontSize: '14px',                  // VBtn/default/v-btn-size
      marginLeft: '-4px',                // VBtn/default/v-btn-margin-l
      marginRight: '8px',                // VBtn/default/v-btn-margin-r
      iconSize: '18px',                  // VBtn/default/v-btn-icon-size
    },
    // VBtn/icon - Icon-only button size
    icon: {
      heightWidth: '48px',               // VBtn/icon/v-btn-height-width
      iconSize: '24px',                  // VBtn/icon/v-btn-icon-size
    },
  },
  progressCircular: {
    size: '32px',                        // VProgressCircular/v-progress-circular-size
    stroke: '4px',                       // VProgressCircular/v-progress-circular-stroke
  },
} as const;

// Figma Opacity tokens
export const opacity = {
  overlay: {
    elevated: '0',                       // opacity-overlay-e-f
    tonalOutlined: '0',                  // opacity-overlay-t-o-t-p
  },
  currentColor: '0.87',                  // opacity-current-color (87%)
  activatedOpacity: '0.12',              // Variables/activated-opacity (12%)
} as const;

export interface DesignTokens {
  colors: ColorToken;
  spacing: SpacingToken;
  typography: TypographyToken;
  borderRadius: BorderRadiusToken;
  shadows: ShadowToken;
  components: typeof components;
  opacity: typeof opacity;
}

export const tokens: DesignTokens = {
  colors,
  spacing,
  typography,
  borderRadius,
  shadows,
  components,
  opacity,
};

export default tokens;
