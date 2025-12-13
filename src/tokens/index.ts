/**
 * Design System Tokens
 * Single source of truth for all design values (colors, spacing, typography)
 * These tokens can be synced with Figma Variables via Figma Code Connect
 */

export const colors = {
  // Primary brand colors
  primary: '#6366F1',           // Indigo-600 (Material Design 3 inspired)
  primaryDark: '#4F46E5',        // Indigo-700
  primaryLight: '#818CF8',       // Indigo-400
  primaryLighter: '#E0E7FF',     // Indigo-100

  // Secondary colors
  secondary: '#EC4899',          // Pink-500
  secondaryDark: '#DB2777',      // Pink-600
  secondaryLight: '#F472B6',     // Pink-300

  // Semantic colors
  error: '#DC2626',              // Red-600
  errorLight: '#FEE2E2',         // Red-100
  warning: '#F59E0B',            // Amber-500
  warningLight: '#FEF3C7',       // Amber-100
  success: '#10B981',            // Emerald-500
  successLight: '#D1FAE5',       // Emerald-100
  info: '#3B82F6',               // Blue-500
  infoLight: '#DBEAFE',          // Blue-100

  // Surface colors
  surface: '#FFFFFF',
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

  // Divider
  divider: '#E5E7EB',            // Gray-200 (with ~12% opacity in design)
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
    base: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    code: 'Menlo, Monaco, "Courier New", monospace',
  },
  fontSize: {
    xs: '12px',
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
} as const;

export type ShadowToken = typeof shadows;

export interface DesignTokens {
  colors: ColorToken;
  spacing: SpacingToken;
  typography: TypographyToken;
  borderRadius: BorderRadiusToken;
  shadows: ShadowToken;
}

export const tokens: DesignTokens = {
  colors,
  spacing,
  typography,
  borderRadius,
  shadows,
};

export default tokens;
