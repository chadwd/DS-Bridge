export default {
  title: 'DS-Bridge',
  description: 'Enterprise-grade, white-label Vue 3 design system built on Vuetify 3 and TypeScript',
  appearance: true, // Enable dark mode toggle
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
};
