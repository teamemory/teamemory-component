export default {
  title: 'Teamemory Components',
  description: '基于 Vue3 + Element Plus 的组件库',
  base: '/teamemory-components/',
  themeConfig: {
    nav: [
      { text: '指南', link: '/guide/' },
      { text: '组件', link: '/components/button' },
      { text: 'Hooks', link: '/hooks/useCounter' }
    ],
    sidebar: {
      '/guide/': [
        {
          text: '指南',
          items: [
            { text: '快速上手', link: '/guide/' }
          ]
        }
      ],
      '/components/': [
        {
          text: '组件',
          items: [
            { text: '按钮 (TmButton)', link: '/components/button' },
            { text: '卡片 (TmCard)', link: '/components/card' }
          ]
        }
      ],
      '/hooks/': [
        {
          text: 'Hooks',
          items: [
            { text: 'useCounter', link: '/hooks/useCounter' },
            { text: 'useLocale', link: '/hooks/useLocale' }
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/teamemory/components' }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present Teamemory'
    }
  }
};