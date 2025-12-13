/**
 * Accessibility Testing Utilities
 * Helper functions for WCAG 2.1 compliance testing
 */

import { VueWrapper } from '@vue/test-utils';

/**
 * Check color contrast ratio
 * @param foreground - Foreground color (hex or rgb)
 * @param background - Background color (hex or rgb)
 * @returns Contrast ratio
 */
export function getContrastRatio(foreground: string, background: string): number {
  const fgLum = getRelativeLuminance(foreground);
  const bgLum = getRelativeLuminance(background);

  const lighter = Math.max(fgLum, bgLum);
  const darker = Math.min(fgLum, bgLum);

  return (lighter + 0.05) / (darker + 0.05);
}

/**
 * Calculate relative luminance for contrast ratio
 * @param color - Color in hex or rgb format
 * @returns Relative luminance value
 */
function getRelativeLuminance(color: string): number {
  const rgb = hexToRgb(color);
  if (!rgb) return 0;

  const [r, g, b] = rgb.map((value) => {
    const sRGB = value / 255;
    return sRGB <= 0.03928
      ? sRGB / 12.92
      : Math.pow((sRGB + 0.055) / 1.055, 2.4);
  });

  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

/**
 * Convert hex color to RGB
 * @param hex - Hex color code
 * @returns RGB values as array or null
 */
function hexToRgb(hex: string): [number, number, number] | null {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? [
        parseInt(result[1], 16),
        parseInt(result[2], 16),
        parseInt(result[3], 16),
      ]
    : null;
}

/**
 * Verify WCAG AA compliance for contrast
 * - Normal text: 4.5:1
 * - Large text: 3:1
 * @param ratio - Contrast ratio
 * @param isLargeText - Whether text is large (18pt+)
 * @returns true if WCAG AA compliant
 */
export function isWCAG_AA_Compliant(ratio: number, isLargeText = false): boolean {
  return isLargeText ? ratio >= 3 : ratio >= 4.5;
}

/**
 * Verify WCAG AAA compliance for contrast
 * - Normal text: 7:1
 * - Large text: 4.5:1
 * @param ratio - Contrast ratio
 * @param isLargeText - Whether text is large (18pt+)
 * @returns true if WCAG AAA compliant
 */
export function isWCAG_AAA_Compliant(ratio: number, isLargeText = false): boolean {
  return isLargeText ? ratio >= 4.5 : ratio >= 7;
}

/**
 * Test keyboard navigation
 * @param element - Element to test
 * @param expectedFocusable - Whether element should be focusable
 */
export function testKeyboardNavigation(
  element: HTMLElement,
  expectedFocusable = true
): void {
  const isFocusable =
    element.tabIndex >= 0 ||
    ['BUTTON', 'A', 'INPUT', 'SELECT', 'TEXTAREA'].includes(element.tagName);

  if (expectedFocusable && !isFocusable) {
    throw new Error(`Element should be keyboard focusable but is not: ${element.tagName}`);
  }

  if (!expectedFocusable && isFocusable) {
    throw new Error(`Element should not be keyboard focusable but is: ${element.tagName}`);
  }
}

/**
 * Test for presence of ARIA labels
 * @param element - Element to test
 * @returns Object with ARIA label info
 */
export function getAriaLabels(element: HTMLElement): {
  ariaLabel: string | null;
  ariaLabelledBy: string | null;
  ariaDescribedBy: string | null;
  title: string | null;
  text: string | null;
} {
  return {
    ariaLabel: element.getAttribute('aria-label'),
    ariaLabelledBy: element.getAttribute('aria-labelledby'),
    ariaDescribedBy: element.getAttribute('aria-describedby'),
    title: element.getAttribute('title'),
    text: element.textContent?.trim() || null,
  };
}

/**
 * Verify element has accessible name
 * @param element - Element to test
 * @returns true if element has accessible name
 */
export function hasAccessibleName(element: HTMLElement): boolean {
  const labels = getAriaLabels(element);
  return !!(
    labels.ariaLabel ||
    labels.ariaLabelledBy ||
    labels.text ||
    labels.title ||
    (element.textContent && element.textContent.trim().length > 0)
  );
}

/**
 * Get computed color of element
 * @param element - Element to test
 * @returns Object with color and background-color
 */
export function getElementColors(element: HTMLElement): {
  color: string;
  backgroundColor: string;
} {
  const computed = window.getComputedStyle(element);
  return {
    color: computed.color,
    backgroundColor: computed.backgroundColor,
  };
}

/**
 * Test semantic HTML usage
 * @param element - Element to test
 * @returns Object with semantic info
 */
export function checkSemanticHTML(element: HTMLElement): {
  isButton: boolean;
  isLink: boolean;
  isHeading: boolean;
  isList: boolean;
  isForm: boolean;
} {
  const tag = element.tagName.toLowerCase();
  return {
    isButton: tag === 'button' || element.getAttribute('role') === 'button',
    isLink: tag === 'a' || element.getAttribute('role') === 'link',
    isHeading: /^h[1-6]$/.test(tag),
    isList: /^(ul|ol|li)$/.test(tag),
    isForm: /^(form|input|textarea|select)$/.test(tag),
  };
}
