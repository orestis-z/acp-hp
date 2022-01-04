module.exports = {
  title: "Anti CryptoPunks",
  description: "The description of the site.",
  dest: "./dist",
  themeConfig: {
    logo: '/logo-bold.png',
    nav: [
      { text: "Buy a Punk", link: "/#buy" },
      { text: "Roadmap", link: "/#roadmap" },
      { text: "Team", link: "/#team" },
      { text: "Discord", link: "https://discord.gg/WvGnnXQPV5" },
      { text: "OpenSea", link: "https://opensea.io/collection/anti-cryptopunks" },
      { text: "Twitter", link: "https://twitter.com/anti_cryptopunk" }
    ],
    sidebar: {
      '/guide/': genSidebarConfig('Guide')
    },
    lastUpdated: "01-04-2022"
  },

  markdown: {
    anchor: { permalink: false },
    config: md => {
      md.use(require("markdown-it-katex"));
    },
  },

  plugins: [
    [
      '@vuepress/google-analytics',
      {
        'ga': '' // UA-00000000-0
      }
    ],
    'vuepress-plugin-smooth-scroll'
  ]
};

function genSidebarConfig (title) {
  return [
    {
      title,
      collapsable: false,
      children: [
        '',
        'getting-started',
        'customize',
        'advanced',
      ]
    }
  ]
}

