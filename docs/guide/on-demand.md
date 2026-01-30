# 按需引入

Teamemory Components 支持两种引入方式：完整引入和按需引入。

## 完整引入

引入完整的组件库，一次性注册所有组件。

```js
import { createApp } from 'vue';
import App from './App.vue';
import TeamemoryComponents from '@teamemory/components';

const app = createApp(App);
app.use(TeamemoryComponents);
app.mount('#app');
```

使用完整引入后，可以在模板中直接使用所有组件：

```jsx
<template>
  <div>
    <tm-button type="primary">主要按钮</tm-button>
    <tm-card header="卡片标题">
      卡片内容
    </tm-card>
  </div>
</template>
```

## 按需引入

只引入需要的组件，减少打包体积。

### 方式一：直接引入组件

```jsx
import { TmButton, TmCard } from '@teamemory/components';

export default {
  components: {
    TmButton,
    TmCard
  }
}
```

### 方式二：在 JSX 中使用

```jsx
import { TmButton, TmCard } from '@teamemory/components';

export default {
  setup() {
    return () => (
      <div>
        <tm-button type="primary">主要按钮</tm-button>
        <tm-card header="卡片标题">
          卡片内容
        </tm-card>
      </div>
    );
  }
};
```

## Tree Shaking

本组件库支持 ES Module 格式，配合打包工具（如 Vite、Webpack）可以自动进行 Tree Shaking，只打包实际使用的代码。

**推荐使用按需引入的方式**，以获得最佳的打包体积。

## 引入 Hooks

Hooks 的引入方式与组件类似：

```jsx
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

## TypeScript 支持

组件库提供完整的 TypeScript 类型定义，在 TypeScript 项目中使用时，会自动获得类型提示：

```ts
import { TmButton, TmCard } from '@teamemory/components';
import { useCounter } from '@teamemory/components';

// 类型自动推断，无需手动声明
const { count, increment } = useCounter(0);
```
