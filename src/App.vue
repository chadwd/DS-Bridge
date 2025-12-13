<template>
  <v-app>
    <v-container class="pa-8">
      <v-row>
        <v-col cols="12">
          <h1 class="text-h3 font-weight-bold mb-4">Design System Playground</h1>
          <p class="text-body1 text-medium mb-8">
            Welcome to the Design System. This is your white-label Vuetify 3 component library
            and style guide.
          </p>
        </v-col>
      </v-row>

      <!-- Button Examples Section -->
      <v-row class="mb-8">
        <v-col cols="12">
          <h2 class="text-h5 font-weight-bold mb-4">Button Examples</h2>
        </v-col>
      </v-row>

      <!-- Filled Buttons -->
      <v-row class="mb-6">
        <v-col cols="12" sm="6" md="3">
          <h3 class="text-body2 font-weight-bold mb-2">Filled (Default)</h3>
          <div class="d-flex gap-2 flex-wrap">
            <ds-button>Primary</ds-button>
            <ds-button color="secondary">Secondary</ds-button>
            <ds-button color="error">Error</ds-button>
          </div>
        </v-col>

        <v-col cols="12" sm="6" md="3">
          <h3 class="text-body2 font-weight-bold mb-2">Outlined</h3>
          <div class="d-flex gap-2 flex-wrap">
            <ds-button variant="outlined">Primary</ds-button>
            <ds-button variant="outlined" color="secondary">Secondary</ds-button>
            <ds-button variant="outlined" color="error">Error</ds-button>
          </div>
        </v-col>

        <v-col cols="12" sm="6" md="3">
          <h3 class="text-body2 font-weight-bold mb-2">Text</h3>
          <div class="d-flex gap-2 flex-wrap">
            <ds-button variant="text">Primary</ds-button>
            <ds-button variant="text" color="secondary">Secondary</ds-button>
            <ds-button variant="text" color="error">Error</ds-button>
          </div>
        </v-col>

        <v-col cols="12" sm="6" md="3">
          <h3 class="text-body2 font-weight-bold mb-2">Sizes</h3>
          <div class="d-flex flex-column gap-2">
            <ds-button size="sm">Small</ds-button>
            <ds-button size="md">Medium</ds-button>
            <ds-button size="lg">Large</ds-button>
          </div>
        </v-col>
      </v-row>

      <!-- Disabled Buttons -->
      <v-row class="mb-8">
        <v-col cols="12">
          <h3 class="text-body2 font-weight-bold mb-2">Disabled State</h3>
          <div class="d-flex gap-2 flex-wrap">
            <ds-button disabled>Disabled Primary</ds-button>
            <ds-button variant="outlined" disabled>Disabled Outlined</ds-button>
            <ds-button variant="text" disabled>Disabled Text</ds-button>
          </div>
        </v-col>
      </v-row>

      <!-- Design System Info -->
      <v-row class="mt-12">
        <v-col cols="12">
          <v-card class="pa-6" variant="outlined">
            <h3 class="text-h6 font-weight-bold mb-3">Getting Started</h3>
            <ul class="text-body2">
              <li class="mb-2">
                <strong>Design Tokens:</strong> All colors, spacing, and typography are defined in
                <code>src/tokens/index.js</code>
              </li>
              <li class="mb-2">
                <strong>Components:</strong> Import design system components from
                <code>src/components</code>
              </li>
              <li class="mb-2">
                <strong>Vuetify Theme:</strong> Theme colors are synced from design tokens in
                <code>src/plugins/vuetify.js</code>
              </li>
              <li class="mb-2">
                <strong>Documentation:</strong> Run <code>npm run docs:dev</code> to view the
                style guide and component documentation
              </li>
            </ul>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import { DsButton } from './components/index.js';

export default {
  name: 'App',
  components: {
    DsButton,
  },
};
</script>

<style>
code {
  background-color: #f3f4f6;
  padding: 2px 6px;
  border-radius: 4px;
  font-family: 'Courier New', monospace;
  font-size: 0.875em;
}
</style>
