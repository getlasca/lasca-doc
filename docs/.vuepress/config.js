module.exports = {
  title: 'Lasca Documentation',
  description: 'No more front-end coding by integrating Figma with React/vue.js/webpack',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  themeConfig: {
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
          '/development/install'
        ]
      }
    ],
    searchPlaceholder: 'Search...',
    smoothScroll: true
  }
}