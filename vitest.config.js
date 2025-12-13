import { defineConfig } from 'vitest/config';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  test: {
    globals: true,
    environment: 'jsdom',
    transformMode: {
      web: [/\.[jt]sx?$/],
    },
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: [
        'node_modules/',
        'dist/',
        'docs/',
      ],
    },
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  ssr: {
    noExternal: ['vuetify'],
  },
});
