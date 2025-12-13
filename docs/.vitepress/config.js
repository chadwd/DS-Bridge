export default {
  title: 'Design System',
  description: 'A white-label design system built with Vue 3, Vite, and Vuetify 3',
  appearance: 'dark',
  themeConfig: {
    logo: '/logo.svg',
    nav: [
      { text: 'Guide', link: '/' },
      { text: 'Components', link: '/components/button' },
      { text: 'Tokens', link: '/tokens' },
    ],
    sidebar: {
      '/components/': [
        {
          text: 'Components',
          items: [
            { text: 'Button', link: '/components/button' },
          ],
        },
      ],
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/yourusername/DS-Bridge' },
    ],
  },
};
