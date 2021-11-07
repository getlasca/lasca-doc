module.exports = {
  title: 'Lasca Docsumentation',
  description: 'No more front-end coding by integrating Figma with React/vue.js/webpack',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  themeConfig: {
    logo: '/image/logo.png',
    nav: [
      { text: 'Go to Lasca', link: 'http://lasca.app/', rel:false }
    ],
    sidebar: [
      {
        title: 'Get started',
        collapsable: false,
        children: [
          '/'
        ]
      },
      {
        title: 'Development guide',
        collapsable: false,
        children: [
          '/development/install',
          '/development/rendering',
          '/development/build',
          '/development/ui_logics',
          '/development/interaction_with_api',
          '/development/combination_with_coding'
        ]
      },
      {
        title: 'Design guide',
        collapsable: false,
        children: [
          '/design/figma_export',
          '/design/responsive',
          '/design/dynamic_design',
          '/design/test',
          '/design/limitations'
        ]
      },
      {
        title: 'Links',
        collapsable: false,
        children: [
          ['https://vigorous-quicksand-2c8.notion.site/Product-Roadmap-e2affbbbb31f42bd94bd936620a1bc3e', 'Product Roadmap '],
          ['https://join.slack.com/t/lasca-community/shared_invite/zt-yak1v48g-Mnkip3BAVFYCMuRS6k_exA', 'Contact support '],
          ['https://join.slack.com/t/lasca-community/shared_invite/zt-yak1v48g-Mnkip3BAVFYCMuRS6k_exA', 'Feedback & bugs '],
          ['https://forms.gle/ne3nzEgYMnttRAeZ9', 'Join feedback interview ']
        ]
      }
    ],
    searchPlaceholder: 'Search...',
    smoothScroll: true
  }
}