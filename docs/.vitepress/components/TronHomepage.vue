<template>
  <div class="tron-page">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-content">
        <div class="hero-title-wrapper">
          <img :src="logoUrl" alt="DS-Bridge Logo" class="hero-logo" />
          <h1 class="hero-title">DS-Bridge</h1>
        </div>
        <p class="hero-subtitle">
          Connecting Design and Development
        </p>
        <div class="hero-ctas">
          <a :href="withBase('/guide/getting-started')" class="cta-button cta-primary" @click.prevent="$router?.push(withBase('/guide/getting-started'))">
            Get Started
            <span class="material-icons">arrow_forward</span>
          </a>
          <a :href="withBase('/components/button')" class="cta-button cta-secondary" @click.prevent="$router?.push(withBase('/components/button'))">
            View Components
            <span class="material-icons">visibility</span>
          </a>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="features-section">
      <h2 class="section-title">Built for the Modern Web</h2>
      <p class="section-subtitle">
        Enterprise-grade Vue 3 design system with real-time interactive documentation,
          Figma-ready tokens, and WCAG 2.1 AAA accessibility.
      </p>

      <div class="features-grid">
        <div class="feature-card">
          <div class="feature-icon">
            <span class="material-icons">widgets</span>
          </div>
          <h3 class="feature-title">Interactive Components</h3>
          <p class="feature-description">
            Live component playground with real-time prop controls, code generation,
            and copy-to-clipboard functionality.
          </p>
        </div>

        <div class="feature-card">
          <div class="feature-icon">
            <span class="material-icons">palette</span>
          </div>
          <h3 class="feature-title">Design Tokens</h3>
          <p class="feature-description">
            Centralized design values synced with Figma. Colors, spacing, typography,
            and more — all in one place.
          </p>
        </div>

        <div class="feature-card">
          <div class="feature-icon">
            <span class="material-icons">accessibility</span>
          </div>
          <h3 class="feature-title">WCAG 2.1 AAA</h3>
          <p class="feature-description">
            Accessibility-first development with automated testing, proper ARIA,
            and keyboard navigation built in.
          </p>
        </div>

        <div class="feature-card">
          <div class="feature-icon">
            <span class="material-icons">code</span>
          </div>
          <h3 class="feature-title">TypeScript Ready</h3>
          <p class="feature-description">
            Full TypeScript support with complete type definitions, IntelliSense,
            and compile-time safety.
          </p>
        </div>

        <div class="feature-card">
          <div class="feature-icon">
            <span class="material-icons">speed</span>
          </div>
          <h3 class="feature-title">Performance First</h3>
          <p class="feature-description">
            Tree-shakeable exports, optimized builds, and lazy loading.
            Bundle size < 250KB gzipped.
          </p>
        </div>

        <div class="feature-card">
          <div class="feature-icon">
            <span class="material-icons">description</span>
          </div>
          <h3 class="feature-title">Comprehensive Docs</h3>
          <p class="feature-description">
            Interactive examples, API references, accessibility guides,
            and best practices for every component.
          </p>
        </div>
      </div>
    </section>

    <!-- Visual Previews Section -->
    <section class="previews-section">
      <div class="preview-container">
        <h2 class="section-title">Design System Preview</h2>
        <p class="section-subtitle">
          Explore the building blocks that power beautiful interfaces
        </p>

        <div class="preview-grid">
          <!-- Color Palette -->
          <div class="preview-panel">
            <h3 class="preview-panel-title">
              <span class="material-icons">palette</span>
              Color Palette
            </h3>
            <div class="color-swatches">
              <div class="color-swatch color-swatch--primary">
                <span class="color-label">Primary</span>
              </div>
              <div class="color-swatch color-swatch--secondary">
                <span class="color-label">Secondary</span>
              </div>
              <div class="color-swatch color-swatch--error">
                <span class="color-label">Error</span>
              </div>
              <div class="color-swatch color-swatch--success">
                <span class="color-label">Success</span>
              </div>
              <div class="color-swatch color-swatch--warning">
                <span class="color-label">Warning</span>
              </div>
              <div class="color-swatch color-swatch--info">
                <span class="color-label">Info</span>
              </div>
            </div>
          </div>

          <!-- Typography -->
          <div class="preview-panel">
            <h3 class="preview-panel-title">
              <span class="material-icons">text_fields</span>
              Typography Scale
            </h3>
            <div class="typography-samples">
              <div class="type-sample">
                <div class="type-label">Heading 1 / 2.5rem</div>
                <div class="type-text type-text--h1">
                  The quick brown fox
                </div>
              </div>
              <div class="type-sample">
                <div class="type-label">Heading 2 / 2rem</div>
                <div class="type-text type-text--h2">
                  The quick brown fox
                </div>
              </div>
              <div class="type-sample">
                <div class="type-label">Body / 1rem</div>
                <div class="type-text type-text--body">
                  The quick brown fox jumps over the lazy dog
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Quick Links -->
        <div class="quick-links">
          <a :href="withBase('/guide/introduction')" class="quick-link-card">
            <div class="quick-link-icon">
              <span class="material-icons">menu_book</span>
            </div>
            <div class="quick-link-content">
              <h4>Documentation</h4>
              <p>Guides and tutorials</p>
            </div>
          </a>

          <a :href="withBase('/design/tokens')" class="quick-link-card">
            <div class="quick-link-icon">
              <span class="material-icons">settings</span>
            </div>
            <div class="quick-link-content">
              <h4>Design Tokens</h4>
              <p>Colors, spacing, typography</p>
            </div>
          </a>

          <a :href="withBase('/components/button')" class="quick-link-card">
            <div class="quick-link-icon">
              <span class="material-icons">view_module</span>
            </div>
            <div class="quick-link-content">
              <h4>Components</h4>
              <p>Interactive examples</p>
            </div>
          </a>

          <a href="https://github.com/chadwd/DS-Bridge" class="quick-link-card" target="_blank">
            <div class="quick-link-icon">
              <span class="material-icons">code</span>
            </div>
            <div class="quick-link-content">
              <h4>GitHub</h4>
              <p>View source code</p>
            </div>
          </a>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="tron-footer">
      <div class="footer-content">
        <div class="footer-version">
          DS-Bridge v0.2.0 • Built with Vue 3, Vuetify 3, and TypeScript
        </div>
        <div class="footer-links">
          <a :href="withBase('/guide/getting-started')" class="footer-link">Get Started</a>
          <a href="https://github.com/chadwd/DS-Bridge" class="footer-link" target="_blank">GitHub</a>
          <a :href="withBase('/guide/philosophy')" class="footer-link">Philosophy</a>
          <a href="https://github.com/chadwd/DS-Bridge/issues" class="footer-link" target="_blank">Issues</a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue'
import { withBase, useData } from 'vitepress'

// This component uses the Tron Lab design system styles
// imported from tron-homepage.css in the main theme
const { isDark } = useData()

// Use ref to ensure proper initialization on mount
const logoUrl = ref(withBase('/logo.png'))

// Update logo URL based on theme
const updateLogoUrl = () => {
  logoUrl.value = isDark.value ? withBase('/logo-dark.png') : withBase('/logo.png')
}

// Initialize on mount to ensure correct logo on first render
onMounted(() => {
  updateLogoUrl()
})

// Watch for theme changes
watch(isDark, updateLogoUrl)
</script>

