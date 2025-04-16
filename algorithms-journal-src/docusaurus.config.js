// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Algorithms Journal',
  tagline: 'Thoughtful solutions to algorithmic problems',
  favicon: 'img/favicon.ico',

  url: 'https://timhourihan.com',
  baseUrl: '/algorithms-journal/',

  organizationName: 'thourihan',
  projectName: 'thourihan.github.io',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      ({
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: 'docs',
          editUrl: undefined,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig: ({
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Algorithms Journal',
      logo: {
        alt: 'Tim Hourihan Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'sidebar',
          position: 'left',
          label: 'Journal',
        },
        {
          href: 'https://github.com/thourihan',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Explore',
          items: [
            {
              label: 'Overview',
              to: '/docs/overview',
            },
          ],
        },
        {
          title: 'Connect',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/thourihan',
            },
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/in/timothyhourihan/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Tim Hourihan.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  }),
};

export default config;
