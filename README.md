# @teamemory/components

基于 Vue3 + Element Plus + Emotion 的现代化组件库

## 特性

- 🚀 **现代化技术栈**: 基于 Vue 3 Composition API、Vite 构建工具和 Emotion 样式管理
- 🎨 **美观设计**: 基于 Element Plus 的设计规范，提供现代化的 UI 组件
- 🧩 **模块化**: 支持 Tree Shaking，可按需引入组件，减小打包体积
- 🔧 **类型安全**: 提供完整的 TypeScript 类型定义
- 💡 **实用 Hooks**: 提供一系列实用的 Composition API Hooks
- 🌍 **国际化**: 内置 i18n 支持，轻松实现多语言

## 安装

```bash
# 使用 npm
npm install @teamemory/components

# 使用 yarn
yarn add @teamemory/components

# 使用 pnpm
pnpm add @teamemory/components
```

## 快速开始

### 完整引入

```javascript
import { createApp } from 'vue';
import App from './App.vue';
import TeamemoryComponents from '@teamemory/components';
import 'element-plus/dist/index.css';

const app = createApp(App);
app.use(TeamemoryComponents);
app.mount('#app');
```

### 按需引入

```javascript
import { createApp } from 'vue';
import App from './App.vue';
import { TmButton, TmCard, useCounter } from '@teamemory/components';
import 'element-plus/dist/index.css';

const app = createApp(App);
app.component('TmButton', TmButton);
app.component('TmCard', TmCard);
app.mount('#app');
```

## 使用组件

```vue
<template>
  <div>
    <tm-button type="primary" @click="handleClick">点击我</tm-button>
    <tm-card header="标题">
      <p>这是一个卡片内容</p>
    </tm-card>
  </div>
</template>

<script>
export default {
  setup() {
    const handleClick = () => {
      console.log('按钮被点击了！');
    };
    
    return {
      handleClick
    };
  }
};
</script>
```

## 使用 Hooks

```vue
<template>
  <div>
    <p>计数: {{ count }}</p>
    <p>双倍计数: {{ doubleCount }}</p>
    <button @click="increment">增加</button>
    <button @click="decrement">减少</button>
    <button @click="reset">重置</button>
  </div>
</template>

<script>
import { useCounter } from '@teamemory/components';

export default {
  setup() {
    const { count, increment, decrement, reset, doubleCount } = useCounter(0);
    
    return {
      count,
      increment,
      decrement,
      reset,
      doubleCount
    };
  }
};
</script>
```

## 开发

### 启动示例项目

```bash
npm run dev
```

### 构建组件库

```bash
npm run build
```

### 启动文档

```bash
npm run docs:dev
```

### 创建新组件

```bash
npm run new create MyComponent
```

### 创建新 Hook

```bash
npm run new create-hook myHook
```

## 浏览器支持

支持所有现代浏览器。

## LICENSE

MIT