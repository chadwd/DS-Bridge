<template>
  <app-layout>
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
        <v-col
          cols="12"
          sm="6"
          md="3"
        >
          <h3 class="text-body2 font-weight-bold mb-2">Elevated (Default)</h3>
          <div class="d-flex gap-2 flex-wrap">
            <ds-button variant="elevated">Primary</ds-button>
            <ds-button
              variant="elevated"
              color="secondary"
            >
              Secondary
            </ds-button>
            <ds-button
              variant="elevated"
              color="error"
            >
              Error
            </ds-button>
          </div>
        </v-col>

        <v-col
          cols="12"
          sm="6"
          md="3"
        >
          <h3 class="text-body2 font-weight-bold mb-2">Outlined</h3>
          <div class="d-flex gap-2 flex-wrap">
            <ds-button variant="outlined">Primary</ds-button>
            <ds-button
              variant="outlined"
              color="secondary"
            >
              Secondary
            </ds-button>
            <ds-button
              variant="outlined"
              color="error"
            >
              Error
            </ds-button>
          </div>
        </v-col>

        <v-col
          cols="12"
          sm="6"
          md="3"
        >
          <h3 class="text-body2 font-weight-bold mb-2">Text</h3>
          <div class="d-flex gap-2 flex-wrap">
            <ds-button variant="text">Primary</ds-button>
            <ds-button
              variant="text"
              color="secondary"
            >
              Secondary
            </ds-button>
            <ds-button
              variant="text"
              color="error"
            >
              Error
            </ds-button>
          </div>
        </v-col>

        <v-col
          cols="12"
          sm="6"
          md="3"
        >
          <h3 class="text-body2 font-weight-bold mb-2">Sizes</h3>
          <div class="d-flex flex-column gap-2">
            <ds-button size="sm">Small</ds-button>
            <ds-button size="md">Medium</ds-button>
            <ds-button size="lg">Large</ds-button>
          </div>
        </v-col>
      </v-row>

      <!-- Disabled & Loading States -->
      <v-row class="mb-8">
        <v-col
          cols="12"
          md="6"
        >
          <h3 class="text-body2 font-weight-bold mb-2">Disabled State</h3>
          <div class="d-flex gap-2 flex-wrap">
            <ds-button disabled>Disabled Primary</ds-button>
            <ds-button
              variant="outlined"
              disabled
            >
              Disabled Outlined
            </ds-button>
            <ds-button
              variant="text"
              disabled
            >
              Disabled Text
            </ds-button>
          </div>
        </v-col>

        <v-col
          cols="12"
          md="6"
        >
          <h3 class="text-body2 font-weight-bold mb-2">Loading State</h3>
          <div class="d-flex gap-2 flex-wrap">
            <ds-button loading>Loading</ds-button>
            <ds-button
              variant="outlined"
              loading
            >
              Loading Outlined
            </ds-button>
          </div>
        </v-col>
      </v-row>

      <!-- Design System Info -->
      <v-row class="mt-12">
        <v-col cols="12">
          <v-card
            class="pa-6"
            variant="outlined"
          >
            <h3 class="text-h6 font-weight-bold mb-3">Getting Started</h3>
            <ul class="text-body2">
              <li class="mb-2">
                <strong>Design Tokens:</strong> All colors, spacing, and typography are synced 1-to-1
                with Figma in <code>src/tokens/index.ts</code>
              </li>
              <li class="mb-2">
                <strong>Components:</strong> Import design system components from
                <code>src/components</code>
              </li>
              <li class="mb-2">
                <strong>Figma Integration:</strong> Components are linked via Code Connect for
                seamless design-to-code workflow
              </li>
              <li class="mb-2">
                <strong>Documentation:</strong> Run <code>npm run docs:dev</code> to view the
                style guide and component documentation
              </li>
              <li class="mb-2">
                <strong>Enterprise Ready:</strong> WCAG 2.1 AAA compliance, TypeScript support,
                accessibility testing included
              </li>
            </ul>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </app-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { DsButton } from './components/index';
import AppLayout from './components/AppLayout.vue';

export default defineComponent({
  name: 'App',
  components: {
    DsButton,
    AppLayout,
  },
});
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
