module.exports = {
  title: 'Lasca Documentation',
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
      }
    ],
    searchPlaceholder: 'Search...',
    smoothScroll: true
  }
}