import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  server: {
    port: 5173,
    open: true,
  },
  build: {
    outDir: 'dist',
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    lib: {
      entry: {
        'design-system-vuetify': 'src/main.ts',
        'button': 'src/button.ts',
        'tokens/index': 'src/tokens.ts',
      },
      name: 'DesignSystemVuetify',
      fileName: (format, entryName) => {
        const extension = format === 'es' ? 'js' : 'cjs';
        return `${entryName}.${extension}`;
      },
    },
    rollupOptions: {
      external: ['vue', 'vuetify'],
      output: [
        {
          format: 'es',
          dir: 'dist',
          entryFileNames: '[name].js',
          chunkFileNames: '[name].[hash].js',
          assetFileNames: '[name].[ext]',
          globals: {
            vue: 'Vue',
            vuetify: 'Vuetify',
          },
        },
        {
          format: 'cjs',
          dir: 'dist',
          entryFileNames: '[name].cjs',
          chunkFileNames: '[name].[hash].cjs',
          assetFileNames: '[name].[ext]',
          globals: {
            vue: 'Vue',
            vuetify: 'Vuetify',
          },
        },
      ],
    },
  },
});
