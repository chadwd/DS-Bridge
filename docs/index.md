---
layout: home
---

<style scoped>
/* Tron Lab - Clean Light Mode Aesthetic */
:root {
  --tron-bg: #F8F9FA;
  --tron-surface: #FFFFFF;
  --tron-cyan: #0097A7;
  --tron-cyan-neon: #00E5FF;
  --tron-amber: #FFA000;
  --tron-amber-neon: #FF9100;
  --tron-grid: #E0E7EB;
  --tron-text: #1A1F2E;
  --tron-text-muted: #64748B;
}

/* Grid Background Pattern */
.tron-page {
  background: var(--tron-bg);
  background-image:
    linear-gradient(var(--tron-grid) 1px, transparent 1px),
    linear-gradient(90deg, var(--tron-grid) 1px, transparent 1px);
  background-size: 40px 40px;
  background-position: -1px -1px;
}

/* Hero Section */
.hero-section {
  padding: 6rem 2rem;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.hero-section::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(0, 229, 255, 0.08) 0%, transparent 70%);
  pointer-events: none;
  z-index: 0;
}

.hero-content {
  position: relative;
  z-index: 1;
  max-width: 900px;
  margin: 0 auto;
}

.hero-title {
  font-size: 4.5rem;
  font-weight: 700;
  letter-spacing: -0.03em;
  margin: 0 0 1rem 0;
  color: var(--tron-text);
  line-height: 1.1;
}

.hero-subtitle {
  font-size: 1.375rem;
  color: var(--tron-text-muted);
  margin: 0 0 3rem 0;
  line-height: 1.6;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

.hero-ctas {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;
}

.cta-button {
  padding: 1rem 2.5rem;
  font-size: 1.125rem;
  font-weight: 600;
  border-radius: 12px;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
}

.cta-primary {
  background: var(--tron-cyan);
  color: white;
  border: 2px solid var(--tron-cyan);
  box-shadow: 0 4px 12px rgba(0, 151, 167, 0.2);
}

.cta-primary:hover {
  background: #00838F;
  border-color: var(--tron-cyan-neon);
  box-shadow: 0 4px 20px rgba(0, 229, 255, 0.4), 0 0 20px rgba(0, 229, 255, 0.2);
  transform: translateY(-2px);
}

.cta-secondary {
  background: transparent;
  color: var(--tron-amber);
  border: 2px solid var(--tron-amber);
}

.cta-secondary:hover {
  background: rgba(255, 160, 0, 0.05);
  border-color: var(--tron-amber-neon);
  box-shadow: 0 4px 20px rgba(255, 145, 0, 0.3);
  transform: translateY(-2px);
}

/* Feature Cards */
.features-section {
  padding: 5rem 2rem;
  max-width: 1400px;
  margin: 0 auto;
}

.section-title {
  text-align: center;
  font-size: 2.5rem;
  font-weight: 700;
  margin: 0 0 1rem 0;
  color: var(--tron-text);
}

.section-subtitle {
  text-align: center;
  font-size: 1.125rem;
  color: var(--tron-text-muted);
  margin: 0 0 4rem 0;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
}

.feature-card {
  background: var(--tron-surface);
  border: 1px solid var(--tron-grid);
  border-radius: 16px;
  padding: 2.5rem 2rem;
  position: relative;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  backdrop-filter: blur(10px);
}

.feature-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 16px;
  padding: 1px;
  background: linear-gradient(135deg, var(--tron-cyan), transparent);
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  opacity: 0;
  transition: opacity 0.3s;
}

.feature-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 40px rgba(0, 151, 167, 0.15);
}

.feature-card:hover::before {
  opacity: 1;
}

.feature-icon {
  width: 56px;
  height: 56px;
  border-radius: 12px;
  background: linear-gradient(135deg, rgba(0, 151, 167, 0.1), rgba(0, 229, 255, 0.05));
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
}

.feature-icon .material-icons {
  font-size: 28px;
  color: var(--tron-cyan);
}

.feature-title {
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0 0 0.75rem 0;
  color: var(--tron-text);
}

.feature-description {
  font-size: 1rem;
  line-height: 1.6;
  color: var(--tron-text-muted);
  margin: 0;
}

/* Visual Previews */
.previews-section {
  background: linear-gradient(180deg, var(--tron-surface) 0%, var(--tron-bg) 100%);
  padding: 5rem 2rem;
}

.preview-container {
  max-width: 1400px;
  margin: 0 auto;
}

.preview-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.preview-panel {
  background: var(--tron-surface);
  border: 1px solid var(--tron-grid);
  border-radius: 16px;
  padding: 2rem;
  backdrop-filter: blur(10px);
}

.preview-panel-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0 0 1.5rem 0;
  color: var(--tron-text);
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.preview-panel-title .material-icons {
  font-size: 24px;
  color: var(--tron-cyan);
}

.color-swatches {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: 1rem;
}

.color-swatch {
  aspect-ratio: 1;
  border-radius: 12px;
  border: 2px solid var(--tron-grid);
  position: relative;
  transition: all 0.3s;
  cursor: pointer;
}

.color-swatch:hover {
  transform: scale(1.05);
  border-color: var(--tron-cyan-neon);
  box-shadow: 0 4px 12px rgba(0, 229, 255, 0.3);
}

.color-label {
  position: absolute;
  bottom: 0.5rem;
  left: 0;
  right: 0;
  text-align: center;
  font-size: 0.75rem;
  font-weight: 600;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
}

.typography-samples {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.type-sample {
  padding: 1rem;
  border-left: 3px solid var(--tron-cyan);
  background: rgba(0, 151, 167, 0.03);
  border-radius: 0 8px 8px 0;
}

.type-label {
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--tron-cyan);
  font-weight: 600;
  margin-bottom: 0.5rem;
}

/* Quick Links */
.quick-links {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 3rem;
}

.quick-link-card {
  background: var(--tron-surface);
  border: 1px solid var(--tron-grid);
  border-radius: 12px;
  padding: 1.5rem;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 1rem;
  transition: all 0.3s;
}

.quick-link-card:hover {
  border-color: var(--tron-amber);
  box-shadow: 0 4px 12px rgba(255, 160, 0, 0.2);
  transform: translateY(-2px);
}

.quick-link-icon .material-icons {
  font-size: 32px;
  color: var(--tron-amber);
}

.quick-link-content h4 {
  margin: 0 0 0.25rem 0;
  font-size: 1.125rem;
  color: var(--tron-text);
}

.quick-link-content p {
  margin: 0;
  font-size: 0.875rem;
  color: var(--tron-text-muted);
}

/* Footer */
.tron-footer {
  border-top: 1px solid var(--tron-grid);
  padding: 3rem 2rem;
  text-align: center;
  background: var(--tron-surface);
}

.footer-content {
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1.5rem;
}

.footer-version {
  font-size: 0.875rem;
  color: var(--tron-text-muted);
}

.footer-links {
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
}

.footer-link {
  color: var(--tron-cyan);
  text-decoration: none;
  font-size: 0.875rem;
  transition: color 0.3s;
}

.footer-link:hover {
  color: var(--tron-cyan-neon);
}

/* Responsive */
@media (max-width: 768px) {
  .hero-title {
    font-size: 3rem;
  }

  .hero-subtitle {
    font-size: 1.125rem;
  }

  .features-grid,
  .preview-grid {
    grid-template-columns: 1fr;
  }

  .footer-content {
    flex-direction: column;
    text-align: center;
  }
}
</style>

<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

<div class="tron-page">
  <!-- Hero Section -->
  <section class="hero-section">
    <div class="hero-content">
      <h1 class="hero-title">DS-Bridge</h1>
      <p class="hero-subtitle">
        Enterprise-grade Vue 3 design system with real-time interactive documentation,
        Figma-ready tokens, and WCAG 2.1 AAA accessibility.
      </p>
      <div class="hero-ctas">
        <a href="/guide/getting-started" class="cta-button cta-primary">
          Get Started
          <span class="material-icons">arrow_forward</span>
        </a>
        <a href="/components/button" class="cta-button cta-secondary">
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
      Everything you need to build consistent, accessible, and beautiful user interfaces
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
            <div class="color-swatch" style="background: #0097A7;">
              <span class="color-label" style="color: white;">Primary</span>
            </div>
            <div class="color-swatch" style="background: #FFA000;">
              <span class="color-label" style="color: white;">Secondary</span>
            </div>
            <div class="color-swatch" style="background: #DC2626;">
              <span class="color-label" style="color: white;">Error</span>
            </div>
            <div class="color-swatch" style="background: #10B981;">
              <span class="color-label" style="color: white;">Success</span>
            </div>
            <div class="color-swatch" style="background: #F59E0B;">
              <span class="color-label" style="color: white;">Warning</span>
            </div>
            <div class="color-swatch" style="background: #3B82F6;">
              <span class="color-label" style="color: white;">Info</span>
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
              <div style="font-size: 2.5rem; font-weight: 700; line-height: 1.2;">
                The quick brown fox
              </div>
            </div>
            <div class="type-sample">
              <div class="type-label">Heading 2 / 2rem</div>
              <div style="font-size: 2rem; font-weight: 600; line-height: 1.3;">
                The quick brown fox
              </div>
            </div>
            <div class="type-sample">
              <div class="type-label">Body / 1rem</div>
              <div style="font-size: 1rem; line-height: 1.6;">
                The quick brown fox jumps over the lazy dog
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Quick Links -->
      <div class="quick-links">
        <a href="/guide/introduction" class="quick-link-card">
          <div class="quick-link-icon">
            <span class="material-icons">menu_book</span>
          </div>
          <div class="quick-link-content">
            <h4>Documentation</h4>
            <p>Guides and tutorials</p>
          </div>
        </a>

        <a href="/design/tokens" class="quick-link-card">
          <div class="quick-link-icon">
            <span class="material-icons">settings</span>
          </div>
          <div class="quick-link-content">
            <h4>Design Tokens</h4>
            <p>Colors, spacing, typography</p>
          </div>
        </a>

        <a href="/components/button" class="quick-link-card">
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
        <a href="/guide/getting-started" class="footer-link">Get Started</a>
        <a href="https://github.com/chadwd/DS-Bridge" class="footer-link" target="_blank">GitHub</a>
        <a href="/guide/philosophy" class="footer-link">Philosophy</a>
        <a href="https://github.com/chadwd/DS-Bridge/issues" class="footer-link" target="_blank">Issues</a>
      </div>
    </div>
  </footer>
</div>
