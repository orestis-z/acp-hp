module.exports = {
  title: "Anti CryptoPunks",
  description: 'We are from the antimatter universe. Anti CryptoPunks are the NFT antiparticles of the corresponding particles in "ordinary" CryptoPunks and the first Antiverse project.',
  themeConfig: {
    logo: '/logo-bold.png',
    nav: [
      { text: "Buy a Punk", link: "/#buy" },
      { text: "Roadmap", link: "/#roadmap" },
      { text: "Team", link: "/#team" },
      { text: "Rarity", link: "https://rarity.anticryptopunks.com" },
      { text: "Discord", link: "https://discord.gg/WvGnnXQPV5" },
      { text: "OpenSea", link: "https://opensea.io/collection/anti-cryptopunks" },
      { text: "Twitter", link: "https://twitter.com/anti_cryptopunk" }
    ],
    // sidebar: [
    //     {
    //       title: 'Group 1',   // required
    //       path: '/foo/',      // optional, link of the title, which should be an absolute path and must exist
    //       collapsable: false, // optional, defaults to true
    //       sidebarDepth: 1,    // optional, defaults to 1
    //       children: [
    //         '/#roadmap'
    //       ]
    //     },
    //     {
    //       title: 'Group 2',
    //       children: [ /* ... */ ],
    //       initialOpenGroupIndex: -1 // optional, defaults to 0, defines the index of initially opened subgroup
    //     }
    //   ],
    // {
    // //   '/guide/': genSidebarConfig('Guide')

    // },
    lastUpdated: "Last Updated"
  },

  markdown: {
    anchor: { permalink: false },
    config: md => {
      md.use(require("markdown-it-katex"));
    },
  },

  plugins: [
    'vuepress-plugin-smooth-scroll'
  ]
};

// function genSidebarConfig (title) {
//   return [
//     {
//       title,
//       collapsable: false,
//       children: [
//         '',
//         'getting-started',
//         'customize',
//         'advanced',
//       ]
//     }
//   ]
// }

