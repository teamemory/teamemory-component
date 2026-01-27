# 快速开始

本节将引导您快速安装并使用 Teamemory Components。

## 安装

您可以使用 npm 或 yarn 来安装 Teamemory Components：

```bash
# 使用 npm
npm install @teamemory/components

# 使用 yarn
yarn add @teamemory/components

# 使用 pnpm
pnpm add @teamemory/components
```

## 完整引入

如果您需要使用多个 Teamemory 组件，可以在项目入口文件中完整引入：

```javascript
// main.js
import { createApp } from 'vue';
import App from './App.vue';
import TeamemoryComponents from '@teamemory/components';
import 'element-plus/dist/index.css';

const app = createApp(App);
app.use(TeamemoryComponents);
app.mount('#app');
```

## 按需引入

如果您只使用部分组件，可以按需引入以减小打包体积：

```javascript
// main.js
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

在您的 Vue 组件中，可以直接使用 Teamemory 组件：

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
  name: 'MyComponent',
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

Teamemory Components 提供了一些实用的 Hooks：

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

## CDN 使用方式

如果您的项目不需要构建步骤，也可以通过 CDN 引入：

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Teamemory Components 示例</title>
  <!-- 引入 Vue -->
  <script src="https://unpkg.com/vue@3"></script>
  <!-- 引入 Element Plus -->
  <link rel="stylesheet" href="https://unpkg.com/element-plus/dist/index.css">
  <script src="https://unpkg.com/element-plus"></script>
  <!-- 引入 Teamemory Components -->
  <script src="https://unpkg.com/@teamemory/components/dist/teamemory-components.umd.js"></script>
</head>
<body>
  <div id="app">
    <tm-button type="primary">{{ message }}</tm-button>
  </div>
  <script>
    const { createApp } = Vue;
    
    const App = {
      setup() {
        const message = Vue.ref('Hello Teamemory!');
        return { message };
      },
      template: `
        <tm-button type="primary">{{ message }}</tm-button>
      `
    };
    
    const app = createApp(App);
    app.use(window.TeamemoryComponents);
    app.mount('#app');
  </script>
</body>
</html>
```

恭喜！您已经完成了 Teamemory Components 的快速入门。接下来可以查阅具体的组件文档，了解各个组件的详细用法。