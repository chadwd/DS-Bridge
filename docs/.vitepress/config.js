import { defineConfig } from 'vitepress';

export default defineConfig({
  base: '/DS-Bridge/',
  title: 'DS-Bridge',
  titleTemplate: ':title - Design System Bridge',
  description: 'Enterprise-grade, white-label Vue 3 design system built on Vuetify 3 and TypeScript',
  appearance: true, // Enable dark mode toggle

  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
    ['link', { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '96x96', href: '/favicon-96x96.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' }],
    ['link', { rel: 'manifest', href: '/site.webmanifest' }],
  ],

  vite: {
    ssr: {
      noExternal: ['vuetify'],
    },
    build: {
      chunkSizeWarningLimit: 1000, // Increase limit to 1000kb (Vuetify is large)
      rollupOptions: {
        output: {
          manualChunks: {
            'vuetify': ['vuetify'],
            'vuetify-components': ['vuetify/components'],
          },
        },
      },
    },
  },

  themeConfig: {
    logo: '/logo.svg',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/introduction' },
      { text: 'Design', link: '/design/tokens' },
      { text: 'Components', link: '/components/button' },
    ],
    sidebar: {
      '/guide/': [
        {
          text: 'Getting Started',
          items: [
            { text: 'Introduction', link: '/guide/introduction' },
            { text: 'Getting Started', link: '/guide/getting-started' },
            { text: 'Philosophy', link: '/guide/philosophy' },
          ],
        },
      ],
      '/design/': [
        {
          text: 'Design System',
          items: [
            { text: 'Design Tokens', link: '/design/tokens' },
            { text: 'Colors', link: '/design/colors' },
            { text: 'Typography', link: '/design/typography' },
            { text: 'Spacing', link: '/design/spacing' },
            { text: 'Style Guide', link: '/design/style-guide' },
          ],
        },
      ],
      '/components/': [
        {
          text: 'Components',
          items: [
            { text: 'Button', link: '/components/button' },
            { text: 'Card', link: '/components/card' },
            { text: 'Chip', link: '/components/chip' },
            { text: 'Dialog', link: '/components/dialog' },
            { text: 'Divider', link: '/components/divider' },
            { text: 'Expansion Panel', link: '/components/expansion-panel' },
            { text: 'Guaranteed Sale', link: '/components/guaranteedsale' },
            { text: 'List', link: '/components/list' },
            { text: 'Menu', link: '/components/menu' },
          ],
        },
      ],
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/yourusername/DS-Bridge' },
    ],
    footer: {
      message: 'Built with Vue 3, Vuetify 3, and TypeScript',
      copyright: 'Copyright © 2024 DS-Bridge',
    },
  },
});
