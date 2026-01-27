# 快速上手

本节将引导您快速上手使用 Teamemory Components 组件库。

## 安装

使用 npm 安装：

```bash
npm install @teamemory/components
```

或者使用 yarn：

```bash
yarn add @teamemory/components
```

## 引入组件库

### 方式一：完整引入

在您的 Vue 应用中完整引入组件库：

```js
import { createApp } from 'vue';
import App from './App.vue';
import TeamemoryComponents from '@teamemory/components';
import 'element-plus/dist/index.css';

const app = createApp(App);
app.use(TeamemoryComponents);
app.mount('#app');
```

### 方式二：按需引入

如果您只使用部分组件，可以按需引入：

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

## 使用组件

### TmButton 按钮组件

```vue
<template>
  <div>
    <tm-button>默认按钮</tm-button>
    <tm-button type="primary">主要按钮</tm-button>
    <tm-button type="success">成功按钮</tm-button>
    <tm-button type="warning">警告按钮</tm-button>
    <tm-button type="danger">危险按钮</tm-button>
  </div>
</template>
```

### TmCard 卡片组件

```vue
<template>
  <tm-card header="卡片标题">
    这是一个简单的卡片示例
  </tm-card>
</template>
```

## 使用 Hooks

### useCounter 计数器 Hook

```vue
<template>
  <div>
    <p>计数器值: {{ count }}</p>
    <p>双倍值: {{ double }}</p>
    <button @click="increment">增加</button>
    <button @click="decrement">减少</button>
    <button @click="reset">重置</button>
  </div>
</template>

<script>
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
</script>
```

## 下一步

了解更多关于组件和 Hook 的详细信息，请参阅各个组件的文档页面。