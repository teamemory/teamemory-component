# @teamemory/components

一个基于 Vue3、Element Plus 和 emotion 的现代化组件库。

## 特性

- 🔥 基于 Vue3 Composition API
- 🎨 使用 Element Plus 设计风格
- 💄 使用 emotion 进行样式管理
- 📦 支持 Tree Shaking
- 🌐 支持国际化
- 🛡️ 完整的 TypeScript 类型定义
- ✅ 包含丰富的常用组件和 Hooks

## 安装

```bash
npm install @teamemory/components
```

## 快速开始

```ts
import { createApp } from 'vue'
import App from './App.vue'
import TeamemoryComponents from '@teamemory/components'
import '@teamemory/components/dist/style.css'

const app = createApp(App)

app.use(TeamemoryComponents)
app.mount('#app')
```

## 文档

访问 [https://teamemory-components.netlify.app](https://teamemory-components.netlify.app) 查看完整文档。

## 开发

```bash
# 克隆项目
git clone <your-repo-url>

# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建组件库
npm run build

# 构建文档
npm run docs:dev
```

## 创建新组件

使用 CLI 工具快速创建新组件：

```bash
npm run new create
```

## 贡献

欢迎提交 Issue 和 Pull Request！

## 许可证

MIT
