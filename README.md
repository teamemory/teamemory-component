# Teamemory Components

一个基于 Vue3 + Vite + Emotion CSS 的现代化组件库，具有以下特点：

- 使用 Vue3 Composition API
- 支持 JSX 语法
- 使用 Emotion CSS 实现动态样式管理
- 支持 Tree Shaking
- 提供常用 Hooks

## 技术栈

- Vue 3.3.4
- Vite 4.3.9
- Emotion CSS 11.11.0
- Element Plus 2.3.6

## 快速开始

### 安装

```bash
npm install @teamemory/components
```

### 使用

```js
import { createApp } from 'vue';
import App from './App.vue';
import TeamemoryComponents from '@teamemory/components';

const app = createApp(App);
app.use(TeamemoryComponents);
app.mount('#app');
```

或者按需引入组件：

```js
import { TmButton, TmCard } from '@teamemory/components';

export default {
  components: {
    TmButton,
    TmCard
  }
}
```

### 使用 Hook

```js
import { useCounter } from '@teamemory/components';

export default {
  setup() {
    const { count, increment, decrement, reset, double } = useCounter(0);
    
    return {
      count,
      increment,
      decrement,
      reset,
      double
    };
  }
};
```

## 开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建组件库
npm run build
```

## 已实现组件

- [x] Button (TmButton) - 按钮组件
- [x] Card (TmCard) - 卡片组件

## 已实现 Hook

- [x] useCounter - 计数器 Hook

## License

MIT