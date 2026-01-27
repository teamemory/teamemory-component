# @teamemory/components 项目结构说明

## 项目概览

这是一个基于 Vue3 + Vite + Element Plus + JSX 的组件库项目，使用 @emotion/css 作为样式解决方案。项目支持 Tree Shaking，便于发布到 npm，并包含完善的文档和 CLI 工具。

## 目录结构

```
@teamemory/components/
├── docs/                     # 文档网站 (VitePress)
│   ├── .vitepress/           # VitePress 配置
│   │   └── config.js         # 文档网站配置
│   ├── components/           # 组件文档
│   │   ├── button.md         # 按钮组件文档
│   │   └── card.md           # 卡片组件文档
│   ├── hooks/                # Hook 文档
│   │   ├── useCounter.md     # useCounter Hook 文档
│   │   └── useLocale.md      # useLocale Hook 文档
│   ├── guide/                # 使用指南
│   │   └── index.md          # 快速上手文档
│   └── index.md              # 文档首页
├── examples/                 # 示例应用
│   ├── App.vue               # 示例应用主页面
│   ├── main.js               # 示例应用入口
│   └── index.html            # 示例应用 HTML 模板
├── scripts/                  # 脚本工具
│   └── cli.js                # CLI 工具 (创建新组件/Hook)
├── src/                      # 组件库源代码
│   ├── components/           # 组件目录
│   │   ├── button/           # 按钮组件
│   │   │   └── index.jsx     # 按钮组件实现
│   │   └── card/             # 卡片组件
│   │       └── index.jsx     # 卡片组件实现
│   ├── hooks/                # Vue Hooks
│   │   ├── useCounter.js     # 计数器 Hook
│   │   └── useLocale.js      # 国际化 Hook
│   └── index.js              # 组件库入口文件
├── package.json              # 项目配置文件
├── vite.config.js            # Vite 配置文件
├── rollup.config.mjs         # Rollup 构建配置
├── tsconfig.json             # TypeScript 配置 (用于 JSX 支持)
├── tsconfig.node.json        # Node 版本 TS 配置
├── .babelrc                  # Babel 配置 (用于 emotion)
├── .eslintrc.js              # ESLint 配置
├── .gitignore                # Git 忽略文件配置
├── README.md                 # 项目说明文档
└── PROJECT_STRUCTURE.md      # 本项目结构说明
```

## 主要功能

### 1. 组件库

- **TmButton**: 按钮组件，支持多种类型、尺寸和状态
- **TmCard**: 卡片组件，支持标题和自定义内容

### 2. Hooks

- **useCounter**: 计数器 Hook，提供增减重置和计算属性
- **useLocale**: 国际化 Hook，支持多语言切换和自定义语言包

### 3. CLI 工具

提供命令行工具快速创建新组件或 Hook：

```bash
# 交互式创建
npm run new

# 直接创建组件
npm run new create MyComponent

# 直接创建 Hook
npm run new create MyHook
```

### 4. 文档系统

使用 VitePress 构建文档网站，包含：

- 组件文档
- Hook 文档
- 使用指南

## 开发命令

- `npm run dev`: 启动示例应用开发服务器
- `npm run docs:dev`: 启动文档开发服务器
- `npm run build`: 构建组件库
- `npm run docs:build`: 构建文档
- `npm run new`: 创建新组件或 Hook
- `npm run test`: 运行测试

## 样式方案

使用 @emotion/css 实现 CSS-in-JS，优势包括：

- 避免全局样式污染
- 支持动态样式
- 自动处理浏览器兼容性
- 更好的组件封装性

## 发布到 npm

项目配置了预发布脚本，执行 `npm publish` 会自动构建项目后再发布。