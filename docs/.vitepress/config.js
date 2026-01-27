module.exports = {
  title: 'Teamemory Components',
  description: '基于 Vue3 + Element Plus 的组件库',
  base: '/teamemory-components/',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide/' },
      { text: '组件', link: '/components/' }
    ],
    sidebar: {
      '/guide/': [
        {
          text: '简介',
          items: [
            { text: '什么是 Teamemory Components', link: '/guide/' },
            { text: '快速开始', link: '/guide/getting-started' },
            { text: '如何使用', link: '/guide/how-to-use' }
          ]
        }
      ],
      '/components/': [
        {
          text: '通用',
          items: [
            { text: 'Button 按钮', link: '/components/button' },
            { text: 'Card 卡片', link: '/components/card' }
          ]
        },
        {
          text: 'Hooks',
          items: [
            { text: 'useCounter', link: '/components/use-counter' },
            { text: 'useLocale', link: '/components/use-locale' }
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/teamemory/components' }
    ]
  }
};