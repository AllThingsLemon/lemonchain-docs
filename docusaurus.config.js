// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const {themes} = require('prism-react-renderer');
const lightTheme = themes.github;
const darkTheme = themes.dracula;
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Lemon Chain Docs',
  tagline: 'Learn about the tech behind Lemon Chain',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.lemonchain.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'lemon', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity: 'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      // algolia: {
      //   appId: '',
      //   apiKey: '',
      //   indexName: 'lemonchain',
      //   contextualSearch: true,
      //   insights: false,
      // },
      navbar: {
        logo: {
          alt: 'Lemon Logo',
          src: 'img/lemonchainlogo-dark.png',
          srcDark: 'img/lemonchainlogo-light.png',
        },
        items: [
          {
            position: 'left',
            label: 'Introduction',
            to: 'docs/intro',
          },
          {
            position: 'left',
            label: 'Whitepaper',
            to: 'docs/whitepaper',
          },
          {
            position: 'left',
            label: 'Consensus',
            to: 'docs/consensus',
          },
          {
            position: 'left',
            to: 'docs/category/learn',
            label: 'Learn',
          },
          {
            position: 'left',
            to: '/docs/lemx-token',
            label: 'Token',
          },
          {
            position: 'left',
            to: '/docs/category/validator',
            label: 'Validator',
          },
          {
            position: 'left',
            to: '/docs/Roles/Delegator/specifications',
            label: 'Delegator',
          },
          {
            position: 'left',
            to: 'docs/dApps',
            label: 'dApps',
          },
          {
            position: 'left',
            to: '/docs/category/developers',
            label: 'Developers',
          },
          // {
          //   href: 'https://github.com/facebook/docusaurus',
          //   label: 'GitHub',
          //   position: 'right',
          // },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Community',
            items: [
              // {
              //   label: 'Discord',
              //   href: 'https://discordlink.com',
              // },
              // {
              //   label: 'Twitter',
              //   href: 'https://twitterlink.com',
              // },
              {
                label: 'Lemon Chain',
                href: 'https://www.lemonchain.io',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Lemon Block Explorer',
                href: 'https://explorer.lemonchain.io',
              },
              {
                label: 'Staking Dashboard',
                href: 'https://stake.lemonchain.io',
              },
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} Lemon Chain`,
      },
      prism: {
        theme: lightTheme,
        darkTheme: darkTheme,
        additionalLanguages: ['solidity', 'bash', 'javascript'],
      },
    }),

  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],
}

module.exports = config
