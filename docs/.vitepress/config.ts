import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Teamemory Components',
  description: 'Vue3组件库文档',
  
  themeConfig: {
    nav: [
      { text: '指南', link: '/guide/getting-started' },
      { text: '组件', link: '/components/button' },
      { text: 'Hooks', link: '/hooks/use-counter' }
    ],
    
    sidebar: {
      '/guide/': [
        {
          text: '开始',
          items: [
            { text: '快速开始', link: '/guide/getting-started' },
            { text: '安装', link: '/guide/installation' },
            { text: '贡献指南', link: '/guide/contributing' }
          ]
        }
      ],
      '/components/': [
        {
          text: '通用组件',
          items: [
            { text: 'Button 按钮', link: '/components/button' },
            { text: 'Card 卡片', link: '/components/card' }
          ]
        }
      ],
      '/hooks/': [
        {
          text: '常用 Hooks',
          items: [
            { text: 'useCounter', link: '/hooks/use-counter' },
            { text: 'useLocale', link: '/hooks/use-locale' }
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
})