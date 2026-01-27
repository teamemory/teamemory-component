# @teamemory/components

基于 Vue3 + Element Plus 的组件库，使用 Emotion CSS-in-JS 实现动态样式。

## 特性

- 🚀 基于 Vue3 Composition API
- 💡 使用 Emotion 实现 CSS-in-JS，避免样式冲突
- 📦 支持 Tree Shaking，按需引入，减小打包体积
- 🔌 提供常用 UI 组件和实用 Hooks
- 🌐 支持国际化（i18n）
- ✨ 完整的 TypeScript 类型定义
- 📚 详细的文档和示例

## 安装

使用 npm:

```bash
npm install @teamemory/components
```

使用 yarn:

```bash
yarn add @teamemory/components
```

## 快速上手

### 完整引入

```js
import { createApp } from 'vue';
import App from './App.vue';
import TeamemoryComponents from '@teamemory/components';
import 'element-plus/dist/index.css';

const app = createApp(App);
app.use(TeamemoryComponents);
app.mount('#app');
```

### 按需引入

```js
import { createApp } from 'vue';
import { TmButton, TmCard } from '@teamemory/components';
import App from './App.vue';
import 'element-plus/dist/index.css';

const app = createApp(App);
app.component('TmButton', TmButton);
app.component('TmCard', TmCard);
app.mount('#app');
```

## 使用示例

### 组件使用

```vue
<template>
  <div>
    <tm-button type="primary" @click="handleClick">点击我</tm-button>
    <tm-card header="卡片标题">
      这是一个卡片内容
    </tm-card>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { TmButton, TmCard } from '@teamemory/components';

export default defineComponent({
  components: {
    TmButton,
    TmCard
  },
  setup() {
    const handleClick = () => {
      console.log('按钮被点击了');
    };
    
    return {
      handleClick
    };
  }
});
</script>
```

### Hook 使用

```vue
<template>
  <div>
    <p>计数: {{ count }}</p>
    <p>双倍: {{ double }}</p>
    <button @click="increment">增加</button>
    <button @click="decrement">减少</button>
  </div>
</template>

<script>
import { useCounter } from '@teamemory/components';

export default {
  setup() {
    const { count, increment, decrement, double } = useCounter(0);
    
    return {
      count,
      increment,
      decrement,
      double
    };
  }
};
</script>
```

## 开发

### 项目结构

```
├── src/                    # 组件库源码
│   ├── components/         # 组件
│   │   ├── button/
│   │   └── card/
│   ├── hooks/              # Vue Hooks
│   │   ├── useCounter.js
│   │   └── useLocale.js
│   └── index.js            # 组件库入口
├── examples/               # 示例项目
├── docs/                   # 文档网站
├── scripts/                # 脚本工具
│   └── cli.js              # CLI 工具
└── rollup.config.mjs       # 构建配置
```

### 命令

- `npm run dev` - 启动开发服务器，预览示例
- `npm run docs:dev` - 启动文档开发服务器
- `npm run build` - 构建组件库
- `npm run new` - 创建新组件或 Hook
- `npm run test` - 运行测试

### 创建新组件

你可以使用 CLI 工具快速创建新组件：

```bash
npm run new
```

或者直接指定组件名称：

```bash
npm run new create MyComponent
```

创建 Hook：

```bash
npm run new create MyHook
```

## 贡献

我们欢迎任何形式的贡献！如果你有任何想法或发现问题，请提交 Issue 或 Pull Request。

## License

MIT